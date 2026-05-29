import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { client } from './sanity';

const builder = createImageUrlBuilder(client);

/**
 * Build a Sanity image URL. Use this to feed Astro's <Image> at build time —
 * Astro downloads & optimizes the result into dist/_astro, so the live site
 * serves images from cPanel rather than the Sanity CDN.
 */
export function urlFor(source: ImageWithMeta) {
  return builder.image(source as unknown as SanityImageSource);
}

/** Shape we project for every image (asset URL + metadata for sizing/blur). */
export interface ImageWithMeta {
  _type?: 'image';
  alt?: string;
  asset?: {
    _ref?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: { width: number; height: number; aspectRatio: number };
    };
  };
}
