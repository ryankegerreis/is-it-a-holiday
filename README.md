# Is It A Holiday?

A modern, typesafe T3 Stack application that tells you if today is a holiday.

## Table of Contents

- [🚀 Quick Start](#-quick-start-start-from-scratch)
- [📖 About the Project](#-about-the-project)
- [🛠 Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📜 Available Scripts](#-available-scripts)
- [🧪 Development](#-development)
- [📄 License](#-license)

## 🚀 Quick Start (Start From Scratch)

If you just cloned this repo, follow these steps to get the app running locally:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    *   Duplicate `.env.example` to `.env.local` (not required for basic functionality but good practice).
    ```bash
    cp .env.example .env.local
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **View the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 About the Project

"Is It A Holiday?" is a simple but effective web application built to demonstrate a clean implementation of the T3 Stack. The current version renders a playful, static "not a holiday" screen by default, focusing on architecture and developer experience rather than real-time holiday detection.

## 🛠 Tech Stack

- **Framework**: [Next.js 16.x](https://nextjs.org/) (App Router)
- **API Layer**: [tRPC](https://trpc.io/) for end-to-end typesafe communication
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [@tanstack/react-query](https://tanstack.com/query/latest)
- **Validation**: [Zod](https://zod.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)

## 📂 Project Structure

```text
src/
├── app/                 # Next.js app directory (App Router)
│   ├── api/trpc/       # tRPC API gateway
│   ├── page.tsx        # Homepage (Main logic entry point)
│   ├── layout.tsx      # Global layout and fonts
│   └── globals.css     # Global Tailwind styles
├── components/         # Reusable UI components
│   ├── Holiday.tsx     # Display for holiday state
│   ├── NoHoliday.tsx   # Display for non-holiday state
│   └── FunnyText.tsx   # Dynamic messaging component
├── trpc/              # tRPC Configuration
│   ├── init.ts        # Server-side tRPC initialization
│   ├── provider.tsx   # Client-side tRPC provider
│   └── server/        # API Routers and procedures
│       └── root.ts    # Main router definition
```

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Compiles the production application. |
| `npm start` | Runs the compiled production server. |
| `npm run lint` | Runs ESLint for code quality checks. |

## 🧪 Development

### tRPC Procedures
All API procedures are defined in `src/trpc/server/routers/`. To add a new endpoint:
1. Create/Modify a router in `routers/`.
2. Connect it to the `appRouter` in `src/trpc/server/root.ts`.
3. Use the hook in your component: `const data = trpc.router.procedure.useQuery()`.

## 📄 License

This project is open-source and available under the MIT License.
