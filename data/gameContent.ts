export interface GameItem {
  id: string;
  name: string;
  icon: string;
  type: 'source' | 'converter';
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  targetOutput: string;
  correctSourceId: string;
  correctConverterId: string;
  successMessage: string;
}

export const sources: GameItem[] = [
  { id: 'sun', name: 'Luz Solar', icon: 'Sun', type: 'source' },
  { id: 'water', name: 'Rio Corrente', icon: 'Waves', type: 'source' },
  { id: 'wind', name: 'Vento Constante', icon: 'Wind', type: 'source' },
  { id: 'fossil', name: 'Combustível Fóssil', icon: 'Flame', type: 'source' },
  { id: 'uranium', name: 'Urânio Enriquecido', icon: 'Atom', type: 'source' },
];

export const converters: GameItem[] = [
  { id: 'panel', name: 'Painel Fotovoltaico', icon: 'LayoutGrid', type: 'converter' },
  { id: 'turbine_wind', name: 'Aerogerador', icon: 'Fan', type: 'converter' },
  { id: 'turbine_hydro', name: 'Turbina Hidráulica', icon: 'Disc', type: 'converter' },
  { id: 'engine', name: 'Motor a Combustão', icon: 'Cog', type: 'converter' },
  { id: 'reactor', name: 'Reator Nuclear', icon: 'Radio', type: 'converter' },
];

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Operação: Base Isolada",
    description: "Precisamos alimentar os computadores de uma estação de pesquisa no deserto. O recurso é abundante durante o dia e precisamos de silêncio absoluto.",
    targetOutput: "Eletricidade Limpa",
    correctSourceId: 'sun',
    correctConverterId: 'panel',
    successMessage: "Excelente. Os fótons estão excitando os elétrons no silício. Eficiência nominal atingida."
  },
  {
    id: 2,
    title: "Projeto: Alta Rotação",
    description: "Um veículo de carga precisa atravessar o continente rapidamente. Precisamos de alta densidade energética, infelizmente aceitando a emissão de gases.",
    targetOutput: "Movimento Mecânico",
    correctSourceId: 'fossil',
    correctConverterId: 'engine',
    successMessage: "Combustão iniciada. A expansão dos gases está movendo os pistões. O veículo está operacional."
  },
  {
    id: 3,
    title: "Protocolo: Cidade Noturna",
    description: "Uma metrópole precisa de energia constante e massiva, dia e noite, sem depender de queima de carvão, usando a força fundamental da matéria.",
    targetOutput: "Eletricidade de Base",
    correctSourceId: 'uranium',
    correctConverterId: 'reactor',
    successMessage: "Fissão estável. O vapor gerado pelo calor nuclear está girando as turbinas. A cidade está iluminada."
  },
  {
    id: 4,
    title: "Missão: Vale dos Ventos",
    description: "Uma comunidade costeira tem fortes correntes de ar constantes. Instale um sistema renovável que aproveite essa energia cinética.",
    targetOutput: "Eletricidade Renovável",
    correctSourceId: 'wind',
    correctConverterId: 'turbine_wind',
    successMessage: "As pás estão cortando o ar. Indução eletromagnética confirmada no estator."
  }
];