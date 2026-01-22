import React, { useState } from 'react';
import { Cpu, AlertTriangle, Lock, Zap, Info, Star } from 'lucide-react';

type ModelType = {
  id: string;
  name: string;
  tag: string;
  description: string;
  tip: string;
  status: 'active' | 'legacy' | 'event' | 'recommended';
  warning?: string;
};

const MODELS: ModelType[] = [
  {
    id: 'v5',
    name: 'Modelo V5',
    tag: 'USANDO AGORA',
    status: 'active',
    description: 'O motor mais atual e potente.',
    tip: 'Use a estrutura completa de metatags. O prompt deve ser denso e atmosférico.'
  },
  {
    id: 'v4.5-plus',
    name: 'V4.5+',
    tag: 'RECOMENDADO',
    status: 'recommended',
    description: 'Versão aprimorada do v4.5.',
    tip: 'Bote sempre "futuristic" nas músicas. É o gatilho secreto para a melhor qualidade neste modelo.'
  },
  {
    id: 'v4.5',
    name: 'V4.5 Standard',
    tag: 'REALISMO',
    status: 'active',
    description: 'Focado em vozes naturais.',
    tip: 'Use "real voice male" (ou female) se você quer vocal extremamente realista. É o ponto forte desta versão.'
  },
  {
    id: 'v4.5-all',
    name: 'V4.5 All',
    tag: 'GRATUITO',
    status: 'active',
    description: 'Modelo acessível a todos.',
    tip: 'Use a técnica do V5 (prompt longo).',
    warning: 'NÃO bote "electronic male vocals". Isso gera uma voz "doida" e bugada neste modelo específico.'
  },
  {
    id: 'v4',
    name: 'V4 Classic',
    tag: 'LEGACY',
    status: 'legacy',
    description: 'O antigo rei.',
    tip: 'Bom para eletrônica ("electronic"). Cuidado: tende a gerar TRAP acidentalmente se não especificar o gênero.',
  },
  {
    id: 'v3.5',
    name: 'V3.5',
    tag: 'BLOQUEADO',
    status: 'legacy',
    description: 'Desbloqueado ao liberar todos os modos.',
    tip: 'Honestamente? Ignore e use o V4.5+ para resultados melhores.'
  },
  {
    id: 'v3-v2',
    name: 'V3 & V2',
    tag: 'EVENTO',
    status: 'event',
    description: 'Modelos arcaicos.',
    tip: 'Não existem no menu padrão. Só aparecem em eventos especiais do Suno.'
  }
];

export const ModelConfig: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>(MODELS[0]);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg shadow-lg shadow-blue-500/20">
            <Cpu className="text-white" size={24} />
        </div>
        <h3 className="text-3xl font-bold text-white">Configuração de <span className="text-blue-400">Modelos</span></h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar lista de modelos */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2">
          {MODELS.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left group ${
                selectedModel.id === model.id
                  ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                  : 'bg-[#18181b]/60 border-white/5 hover:bg-[#18181b] hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                 <div className={`w-2 h-2 rounded-full ${selectedModel.id === model.id ? 'bg-blue-400 animate-pulse' : 'bg-stone-600'}`}></div>
                 <span className={`font-bold ${selectedModel.id === model.id ? 'text-white' : 'text-stone-400 group-hover:text-stone-200'}`}>
                   {model.name}
                 </span>
              </div>
              
              {model.status === 'recommended' && <Star size={14} className="text-yellow-400 fill-yellow-400" />}
              {model.status === 'event' && <Lock size={14} className="text-red-400" />}
            </button>
          ))}
        </div>

        {/* Painel de Detalhes */}
        <div className="w-full lg:w-2/3">
          <div className="glass-panel p-8 rounded-2xl h-full border border-blue-500/10 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Cpu size={200} className="text-blue-500" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                  selectedModel.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  selectedModel.status === 'recommended' ? 'bg-yellow-500/20 text-yellow-400' :
                  selectedModel.status === 'event' ? 'bg-red-500/20 text-red-400' :
                  'bg-stone-500/20 text-stone-400'
                }`}>
                  {selectedModel.tag}
                </span>
                {selectedModel.id === 'v5' && <span className="text-xs text-stone-500 animate-pulse">● Online</span>}
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">{selectedModel.name}</h2>
              <p className="text-stone-300 text-lg mb-8">{selectedModel.description}</p>

              <div className="bg-[#09090b]/80 rounded-xl p-6 border border-white/10 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="text-yellow-400 shrink-0 mt-1" size={20} />
                  <div>
                    <h5 className="font-bold text-yellow-400 mb-1 text-sm uppercase tracking-wide">Segredo do Modelo</h5>
                    <p className="text-stone-200 leading-relaxed">
                      {selectedModel.tip}
                    </p>
                  </div>
                </div>
              </div>

              {selectedModel.warning && (
                <div className="bg-red-900/10 rounded-xl p-6 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h5 className="font-bold text-red-400 mb-1 text-sm uppercase tracking-wide">Cuidado</h5>
                      <p className="text-red-200/80 leading-relaxed text-sm">
                        {selectedModel.warning}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedModel.id === 'v4.5-plus' && (
                 <div className="mt-6 flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <Info size={16} />
                    <span>Nossa recomendação principal para qualidade/custo.</span>
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};