"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Baby,
  MessageCircle,
  ShieldCheck,
  Heart,
  Smile,
  Phone,
  MapPin
} from "lucide-react";

export default function PediatriaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Preciso marcar um Pediatra para o meu filho(a). Podem me ajudar?";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-orange-400 selection:text-white">
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"}`}>
        <div className="container-custom flex items-center justify-between">
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-orange-400 to-primary bg-clip-text text-transparent">
            Saúde Já.
          </div>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-md transition-all">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50/30">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-sm font-semibold">
                <Smile className="w-4 h-4" />
                Clínica com Espaço Kids Exclusivo
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Amor e proteção para o seu <span className="text-orange-500 italic">maior tesouro.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Pediatria humanizada, atenta e gentil. Do acompanhamento do crescimento (puericultura) até o cuidado imediato nas horas de febre.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1 group">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Falar com a Recepção Infantil
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 mt-8">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <ShieldCheck className="w-5 h-5 text-orange-500" /> Corpo Clínico Experiente
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Heart className="w-5 h-5 text-orange-500" /> Atendimento Humanizado
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/luis.jpg" 
                  alt="Dr. Luis Cavalcanti - Pediatra" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20 text-white">
                  <h3 className="text-2xl font-bold">Dr. Luis Cavalcanti</h3>
                  <p className="text-orange-300 font-medium">Pediatria e Puericultura • CRM 38.618-PE</p>
                </div>
              </div>

              {/* Gatilho Focado na Mãe/Pai */}
              <Card className="absolute top-10 -left-4 lg:-left-10 p-4 rounded-2xl shadow-xl border-none bg-white/95 backdrop-blur-sm z-20 hidden md:flex items-center gap-4 border-l-4 border-l-orange-500">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Tranquilidade</p>
                  <p className="text-slate-900 font-bold">Para os Pais</p>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO PEDIATRIA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Cuidado completo, do nascimento à adolescência
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Puericultura (Rotina)", desc: "Acompanhamento mensal de peso, altura, desenvolvimento motor e cognitivo do seu bebê." },
              { title: "Sintomas Agudos", desc: "Atendimento ágil para febres, infecções de garganta, viroses e desconfortos respiratórios." },
              { title: "Orientação Alimentar", desc: "Suporte na introdução alimentar, dificuldades na amamentação e nutrição infantil." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border border-slate-100 hover:border-orange-300 transition-colors">
                <Baby className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer whatsappLink={whatsappLink} />
    </div>
  );
}

function Footer({ whatsappLink }: { whatsappLink: string }) { /* Mesmo componente do anterior */ return (<></>); }