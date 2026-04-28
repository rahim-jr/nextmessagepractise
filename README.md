# Chat Dashboard (Next.js)

Lightweight Slack-style chat UI built with Next.js, React, Tailwind, and Radix primitives.

## What It Does

- 3-pane chat dashboard UI (sidebar, conversation, member panel)
- Simulated multi-user chat using local in-memory API state
- Two viewer modes via URL params:
  - `?viewer=1` -> Jhon
  - `?viewer=2` -> Jane
- Shared group + direct thread with polling-based sync

## Run Locally

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/?viewer=1`
- `http://localhost:3000/?viewer=2`

Vercel:

- `https://slackclone-coral.vercel.app/?viewer=2`
- `https://slackclone-coral.vercel.app/?viewer=2`

## Local API Endpoints

- `GET /api/v1/users/1` -> snapshot for Jhon
- `GET /api/v1/users/2` -> snapshot for Jane
- `GET /api/v1/chats/chat-group` -> group thread messages
- `GET /api/v1/chats/chat-direct` -> direct thread messages
- `POST /api/v1/chats/:chatId` -> send message

Example `POST` body:

```json
{
  "senderId": "jhon",
  "text": "Hello team"
}
```

## Scripts

- `npm run dev` - start development server
- `npm run lint` - run ESLint
- `npm run build` - production build
