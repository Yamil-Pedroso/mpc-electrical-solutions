import { motion } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import Tooltip from "@/components/common/Tooltip";

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#da1f27]/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#173760]/7 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#173760] sm:text-5xl">
            What our clients say.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#173760]/70 sm:text-lg">
            Trusted electrical service for homeowners and businesses across
            Toronto and the GTA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-[32px] border border-[#173760]/10 bg-[#f7f8fb] p-6 shadow-[0_24px_70px_rgba(23,55,96,0.08)] sm:p-8 lg:p-10"
        >
          <div className="flex items-center justify-center gap-1 text-[#da1f27]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} className="fill-current text-lg" />
            ))}
          </div>

          <blockquote className="mt-7 text-center text-xl font-semibold leading-9 tracking-tight text-[#173760] sm:text-2xl sm:leading-10">
            “MPC Electrical Solutions provided fast, professional, and clean
            service. The work was completed with great attention to detail, and
            everything was explained clearly from start to finish.”
          </blockquote>

          <div className="mt-7 text-center">
            <p className="text-sm font-bold text-[#173760]">Name Lastname.</p>
            <p className="mt-1 text-sm text-[#173760]/60">
              Homeowner in Toronto
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Tooltip title="Content in development" position="top">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#da1f27] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(218,31,39,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#bf1820]"
              >
                Read more testimonials
                <FiArrowRight />
              </a>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
