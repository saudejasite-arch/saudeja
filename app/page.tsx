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
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SmoothWaveDivider = ({
  flip = false,
  topColor = "#b4ece9",
  bottomColor = "#ffffff",
}: {
  flip?: boolean;
  topColor?: string;
  bottomColor?: string;
}) => {
  return (
    <div className={`w-full ${flip ? "rotate-180" : ""} -mb-1`}>
      <svg
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C240,150 480,150 720,100 C960,50 1200,50 1440,100 L1440,200 L0,200 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      name: "Dra. Maria Silva",
      specialty: "Cardiologista",
      photo: "/female-doctor-cardiologist-professional-headshot.jpg",
      description:
        "Especialista em cardiologia com mais de 15 anos de experiência. Formada pela USP, com pós-graduação em cardiologia intervencionista.",
      details:
        "Atende casos de hipertensão, arritmias, insuficiência cardíaca e prevenção cardiovascular. Realiza ecocardiogramas e testes ergométricos.",
      crm: "CRM 123456-SP",
    },
    {
      name: "Dr. João Santos",
      specialty: "Pediatra",
      photo: "/male-doctor-pediatrician-professional-headshot.jpg",
      description:
        "Pediatra dedicado ao cuidado infantil há 12 anos. Especialista em desenvolvimento infantil e vacinação.",
      details:
        "Acompanhamento de crescimento e desenvolvimento, vacinação, tratamento de doenças comuns da infância e orientação aos pais.",
      crm: "CRM 234567-SP",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Ginecologista",
      photo: "/female-doctor-gynecologist-professional-headshot.jpg",
      description:
        "Ginecologista e obstetra com foco em saúde da mulher. 10 anos de experiência em pré-natal, parto e ginecologia preventiva.",
      details:
        "Consultas de rotina, pré-natal, planejamento familiar, tratamento de distúrbios hormonais e acompanhamento da menopausa.",
      crm: "CRM 345678-SP",
    },
    {
      name: "Dr. Carlos Oliveira",
      specialty: "Geriatra",
      photo: "/male-doctor-geriatrician-professional-headshot.jpg",
      description:
        "Especialista em geriatria com atenção dedicada à terceira idade. 8 anos cuidando de pacientes idosos.",
      details:
        "Tratamento de doenças crônicas, prevenção de quedas, avaliação cognitiva e promoção do envelhecimento saudável.",
      crm: "CRM 456789-SP",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/LOGOSJ.png" alt="Saúde Já" className="h-8" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("especialidades")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("especialistas")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Especialistas
            </button>
            <button
              onClick={() => scrollToSection("exames")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Exames
            </button>
            <button
              onClick={() => scrollToSection("conheca-saude-ja")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Conheça a Saúde Já
            </button>
            <button
              onClick={() => scrollToSection("tour-clinica")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Tour pela Clínica
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-600 hover:text-[#61A0B0] transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              className="bg-[#61A0B0] hover:bg-[#61B097] text-white transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("https://wa.me/5511999999999", "_blank")
              }
            >
              Agende sua consulta
            </Button>
          </nav>

          <button
            className="md:hidden text-[#61B097]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("especialidades")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Especialidades
              </button>
              <button
                onClick={() => scrollToSection("especialistas")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Especialistas
              </button>
              <button
                onClick={() => scrollToSection("exames")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Exames
              </button>
              <button
                onClick={() => scrollToSection("conheca-saude-ja")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Conheça a Saúde Já
              </button>
              <button
                onClick={() => scrollToSection("tour-clinica")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Tour pela Clínica
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-slate-600 hover:text-[#61A0B0] transition-colors text-left font-medium"
              >
                Contato
              </button>
              <Button
                className="bg-[#61A0B0] hover:bg-[#61B097] text-white w-full"
                onClick={() =>
                  window.open("https://wa.me/5511999999999", "_blank")
                }
              >
                Agende sua consulta
              </Button>
            </nav>
          </div>
        )}
      </header>

      <HeroSection />

      <SmoothWaveDivider topColor="#b4ece9" bottomColor="#ffffff" />

      <EspecialidadesSection />

      <SmoothWaveDivider flip topColor="#ffffff" bottomColor="#61A0B0" />

      <EspecialistasSection
        specialists={specialists}
        onSelectSpecialist={setSelectedSpecialist}
      />

      <SmoothWaveDivider topColor="#61A0B0" bottomColor="#ffffff" />

      <ExamesSection />

      <SmoothWaveDivider flip topColor="#ffffff" bottomColor="#b4ece9" />

      <ConhecaSaudeJaSection />

      <SmoothWaveDivider topColor="#b4ece9" bottomColor="#ffffff" />

      <TourClinicaSection />

      <SmoothWaveDivider flip topColor="#ffffff" bottomColor="#b4ece9" />

      <FuncionamentoSection />

      <SmoothWaveDivider topColor="#b4ece9" bottomColor="#ffffff" />

      <LocalizacaoSection />

      <SmoothWaveDivider flip topColor="#ffffff" bottomColor="#61A0B0" />

      <CTASection />

      <Footer />

      <button
        onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
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
          className="w-6 h-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 14.05a7 7 0 0 1-9.9-9.9" />
        </svg>
      </button>

      <Dialog
        open={selectedSpecialist !== null}
        onOpenChange={() => setSelectedSpecialist(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedSpecialist !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-[#61B097]">
                  {specialists[selectedSpecialist].name}
                </DialogTitle>
                <DialogDescription className="text-lg text-slate-600">
                  {specialists[selectedSpecialist].specialty}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <img
                    src={
                      specialists[selectedSpecialist].photo ||
                      "/placeholder.svg"
                    }
                    alt={specialists[selectedSpecialist].name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-[#61B097]"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#61B097] mb-2">Sobre</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {specialists[selectedSpecialist].description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#61B097] mb-2">
                      Áreas de Atuação
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {specialists[selectedSpecialist].details}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">
                      {specialists[selectedSpecialist].crm}
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#61A0B0] hover:bg-[#61B097] text-white"
                  onClick={() =>
                    window.open("https://wa.me/5511999999999", "_blank")
                  }
                >
                  Agendar Consulta com{" "}
                  {specialists[selectedSpecialist].name.split(" ")[0]}
                </Button>
              </div>
            </>
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
      className="min-h-screen bg-[#b4ece9] pt-24 flex items-center"
      ref={ref}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#61B097] leading-tight text-balance">
              Cuidar da sua saúde é agora — agende sua consulta com a Saúde Já.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed text-pretty">
              Atendimento humanizado, especialistas qualificados e exames
              modernos.
            </p>
            <Button
              size="lg"
              className="bg-[#61A0B0] hover:bg-[#61B097] text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() =>
                window.open("https://wa.me/5511999999999", "_blank")
              }
            >
              Agendar Consulta
            </Button>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <img
              src="/happy-healthcare-professionals-smiling-in-modern-c.jpg"
              alt="Profissionais de saúde"
              className="rounded-2xl shadow-2xl"
            />
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
      description: "Cuidado especializado para crianças e adolescentes",
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Saúde do coração com tecnologia avançada",
    },
    {
      icon: Users,
      title: "Geriatria",
      description: "Atenção dedicada à terceira idade",
    },
    {
      icon: Flower2,
      title: "Ginecologia",
      description: "Saúde integral da mulher",
    },
  ];

  return (
    <section id="especialidades" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#61B097] text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nossas Especialidades
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border-slate-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <specialty.icon className="w-12 h-12 text-[#61A0B0] mb-4" />
              <h3 className="text-xl font-bold text-[#61B097] mb-2">
                {specialty.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {specialty.description}
              </p>
            </Card>
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
    <section id="especialistas" className="py-12 bg-[#61A0B0]" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nossos Especialistas
        </h2>
        <p
          className={`text-white/90 text-center mb-12 text-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Conheça nossa equipe de profissionais qualificados
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => onSelectSpecialist(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={specialist.photo || "/placeholder.svg"}
                  alt={specialist.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#61B097] mb-1">
                  {specialist.name}
                </h3>
                <p className="text-slate-600 font-medium mb-3">
                  {specialist.specialty}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-[#61A0B0] text-[#61A0B0] hover:bg-[#61A0B0] hover:text-white bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSpecialist(index);
                  }}
                >
                  Ver Perfil
                </Button>
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
      title: "Eco cardiograma fetal",
      description: "Avaliação detalhada do coração do bebê",
    },
    {
      icon: Stethoscope,
      title: "Eletrocardiograma",
      description: "Monitoramento da atividade cardíaca",
    },
    {
      icon: Heart,
      title: "Exames de rotina",
      description: "Check-ups completos para sua saúde",
    },
  ];

  return (
    <section id="exames" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#61B097] text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Exames que Realizamos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <Card
              key={index}
              className={`p-8 bg-slate-50 hover:bg-slate-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border-slate-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <exam.icon className="w-12 h-12 text-[#61A0B0] mb-4" />
              <h3 className="text-xl font-bold text-[#61B097] mb-2">
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

function ConhecaSaudeJaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="conheca-saude-ja" className="py-12 bg-[#b4ece9]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/modern-medical-clinic-reception-area-with-comforta.jpg"
              alt="Clínica Saúde Já"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#61B097] text-balance">
              Conheça a Saúde Já
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-pretty">
              A Saúde Já nasceu com o propósito de oferecer atendimento médico
              de qualidade, humanizado e acessível para toda a família. Nossa
              equipe é formada por profissionais experientes e dedicados ao
              bem-estar dos nossos pacientes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-pretty">
              Com instalações modernas e equipamentos de última geração,
              garantimos diagnósticos precisos e tratamentos eficazes.
              Acreditamos que cuidar da saúde vai além de tratar doenças — é
              sobre prevenir, acolher e promover qualidade de vida.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <p className="text-4xl font-bold text-[#61A0B0] mb-2">15+</p>
                <p className="text-[#61B097] font-semibold">
                  Anos de experiência
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <p className="text-4xl font-bold text-[#61A0B0] mb-2">10k+</p>
                <p className="text-[#61B097] font-semibold">
                  Pacientes atendidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TourClinicaSection() {
  const { ref, isVisible } = useScrollAnimation();

  const clinicPhotos = [
    {
      title: "Recepção",
      image: "/modern-medical-clinic-reception-desk-with-friendly.jpg",
    },
    {
      title: "Sala de Espera",
      image: "/comfortable-medical-clinic-waiting-room-with-moder.jpg",
    },
    {
      title: "Consultório",
      image: "/modern-medical-consultation-room-with-examination-.jpg",
    },
    {
      title: "Sala de Exames",
      image: "/medical-examination-room-with-modern-equipment.jpg",
    },
  ];

  return (
    <section id="tour-clinica" className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#61B097] text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Tour pela Clínica
        </h2>
        <p
          className={`text-slate-600 text-center mb-12 text-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Conheça nossas instalações modernas e acolhedoras
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {clinicPhotos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#61A0B0]/90 via-[#61A0B0]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-white/90">
                    Ambiente preparado para seu conforto
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#61A0B0]/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white text-center">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FuncionamentoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-[#b4ece9]" ref={ref}>
      <div
        className={`container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Clock className="w-16 h-16 text-[#61A0B0] mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold text-[#61B097] mb-6">
          Atendimento
        </h2>
        <p className="text-2xl text-slate-600 leading-relaxed">
          Segunda a sexta, das 8h às 17h
        </p>
      </div>
    </section>
  );
}

function LocalizacaoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-[#61B097] text-center mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nossa Localização
        </h2>
        <p
          className={`text-slate-600 text-center mb-12 text-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Venha nos visitar
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976290724845!2d-46.65391842378056!3d-23.561414061236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1704900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Saúde Já"
            />
          </div>
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#b4ece9] px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-[#61B097]" />
              <span className="text-[#61B097] font-semibold">
                Rua da Saúde, 123 - Centro, São Paulo - SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-[#61A0B0]" ref={ref}>
      <div
        className={`container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-balance">
          Cuide da sua saúde hoje mesmo!
        </h2>
        <Button
          size="lg"
          className="bg-white hover:bg-[#b4ece9] text-[#61A0B0] text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
        >
          Agendar Consulta Agora
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="py-12 bg-[#61A0B0] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>WhatsApp: (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contato@saudeja.com.br</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Rua da Saúde, 123
                <br />
                Centro - São Paulo, SP
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <button
                className="hover:scale-110 transition-transform"
                onClick={() =>
                  window.open("https://wa.me/5511999999999", "_blank")
                }
              >
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
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
              <button className="hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-2.664 4.771-4.919 4.919-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.204-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p>© 2025 Saúde Já. @EZZECOMUNICAÇÃO.</p>
        </div>
      </div>
    </footer>
  );
}
