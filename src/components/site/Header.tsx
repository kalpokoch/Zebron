import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

// Correctly import the logo from its new location
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
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Site Name */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={zebronLogo}
            alt="Zebron Logo"
            className="h-7 w-auto" // Adjusted size slightly
          />
          <span className="font-bold text-lg tracking-tight">Zebron</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="rounded-full px-5">
            Login
          </Button>
          <Button className="rounded-full px-5">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b z-40">
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
          <div className="flex flex-col items-center gap-4 p-6 border-t">
            <Button variant="outline" className="w-full rounded-full">
              Login
            </Button>
            <Button className="w-full rounded-full">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;