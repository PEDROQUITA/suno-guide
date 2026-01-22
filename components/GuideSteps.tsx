import React from 'react';
import { Settings, Zap, Headphones, Disc } from 'lucide-react';

const steps = [
  {
    icon: <Settings size={28} className="text-orange-400" />,
    title: "Configure o Modelo",
    desc: "Não use o modo 'Simple'. Ative o 'Custom Mode' no Suno para ter controle total sobre o prompt e as letras."
  },
  {
    icon: <Zap size={28} className="text-yellow-400" />,
    title: "A Estrutura V5",
    desc: "O segredo está na densidade. Use adjetivos sensoriais (smooth, atmospheric, ethereal) em vez de apenas gêneros."
  },
  {
    icon: <Disc size={28} className="text-pink-400" />,
    title: "Metatags",
    desc: "Use [Verse], [Chorus], [Drop] e [Outro] para forçar a IA a estruturar a música como um hit profissional."
  },
  {
    icon: <Headphones size={28} className="text-red-400" />,
    title: "Iteração",
    desc: "Nunca aceite a primeira versão. Use o botão 'Extend' a partir do melhor trecho para refinar a qualidade."
  }
];

export const GuideSteps: React.FC = () => {
  return (
    <div className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">Como Dominar a IA</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border-t border-white/5">
            <div className="mb-4 bg-stone-900/50 w-14 h-14 rounded-full flex items-center justify-center border border-white/5">
              {step.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
            <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};