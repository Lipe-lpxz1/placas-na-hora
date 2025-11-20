import React from 'react';
import { Clock, ShieldCheck, BadgeDollarSign } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  BadgeDollarSign: BadgeDollarSign
};

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#003399] mb-4">Por que escolher a Placas na Hora?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Não somos apenas uma estampadora. Somos especialistas em resolver o seu problema com agilidade e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-[#003399] rounded-xl flex items-center justify-center mb-6 mx-auto border border-blue-100">
                  <IconComponent size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 text-center">{feature.title}</h4>
                <p className="text-slate-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;