import React from 'react';
import { Bike, Car, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_DATA, createWhatsAppLink } from '../constants';

const Pricing: React.FC = () => {
  const getAllProducts = () => {
    const products: Array<{
      category: string;
      title: string;
      price: string;
      iconName: 'Bike' | 'Car' | 'Star';
      isHighlight: boolean;
      link: string;
      description: string;
      label: string;
    }> = [];

    PRICING_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        let cardTitle = item.service;
        // Logic to clean up titles for the card display
        if (['Primeira Via', 'Segunda Via', 'Placa Padrão (1ª Via)'].some(s => item.service.includes(s))) {
           if (cat.id === 'motos' && item.service.includes('Placa Padrão')) cardTitle = 'Placa Padrão';
           else if (cat.id === 'carros' && item.service === 'Primeira Via') cardTitle = 'Primeira Via';
        }

        const message = `Olá, gostaria de encomendar: ${cardTitle} (${cat.title}) por ${item.value}.`;

        products.push({
          category: cat.title, // e.g. "Motos"
          label: cat.id === 'especiais' ? 'ESPECIAL' : cat.id === 'motos' ? 'MOTOCICLETA' : 'VEÍCULO', // Top strip label
          title: cardTitle, // Main card text
          price: item.value,
          iconName: cat.iconName,
          isHighlight: item.highlight || false,
          link: createWhatsAppLink(message),
          description: cat.id === 'especiais' ? 'Modelo de Coleção' : 'Homologado Detran'
        });
      });
    });

    return products;
  };

  const products = getAllProducts();

  return (
    <section id="precos" className="py-28 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm">
            <ShieldCheck size={16} className="text-[#003399]" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Tabela Oficial</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-[#003399] mb-4 tracking-tight">
            Qual modelo você precisa?
          </h3>
          <p className="text-lg text-slate-500 font-medium">
            Escolha a categoria do seu veículo:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((product, index) => {
            return (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Mercosul Style Header Strip */}
                <div className="bg-[#003399] h-14 px-6 flex items-center justify-between relative overflow-hidden">
                  <div className="flex items-center gap-3 z-10">
                    {/* The 'BR' Flag Badge simulation */}
                    <div className="bg-white w-9 h-6 rounded-[3px] flex items-center justify-center border border-white/20 shadow-sm">
                      <span className="text-[#003399] text-[10px] font-black tracking-tight">BR</span>
                    </div>
                    <span className="text-white font-bold tracking-widest text-sm uppercase">
                      BRASIL
                    </span>
                  </div>
                  <span className="text-white/90 text-xs font-semibold tracking-wider uppercase z-10">
                    {product.label}
                  </span>
                  
                  {/* Subtle sheen effect on header */}
                  <div className="absolute top-0 right-0 w-24 h-full bg-white/5 skew-x-12 translate-x-10"></div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col items-center flex-grow text-center">
                  
                  {/* Service Name */}
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {product.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-8">
                    {product.description}
                  </p>

                  {/* Price - Industrial/Plate Style */}
                  <div className="mb-8 relative">
                    <div className="font-mono text-4xl md:text-5xl text-slate-900 font-bold tracking-tighter">
                      {product.price}
                    </div>
                  </div>

                  {/* Elegant Button */}
                  <div className="mt-auto w-full">
                    <div className="w-full py-3.5 px-4 rounded-lg border border-emerald-500 text-emerald-600 font-semibold text-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <span className="tracking-wide">Encomendar agora</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>

                </div>
              </a>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-sm text-slate-400 font-light">
             * Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade para entrega imediata.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;