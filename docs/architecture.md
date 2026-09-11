# Myke.photos architecture

## Launch scope

Public navigation contains only Portfolio, About, and Contact. Projects/Series, Prints, and Bookings remain content-model capabilities, but are not linked or routable until there is real content and a clear workflow for them.

## Runtime shape

```text
Browser → Astro frontend → Go API → PostgreSQL
                           └──────→ object storage (R2)
```

Astro owns the editorial presentation and can initially render from local content. The Go API owns authentication, admin mutations, validation, image metadata, and signed upload URLs. PostgreSQL stores structured metadata; object storage stores original finished files and responsive derivatives.

## Suggested entities

- `photos`: title, slug, alt text, caption, location, taken_at, status, sort order
- `galleries`: title, slug, description, visibility, sort order
- `photo_assets`: photo id, object key, width, height, mime type, variant
- `users`: admin identity and role

The first implementation should keep image processing outside the API request path: upload the original, create a processing job, then publish only when all required derivatives exist.

## Deployment boundary

- Astro frontend: Vercel initially
- Go API: Railway initially
- PostgreSQL: managed Postgres, initially Neon or Railway Postgres
- Files: Cloudflare R2-compatible object storage

Use environment variables for API origin, database URL, object storage credentials, and session secrets. No provider-specific code should leak into the Astro components.
