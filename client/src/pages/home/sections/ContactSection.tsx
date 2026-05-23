import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiUser } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useContactForm } from "../../../lib/hooks/useContactForm";
import { assets } from "../../../assets";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Electrical Installations",
  "Repairs",
  "Emergency Services",
  "Lighting",
  "Maintenance",
  "Inspection",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SubmissionSuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const sentDate = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sentTime = new Date().toLocaleTimeString("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#051a37]/78 px-4 py-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_35px_120px_rgba(5,26,55,0.32)]"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{
              duration: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#da1f27]" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#051a37]/8 text-[#051a37] transition duration-300 hover:scale-105 hover:bg-[#da1f27] hover:text-white"
            >
              <IoClose className="text-xl" />
            </button>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-[#f7f8fb] p-4 shadow-inner">
                  <img
                    src={assets.logo}
                    alt="MPC Electrical Solutions logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <span className="mt-6 inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
                  Message sent
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#051a37] sm:text-3xl">
                  Your request has been delivered successfully
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#051a37]/72 sm:text-base">
                  Thank you for getting in touch. Your contact request has been
                  submitted successfully and delivered to MPC Electrical
                  Solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.42 }}
                className="mt-8 rounded-[28px] border border-[#051a37]/8 bg-[#fbfcfe] p-5 shadow-[0_14px_40px_rgba(5,26,55,0.06)] sm:p-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#051a37]/8 bg-white p-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#051a37]/45 uppercase">
                      Delivery status
                    </p>
                    <p className="mt-2 text-sm font-semibold text-green-600">
                      Delivered successfully
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#051a37]/8 bg-white p-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#051a37]/45 uppercase">
                      Sent on
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#051a37]">
                      {sentDate}
                    </p>
                    <p className="mt-1 text-sm text-[#051a37]/62">{sentTime}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.42 }}
                className="mt-6 flex justify-center"
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full bg-[#da1f27] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(218,31,39,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#bf1820]"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { isSubmitting, isSubmitted, submitError, submitContactForm } =
    useContactForm();

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Your message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      await submitContactForm(formData);
      setShowSuccessModal(true);
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputBaseClasses =
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-sm text-[#051a37] outline-none transition duration-300 placeholder:text-[#051a37]/40 focus:border-[#da1f27] focus:ring-4 focus:ring-[#da1f27]/10";

  const getInputClasses = (field: keyof FormData) =>
    `${inputBaseClasses} ${
      errors[field]
        ? "border-[#da1f27]/50"
        : "border-[#051a37]/12 hover:border-[#051a37]/25"
    }`;

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f7f8fb] py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#da1f27]/8 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#051a37]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <motion.div variants={fadeUp} className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#da1f27]/15 bg-[#da1f27]/8 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#da1f27] uppercase">
                Contact Us
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#051a37] sm:text-5xl">
                Send a message and tell us how we can help.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#051a37]/70 sm:text-lg">
                Whether you need installations, repairs, maintenance, or urgent
                assistance, feel free to get in touch. We will respond as soon
                as possible.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:mpcelectricalsolutions@gmail.com"
                  className="flex items-start gap-4 border border-[#051a37]/8 bg-white/80 p-4 shadow-[0_10px_30px_rgba(5,26,55,0.04)] backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#051a37]/8 text-[#051a37]">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#051a37]">
                      Email
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mpcelectricalsolutions@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#051a37]/68 transition hover:text-[#051a37]"
                    >
                      mpcelectricalsolutions@gmail.com
                    </a>
                  </div>
                </a>

                <a
                  href="tel:+16474600292"
                  className="flex items-start gap-4 border border-[#051a37]/8 bg-white/80 p-4 shadow-[0_10px_30px_rgba(5,26,55,0.04)] backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#051a37]/8 text-[#051a37]">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#051a37]">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-[#051a37]/68 transition hover:text-[#051a37]">
                      +1 (647) 460-0292
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 border border-[#051a37]/8 bg-white/80 p-4 shadow-[0_10px_30px_rgba(5,26,55,0.04)] backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#051a37]/8 text-[#051a37]">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#051a37]">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-[#051a37]/68">
                      Toronto and the GTA
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border border-[#051a37]/8 bg-white p-6 shadow-[0_20px_60px_rgba(5,26,55,0.08)] sm:p-8 lg:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-[#051a37]"
                    >
                      Full name
                    </label>
                    <div className="relative">
                      <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#051a37]/35" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`${getInputClasses("fullName")} pl-11`}
                      />
                    </div>
                    {errors.fullName ? (
                      <p className="mt-2 text-xs text-[#da1f27]">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#051a37]"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={getInputClasses("email")}
                    />
                    {errors.email ? (
                      <p className="mt-2 text-xs text-[#da1f27]">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#051a37]"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1..."
                      className={getInputClasses("phone")}
                    />
                    {errors.phone ? (
                      <p className="mt-2 text-xs text-[#da1f27]">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-[#051a37]"
                    >
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={getInputClasses("service")}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service ? (
                      <p className="mt-2 text-xs text-[#da1f27]">
                        {errors.service}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#051a37]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, issue, or request..."
                    className={`${getInputClasses("message")} resize-none`}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-xs text-[#da1f27]">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#051a37]/55">
                    We usually reply as quickly as possible.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#da1f27] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(218,31,39,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#bf1820] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send message
                      </>
                    )}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {submitError ? (
                    <motion.div
                      key="error-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    >
                      {submitError}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                    >
                      Your message has been sent successfully.
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SubmissionSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </>
  );
}
