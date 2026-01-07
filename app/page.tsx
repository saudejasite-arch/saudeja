"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Baby,
  Users,
  Flower2,
  Activity,
  Stethoscope,
  Clock,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Instagram,
  Facebook,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Hook para animação de entrada suave ao rolar a página
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

export default function SaudeJaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(
    null
  );

  // Efeito para mudar o header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Dados dos Especialistas (Apenas Milena e Luis)
  const specialists = [
    {
      name: "Dra. Milena Arrais",
      specialty: "Cardiologista",
      photo: "/milena.jpg",
      description:
        "Especialista em cardiologia com foco em prevenção e qualidade de vida. Atendimento humanizado e tecnologia de ponta para cuidar do seu coração.",
      details: "Hipertensão, Check-up Cardiológico, Eletrocardiograma.",
      crm: "CRM 123456-SP",
    },
    {
      name: "Dr. Luis Cavalcanti",
      specialty: "Pediatra",
      photo: "/luis.jpg",
      description:
        "Cuidado integral para o desenvolvimento saudável do seu filho, desde os primeiros dias de vida até a adolescência.",
      details: "Puericultura, Vacinação, Acompanhamento de Crescimento.",
      crm: "CRM 234567-SP",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Header Moderno */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            {/* Logo Texto Elegante */}
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              Saúde Já.
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              "Início",
              "Sobre",
              "Especialidades",
              "Especialistas",
              "Exames",
              "Estrutura",
              "Contato",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                }
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              onClick={() =>
                window.open("https://wa.me/5511999999999", "_blank")
              }
            >
              Agendar Consulta
            </Button>
          </nav>

          <button
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-fade-in-up">
            <nav className="flex flex-col p-6 gap-4">
              {[
                "Início",
                "Sobre",
                "Especialidades",
                "Especialistas",
                "Exames",
                "Estrutura",
                "Contato",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                    )
                  }
                  className="text-left text-lg font-medium text-slate-600 py-2 border-b border-slate-50"
                >
                  {item}
                </button>
              ))}
              <Button className="w-full bg-primary text-white mt-4 rounded-xl py-6 text-lg">
                Agendar pelo WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </header>

      <HeroSection />

      {/* Seção de Features/Diferenciais */}
      <section className="py-20 relative z-10 -mt-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Agendamento Rápido",
                desc: "Sem filas, direto pelo WhatsApp.",
                icon: Clock,
              },
              {
                title: "Equipe Especializada",
                desc: "Médicos renomados e humanizados.",
                icon: Users,
              },
              {
                title: "Exames no Local",
                desc: "Praticidade para seu diagnóstico.",
                icon: Activity,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-3 bg-secondary rounded-xl text-secondary-foreground">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConhecaSection />

      <EspecialidadesSection />

      <EspecialistasSection
        specialists={specialists}
        onSelectSpecialist={setSelectedSpecialist}
      />

      <ExamesSection />

      <TourClinicaSection />

      <LocalizacaoSection />

      <Footer />

      {/* Botão Flutuante WhatsApp */}
      <button
        onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="hidden group-hover:block whitespace-nowrap font-medium">
          Falar agora
        </span>
      </button>

      {/* Modal do Especialista */}
      <Dialog
        open={selectedSpecialist !== null}
        onOpenChange={() => setSelectedSpecialist(null)}
      >
        <DialogContent className="max-w-2xl border-none shadow-2xl p-0 overflow-hidden bg-white rounded-3xl">
          {selectedSpecialist !== null && (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-slate-100">
                <img
                  src={
                    specialists[selectedSpecialist].photo || "/placeholder.svg"
                  }
                  alt={specialists[selectedSpecialist].name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-1">
                    {specialists[selectedSpecialist].specialty}
                  </h4>
                  <DialogTitle className="text-3xl font-bold text-slate-800 font-heading">
                    {specialists[selectedSpecialist].name}
                  </DialogTitle>
                </div>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {specialists[selectedSpecialist].description}
                </p>

                <div className="bg-secondary/50 p-4 rounded-xl">
                  <h5 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" /> Áreas de
                    Atuação
                  </h5>
                  <p className="text-slate-600 text-sm">
                    {specialists[selectedSpecialist].details}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <p className="text-xs text-slate-400 font-mono">
                    {specialists[selectedSpecialist].crm}
                  </p>
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/5511999999999", "_blank")
                    }
                    className="rounded-full"
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#E0F7FA] via-white to-[#E0F2F1]"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-slate-600">
                Atendimento Humanizado
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
              Saúde de qualidade, <br />
              <span className="text-primary italic">perto de você.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-lg text-pretty">
              Conectamos você aos melhores especialistas com tecnologia,
              conforto e agilidade. Sua saúde não pode esperar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1"
              >
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 text-slate-600 hover:border-primary hover:text-primary text-lg h-14 px-8 rounded-full bg-transparent"
              >
                Conhecer Clínica
              </Button>
            </div>
          </div>

          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative z-10">
              <img
                src="/hero.jpg"
                alt="Médica sorrindo"
                className="w-[90%] ml-auto rounded-[2.5rem] shadow-2xl object-cover aspect-[4/5] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConhecaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="sobre"
      className="py-24 bg-white relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div
          className={`glass-card p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                Quem Somos
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Conheça a <br />
                <span className="text-primary">Saúde Já.</span>
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed text-pretty">
                <p>
                  A Saúde Já nasceu com o propósito de oferecer atendimento
                  médico de qualidade, humanizado e acessível para toda a
                  família. Nossa equipe é formada por profissionais experientes
                  e dedicados ao bem-estar dos nossos pacientes.
                </p>
                <p>
                  Com instalações modernas e equipamentos de última geração,
                  garantimos diagnósticos precisos e tratamentos eficazes.
                  Acreditamos que cuidar da saúde vai além de tratar doenças — é
                  sobre prevenir, acolher e promover qualidade de vida.
                </p>
              </div>
              <div className="pt-4 flex gap-8">
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-slate-500 font-medium">
                    Anos de História
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">10k+</p>
                  <p className="text-sm text-slate-500 font-medium">
                    Pacientes Felizes
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/modern-medical-clinic-reception-area-with-comforta.jpg"
                alt="Recepção da clínica"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EspecialidadesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const specialties = [
    {
      icon: Baby,
      title: "Pediatria",
      description: "Cuidado com amor para os pequenos.",
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Tecnologia para a saúde do coração.",
    },
    {
      icon: Users,
      title: "Geriatria",
      description: "Respeito e atenção à melhor idade.",
    },
    {
      icon: Flower2,
      title: "Ginecologia",
      description: "Saúde integral da mulher.",
    },
  ];

  return (
    <section id="especialidades" className="py-24 bg-slate-50" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nossas Áreas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Especialidades
          </h2>
          <p className="text-slate-600 text-lg">
            Cobrimos as principais áreas da medicina para garantir o cuidado
            completo da sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-6">
                <specialty.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {specialty.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EspecialistasSection({
  specialists,
  onSelectSpecialist,
}: {
  specialists: any[];
  onSelectSpecialist: (index: number) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="especialistas" className="py-24 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Corpo Clínico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
              Nossos Especialistas
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onSelectSpecialist(index)}
            >
              {/* Foto Colorida e Vibrante */}
              <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                <img
                  src={specialist.photo || "/placeholder.svg"}
                  alt={specialist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">
                    {specialist.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {specialist.specialty}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Disponível para agendamento
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamesSection() {
  const { ref, isVisible } = useScrollAnimation();

  // Dados dos exames (reintegrados)
  const exams = [
    {
      icon: Activity,
      title: "Ecocardiograma Fetal",
      description:
        "Avaliação detalhada do coração do bebê com tecnologia de ponta.",
    },
    {
      icon: Stethoscope,
      title: "Eletrocardiograma",
      description: "Monitoramento preciso da atividade elétrica cardíaca.",
    },
    {
      icon: CheckCircle2,
      title: "Exames de Rotina",
      description:
        "Check-ups laboratoriais completos para cuidar da sua saúde.",
    },
  ];

  return (
    <section
      id="exames"
      className="py-24 bg-slate-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Diagnóstico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Exames Realizados
          </h2>
          <p className="text-slate-600 text-lg">
            Precisão e rapidez nos resultados para o seu diagnóstico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <Card
              key={index}
              className={`p-8 border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-3xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center text-primary mb-6">
                <exam.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {exam.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {exam.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourClinicaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="estrutura" className="py-24 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Estrutura
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Conheça nossa Fachada
          </h2>
        </div>

        <div
          className={`relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Imagem Única da Fachada/Recepção */}
          <img
            src="/modern-medical-clinic-reception-desk-with-friendly.jpg"
            alt="Fachada da Clínica Saúde Já"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
          />

          <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-3xl font-bold text-white mb-2">
              Saúde Já - Unidade Recife
            </h3>
            <p className="text-white/80 text-lg">
              Modernidade e fácil acesso para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalizacaoSection() {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Localização e Horários
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">
                Venha nos visitar
              </h2>
              <p className="text-slate-600 text-lg mt-4">
                Estamos localizados no coração de Recife, prontos para receber
                você com todo conforto.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary flex gap-4 items-start bg-white border-y-0 border-r-0 rounded-r-xl shadow-sm">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-slate-600">
                    Segunda a Sexta:{" "}
                    <span className="font-semibold text-slate-800">
                      08:00 às 18:00
                    </span>
                  </p>
                  <p className="text-slate-600">
                    Sábado:{" "}
                    <span className="font-semibold text-slate-800">
                      08:00 às 12:00
                    </span>
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-secondary flex gap-4 items-start bg-white border-y-0 border-r-0 rounded-r-xl shadow-sm">
                <MapPin className="w-6 h-6 text-secondary-foreground mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Nosso Endereço
                  </h4>
                  <p className="text-slate-600">
                    R. N S da Glória, 203 - Campo Grande
                  </p>
                  <p className="text-slate-600">Recife - PE, 52031-050</p>
                </div>
              </Card>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg px-8"
            >
              Ver rota no Google Maps
            </Button>
          </div>

          <div className="h-[500px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.603364402636!2d-34.89675682499696!3d-8.039656891986475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab188c6c986797%3A0x7d2870425667389c!2sR.%20Nossa%20Sra.%20da%20Gl%C3%B3ria%2C%20203%20-%20Campo%20Grande%2C%20Recife%20-%20PE%2C%2052031-050!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a4f5a] text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="space-y-6">
            {/* Logo Branca Original */}
            <img
              src="/logo23.png"
              alt="Saúde Já Logo"
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-white/70 leading-relaxed">
              Cuidando de você com excelência, tecnologia e carinho. Sua saúde é
              nossa prioridade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#especialistas"
                  className="hover:text-white transition-colors"
                >
                  Corpo Clínico
                </a>
              </li>
              <li>
                <a
                  href="#estrutura"
                  className="hover:text-white transition-colors"
                >
                  Estrutura
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">
              Especialidades
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cardiologia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pediatria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ginecologia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Geriatria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Contato</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                (81) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                contato@saudeja.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>R. N S da Glória, 203 - Recife, PE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Saúde Já. Todos os direitos reservados.</p>
          <p>Design by @EZZECOMUNICAÇÃO</p>
        </div>
      </div>
    </footer>
  );
}
