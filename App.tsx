import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Onboarding from './components/Onboarding';
import Hero from './components/Hero';
import EnergyCard from './components/EnergyCard';
import Transformations from './components/Transformations';
import EfficiencyChart from './components/EfficiencyChart';
import NarrativeBreak from './components/NarrativeBreak';
import EnergyLab from './components/EnergyLab';
import Footer from './components/Footer';
import TutorialOverlay from './components/TutorialOverlay';
import References from './components/References'; // New Import
import ScrollToTop from './components/ScrollToTop'; // New Import
import { energyTypes } from './data/content';
import { Theme } from './types';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOnboardingComplete = (name: string) => {
    setUserName(name);
    setShowTutorial(true);
  };

  if (!isLoaded) return null;

  if (!userName) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 transition-colors duration-500">
        <Onboarding onComplete={handleOnboardingComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 transition-colors duration-500 relative">
      <Navbar theme={theme} toggleTheme={toggleTheme} userName={userName} />
      
      {showTutorial && (
        <TutorialOverlay onDismiss={() => setShowTutorial(false)} />
      )}
      
      <main>
        <Hero userName={userName} />

        <div id="narrative-intro">
          <NarrativeBreak 
            text={`Excelente, ${userName}. Para compreender o universo, precisamos identificar as forças invisíveis que o movem. A energia assume diversas máscaras; vamos desvendar as essenciais agora.`}
            align="center"
          />
        </div>
        
        <section id="types" className="py-12 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            {energyTypes.map((energy, index) => {
              if (index === 3) {
                 return (
                   <React.Fragment key="break">
                     <NarrativeBreak 
                       text="Fascinante, não é? Mas nossa busca não termina aqui. Além das máquinas e reações, precisamos olhar para o céu e para as forças fundamentais da natureza."
                       align="left"
                     />
                     <EnergyCard key={energy.id} data={energy} index={index} />
                   </React.Fragment>
                 )
              }
              return <EnergyCard key={energy.id} data={energy} index={index} />;
            })}
          </div>
        </section>

        <NarrativeBreak 
           text="Contudo, a energia raramente permanece estática. Sua verdadeira magia acontece quando ela flui e muda de identidade."
           align="right"
        />

        <Transformations />

        <EfficiencyChart />

        <NarrativeBreak 
           text="Teoria é fundamental, mas é na prática que a ciência ganha vida. Vamos testar sua capacidade de engenharia."
           align="center"
        />

        <EnergyLab />

        <References />

        <NarrativeBreak 
           text={`Chegamos ao fim deste capítulo, ${userName}. A energia continuará fluindo e se transformando ao seu redor. Agora, você tem o olhar necessário para percebê-la.`}
           align="center"
        />
        
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;