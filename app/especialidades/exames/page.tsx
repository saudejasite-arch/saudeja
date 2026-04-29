"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  Microscope,
  MonitorHeart,
  HeartPulse,
  Clock,
  CheckCircle2,
  MessageCircle,
  FileText,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Stethoscope
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

// --- DADOS DOS EXAMES ---
const categoriasExames = [
  {
    titulo: "Exames Cardiológicos",
    icone: HeartPulse,
    descricao: "Avaliação completa da saúde do seu coração com laudos rápidos.",
    exames: [
      "Eletrocardiograma (ECG)",
      "Ecocardiograma com Doppler",
      "Ecocardiograma Fetal",
      "Holter 24 horas",
      "MAPA 24 horas",
      "Risco Cirúrgico",
    ],
  },
  {
    titulo: "Exames de Imagem (Ultrassonografia)",
    icone: MonitorHeart,
    descricao: "Equipamentos de alta resolução para diagnósticos precisos.",
    exames: [
      "Ultrassom Transvaginal",
      "Ultrassom Pélvica",
      "Ultrassom Obstétrica",
      "Ultrassom de Mama",
      "Ultrassom de Tireoide",
      "Ultrassom de Abdômen Total",
      "Ultrassom de Vias Urinárias",
    ],
  },
  {
    titulo: "Exames Laboratoriais e Preventivos",
    icone: Microscope,
    descricao: "Check-ups completos e coleta humanizada.",
    exames: [
      "Hemograma Completo (Sangue)",
      "Exames de Urina e Fezes",
      "Glicemia e Colesterol",
      "Hormônios (Tireoide, Testosterona, etc)",
      "Preventivo (Papanicolau)",
      "Teste de Gravidez (Beta hCG)",
    ],
  },
];

// --- DADOS DO FAQ ---
const faqData = [
  {
    pergunta: "Preciso de requisição médica para fazer os exames?",
    resposta: "Para a maioria dos exames laboratoriais básicos, não é obrigatório. Porém, para exames de imagem e cardiológicos específicos, a requisição ajuda o médico a focar na sua necessidade exata. Chame no WhatsApp e nossa equipe orienta você!",
  },
  {
    pergunta: "Em quanto tempo sai o resultado?",
    resposta: "Temos um compromisso com a agilidade. Eletrocardiogramas e Ultrassons costumam ter laudos liberados rapidamente. Exames de sangue variam, mas muitos ficam prontos em 24h a 48h úteis.",
  },
  {
    pergunta: "A clínica aceita pedidos de médicos de fora?",
    resposta: "Com certeza! Aceitamos requisições e pedidos de exames de médicos de outras clínicas, postos de saúde ou hospitais.",
  },
  {
    pergunta: "Quais as formas de pagamento?",
    resposta: "Aceitamos Pix, Cartões de Crédito (com opção de parcelamento), Cartão de Débito e Dinheiro. Temos preços populares para garantir o seu acesso à saúde.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function ExamesLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar exames.";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary selection:text-white">
      
      {/* HEADER SIMPLIFICADO (Foco em conversão: Sem menu de navegação que distraia) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar ao Início</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
            Saúde Já
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md shadow-primary/20 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 hidden sm:block" />
            Agendar Exame
          </a>
        </div>
      </header>

      {/* HERO SECTION (Foco na dor do cliente: Diagnóstico exato e rápido) */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-[#E0F7FA] relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-slate-700">Equipamentos de Última Geração</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Diagnósticos precisos para você <span className="text-primary italic">cuidar do que importa.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Faça seus exames cardiológicos, de imagem e laboratoriais em Campo Grande com agilidade no laudo, conforto na coleta e preços que cabem no seu bolso.
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
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Sem filas longas</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Laudos rápidos</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Aceitamos pedidos externos</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE EXAMES (Organizado e fácil de ler) */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Exames</h2>
            <p className="text-slate-600 text-lg">Selecione a categoria que você precisa e veja a lista completa de exames realizados na Clínica Saúde Já.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categoriasExames.map((categoria, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <categoria.icone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h3>
                <p className="text-slate-600 mb-6">{categoria.descricao}</p>
                
                <ul className="space-y-3 mb-8">
                  {categoria.exames.map((exame, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{exame}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                >
                  Consultar Valores
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-100">
             <div className="flex items-center gap-4">
                 <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                     <FileText className="w-6 h-6"/>
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Não achou seu exame na lista?</h4>
                     <p className="text-slate-600 text-sm">Realizamos dezenas de outros exames. Envie a foto do seu pedido no WhatsApp!</p>
                 </div>
             </div>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
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
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Resultados Ágeis</h3>
              <p className="text-white/70">Sabemos que quem tem dor tem pressa. Nossos laudos são liberados no menor tempo possível.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Equipe Capacitada</h3>
              <p className="text-white/70">Médicos especialistas e técnicos experientes para garantir uma coleta humanizada e sem traumas.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tecnologia Moderna</h3>
              <p className="text-white/70">Aparelhos de ultrassom e cardiologia de ponta para detectar o que os exames convencionais não veem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - PERGUNTAS FREQUENTES */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Tudo o que você precisa saber antes de realizar seus exames.</p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <FaqItem key={idx} pergunta={faq.pergunta} resposta={faq.resposta} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE DO WHATSAPP (Sempre visível no canto) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 z-[60] flex items-center gap-2 group"
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="hidden group-hover:block whitespace-nowrap font-medium text-lg pr-2">
          Agendar Exame
        </span>
      </a>

    </div>
  );
}

// --- SUB-COMPONENTE PARA O ACORDEÃO DO FAQ ---
// Usando um componente local para evitar bugs de dependência do Shadcn em novas páginas
function FaqItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-lg pr-4">{pergunta}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}