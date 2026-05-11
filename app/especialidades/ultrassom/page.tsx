"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  MessageCircle,
  Eye,
  Clock,
  CheckCircle2,
  FileText,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  MonitorPlay,
  HeartPulse,
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

// --- DADOS DOS ULTRASSONS ---
const categoriasUltrassom = [
  {
    titulo: "Saúde da Mulher & Gestação",
    icone: HeartPulse,
    descricao: "Acompanhamento obstétrico e ginecológico com máxima sensibilidade.",
    exames: [
      "Ultrassom Transvaginal",
      "Ultrassom Pélvica",
      "Ultrassom Obstétrica",
      "Ultrassom Morfológica",
      "Ultrassom de Mamas",
    ],
  },
  {
    titulo: "Medicina Interna",
    icone: MonitorPlay,
    descricao: "Avaliação precisa dos órgãos internos e vias urinárias.",
    exames: [
      "Abdômen Total",
      "Abdômen Superior",
      "Vias Urinárias",
      "Próstata (Via Abdominal)",
      "Tireoide",
    ],
  },
  {
    titulo: "Especialidades & Doppler",
    icone: Activity,
    descricao: "Análise detalhada do fluxo sanguíneo e articulações.",
    exames: [
      "Doppler de Carótidas",
      "Doppler de Membros Inferiores",
      "Ultrassom de Articulações (Ombro, Joelho)",
      "Ultrassom de Partes Moles",
      "Ultrassom de Bolsa Escrotal",
    ],
  },
];

// --- DADOS DO FAQ ---
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
    resposta: "Na grande maioria dos casos, sim! O nosso compromisso é com a sua agilidade e tranquilidade. O médico especialista redige o laudo logo após a avaliação para que possa apresentar rapidamente ao seu médico solicitante.",
  },
  {
    pergunta: "A clínica aceita pedidos de médicos de fora?",
    resposta: "Com certeza! Aceitamos requisições e pedidos de exames de médicos de outras clínicas, postos de saúde ou hospitais.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function UltrassomLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar uma Ultrassonografia.";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-500 selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar ao Início</span>
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
            <MessageCircle className="w-4 h-4 hidden sm:block" />
            Agendar Exame
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-slate-700">Diagnóstico por Imagem Avançado</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Imagens nítidas e laudos com máxima <span className="text-purple-600 italic">precisão.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Equipamentos de ultrassonografia de última geração para avaliações obstétricas, abdominais, articulares e com Doppler. Rapidez e segurança no seu diagnóstico.
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
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Laudos rápidos</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Alta Resolução</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Aceitamos pedidos externos</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE EXAMES DE ULTRASSOM */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Exames Realizados</h2>
            <p className="text-slate-600 text-lg">Selecione a categoria que precisa e veja a lista de ultrassonografias realizadas na Saúde Já.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categoriasUltrassom.map((categoria, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <categoria.icone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h3>
                <p className="text-slate-600 mb-6">{categoria.descricao}</p>
                
                <ul className="space-y-3 mb-8">
                  {categoria.exames.map((exame, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{exame}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                >
                  Consultar Valores
                </a>
              </div>
            ))}
          </div>
          
          {/* BANNER DE CRO */}
          <div className="mt-12 p-6 bg-purple-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-purple-100">
             <div className="flex items-center gap-4">
                 <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                     <FileText className="w-6 h-6"/>
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Não encontrou o seu ultrassom na lista?</h4>
                     <p className="text-slate-600 text-sm">Realizamos outras avaliações específicas. Envie a foto do seu pedido no WhatsApp!</p>
                 </div>
             </div>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                 Enviar Pedido Médico
             </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 px-6">
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Laudos Ágeis</h3>
              <p className="text-white/70">Sabemos que precisa do resultado. A maioria dos nossos laudos de ultrassom é entregue na hora, logo após o exame.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Alta Resolução</h3>
              <p className="text-white/70">Equipamentos modernos garantem imagens cristalinas, cruciais para avaliações obstétricas e diagnósticos precisos.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Activity className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Doppler Especializado</h3>
              <p className="text-white/70">Tecnologia avançada para mapeamento de fluxo sanguíneo, essencial para investigar varizes, tromboses e circulação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Tudo o que precisa de saber antes de realizar a sua ultrassonografia.</p>
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
                A cuidar de si com excelência, tecnologia e carinho. A sua saúde é a nossa prioridade.
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
          Agendar Ultrassom
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
        <ChevronDown className={`w-5 h-5 text-purple-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}