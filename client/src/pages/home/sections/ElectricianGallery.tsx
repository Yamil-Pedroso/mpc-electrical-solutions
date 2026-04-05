import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { assets } from "@/assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

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
      {/* Fixed close button outside animated image container */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] sm:right-6 sm:top-6 sm:h-12 sm:w-12 lg:right-8 lg:top-8"
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
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-[140%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] xl:flex"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-[115%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] lg:flex xl:hidden"
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

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#051a37]/68 via-transparent to-transparent sm:h-36" />

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
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-[140%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#051a37]/85 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#da1f27] xl:flex"
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

export default function ElectricianGallery({
  items = galleryItems,
}: {
  items?: GalleryItem[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

  return (
    <section id="gallery" className="bg-white px-0 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.div
          className="mb-10 max-w-2xl px-4 sm:px-6 lg:px-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="inline-flex rounded-full bg-[#da1f27]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
            Gallery
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#051a37] sm:text-5xl">
            Real electrical projects, clearly showcased.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#051a37]/75">
            A simple and elegant gallery with all 24 images visible, smooth
            hover effects, and a clean modal slider.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-[2px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => openModal(index)}
              variants={cardVariants}
              className="group relative overflow-hidden bg-white text-left transition duration-300"
              aria-label={`Open image ${item.id}`}
            >
              <div className="relative aspect-[1/1] overflow-hidden sm:aspect-[1/1] lg:aspect-[4/4.3]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#051a37]/80 via-[#051a37]/20 to-transparent opacity-70 transition duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-[#da1f27]/0 transition duration-500 group-hover:bg-[#da1f27]/15" />

                <div className="absolute inset-0 flex items-end justify-between p-6 sm:p-8">
                  <div className="translate-y-4 transition duration-500 group-hover:translate-y-0">
                    <p className="text-sm font-semibold tracking-[0.08em] text-white sm:text-base">
                      Project {item.id}
                    </p>
                    <p className="text-xs text-white/80 sm:text-sm">
                      View project image
                    </p>
                  </div>

                  <span className="flex h-11 w-11 translate-y-4 items-center justify-center rounded-full border border-white/20 bg-white/15 text-lg text-white backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:scale-110 group-hover:bg-[#da1f27] group-hover:text-white">
                    ↗
                  </span>
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
