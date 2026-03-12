"use client";

import { useEffect, useState } from "react";

interface FunnyTextProps {
  isHoliday: boolean;
}

const workQuotes = [
  "Back to the salt mines.",
  "Another day, another dollar.",
  "Time to make the donuts.",
  "Rise and grind... literally.",
  "Coffee required for today's shift.",
  "Did someone say 'meetings'?",
  "Ah, the sweet sound of alarms.",
];

const holidayQuotes = [
  "Hooray, no alarm clock today!",
  "Enjoy the time off!",
  "Holidays: the reason we work the rest of the year.",
  "Feet up, worries down.",
  "Celebrate good times, come on!",
  "Out of office: activated.",
  "No emails today, please and thank you.",
];

export function FunnyText({ isHoliday }: FunnyTextProps) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = isHoliday ? holidayQuotes : workQuotes;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, [isHoliday]);

  if (!quote) return <p className="opacity-0" aria-hidden="true">Loading...</p>;

  return <p>{quote}</p>;
}