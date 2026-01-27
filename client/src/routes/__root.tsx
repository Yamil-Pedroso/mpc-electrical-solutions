import { Outlet, createRootRoute } from "@tanstack/react-router";
import MainLayout from "@/components/layouts/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </QueryClientProvider>
  );
}
