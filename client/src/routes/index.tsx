import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/home/HomePage";
import WelcomeToast from "@/components/common/WelcomeToast";
import { Toaster } from "sonner";
import ServiceAssistantBubble from "@/components/common/ServiceAssistantBubble";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <ServiceAssistantBubble />
      <Toaster position="top-right" richColors />
      <WelcomeToast />

      <HomePage />
    </>
  );
}
