import Container from "@/components/ui/Container";
import assets from "@/assets";

const About = () => {
  return (
    <section id="about" className="bg-white py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={assets.about}
                alt="Professional electrician at work"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#d90f1b]/20" />
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-[#023962]/20" />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#023962]">
              About us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#051a37] md:text-5xl">
              A trusted electrician
              <br />
              for your home
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              With years of experience in residential electrical work, I focus
              on delivering safe, reliable, and high-quality solutions tailored
              to each home.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Every project is handled with attention to detail, clear
              communication, and respect for your space.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-[#051a37]">
                MPC Electrical Solutions
              </p>
              <p className="text-sm text-gray-500">
                Licensed & Residential Electrician
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
