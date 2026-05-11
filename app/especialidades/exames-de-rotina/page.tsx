"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Microscope, MessageCircle, ArrowLeft, CheckCircle2, FlaskConical, Droplets, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RotinaPage() {
  const whatsappLink = "https://wa.me/558132045760?text=Olá! Gostaria de saber os valores e agendar meus exames de rotina.";
  
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="container-custom mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" /> <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="font-heading text-2xl font-bold text-primary">Saúde Já</div>
          <Button asChild className="rounded-full bg-primary text-white">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Consultar Preços</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container-custom mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Seus Exames de Sangue com <span className="text-primary italic">conforto e economia.</span></h1>
          <p className="text-xl text-slate-600 mb-10">Realize seu check-up completo em um ambiente acolhedor, com coleta humanizada e resultados rápidos diretamente no seu celular.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Droplets, t: "Coleta Gentil", d: "Equipe preparada para quem tem receio de agulhas." },
              { icon: FlaskConical, t: "Check-up Geral", d: "Glicemia, Colesterol, Hemograma e muito mais." },
              { icon: Microscope, t: "Precisão", d: "Laboratórios parceiros de alta confiança." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.t}</h3>
                <p className="text-sm text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-16 px-12 text-xl font-bold shadow-2xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" /> Orçamento via WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom mx-auto px-6 max-w-3xl">
          <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 flex gap-6 items-start">
            <Info className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Dica de Especialista:</h3>
              <p className="text-blue-800 leading-relaxed">
                Muitos exames de rotina exigem **jejum de 8 a 12 horas**. Ao falar com nossa equipe pelo WhatsApp, envie a lista de exames solicitada pelo seu médico para receber as orientações exatas de preparo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Saúde Já. Atendimento humanizado em Campo Grande.</p>
      </footer>
    </div>
  );
}