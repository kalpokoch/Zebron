import Layout from "@/components/site/Layout";
import HomeSection from "@/components/whatwedo/HomeSection";

export default function WhatWeDo() {
    return(
        <Layout
            title="About Us — Zebron"
            description="Learn who we are, what we do, and how we partner with you to unlock new horizons."
        >
            <HomeSection />
        </Layout>
    );
}