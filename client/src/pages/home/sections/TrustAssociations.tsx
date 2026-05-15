import { motion } from "framer-motion";
import { assets } from "../../../assets";

type Association = {
  id: number;
  logo: string;
  alt: string;
  content?: string | null;
};

const associations: Association[] = [
  {
    id: 1,
    logo: assets.firma1,
    alt: "Association One logo",
    content: null,
  },
  {
    id: 2,
    logo: assets.firma2,
    alt: "Association Two logo",
    content: "ECRA/ESA Lic. #7018884",
  },
  {
    id: 3,
    logo: assets.firma3,
    alt: "Association Three logo",
    content: null,
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
      staggerChildren: 0.12,
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#da1f27]/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#173760]/7 blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="overflow-hidden rounded-[36px] border border-[#173760]/8 bg-gradient-to-br from-white via-white to-[#f8f9fb] shadow-[0_30px_90px_rgba(23,55,96,0.08)]">
          <div className="flex flex-col gap-10 px-6 py-10 md:px-10 lg:px-14 lg:py-14">
            <motion.div variants={itemVariants}>
              <span className="inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
                Trusted Credentials
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {associations.map((association, index) => (
                <motion.div
                  key={association.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.28 }}
                  className="group relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#173760]/8 bg-white px-6 py-8 shadow-[0_16px_40px_rgba(23,55,96,0.06)] transition-all duration-300 hover:border-[#da1f27]/18 hover:shadow-[0_22px_60px_rgba(23,55,96,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#da1f27]" />

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#da1f27]/6 blur-2xl transition duration-500 group-hover:bg-[#da1f27]/10" />

                  <img
                    src={association.logo}
                    alt={association.alt}
                    className={`relative z-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${
                      index === 1
                        ? "max-h-32 sm:max-h-36"
                        : "max-h-20 sm:max-h-24"
                    }`}
                  />

                  {association.content ? (
                    <p className="relative z-10 mt-5 text-center text-sm font-semibold tracking-wide text-[#173760]/72">
                      {association.content}
                    </p>
                  ) : (
                    <div className="mt-5 h-[20px]" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
