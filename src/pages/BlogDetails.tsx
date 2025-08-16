import Layout from "@/components/site/Layout";
import BlogHero from "@/components/blogdetails/BlogHero";
import BlogArticle from "@/components/blogdetails/BlogArticle";

export default function Blog() {
    return (
        <Layout
            title="About Us — Zebron"
            description="Learn who we are, what we do, and how we partner with you to unlock new horizons."
        >
        <BlogHero />
        <BlogArticle />
        </Layout>
    )
}