import React from 'react';
import { ArrowDown } from 'lucide-react';
import { introContent } from '../data/content';

interface HeroProps {
  userName: string;
}

const Hero: React.FC<HeroProps> = ({ userName }) => {
  const handleStart = () => {
    const nextSection = document.getElementById('narrative-intro');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Grid sutil para sensação de documento técnico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-10 animate-fade-in">
          <span className="h-px w-12 bg-slate-900 dark:bg-white"></span>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400">
            Tese de Estudo Energético
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[9rem] font-bold text-slate-900 dark:text-white mb-12 leading-[0.9] tracking-tighter">
          {userName}
        </h1>

        <div className="grid md:grid-cols-2 gap-20 mt-16 mb-24">
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              I. Proposição
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
              {introContent.whatIs}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              II. Relevância
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
              {introContent.importance}
            </p>
          </div>
        </div>

        <button 
          onClick={handleStart}
          className="group flex items-center gap-8 text-slate-900 dark:text-white text-sm font-bold uppercase tracking-[0.4em] hover:opacity-70 transition-all mb-12 md:mb-0"
        >
          Iniciar Documentação
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-neutral-800 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all">
            <ArrowDown size={20} />
          </div>
        </button>
      </div>

      {/* Créditos da Equipe */}
      <div className="absolute bottom-6 left-0 right-0 text-center px-6">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-3 opacity-60">Quadro de Equipe</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
          <span>Mateus Henrique</span>
          <span className="opacity-30 hidden md:inline">•</span>
          <span>Fernanda Celestino</span>
          <span className="opacity-30 hidden md:inline">•</span>
          <span>Gabriel Carramão</span>
          <span className="opacity-30 hidden md:inline">•</span>
          <span>Marcos Adilson</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;