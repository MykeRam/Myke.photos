# Myke.photos

Myke.photos is a photography-first portfolio and publishing platform for Myke's visual work. It is intentionally separate from Myke.NYC so the photography can have its own identity, editorial voice, and room to grow into a focused creative business.

**Website and canonical domain:** [myke.photos](https://myke.photos)

The public experience is designed to feel minimal, quiet, and image-led: one strong opening photograph, an immediate flow into selected work, restrained typography, and very little interface competing with the images.

## Launch scope

The first public release will include:

- **Portfolio** — a curated selection of finished photographs
- **About** — a short introduction to Myke and the work
- **Contact** — a simple way to inquire about commissions or collaborations

The architecture also anticipates **Projects/Series**, **Prints**, and **Bookings**, but those areas will remain hidden until they have real content and a complete user experience. They should not appear as empty navigation items or placeholder pages at launch.

## Tech stack

### Frontend: Astro and TypeScript

Astro powers the public website. It is a good fit for a photography portfolio because it produces fast, mostly static pages and ships very little JavaScript by default. TypeScript provides safer content models and clearer boundaries as the frontend grows.

The frontend is responsible for:

- The public portfolio and editorial presentation
- Responsive image markup and accessible alternative text
- About and contact experiences
- Search and social metadata
- Fetching published content from the API when the CMS is connected

The likely initial host is **Vercel**.

### Backend: Go

The Go service will provide the API and power the future private admin/CMS. Go keeps the backend small, fast, strongly typed, and straightforward to deploy as a single service.

The backend will eventually handle:

- Admin authentication and authorization
- Creating and editing photos, galleries, and series
- Validating metadata and publication state
- Issuing signed image-upload URLs
- Coordinating responsive image processing
- Returning published portfolio data to Astro

The initial deployment target is **Railway**, with a public address such as `api.myke.photos` later.

### Database: PostgreSQL

PostgreSQL will store structured content and application state, including photo metadata, gallery relationships, display order, publication status, and admin accounts. A managed provider such as **Neon** or **Railway Postgres** can be used initially.

Image files do not belong in PostgreSQL. The database stores their metadata and object keys instead.

### Image storage: Cloudflare R2-compatible object storage

Finished photographs and their responsive derivatives will be stored in object storage. The current direction is **Cloudflare R2**, which offers an S3-compatible API and is well suited to serving large image assets.

The intended upload flow is:

```text
Admin selects image
        ↓
Go API creates a signed upload URL
        ↓
Original uploads directly to object storage
        ↓
Responsive derivatives are generated
        ↓
Metadata is saved in PostgreSQL
        ↓
Photo becomes publishable when all required assets exist
```

Keeping image processing outside the normal API request avoids long requests and partially published photographs.

## Architecture

```text
Public visitor
      ↓
Astro frontend on Vercel
      ↓
Go API on Railway
   ↙          ↘
PostgreSQL    Cloudflare R2
metadata      image files
```

Astro owns presentation. Go owns application rules and content mutations. PostgreSQL owns structured data. Object storage owns image files. This separation keeps each part replaceable and prevents hosting-provider details from leaking into the user interface.

More detail is available in [docs/architecture.md](docs/architecture.md).

## Repository structure

```text
myke-photos/
├── frontend/               # Astro public website
│   ├── public/images/      # Temporary local image assets
│   └── src/
│       ├── data/           # Typed starter content
│       ├── layouts/        # Shared page structure
│       └── pages/          # Public routes
├── backend/                # Go API service
│   ├── go.mod
│   └── main.go
├── docs/
│   └── architecture.md     # Architecture and launch decisions
└── README.md
```

## Current status

The repository currently contains:

- An editorial homepage prototype
- Temporary abstract image placeholders
- Typed starter portfolio content
- A minimal Go HTTP service
- `GET /health` for service health checks
- `GET /api/v1/photos` as the initial content API boundary
- Architecture and launch-scope documentation

The frontend still uses local starter data. PostgreSQL, R2, authentication, the admin interface, and production deployment are not connected yet.

## Local development

### Requirements

- Node.js and npm
- Go 1.22 or newer

### Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Astro will print the local site address when it starts, normally `http://localhost:4321`.

Other frontend commands:

```bash
npm run check
npm run build
npm run preview
```

### Run the backend

In a separate terminal:

```bash
cd backend
go run .
```

The API listens on `http://localhost:8080`.

```bash
curl http://localhost:8080/health
curl http://localhost:8080/api/v1/photos
```

Check the backend before committing changes:

```bash
go test ./...
go vet ./...
```

## Configuration

As external services are connected, configuration will be supplied through environment variables. Expected settings include:

```text
PUBLIC_API_URL
DATABASE_URL
R2_ACCOUNT_ID
R2_BUCKET_NAME
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
SESSION_SECRET
```

Real credentials must never be committed to the repository. Local examples should use an ignored `.env` file and a committed `.env.example` containing placeholder values only.

## Planned phases

1. Replace placeholder artwork with a small, deliberate set of real photographs.
2. Refine the responsive portfolio layout, accessibility, and image behavior.
3. Define the PostgreSQL schema and database migrations.
4. Connect the Go API to PostgreSQL and R2.
5. Build the private admin workflow for uploads, metadata, ordering, and publishing.
6. Deploy the public site and API, then connect the Myke.photos domain.
7. Introduce Projects/Series, Prints, or Bookings only when each feature has content and operational support.

## Product principles

- Photography remains the focus; interface elements stay restrained.
- The homepage should reach meaningful work immediately.
- Only complete, useful sections appear in public navigation.
- Images are responsive, accessible, and treated as first-class content.
- Publishing is explicit: drafts never become public accidentally.
- Infrastructure choices should remain replaceable as the project grows.

## License and image rights

Source-code licensing has not yet been selected. All photography and visual work are copyright Myke unless explicitly stated otherwise. Do not reuse or redistribute image assets without permission.
