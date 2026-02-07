import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: (name: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Suave fade-in ao carregar
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsFading(true);
      setTimeout(() => onComplete(inputValue), 800);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 dark:bg-neutral-950 transition-all duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Linha decorativa vertical para elegância estrutural */}
      <div className={`absolute top-0 w-px h-32 bg-gradient-to-b from-slate-200 to-transparent dark:from-neutral-800 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className={`w-full max-w-xl px-8 flex flex-col items-center text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-8">
          Acesso ao Material Didático
        </span>

        <h1 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-2 tracking-tight">
          Bem-vindo.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-light mb-12">
          Por favor, identifique-se para iniciar a sessão.
        </p>

        <form onSubmit={handleSubmit} className="w-full relative flex flex-col items-center">
          <div className="w-full max-w-md relative group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Como deseja ser chamado?"
              className="w-full bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl py-5 px-6 text-center text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white focus:border-transparent transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-serif"
              autoFocus
            />
          </div>
          
          <div className={`mt-12 flex justify-center transition-all duration-700 ${inputValue.trim() ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <button 
              type="submit"
              className="group flex items-center gap-4 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-lg transition-all"
            >
              Acessar Conteúdo
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

      </div>
      
       {/* Nota de Rodapé Discreta */}
      <div className={`absolute bottom-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
         <p className="text-[10px] text-slate-400 uppercase tracking-widest">
           Energi • Sistemas Físicos
         </p>
      </div>
    </div>
  );
};

export default Onboarding;