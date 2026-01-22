import React from 'react';
import { ExternalLink, Star, Users, BookOpen, Crown } from 'lucide-react';

export const ExtraResources: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <h3 className="text-3xl font-bold text-center text-white mb-16">
        Recursos <span className="text-orange-400">Exclusivos</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Principal - Pedroquita (Premium Style) */}
        <div className="md:col-span-3 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
          
          <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-yellow-500/30 overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 p-0 opacity-5 md:opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                <Crown size={300} className="text-yellow-500 rotate-12" />
             </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left flex-1">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 border border-yellow-500/20">
                  <Crown size={14} fill="currentColor" />
                  Mestre Suno
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Aprenda com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Pedroquita</span>
                </h4>
                <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
                  Não dependa da sorte. Descubra a metodologia exata para criar hits virais, dominar a masterização com IA e monetizar suas faixas.
                </p>
                <div className="flex gap-4 mt-6 text-sm font-medium text-stone-400">
                   <span className="flex items-center gap-1"><CheckIcon /> Mentoria VIP</span>
                   <span className="flex items-center gap-1"><CheckIcon /> Prompts Secretos</span>
                   <span className="flex items-center gap-1"><CheckIcon /> Comunidade</span>
                </div>
              </div>
              
              <a href="#" className="whitespace-nowrap bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold py-5 px-10 rounded-2xl shadow-xl shadow-orange-500/20 transform group-hover:scale-105 transition-all flex items-center gap-3 text-lg">
                <span>Acessar o Curso</span>
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Small Cards */}
        {[
          { icon: <Users size={24} className="text-blue-400" />, title: "Comunidade Discord", desc: "Network com produtores." },
          { icon: <BookOpen size={24} className="text-pink-400" />, title: "Wiki de Gêneros", desc: "Lista completa de tags." },
          { icon: <ExternalLink size={24} className="text-emerald-400" />, title: "Masterização", desc: "Ferramentas externas." }
        ].map((card, i) => (
          <div key={i} className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-colors cursor-pointer group border border-white/5 hover:border-white/10">
            <div className="bg-stone-900/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
              {card.icon}
            </div>
            <h5 className="text-xl font-bold text-white mb-2">{card.title}</h5>
            <p className="text-stone-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
)
