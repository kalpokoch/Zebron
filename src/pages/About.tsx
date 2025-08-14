import Layout from "@/components/site/Layout";
import AboutHomeSection from "@/components/about/AboutHomeSection";
import AboutOurStory from "@/components/about/AboutOurStory";
import AboutRoadmap from "@/components/about/AboutRoadmap";
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
      <AboutRoadmap />
    </Layout>
  );
}
