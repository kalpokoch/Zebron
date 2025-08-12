import heartIcon from "@/assets/images/heart.svg";
import starIcon from "@/assets/images/star.svg";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-white py-12 md:py-16">
      {/* Decorative line with icons - full width */}
      <div className="relative w-full mb-8">
        {/* Heart doodle (left) */}
        <img
          src={heartIcon}
          alt="Heart doodle"
          className="hidden md:block absolute left-[-12rem] top-[-20rem] h-[19rem] w-auto opacity-70"
        />

        <div className="w-full h-px bg-gradient-to-r from-muted-foreground/40 via-transparent to-muted-foreground/40" />

        {/* Star (right) */}
        <img
          src={starIcon}
          alt="Star"
          className="hidden md:block absolute right-[-10rem] top-[-10rem] h-[5rem] w-auto opacity-90"
        />
      </div>

      {/* Constrained footer content */}
      <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
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
