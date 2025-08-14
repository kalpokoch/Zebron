import Layout from "@/components/site/Layout";
import AboutHomeSection from "@/components/about/AboutHomeSection";
import AboutOurStory from "@/components/about/AboutOurStory";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import CTA from "@/components/site/CTA";

export default function About() {
  return (
    <Layout
      title="About Us — Zebron"
      description="Learn who we are, what we do, and how we partner with you to unlock new horizons."
    >
      <AboutHomeSection />
      <AboutOurStory />
      <AboutWhatWeDo />
      {/* <CTA variant="primary" />  */}
      {/* reuse; add props if you need a different style */}
    </Layout>
  );
}
