import React from 'react';
import { SecretPrompt } from './components/SecretPrompt';
import { GeminiCreator } from './components/GeminiCreator';
import { GuideSteps } from './components/GuideSteps';
import { ExtraResources } from './components/ExtraResources';
import { StructureBuilder } from './components/StructureBuilder';
import { SunoPlayerMockup } from './components/SunoPlayerMockup';
import { ModelConfig } from './components/ModelConfig';
import { Radio, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-stone-200 selection:bg-[#FA2C56] selection:text-white">
      
      <div className="bg-noise"></div>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FF9C44] rounded-full blur-[180px] opacity-20 animate-pulse" style={{animationDuration: '8s'}}></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#FA2C56] rounded-full blur-[180px] opacity-20 animate-pulse" style={{animationDuration: '10s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* Suno Logo Styled Authentic */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF9C44] to-[#FA2C56] flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                 <span className="font-black text-[10px] text-white tracking-tighter transform scale-110">SUNO</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white tracking-tight">Unlocker</span>
                <span className="text-[10px] font-bold text-[#FA2C56] tracking-widest uppercase">V5 Ultimate Edition</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-400">
               <span className="hover:text-white cursor-pointer transition-colors">Guia</span>
               <span className="hover:text-white cursor-pointer transition-colors">Prompts</span>
               <span className="hover:text-white cursor-pointer transition-colors">Pedroquita</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <Radio size={10} className="animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="pt-24 pb-10 px-4 text-center">
          
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-stone-300 text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer">
            <span>🎉 Novo método V5 descoberto</span>
            <ChevronDown size={14} />
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Desbloqueie o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9C44] via-[#FA2C56] to-[#C524FF]">Potencial Real</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-stone-400 mb-12 leading-relaxed font-light">
            Ferramentas profissionais de engenharia de prompt para criadores que buscam o topo das paradas no Suno AI.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-24 max-w-6xl mx-auto">
             <div className="w-full md:w-1/2">
                <SecretPrompt />
             </div>
             <div className="w-full md:w-1/2">
                <SunoPlayerMockup />
             </div>
          </div>

          <div className="max-w-7xl mx-auto space-y-32">
            <ModelConfig />
            <GuideSteps />
            <StructureBuilder />
            <GeminiCreator />
            <ExtraResources />
          </div>

        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-black/40 py-16 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-12 h-12 rounded-full bg-stone-900 mx-auto flex items-center justify-center mb-6">
               <span className="font-bold text-stone-600 text-xs">SV5</span>
            </div>
            <p className="text-stone-500 text-sm mb-2">Desenvolvido para a comunidade criativa.</p>
            <p className="text-stone-600 text-xs">Este site não é afiliado à Suno, Inc.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;