import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const references = [
  {
    title: "Física Conceitual",
    author: "Paul G. Hewitt",
    type: "Livro Didático",
    year: "2015"
  },
  {
    title: "Thermodynamics and an Introduction to Thermostatistics",
    author: "Herbert B. Callen",
    type: "Referência Acadêmica",
    year: "1985"
  },
  {
    title: "Balanço Energético Nacional (BEN)",
    author: "EPE - Empresa de Pesquisa Energética",
    type: "Relatório Governamental",
    year: "2023",
    url: "https://www.epe.gov.br"
  },
  {
    title: "Relatórios do IPCC sobre Energias Renováveis",
    author: "Painel Intergovernamental sobre Mudanças Climáticas",
    type: "Documentação Internacional",
    year: "2022"
  }
];

const References: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-neutral-950 border-t border-slate-200 dark:border-neutral-900 print:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-8">
          <BookOpen size={14} /> Referências Bibliográficas
        </div>
        
        <div className="grid gap-6">
          {references.map((ref, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 pb-4 border-b border-slate-200 dark:border-neutral-800 last:border-0">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {ref.title}
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>• {ref.author}</span>
                <span>• {ref.year}</span>
                <span className="px-2 py-0.5 bg-slate-100 dark:bg-neutral-800 rounded text-[10px] uppercase tracking-wider">
                  {ref.type}
                </span>
                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-brand-600 transition-colors">
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-[10px] text-slate-400 text-center uppercase tracking-widest opacity-60">
          Pesquisa realizada conforme normas ABNT (adaptado para web)
        </p>
      </div>
    </section>
  );
};

export default References;