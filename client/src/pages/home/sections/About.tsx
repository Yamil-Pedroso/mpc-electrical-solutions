import { motion, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import { assets } from "@/assets";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -36, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f7f8fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72  bg-[#da1f27]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80  bg-[#051a37]/8 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
        >
          <motion.div variants={imageVariants} className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 blur-2xl sm:-left-6 sm:-top-6 sm:h-28 sm:w-28" />
            <div className="absolute -bottom-5 -right-5 h-24 w-24  border border-[#051a37]/12 bg-[#051a37]/8 blur-2xl sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden border border-[#051a37]/8 bg-white p-3 shadow-[0_22px_70px_rgba(5,26,55,0.10)] sm:p-4">
              <div className="overflow-hidden ">
                <img
                  src={assets.about}
                  alt="Professional electrician at work"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-x-0 bottom-3 px-3 sm:bottom-4 sm:px-4">
                <div className="rounded-[22px] border border-white/15 bg-[#051a37]/78 px-4 py-4 text-white backdrop-blur-md sm:px-5">
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-white/65 uppercase sm:text-xs">
                    Professional service
                  </p>
                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Trusted residential electrical work
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
              About us
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#051a37] sm:text-5xl lg:text-6xl">
              A trusted electrician
              <br />
              for your home
            </h2>

            <p className="mt-6 text-base leading-8 text-[#051a37]/70 sm:text-lg">
              With years of experience in residential & commercial electrical
              work, I focus on delivering safe, reliable, and high-quality
              solutions tailored to each home.
            </p>

            <p className="mt-4 text-base leading-8 text-[#051a37]/70 sm:text-lg">
              Every project is handled with attention to detail, clear
              communication, and respect for your space.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <div className=" border border-[#051a37]/8 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(5,26,55,0.05)]">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#051a37]/45 uppercase">
                  Quality
                </p>
                <p className="mt-1 text-sm font-semibold text-[#051a37]">
                  Safe and reliable solutions
                </p>
              </div>

              <div className=" border border-[#051a37]/8 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(5,26,55,0.05)]">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#051a37]/45 uppercase">
                  Service
                </p>
                <p className="mt-1 text-sm font-semibold text-[#051a37]">
                  Clear communication and care
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-[#051a37]/10 pt-6">
              <p className="text-sm font-semibold text-[#051a37]">
                MPC Electrical Solutions
              </p>
              <p className="mt-1 text-sm text-[#051a37]/55">
                Licensed & Residential Electrician
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
