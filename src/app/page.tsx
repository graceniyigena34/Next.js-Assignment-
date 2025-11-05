"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to the Next.js Assignment!</h1>
      <p className="mt-4">Current Time (Client-Side Rendered): {time}</p>
    </div>
  );
}
