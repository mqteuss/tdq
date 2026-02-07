import React from 'react';

interface NarrativeBreakProps {
  text: string;
  align?: 'left' | 'center' | 'right';
}

const NarrativeBreak: React.FC<NarrativeBreakProps> = ({ text, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className={`max-w-4xl mx-auto flex flex-col ${alignmentClasses[align]}`}>
        <div className="w-16 h-px bg-slate-900 dark:bg-white mb-10 opacity-20"></div>
        <p className="text-2xl md:text-3xl font-serif italic text-slate-800 dark:text-slate-200 leading-relaxed opacity-90">
          {text}
        </p>
      </div>
    </section>
  );
};

export default NarrativeBreak;