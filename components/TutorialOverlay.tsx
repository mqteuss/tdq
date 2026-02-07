import React from 'react';
import { MousePointer2, ChevronDown } from 'lucide-react';

interface TutorialOverlayProps {
  onDismiss: () => void;
}

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ onDismiss }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-neutral-900 w-full max-w-md p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-neutral-800 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Visual Cue - Mock Card Animation */}
        <div className="relative w-48 h-28 bg-slate-50 dark:bg-neutral-800 rounded-xl border border-slate-200 dark:border-neutral-700 mb-8 flex items-center justify-center shadow-sm">
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-700"></div>
          <div className="absolute top-4 left-14 w-24 h-2 bg-slate-200 dark:bg-neutral-700 rounded-full"></div>
          <div className="absolute top-8 left-14 w-16 h-2 bg-slate-100 dark:bg-neutral-800 rounded-full"></div>
          
          <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full border border-slate-300 dark:border-neutral-600 flex items-center justify-center">
             <ChevronDown size={14} className="text-slate-400" />
          </div>

          {/* Hand Pointer Animation */}
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 animate-pulse">
            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-2 rounded-full shadow-lg">
              <MousePointer2 size={24} fill="currentColor" />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Conteúdo Interativo
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
          Para acessar os detalhes técnicos, diagramas e análises completas, <strong>clique sobre os cartões</strong> de energia para expandi-los.
        </p>

        <button 
          onClick={onDismiss}
          className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Entendi, vamos começar
        </button>

      </div>
    </div>
  );
};

export default TutorialOverlay;