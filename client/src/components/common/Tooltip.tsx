import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TooltipProps = {
  title: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
  left: "right-full top-1/2 -translate-y-1/2 mr-3",
  right: "left-full top-1/2 -translate-y-1/2 ml-3",
};

const arrowClasses = {
  top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[#051a37]",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#051a37]",
  left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[#051a37]",
  right:
    "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[#051a37]",
};

const tooltipVariants = {
  hidden: {
    opacity: 0,
    y: 6,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.96,
    transition: {
      duration: 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Tooltip({
  title,
  children,
  position = "top",
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      <div className="inline-flex">{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="tooltip"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`max-w-80 p-4 pointer-events-none absolute z-50 whitespace-nowrap rounded-xl bg-[#173760] px-3 py-2 text-xs font-medium text-white shadow-[0_10px_30px_rgba(5,26,55,0.22)] ${positionClasses[position]}`}
          >
            {title}

            <span
              className={`absolute h-0 w-0 border-[6px] ${arrowClasses[position]}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
