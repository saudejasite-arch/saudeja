"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  MessageCircle,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Phone,
  MapPin
} from "lucide-react";

export default function NeurologiaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Preciso de um Neurologista. Gostaria de agendar uma avaliação clínica.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER MINIMALISTA */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"}`}>
        <div className="container-custom flex items-center justify-between">
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Saúde Já.
          </div>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-md transition-all">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
          </Button>
        </div>
      </header>

      {/* HERO SECTION - NEUROLOGIA */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50/20">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold">
                <Brain className="w-4 h-4" />
                Diagnóstico e Tratamento Neurológico
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Atenção especializada para a saúde do seu <span className="text-indigo-600 italic">cérebro.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Investigação rigorosa e tratamentos modernos para doenças do sistema nervoso central e periférico. Segurança clínica e diagnósticos em que você pode confiar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1 group">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Falar com Atendimento Médico
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 mt-8">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Activity className="w-5 h-5 text-indigo-600" /> Abordagem Investigativa
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" /> Excelência Clínica
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/placeholder.jpg" 
                  alt="Médico Neurologista" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20 text-white">
                  <h3 className="text-2xl font-bold">Dr. Especialista</h3>
                  <p className="text-indigo-300 font-medium">Neurologia Clínica</p>
                </div>
              </div>

              {/* Gatilho CRO: Foco na precisão diagnóstica */}
              <Card className="absolute top-10 -left-4 lg:-left-10 p-4 rounded-2xl shadow-xl border-none bg-white/95 backdrop-blur-sm z-20 hidden md:flex items-center gap-4 border-l-4 border-l-indigo-500">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Diagnóstico</p>
                  <p className="text-slate-900 font-bold">Preciso e Rápido</p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: ÁREAS DE ATUAÇÃO DA NEUROLOGIA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Principais condições tratadas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cefaleias e Enxaquecas", desc: "Investigação da causa raiz de dores de cabeça frequentes para instituir tratamento preventivo e profilático eficaz." },
              { title: "Distúrbios de Memória", desc: "Avaliação cognitiva detalhada para diagnóstico precoce de Alzheimer, demências e déficits de atenção." },
              { title: "Doenças do Movimento", desc: "Controle clínico e acompanhamento especializado para pacientes com Doença de Parkinson, tremores essenciais e distonias." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-slate-100 hover:border-indigo-300 transition-colors">
                <Brain className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETO PADRÃO SAÚDE JÁ */}
      <footer className="bg-[#1a4f5a] text-white pt-16 pb-8 mt-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
            <div className="space-y-6">
              <div className="font-heading text-3xl font-bold text-white">Saúde Já.</div>
              <p className="text-white/70 leading-relaxed">
                Cuidando de você com excelência, tecnologia e carinho. Sua saúde é nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">Endereço</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <span>R. N S da Glória, 203 - Campo Grande<br/>Recife - PE, 52031-050</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">Contato Urgente</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  (81) 3204-5760
                </li>
                <li>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white mt-2">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar via WhatsApp</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-white/50">
            <p>© 2026 Saúde Já. Todos os direitos reservados. Design by @EZZECOMUNICAÇÃO</p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-[60] flex items-center gap-2 group">
        <MessageCircle className="w-7 h-7" />
        <span className="hidden md:block group-hover:block whitespace-nowrap font-medium pr-2">Agendar Consulta</span>
      </a>
    </div>
  );
}