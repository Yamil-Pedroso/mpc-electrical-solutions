import { useEffect } from "react";
import { toast } from "sonner";
import { assets } from "@/assets";

const WelcomeToast = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.custom(() => (
        <div className="flex w-[92vw] max-w-[560px] flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-xl sm:flex-row sm:items-center sm:text-left">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-28 md:h-32 md:w-32">
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
      ));
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default WelcomeToast;
