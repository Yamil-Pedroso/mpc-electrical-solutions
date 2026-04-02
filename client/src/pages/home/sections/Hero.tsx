import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import assets from "@/assets";

const Hero = () => {
  return (
    <section className="bg-white py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="">
            <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-[#d90f1b]">
              Electrical solutions
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#051a37] md:text-6xl">
              Welcome to MPC Electrical Solutions mi Chondy :)
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Professional electrical installations, repairs, and emergency
              services delivered with safety, reliability, and experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Get in touch</Button>
              <Button variant="secondary">Call now</Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={assets.micheElectrical}
                alt="Professional electrician working in a Canadian home"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#d90f1b]/20" />
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[#023962]/20" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
