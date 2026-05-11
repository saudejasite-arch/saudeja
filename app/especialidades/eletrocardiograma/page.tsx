"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  MessageCircle,
  Clock,
  ArrowLeft,
  ShieldCheck,
  Heart,
  FileSearch,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return { ref, isVisible };
};

const faqECG = [
  {
    pergunta: "O exame dói ou dá choque?",
    resposta: "Absolutamente não. O eletrocardiograma é um exame indolor e não invasivo. Os eletrodos apenas captam a atividade elétrica natural do seu coração, sem emitir qualquer descarga elétrica para o corpo.",
  },
  {
    pergunta: "Precisa de algum preparo especial?",
    resposta: "O único preparo é evitar o uso de cremes ou óleos no peito antes do exame, pois isso pode dificultar a fixação dos eletrodos. Homens com muitos pelos na região do tórax podem precisar de uma pequena tricotomia (raspagem) local para garantir o contato.",
  },
  {
    pergunta: "O resultado serve para Risco Cirúrgico?",
    resposta: "Sim! O ECG é o exame base para qualquer avaliação de risco cirúrgico. Na Saúde Já, oferecemos o laudo rapidamente para que você não atrase seu procedimento.",
  },
];

export default function ECGPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Preciso agendar um Eletrocardiograma.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-500 selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-sm py-3" : "bg-white/80 py-4 border-b border-slate-100"}`}>
        <div className="container-custom mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Voltar</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-teal-600 to-primary bg-clip-text text-transparent">Saúde Já</div>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agendar ECG</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-teal-50 relative overflow-hidden" ref={heroRef}>
        <div className="container-custom mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold mb-6 transition-all duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}>
            <Heart className="w-4 h-4" /> Avaliação Cardiológica Rápida
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 transition-all duration-1000 delay-100 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Eletrocardiograma com <span className="text-teal-600 italic">laudo rápido.</span>
          </h1>
          <p className={`text-xl text-slate-600 mb-8 transition-all duration-1000 delay-200 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Essencial para check-ups, risco cirúrgico e investigação de palpitações ou dores no peito. Atendimento humanizado e sem burocracia.
          </p>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-14 px-10 text-lg font-bold shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6" /> Agendar Agora
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Por que fazer seu ECG na Saúde Já?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <Clock className="w-10 h-10 text-teal-600 shrink-0" />
               <div>
                 <h3 className="font-bold text-lg">Sem filas de espera</h3>
                 <p className="text-slate-600">Chegou, apresentou o pedido e realizou. Respeitamos o seu tempo.</p>
               </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <FileSearch className="w-10 h-10 text-teal-600 shrink-0" />
               <div>
                 <h3 className="font-bold text-lg">Laudos Especializados</h3>
                 <p className="text-slate-600">Interpretados por médicos capacitados para total segurança.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-custom mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Comuns</h2>
          <div className="space-y-4">
            {faqECG.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg text-teal-700 mb-2">{f.pergunta}</h3>
                <p className="text-slate-600 leading-relaxed">{f.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="opacity-60">Saúde Já - Campo Grande, Recife.</p>
      </footer>
    </div>
  );
}