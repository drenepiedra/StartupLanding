import React from "react";
import {
  ExternalLink,
  Cpu,
  CheckCircle2,
  BookOpen,
  Clock,
  Code,
  Award,
  Github,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const ActiveDeployments: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-6 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center mb-14">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Plataformas en línea
          </span>
        </div>
        <h2 className="font-semibold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
          Nuestra Tienda &amp; Catálogo Online
        </h2>
        <p className="text-zinc-500 mt-3">
          Componentes certificados, soporte directo y despacho rápido.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Store Card */}
        <Card
          id="store-deployment-card"
          className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 sm:p-8 flex flex-col h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Tienda Oficial</Badge>
                <Badge variant="success" className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online en vivo
                </Badge>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                component.aewhitedevs.com
              </span>
            </div>

            {/* Visual showcase */}
            <div className="aspect-[21/10] bg-zinc-50 border border-zinc-200 rounded-xl mb-6 overflow-hidden relative group-hover:from-zinc-100 transition-all">
              <img
                src="/muestra2.png"
                alt="Vista previa de la tienda online MyStore"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <h3 className="font-semibold text-xl text-zinc-900 mb-3">
              Tienda Oficial de Componentes y Hardware
            </h3>

            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Explora nuestro catálogo en línea con productos de calidad,
              los mejores componentes del mercado y los mejores precios para
              usted.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {[
                "Stock verificado",
                "Soporte directo personalizado",
                "Garantía de calidad en hardware",
                "Envíos rápidos",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-100 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Cpu className="w-4 h-4 text-brand shrink-0" />
                <span>Integración directa con nuestro ecosistema</span>
              </div>

              <a
                href="https://component.aewhitedevs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  <span>Abrir Tienda Online</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Academy Card */}
        <Card
          id="academy-learn-card"
          className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 sm:p-8 flex flex-col h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Academia Digital</Badge>
                <Badge variant="success" className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Acceso libre
                </Badge>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                drenepiedra.github.io
              </span>
            </div>

            {/* Visual showcase */}
            <div className="aspect-[21/10] bg-zinc-50 border border-zinc-200 rounded-xl mb-6 overflow-hidden relative transition-all">
              <img
                src="/muestra.png"
                alt="Vista previa de la academia AcademyLearn"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <h3 className="font-semibold text-xl text-zinc-900 mb-3">
              Academia de Aprendizaje y Desarrollo
            </h3>

            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Accede a recursos educativos estructurados, guías prácticas y
              documentación técnica diseñada para potenciar tus habilidades y
              llevar tu conocimiento al siguiente nivel.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {[
                { icon: BookOpen, label: "Contenido estructurado y progresivo" },
                { icon: Clock, label: "Acceso 24/7 a todos los materiales" },
                { icon: Code, label: "Recursos prácticos y ejemplos reales" },
                { icon: Award, label: "Aprendizaje a tu propio ritmo" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-lg px-3 py-2.5">
                    <Icon className="w-4 h-4 text-brand shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-100 mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Github className="w-4 h-4 text-brand shrink-0" />
                <span>Alojado en GitHub Pages</span>
              </div>

              <a
                href="https://drenepiedra.github.io/AcademyLearn/#01-intro.md"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  <span>Explorar la Academia</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};