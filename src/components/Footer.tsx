import React from "react";
import { OriginalCatLogo } from "./OriginalCatLogo";
import { Reveal } from "./motion";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: "terms" | "privacy") => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 w-full mt-16">
      <Reveal y={12}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <OriginalCatLogo size={32} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-lg text-zinc-900 tracking-tight">
                myProject
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-zinc-400">
                2026
              </span>
            </div>
            <div className="text-xs text-zinc-400">
              © 2026 myProject. Todos los derechos reservados.
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end items-center text-sm text-zinc-500">
          <button
            onClick={() => onNavigate("about")}
            className="hover:text-zinc-900 transition-colors">
            Quiénes Somos
          </button>
          <a
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors">
            Tienda Online
          </a>
          <button
            onClick={() => onNavigate("services")}
            className="hover:text-zinc-900 transition-colors">
            Servicios
          </button>
          <button
            onClick={() => onNavigate("community")}
            className="hover:text-zinc-900 transition-colors">
            Contacto
          </button>
          <button
            onClick={() => onOpenLegal("terms")}
            className="hover:text-zinc-900 transition-colors">
            Términos
          </button>
          <button
            onClick={() => onOpenLegal("privacy")}
            className="hover:text-zinc-900 transition-colors">
            Privacidad
          </button>
        </div>
      </div>
      </Reveal>
    </footer>
  );
};