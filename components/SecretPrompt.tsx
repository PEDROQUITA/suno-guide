import React, { useState } from 'react';
import { Copy, Check, Lock, Unlock } from 'lucide-react';

const THE_SECRET_PROMPT = "smooth, male vocals, electronic, ambient vibes with a steady beat; male vocals layered with subtle harmonies and atmospheric synths.";

export const SecretPrompt: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(THE_SECRET_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-12 relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative glass-panel rounded-2xl p-8 border-t border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${unlocked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
              {unlocked ? <Unlock size={24} /> : <Lock size={24} />}
            </div>
            <h2 className="text-2xl font-bold text-white">O Prompt "V5" Mestre</h2>
          </div>
          {!unlocked && (
            <button 
              onClick={() => setUnlocked(true)}
              className="text-xs uppercase tracking-widest text-orange-400 hover:text-orange-300 font-semibold border border-orange-500/30 px-3 py-1 rounded-full transition-colors"
            >
              Revelar Segredo
            </button>
          )}
        </div>

        <div className={`transition-all duration-700 ${unlocked ? 'opacity-100 blur-0' : 'opacity-50 blur-sm select-none'}`}>
          <p className="text-stone-400 mb-4 text-sm">
            Copie este código exato para ativar a latência de alta fidelidade no modelo (Teoria):
          </p>
          
          <div className="bg-black/50 rounded-xl p-6 font-mono text-orange-300 border border-white/5 relative overflow-hidden">
            {THE_SECRET_PROMPT}
            
            {unlocked && (
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black/80 to-transparent pointer-events-none"></div>
            )}
          </div>

          <div className="mt-6 flex justify-end">
             <button
              onClick={handleCopy}
              disabled={!unlocked}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg ${
                copied 
                  ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                  : 'bg-white text-stone-900 hover:bg-orange-50 shadow-orange-500/20'
              }`}
            >
              {copied ? (
                <>
                  <Check size={20} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar Prompt
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};