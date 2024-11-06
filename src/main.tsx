import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={querClient}>
    <App />
  </QueryClientProvider>,
);
