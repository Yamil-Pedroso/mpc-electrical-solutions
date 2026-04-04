import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { assets } from "@/assets";
import { menuItems } from "@/data/menuItemsData";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
} as const;

const navVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] overflow-hidden border-b border-[#051a37]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="p-8 bg-white flex items-center xl:rounded-full -m-8 duration-300"
        >
          <img
            src={assets.logo}
            alt="MPC Electrical Solutions logo"
            className="w-auto h-36"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => handleScroll(e, item.targetId)}
              className=" font-bold text-black transition hover:text-[#d90f1b]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+41795326519"
            className="rounded-full bg-[#d90f1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Call now
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+41795326519"
            className="rounded-full bg-[#d90f1b] px-4 py-2 text-sm font-semibold text-white"
          >
            Call
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile dropdown (animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 bg-[#051a37] md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex h-20 items-center justify-between px-4">
              <div className="h-20 p-4 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={assets.logo}
                  alt="MPC Electrical Solutions logo"
                  className="h-30 w-auto object-cover"
                />
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white text-2xl"
              >
                <FiX />
              </button>
            </div>

            {/* Menu */}
            <motion.nav
              className="flex flex-col items-center gap-8 pt-20 text-lg text-white"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.targetId}
                  href={`#${item.targetId}`}
                  variants={itemVariants}
                  onClick={(e) => handleScroll(e, item.targetId)}
                  className="text-white hover:text-gray-300"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="tel:+41795326519"
                variants={itemVariants}
                className="mt-8 rounded-full bg-[#d90f1b] px-10 py-4 text-sm font-semibold text-white"
              >
                Call now
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
