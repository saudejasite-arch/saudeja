"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  MessageCircle,
  Clock,
  CheckCircle2,
  FileText,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Brain,
  Activity,
  MapPin,
  Phone,
  Pill
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

// --- DADOS DOS SERVIÇOS DE GERIATRIA ---
const categoriasGeriatria = [
  {
    titulo: "Geriatria Preventiva",
    icone: ShieldCheck,
    descricao: "Foco no envelhecimento ativo, independência e longevidade saudável.",
    servicos: [
      "Check-up Sênior Anual",
      "Avaliação de Risco de Quedas",
      "Orientação Nutricional e Física",
      "Rastreio de Osteoporose e Sarcopenia",
      "Atualização Vacinal do Idoso",
    ],
  },
  {
    titulo: "Doenças Crónicas",
    icone: Activity,
    descricao: "Controle rigoroso para garantir estabilidade e qualidade de vida.",
    servicos: [
      "Controle de Hipertensão e Diabetes",
      "Tratamento de Artrose e Dores Articulares",
      "Manejo de Insuficiência Cardíaca",
      "Acompanhamento Pós-Internamento",
      "Revisão e Ajuste de Medicações",
    ],
  },
  {
    titulo: "Saúde Cognitiva e Mental",
    icone: Brain,
    descricao: "Atenção especial à memória, humor e distúrbios neurológicos da idade.",
    servicos: [
      "Investigação de Perda de Memória",
      "Acompanhamento de Alzheimer",
      "Tratamento de Parkinson",
      "Manejo de Depressão e Ansiedade",
      "Distúrbios do Sono e Insónia",
    ],
  },
];

// --- DADOS DO FAQ ---
const faqGeriatria = [
  {
    pergunta: "A partir de que idade devo procurar um Geriatra?",
    resposta: "Geralmente, recomenda-se a primeira consulta a partir dos 60 anos. No entanto, muitas pessoas procuram um geriatra a partir dos 50 anos para um planeamento preventivo, visando um envelhecimento com mais independência e saúde.",
  },
  {
    pergunta: "O geriatra substitui outros médicos especialistas?",
    resposta: "O Geriatra funciona como o 'maestro' da saúde do idoso. Ele tem uma visão global do paciente, tratando a maioria das condições. Quando necessário, atua em conjunto com outros especialistas (como cardiologistas ou neurologistas) para evitar tratamentos conflituantes.",
  },
  {
    pergunta: "O paciente deve ir acompanhado na primeira consulta?",
    resposta: "Sim, é altamente recomendado. O acompanhante (geralmente um familiar próximo ou cuidador) ajuda a fornecer informações valiosas sobre a rotina, o comportamento e o histórico médico que o próprio paciente pode não se lembrar de relatar.",
  },
  {
    pergunta: "Como é a consulta geriátrica?",
    resposta: "É uma consulta detalhada e sem pressa. Envolve uma avaliação global: física, mental, emocional e social. O médico revisa todas as medicações em uso (para evitar excessos) e testa a memória, o equilíbrio e a autonomia do paciente.",
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function GeriatriaLandingPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá, estava no site e gostaria de agendar uma consulta com o Geriatra.";
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container-custom mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm hidden sm:block">Voltar ao Início</span>
          </Link>
          <div className="font-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Saúde Já
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 hidden sm:block" />
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden" ref={heroRef}>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">Medicina Humanizada para a Terceira Idade</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] transition-all duration-1000 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Cuidado especializado para um envelhecimento ativo e com <span className="text-emerald-600 italic">qualidade de vida.</span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Acompanhamento médico completo e empático. Foco na manutenção da autonomia, prevenção de doenças e promoção do bem-estar físico e mental.
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
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Consultas sem pressa</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Visão global do paciente</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Acolhimento familiar</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE SERVIÇOS GERIÁTRICOS */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Cuidados</h2>
            <p className="text-slate-600 text-lg">Oferecemos suporte integral às necessidades complexas do envelhecimento com segurança e respeito.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categoriasGeriatria.map((categoria, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <categoria.icone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{categoria.titulo}</h3>
                <p className="text-slate-600 mb-6">{categoria.descricao}</p>
                
                <ul className="space-y-3 mb-8">
                  {categoria.servicos.map((servico, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{servico}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white h-12 rounded-xl flex items-center justify-center font-bold transition-colors"
                >
                  Consultar Agendamento
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-100">
             <div className="flex items-center gap-4">
                 <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                     <FileText className="w-6 h-6"/>
                 </div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Precisa de exames no mesmo local?</h4>
                     <p className="text-slate-600 text-sm">Realizamos Eletrocardiograma, Ecocardiograma e exames laboratoriais aqui mesmo, facilitando a rotina do idoso.</p>
                 </div>
             </div>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                 Ver Exames e Pacotes
             </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS (Autoridade e Confiança) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 px-6">
              <Pill className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Revisão de Medicamentos</h3>
              <p className="text-white/70">Avaliamos todas as receitas para evitar interações perigosas e reduzir medicamentos desnecessários.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <Brain className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Avaliação Cognitiva</h3>
              <p className="text-white/70">Testes específicos durante a consulta para rastreio precoce de demências e falhas de memória.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <HeartHandshake className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suporte à Família</h3>
              <p className="text-white/70">Orientamos os familiares e cuidadores sobre a melhor forma de lidar com os desafios do envelhecimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-slate-600">Esclarecimentos para dar total segurança à família antes da primeira consulta.</p>
          </div>
          
          <div className="space-y-4">
            {faqGeriatria.map((faq, idx) => (
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
                A cuidar de si e da sua família com excelência, tecnologia e carinho. A sua saúde é a nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-400">Endereço</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                  <span>R. N S da Glória, 203 - Campo Grande<br/>Recife - PE, 52031-050</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-400">Contacto Urgente</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
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
          Agendar Geriatria
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
        <ChevronDown className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
          {resposta}
        </div>
      </div>
    </div>
  );
}