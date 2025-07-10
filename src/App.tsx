import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ManualTesting from "./pages/ManualTesting";
import AutomationTesting from "./pages/AutomationTesting";
import LearningPath from "./pages/LearningPath";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/qa-journey"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manual-testing" element={<ManualTesting />} />
          <Route path="/automation-testing" element={<AutomationTesting />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;