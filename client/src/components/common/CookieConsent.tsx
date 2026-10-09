import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "mpc_cookie_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 120, scale: 0.98 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 bottom-4 z-[9999] w-[calc(100%-2rem)] max-w-md rounded-[28px] border border-[#173760]/10 bg-white p-5 shadow-[0_24px_70px_rgba(23,55,96,0.18)] sm:right-6 sm:bottom-6"
        >
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#da1f27]/10 text-xl">
              🍪
            </div>

            <div>
              <h3 className="text-base font-bold text-[#173760]">
                Cookie preferences
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#173760]/70">
                We use cookies to improve your browsing experience and better
                understand how visitors interact with our website.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => handleConsent("declined")}
              className="rounded-full border border-[#173760]/15 bg-white px-5 py-3 text-sm font-semibold text-[#173760] transition duration-300 hover:bg-[#173760]/5"
            >
              Decline
            </button>

            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="rounded-full bg-[#da1f27] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(218,31,39,0.22)] transition duration-300 hover:bg-[#bf1820]"
            >
              Accept cookies
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
