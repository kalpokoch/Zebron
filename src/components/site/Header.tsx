import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

// Assuming the logo is in the assets/images folder
import zebronLogo from "@/assets/images/icon.svg";

const Header = () => {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#team" },
    { label: "What We Do", href: "#services" },
    { label: "Our Work", href: "#results" },
    { label: "Blog", href: "#footer" },
  ];

  // Function to close the mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="pt-10 sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo and Site Name */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={zebronLogo}
            alt="Zebron Logo"
            className="h-6 w-auto"
          />
          <span className="custom-zebron">
            Zebron
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons - hidden on mobile */}
        <div className="hidden md:inline-flex items-center p-1 border border-solid border-neutral-800 rounded-xl">
          <Button 
            variant="ghost" 
            className="px-5 py-2 text-black hover:bg-gray-100 rounded-lg"
          >
            Login
          </Button>
          <Button className="rounded-lg px-5 py-2 bg-black text-white hover:bg-neutral-800">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b z-40">
          <ul className="flex flex-col items-center gap-6 p-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu} // Close menu on link click
                  className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Action Buttons - styled like the desktop version */}
          <div className="flex justify-center p-6 border-t">
            <div className="inline-flex items-center p-1 border border-solid border-neutral-800 rounded-xl">
              <Button 
                variant="ghost" 
                className="px-5 py-2 text-black hover:bg-gray-100 rounded-lg"
              >
                Login
              </Button>
              <Button className="rounded-lg px-5 py-2 bg-black text-white hover:bg-neutral-800">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
