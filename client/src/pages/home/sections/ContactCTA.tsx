import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-gray-50 py-32">
      <Container>
        <div className="rounded-3xl bg-white p-12 shadow-sm md:p-20">
          <div className="mx-auto max-w-2xl text-center">
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#051a37] md:text-5xl">
              Need electrical assistance?
            </h2>

            {/* Text */}
            <p className="mt-6 text-lg text-gray-600">
              Whether it’s a small repair or an urgent electrical issue, we’re
              ready to help. Get in touch today and let’s find the right
              solution for your home.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button>Get in touch</Button>

              <a
                href="tel:+123456789"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#023962] px-8 py-4 text-sm font-semibold text-[#023962] transition hover:bg-[#023962] hover:text-white"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
