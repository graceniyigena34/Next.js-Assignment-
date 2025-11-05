"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Welcome 
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6">
        Explore the features of Next.js including layouts, dynamic routing, and rendering techniques.
      </p>
      <p className="text-sm sm:text-base md:text-lg font-mono mt-4">
        Current Date & Time: {currentTime.toLocaleString()}
      </p>
    </div>
  );
}
