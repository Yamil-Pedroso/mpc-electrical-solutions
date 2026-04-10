import { useEffect } from "react";
import { toast } from "sonner";
import { assets } from "@/assets";

const WelcomeToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const id = toast.custom(
        () => (
          <div className="relative flex justify-center w-[92vw] max-w-140 flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xl sm:flex-row sm:items-center sm:gap-5 sm:p-5 sm:text-left">
            {/* Close button */}
            <button
              onClick={() => toast.dismiss(id)}
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white transition hover:scale-105"
              aria-label="Close"
            >
              ×
            </button>

            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:h-32 sm:w-32 md:h-36 md:w-36">
              <img
                src={assets.elecImg}
                alt="MPC Electrical Solutions"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold leading-tight text-slate-900 sm:text-base md:text-lg">
                Welcome to MPC Electrical Solutions
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 md:text-[15px]">
                We are ready to help you with safe, reliable, and professional
                electrical services.
              </p>
            </div>
          </div>
        ),
        {
          duration: 6000,
        },
      );
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default WelcomeToast;
