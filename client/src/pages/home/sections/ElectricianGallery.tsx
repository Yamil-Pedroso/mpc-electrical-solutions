import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "@/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsGrid3X3GapFill, BsGrid1X2Fill, BsGridFill } from "react-icons/bs";
import { BiSolidDoorOpen } from "react-icons/bi";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

type GalleryLayout = "compact" | "split" | "showcase";

const galleryItems: GalleryItem[] = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  image: assets[`gallery${index + 1}`],
  alt: `Electrical project ${index + 1}`,
}));

function GalleryModal({
  item,
  currentIndex,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#051a37]/88 px-3 py-3 backdrop-blur-md sm:px-6 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview ${item.alt}`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] sm:right-6 sm:top-6 sm:h-12 sm:w-12 lg:right-8 lg:top-8 cursor-pointer"
      >
        <IoClose />
      </button>

      <motion.div
        className="relative w-full max-w-7xl"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.99 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center">
          <div className="relative flex w-full items-center justify-center">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-[140%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] xl:flex cursor-pointer"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-[115%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] lg:flex xl:hidden cursor-pointer"
            >
              <FaArrowLeft />
            </button>

            <div className="relative flex w-full items-center justify-center pt-16 sm:pt-20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.id}
                  src={item.image}
                  alt={item.alt}
                  className="block max-h-[62vh] w-auto max-w-full object-contain sm:max-h-[68vh] md:max-h-[72vh] lg:max-h-[78vh]"
                  initial={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.015, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#051a37]/68 via-transparent to-transparent sm:h-36" />

              <motion.div
                className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 py-4 text-white sm:px-6 sm:py-6"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.28em] text-white/80 uppercase sm:text-xs">
                    Electrical project
                  </p>
                  <p className="mt-1 text-base font-semibold tracking-tight sm:mt-2 sm:text-2xl">
                    Project {currentIndex + 1}
                  </p>
                </div>

                <p className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
                  {currentIndex + 1} / {total}
                </p>
              </motion.div>
            </div>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-[140%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] xl:flex cursor-pointer"
            >
              <FaArrowRight />
            </button>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-[115%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] lg:flex xl:hidden"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-lg text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27]"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-lg text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const layoutOptions: {
  id: GalleryLayout;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "compact",
    label: "Compact grid",
    icon: <BsGrid3X3GapFill />,
  },
  {
    id: "split",
    label: "Two column",
    icon: <BsGrid1X2Fill />,
  },
  {
    id: "showcase",
    label: "Showcase grid",
    icon: <BsGridFill />,
  },
];

export default function ElectricianGallery({
  items = galleryItems,
}: {
  items?: GalleryItem[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [layout, setLayout] = useState<GalleryLayout>("compact");

  const selectedItem = useMemo(() => {
    if (selectedIndex === null) return null;
    return items[selectedIndex];
  }, [items, selectedIndex]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? items.length - 1 : prev - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev === items.length - 1 ? 0 : prev + 1;
    });
  };

  const getGridClasses = () => {
    switch (layout) {
      case "split":
        return "grid grid-cols-1 gap-[2px] px-3 sm:px-4 md:grid-cols-2 md:px-4 lg:px-6";
      case "showcase":
        return "grid grid-cols-1 gap-[2px] px-3 sm:grid-cols-2 sm:px-4 lg:grid-cols-3 lg:px-6";
      case "compact":
      default:
        return "grid grid-cols-2 gap-[2px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
    }
  };

  const getCardWrapperClasses = () => {
    switch (layout) {
      case "split":
        return "relative aspect-[16/10] overflow-hidden";
      case "showcase":
        return "relative aspect-[4/3] overflow-hidden";
      case "compact":
      default:
        return "relative aspect-[1/1] overflow-hidden sm:aspect-[1/1] lg:aspect-[4/4.3]";
    }
  };

  const getCardOuterClasses = () => {
    return "group relative overflow-hidden bg-white text-left transition duration-300";
  };

  const getCardPadding = () => {
    switch (layout) {
      case "split":
        return "absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8";
      case "showcase":
        return "absolute inset-x-0 bottom-0 p-5 sm:p-6";
      case "compact":
      default:
        return "absolute inset-x-0 bottom-0 p-6 sm:p-8";
    }
  };

  const getPlusSizeClasses = () => {
    switch (layout) {
      case "compact":
        return "h-10 w-10 text-sm sm:h-11 sm:w-11 sm:text-base";
      case "split":
        return "h-12 w-12 text-base sm:h-14 sm:w-14 sm:text-lg";
      case "showcase":
        return "h-10 w-10 text-sm sm:h-11 sm:w-11 sm:text-sm";
      default:
        return "h-10 w-10 text-sm";
    }
  };

  return (
    <section id="gallery" className="bg-white px-0 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-400">
        <motion.div
          className="mb-10 px-4 sm:px-6 lg:px-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-[#da1f27]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
                Gallery
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#051a37] sm:text-5xl">
                Real electrical projects, clearly showcased.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#051a37]/75">
                Explore our gallery of residential electrical work, showcasing
                our commitment to quality and professionalism in every project
                we undertake.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {layoutOptions.map((option) => {
                const isActive = layout === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setLayout(option.id)}
                    aria-label={option.label}
                    title={option.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition duration-300 ${
                      isActive
                        ? "border-[#da1f27] bg-[#da1f27] text-white shadow-[0_12px_28px_rgba(218,31,39,0.22)]"
                        : "border-[#051a37]/10 bg-white text-[#051a37]/75 hover:border-[#da1f27]/35 hover:text-[#da1f27]"
                    }`}
                  >
                    {option.icon}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          key={layout}
          className={getGridClasses()}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <motion.button
              key={`${layout}-${item.id}`}
              type="button"
              onClick={() => openModal(index)}
              variants={cardVariants}
              className={getCardOuterClasses()}
              aria-label={`Open image ${item.id}`}
            >
              <div className={getCardWrapperClasses()}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 cursor-pointer"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#051a37]/80 via-[#051a37]/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-[#da1f27]/0 transition duration-500 group-hover:bg-[#da1f27]/15" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center ">
                  <div
                    className={`flex ${getPlusSizeClasses()} -translate-y-10 items-center justify-center bg-[#da1f27] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100`}
                  >
                    <BiSolidDoorOpen size={32} />
                  </div>
                </div>

                <div className={`${getCardPadding()}`}>
                  <div className="translate-y-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold tracking-[0.08em] text-white sm:text-base">
                      Project {item.id}
                    </p>
                    <p className="mt-1 text-xs text-white sm:text-sm">
                      View project image
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            item={selectedItem}
            currentIndex={selectedIndex ?? 0}
            total={items.length}
            onClose={closeModal}
            onPrev={showPrev}
            onNext={showNext}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export type { galleryItems };
export type { GalleryItem };
