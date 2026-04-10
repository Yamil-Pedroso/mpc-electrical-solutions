import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/home/HomePage";
import WelcomeToast from "@/components/common/WelcomeToast";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <WelcomeToast />

      <HomePage />
    </>
  );
}
