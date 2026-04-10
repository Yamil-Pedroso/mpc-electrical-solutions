import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiMenu, FiPhone, FiX } from "react-icons/fi";
import { assets } from "@/assets";
import { menuItems } from "@/data/menuItemsData";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/common/Tooltip";
import { BsFillTelephoneFill } from "react-icons/bs";

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

const stickyNavbarVariants = {
  hidden: {
    opacity: 0,
    y: -90,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -70,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScrollSticky = () => {
      if (!headerRef.current) return;

      const rect = headerRef.current.getBoundingClientRect();
      const shouldShowSticky = rect.bottom <= 0;

      setShowStickyNav(shouldShowSticky);
    };

    handleScrollSticky();
    window.addEventListener("scroll", handleScrollSticky, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollSticky);
    };
  }, []);

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

  const handleGoTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navbarContent = (
    <>
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4">
        <a
          href="/"
          onClick={handleGoTop}
          className="flex items-center bg-white p-8 duration-300 xl:rounded-full -m-8"
        >
          <img
            src={assets.logo}
            alt="MPC Electrical Solutions logo"
            className="h-36 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => handleScroll(e, item.targetId)}
              className="font-bold text-black transition hover:text-[#d90f1b]"
            >
              {item.label}
            </a>
          ))}

          <Button
            phoneNumber="+16474600292"
            variant="terciary"
            className="px-3 py-2 text-sm  rounded-full"
          >
            <div className="flex items-center gap-2">
              <span className="mr-2 text-lg p-3 rounded-full bg-[#ffffff] text-white">
                <BsFillTelephoneFill className="text-[#d90f1b]" />
              </span>
              <p>Call now</p>
            </div>
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button
            phoneNumber="+16474600292"
            variant="terciary"
            className="px-3 py-2 text-sm  rounded-full"
          >
            <div className="flex items-center gap-2">
              <span className="mr-2 text-lg p-3 rounded-full bg-[#ffffff] text-white">
                <BsFillTelephoneFill className="text-[#d90f1b]" />
              </span>
              <p>Call now</p>
            </div>
          </Button>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-2xl text-[#051a37]"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 overflow-y-auto bg-[#051a37] md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex h-20 items-center justify-between px-4">
              <div className="flex h-20 items-center justify-center overflow-hidden bg-white p-4">
                <img
                  src={assets.logo}
                  alt="MPC Electrical Solutions logo"
                  className="h-30 w-auto object-cover"
                />
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-2xl text-white"
              >
                <FiX />
              </button>
            </div>

            <motion.nav
              className="flex flex-col items-center gap-8 px-6 pt-20 text-lg text-white"
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

              <Button
                phoneNumber="+16474600292"
                variant="terciary"
                className="px-3 py-2 text-sm  rounded-full"
              >
                <div className="flex items-center gap-2">
                  <span className="mr-2 text-lg p-3 rounded-full bg-[#ffffff] text-white">
                    <BsFillTelephoneFill className="text-[#d90f1b]" />
                  </span>
                  <p>Call now</p>
                </div>
              </Button>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="mx-auto mt-10 w-full max-w-md px-6 pb-10"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">
                  Contact information
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:mpcelectricalsolutions@gmail.com"
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white/85 transition hover:border-white/15 hover:bg-white/8"
                  >
                    <span className="mt-0.5 text-[#da1f27]">
                      <FiMail />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                        Email
                      </p>
                      <p className="mt-1 text-sm break-all">
                        mpcelectricalsolutions@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+16474600292"
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white/85 transition hover:border-white/15 hover:bg-white/8"
                  >
                    <span className="mt-0.5 text-[#da1f27]">
                      <FiPhone />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                        Phone
                      </p>
                      <p className="mt-1 text-sm">+1 (647) 460-0292</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-white/85">
                    <span className="mt-0.5 text-[#da1f27]">
                      <FiMapPin />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
                        Location
                      </p>
                      <p className="mt-1 text-sm">Toronto and the GTA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">
                    Follow us
                  </p>

                  <div className="flex items-center gap-3">
                    <Tooltip title="Pending..." position="top">
                      <a
                        href="#"
                        aria-label="Pending social link"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:border-[#da1f27]/30 hover:bg-[#da1f27] hover:text-white"
                      >
                        ?
                      </a>
                    </Tooltip>

                    <Tooltip title="Pending..." position="top">
                      <a
                        href="#"
                        aria-label="Pending social link"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition duration-300 hover:border-[#da1f27]/30 hover:bg-[#da1f27] hover:text-white"
                      >
                        ?
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <>
      <header
        ref={headerRef}
        className="overflow-hidden border-b border-[#051a37] bg-[#ffffff]"
      >
        {navbarContent}
      </header>

      <AnimatePresence>
        {showStickyNav && (
          <motion.header
            className="fixed left-0 right-0 top-0 z-50 overflow-hidden border-b border-[#051a37] bg-[#ffffff]/95 shadow-[0_10px_35px_rgba(5,26,55,0.08)] backdrop-blur-md"
            variants={stickyNavbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navbarContent}
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
