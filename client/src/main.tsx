import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RuntimeLoader } from "@rive-app/react-webgl2";
import riveWasmUrl from "@rive-app/webgl2/rive.wasm?url";
import riveFallbackWasmUrl from "@rive-app/webgl2/rive_fallback.wasm?url";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";

import { routeTree } from "./routeTree.gen";

// Use the WASM bundled with the installed runtime, matching the HTML preload.
RuntimeLoader.setWasmUrl(riveWasmUrl);
RuntimeLoader.setWasmFallbackUrl(riveFallbackWasmUrl);
// Compile early without delaying the rest of the page. The logo retains its
// static fallback if the runtime cannot load.
void RuntimeLoader.awaitInstance().catch(() => {});

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
