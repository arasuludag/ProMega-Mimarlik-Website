import { client, hasSanity } from './sanity';
import type { ImageWithMeta } from './image';

/**
 * Run a GROQ query, returning `fallback` if Sanity is unconfigured or the request
 * fails — so a transient hiccup or missing .env never crashes the whole build.
 */
async function safeFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
): Promise<T> {
  if (!hasSanity) return fallback;
  try {
    const result = await client.fetch<T>(query, params);
    return (result ?? fallback) as T;
  } catch (err) {
    console.warn('[sanity] query failed, using fallback:', (err as Error).message);
    return fallback;
  }
}

// Reusable projection: keep the image object (asset ref + crop/hotspot for urlFor)
// and pull metadata (dimensions + lqip blur placeholder) for sizing.
const IMG = `{
  _type,
  alt,
  ...,
  asset->{ _ref, url, metadata { lqip, dimensions } }
}`;

/* ----------------------------- Types ----------------------------- */

export interface SiteSettings {
  logo?: ImageWithMeta;
  sloganLines?: string[];
  heroImages?: ImageWithMeta[];
  contact?: { email?: string; phone?: string; address?: string };
  social?: { facebook?: string; instagram?: string; youtube?: string };
  footerText?: string;
  seo?: { title?: string; description?: string };
}

export interface PortableBlock {
  _type: string;
  [key: string]: unknown;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  location?: string;
  year?: string;
  description?: PortableBlock[];
  images?: ImageWithMeta[];
  featured?: boolean;
}

export interface TeamMember {
  _id: string;
  name: string;
  slug: string;
  jobTitle?: string;
  photo?: ImageWithMeta;
  bio?: PortableBlock[];
}

export interface Service {
  _id: string;
  title: string;
  description?: PortableBlock[];
  icon?: ImageWithMeta;
}

export interface ReferenceLogo {
  _id: string;
  name: string;
  logo?: ImageWithMeta;
  link?: string;
}

export interface AboutPage {
  heading?: string;
  body?: PortableBlock[];
  images?: ImageWithMeta[];
}

/* ----------------------------- Queries ----------------------------- */

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeFetch(
    `*[_type == "siteSettings"][0]{
      logo ${IMG},
      sloganLines,
      heroImages[] ${IMG},
      contact, social, footerText, seo
    }`,
    {},
    {} as SiteSettings,
  );
}

export async function getProjects(): Promise<Project[]> {
  return safeFetch(
    `*[_type == "project"] | order(coalesce(order, 9999) asc, year desc, title asc){
      _id, title, "slug": slug.current, location, year, featured,
      images[] ${IMG}
    }`,
    {},
    [] as Project[],
  );
}

export async function getProject(slug: string): Promise<Project | null> {
  return safeFetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id, title, "slug": slug.current, location, year, description,
      images[] ${IMG}
    }`,
    { slug },
    null,
  );
}

export async function getTeam(): Promise<TeamMember[]> {
  return safeFetch(
    `*[_type == "teamMember"] | order(coalesce(order, 9999) asc){
      _id, name, "slug": slug.current, jobTitle, bio, photo ${IMG}
    }`,
    {},
    [] as TeamMember[],
  );
}

export async function getServices(): Promise<Service[]> {
  return safeFetch(
    `*[_type == "service"] | order(coalesce(order, 9999) asc){
      _id, title, description, icon ${IMG}
    }`,
    {},
    [] as Service[],
  );
}

export async function getReferenceLogos(): Promise<ReferenceLogo[]> {
  return safeFetch(
    `*[_type == "referenceLogo"] | order(coalesce(order, 9999) asc){
      _id, name, link, logo ${IMG}
    }`,
    {},
    [] as ReferenceLogo[],
  );
}

export async function getAboutPage(): Promise<AboutPage> {
  return safeFetch(
    `*[_type == "aboutPage"][0]{ heading, body, images[] ${IMG} }`,
    {},
    {} as AboutPage,
  );
}
