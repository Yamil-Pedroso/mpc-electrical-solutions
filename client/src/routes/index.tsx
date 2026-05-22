import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/home/HomePage";
import WelcomeToast from "@/components/common/WelcomeToast";
import { Toaster } from "sonner";
import ServiceAssistantBubble from "@/components/common/ServiceAssistantBubble";
import Seo from "@/components/common/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Seo
        title="MPC Electrical Solutions | Toronto Electrician"
        description="Professional electrical services in Toronto. Reliable installations, repairs, maintenance, and emergency support for residential and commercial clients."
        canonical="https://www.mpcelectricalsolutions.com/"
        keywords="Toronto electrician, electrical services Toronto, emergency electrician Toronto, residential electrician Toronto, commercial electrician Toronto"
        ogImage="https://www.mpcelectricalsolutions.com/og-image.jpg"
      />
      <LocalBusinessSchema />
      <ServiceAssistantBubble />
      <Toaster position="top-right" richColors />
      <WelcomeToast />

      <HomePage />
    </>
  );
}
