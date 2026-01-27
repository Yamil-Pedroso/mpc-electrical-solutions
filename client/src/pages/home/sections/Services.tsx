import Container from "@/components/ui/Container";
import { services } from "@/data/servicesData";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-32">
      <Container>
        <div className="mb-20 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-[#d90f1b]">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#051a37] md:text-5xl">
            Electrical services you can trust
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From small repairs to full electrical installations, we provide
            reliable and professional solutions for residential properties.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#023962]/10 text-xl">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-[#051a37]">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
