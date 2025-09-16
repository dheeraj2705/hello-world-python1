import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HappyPage from "./pages/HappyPage";
import CalmPage from "./pages/CalmPage";
import EnergeticPage from "./pages/EnergeticPage";
import SadPage from "./pages/SadPage";
import AnxiousPage from "./pages/AnxiousPage";
import PeacefulPage from "./pages/PeacefulPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/happy" element={<HappyPage />} />
          <Route path="/calm" element={<CalmPage />} />
          <Route path="/energetic" element={<EnergeticPage />} />
          <Route path="/sad" element={<SadPage />} />
          <Route path="/anxious" element={<AnxiousPage />} />
          <Route path="/peaceful" element={<PeacefulPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
