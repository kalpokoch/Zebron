import Layout from "@/components/site/Layout";
import Ourworks from "@/components/ourwork/Ourworks";
import WorkImg from "@/components/ourwork/WorkImg";
import AboutUsCTA from "@/components/about/AboutUsCTA";

export default function About() {
  return (
    <Layout
      title="Our Works — Zebron"
      description="Learn who we are, what we do, and how we partner with you to unlock new horizons."
    >
      <Ourworks/>
      <WorkImg/>
    </Layout>
  );
}
