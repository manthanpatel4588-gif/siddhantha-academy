import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={ACADEMY_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-600/50 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp with Siddhantha Academy"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-75 animate-ping group-hover:opacity-0 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-slate-700">
          Chat with Siddhantha Academy
        </span>
      </a>
    </div>
  );
};
