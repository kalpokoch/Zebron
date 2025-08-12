import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import CTA from "@/components/site/CTA";
import Team from "@/components/site/Team";
import Results from "@/components/site/Results";
import Footer from "@/components/site/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Zebron — Unlock New Horizons</title>
        <meta name="description" content="Zebron partners you with elite global developers. Discover services, results, and our team—book a free consultation today." />
        <link rel="canonical" href="/" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Services />
        <CTA />
        <Team />
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
