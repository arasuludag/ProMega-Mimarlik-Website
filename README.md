# Promega Mimarlık — Website

Modern, content-editable site for Promega Mimarlık. **Astro** (static export) on the
front end, **Sanity** as the CMS, deployed as static files to a **cPanel** server.

The site is fully prerendered at build time — visitors never touch Sanity, and all
images are optimized into `dist/_astro` and served from cPanel. When the client
publishes an edit in Sanity, a webhook triggers a GitHub Actions build that
re-deploys to cPanel automatically (~1–2 min to go live).

```
.
├── src/                     Astro site (pages, components, layouts, lib)
├── studio/                  Sanity Studio (separate package, hosted on *.sanity.studio)
├── scripts/migrate.mjs      One-time import of the old site's content into Sanity
└── .github/workflows/       Build + FTP deploy to cPanel
```

## Pages
Anasayfa (`/`), Projeler (`/projeler` + `/projeler/[slug]`), Hakkımızda
(`/hakkimizda`), Hizmetler (`/hizmetler`), Ekip (`/ekip`), İletişim (`/iletisim`).

---

## 1. Create the Sanity project

```sh
cd studio
npx sanity login          # log in (Google/GitHub/email)
npx sanity init --env     # create a project + 'production' dataset; writes .env
```

`sanity init` will offer to reuse an existing project or create a new one and writes
`studio/.env` with `SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET`.
Note the **project ID** — you need it below.

In **sanity.io/manage → API → CORS origins**, add `http://localhost:4321` and your
production domain (the Studio reads/writes; the public site only reads a public
dataset, but adding the origins avoids surprises). Keep the dataset **public**.

## 2. Configure environment

Front end (repo root): copy `.env.example` → `.env`

```
PUBLIC_SANITY_PROJECT_ID="your_project_id"
PUBLIC_SANITY_DATASET="production"
SANITY_WRITE_TOKEN=""          # only for the migration in step 3
```

Studio: copy `studio/.env.example` → `studio/.env` (or let `sanity init` create it).

## 3. Migrate the old content (one-time)

Create an **Editor** token at sanity.io/manage → API → Tokens, put it in
`.env` as `SANITY_WRITE_TOKEN`, then:

```sh
npm install
npm run migrate
```

This imports the 22 projects (titles, locations, images), 3 team bios + photos, the
About page, hero slides, and contact info. New per-project **year** and
**description** fields start empty for the client to fill in. Safe to re-run
(deterministic IDs; Sanity de-dupes identical images).

> Tip: run it against a throwaway dataset first if you want to inspect before
> committing to `production`.

## 4. Local development

```sh
# Terminal 1 — Sanity Studio at http://localhost:3333
cd studio && npm run dev

# Terminal 2 — Astro site at http://localhost:4321
npm run dev
```

`npm run build && npm run preview` builds the static site and serves `dist/`.

## 5. Deploy the Studio (where the client edits)

```sh
cd studio
npm run deploy            # pick a hostname, e.g. promega -> https://promega.sanity.studio
```

Invite the client at sanity.io/manage → Members so they can log in and edit.

## 6. Deploy the site to cPanel (GitHub Actions → FTP)

Add these in **GitHub repo → Settings → Secrets and variables → Actions**:

| Secret | Value |
| --- | --- |
| `PUBLIC_SANITY_PROJECT_ID` | your Sanity project ID |
| `FTP_SERVER` | cPanel FTP host (e.g. `ftp.promegamimarlik.com`) |
| `FTP_USERNAME` | cPanel FTP user |
| `FTP_PASSWORD` | cPanel FTP password |
| `FTP_SERVER_DIR` | target dir incl. trailing slash, e.g. `/public_html/` |

(Optional repo **variable** `PUBLIC_SANITY_DATASET`, defaults to `production`.)

Push to `main` (or run the workflow manually) → it builds and uploads `dist/` to
cPanel. For a dry run, point `FTP_SERVER_DIR` at a staging subdir like
`/public_html/staging/` first.

## 7. Auto-publish: Sanity → GitHub webhook

So the client's "Publish" rebuilds the site:

1. Create a fine-grained GitHub **Personal Access Token** with `repo` (contents +
   metadata, and "Dispatch" / Actions) scope for this repository.
2. sanity.io/manage → **API → Webhooks → Create webhook**:
   - **URL**: `https://api.github.com/repos/arasuludag/<repo>/dispatches`
   - **Trigger on**: Create, Update, Delete · **Dataset**: production
   - **HTTP method**: POST
   - **HTTP headers**:
     - `Authorization: Bearer <your_PAT>`
     - `Accept: application/vnd.github+json`
   - **Projection / body**: `{ "event_type": "sanity-publish" }`

Now publishing in the Studio dispatches `sanity-publish`, which the workflow listens
for and redeploys.

---

## Notes
- **Hizmetler (Services)** has no legacy content — add items in the Studio.
- The homepage **Referanslar** logo carousel is driven by the "Referans Logoları"
  documents — the client uploads/edits logos there.
- Theme `#1B1B1B`, Roboto Thin. Images: never commit large originals to the repo;
  they live in Sanity and are optimized at build.
