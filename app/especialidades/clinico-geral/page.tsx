"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  Clock,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Activity,
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook
} from "lucide-react";

export default function ClinicoGeralLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Link do WhatsApp com mensagem pré-configurada focada na especialidade
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Vim pelo site e gostaria de agendar uma consulta com o Clínico Geral (Dra. Joyce).";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-primary selection:text-white">
      
      {/* HEADER MINIMALISTA PARA LPs (Sem menu para focar na conversão) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"}`}>
        <div className="container-custom flex items-center justify-between">
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
            Saúde Já.
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md transition-all hover:scale-105">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Agora
            </a>
          </Button>
        </div>
      </header>

      {/* HERO SECTION PREMIUM */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-[#E0F7FA] via-white to-slate-50">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Copy de Alta Conversão */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Vagas disponíveis para esta semana
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Seu primeiro passo para uma <span className="text-primary italic">saúde completa.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Avaliação médica integral, check-ups e acompanhamento humanizado com a Dra. Joyce Milena. Diagnósticos precisos no coração de Campo Grande.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1 group">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                    Agendar via WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 mt-8">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Atendimento Premium
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Activity className="w-5 h-5 text-primary" /> Exames no Local
                </div>
              </div>
            </div>

            {/* Imagem do Médico (Dra. Joyce Milena) com UI Elements Flutuantes */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/milena.jpg" 
                  alt="Dra. Joyce Milena - Clínico Geral em Recife" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20 text-white">
                  <h3 className="text-2xl font-bold">Dra. Joyce Milena</h3>
                  <p className="text-primary-foreground/80 font-medium">Clínica Médica • CRM 38.770-PE</p>
                </div>
              </div>

              {/* Elemento flutuante de prova social MOVIDO PARA O TOPO ESQUERDO */}
              <Card className="absolute top-10 -left-4 lg:-left-10 p-4 rounded-2xl shadow-xl border-none bg-white/95 backdrop-blur-sm z-20 animate-fade-in-up hidden md:flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Agendamento</p>
                  <p className="text-slate-900 font-bold">Rápido e Fácil</p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: QUANDO PROCURAR (Dor e Solução) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Quando procurar um Clínico Geral?
            </h2>
            <p className="text-slate-600 text-lg">
              O clínico geral é o especialista preparado para avaliar seu organismo como um todo. Agende sua consulta se você precisa de:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Check-up de Rotina", desc: "Avaliação preventiva anual e solicitação de exames laboratoriais completos." },
              { title: "Sintomas Inespecíficos", desc: "Dores de cabeça, cansaço frequente, tonturas, febre ou mal-estar geral." },
              { title: "Acompanhamento", desc: "Controle de pressão alta, diabetes, colesterol e renovação de receitas médicas." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar com a Recepcionista</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER REUTILIZADO DO SITE PRINCIPAL */}
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