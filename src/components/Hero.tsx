import React from "react";
import { motion } from "motion/react";
import { ArrowDown, ShoppingBag } from "lucide-react";
import { OriginalCatLogo } from "./OriginalCatLogo";
import { Button } from "./ui/button";

interface HeroProps {
  onExploreProjects: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onAboutClick,
}) => {
  return (
    <section
      id="hero"
      className="relative hero-bloom min-h-[88vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={onAboutClick}
          aria-label="Conocer más sobre myProject"
          className="relative group cursor-pointer transition-transform hover:scale-105">
          <OriginalCatLogo
            size={88}
            className="transition-transform"
          />
        </motion.button>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="space-y-5">
          <h1 className="font-semibold text-5xl sm:text-6xl md:text-[64px] text-zinc-900 max-w-3xl leading-[1.05] tracking-tight mx-auto">
            MyProject
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Startup dedicada a facilitarte la vida
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-md pt-2">
          <Button
            id="hero-explore-projects-btn"
            onClick={onExploreProjects}
            size="lg"
            className="w-full sm:w-auto min-w-[200px]">
            <span>Ver Proyectos &amp; Tienda</span>
            <ArrowDown className="w-4 h-4" />
          </Button>

          <a
            id="hero-store-btn"
            href="https://component.aewhitedevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px]">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]">
              <ShoppingBag className="w-4 h-4" />
              <span>Ir a la Tienda</span>
            </Button>
          </a>
        </motion.div>

        {/* Trust / Status Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              Sistema en línea
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-200">•</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-700">Tienda:</span>
            <span className="font-mono text-xs">component.aewhitedevs.com</span>
          </div>
          <span className="hidden sm:inline text-zinc-200">•</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-700">Soporte:</span>
            <span>Activo &amp; disponible</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};