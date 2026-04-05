import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { assets } from "@/assets";

const heroSlides = [assets.gallery1, assets.gallery2, assets.gallery3];

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemProffessionalVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[78vh] min-h-[620px] w-full overflow-hidden bg-[#051a37] sm:h-[82vh] lg:h-[85vh]">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide]}
            alt={`Electrical background slide ${currentSlide + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[#051a37]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051a37]/58 via-[#051a37]/36 to-[#051a37]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051a37]/38 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full">
        <Container>
          <div className="grid h-[78vh] min-h-[620px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] sm:h-[82vh] lg:h-[85vh]">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="w-full max-w-3xl"
            >
              <motion.span
                variants={itemVariants}
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md"
              >
                Electrical solutions
              </motion.span>

              <div className="text-base/12">
                <motion.h1
                  variants={itemVariants}
                  className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[100px]"
                >
                  Safe. Reliable.{" "}
                </motion.h1>

                <motion.h1
                  variants={itemProffessionalVariants}
                  className="text-4xl font-bold text-[#da1f27] sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[100px]"
                >
                  Professional.
                </motion.h1>
              </div>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg md:text-xl"
              >
                Electrical installations, repairs, and emergency services
                delivered with safety, reliability, and experience.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Button href="#contact">Get in touch</Button>
                <Button phoneNumber="+16474600292" variant="secondary">
                  Call now
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 flex items-center gap-3"
              >
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-10 bg-[#da1f27]"
                        : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative hidden h-full w-full items-end justify-end lg:flex"
            >
              {/*<img
                src={assets.electrician}
                alt="Electrician silhouette"
                className="pointer-events-none absolute top-0 -right-100 z-10 h-[88%] w-auto max-w-none object-contain xl:h-[115rem] -scale-x-100"
              /> */}
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
