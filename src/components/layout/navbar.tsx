import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/phase1", label: "Phase I" },
    { href: "/phase2", label: "Phase II" },
    { href: "/phase3", label: "Phase III" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-research-blue cursor-pointer">
                CDRI Research
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`transition-colors cursor-pointer ${
                    isActive(link.href)
                      ? "text-research-blue font-medium"
                      : "text-gray-700 hover:text-research-blue"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <i className="fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <h2 className="text-xl font-bold text-research-blue">CDRI Research</h2>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={`block py-2 text-lg transition-colors cursor-pointer ${
                          isActive(link.href)
                            ? "text-research-blue font-medium"
                            : "text-gray-700 hover:text-research-blue"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
