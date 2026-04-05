import { motion, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import { services } from "@/data/servicesData";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const introVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.55,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7f8fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#da1f27]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#051a37]/8 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div
            variants={introVariants}
            className="mb-16 max-w-3xl lg:mb-20"
          >
            <span className="inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-sm font-semibold tracking-[0.18em] text-[#da1f27] uppercase">
              Our Services
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#051a37] sm:text-5xl">
              Electrical services you can trust
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#051a37]/70 sm:text-lg">
              From small repairs to full electrical installations, we provide
              reliable and professional solutions for residential properties.
            </p>
          </motion.div>

          <div className="grid justify-center gap-6 sm:grid-cols-2 xl:grid-cols-6">
            {services.map((service, index) => {
              const isSecondLast = index === services.length - 2;
              const isLast = index === services.length - 1;

              return (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  className={`group relative flex h-full min-h-[320px] w-full flex-col overflow-hidden border border-[#051a37]/8 bg-white p-7 shadow-[0_16px_40px_rgba(5,26,55,0.06)] transition duration-500 hover:-translate-y-2 hover:border-[#da1f27]/18 hover:shadow-[0_24px_60px_rgba(5,26,55,0.12)] sm:p-8 xl:col-span-2 ${
                    isSecondLast ? "xl:col-start-2" : ""
                  } ${isLast ? "xl:col-start-4" : ""} cursor-pointer`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#da1f27] via-[#da1f27]/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#da1f27]/6 blur-2xl transition duration-500 group-hover:bg-[#da1f27]/10" />

                  <motion.div
                    variants={iconVariants}
                    className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#051a37]/8 bg-[#051a37]/5 text-2xl text-[#051a37] transition duration-500 group-hover:border-[#da1f27]/20 group-hover:bg-[#da1f27] group-hover:text-white"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#051a37] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#051a37]/68 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#051a37]/45 uppercase">
                        Professional service
                      </span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#051a37]/10 bg-[#051a37]/4 text-[#051a37] transition duration-500 group-hover:border-[#da1f27]/20 group-hover:bg-[#da1f27] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
