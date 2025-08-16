import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import FooterDecor from "@/components/site/FooterDecor";
import RouteWrapper from "./components/RouteWrapper";
import Index from "./pages/Index";
import About from "@/pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Ourwork from "@/pages/Ourwork";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RouteWrapper>
              <Index />
            </RouteWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <RouteWrapper>
              <About />
            </RouteWrapper>
          }
        />
        <Route
          path="/ourwork"
          element={
            <RouteWrapper>
              <Ourwork />
            </RouteWrapper>
          }
        />
        <Route
          path="/whatwedo"
          element={
            <RouteWrapper>
              <WhatWeDo />
            </RouteWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <RouteWrapper>
              <Blog />
            </RouteWrapper>
          }
        />
        <Route
          path="/blogdetails"
          element={
            <RouteWrapper>
              <BlogDetails />
            </RouteWrapper>
          }
        />
        <Route
          path="*"
          element={
            <RouteWrapper>
              <NotFound />
            </RouteWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Initial app loading (fonts, initial assets, etc.)
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1000); // Reduced since we now have per-route loading

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <ScrollToTop />
            <AnimatedRoutes />
            <FooterDecor />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;