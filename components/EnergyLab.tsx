import React, { useState } from 'react';
import { challenges, sources, converters, GameItem } from '../data/gameContent';
import Icon from './ui/Icon';
import { ArrowRight, RotateCcw, Play, CheckCircle2, XCircle, Beaker } from 'lucide-react';

const EnergyLab: React.FC = () => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedSource, setSelectedSource] = useState<GameItem | null>(null);
  const [selectedConverter, setSelectedConverter] = useState<GameItem | null>(null);
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const challenge = challenges[currentChallengeIndex];

  const handleRunSimulation = () => {
    if (!selectedSource || !selectedConverter) return;
    setSimulationState('running');
    setFeedback('Calculando parâmetros de conversão...');
    setTimeout(() => {
      if (selectedSource.id === challenge.correctSourceId && selectedConverter.id === challenge.correctConverterId) {
        setSimulationState('success');
        setFeedback(challenge.successMessage);
      } else {
        setSimulationState('error');
        setFeedback("Incompatibilidade sistêmica detectada. A combinação não atende aos requisitos do cenário proposto.");
      }
    }, 1500);
  };

  const handleNextLevel = () => {
    setSelectedSource(null);
    setSelectedConverter(null);
    setSimulationState('idle');
    setFeedback('');
    setCurrentChallengeIndex(prev => (prev < challenges.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-neutral-950 transition-colors duration-500" id="lab">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 border-b border-slate-200 dark:border-neutral-800 pb-10">
          <div>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
              <Beaker size={14} /> Laboratório Experimental
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Workbench de Simulação
            </h2>
          </div>
          
          <div className="px-5 py-2 bg-white dark:bg-neutral-900 rounded-xl border border-slate-200 dark:border-neutral-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Desafio </span>
            <span className="text-base font-bold text-slate-900 dark:text-white ml-2">{currentChallengeIndex + 1} / {challenges.length}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Briefing Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Instruções de Operação</h3>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{challenge.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                {challenge.description}
              </p>
              <div className="p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-100 dark:border-white/5">
                <span className="block text-[9px] uppercase text-slate-500 font-bold mb-1.5 tracking-wider">Output Esperado</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm">{challenge.targetOutput}</span>
              </div>
            </div>

            {/* Terminal View */}
            <div className={`p-8 rounded-2xl border transition-all duration-500 font-mono text-[13px] ${
              simulationState === 'idle' ? 'bg-slate-900 border-slate-800 text-slate-400' :
              simulationState === 'running' ? 'bg-slate-900 border-blue-500/50 text-blue-400' :
              simulationState === 'success' ? 'bg-slate-900 border-emerald-500/50 text-emerald-400' :
              'bg-slate-900 border-red-500/50 text-red-400'
            }`}>
              <div className="flex items-center gap-2 mb-4 opacity-50">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 <span className="ml-2 uppercase tracking-tighter text-[10px]">terminal_output</span>
              </div>
              <p className="leading-relaxed">
                {"> "} {feedback || "Aguardando input do operador..."}
              </p>
              
              {simulationState === 'success' && (
                <button 
                  onClick={handleNextLevel}
                  className="mt-6 w-full py-3 bg-white text-slate-900 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  Próximo Desafio <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grid Selection Area */}
          <div className="lg:col-span-8 space-y-12">
            
            <div className="relative bg-white dark:bg-neutral-900 rounded-3xl p-12 border border-slate-200 dark:border-neutral-800 shadow-inner flex flex-col md:flex-row items-center justify-center gap-12">
              
              {/* Slot 1 */}
              <div className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all
                  ${selectedSource ? 'border-slate-900 bg-slate-50 border-solid' : 'border-slate-200 text-slate-300'}`}>
                {selectedSource ? (
                  <>
                    <Icon name={selectedSource.icon} size={40} className="text-slate-900" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">{selectedSource.name}</span>
                  </>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Fonte</span>
                )}
              </div>

              <ArrowRight className="text-slate-200 hidden md:block" size={32} />

              {/* Slot 2 */}
              <div className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all
                  ${selectedConverter ? 'border-slate-900 bg-slate-50 border-solid' : 'border-slate-200 text-slate-300'}`}>
                {selectedConverter ? (
                  <>
                    <Icon name={selectedConverter.icon} size={40} className="text-slate-900" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-center px-4">{selectedConverter.name}</span>
                  </>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Conversor</span>
                )}
              </div>

              <button
                onClick={handleRunSimulation}
                disabled={!selectedSource || !selectedConverter || simulationState === 'running' || simulationState === 'success'}
                className="absolute -bottom-6 px-10 py-4 bg-slate-900 disabled:bg-slate-200 text-white rounded-full shadow-xl font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
              >
                 {simulationState === 'running' ? 'Processando...' : 'Executar Simulação'}
              </button>
            </div>

            {/* Catalog Area */}
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                 <h4 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">Matriz de Fontes</h4>
                 <div className="grid grid-cols-2 gap-3">
                   {sources.map(item => (
                     <button
                       key={item.id}
                       onClick={() => simulationState !== 'success' && setSelectedSource(item)}
                       className={`p-4 rounded-xl text-left flex items-center gap-4 border transition-all
                         ${selectedSource?.id === item.id 
                           ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                           : 'bg-white border-slate-100 hover:border-slate-300 text-slate-600'}
                       `}
                     >
                       <Icon name={item.icon} size={20} className={selectedSource?.id === item.id ? 'text-white' : 'text-slate-400'} />
                       <span className="text-xs font-bold uppercase tracking-tight">{item.name}</span>
                     </button>
                   ))}
                 </div>
               </div>

               <div className="space-y-4">
                 <h4 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest ml-1">Tecnologias de Conversão</h4>
                 <div className="grid grid-cols-2 gap-3">
                   {converters.map(item => (
                     <button
                       key={item.id}
                       onClick={() => simulationState !== 'success' && setSelectedConverter(item)}
                       className={`p-4 rounded-xl text-left flex items-center gap-4 border transition-all
                         ${selectedConverter?.id === item.id 
                           ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                           : 'bg-white border-slate-100 hover:border-slate-300 text-slate-600'}
                       `}
                     >
                       <Icon name={item.icon} size={20} className={selectedConverter?.id === item.id ? 'text-white' : 'text-slate-400'} />
                       <span className="text-xs font-bold uppercase tracking-tight">{item.name}</span>
                     </button>
                   ))}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyLab;