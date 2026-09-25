import React from "react";
import { X, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

interface LegalModalProps {
  type: "terms" | "privacy" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/40 backdrop-blur-sm"
      onClick={onClose}>
      <div
        className="bg-white border border-zinc-200 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={type === "terms" ? "Términos de Servicio" : "Política de Privacidad"}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-muted text-zinc-900">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-900">
                {type === "terms"
                  ? "Términos de Servicio y Garantía de Hardware"
                  : "Política de Privacidad y Protección de Datos"}
              </h3>
              <p className="text-xs text-zinc-400">
                MYPROJECT • COMPONENTES &amp; INGENIERÍA TECNOLÓGICA
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="text-zinc-400 hover:text-zinc-900 p-2 rounded-lg hover:bg-zinc-100 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-zinc-600 leading-relaxed">
          {type === "terms" ? (
            <>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                1. Calidad de Componentes e Integración
              </h4>
              <p>
                Todos los componentes y módulos provistos a través de nuestra
                plataforma y tienda oficial (component.aewhitedevs.com) cuentan
                con verificación de funcionamiento y especificaciones técnicas
                oficiales para desarrollo de prototipos y producción.
              </p>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                2. Seguridad y Estándares Técnicos
              </h4>
              <p>
                Nuestros diseños y proyectos de hardware implementan protecciones
                de sobretensión, bajo consumo energético y aislamiento seguro
                para operar de manera confiable en entornos domésticos e
                industriales.
              </p>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                3. Propiedad Intelectual y Soporte
              </h4>
              <p>
                Brindamos soporte técnico directo sobre nuestros productos y
                servicios a medida, respetando la confidencialidad y
                requerimientos específicos de cada cliente.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                1. Tratamiento de Información Personal
              </h4>
              <p>
                Los datos de contacto provistos a través de nuestro formulario o
                correo electrónico se utilizan exclusivamente para responder a
                tus consultas comerciales y prestar los servicios técnicos
                solicitados.
              </p>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                2. Privacidad y Seguridad
              </h4>
              <p>
                No compartimos, vendemos ni cedemos datos personales a terceros.
                Toda comunicación se gestiona bajo estrictos criterios de
                confidencialidad y buenas prácticas de seguridad informática.
              </p>
              <h4 className="text-[15px] font-semibold text-zinc-900">
                3. Contacto Directo
              </h4>
              <p>
                Para cualquier solicitud relacionada con tus datos o proyectos,
                puedes comunicarte directamente al correo electrónico oficial:
                drenepiedra@gmail.com.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-100 flex justify-end">
          <Button onClick={onClose}>Entendido y Aceptar</Button>
        </div>
      </div>
    </div>
  );
};