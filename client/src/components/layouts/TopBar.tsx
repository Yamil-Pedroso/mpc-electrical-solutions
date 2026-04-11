import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
//import Tooltip from "@/components/common/Tooltip";

const topBarVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const TopBar = () => {
  return (
    <motion.div
      variants={topBarVariants}
      initial="hidden"
      animate="visible"
      className="hidden w-full border-b border-white/10 bg-[#031227] text-white lg:block"
    >
      <div className="mx-auto flex h-[50px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          className="flex items-center gap-6"
        >
          <motion.a
            variants={itemVariants}
            href="mailto:mpcelectricalsolutions@gmail.com"
            className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <FiMail className="text-[#da1f27]" />
            <span>mpcelectricalsolutions@gmail.com</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.a
            variants={itemVariants}
            href="tel:+16474600292"
            className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <FiPhone className="text-[#da1f27]" />
            <span>+1 (647) 460-0292</span>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-white/80"
          >
            <FiMapPin className="text-[#da1f27]" />
            <span>Toronto and the GTA</span>
          </motion.div>
          {/*<motion.span
            variants={itemVariants}
            className="text-xs font-medium tracking-[0.2em] text-white/45 uppercase"
          >
            Follow us
          </motion.span>

          <Tooltip title="Pending..." position="bottom">
            <motion.a
              variants={itemVariants}
              href="#"
              aria-label="?"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:border-[#da1f27]/30 hover:bg-[#da1f27] hover:text-white"
            >
              ?
            </motion.a>
          </Tooltip>

          <Tooltip title="Pending..." position="bottom">
            <motion.a
              variants={itemVariants}
              href="#"
              aria-label="?"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:border-[#da1f27]/30 hover:bg-[#da1f27] hover:text-white"
            >
              ?
            </motion.a>
          </Tooltip> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
