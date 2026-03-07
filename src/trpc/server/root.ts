import { createTRPCRouter } from "~/trpc/init";
import { holidayRouter } from "./routers/holiday";

export const appRouter = createTRPCRouter({
  holiday: holidayRouter,
});

export type AppRouter = typeof appRouter;
