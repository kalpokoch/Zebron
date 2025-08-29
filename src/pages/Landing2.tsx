import Header from "@/components/landing2/Header";
import Hero  from "@/components/landing2/Hero";
import Results from "@/components/landing2/Results";
import Footer from "@/components/landing2/Footer";
import FAQSection from "@/components/landing2/FAQSection";
import ServicesSection from "@/components/landing2/ServicesSection";
import RoadmapSection from "@/components/landing2/RoadmapSection";
import SlidingTextSection from "@/components/landing2/SlidingTextSection";
import TeamSection from "@/components/landing2/TeamSection";
import Landing2CTA from "@/components/landing2/Landing2CTA"
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Zebron — Unlock New Horizons</title>
        <meta name="description" content="Zebron partners you with elite global developers. Discover services, results, and our team—book a free consultation today." />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="max-w-[1920px] mx-auto">
        <Header />
        <Hero/>
        <ServicesSection/>
        <FAQSection/>
        <Results />
        <RoadmapSection/>
        <TeamSection/>
        <Landing2CTA/>
        <SlidingTextSection/>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
