"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    // Target date: Mid-April 2026 (April 15, 2026)
    const targetDate = new Date("2026-04-15T00:00:00+03:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft(null); // Timer expired
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-xl font-bold uppercase">
        KUCCPS Portal Is Likely Open!
      </div>
    );
  }

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center py-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black text-[#cce023] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-4xl font-black border-2 border-black rounded md:rounded-lg shadow-[4px_4px_0px_0px_rgba(204,224,35,1)]">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="mt-2 font-bold uppercase text-xs md:text-sm tracking-wider">{label}</span>
    </div>
  );
}
