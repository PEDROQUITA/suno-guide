import React, { useState } from 'react';
import { Sparkles, Wand2, Loader2, Music2, X } from 'lucide-react';
import { generateSunoPrompt } from '../services/geminiService';

const STYLE_CHIPS = [
  "Cyberpunk", "Lo-fi", "80s Synth", "Epic Orchestral", 
  "Heavy Metal", "Trap", "Funk BR", "Ambient", "Jazz Noir"
];

export const GeminiCreator: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const generated = await generateSunoPrompt(idea);
      setResult(generated);
    } catch (e) {
      setResult("Erro ao gerar. O oráculo está silencioso.");
    } finally {
      setLoading(false);
    }
  };

  const addChip = (chip: string) => {
    if (!idea.includes(chip)) {
      setIdea(prev => prev ? `${prev}, ${chip}` : chip);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
          <Sparkles size={14} />
          <span>IA Engine 2.0</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Criador de <span className="gradient-text">Hyper-Prompts</span>
        </h3>
        <p className="text-stone-400 max-w-lg mx-auto text-lg">
          Misture estilos, adicione sua ideia e deixe o Gemini criar o comando perfeito para o Suno V5.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-1 shadow-2xl shadow-orange-900/10">
        <div className="bg-[#18181b]/90 rounded-[1.4rem] p-6 md:p-10 border border-white/5">
          
          {/* Input Area */}
          <div className="relative mb-6">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Descreva sua música... (ex: Uma balada triste sobre um robô apaixonado em Tóquio, vocais masculinos suaves)"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-lg text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all min-h-[120px] resize-none"
            />
            {idea && (
              <button 
                onClick={() => setIdea('')}
                className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Chips */}
          <div className="mb-8">
            <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-3 pl-1">Adicionar Estilo Rápido</p>
            <div className="flex flex-wrap gap-2">
              {STYLE_CHIPS.map(chip => (
                <button
                  key={chip}
                  onClick={() => addChip(chip)}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg text-sm font-medium transition-all active:scale-95 border border-white/5"
                >
                  + {chip}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
             <button
              onClick={handleGenerate}
              disabled={loading || !idea}
              className="bg-gradient-to-r from-[#FF9C44] to-[#FA2C56] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all shadow-lg shadow-orange-500/20 transform hover:-translate-y-1"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={24} />}
              <span>Gerar Prompt Mestre</span>
            </button>
          </div>

          {/* Result Area */}
          {result && (
            <div className="mt-10 animate-[fadeIn_0.5s_ease-out]">
              <div className="flex items-center gap-2 text-[#FF9C44] mb-3">
                <Music2 size={18} />
                <span className="text-xs uppercase tracking-wider font-bold">Resultado Otimizado</span>
              </div>
              <div 
                className="bg-[#0c0a09] border border-orange-500/30 rounded-xl p-6 relative group cursor-pointer hover:border-orange-500/60 transition-colors"
                onClick={() => navigator.clipboard.writeText(result)}
              >
                <div className="font-mono text-stone-300 leading-relaxed text-lg">
                  <span className="text-orange-500 select-none mr-2">$</span>
                  {result}
                  <span className="inline-block w-2 h-4 bg-orange-500 ml-1 animate-pulse align-middle"></span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">Copiar</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};