import { createTRPCRouter, publicProcedure } from "~/trpc/init";
import { z } from "zod";

interface HolidayResponse {
  response: {
    holidays: Array<{
      name: string;
      type: string[];
      date: {
        iso: string;
      };
      description?: string;
    }>;
  };
}

export const holidayRouter = createTRPCRouter({
  checkToday: publicProcedure.query(async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    
    if (!apiKey) {
      throw new Error("API key not configured");
    }

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const url = `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=US&year=${year}&month=${month}&day=${day}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = (await response.json()) as HolidayResponse;

      return {
        holidays: data.response.holidays,
        isHoliday: data.response.holidays.length >= 1,
      };
    } catch (error) {
      console.error("Holiday API error:", error);
      throw new Error("Failed to fetch holiday data");
    }
  }),
});
