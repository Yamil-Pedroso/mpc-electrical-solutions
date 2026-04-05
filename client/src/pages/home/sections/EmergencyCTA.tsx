import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const EmergencyCTA = () => {
  return (
    <section className="bg-[#051a37] py-24">
      <Container>
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#d90f1b] text-2xl">
            ⚡
          </div>

          <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Electrical emergency?
            <br />
            We are here to help
          </h2>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            If you are experiencing an electrical issue that needs immediate
            attention, don’t wait. Contact us now for fast and reliable
            emergency service.
          </p>

          <div className="mt-10">
            <Button
              phoneNumber="+16474600292"
              variant="primary"
              className="px-8 py-4 text-lg"
            >
              Call now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmergencyCTA;
