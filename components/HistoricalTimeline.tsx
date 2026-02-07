import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Icon from './ui/Icon';

const timelineEvents = [
  {
    year: '~400k a.C.',
    title: 'Domínio do Fogo',
    description: 'A primeira conversão intencional de energia química em térmica e luminosa pela humanidade, permitindo proteção e cozimento.',
    icon: 'Flame'
  },
  {
    year: '1712',
    title: 'Revolução a Vapor',
    description: 'A invenção do motor atmosférico por Newcomen permite transformar calor em trabalho mecânico em escala industrial.',
    icon: 'CloudFog'
  },
  {
    year: '1831',
    title: 'A Faísca Elétrica',
    description: 'Faraday descobre a indução eletromagnética, estabelecendo o princípio fundamental de todos os geradores modernos.',
    icon: 'Zap'
  },
  {
    year: '1859',
    title: 'Ouro Negro',
    description: 'A perfuração do poço de Drake na Pensilvânia inicia a era dos combustíveis fósseis líquidos e da petroquímica.',
    icon: 'Droplets'
  },
  {
    year: '1942',
    title: 'Era Atômica',
    description: 'O reator Chicago Pile-1 realiza a primeira reação em cadeia nuclear autossustentada controlada da história.',
    icon: 'Atom'
  },
  {
    year: '1954',
    title: 'Silício Solar',
    description: 'Bell Labs demonstra a primeira célula fotovoltaica prática, convertendo luz solar diretamente em eletricidade.',
    icon: 'Sun'
  },
  {
    year: '2050+',
    title: 'Horizonte de Fusão',
    description: 'A busca pela energia estelar (Fusão Nuclear) promete uma fonte inesgotável e limpa, replicando o sol.',
    icon: 'Orbit'
  }
];

const HistoricalTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-slate-50 dark:bg-neutral-900 overflow-hidden border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
          <ArrowRight size={14} /> Evolução Temporal
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          A Escala da Civilização
        </h2>
        <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl font-light">
          A ascensão tecnológica humana é, em essência, a história de como aprendemos a desbloquear fontes de energia cada vez mais densas.
        </p>
      </div>

      {/* Container de Scroll Horizontal */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-[max(2rem,calc(50vw-40rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-8 md:space-x-12 min-w-max pr-12">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className="relative w-[280px] md:w-[320px] flex flex-col group snap-start"
            >
              {/* Linha conectora visual */}
              {index !== timelineEvents.length - 1 && (
                 <div className="absolute top-6 left-6 w-full h-px bg-slate-200 dark:bg-neutral-800 -z-10"></div>
              )}
              
              {/* Nó do evento (Ícone) */}
              <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-slate-200 dark:border-neutral-700 flex items-center justify-center text-slate-400 group-hover:border-slate-900 dark:group-hover:border-white group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300 z-10 mb-6 shadow-sm">
                <Icon name={event.icon} size={20} />
              </div>

              {/* Conteúdo */}
              <div className="pr-4">
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md mb-3 border border-slate-200 dark:border-neutral-700">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricalTimeline;