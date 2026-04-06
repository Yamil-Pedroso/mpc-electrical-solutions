import { motion } from "framer-motion";
import { assets } from "../../../assets";

type Association = {
  id: number;
  logo: string;
  alt: string;
};

const associations: Association[] = [
  {
    id: 1,
    logo: assets.firma1,
    alt: "Association One logo",
  },
  {
    id: 2,
    logo: assets.firma2,
    alt: "Association Two logo",
  },
  {
    id: 3,
    logo: assets.firma3,
    alt: "Association Three logo",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TrustedAssociations() {
  return (
    <section className="relative w-full bg-[#ffffff] py-14 md:py-40">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="overflow-hidden  bg-gradient-to-br from-white via-white to-[#f8f9fb] shadow-[0_20px_60px_rgba(3,18,39,0.08)]">
          <div className="grid items-center gap-10 px-6 py-8 md:grid-cols-[1.1fr_1.4fr] md:px-10 md:py-10 lg:px-14">
            <motion.div variants={itemVariants} className="max-w-xl">
              <div className="mb-4 h-[3px] w-16 rounded-full bg-[#d90f1b]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d90f1b]">
                Trusted Credentials
              </span>

              <h2 className="mt-4 text-2xl font-bold leading-tight text-[#031227] sm:text-3xl lg:text-4xl">
                Affiliated for reliable electrical work
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#031227]/70 sm:text-base">
                Our work aligns with recognized associations and industry
                standards, helping clients feel confident in the safety,
                quality, and reliability of every installation and service.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0"
            >
              {associations.map((association, index) => (
                <motion.div
                  key={association.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-full min-h-[180px] items-center justify-center px-6 py-8 md:min-h-[220px] ${
                    index !== associations.length - 1
                      ? "sm:border-r sm:border-[#031227]/10"
                      : ""
                  }`}
                >
                  <img
                    src={association.logo}
                    alt={association.alt}
                    className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:max-h-28 md:max-h-32 lg:max-h-36"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
