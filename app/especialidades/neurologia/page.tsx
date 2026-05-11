"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Brain,
  MessageCircle,
  Clock,
  CheckCircle2,
  FileText,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Activity,
  Zap,
  MapPin,
  Phone,
  Search
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

// --- DADOS DOS SERVIÇOS DE NEUROLOGIA ---
const categoriasNeurologia = [
  {
    titulo: "Neurologia Clínica",
    icone: Brain,
    descricao: "Diagnóstico e tratamento das patologias mais comuns do sistema nervoso.",
    servicos: [
      "Enxaquecas e Dores de Cabeça",
      "Epilepsia e Crises Convulsivas",
      "Distúrbios do Sono (Insónia, Apneia)",
      "Tonturas e Desequilíbrios",
      "Dores Crónicas e Neuropatias",
    ],
  },
  {
    titulo: "Doenças Degenerativas",
    icone: Activity,
    descricao: "Acompanhamento especializado para condições que exigem cuidado contínuo.",
    servicos: [
      "Doença de Alzheimer e Demências",
      "Doença de Parkinson e Tremores",
      "Esclerose Múltipla",
      "Avaliação de Défice de Memória",
      "Tratamento de Distúrbios de Movimento",
    ],
  },
  {
    titulo: "Saúde Neurovascular",
    icone: Zap,
    descricao: "Prevenção e acompanhamento de condições vasculares cerebrais.",
    servicos: [
      "Prevenção de AVC (Derrame)",
      "Acompanhamento Pós-AVC",
      "Doenças das Carótidas",
      "Avaliação de Risco Vascular",
      "Check-up Neurológico Preventivo",
    ],
  },
];

// --- DADOS DO FAQ ---
const faqNeurologia = [
  {
    pergunta: "Quando devo procurar um Neurologista?",
    resposta: "Deve procurar um especialista se sentir dores de cabeça persistentes, alterações súbitas na visão, perda de memória frequente, tremores, dormências no corpo, tonturas constantes ou se teve algum episódio de desmaio ou crise convulsiva.",
  },
  {
    pergunta: "Como devo me preparar para a primeira consulta?",
    resposta: "É fundamental levar todos os exames de imagem anteriores (Ressonâncias, Tomografias) e laboratoriais. Também recomendamos anotar os medicamentos que utiliza e fazer uma lista da frequência e intensidade dos seus sintomas.",
  },
  {
    pergunta: "A clínica realiza exames como Eletroencefalograma (EEG)?",
    resposta: "Sim, realizamos diversos exames complementares de diagnóstico. Durante a consulta, o neurologista avaliará a necessidade e indicará o exame mais adequado para o seu caso.",
  },
  {
    pergunta: "Quanto tempo dura uma consulta neurológica?",
    resposta: "As nossas consultas são detalhadas e sem pressa, durando em média 30 a 45 minutos, tempo necessário para uma avaliação clínica minuciosa e conversa esclarecedora com o paciente.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function NeurologiaLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar uma consulta com o Neurologista.";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-600 selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar ao Início</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Saúde Já
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 hidden sm:block" />
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <Brain className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">Cuidado Especializado com o seu Cérebro</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Saúde neurológica com diagnóstico preciso e <span className="text-indigo-600 italic">atendimento humanizado.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Cuidamos da saúde do seu sistema nervoso com foco em qualidade de vida. Atendimento especializado para dores de cabeça, distúrbios de memória e doenças degenerativas em Campo Grande.
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
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Médicos experientes</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Exames complementares</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Localização acessível</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE SERVIÇOS */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
            <p className="text-slate-600 text-lg">Tratamos uma vasta gama de condições neurológicas com as técnicas mais atuais da medicina.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categoriasNeurologia.map((categoria, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <categoria.icone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h3>
                <p className="text-slate-600 mb-6">{categoria.descricao}</p>
                
                <ul className="space-y-3 mb-8">
                  {categoria.servicos.map((servico, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{servico}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                >
                  Consultar Agendamento
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-indigo-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-indigo-100">
             <div className="flex items-center gap-4">
                 <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                     <Search className="w-6 h-6"/>
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Procura um tratamento específico?</h4>
                     <p className="text-slate-600 text-sm">Se a sua condição não está listada acima, fale connosco. A nossa equipa pode orientá-lo.</p>
                 </div>
             </div>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                 Falar com a Equipa
             </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 px-6">
              <ShieldCheck className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico Preciso</h3>
              <p className="text-white/70">Utilizamos protocolos clínicos rigorosos para identificar a causa exata dos seus sintomas neurológicos.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Clock className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Acompanhamento</h3>
              <p className="text-white/70">Damos suporte contínuo em doenças crónicas, garantindo ajustes terapêuticos sempre que necessário.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Brain className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tecnologia Médica</h3>
              <p className="text-white/70">Acesso a exames de imagem e funcionais modernos para fundamentar o seu plano de tratamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Informações essenciais para a sua primeira consulta neurológica.</p>
          </div>
          
          <div className="space-y-4">
            {faqNeurologia.map((faq, idx) => (
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
                Cuidando da sua saúde cerebral com excelência, tecnologia e carinho. A sua saúde é a nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-indigo-400">Endereço</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                  <span>R. N S da Glória, 203 - Campo Grande<br/>Recife - PE, 52031-050</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-indigo-400">Contacto Urgente</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400" />
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
          Agendar Neurologia
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
        <ChevronDown className={`w-5 h-5 text-indigo-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}