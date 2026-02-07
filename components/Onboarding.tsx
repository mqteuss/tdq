import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface OnboardingProps {
  onComplete: (name: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFading, setIsFading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsFading(true);
      setTimeout(() => onComplete(inputValue), 500);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-neutral-950 transition-opacity duration-500 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-md px-6">
        <h1 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white mb-2 tracking-tight">
          Olá.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg font-light">
          Como você gostaria de ser chamado durante nossa jornada?
        </p>

        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Seu nome"
            className="w-full bg-transparent border-b-2 border-slate-200 dark:border-neutral-800 py-3 text-xl focus:outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-neutral-700"
            autoFocus
          />
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className={`absolute right-0 top-3 text-slate-400 dark:text-slate-500 transition-all duration-300 ${inputValue.trim() ? 'opacity-100 translate-x-0 hover:text-brand-500' : 'opacity-0 -translate-x-4'}`}
          >
            <ArrowRight size={28} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;