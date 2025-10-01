"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <div className="preloader-logo">
        <Image
          src="/assets/img/added/logo2.png"
          alt="Logo"
          width={150}
          height={150}
          className="animate-pulse"
        />
      </div>
    </div>
  );
}
