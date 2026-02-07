import React, { useState } from 'react';
import { transformations } from '../data/content';
import Icon from './ui/Icon';
import { ArrowRight, ArrowLeftRight, RefreshCcw } from 'lucide-react';

const Transformations: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-slate-50 dark:bg-neutral-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="flex items-center gap-3 text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-6">
            <RefreshCcw size={14} /> Fluxos Termodinâmicos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter mb-8">
            Anatomia da <br />Mudança Energética
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            A energia é uma entidade fluida. Abaixo, documentamos as transições mais críticas observadas nos sistemas físicos modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformations.map((t) => (
            <div 
              key={t.id}
              className={`
                group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 border
                ${activeId === t.id 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl -translate-y-2' 
                  : 'bg-white dark:bg-neutral-950 border-slate-100 dark:border-neutral-900 hover:border-slate-300 dark:hover:border-neutral-800 shadow-sm'}
              `}
              onClick={() => setActiveId(activeId === t.id ? null : t.id)}
            >
              <div className="mb-12">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${activeId === t.id ? 'bg-white/10' : 'bg-slate-50 dark:bg-neutral-900'}`}>
                  <Icon name={t.icon} className={activeId === t.id ? 'text-white' : 'text-slate-400'} size={24} />
                </div>
                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${activeId === t.id ? 'text-slate-400' : 'text-slate-400'}`}>
                  <span>{t.from}</span>
                  <ArrowRight size={10} />
                  <span>{t.to}</span>
                </div>
              </div>

              <div className="min-h-[100px] flex flex-col justify-end">
                {activeId === t.id ? (
                  <div className="animate-fade-in">
                     <p className="text-lg font-medium leading-snug mb-4">
                      {t.description}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <span className="block text-[9px] uppercase opacity-50 mb-1 tracking-widest">Aplicação</span>
                      <p className="text-xs font-bold">{t.industrialApplication}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:gap-4 transition-all">
                    Analisar Fluxo
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;