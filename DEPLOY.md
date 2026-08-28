# Deploy to Coolify

Static Vite + React SPA. Build artifacts are already in `dist/`. Two options:

## Option A — Dockerfile (recommended)

The repo contains a multi-stage `Dockerfile` that builds with Node and serves with nginx (port 80), so Coolify just needs to run it as a generic container.

In the Coolify UI:

1. **Projects → DevEnv → + New Resource → Application**
2. **Build Pack: Dockerfile**
3. **Source: Git Repository** — push this folder to a Git repo first (any host Coolify can reach), then paste the URL.
   - If you can't use git, skip to **Option B**.
4. **Base Directory:** leave blank (root).
5. **Port: 80** — Coolify auto-detects the EXPOSE.
6. **Healthcheck Path: `/`** — already configured in the Dockerfile.
7. Click **Deploy**. Coolify will run `docker build` (which runs `npm ci && vite build`) and start nginx serving `dist/`.
8. Add a **Domain** (e.g. `marc.whatsupmind.com`) on the application's "Domains" tab if you want HTTPS via Coolify's automatic Caddy/Traefik.

No environment variables or secrets are required.

## Option B — Build image locally, push to registry

If you can't expose a git repo:

```bash
docker build -t ghcr.io/YOUR_USER/marc-profile:latest .
docker push ghcr.io/YOUR_USER/marc-profile:latest
```

Then in Coolify:

1. **+ New Resource → Application**
2. **Build Pack: Docker Image**
3. **Image Name:** `ghcr.io/YOUR_USER/marc-profile:latest`
4. **Port: 80**, deploy.

## What was prepared

- `Dockerfile` — multi-stage (node:20-alpine → nginx:1.27-alpine)
- `nginx.conf` — SPA fallback to `index.html`, gzip, 1-year cache for `/assets/` and `/fonts/`
- `.dockerignore` — keeps `node_modules` and `dist` out of build context
- `dist/` — already built (`index.html`, `assets/index-*.{js,css}`, `fonts/`, `marc.jpg`, `favicon.svg`)

## Verify locally before pushing:

```bash
docker build -t marc-profile:test .
docker run --rm -p 8080:80 marc-profile:test
# open http://localhost:8080
```

## Coolify specifics

- The existing infrastructure (`get_infrastructure_overview`) shows: 1 server (`localhost`), 1 project (`DevEnv`), with 2 running apps already. Add this one to the same project.
- The Coolify MCP available here is read-only — I can't trigger the deploy from chat. The above are the steps to run in the Coolify UI.