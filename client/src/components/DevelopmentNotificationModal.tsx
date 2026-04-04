import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DevelopmentNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    sessionStorage.setItem("mpc-dev-modal-seen", "true");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("mpc-dev-modal-seen");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#051a37]/75 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#da1f27]" />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#051a37]/8 text-[#051a37] transition hover:scale-105 hover:bg-[#da1f27] hover:text-white"
            >
              ✕
            </button>

            <div className="px-6 py-10 sm:px-10 sm:py-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#da1f27]/10 text-2xl text-[#da1f27]">
                  ⚡
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#da1f27]">
                    Website Update
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-[#051a37] sm:text-3xl">
                    MPC Electrical Solutions
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-semibold leading-snug text-[#051a37] sm:text-xl">
                  Our website is currently under development.
                </p>

                <p className="text-sm leading-7 text-[#051a37]/75 sm:text-base">
                  We are working on building a cleaner, faster, and more modern
                  online experience for MPC Electrical Solutions.
                </p>

                <p className="text-sm leading-7 text-[#051a37]/75 sm:text-base">
                  Soon you will be able to explore our services, recent
                  electrical projects, and more useful information about our
                  work in one professional place.
                </p>

                <div className="rounded-2xl border border-[#051a37]/10 bg-[#051a37]/4 p-4">
                  <p className="text-sm leading-7 text-[#051a37]/80">
                    Thank you for your patience and understanding while we
                    complete the site. We look forward to welcoming you soon
                    with the full experience.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#da1f27] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#b71920]"
                >
                  Continue to website
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#051a37]/12 bg-white px-6 py-3 text-sm font-semibold text-[#051a37] transition hover:border-[#051a37]/25 hover:bg-[#051a37]/4"
                >
                  Close message
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
