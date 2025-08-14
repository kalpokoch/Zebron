import Layout from "@/components/site/Layout";
import AboutHomeSection from "@/components/about/AboutHomeSection";
import AboutOurStory from "@/components/about/AboutOurStory";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutUsCTA from "@/components/about/AboutUsCTA";

export default function About() {
  return (
    <Layout
      title="About Us — Zebron"
      description="Learn who we are, what we do, and how we partner with you to unlock new horizons."
    >
      <AboutHomeSection />
      <AboutOurStory />
      <AboutUsCTA/>
      <AboutWhatWeDo />
    </Layout>
  );
}
