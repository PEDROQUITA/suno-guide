import React from 'react';
import { Play, MoreHorizontal, Heart, Share2 } from 'lucide-react';

export const SunoPlayerMockup: React.FC = () => {
  const songLink = "https://suno.com/song/6dc6a45d-a2fa-407b-96d8-063e4c6f936f";

  return (
    <div className="w-full max-w-sm mx-auto transform hover:scale-[1.02] transition-transform duration-300">
      <div className="glass-panel rounded-xl overflow-hidden suno-card-shadow border-0 bg-[#18181b]">
        {/* Cover Art Area */}
        <div className="relative aspect-square bg-stone-900 group">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop" 
            alt="Album Art" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <a 
               href={songLink}
               target="_blank"
               rel="noopener noreferrer"
               className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
             >
                <Play fill="black" className="ml-1 text-black" size={32} />
             </a>
          </div>
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white">
            V5 Model
          </div>
        </div>

        {/* Player Info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-white text-lg leading-tight hover:text-[#FA2C56] transition-colors">
                <a href={songLink} target="_blank" rel="noopener noreferrer">
                  Neon Shadows (V5 Ultimate)
                </a>
              </h3>
              <p className="text-stone-400 text-sm">SunoMastery • 4:20</p>
            </div>
            <Heart className="text-stone-500 hover:text-pink-500 cursor-pointer transition-colors" size={20} />
          </div>

          {/* Fake Waveform */}
          <a href={songLink} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            <div className="flex items-end gap-[2px] h-8 mb-4 opacity-70 hover:opacity-100 transition-opacity">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-white rounded-t-sm waveform-bar"
                  style={{ 
                    height: `${Math.max(20, Math.random() * 100)}%`,
                    animationDelay: `${i * 0.05}s`,
                    backgroundColor: i < 10 ? '#FA2C56' : '#52525b'
                  }}
                ></div>
              ))}
            </div>
          </a>

          <div className="flex items-center justify-between text-stone-500">
             <div className="flex gap-4">
                <span className="text-xs font-mono bg-stone-800 px-2 py-1 rounded text-stone-300">Electronic</span>
                <span className="text-xs font-mono bg-stone-800 px-2 py-1 rounded text-stone-300">Male Vocals</span>
             </div>
             <div className="flex gap-3">
                <Share2 size={18} className="hover:text-white cursor-pointer" />
                <MoreHorizontal size={18} className="hover:text-white cursor-pointer" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};