import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FooterDecor from "@/components/site/FooterDecor";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Layout({ title, description, children }: Props) {
  return (
    <div>
      {title && (
        <Helmet>
          <title>{title}</title>
          {description && <meta name="description" content={description} />}
          <link rel="canonical" href={typeof window !== "undefined" ? window.location.pathname : "/"} />
        </Helmet>
      )}

      <Header />
      {/* Keep page content constrained */}
      <main className="max-w-[1920px] mx-auto">{children}</main>

      {/* Footer stays constrained */}
      <Footer />

      {/* Mounted outside the container via portal — reaches viewport edges */}
      <FooterDecor />
    </div>
  );
}
