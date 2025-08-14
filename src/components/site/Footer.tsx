import heartIcon from "@/assets/images/heart.svg";
import starIcon from "@/assets/images/star.svg";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-white py-12 md:py-16">
      {/* Decorative line with icons */}
      <div className="container relative w-full mb-8 overflow-visible">
        {/* Full-width gradient line */}
        <div className="w-full h-px bg-gradient-to-r  from-muted-foreground/40 via-transparent to-muted-foreground/40" />
      </div>

      {/* Constrained footer content */}
      <div className="container max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <a
          href="#"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          Privacy Policy
        </a>

        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          All rights reserved.
        </span>

        <a
          href="#"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
