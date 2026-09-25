import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, Cpu, HeartHandshake, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Reveal } from './motion';
import { cn } from '@/lib/utils';

export const SystemArchitecture: React.FC = () => {
  const [showReasons, setShowReasons] = useState(false);

  const valueProps = [
    {
      title: '1. Ingeniería de Alta Precisión & Calidad',
      description:
        'Diseñamos cada componente y línea de código bajo estándares industriales de máxima fiabilidad. Cuidamos cada detalle técnico para garantizar rendimiento y durabilidad superior.',
      icon: Award,
    },
    {
      title: '2. Soluciones a Medida & Escalables',
      description:
        'No creemos en soluciones genéricas. Estudiamos tus necesidades particulares y construimos arquitecturas modulares que evolucionan y crecen al ritmo de tus objetivos.',
      icon: Zap,
    },
    {
      title: '3. Ecosistema Tecnológico Completo',
      description:
        'Desde la concepción y prototipado rápido en hardware hasta el despliegue de firmware y software en la nube, cubrimos el ciclo completo sin intermediarios.',
      icon: Cpu,
    },
    {
      title: '4. Trato Directo, Cercano & Transparente',
      description:
        'Trabajas directamente con ingenieros y desarrolladores apasionados. Respuestas rápidas, comunicación clara y soporte continuo en cada etapa del camino.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-6 max-w-6xl mx-auto relative scroll-mt-24">
      <Reveal>
        <div className="bg-gradient-to-b from-zinc-50 to-white border border-zinc-200 rounded-xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto">
            <Reveal delay={0.05}>
              <div className="mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-brand">
                  Nuestra Identidad &amp; Filosofía
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-semibold text-3xl sm:text-4xl text-zinc-900 mb-6 tracking-tight">
                ¿Quiénes somos?
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-zinc-600 text-base sm:text-lg mb-4 leading-relaxed">
                Somos un equipo especializado de ingenieros, desarrolladores de
                software y apasionados de la innovación tecnológica. Nuestro
                objetivo principal es transformar ideas complejas en soluciones
                prácticas, confiables y de vanguardia.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                Creemos firmemente en el código limpio, las relaciones duraderas
                con nuestros clientes y colaboradores.
              </p>
            </Reveal>

            {/* Leveraging: why choose us */}
            <div className="mt-8 pt-6 border-t border-zinc-200">
            <button
              id="toggle-reasons-btn"
              onClick={() => setShowReasons(!showReasons)}
              aria-expanded={showReasons}
              className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-brand transition-colors group">
              <span>
                {showReasons
                  ? 'Ocultar razones para elegirnos'
                  : '¿Por qué elegirnos? Haz clic para ver nuestras ventajas'}
              </span>
              {showReasons ? (
                <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:translate-y-[-1px] transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:translate-y-[1px] transition-transform" />
              )}
            </button>

            {showReasons && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valueProps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={idx} delay={idx * 0.07} className="h-full">
                      <Card
                        className={cn(
                          'transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full',
                          idx % 2 === 1 && 'sm:translate-y-4'
                        )}>
                        <CardContent className="p-5 flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 rounded-lg bg-muted text-zinc-900 shrink-0">
                              <Icon className="w-[18px] h-[18px]" />
                            </div>
                            <h3 className="text-sm font-semibold text-zinc-900">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm text-zinc-500 leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};