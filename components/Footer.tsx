import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-light">
          Desenvolvido para fins educacionais • Ensino Médio
        </p>
        <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
          Ciências da Natureza e suas Tecnologias
        </p>
      </div>
    </footer>
  );
};

export default Footer;