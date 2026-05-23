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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mpcelectricalsolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#ffffff]"
            >
              mpcelectricalsolutions@gmail.com
            </a>
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;
