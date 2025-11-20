import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-all transform hover:scale-105 animate-pulse-slow border-2 border-white"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="hidden md:inline">Pedir Placa Agora</span>
    </a>
  );
};

export default WhatsAppButton;