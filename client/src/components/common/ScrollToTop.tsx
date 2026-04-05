"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0 ? Math.min((scrolled / maxScroll) * 100, 100) : 0;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 group flex size-14 items-center justify-center rounded-full bg-[#da1f27] text-white shadow-lg shadow-foreground/25 transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl hover:shadow-foreground/30 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#da1f27] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <svg
        className="absolute inset-0 size-full -rotate-90"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-20"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="will-change-[stroke-dashoffset] transition-[stroke-dashoffset] duration-300 ease-out"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference * (1 - scrollProgress / 100),
          }}
        />
      </svg>

      <FaArrowUp className="relative z-10 text-[14px] text-white transition-transform duration-300 group-hover:-translate-y-0.5" />

      <span className="absolute inset-0 scale-0 rounded-full bg-white/10 opacity-0 transition-transform duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />
    </button>
  );
}
