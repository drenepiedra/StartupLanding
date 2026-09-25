import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { OriginalCatLogo } from "./OriginalCatLogo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "Quiénes Somos" },
    { id: "projects", label: "Tienda & Proyectos" },
    { id: "services", label: "Servicios" },
    { id: "community", label: "Contacto" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-zinc-200 shadow-[0_1px_2px_rgba(24,24,27,0.04)]"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      )}>
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-6xl mx-auto">
        {/* Brand */}
        <button
          id="nav-brand-btn"
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-2.5 text-left group focus:outline-none min-w-0">
          <OriginalCatLogo
            size={36}
            className="transition-transform group-hover:scale-105 shrink-0"
          />
          <span className="font-semibold text-lg text-zinc-900 tracking-tight leading-none truncate">
            myProject
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={cn(
                  "text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-md",
                  isActive
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-500 hover:text-zinc-900"
                )}>
                {link.label}
              </button>
            );
          })}

          <a
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer">
            <Button variant="default" size="sm" className="gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Tienda Online</span>
            </Button>
          </a>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-zinc-900 text-white px-3.5 py-2 text-xs font-medium hover:bg-zinc-800 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Tienda</span>
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-600 hover:text-zinc-900 p-2 rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu">
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 shadow-sm px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={cn(
                "block w-full text-left py-2.5 text-base rounded-md transition-colors",
                activeSection === link.id
                  ? "text-zinc-900 font-medium"
                  : "text-zinc-600 hover:text-zinc-900"
              )}>
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-zinc-100">
            <a
              href="https://component.aewhitedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand py-1 font-medium">
              <ShoppingBag className="w-4 h-4" />
              Visitar Tienda Oficial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};