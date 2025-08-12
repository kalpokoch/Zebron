const Footer = () => {
  return (
    <footer id="footer" className="container py-12 md:py-16">
      <div className="relative mb-8">
        {/* Heart doodle (left) */}
        <svg
          aria-hidden
          className="absolute -left-10 -top-6 h-20 w-40 text-muted-foreground/40"
          viewBox="0 0 200 100"
          fill="none"
        >
          <path
            d="M5 60 C50 20, 80 20, 100 60 C120 100, 160 90, 190 40"
            stroke="currentColor"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
        </svg>

        {/* Star (right) */}
        <svg
          aria-hidden
          className="absolute right-0 -top-4 h-8 w-8 text-foreground/70"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
        </svg>

        <hr className="border-t" />
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <span>All rights reserved.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
