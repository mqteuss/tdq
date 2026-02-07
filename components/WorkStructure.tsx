import React from 'react';
import { workStructure } from '../data/content';
import { Layers, FileText, Mic, PenTool } from 'lucide-react';

const icons = [FileText, Mic, PenTool, Layers];

const WorkStructure: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Estrutura do Trabalho</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Organização das etapas avaliativas</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workStructure.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-neutral-800 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-500">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkStructure;