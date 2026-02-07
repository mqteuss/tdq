import React, { useState, useEffect, useRef } from 'react';
import { EnergyType } from '../types';
import Icon from './ui/Icon';
import { ChevronDown, CheckCircle2, AlertTriangle, Activity, Zap, ArrowRight, ExternalLink, Info } from 'lucide-react';

interface EnergyCardProps {
  data: EnergyType;
  index?: number;
}

const EnergyCard: React.FC<EnergyCardProps> = ({ data, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    // Aguarda um breve momento para a animação de fechar começar, 
    // depois realinha o scroll para o card atual, evitando que a tela pule para baixo.
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  return (
    <div 
      ref={cardRef}
      className={`
        group relative bg-white dark:bg-neutral-900 rounded-3xl transition-all duration-700 ease-out border
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${isOpen 
          ? 'shadow-xl border-slate-300 dark:border-neutral-700 z-10' 
          : 'shadow-sm hover:shadow-lg border-slate-100 dark:border-neutral-800 hover:border-slate-200 dark:hover:border-neutral-700'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Header - Minimal & Professional */}
      <div 
        className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-8">
          <div className={`
            w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 border
            ${isOpen 
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-slate-50 dark:bg-neutral-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-neutral-700 group-hover:bg-white group-hover:text-brand-600 group-hover:border-brand-500'}
          `}>
            <Icon name={data.iconName} size={28} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">{data.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-normal max-w-xl">
              {data.shortDescription}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8">
           <span className={`hidden md:block text-xs font-bold uppercase tracking-widest transition-all duration-500 ${isOpen ? 'opacity-0 translate-x-4' : 'text-slate-400 group-hover:text-slate-900 opacity-0 group-hover:opacity-100'}`}>
             Ver Documentação Técnica
           </span>
          <div className={`
            w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500
            ${isOpen ? 'bg-slate-900 dark:bg-white border-slate-900 rotate-180 text-white dark:text-slate-900' : 'bg-transparent border-slate-200 dark:border-neutral-700 text-slate-400 group-hover:border-slate-400'}
          `}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Expanded Content - Structured for Desktop */}
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 md:px-12 pb-12 pt-0 border-t border-slate-100 dark:border-neutral-800">
          
          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-12 gap-12 mt-12">
            
            {/* Column 1: Core Content (Theoretic Base) - 7 Columns */}
            <div className="lg:col-span-7 space-y-12">
              
              <section className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6 text-slate-400 uppercase tracking-widest text-[11px] font-bold">
                  <Info size={14} /> Definição Fundamental
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl md:text-2xl font-light">
                  {data.fullDescription}
                </p>
              </section>

              {/* Functional Workflow Card */}
              <section className="animate-fade-in delay-100">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-8">Ciclo Funcional</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group/item">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-neutral-800 flex items-center justify-center text-slate-500">
                        <ArrowRight size={16} className="-rotate-45" />
                      </div>
                      <h5 className="text-xs font-bold uppercase text-slate-900 dark:text-white">Procedência</h5>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-100 dark:border-neutral-800 pl-4 py-1">
                      {data.obtained}
                    </p>
                  </div>

                  <div className="group/item">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-neutral-800 flex items-center justify-center text-slate-500">
                        <Zap size={16} />
                      </div>
                      <h5 className="text-xs font-bold uppercase text-slate-900 dark:text-white">Utilização Ativa</h5>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-100 dark:border-neutral-800 pl-4 py-1">
                      {data.usage}
                    </p>
                  </div>
                </div>
              </section>

              {/* Environmental Impact Banner - Sober */}
              <section className="animate-fade-in delay-200">
                <div className="p-8 bg-slate-50 dark:bg-neutral-800/50 rounded-2xl border border-slate-200 dark:border-neutral-800">
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-4">
                    <Activity size={14} /> Impacto Sistêmico
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed italic font-medium">
                    "{data.impacts}"
                  </p>
                </div>
              </section>
            </div>

            {/* Column 2: Side Data (Analysis & Examples) - 5 Columns */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Image Insight - Updated for Pop-out Effect */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 mb-8 cursor-pointer">
                <img 
                  src={data.imageUrl} 
                  alt={data.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Technical Analysis Grid */}
              <div className="bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-slate-100 dark:border-neutral-800">
                    <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-6">
                      <CheckCircle2 size={12} /> Vantagens
                    </h4>
                    <ul className="space-y-4">
                      {data.pros.map((pro, i) => (
                        <li key={i} className="text-[13px] text-slate-600 dark:text-slate-400 leading-snug flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0"></span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-6">
                      <AlertTriangle size={12} /> Desafios
                    </h4>
                    <ul className="space-y-4">
                      {data.cons.map((con, i) => (
                        <li key={i} className="text-[13px] text-slate-600 dark:text-slate-400 leading-snug flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0"></span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Examples - Clean Tags */}
              <section>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Evidências Reais</h4>
                <div className="flex flex-wrap gap-2">
                  {data.examples.map((ex, i) => (
                    <a 
                      key={i} 
                      href={`https://www.google.com/search?q=${encodeURIComponent(ex + ' ciência')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-50 dark:bg-neutral-800 border border-slate-100 dark:border-neutral-700 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-700 hover:border-slate-300 transition-all flex items-center gap-2"
                    >
                      {ex}
                      <ExternalLink size={12} className="opacity-40" />
                    </a>
                  ))}
                </div>
              </section>

              {/* Card Control */}
              <div className="pt-6">
                <button 
                  onClick={handleClose}
                  className="w-full py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  Concluir análise de {data.title}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyCard;