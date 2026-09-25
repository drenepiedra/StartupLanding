import React from "react";
import {
  Clapperboard,
  Video,
  Scissors,
  Palette,
  AudioLines,
  Captions,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Reveal } from "./motion";

interface AudiovisualSectionProps {
  onContactClick: () => void;
}

const SERVICES = [
  {
    icon: Video,
    title: "Edición de Video Profesional",
    description:
      "Montaje pulido, cortes precisos y ritmo narrativo para piezas promocionales, corporativas y redes sociales.",
  },
  {
    icon: Scissors,
    title: "Producción & Montaje",
    description:
      "Grabación y post-producción completa: guion, plan de rodaje y ensamblaje final del material audiovisual.",
  },
  {
    icon: Palette,
    title: "Colorización & Estética",
    description:
      "Corrección y gradación de color para lograr una imagen consistente, profesional y alineada a tu marca.",
  },
  {
    icon: AudioLines,
    title: "Audio & Música",
    description:
      "Sincronización de audio, voz en off, diseño sonoro y selección musical que elevan la calidad final.",
  },
  {
    icon: Captions,
    title: "Subtítulos & Adaptación",
    description:
      "Subtitulación, adaptación a formatos verticales y empaquetado optimizado para cada plataforma.",
  },
];

const PORTFOLIO = [
  {
    src: "/imagen.jpg",
    label: "Producción Audiovisual",
    caption: "Fotografía y piezas visuales para tu marca",
  },
  {
    src: "/imagen2.webp",
    label: "Edición de Video",
    caption: "Montaje, color y post-producción profesional",
  },
];

export const AudiovisualSection: React.FC<AudiovisualSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section id="audiovisual" className="py-16 sm:py-20 px-6 max-w-6xl mx-auto border-t border-zinc-100 mt-12 scroll-mt-24">
      <Reveal className="text-center mb-14">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Servicios audiovisuales
          </span>
        </div>
        <h2 className="font-semibold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
          Producción y Edición de Video
        </h2>
        <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
          Creamos contenido audiovisual profesional que comunica tu mensaje con
          impacto: desde la grabación hasta la entrega final lista para publicar.
        </p>
      </Reveal>

      {/* Portfolio images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-14">
        {PORTFOLIO.map((item, idx) => (
          <Reveal key={item.src} delay={idx * 0.12}>
          <figure
            className="group relative overflow-hidden rounded-xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <img
              src={item.src}
              alt={item.label}
              loading="lazy"
              className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/40 to-transparent px-5 pt-14 pb-4">
              <div className="flex items-center gap-2 text-white">
                <Clapperboard className="w-4 h-4 shrink-0" />
                <span className="font-semibold text-white">{item.label}</span>
              </div>
              <p className="text-sm text-white/80 mt-0.5">{item.caption}</p>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Reveal key={idx} delay={(idx % 3) * 0.08}>
            <Card
              className="transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-muted text-zinc-900 shrink-0">
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            </Reveal>
          );
        })}

        {/* CTA card */}
        <Reveal delay={0.16} className="h-full">
        <Card className="border-brand/20 bg-brand/5 transition-all duration-300 hover:shadow-md h-full">
          <CardContent className="p-5 h-full flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-brand mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-[18px] h-[18px]" />
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Cuéntanos tu idea audiovisual y te enviamos una propuesta a
                medida con tiempos y presupuesto claro.
              </p>
            </div>
            <Button onClick={onContactClick} className="w-full mt-auto">
              Solicitar una cotización
            </Button>
          </CardContent>
        </Card>
        </Reveal>
      </div>
    </section>
  );
};