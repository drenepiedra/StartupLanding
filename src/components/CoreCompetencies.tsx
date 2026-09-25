import React, { useState } from 'react';
import { Competency } from '../types';
import { Terminal, Cpu, Brain, CheckCircle2, ChevronRight, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface CoreCompetenciesProps {
  competencies: Competency[];
  onContactClick: () => void;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({
  competencies,
  onContactClick,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-6 h-6" />;
      case 'developer_board':
        return <Cpu className="w-6 h-6" />;
      case 'psychology':
        return <Brain className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-6 max-w-6xl mx-auto border-t border-zinc-100 mt-12 scroll-mt-24">
      <div className="text-center mb-14">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Especialidades
          </span>
        </div>
        <h2 className="font-semibold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
          Nuestros Servicios &amp; Especialidades
        </h2>
        <p className="text-zinc-500 mt-3">
          Desarrollo de software a medida y productos personalizados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((comp) => {
          const isExpanded = expandedId === comp.id;

          return (
            <Card
              key={comp.id}
              id={`competency-${comp.id}`}
              className={cn(
                'flex flex-col items-center text-center p-6 transition-all duration-300 group h-full',
                isExpanded && 'shadow-md'
              )}>
              <CardContent className="p-0 flex flex-col items-center h-full w-full">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-200 transition-colors">
                  {getIcon(comp.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xl text-zinc-900 mb-3">
                  {comp.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {comp.description}
                </p>

                {/* Expand toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : comp.id)}
                  aria-expanded={isExpanded}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-brand transition-colors">
                  <span>
                    {isExpanded
                      ? 'Ocultar detalles'
                      : 'Ver capacidades y tecnologías'}
                  </span>
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 text-zinc-400 transition-transform',
                      isExpanded && 'rotate-90'
                    )}
                  />
                </button>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="w-full mt-5 pt-4 border-t border-zinc-100 text-left">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 mb-2">
                      Stack Tecnológico Principal
                    </div>
                    <div className="text-xs text-zinc-700 font-mono mb-4 bg-zinc-50 p-2.5 rounded-lg border border-zinc-100">
                      {comp.specs}
                    </div>

                    <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 mb-2">
                      Entregables y Soluciones
                    </div>
                    <ul className="space-y-1.5 text-sm text-zinc-600 mb-5">
                      {comp.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={onContactClick}
                      variant="outline"
                      className="w-full">
                      <Mail className="w-4 h-4" />
                      <span>Consultar por este servicio</span>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};