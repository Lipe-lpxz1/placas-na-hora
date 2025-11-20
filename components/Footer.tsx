import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#003399] to-[#001a4d] text-white py-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Brand / Minimal Logo */}
          <div className="flex items-center gap-3 mb-6 opacity-90 hover:opacity-100 transition-opacity">
             <div className="bg-white w-8 h-6 rounded-[3px] border-2 border-white/20 flex items-center justify-center shadow-lg overflow-hidden">
               <div className="w-full h-2 bg-[#003399] mb-auto"></div>
             </div>
            <span className="text-lg font-black tracking-[0.2em] uppercase drop-shadow-md">Placas na Hora</span>
          </div>

          {/* Credibility Message */}
          <p className="text-white font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 px-4">
            Referência em estampagem de placas padrão Mercosul. Qualidade garantida e atendimento expresso para você sair rodando regularizado.
          </p>

          {/* Copyright */}
          <div className="text-blue-200/60 text-xs font-light tracking-wide border-t border-white/10 pt-6 w-full max-w-md mx-auto">
            <p>&copy; {new Date().getFullYear()} Placas na Hora. Todos os direitos reservados.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;