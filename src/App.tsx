import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import FooterDecor from "@/components/site/FooterDecor";
import Index from "./pages/Index";
import About from "@/pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Ourwork from "@/pages/Ourwork";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourwork" element={<Ourwork />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetails" element={<BlogDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterDecor />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
