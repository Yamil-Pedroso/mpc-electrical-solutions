import Container from "@/components/ui/Container";
import { reasons } from "@/data/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-32">
      <Container>
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#023962]">
              Why choose us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-[#051a37] md:text-5xl">
              A professional electrician you can rely on
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Choosing the right electrician matters. We focus on quality,
              safety, and long-term solutions to ensure your home stays powered
              and protected.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#023962]/10 text-lg">
                  {reason.icon}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-[#051a37]">
                  {reason.title}
                </h3>

                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
