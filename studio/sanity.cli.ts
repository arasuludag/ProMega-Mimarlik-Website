import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  // The Studio is hosted free at https://<name>.sanity.studio via `npm run deploy`.
  deployment: { autoUpdates: true },
});
