import { useEffect, useRef, useState } from "react";
import { assets } from "@/assets";

const FIRST_APPEAR_DELAY = 15000; // 15s
const VISIBLE_DURATION = 10000; // 10s
const REAPPEAR_INTERVAL = 180000; // 3 min
const MAX_SHOWS_PER_SESSION = 4;

const ServiceAssistantBubble = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showCountRef = useRef(0);
  const firstTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const showAssistant = () => {
      if (showCountRef.current >= MAX_SHOWS_PER_SESSION) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      showCountRef.current += 1;
      setIsVisible(true);

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, VISIBLE_DURATION);
    };

    firstTimeoutRef.current = setTimeout(() => {
      showAssistant();

      intervalRef.current = setInterval(() => {
        showAssistant();
      }, REAPPEAR_INTERVAL);
    }, FIRST_APPEAR_DELAY);

    return () => {
      if (firstTimeoutRef.current) clearTimeout(firstTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 z-999 w-full transition-all duration-500 ease-out ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : "-translate-x-16 translate-y-8 opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="relative h-90 w-full sm:h-107.5 md:h-130 lg:h-155 xl:h-175">
        <img
          src={assets.char}
          alt="MPC Electrical Solutions assistant"
          className="absolute bottom-0 left-0 h-70 w-auto max-w-none object-contain drop-shadow-2xl sm:h-85 md:h-107.5 lg:h-130 xl:h-147.5"
        />

        <div className="bubble-float absolute bottom-52.5 left-31.25 max-w-55 rounded-2xl border border-slate-200 bg-[#031227] px-4 py-3 shadow-2xl sm:bottom-63.75 sm:left-38.75 sm:max-w-62.5 sm:px-5 sm:py-4 md:bottom-80 md:left-52.5 md:max-w-75 lg:bottom-97.5 lg:left-63.75 lg:max-w-85 xl:bottom-112.5 xl:left-72.5 xl:max-w-92.5">
          <p className="text-sm font-semibold leading-5 text-white sm:text-base">
            Need more details?
          </p>

          <p className="mt-1 text-xs leading-5 text-white sm:text-sm sm:leading-6">
            Call us or send us a message through the contact form.
          </p>

          <div className="absolute bottom-5 -left-2 h-4 w-4 rotate-45 border-b border-l border-slate-200 bg-[#031227]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceAssistantBubble;
