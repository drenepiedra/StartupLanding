import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ShoppingBag, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export const CommunitySection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const myEmail = 'drenepiedra@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="community" className="py-16 sm:py-20 px-6 max-w-6xl mx-auto border-t border-zinc-100 mt-12 scroll-mt-24">
      <div className="text-center mb-14">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-brand">
            Contacto directo
          </span>
        </div>
        <h2 className="font-semibold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
          Hablemos de tu Próximo Proyecto
        </h2>
        <p className="text-zinc-500 mt-3">
          Asesoría personalizada y respuesta rápida.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact + form card */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-zinc-900">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Canal de contacto oficial
                </span>
                <h3 className="font-semibold text-xl text-zinc-900">
                  Escríbenos Directamente
                </h3>
              </div>
            </div>

            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              ¿Tienes una idea de hardware, necesitas asesoría técnica o
              quieres colaborar en un desarrollo? Estamos a tu disposición para
              responder cualquier consulta.
            </p>

            {/* Email box */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-white border border-zinc-200 text-brand shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 block">
                    Correo electrónico
                  </span>
                  <a
                    href={`mailto:${myEmail}`}
                    className="text-sm sm:text-base font-mono font-semibold text-zinc-900 hover:text-brand break-all transition-colors">
                    {myEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="sm"
                  title="Copiar correo al portapapeles">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </Button>

                <a href={`mailto:${myEmail}`}>
                  <Button size="sm">
                    <span>Enviar Email</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick message form */}
            <form onSubmit={handleSendMessage} className="space-y-3.5 pt-4 border-t border-zinc-100">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block">
                O envíanos un mensaje rápido desde aquí
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  type="text"
                  required
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  type="email"
                  required
                  placeholder="Tu Correo Electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <Textarea
                required
                rows={3}
                placeholder="Cuéntanos brevemente sobre tu proyecto o consulta..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {messageSent ? (
                  <span className="text-sm text-emerald-600 flex items-center gap-1.5">
                    <Check className="w-4 h-4 shrink-0" /> ¡Mensaje enviado con
                    éxito!
                  </span>
                ) : (
                  <span className="text-xs text-zinc-400">
                    Respuesta garantizada en menos de 24 horas
                  </span>
                )}
                <Button type="submit" className="shrink-0">
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Links card */}
        <Card className="flex flex-col">
          <CardContent className="p-6 flex flex-col justify-between gap-6 h-full">
            <div>
              <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-zinc-900 mb-4">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 mb-2">
                Tienda &amp; Academia
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                Visita nuestra tienda y academia para adquirir componentes de
                hardware, componentes para prototipos y sensores certificados.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="https://component.aewhitedevs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full">
                  <Button className="w-full">
                    <span className="truncate">component.aewhitedevs.com</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </Button>
                </a>
                <a
                  href="https://drenepiedra.github.io/AcademyLearn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full">
                  <Button variant="outline" className="w-full">
                    <span className="truncate">
                      drenepiedra.github.io/AcademyLearn/
                    </span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100">
              <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
                Ubicación &amp; Despachos
              </div>
              <p className="text-sm text-zinc-700">
                California #17 / Regla y Caridad .rpto Modelo . mncipio Regla
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};