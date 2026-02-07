import { EnergyType, Transformation } from '../types';

export const introContent = {
  title: "O Universo da Energia",
  whatIs: "Energia é a grandeza física fundamental que permeia todo o universo. Em termos físicos, é definida como a capacidade de realizar trabalho (mover algo contra uma força) ou transferir calor. Ela obedece à Primeira Lei da Termodinâmica: a energia de um sistema isolado é constante; ela não pode ser criada nem destruída, apenas transformada de uma modalidade para outra.",
  importance: "A manipulação da energia define os estágios da civilização humana. Biologicamente, a energia química (ATP) sustenta cada batimento cardíaco. Economicamente, o acesso à energia barata e abundante está diretamente ligado ao IDH (Índice de Desenvolvimento Humano). No cenário atual, o desafio da transição energética — mover-se de fontes fósseis para renováveis — é a questão central para a sobrevivência climática do planeta."
};

export const energyTypes: EnergyType[] = [
  {
    id: 'eletrica',
    title: 'Energia Elétrica',
    iconName: 'Zap',
    shortDescription: 'O fluxo ordenado de elétrons impulsionado por uma diferença de potencial.',
    fullDescription: 'A energia elétrica é baseada no movimento de cargas elétricas (geralmente elétrons) através de condutores. Esse fenômeno ocorre quando há uma diferença de potencial (tensão ou voltagem) entre dois pontos, criando um campo elétrico que impulsiona as cargas. É a forma de energia mais "nobre" no sentido de versatilidade: pode ser convertida com altíssima eficiência em luz, calor, movimento ou processamento de dados.',
    obtained: 'Raramente encontrada pronta na natureza para uso contínuo. É produzida induzindo o movimento de elétrons através do magnetismo (Lei de Faraday) em geradores de usinas hidrelétricas, eólicas e termelétricas, ou através da excitação de elétrons pela luz em painéis fotovoltaicos.',
    usage: 'É a espinha dorsal da sociedade digital. Alimenta desde microprocessadores em smartphones até fornos de arco elétrico na siderurgia, trens de alta velocidade, sistemas de suporte à vida em hospitais e a infraestrutura global da internet.',
    pros: ['Transporte instantâneo a longas distâncias via cabos', 'Acionamento silencioso e limpo de motores', 'Controle preciso (eletrônica)'],
    cons: ['Não pode ser armazenada em grandes quantidades (depende de baterias caras ou reservatórios)', 'Perdas por efeito Joule nas linhas de transmissão', 'Risco de eletrocussão e incêndios'],
    impacts: 'Embora o uso seja limpo, a geração define o impacto. Hidrelétricas alagam biodiversidade; termelétricas poluem o ar. Além disso, o descarte incorreto de lixo eletrônico (e-waste) contamina lençóis freáticos com metais pesados.',
    examples: ['Descargas atmosféricas (raios)', 'Impulsos nervosos (bioeletricidade)', 'Rede de alta tensão'],
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'quimica',
    title: 'Energia Química',
    iconName: 'FlaskConical',
    shortDescription: 'O potencial energético armazenado nas ligações entre átomos.',
    fullDescription: 'Energia química é uma forma de energia potencial armazenada nas ligações covalentes, iônicas ou metálicas que unem os átomos. Quando essas ligações são quebradas ou reformadas durante uma reação química (como a combustão ou a digestão), a energia é liberada (processo exotérmico) ou absorvida (processo endotérmico). É a bateria original da natureza.',
    obtained: 'Capturada primordialmente pela fotossíntese, onde plantas convertem energia solar em glicose. Está presente em biomassa (madeira, cana), combustíveis fósseis (petróleo, carvão, gás natural) acumulados por milênios, e em alimentos.',
    usage: 'Essencial para a vida (respiração celular/ATP). Move a frota mundial de transporte (gasolina, diesel, querosene de aviação), gera calor industrial, permite o funcionamento de baterias e pilhas, e é base para explosivos na mineração.',
    pros: ['Altíssima densidade energética (muita energia em pouco volume)', 'Fácil de armazenar e transportar em tanques', 'Tecnologia de extração dominada'],
    cons: ['A liberação geralmente produz gases tóxicos ou de efeito estufa (CO2, metano)', 'Recursos fósseis são finitos (não renováveis)', 'Riscos de vazamentos contaminantes'],
    impacts: 'Principal motor das mudanças climáticas antropogênicas devido à emissão de Carbono. Derramamentos de petróleo destroem ecossistemas marinhos. A mineração de lítio e cobalto para baterias modernas também gera degradação do solo.',
    examples: ['Metabolismo celular', 'Dinamite', 'Baterias de Lítio'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mecanica',
    title: 'Energia Mecânica',
    iconName: 'Settings',
    shortDescription: 'A manifestação macroscópica do movimento e das forças.',
    fullDescription: 'A energia mecânica é a soma de duas componentes: a Energia Cinética (associada à velocidade de um corpo) e a Energia Potencial (associada à posição, como a gravitacional ou a elástica). É a forma de energia mais intuitiva, pois lidamos com ela fisicamente a todo momento. Em sistemas conservativos (sem atrito), a energia mecânica total permanece constante.',
    obtained: 'Convertida de outras fontes: motores transformam química em mecânica; turbinas transformam fluxo de fluidos em rotação mecânica; nossos músculos transformam energia química dos alimentos em movimento.',
    usage: 'Tudo que se move ou levanta peso. Construção civil, transportes, linhas de montagem industrial, elevadores, bombas d\'água, relógios mecânicos e esportes.',
    pros: ['Conversão direta em trabalho útil', 'Conceitos físicos bem compreendidos (Mecânica Newtoniana)', 'Fundamental para infraestrutura'],
    cons: ['O atrito é inevitável, gerando perdas térmicas e desgaste', 'Difícil de transmitir a longas distâncias sem perdas (eixos, correias)', 'Requer manutenção constante de peças móveis'],
    impacts: 'Grandes obras de engenharia mecânica (barragens, estradas) alteram a geografia local. A poluição sonora industrial é, essencialmente, energia mecânica (vibração do ar) indesejada afetando a fauna e a saúde humana.',
    examples: ['Montanha-russa', 'Arco e flecha tensionado', 'Turbina girando'],
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'termica',
    title: 'Energia Térmica',
    iconName: 'Flame',
    shortDescription: 'A energia interna dos sistemas termodinâmicos.',
    fullDescription: 'Energia térmica é a manifestação microscópica da energia cinética das partículas (átomos e moléculas) que compõem a matéria. Quanto maior a agitação dessas partículas, maior a temperatura. O calor é o fluxo dessa energia de um corpo mais quente para um mais frio, buscando o equilíbrio térmico. É frequentemente o "produto final" degradado de outras transformações energéticas (entropia).',
    obtained: 'Primariamente do Sol, do interior da Terra (geotérmica), ou como subproduto de reações químicas (combustão), nucleares e resistência elétrica (efeito Joule).',
    usage: 'Processos industriais (fusão de metais, esterilização), climatização de ambientes, cozimento de alimentos e, crucialmente, em máquinas térmicas que movem usinas e veículos.',
    pros: ['Fundamental para a manutenção da vida biológica', 'Fácil de gerar a partir de queima', 'Aproveitamento de calor residual (cogeração) aumenta eficiência'],
    cons: ['Baixa eficiência na conversão para trabalho (limite de Carnot)', 'Difícil isolamento (tende a dissipar-se)', 'Geração excessiva causa poluição térmica'],
    impacts: 'Ilhas de calor em centros urbanos devido ao concreto e asfalto. Aquecimento global (aprisionamento de energia térmica na atmosfera). Descarte de água quente industrial em rios reduz o oxigênio dissolvido, matando peixes.',
    examples: ['Magma vulcânico', 'Aquecedores solares', 'Fricção de pneus'],
    imageUrl: 'https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar',
    title: 'Energia Solar',
    iconName: 'Sun',
    shortDescription: 'A radiação eletromagnética estelar que sustenta a Terra.',
    fullDescription: 'É a energia emitida pelo Sol como resultado de fusão nuclear constante em seu núcleo. Ela viaja 150 milhões de quilômetros como radiação eletromagnética (fótons) até a Terra. É a "mãe" de quase todas as outras fontes: aquece a atmosfera gerando ventos (eólica), evapora água para chuvas (hidráulica) e alimenta plantas (biomassa/fóssil).',
    obtained: 'Captura passiva (aquecimento arquitetônico), térmica ativa (coletores para aquecer fluidos) ou fotovoltaica (conversão direta da luz em eletricidade usando semicondutores como o Silício).',
    usage: 'Geração distribuída em telhados, grandes fazendas solares, satélites espaciais, calculadoras, secagem de grãos e dessalinização de água.',
    pros: ['A fonte mais abundante disponível (inesgotável na escala humana)', 'Operação silenciosa', 'Baixo custo de manutenção após instalação'],
    cons: ['Intermitência (noite e nublado) exige backup', 'Baixa densidade de potência (precisa de muita área)', 'Fabricação dos painéis usa químicos tóxicos'],
    impacts: 'Operação com emissão zero. Porém, grandes usinas podem causar impacto visual e ocupar habitat de vida selvagem. O descarte de painéis antigos é um desafio emergente de reciclagem.',
    examples: ['Fotossíntese', 'Painéis Fotovoltaicos', 'Fornos solares'],
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eolica',
    title: 'Energia Eólica',
    iconName: 'Wind',
    shortDescription: 'A energia cinética das massas de ar em movimento.',
    fullDescription: 'O vento é gerado pelo aquecimento desigual da superfície terrestre pelo Sol. O ar quente sobe (menos denso) e o ar frio desce, criando correntes de convecção. A energia eólica captura essa energia cinética atmosférica. Modernamente, usa princípios aerodinâmicos de sustentação (como asas de avião) nas pás das turbinas para girar um rotor.',
    obtained: 'Aerogeradores instalados em terra (onshore) ou no mar (offshore), onde os ventos são mais constantes e fortes.',
    usage: 'Produção de eletricidade em escala de rede (parques eólicos), bombeamento mecânico de água em áreas rurais (cataventos multipás) e, historicamente, moagem de grãos e navegação.',
    pros: ['Fonte renovável com uma das menores pegadas de carbono', 'Não consome água potável na operação', 'Permite uso duplo do solo (agricultura na base)'],
    cons: ['Intermitência e imprevisibilidade', 'Poluição sonora (ruído aerodinâmico/mecânico)', 'Impacto visual na paisagem (sombras estroboscópicas)'],
    impacts: 'Colisão de aves e morcegos com as pás (mitigado com estudos de rotas migratórias). Vibrações e ruídos podem incomodar residentes próximos. Instalações offshore podem afetar a vida marinha durante a construção.',
    examples: ['Parques Eólicos do Nordeste', 'Barcos a vela', 'Moinhos Holandeses'],
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nuclear',
    title: 'Energia Nuclear',
    iconName: 'Atom',
    shortDescription: 'A força fundamental que mantém a matéria unida.',
    fullDescription: 'É a energia contida no núcleo dos átomos, mantida pela Força Nuclear Forte. Baseia-se na famosa equação de Einstein (E=mc²), onde uma pequena quantidade de matéria é convertida em uma quantidade colossal de energia. Pode ocorrer por Fissão (quebra de núcleos pesados como Urânio) ou Fusão (união de núcleos leves como Hidrogênio).',
    obtained: 'Comercialmente, através da fissão controlada de Urânio-235 ou Plutônio em reatores. A reação em cadeia gera calor intenso, que ferve água, gerando vapor para girar turbinas elétricas.',
    usage: 'Geração de eletricidade de base (constante) para grandes metrópoles, propulsão naval (submarinos e porta-aviões que operam por anos sem reabastecer) e, crucialmente, produção de radioisótopos para medicina (tratamento de câncer).',
    pros: ['Densidade energética imbatível (1 pastilha de urânio = 1 tonelada de carvão)', 'Não emite CO2 durante a operação', 'Fornecimento contínuo independente do clima'],
    cons: ['Resíduos radioativos perigosos por milênios', 'Risco de proliferação de armas nucleares', 'Consequências catastróficas em caso de falha de segurança'],
    impacts: 'Acidentes históricos (Chernobyl, Fukushima) criaram zonas de exclusão habitacional. O aquecimento da água de rios usados para resfriamento pode alterar o ecossistema aquático local.',
    examples: ['Reatores PWR/BWR', 'O Sol (Fusão Natural)', 'Bombas atômicas'],
    // IMAGEM ALTERADA: Usina nuclear (torres de resfriamento)
    // Para usar sua própria imagem PNG:
    // 1. Coloque o arquivo (ex: 'minha-usina.png') dentro da pasta 'public' na raiz do projeto.
    // 2. Mude a linha abaixo para: imageUrl: '/minha-usina.png'
    imageUrl: '/foto-nuclear.png'
  }
];

export const transformations: Transformation[] = [
  {
    id: 't1',
    from: 'Química',
    to: 'Mecânica',
    description: 'A combustão rápida expande gases violentamente, empurrando pistões ou turbinas.',
    industrialApplication: 'Motores de combustão interna (Otto/Diesel) e turbinas a gás.',
    icon: 'CarFront'
  },
  {
    id: 't2',
    from: 'Elétrica',
    to: 'Térmica',
    description: 'A corrente elétrica encontra resistência no material condutor, excitando os átomos e dissipando calor (Efeito Joule).',
    industrialApplication: 'Fornos de arco elétrico siderúrgicos e aquecedores resistivos.',
    icon: 'ThermometerSun'
  },
  {
    id: 't3',
    from: 'Luminosa',
    to: 'Elétrica',
    description: 'Fótons de luz colidem com átomos de silício, deslocando elétrons e criando corrente (Efeito Fotovoltaico).',
    industrialApplication: 'Usinas solares fotovoltaicas e sensores ópticos.',
    icon: 'SolarPanel'
  },
  {
    id: 't4',
    from: 'Mecânica',
    to: 'Elétrica',
    description: 'Um condutor movendo-se dentro de um campo magnético induz uma corrente elétrica (Indução Eletromagnética).',
    industrialApplication: 'Dínamos, alternadores de hidrelétricas e aerogeradores.',
    icon: 'Dam'
  }
];

export const workStructure = [
  {
    title: 'Pesquisa Teórica',
    description: 'Mergulhe em fontes confiáveis para construir uma base sólida sobre física e sustentabilidade.'
  },
  {
    title: 'Roteirização',
    description: 'Estruture sua narrativa de forma lógica, criando um fio condutor que prenda a atenção.'
  },
  {
    title: 'Design de Interface',
    description: 'Crie uma experiência visual limpa e intuitiva, onde a estética serve à funcionalidade.'
  },
  {
    title: 'Desenvolvimento',
    description: 'Dê vida ao projeto utilizando tecnologias modernas para criar interatividade.'
  }
];
