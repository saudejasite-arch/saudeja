"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  MessageCircle,
  Eye,
  MonitorPlay,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  CalendarCheck
} from "lucide-react";

// --- HOOKS DE ANIMAÇÃO ---
const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return { ref, isVisible };
};

// --- DADOS DO FAQ (ULTRASSOM GERAL) ---
const faqUltrassom = [
  {
    pergunta: "Preciso de fazer jejum para a ultrassonografia?",
    resposta: "Depende do tipo de ultrassom. Para exames do abdómen total ou superior, geralmente é exigido um jejum de 6 a 8 horas para evitar que gases intestinais atrapalhem as imagens. Para ultrassons pélvicos, transvaginais ou articulares, não é necessário jejum. A nossa equipa informa-o de todo o preparo no momento do agendamento.",
  },
  {
    pergunta: "É preciso beber água antes do exame?",
    resposta: "Sim, especificamente para a Ultrassonografia Pélvica via abdominal e de Vias Urinárias. Nestes casos, solicitamos que beba cerca de 4 a 6 copos de água uma hora antes do exame e retenha a urina, pois a bexiga cheia funciona como uma 'janela' que permite ao médico ver o útero, os ovários ou a próstata com maior clareza.",
  },
  {
    pergunta: "O laudo do ultrassom é entregue na hora?",
    resposta: "Na grande maioria dos casos, sim! O nosso compromisso é com a sua agilidade e tranquilidade. O médico especialista redige o laudo logo após a avaliação e entrega-o rapidamente.",
  },
];

export default function UltrassomLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Tenho um pedido médico e preciso agendar um exame de Ultrassom.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-purple-500 selection:text-white">
      
      {/* HEADER MINIMALISTA */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md py-3" : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"}`}>
        <div className="container-custom mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            Saúde Já
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center gap-2"
          >
            Agendar Exame
          </a>
        </div>
      </header>

      {/* HERO SECTION - ULTRASSOM */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-fuchsia-50/30" ref={heroRef}>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl"></div>
        
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                <MonitorPlay className="w-4 h-4" />
                Diagnóstico por Imagem Avançado
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Imagens nítidas e laudos com máxima <span className="text-purple-600 italic">precisão.</span>
              </h1>
              
              <p className={`text-xl text-slate-600 leading-relaxed max-w-lg transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Equipamentos de ultrassonografia de última geração para avaliações obstétricas, abdominais, articulares e com Doppler. Rapidez e segurança no seu diagnóstico.
              </p>

              <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-green-500/20 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 font-bold group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Enviar Pedido Médico
                </a>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-200/60 mt-8">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Clock className="w-5 h-5 text-purple-600" /> Agenda Rápida
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <Eye className="w-5 h-5 text-purple-600" /> Alta Resolução
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-500 ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/image2.png" 
                  alt="Equipamento de Ultrassom Moderno" 
                  className="w-full h-auto object-cover aspect-[4/5] bg-slate-100"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 pt-20 text-white">
                  <h3 className="text-2xl font-bold flex items-center gap-2"><CalendarCheck className="w-6 h-6 text-purple-400" /> Laudos na Hora</h3>
                  <p className="text-purple-200 font-medium mt-1">Praticidade para apresentar ao seu médico</p>
                </div>
              </div>

              {/* Gatilho CRO: Laudo Imediato/Rápido */}
              <div className="absolute top-10 -left-4 lg:-left-10 p-4 rounded-2xl shadow-xl border-none bg-white/95 backdrop-blur-sm z-20 hidden md:flex items-center gap-4 border-l-4 border-l-purple-500">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">O seu Laudo</p>
                  <p className="text-slate-900 font-bold">Rápido e Confiável</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: TIPOS DE ULTRASSOM */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Exames Realizados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Saúde da Mulher & Gestação", desc: "Ultrassom Transvaginal, Pélvica, Mamas e exames obstétricos completos (morfológico, 3D/4D) para acompanhar o seu bebé." },
              { title: "Medicina Interna", desc: "Ultrassonografia de Abdómen Total e Superior, vias urinárias, próstata e tiroide com alta precisão diagnóstica." },
              { title: "Doppler Colorido", desc: "Avaliação detalhada do fluxo sanguíneo em artérias e veias, fundamental para rastreio de tromboses e problemas vasculares." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-purple-300 transition-colors shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <MonitorPlay className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - PERGUNTAS FREQUENTES ULTRASSOM */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Preparo e informações essenciais antes da sua ultrassonografia.</p>
          </div>
          
          <div className="space-y-4">
            {faqUltrassom.map((faq, idx) => (
              <FaqItem key={idx} pergunta={faq.pergunta} resposta={faq.resposta} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETO PADRÃO SAÚDE JÁ */}
      <footer className="bg-[#1a4f5a] text-white pt-16 pb-8">
        <div className="container-custom mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
            <div className="space-y-6">
              <div className="font-heading text-3xl font-bold text-white">Saúde Já.</div>
              <p className="text-white/70 leading-relaxed">
                Cuidando de si com excelência, tecnologia e carinho. A sua saúde é a nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-purple-400">Endereço</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                  <span>R. N S da Glória, 203 - Campo Grande<br/>Recife - PE, 52031-050</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-purple-400">Contacto Urgente</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  (81) 3204-5760
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-medium transition-colors w-full text-center">
                    Agendar via WhatsApp
                  </a>
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
        <span className="hidden md:block group-hover:block whitespace-nowrap font-medium pr-2">Agendar Exame</span>
      </a>
    </div>
  );
}

// --- SUB-COMPONENTE PARA O ACORDEÃO DO FAQ ---
function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-lg pr-4">{pergunta}</span>
        <ChevronDownIcon isOpen={isOpen} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}