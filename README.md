# Is It A Holiday?

A T3 Stack application that checks if today is a holiday. Built with [Next.js](https://nextjs.org/), [tRPC](https://trpc.io/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **Frontend**: Next.js 14 with React 18
- **Backend**: tRPC for end-to-end typesafe APIs
- **Styling**: Tailwind CSS
- **Validation**: Zod for schema validation
- **Form Handling**: React Hook Form

## Prerequisites

- Node.js >= 24.0.0
- npm >= 10.0.0

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm run dev`

Runs the app in development mode with hot-reload enabled.

### `npm run build`

Builds the application for production.

### `npm start`

Starts the production server after building.

### `npm run lint`

Runs the linter to check code quality.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── api/
│   │   └── trpc/       # tRPC API routes
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Holiday.tsx     # Holiday display component
│   └── NoHoliday.tsx   # Non-holiday display component
├── server/            # Server-side code
└── trpc/              # tRPC configuration
    ├── init.ts        # tRPC router initialization
    ├── provider.tsx   # tRPC provider component
    └── server/
        ├── root.ts    # Root tRPC router
        └── routers/
            └── holiday.ts  # Holiday checking logic
```

## API Endpoints

The application exposes tRPC procedures through `/api/trpc/`. The main procedures include:

- `holiday.checkToday` - Check if today is a holiday

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
