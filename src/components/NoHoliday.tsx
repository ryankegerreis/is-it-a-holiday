import React from "react";
import { FunnyText } from "./FunnyText";

export function NoHoliday() {
  return (
    <div className="w-screen h-screen bg-red-400 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Nope today is not a holiday!
        </h1>
        <div className="text-2xl text-white font-medium italic">
          <FunnyText isHoliday={false} />
        </div>
      </div>
    </div>
  );
}
