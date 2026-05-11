"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Clock,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
  Stethoscope,
  Baby
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

// --- DADOS DO FAQ (ECOFETAL) ---
const faqData = [
  {
    pergunta: "Dá para ver o bebé em 3D?",
    resposta: "Na grande maioria das vezes, não. O foco não é a fisionomia do bebé. O ecofetal é um exame extremamente técnico e estrutural. A imagem no ecrã será predominantemente em 2D (em tons de cinza) com alguns 'flashes' de cores vermelhas e azuis. Estas cores são o Doppler, uma ferramenta vital para o médico ver a direção e a velocidade do sangue a fluir dentro do coraçãozinho. Embora existam tecnologias avançadas que geram imagens 3D do coração para análise médica, elas servem para o médico avaliar as válvulas, não para mostrar o rostinho em 3D para a mãe.",
  },
  {
    pergunta: "Consegue-se ver o bebé todo?",
    resposta: "Dá para ver um pouco no início, mas o foco do ecrã ficará quase 100% do tempo apenas no coração. O médico vai localizar o bebé na barriga, mas logo de seguida dará um 'zoom' enorme no peito da criança. É muito importante alinhar esta expectativa: diferente do ultrassom morfológico (onde se veem mãos, pés, coluna e rosto), no ecofetal passará a maior parte do exame a olhar para uma imagem focada e ampliada de um coração a pulsar muito rápido.",
  },
  {
    pergunta: "Como o exame é feito? É transvaginal ou por cima da barriga?",
    resposta: "É feito por cima da barriga (via abdominal). Como o período ideal para realizar o ecocardiograma fetal é, geralmente, entre a 24ª e a 28ª semana de gestação, o bebé e o útero já estão grandes o suficiente para serem avaliados pela parede abdominal. O médico aplica um gel na barriga da mãe e desliza o aparelho (transdutor) para encontrar o melhor ângulo do peito do bebé. É um exame completamente indolor e não invasivo.",
  },
  {
    pergunta: "Quanto tempo demora para fazer?",
    resposta: "Em média, de 30 a 45 minutos, mas pode chegar a 1 hora. É um exame muito minucioso. O médico está a avaliar um órgão minúsculo (do tamanho de uma moeda ou uma noz) que bate, em média, de 120 a 160 vezes por minuto. Ele precisa de verificar todas as quatro câmaras do coração, as válvulas e os principais vasos sanguíneos. O tempo total vai depender muito da 'colaboração' do bebé: se a posição dele for favorável, o exame flui mais rápido. Se ele estiver de costas ou a mexer-se demais, o médico precisará de mais tempo e paciência para captar as imagens corretas.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function EcofetalLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar um Ecocardiograma Fetal (Ecofetal).";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-500 selection:text-white">
      
      {/* HEADER SIMPLIFICADO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-rose-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar ao Início</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Saúde Já
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 hidden sm:block" />
            Agendar Exame
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-rose-50 relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <Baby className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-slate-700">Cardiologia Fetal Especializada</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Ecocardiograma Fetal: tranquilidade para o coração do <span className="text-rose-500 italic">seu bebé.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Avaliação estrutural e funcional completa do coração do seu bebé ainda no útero. Um exame minucioso, seguro e fundamental para um parto tranquilo.
            </p>
            
            <div className={`flex flex-col sm:flex-row justify-center gap-4 pt-4 transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-green-500/25 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 font-bold"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar Agora no WhatsApp
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Totalmente indolor</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Especialistas em Fetal</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Ideal entre 24 e 28 semanas</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-rose-900 text-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Porquê realizar o Ecofetal connosco?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 px-6">
              <HeartPulse className="w-12 h-12 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico Precoce</h3>
              <p className="text-white/70">Permite planear o parto com a estrutura adequada caso o bebé precise de cuidados cardiológicos logo após nascer.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Stethoscope className="w-12 h-12 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Médicos Especializados</h3>
              <p className="text-white/70">Exame realizado por cardiologistas com formação específica na complexa anatomia do coração fetal.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <ShieldCheck className="w-12 h-12 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Segurança Total</h3>
              <p className="text-white/70">Uso de ultrassom e Doppler via abdominal. Não emite radiação e é 100% seguro para a mãe e para o bebé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - PERGUNTAS FREQUENTES ECOFETAL */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes sobre o Ecofetal</h2>
            <p className="text-slate-600">Alinhamos as suas expectativas para que venha tranquila para o exame do seu bebé.</p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <FaqItem key={idx} pergunta={faq.pergunta} resposta={faq.resposta} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 z-[60] flex items-center gap-2 group"
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="hidden group-hover:block whitespace-nowrap font-medium text-lg pr-2">
          Agendar Ecofetal
        </span>
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
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
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
      className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}