import React, { useState } from 'react';
import { Layers, Copy, Check } from 'lucide-react';

const STRUCTURES = [
  {
    name: "O Hit Viral (Pop/Rock)",
    structure: "[Intro]\n[Verse 1]\n[Pre-Chorus]\n[Chorus]\n[Verse 2]\n[Chorus]\n[Bridge]\n[Chorus]\n[Outro]"
  },
  {
    name: "Jornada Épica (Cinematic)",
    structure: "[Instrumental Intro]\n[Slow Build]\n[Verse]\n[Orchestral Swell]\n[Climax]\n[Choir]\n[Fade Out]"
  },
  {
    name: "Club Banger (EDM)",
    structure: "[Intro]\n[Build-up]\n[Drop]\n[Verse]\n[Build-up]\n[Drop]\n[Bridge]\n[Final Drop]\n[Outro]"
  },
  {
    name: "Estrutura Funk (Brasil)",
    structure: "[Intro com Beat]\n[Verso Rítmico]\n[Pré-Refrão]\n[Refrão Explosivo]\n[Ponte Dançante]\n[Refrão]\n[Final]"
  }
];

export const StructureBuilder: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg shadow-purple-500/20">
            <Layers className="text-white" size={24} />
        </div>
        <h3 className="text-3xl font-bold text-white">Gerador de <span className="text-purple-400">Estrutura</span></h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STRUCTURES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleCopy(item.structure, idx)}
            className="group relative flex flex-col items-start p-6 glass-panel rounded-xl hover:bg-stone-800/80 transition-all text-left border border-white/5 hover:border-purple-500/30"
          >
            <div className="mb-3 font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
              {item.name}
            </div>
            <div className="text-xs font-mono text-stone-500 bg-black/40 p-3 rounded-md w-full mb-4 whitespace-pre-wrap leading-relaxed h-32 overflow-hidden border border-white/5">
              {item.structure}
            </div>
            
            <div className={`absolute bottom-4 right-4 flex items-center gap-2 text-sm font-bold transition-all ${copiedIndex === idx ? 'text-green-400' : 'text-stone-500 group-hover:text-white'}`}>
              {copiedIndex === idx ? (
                <>Copiado <Check size={16} /></>
              ) : (
                <>Copiar <Copy size={16} /></>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};