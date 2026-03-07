"use client";

import { trpc } from "~/trpc/provider";
import { Holiday } from "~/components/Holiday";
import { NoHoliday } from "~/components/NoHoliday";

export default function Home() {
  const { data, isLoading, error } = trpc.holiday.checkToday.useQuery();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-red-100">
        <p className="text-xl text-red-700">Error: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">No data available</p>
      </div>
    );
  }

  if (data.isHoliday && data.holidays.length > 0) {
    const holiday = data.holidays[0];
    return <Holiday name={holiday.name} type={holiday.type} />;
  }

  return <NoHoliday />;
}
