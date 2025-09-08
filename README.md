# Voyage Book API

A minimal, production-ready REST API for travel posts built with **Node.js**, **Express**, and **MongoDB (Mongoose)** in **TypeScript**.  
It exposes two read-only endpoints, bootstraps seed data on first run, and follows a clean controller → router → model structure with environment-driven configuration.

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Contract](#-api-contract)
    - [Endpoints](#endpoints)
    - [Types](#types)
    - [Response Examples](#response-examples)
- [Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment](#environment)
    - [Run (Development)](#run-development)
    - [Build & Run (Production)](#build--run-production)
    - [Mongo via Docker (Optional)](#mongo-via-docker-optional)
- [Seeding](#-seeding)
- [Data Model](#-data-model)
- [Security & Reliability (Enterprise Notes)](#-security--reliability-enterprise-notes)
- [Testing (Suggested)](#-testing-suggested)
- [CI/CD (Suggested GitHub Actions)](#-cicd-suggested-github-actions)
- [Operational Tips](#-operational-tips)
- [Production Checklist](#-production-checklist)
- [Scripts (example)](#-scripts-example)
- [License](#-license)
- [Contributing](#-contributing)
- [FAQ](#faq)

---

## ✨ Features

- 🧩 **Clear layering** — `routes → controllers → models`; `config` for infra; `seeds` for data init
- ⚙️ **Typed stack** — TypeScript across app, controllers, and Mongoose models
- 🌱 **Idempotent seeding** — inserts demo posts once if the collection is empty
- 🔌 **Env-driven config** — `MONGO_CLUSTER_URI` (Atlas) or `MONGO_URI` (local); `PORT`
- 🔐 **CORS enabled** — JSON API via `express.json()` + `cors`
- 🧪 **Deterministic listing** — `GET /posts` sorted by `createdAt` (newest first)
- 🛑 **Solid error semantics** — consistent `200 / 404 / 500` with clear messages

---

## 🛠 Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express 4
- **DB/ODM:** MongoDB 6+ / Mongoose
- **Language:** TypeScript
- **Config & Middleware:** `dotenv`, `cors`

---

## 📁 Project Structure

```
src/
├─ app.ts                 # express app, middleware, base router binding
├─ server.ts              # process bootstrap, DB connect, seeding, HTTP listen
├─ config/
│  └─ mongo.ts            # mongoose connection helper
├─ controllers/
│  └─ postsController.ts  # request handlers
├─ models/
│  └─ Post.ts             # Mongoose schema & model
├─ routes/
│  └─ postsRouter.ts      # GET /posts, GET /posts/:id
└─ seeds/
   └─ postsSeed.ts        # idempotent data seeding
```

---

## 📡 API Contract

**Base URL:** `http://<host>:<port>` (default `http://localhost:5000`)

### Endpoints

- `GET /posts` → `Post[]` (sorted by `createdAt` desc)
- `GET /posts/:id` → `Post` (404 if not found)

### Types

```ts
export type Post = {
  _id?: string;             // Mongo ObjectId
  id: string;               // business ID (unique)
  title: string;
  description: string;
  imageUrl: string;
  country: string;
  price: number;
  rating: number;           // [0..5]
  createdAt?: string;       // ISO
  updatedAt?: string;       // ISO
};
```

### Response Examples

**List posts**
```bash
curl -s http://localhost:5000/posts | jq '.[0]'
```

```json
{
  "_id": "665c9f7c2a4d0d0012a3b123",
  "id": "10",
  "title": "Rio de Janeiro — The Carnival City",
  "description": "Christ the Redeemer, Copacabana, and an incredible carnival.",
  "imageUrl": "https://i.content4travel.com/seeplaces/...",
  "country": "Brazil",
  "price": 1100,
  "rating": 4.7,
  "createdAt": "2025-09-08T10:00:00.000Z",
  "updatedAt": "2025-09-08T10:00:00.000Z",
  "__v": 0
}
```

**Get by id**
```bash
curl -s http://localhost:5000/posts/4
```

```json
{
  "_id": "665c9f7c2a4d0d0012a3b456",
  "id": "4",
  "title": "Rome — The Eternal City",
  "description": "The Colosseum, the Pantheon, and the world’s best pizza.",
  "imageUrl": "https://www.italyperfect.com/g/photos/upload/...",
  "country": "Italy",
  "price": 1000,
  "rating": 4.9,
  "createdAt": "2025-09-08T10:00:00.000Z",
  "updatedAt": "2025-09-08T10:00:00.000Z",
  "__v": 0
}
```

**Errors**
- `404 Not Found` — when `id` does not exist
- `500 Internal Server Error` — DB/connectivity issues

```json
{ "message": "Post not found" }
```

```json
{ "message": "Cannot get posts", "error": { /* internal error info */ } }
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **MongoDB** (local or Atlas). You can use either:
    - `MONGO_URI` — e.g. `mongodb://localhost:27017/voyage_book`
    - `MONGO_CLUSTER_URI` — Atlas SRV connection string

### Installation
```bash
git clone https://github.com/bondyaroslav/voyage-book-backend.git.git
cd voyage-book-backend
pnpm i   # or npm i / yarn
```

### Environment
Create `.env` (or `.env.local`) with:
```ini
# .env
PORT=5000
# Use ONE of the following
MONGO_URI=mongodb://localhost:27017/voyage_book
# or Atlas (preferred in production)
MONGO_CLUSTER_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
```

> The app connects using `mongoose.connect(MONGO_CLUSTER_URI ?? MONGO_URI)` — if `MONGO_CLUSTER_URI` is set, it takes precedence.

### Run (Development)

**Option A: ts-node-dev**
```bash
pnpm dlx ts-node-dev --respawn --transpile-only src/server.ts
```

**Option B: build then run**
```bash
pnpm dlx tsc -p tsconfig.json
node dist/server.js
```

### Build & Run (Production)
```bash
pnpm build           # tsc compile → dist/
pnpm start           # node dist/server.js
```

### Mongo via Docker (Optional)

```yaml
# docker-compose.yml (example)
version: "3.9"
services:
  mongo:
    image: mongo:7
    restart: unless-stopped
    ports: [ "27017:27017" ]
    volumes:
      - mongo_data:/data/db
volumes:
  mongo_data:
```

Start:
```bash
docker compose up -d
```
Set `MONGO_URI=mongodb://localhost:27017/voyage_book` and run the app.

---

## 🌱 Seeding

On successful DB connection, `seedPosts()` runs **once**:

- Checks `Post.countDocuments()`
- If `0`, inserts 10 demo posts (Paris, Rome, Kyoto, etc.)
- Otherwise logs: _“Posts already exist, skipping seeding…”_

> **Idempotent by design** — safe to keep enabled in dev.  
> **Recommendation (prod):** gate seeding with an env flag (e.g. `SEED_DATA=true`) and guard the call in `server.ts`.

---

## 🧾 Data Model

```ts
import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema(
    {
        id: {type: String, required: true, unique: true}, // business key
        title: {type: String, required: true},
        description: {type: String, required: true},
        imageUrl: {type: String, required: true},
        country: {type: String, required: true},
        price: {type: Number, required: true},
        rating: {type: Number, required: true, min: 0, max: 5}
    },
    {timestamps: true}
);

export const Post = mongoose.model("Post", PostSchema);
```

**Indexes**
- Unique index on `id`
- Default index on `_id`

---

## 🔒 Security & Reliability (Enterprise Notes)

> The codebase is intentionally minimal. For production, add the following hardening:

- **CORS allow-list**: restrict origins in production
  ```ts
  import cors from "cors";
  app.use(cors({ origin: [/^https:\/\/(www\.)?yourdomain\.com$/], credentials: true }));
  ```
- **HTTP hardening**: `helmet`, disable `x-powered-by`
  ```ts
  import helmet from "helmet";
  app.disable("x-powered-by");
  app.use(helmet());
  ```
- **Input validation**: validate `req.params.id` with Zod/Joi before DB calls
- **Rate limiting**: `express-rate-limit` to mitigate scraping/DDoS
- **Logging**: structured logs (`pino`) with request IDs; redact secrets
- **Central error handler**: one place to translate exceptions → HTTP
- **Health endpoints**: add `/health` (liveness) & `/ready` (DB ping)
- **Env validation**: validate `.env` via `zod`/`envalid` on startup
- **Seeding guard**: run seeds only when `SEED_DATA=true`
- **Production DB**: use Atlas with least-privileged user and IP allow-list
- **Images**: serve via an image proxy or validate/whitelist image hosts

## 🧭 Operational Tips

- **Graceful shutdown**: trap `SIGTERM`/`SIGINT`, close server & Mongoose connection
- **Observability**: emit `connect/disconnect` DB events; expose version/commit hash
- **Config**: centralize and freeze config derived from env; avoid reading `process.env` ad-hoc

---

## 📋 Production Checklist

- [ ] `helmet`, strict CORS, rate limiting, input validation
- [ ] Centralized error handler & request logging (`pino-http`)
- [ ] Health/readiness endpoints wired into load balancer checks
- [ ] Env validation on boot; secrets via vault/KMS (not plain `.env`)
- [ ] Seeding behind `SEED_DATA` flag (off in prod)
- [ ] CI: lint → typecheck → test → build → image scan → deploy
- [ ] Backups & retention for Mongo; TTL/index review for growth
- [ ] API versioning (`/api/v1`) once endpoints grow

---

## FAQ

**Why both `MONGO_URI` and `MONGO_CLUSTER_URI`?**  
To support local development and Atlas. The code prefers `MONGO_CLUSTER_URI` if set.

**Does the app mutate data?**  
No — the public API is read-only. Seeding occurs at startup only when the collection is empty.

**Why is `id` separate from Mongo `_id`?**  
`id` is a stable business key exposed to clients; `_id` is an internal ObjectId.
