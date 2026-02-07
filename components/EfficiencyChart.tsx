import React, { useEffect, useState, useRef } from 'react';
import { BarChart3, Info } from 'lucide-react';

const efficiencyData = [
  { label: 'Hidrelétrica', value: 90, desc: 'Alta eficiência mecânica direta.', color: 'bg-cyan-600' },
  { label: 'Eólica', value: 45, desc: 'Limite de Betz restringe a captura.', color: 'bg-emerald-500' },
  { label: 'Motor a Combustão', value: 30, desc: 'Muita perda em calor (exaustão).', color: 'bg-amber-600' },
  { label: 'Solar Fotovoltaica', value: 22, desc: 'Limite físico do material (Silício).', color: 'bg-yellow-500' },
  { label: 'Geotérmica', value: 15, desc: 'Baixa diferença de temperatura.', color: 'bg-red-500' },
];

const EfficiencyChart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-neutral-950 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Text Context */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-3 text-slate-400 font-bold tracking-[0.2em] text-[10px] uppercase">
              <BarChart3 size={14} /> Dados Comparativos
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              A Realidade da <br/>Eficiência
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm">
              Devido à Segunda Lei da Termodinâmica, nenhuma transformação energética é 100% eficiente. Parte da energia sempre se dissipa (geralmente como calor inútil).
            </p>
            <div className="p-4 bg-slate-50 dark:bg-neutral-900 rounded-xl border border-slate-100 dark:border-neutral-800">
              <div className="flex items-start gap-3">
                <Info size={16} className="text-slate-400 mt-1 shrink-0" />
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <strong>Nota:</strong> Os valores representam a eficiência média comercial de conversão da fonte primária para eletricidade ou trabalho útil.
                </p>
              </div>
            </div>
          </div>

          {/* Chart Bars */}
          <div className="md:w-2/3 w-full space-y-5">
            {efficiencyData.map((item, index) => (
              <div key={item.label} className="group relative">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  <span>{item.label}</span>
                  <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {item.value}%
                  </span>
                </div>
                
                <div className="h-3 w-full bg-slate-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${item.value}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  ></div>
                </div>
                
                <p className="text-[10px] text-slate-400 dark:text-slate-600 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EfficiencyChart;