import { assets } from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-[#051a37] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src={assets.logo}
              alt="MPC Electrical Solutions logo"
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional electrical solutions for residential properties.
              Safety, reliability, and quality work you can trust.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#d90f1b] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d90f1b] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d90f1b] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="tel:+123456789"
                  className="hover:text-[#d90f1b] transition"
                >
                  📞 +1 234 567 89
                </a>
              </li>
              <li>📍 Residential services</li>
              <li>⏱ Emergency support available</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-[#023962] pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} MPC Electrical Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
