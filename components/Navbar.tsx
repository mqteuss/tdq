import React from 'react';
import { Moon, Sun, Atom, User } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, userName }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl transition-all duration-500 border-b border-slate-200/60 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
            <Atom className="text-white dark:text-slate-900" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tighter text-slate-900 dark:text-white leading-none">
              ENERGI
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">
              Sistemas Físicos
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-slate-50 dark:bg-neutral-900 rounded-full border border-slate-100 dark:border-neutral-800">
            <User size={14} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-900 dark:text-white">
              {userName}
            </span>
          </div>
          
          <div className="w-px h-6 bg-slate-200 dark:bg-neutral-800 hidden md:block"></div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-900 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-600 dark:text-slate-400 transition-all duration-300"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;