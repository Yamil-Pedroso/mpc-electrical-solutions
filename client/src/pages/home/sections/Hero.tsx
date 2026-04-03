import { motion, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import assets from "@/assets";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingCircleOne: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingCircleTwo: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-[#d90f1b]"
            >
              Electrical solutions
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl font-bold leading-tight text-[#051a37] md:text-6xl"
            >
              Safe. Reliable. Professional.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-gray-600"
            >
              Professional electrical installations, repairs, and emergency
              services delivered with safety, reliability, and experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button>Get in touch</Button>
              <Button variant="secondary">Call now</Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <motion.img
                src={assets.micheElectrical}
                alt="Professional electrician working in a Canadian home"
                className="h-full w-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <motion.div
              variants={floatingCircleOne}
              animate="animate"
              className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#d90f1b]/20"
            />

            <motion.div
              variants={floatingCircleTwo}
              animate="animate"
              className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#023962]/20"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
