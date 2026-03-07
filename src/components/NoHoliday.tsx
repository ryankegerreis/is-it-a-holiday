import React from "react";

export function NoHoliday() {
  return (
    <div className="w-screen h-screen bg-red-400 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Nope today is not a holiday!
        </h1>
      </div>
    </div>
  );
}
