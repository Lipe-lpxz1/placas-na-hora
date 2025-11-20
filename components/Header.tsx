import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <>
      {/* 1. STICKY NAVBAR (PREMIUM GRADIENT & FINISH) */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-gradient-to-r from-[#003399] to-[#001a4d] shadow-2xl border-b-[3px] border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          
          {/* Logo Area - Aligned Left */}
          <div className="flex items-center gap-4">
            {/* Mercosul Icon Simulation - Refined */}
            <div className="relative bg-white w-11 h-8 rounded-[4px] border-2 border-white/90 flex items-center justify-center shadow-lg overflow-hidden transform transition-transform hover:rotate-2">
               <div className="absolute top-0 left-0 right-0 h-2.5 bg-[#003399]"></div>
               <span className="text-[#003399] font-black text-[9px] mt-1.5 tracking-tighter">BR</span>
            </div>
            
            <div className="flex flex-col justify-center">
              <h1 className="text-white font-black text-lg md:text-2xl tracking-widest uppercase drop-shadow-md leading-none">
                PLACAS NA HORA
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-blue-200 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase hidden sm:block opacity-80">
                  Estampadora Oficial
                </span>
              </div>
            </div>
          </div>

          {/* CTA Area - Aligned Right */}
          <div className="flex items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/95 hover:bg-white text-[#002266] font-bold py-2.5 px-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base group"
            >
              <MessageCircle size={18} className="fill-current group-hover:text-[#003399] transition-colors" />
              <span className="group-hover:text-[#003399] transition-colors">WhatsApp</span>
            </a>
          </div>

        </div>
      </nav>

      {/* 2. HERO SECTION (CLEAN BACKGROUND) */}
      <section className="relative pt-32 pb-24 bg-[#f9f9f9] min-h-[550px] flex items-center overflow-hidden border-b border-slate-200">
        
        {/* Subtle Geometric Pattern Background (Dot Grid) */}
        <div className="absolute inset-0 z-0 opacity-[0.3]" 
             style={{ 
               backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
               backgroundSize: '32px 32px' 
             }}>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#003399] text-sm font-bold mb-10 shadow-sm">
              <CheckCircle2 size={16} className="text-[#003399]" />
              <span className="tracking-wide uppercase text-xs">Padrão Mercosul Oficial</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#003399] leading-tight mb-8 tracking-tight">
              Sua Placa Pronta <br className="hidden md:block"/>
              <span className="text-slate-800">Em Minutos.</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-normal max-w-2xl mx-auto">
              Evite filas e burocracia. Somos credenciados pelo Detran para estampar a placa do seu carro ou moto na hora, com material oficial de alta resistência.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Pedir pelo WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Header;