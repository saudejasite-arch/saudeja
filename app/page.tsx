"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  MessageCircle,
  Maximize2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Brain,
  Apple,
  BrainCircuit,
  HeartPulse,
  Monitor,
  TestTube
} from "lucide-react";
// --- HOOKS ---
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

// --- COMPONENTE PRINCIPAL ---
export default function SaudeJaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(
    null
  );

  // --- CONFIGURAÇÃO DE LINKS ---
  // Número: (81) 3204-5760
  const whatsappLink = "https://wa.me/558132045760?text=Olá, gostaria de agendar uma consulta.";
  const mapsLink = "https://www.google.com/maps/dir/?api=1&destination=R.+N+S+da+Glória,+203+-+Campo+Grande,+Recife+-+PE";

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

  const specialists = [
    {
      name: "Dra. Joyce Milena",
      specialty: "Clínica Geral",
      photo: "/milena.jpg",
      description:
        "Atendimento humanizado e foco na saúde integral do paciente, com diagnósticos precisos e acompanhamento contínuo.",
      details: "Check-up Geral, Acompanhamento de Rotina, Prevenção.",
      crm: "CRM 38.770-PE",
    },
    {
      name: "Dr. Luis Cavalcanti",
      specialty: "Pediatra",
      photo: "/luis.jpg",
      description:
        "Cuidado integral para o desenvolvimento saudável do seu filho, desde os primeiros dias de vida até a adolescência.",
      details: "Puericultura, Vacinação, Acompanhamento de Crescimento.",
      crm: "CRM 38.618-PE",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* --- HEADER --- */}
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
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

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
              <Button asChild className="w-full bg-primary text-white mt-4 rounded-xl py-6 text-lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Agendar Consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <HeroSection whatsappLink={whatsappLink} />

      {/* --- FEATURES GRID --- */}
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

      {/* DIVISOR 1 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      <ConhecaSection />

      {/* DIVISOR 2 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      <EspecialidadesSection />

      {/* DIVISOR 3 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      <EspecialistasSection
        specialists={specialists}
        onSelectSpecialist={setSelectedSpecialist}
      />

      {/* DIVISOR 4 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      <ExamesSection />

      {/* DIVISOR 5 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      <TourClinicaSection />

      {/* DIVISOR 6 */}
      <PremiumWhatsAppDivider whatsappLink={whatsappLink} />

      {/* --- GALERIA DE FOTOS --- */}
      <GaleriaSection />

      <LocalizacaoSection mapsLink={mapsLink} />

      <Footer />

      {/* --- BOTÃO FLUTUANTE --- */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 z-[60] flex items-center gap-2 group"
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="hidden group-hover:block whitespace-nowrap font-medium text-lg pr-2">
          Agendar no WhatsApp
        </span>
      </a>

      {/* --- MODAL ESPECIALISTAS --- */}
      <Dialog
        open={selectedSpecialist !== null}
        onOpenChange={() => setSelectedSpecialist(null)}
      >
        <DialogContent className="max-w-2xl border-none shadow-2xl p-0 overflow-hidden bg-white rounded-3xl z-[70]">
          {selectedSpecialist !== null && (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-slate-100">
                <img
                  src={
                    specialists[selectedSpecialist].photo || "/placeholder.svg"
                  }
                  alt={`Foto do especialista ${specialists[selectedSpecialist].name}`}
                  className="w-full h-64 md:h-full object-cover"
                  loading="lazy"
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
                  <Button asChild className="rounded-full">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Agendar Consulta
                    </a>
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

// --- NOVO COMPONENTE: GALERIA COM BENTO GRID E CARROSSEL ---
function GaleriaSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // GERA A LISTA DE FOTOS AUTOMATICAMENTE DE 1.jpg A 15.jpg
  // As 4 primeiras (índices 0, 1, 2, 3) têm classes especiais para o Grid
  const galleryImages = Array.from({ length: 13 }, (_, i) => {
    let gridClass = "hidden"; // Padrão: esconde do grid inicial (aparece só no modal)

    // Configuração do Bento Grid (apenas para as 4 primeiras)
    if (i === 0) gridClass = "md:col-span-2 md:row-span-2 block"; // Foto Grande (Esquerda)
    if (i === 1) gridClass = "md:col-span-1 md:row-span-1 block"; // Foto Pequena (Topo Meio)
    if (i === 2) gridClass = "md:col-span-1 md:row-span-1 block"; // Foto Pequena (Topo Direita)
    if (i === 3) gridClass = "md:col-span-2 md:row-span-1 block"; // Foto Larga (Baixo Direita)

    return {
      src: `/${i + 1}.jpg`, // 1.jpg, 2.jpg, ...
      alt: `Ambiente da Clínica Saúde Já - Foto ${i + 1}`,
      className: gridClass,
    };
  });

  return (
    <section id="galeria" className="py-24 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Nossa Estrutura
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Ambiente pensado em você
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Conforto, modernidade e tecnologia para garantir o melhor
            atendimento. Toque nas fotos para ampliar.
          </p>
        </div>

        {/* --- GRID MOSAICO (BENTO GRID) --- */}
        {/* Mostra apenas as 4 primeiras fotos definidas no array */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {galleryImages.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${image.className}`}
              onClick={() => {
                setCurrentSlide(index);
                setIsGalleryOpen(true);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para abrir galeria completa */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white h-12 px-8 text-lg transition-all"
            onClick={() => setIsGalleryOpen(true)}
          >
            Ver todas as {galleryImages.length} fotos
          </Button>
        </div>
      </div>

      {/* --- MODAL (LIGHTBOX) COM CARROSSEL --- */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-[95vw] h-[90vh] md:max-w-7xl p-0 border-none bg-transparent shadow-none flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col justify-center">
            
            {/* Botão Fechar Customizado */}
            <button 
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-2 right-2 md:-top-4 md:-right-4 z-50 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/20"
            >
                <X className="w-6 h-6"/>
            </button>

            <Carousel
              opts={{
                align: "center",
                loop: true,
                startIndex: currentSlide,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    {/* Container da imagem ajustado para evitar cortes no modal */}
                    <div className="flex items-center justify-center h-[80vh] p-2 relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Navegação */}
              <CarouselPrevious className="hidden md:flex bg-black/30 border-none text-white hover:bg-black/60 hover:text-white h-12 w-12" />
              <CarouselNext className="hidden md:flex bg-black/30 border-none text-white hover:bg-black/60 hover:text-white h-12 w-12" />
            </Carousel>
            
            {/* Contador de Slides */}
            <p className="text-center text-white/80 mt-4 text-sm font-medium bg-black/30 w-fit mx-auto px-4 py-1 rounded-full backdrop-blur-sm">
                Deslize para ver mais
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// --- DIVISOR PREMIUM WHATSAPP ---
function PremiumWhatsAppDivider({ whatsappLink }: { whatsappLink: string }) {
  return (
    <div className="py-8 w-full flex justify-center items-center">
      <div className="container-custom relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block"></div>
        
        <div className="flex justify-center">
             <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-slate-100 shadow-xl shadow-green-500/10 rounded-full p-2 pl-6 pr-2 hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1"
             >
                <div className="flex flex-col items-start mr-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Não espere mais</span>
                    <span className="text-lg font-bold text-slate-700 group-hover:text-green-600 transition-colors">Agendar Consulta</span>
                </div>

                <div className="h-12 w-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 fill-current" />
                </div>
             </a>
        </div>
      </div>
    </div>
  );
}

// --- OUTRAS SEÇÕES ---

function HeroSection({ whatsappLink }: { whatsappLink: string }) {
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
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Agendar Consulta
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 text-slate-600 hover:border-primary hover:text-primary text-lg h-14 px-8 rounded-full bg-transparent"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({behavior: "smooth"})}
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
                alt="Médica atendendo paciente na Clínica Saúde Já"
                className="w-[90%] ml-auto rounded-[2.5rem] shadow-2xl object-cover aspect-[4/5] hover:scale-[1.02] transition-transform duration-700"
                fetchPriority="high"
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

            </div>
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/123.JPG"
                alt="Recepção moderna da Clínica Saúde Já em Recife"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
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
  const [mostrarTodas, setMostrarTodas] = useState(false);

  // Array expandido com a propriedade 'href' para as Landing Pages
  const specialties = [
    {
      icon: Stethoscope,
      title: "Clínico Geral",
      description: "Acompanhamento geral e preventivo para a sua saúde.",
      href: "https://www.gruposaudeja.com.br/especialidades/clinico-geral",
    },
    {
      icon: Baby,
      title: "Pediatria",
      description: "Cuidado com amor e dedicação para os pequenos.",
      href: "https://www.gruposaudeja.com.br/especialidades/pediatria",
    },
    {
      icon: Flower2,
      title: "Ginecologia",
      description: "Saúde integral e acolhimento para a mulher.",
      href: "https://www.gruposaudeja.com.br/especialidades/ginecologia",
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Tecnologia e precisão para a saúde do seu coração.",
      href: "https://www.gruposaudeja.com.br/especialidades/cardiologia",
    },
    {
      icon: Brain,
      title: "Psiquiatria",
      description: "Cuidado humanizado para o seu bem-estar mental.",
      href: "https://www.gruposaudeja.com.br/especialidades/psiquiatria",
    },
    {
      icon: Activity,
      title: "Fisioterapia",
      description: "Reabilitação e qualidade de movimento para seu corpo.",
      href: "https://www.gruposaudeja.com.br/especialidades/fisioterapia",
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Reeducação alimentar e foco em qualidade de vida.",
      href: "https://www.gruposaudeja.com.br/especialidades/nutricao",
    },
    {
      icon: BrainCircuit,
      title: "Neurologia",
      description: "Diagnóstico e tratamento do sistema nervoso.",
      href: "https://www.gruposaudeja.com.br/especialidades/neurologia",
    },
    {
      icon: Users,
      title: "Geriatria",
      description: "Respeito e atenção especializada à melhor idade.",
      href: "https://www.gruposaudeja.com.br/especialidades/geriatria",
    },
    {
      icon: HeartPulse,
      title: "Cardiopediatria",
      description: "Atenção cardiológica exclusiva para crianças.",
      href: "https://www.gruposaudeja.com.br/especialidades/cardio-pediatria",
    },
    {
      icon: Monitor,
      title: "Ultrassom",
      description: "Diagnósticos por imagem com alta precisão e nitidez.",
      href: "https://www.gruposaudeja.com.br/especialidades/ultrassom",
    },
    {
      icon: TestTube,
      title: "Exames",
      description: "Análises clínicas rápidas, modernas e seguras.",
      href: "https://www.gruposaudeja.com.br/especialidades/exames",
    },
  ];

  // Controla quantos cards aparecem (4 inicialmente, ou todos se o state for true)
  const especialidadesVisiveis = mostrarTodas ? specialties : specialties.slice(0, 4);

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
            completo da sua família. Selecione para saber mais!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {especialidadesVisiveis.map((specialty, index) => (
            <Link
              href={specialty.href}
              key={specialty.title}
              className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              {/* Micro-interação Premium: Seta lateral revelada no Hover */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-6 shrink-0">
                <specialty.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {specialty.title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-grow">
                {specialty.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Botão de Toggle (Progressive Disclosure) */}
        {specialties.length > 4 && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setMostrarTodas(!mostrarTodas)}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-white h-12 px-8 text-lg transition-all shadow-sm"
            >
              {mostrarTodas ? (
                <>
                  <ChevronUp className="mr-2 w-5 h-5" />
                  Ver menos
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 w-5 h-5" />
                  Ver todas as {specialties.length} especialidades
                </>
              )}
            </Button>
          </div>
        )}
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
              <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                <img
                  src={specialist.photo || "/placeholder.svg"}
                  alt={`Foto de perfil do ${specialist.name} - ${specialist.specialty}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
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
          <img
            src="/faixada.JPG"
            alt="Fachada e recepção da Clínica Saúde Já em Recife"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            loading="lazy"
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

function LocalizacaoSection({ mapsLink }: { mapsLink: string }) {
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
              asChild
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg px-8"
            >
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                Ver rota no Google Maps
              </a>
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
              title="Mapa de Localização da Clínica Saúde Já"
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
            <img
              src="/logo23.png"
              alt="Saúde Já Logo Branca"
              className="h-12 w-auto brightness-0 invert opacity-90"
              loading="lazy"
            />
            <p className="text-white/70 leading-relaxed">
              Cuidando de você com excelência, tecnologia e carinho. Sua saúde é
              nossa prioridade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clinica.saudeja/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
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
                (81) 3204-5760
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