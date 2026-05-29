import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const hasSanity = Boolean(projectId);

if (!hasSanity) {
  // Don't hard-crash: let the site build empty so `npm run dev` works before .env
  // is set. Queries guard on `hasSanity` and return empties. Configure the project
  // ID before deploying (see README).
  console.warn(
    '[sanity] PUBLIC_SANITY_PROJECT_ID is not set — building with empty content. ' +
      'Copy .env.example to .env and fill it in.',
  );
}

export const client: SanityClient = createClient({
  // 'placeholder' is a format-valid id used only so createClient doesn't throw when
  // unconfigured; no requests are made because queries short-circuit on hasSanity.
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-10-01',
  // Build-time reads of a public dataset — CDN is fine and faster.
  useCdn: true,
});

export { projectId, dataset };
