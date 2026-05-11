"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Flower2,
  MessageCircle,
  Clock,
  CheckCircle2,
  FileText,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  MapPin,
  Phone
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

// --- DADOS DOS SERVIÇOS ---
const categoriasGinecologia = [
  {
    titulo: "Saúde Preventiva",
    icone: Sparkles,
    descricao: "Exames de rotina fundamentais para a saúde feminina em todas as idades.",
    servicos: [
      "Consulta Ginecológica de Rotina",
      "Exame Preventivo (Papanicolau)",
      "Colposcopia e Vulvoscopia",
      "Ultrassom Transvaginal e de Mamas",
      "Check-up Hormonal Feminino",
    ],
  },
  {
    titulo: "Planeamento e Gestação",
    icone: HeartPulse,
    descricao: "Acompanhamento completo desde a conceção até ao pós-parto.",
    servicos: [
      "Consultas de Pré-Natal",
      "Inserção de DIU (Cobre, Mirena, Kyleena)",
      "Implantes Contracetivos",
      "Tratamento para Infertilidade",
      "Aconselhamento Contracetivo",
    ],
  },
  {
    titulo: "Saúde Especializada",
    icone: Flower2,
    descricao: "Tratamentos focados no bem-estar e na qualidade de vida.",
    servicos: [
      "Tratamento de Menopausa e Climatério",
      "Reposição Hormonal Bioidêntica",
      "Tratamento de Endometriose e SOP",
      "Infeções Vaginais e Candidíase de Repetição",
      "Ginecologia Endócrina",
    ],
  },
];

// --- DADOS DO FAQ ---
const faqGinecologia = [
  {
    pergunta: "Preciso de algum preparo para o exame preventivo?",
    resposta: "Para garantir a precisão do Papanicolau, recomendamos que não tenha relações sexuais nas 48 horas anteriores, não utilize cremes ou duchas vaginais e não esteja no período menstrual no dia da coleta.",
  },
  {
    pergunta: "A clínica realiza a colocação de DIU?",
    resposta: "Sim. Realizamos a inserção de DIU (Hormonal ou de Cobre) em ambiente clínico seguro. Pode agendar uma consulta de avaliação para discutirmos qual o método mais indicado para o seu corpo.",
  },
  {
    pergunta: "Em quanto tempo recebo os resultados dos exames?",
    resposta: "Consultas e exames físicos têm feedback imediato. Exames laboratoriais e citológicos (como o preventivo) costumam ficar prontos em poucos dias úteis, e informamos assim que o laudo for liberado.",
  },
  {
    pergunta: "Aceitam consultas particulares e preços populares?",
    resposta: "Sim! Trabalhamos com uma tabela de preços acessíveis para garantir que todas as mulheres tenham acesso a um atendimento de excelência e humanizado em Campo Grande.",
  },
];

export default function GinecologiaLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar uma consulta Ginecológica.";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-500 selection:text-white">
      
      {/* HEADER */}
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
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-rose-50 relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-rose-200 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <Flower2 className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-slate-700">Cuidado Integral e Humanizado</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Ginecologia especializada para cuidar de si em todas as <span className="text-rose-500 italic">fases da vida.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Desde a primeira consulta até a menopausa. Oferecemos um ambiente acolhedor e seguro para a sua saúde íntima, hormonal e reprodutiva com especialistas dedicados.
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
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Atendimento sem pressa</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Especialistas acolhedores</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Exames no mesmo local</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE SERVIÇOS GINECOLÓGICOS */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Cuidados</h2>
            <p className="text-slate-600 text-lg">Oferecemos suporte completo para a saúde da mulher. Veja as nossas principais áreas de atuação.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categoriasGinecologia.map((categoria, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6">
                  <categoria.icone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h3>
                <p className="text-slate-600 mb-6">{categoria.descricao}</p>
                
                <ul className="space-y-3 mb-8">
                  {categoria.servicos.map((servico, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{servico}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                >
                  Consultar Valores
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-rose-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-rose-100">
             <div className="flex items-center gap-4">
                 <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                     <FileText className="w-6 h-6"/>
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Precisa de um check-up completo?</h4>
                     <p className="text-slate-600 text-sm">Temos pacotes especiais que incluem consulta + preventivo + ultrassom transvaginal.</p>
                 </div>
             </div>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                 Ver Pacotes Promocionais
             </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 px-6">
              <ShieldCheck className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ambiente Seguro</h3>
              <p className="text-white/70">Consultórios desenhados para o seu máximo conforto e privacidade durante cada atendimento.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Clock className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sem Longas Esperas</h3>
              <p className="text-white/70">Respeitamos o seu tempo. Organizamos a nossa agenda para que seja atendida no horário marcado.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <HeartPulse className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Foco na Prevenção</h3>
              <p className="text-white/70">Mais do que tratar sintomas, trabalhamos para prevenir doenças e promover o seu bem-estar contínuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Esclarecemos as suas questões para que venha tranquila à sua consulta.</p>
          </div>
          
          <div className="space-y-4">
            {faqGinecologia.map((faq, idx) => (
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
                A cuidar de si com excelência, tecnologia e carinho. A sua saúde é a nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-rose-400">Endereço</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                  <span>R. N S da Glória, 203 - Campo Grande<br/>Recife - PE, 52031-050</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-rose-400">Contacto Urgente</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-rose-400" />
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
          Agendar Ginecologia
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
        <ChevronDown className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}