// =========================================================================
// 1. CONFIGURACIÓN OPCIONAL EN CÓDIGO (RECOMENDADO DEJAR VACÍO EN GITHUB PÚBLICO)
// =========================================================================
// Para privacidad en GitHub Pages público, deja esto tal cual y pega tu URL /exec
// + PIN secreto desde el botón superior de la app en tu móvil.
const GOOGLE_SHEETS_API_URL = "PEGA_AQUI_TU_URL_EXEC";
const APP_VERSION = 'v3.7';

// =========================================================================
// 2. CLAVES DE ALMACENAMIENTO LOCAL
// =========================================================================
const KEYS = {
  THEME: 'ludoteca_theme_v1',
  SHEETS_URL: 'ludoteca_sheets_url_v1',
  SHEETS_PIN: 'ludoteca_sheets_pin_v1',
  GAMES: 'ludoteca_games_v1',
  HISTORY: 'ludoteca_history_v1',
  DRAFT: 'ludoteca_draft_v1',
  PLAYERS: 'ludoteca_frequent_players_v1',
  DELETED_GAMES: 'ludoteca_deleted_games_v1',
  PENDING_DELETES: 'ludoteca_pending_deletes_v1',
  TIMER: 'ludoteca_timer_v1',
  TABLE_TOOLS: 'ludoteca_table_tools_v1',
  PLAYER_PROFILES: 'ludoteca_player_profiles_v1',
  CATALOG_META: 'ludoteca_catalog_meta_v1',
  SHELF_PROFILE: 'ludoteca_shelf_profile_v1',
};

// =========================================================================
// 3. LUDOTECA INICIAL (CON METADATOS Y MARCADORES INTEGRADOS)
// =========================================================================
const DEFAULT_GAMES = [
  {
    id: 'wyrmspan',
    name: 'Wyrmspan',
    color: '#831843',
    color2: '#500724',
    icon: 'dragon',
    scoringType: 'points',
    minPlayers: 1,
    maxPlayers: 5,
    defaultDuration: 90,
    extraType: 'wyrmspan',
    playModes: ['Multijugador', 'Solitario (Automa)'],
    quickCalc: 'wyrmspan',
    tagline: 'Cuevas y dragones',
  },
  {
    id: 'splendor_duel',
    name: 'Splendor Duel',
    color: '#2563EB',
    color2: '#1E3A8A',
    icon: 'gem',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 2,
    defaultDuration: 30,
    extraType: 'splendor',
    winModeLabel: 'Condición de victoria',
    winModes: ['20 puntos', '10 coronas', '10 de un color'],
    tagline: 'Duelo de gemas y coronas',
  },
  {
    id: 'terraforming_mars',
    name: 'Terraforming Mars',
    color: '#B4451F',
    color2: '#7A2A10',
    icon: 'planet',
    scoringType: 'points',
    minPlayers: 1,
    maxPlayers: 5,
    defaultDuration: 120,
    extraType: 'tfm',
    playModes: ['Multijugador', 'Solitario'],
    quickCalc: 'tfm',
    tagline: 'Corporaciones en Marte',
  },
  {
    id: 'harmonies',
    name: 'Harmonies',
    color: '#1F6E43',
    color2: '#12462A',
    icon: 'hex',
    scoringType: 'points',
    minPlayers: 1,
    maxPlayers: 4,
    defaultDuration: 30,
    extraType: 'harmonies',
    playModes: ['Multijugador', 'Solitario'],
    quickCalc: 'harmonies',
    tagline: 'Paisajes y hábitats',
  },
  {
    id: 'lotr_duel',
    name: 'Lord of the Rings: Duel',
    color: '#8A7336',
    color2: '#54451E',
    icon: 'ring',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 2,
    defaultDuration: 30,
    extraType: 'lotr_duel',
    winModeLabel: 'Condición de victoria',
    winModes: ['Anillo / Monte', '6 Pueblos', '7 Regiones'],
    tagline: 'Duelo por la Tierra Media',
  },
  {
    id: 'lotr_battle',
    name: 'Lord of the Rings: Battle for Middle-earth',
    color: '#4D6B1E',
    color2: '#2A3D0E',
    icon: 'sword',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 4,
    defaultDuration: 45,
    extraType: 'none',
    tagline: 'Derrota villanos y suma puntos',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    color: '#EAB308',
    color2: '#9A6E00',
    icon: 'camel',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 2,
    defaultDuration: 25,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['2–0 Sellos', '2–1 Sellos', 'Por puntos'],
    allowCustomWinMode: true,
    tagline: 'Comercio y sellos del Maharajá',
  },
  {
    id: 'unstable_unicorns',
    name: 'Unstable Unicorns',
    color: '#D946EF',
    color2: '#86198F',
    icon: 'unicorn',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 8,
    defaultDuration: 30,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['7 unicornios', '6 unicornios (6+ jug.)'],
    allowCustomWinMode: true,
    tagline: 'Construye tu establo de unicornios',
  },
  {
    id: 'oceanos_de_papel',
    name: 'Sea Salt & Paper',
    color: '#035388',
    color2: '#083354',
    icon: 'origami',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 4,
    defaultDuration: 25,
    extraType: 'none',
    winModeLabel: 'Objetivo / Victoria',
    winModes: ['40 puntos', '35 puntos', '30 puntos', '4 Sirenas'],
    allowCustomWinMode: true,
    tagline: 'Origami, combos y sirenas',
  },
  {
    id: 'last_bullet',
    name: 'Last Bullet',
    color: '#5C3317',
    color2: '#331A0B',
    icon: 'target',
    scoringType: 'winner_only',
    minPlayers: 1,
    maxPlayers: 5,
    defaultDuration: 20,
    extraType: 'last_bullet',
    playModes: ['PvP', 'Cooperativo', 'Solitario'],
    tagline: 'PvP (2–5 jug.), cooperativo o solitario',
  },
  {
    id: 'splendor_marvel',
    name: 'Splendor Marvel',
    color: '#DC2626',
    color2: '#991B1B',
    icon: 'gauntlet',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 4,
    defaultDuration: 30,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['16+ pts (Guantelete)', 'Desempate Vengadores', 'Desempate cartas'],
    allowCustomWinMode: true,
    tagline: 'Reúne las Gemas del Infinito',
  },
  {
    id: 'azul_duel',
    name: 'Azul Duel',
    color: '#1D2F6F',
    color2: '#111C45',
    icon: 'tile',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 2,
    defaultDuration: 45,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['Por puntos', 'Desempate (bonos)'],
    allowCustomWinMode: true,
    tagline: 'Azulejos y cúpulas para 2',
  },
  {
    id: 'ttr_europa',
    name: 'Ticket to Ride: Europa',
    color: '#C27803',
    color2: '#7D4B00',
    icon: 'train',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 5,
    defaultDuration: 45,
    extraType: 'none',
    quickCalc: 'ttr',
    tagline: 'Rutas ferroviarias por Europa',
  },
  {
    id: 'monopoly_deal',
    name: 'Monopoly Deal',
    color: '#10B981',
    color2: '#047857',
    icon: 'bank',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 5,
    defaultDuration: 15,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['3 propiedades', '4 propiedades', '5 propiedades'],
    allowCustomWinMode: true,
    tagline: 'Sets completos de propiedades',
  },
  {
    id: 'skull_king',
    name: 'Skull King',
    color: '#334155',
    color2: '#0F172A',
    icon: 'skull',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 8,
    defaultDuration: 30,
    extraType: 'none',
    quickCalc: 'skullking',
    tagline: 'Bazas y apuestas · 10 rondas',
  },
  {
    id: 'faraway',
    name: 'Faraway',
    color: '#5EA2F5',
    color2: '#2563EB',
    icon: 'compass',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 6,
    defaultDuration: 25,
    extraType: 'none',
    quickCalc: 'faraway',
    tagline: 'Draft y puntuación inversa',
  },
  {
    id: 'trio',
    name: 'Trío',
    color: '#06B6D4',
    color2: '#0E7490',
    icon: 'trio',
    scoringType: 'winner_only',
    minPlayers: 3,
    maxPlayers: 6,
    defaultDuration: 15,
    extraType: 'trio',
    winModeLabel: 'Cómo se ganó',
    winModes: ['3 Tríos', 'Trío de Sietes', '2 Tríos conectados'],
    allowCustomWinMode: true,
    tagline: 'Deducción de tríos',
  },
  {
    id: 'virus',
    name: 'Virus!',
    color: '#84CC16',
    color2: '#4D7C0F',
    icon: 'virus',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 6,
    defaultDuration: 15,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['4 órganos', '5 órganos', '6 órganos'],
    allowCustomWinMode: true,
    tagline: 'Cuerpo sano sin virus',
  },
  {
    id: 'odin',
    name: 'Odín',
    color: '#4338CA',
    color2: '#281F85',
    icon: 'helmet',
    scoringType: 'points',
    lowestWins: true,
    minPlayers: 2,
    maxPlayers: 6,
    defaultDuration: 15,
    extraType: 'none',
    quickCalc: 'odin',
    tagline: 'Escalada · menos puntos gana',
  },
  {
    id: 'got_five',
    name: 'Got Five!',
    color: '#DB2777',
    color2: '#831843',
    icon: 'hand',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 5,
    defaultDuration: 20,
    extraType: 'none',
    tagline: 'Deducción de 5 números',
  },
  {
    id: 'the_mind',
    name: 'The Mind',
    color: '#0F766E',
    color2: '#115E59',
    icon: 'mind',
    scoringType: 'coop',
    minPlayers: 2,
    maxPlayers: 4,
    defaultDuration: 15,
    extraType: 'themind',
    tagline: 'Cooperativo en silencio',
  },
  {
    id: 'flip_7',
    name: 'Flip 7',
    color: '#9333EA',
    color2: '#581C87',
    icon: 'cards',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 8,
    defaultDuration: 20,
    extraType: 'none',
    winModeLabel: 'Objetivo de puntos',
    winModes: ['200 puntos', '150 puntos', '300 puntos'],
    allowCustomWinMode: true,
    quickCalc: 'flip7',
    tagline: 'Tienta la suerte hasta 200',
  },
  {
    id: 'sleeping_queens',
    name: 'Sleeping Queens',
    color: '#F472B6',
    color2: '#BE185D',
    icon: 'crown',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 5,
    defaultDuration: 20,
    extraType: 'none',
    winModeLabel: 'Forma de victoria',
    winModes: ['50 puntos', '5 reinas', '40 puntos', '4 reinas'],
    allowCustomWinMode: true,
    tagline: 'Despierta reinas y suma puntos',
  },
  {
    id: 'exploding_kittens',
    name: 'Exploding Kittens',
    color: '#F97316',
    color2: '#C2410C',
    icon: 'cat',
    scoringType: 'winner_only',
    minPlayers: 2,
    maxPlayers: 10,
    defaultDuration: 15,
    extraType: 'none',
    tagline: 'Último superviviente',
  },
  {
    id: 'sushi_go',
    name: 'Sushi Go!',
    color: '#FB7185',
    color2: '#BE123C',
    icon: 'sushi',
    scoringType: 'points',
    minPlayers: 2,
    maxPlayers: 5,
    defaultDuration: 15,
    extraType: 'none',
    quickCalc: 'sushigo',
    tagline: 'Draft de 3 rondas',
  },
];

const LEGACY_GAME_COLORS_V1 = {
  wyrmspan: '#9B2C4E',
  terraforming_mars: '#C84B31',
  harmonies: '#2E7D4F',
  lotr_duel: '#B45309',
  lotr_battle: '#3F6212',
  jaipur: '#D97706',
  unstable_unicorns: '#A21CAF',
  oceanos_de_papel: '#0369A1',
  last_bullet: '#991B1B',
  splendor_marvel: '#B91C1C',
  azul_duel: '#1D4ED8',
  ttr_europa: '#D97706',
  monopoly_deal: '#15803D',
  skull_king: '#1E293B',
  faraway: '#0284C7',
  trio: '#0891B2',
  virus: '#16A34A',
  odin: '#4F46E5',
  the_mind: '#0D9488',
  flip_7: '#7C3AED',
  sleeping_queens: '#EC4899',
  exploding_kittens: '#EA580C',
  sushi_go: '#E11D48',
};

function migrateGamePaletteColors(gameList) {
  if (!Array.isArray(gameList)) return false;
  let changed = false;
  gameList.forEach((g) => {
    if (!g || !g.id) return;
    const def = DEFAULT_GAMES.find((d) => d.id === g.id);
    if (!def) return;
    const legacyHex = LEGACY_GAME_COLORS_V1[g.id];
    const curColor = String(g.color || '').trim().toLowerCase();
    if (!curColor || (legacyHex && curColor === legacyHex.toLowerCase())) {
      if (curColor !== def.color.toLowerCase() || String(g.color2 || '').trim().toLowerCase() !== (def.color2 || '').toLowerCase()) {
        g.color = def.color;
        g.color2 = def.color2;
        changed = true;
      }
    }
  });
  return changed;
}

const LEGACY_RULES_NOTES_V1 = {
  wyrmspan: '• Setup: 3 monedas, 1 huevo, 3 cartas de dragón y 3 de cueva (conserva 4 en total pagando el resto en recursos/cartas).\n• 4 rondas; al pasar ya no actúas hasta la siguiente ronda.\n• Desempate: más monedas > más recursos > más cartas en mano.',
  splendor_duel: '• 3 victorias inmediatas: 20 pts, 10 coronas o 10 pts de un mismo color.\n• Rellenar el tablero otorga 1 privilegio al rival.\n• Nunca puedes tener más de 10 gemas al final de tu turno.',
  terraforming_mars: '• Inicio: VT 20 (14 en solitario). En estándar compras cartas iniciales a 3 M€ c/u.\n• Hitos: 8 M€ (máx. 3 entre todos). Recompensas: 8 / 14 / 20 M€.\n• Fin al completar 14% O₂, +8 °C y 9 océanos (+ última fase de vegetación).\n• Desempate: más M€.',
  harmonies: '• 2 jug: quita 2 cartas de cada color si quieres partidas más tensas; bolsa estándar.\n• Fin: bolsa vacía o ≤2 espacios libres en algún tablero (se igualan turnos).\n• Desempate: más cubos de animal colocados.',
  lotr_duel: '• 3 victorias inmediatas: completar el Camino del Anillo, reunir 6 Pueblos distintos o controlar las 7 Regiones.\n• Si termina el Capítulo 3 sin victoria directa, gana quien controle más Regiones.',
  lotr_battle: '• Juego de cartas: derrota villanos para ir acumulando puntos.\n• Al final de la partida gana quien sume más puntos de victoria.',
  jaipur: '• Setup: 5 cartas por jugador; 3 camellos en el centro + 2 cartas del mazo.\n• Los camellos van a tu rebaño y no cuentan para el límite de mano (7).\n• Fin de ronda: 3 pilas vacías o mazo agotado. Al mejor de 3 Sellos.\n• Desempate de ronda: más fichas de bonificación > más fichas de mercancía.',
  unstable_unicorns: '• 2 jugadores: retira las cartas marcadas para 2p y gana el primero en reunir 7 unicornios.\n• 3–5 jugadores: 7 unicornios. 6–8 jugadores: 6 unicornios.\n• Límite de mano: 7 cartas al final de tu turno.',
  oceanos_de_papel: '• Objetivo estándar: 40 pts (2 jug.), 35 pts (3 jug.), 30 pts (4 jug.).\n• 4 Sirenas = victoria inmediata.\n• Puedes anunciar "Basta" o "Última oportunidad" a partir de 7 pts en mesa + mano.',
  last_bullet: '• Admite modo PvP (2–5 jug.), Cooperativo y Solitario.\n• Recuerda seleccionar el modo arriba antes de guardar para que cuente en tus estadísticas PvP o Coop.',
  splendor_marvel: '• Fin de partida al llegar a 16+ pts teniendo al menos 1 carta de cada color y la ficha verde (Gema del Tiempo) para reclamar el Guantelete.\n• Desempate: ficha de Vengadores > menos cartas compradas.',
  azul_duel: '• Duelo para 2 con cúpulas, fichas de bonificación y ronda de 5 fases.\n• Recuerda que losetas sobrantes caen al suelo y restan puntos.\n• Desempate: más fichas de bonificación completadas.',
  ttr_europa: '• Setup: 45 vagones, 3 estaciones, 4 cartas de vagón, 1 billete largo + 3 normales (quédate mínimo 2).\n• Cada estación sin usar vale +4 pts; ruta continua más larga = +10 pts.\n• Desempate: más billetes completados > más estaciones sin usar.',
  monopoly_deal: '• Setup: 5 cartas. En tu turno roba 2 y juega hasta 3 cartas.\n• Límite de mano: 7 cartas al terminar tu turno.\n• Gana el primero con 3 grupos completos de propiedades de distinto color.',
  skull_king: '• 10 rondas (de 1 a 10 cartas). Jerarquía: Sirena > Skull King > Piratas > Sirena.\n• Acertar apuesta: +20/baza (+bonus). Cero acertado: +10×ronda. Fallo: −10 por diferencia.',
  faraway: '• Mano constante de 3 cartas; se juegan 8 regiones de izquierda a derecha.\n• Si juegas un número mayor que el anterior, robas Santuario(s).\n• Puntuación inversa: voltea todas y revela de la 8 a la 1.',
  trio: '• Reparto: 3p = 9 cartas (9 mesa), 4p = 7 (8 mesa), 5p = 6 (6 mesa), 6p = 5 (6 mesa). Ordena tu mano de menor a mayor.\n• Victoria: 3 tríos o el trío de 7s (o 2 tríos conectados en modo picante).',
  virus: '• Mano siempre de 3 cartas. En tu turno juega 1 carta o descarta las que quieras y vuelve a robar hasta 3.\n• Gana el primero con 4 órganos sanos de distinto color (o 5/6 con expansiones).',
  odin: '• 9 cartas por jugador. Juega igual o +1 carta que la jugada anterior superando su valor numérico (mismo color o mismo número).\n• Al acabar una ronda: +1 pt por carta en mano. Fin al llegar a 15+ pts · gana el MENOR puntaje.',
  got_five: '• Deducción rápida de los 5 números secretos.\n• Marca con la corona al jugador que consiga resolver o imponerse primero.',
  the_mind: '• Niveles objetivo: 12 (2 jug.), 10 (3 jug.), 8 (4 jug.).\n• Sin hablar ni hacer gestos: jugad las cartas de menor a mayor.\n• Todos pueden proponer usar un Shuriken levantando la mano.',
  flip_7: '• Si robas un número que ya tienes delante haces Bust (0 pts en la ronda).\n• 7 números distintos = fin instantáneo de ronda y +15 pts extra.\n• El ×2 multiplica solo tus cartas de número antes de sumar modificadores (+2..+10). Objetivo: 200 pts.',
  sleeping_queens: '• 2–3 jugadores: gana quien despierte 5 reinas o sume 50 pts.\n• 4–5 jugadores: 4 reinas o 40 pts.\n• Recuerda que la Reina Rosa y la Reina Gato/Perro tienen restricciones entre sí.',
  exploding_kittens: '• Setup: 7 cartas + 1 Desactivación (Defuse) por jugador; mete (N−1) bombas en el mazo.\n• Puedes jugar tantas cartas de acción como quieras antes de robar 1 carta al final de tu turno.',
  sushi_go: '• 3 rondas. Reparto: 2p = 10 cartas, 3p = 9, 4p = 8, 5p = 7.\n• Wasabi multiplica ×3 el siguiente Nigiri que coloques encima.\n• Pudines se puntúan al final (+6 al mayor; −6 al menor solo con 3+ jugadores).',
};

const DEFAULT_RULES_NOTES = {
  wyrmspan: [
    '• Setup: 3 monedas, 1 huevo, 3 cartas de dragón y 3 de cueva; quédate 4 cartas en total (paga el resto con tus 3 recursos iniciales). Coloca 1 objetivo público por ronda (4 rondas).',
    '• Turno: 1 acción: Excavar cueva (1 moneda + coste), Atraer dragón (1 moneda + recursos/huevos) o Explorar cueva (1 moneda; el 2.º uso cuesta +1 huevo y el 3.º +2 huevos; máx. 3 exploraciones por cueva/ronda).',
    '• Claves: Al pasar ya no actúas hasta la nueva ronda (recibes 6 monedas y 1 huevo cada ronda). Límite al fin de turno: máx. 9 recursos y 9 cartas.',
    '• Fin y Puntos: Tras la 4.ª ronda suma Gremio, dragones, habilidades de fin, objetivos, huevos (1), almacenados (1), solapadas (1), monedas (1) y cada 4 recursos sobrantes (1).',
    '• Desempate: Más monedas > más recursos sobrantes > más cartas en mano.',
  ].join('\n'),
  splendor_duel: [
    '• Setup: Tablero 5×5 con 25 gemas en espiral, 3 filas de cartas (Niveles 1–3), 4 cartas reales y 3 privilegios. El 2.º jugador empieza con 1 privilegio.',
    '• Turno: Opcional antes de actuar: gastar privilegios (1 gema no oro c/u) o rellenar tablero (el rival gana 1 privilegio). Luego 1 acción: tomar hasta 3 gemas en línea sin oro (3 iguales o 2 perlas dan 1 privilegio al rival), comprar carta o reservar 1 carta + 1 oro.',
    '• Claves: Con 3 y 6 coronas eliges 1 carta real. Máximo 3 cartas reservadas y 10 gemas al terminar tu turno.',
    '• Victoria inmediata: Terminar tu turno con 20+ puntos, 10+ coronas o 10+ puntos en cartas de un mismo color.',
  ].join('\n'),
  terraforming_mars: [
    '• Setup: VT en 20 (14 en solitario). Eliges 1 de 2 corporaciones y compras las que quieras de tus 10 cartas iniciales a 3 M€ c/u.',
    '• Generación: 1) Orden de turno. 2) Investigación (robas 4 cartas, compras a 3 M€). 3) Acciones (1–2 por turno hasta que todos pasen). 4) Producción (energía sobrante pasa a calor y cobras VT + producción).',
    '• Claves: Hitos cuestan 8 M€ (+5 pts, máx. 3). Recompensas cuestan 8 / 14 / 20 M€ (+5 al 1.º, +2 al 2.º, máx. 3). 8 plantas = vegetación; 8 calor = +1 temperatura.',
    '• Fin y Desempate: Al completar 14 % O₂, +8 °C y 9 océanos (+ última fase de vegetación). Suma VT, hitos, recompensas, vegetaciones, ciudades (1 pt por vegetación adyacente) y cartas. Desempate: más M€.',
  ].join('\n'),
  harmonies: [
    '• Setup: Tablero en Cara A (Río) o Cara B (Islas), 3 fichas en cada espacio central y 5 cartas de animal visibles.',
    '• Turno: 1) Obligatorio: coge 3 fichas de un espacio y colócalas respetando alturas (Árbol: 0–2 marrones + verde; Montaña: 1–3 grises; Edificio: base gris/marrón/roja + roja). 2) Opcional: coger 1 carta de animal (máx. 4 activas) y colocar cubos en patrones completados.',
    '• Puntuación: Árboles (1/3/7), Montañas (1/3/7 solo si tocan otra montaña), Campos (5 pts por grupo de 2+ amarillas), Edificios (5 pts si tocan 3+ colores), Agua (Río: 2/5/8/11/15/+4; Islas: 5 c/u), Animales y Espíritu.',
    '• Fin y Desempate: Bolsa vacía o alguien queda con ≤2 espacios libres (se igualan turnos). Desempate: más cubos de animal colocados.',
  ].join('\n'),
  lotr_duel: [
    '• Setup: Comunidad vs Sauron. Prepara la Carrera del Anillo, las 7 Regiones con unidades iniciales, monedas iniciales, 3 losetas de Lugar y la pirámide del Capítulo 1.',
    '• Turno: Toma una carta descubierta de la pirámide (cómprala pagando recursos/monedas o descártala para ganar monedas según el capítulo) o adquiere una loseta de Lugar disponible.',
    '• Claves: Al reunir símbolos de una misma raza desbloqueas fichas de Alianza. En regiones con unidades de ambos bandos, estas se eliminan 1 a 1.',
    '• Victoria inmediata: Completar la Carrera del Anillo, reunir 6 Pueblos distintos o controlar/tener presencia en las 7 Regiones.',
    '• Fin del Capítulo 3: Si nadie logra victoria directa, gana quien tenga presencia en más Regiones.',
  ].join('\n'),
  lotr_battle: [
    '• Setup: Prepara el mazo de aventura y villanos y reparte la mano inicial de héroes y cartas de acción a cada jugador.',
    '• Turno: Juega cartas de tu mano para infligir daño a los villanos activos, activar efectos de apoyo o preparar combos de ataque.',
    '• Claves: Quien asesta el golpe definitivo captura la carta de villano y suma sus puntos de victoria; mide bien cuándo atacar para no dejar el remate servido al rival.',
    '• Fin y Victoria: Al derrotar al villano final o agotarse el mazo de enemigos, cada jugador suma los puntos de sus villanos derrotados. Gana quien obtenga más puntos.',
  ].join('\n'),
  jaipur: [
    '• Setup: 3 camellos + 2 cartas del mazo en el mercado central; 5 cartas por jugador (los camellos bajan a tu rebaño). Ordena las pilas de mercancía de mayor a menor y las bonificaciones (3, 4 y 5 cartas).',
    '• Turno: Toma cartas (1 mercancía, todos los camellos del mercado o intercambia 2+ cartas sin pasar de 7 en mano) O vende 1 tipo de mercancía (oro, plata y diamantes exigen mínimo 2 cartas) cobrando sus fichas + bono si vendes 3, 4 o 5.',
    '• Claves: Los camellos del rebaño NO cuentan para el límite de 7 cartas en mano. Mayor rebaño al final de la ronda suma la ficha de +5 pts.',
    '• Fin y Desempate: Ronda acaba con 3 pilas vacías o mazo agotado. Al mejor de 3 Sellos (2 rondas). Desempate de ronda: más fichas de bonificación > más fichas de mercancía.',
  ].join('\n'),
  unstable_unicorns: [
    '• Setup: En 2 jugadores retira las cartas marcadas para "2P". Todos empiezan con 1 Unicornio Bebé en su Establo y 5 cartas en mano.',
    '• Turno (4 fases): 1) Inicio de turno (efectos de tu Establo). 2) Roba 1 carta. 3) Acción: juega 1 carta de tu mano O roba otra carta. 4) Fin de turno: descarta hasta tener máximo 7 cartas.',
    '• Claves: Las cartas "Relincho" (Neigh) se juegan en cualquier momento para anular una carta rival (pueden encadenarse). Las Desventajas suelen jugarse en Establos enemigos.',
    '• Victoria: Primer jugador con 7 unicornios en su Establo (2–5 jug.) o 6 unicornios (6–8 jug.). Si se acaba el mazo gana quien tenga más unicornios.',
  ].join('\n'),
  oceanos_de_papel: [
    '• Setup: Baraja el mazo y voltea 2 cartas formando las 2 pilas de descarte; todos empiezan sin cartas en mano.',
    '• Turno: 1) Roba 2 cartas del mazo (te quedas 1 y descartas 1 en cualquier pila) O coge la superior de un descarte. 2) Opcional: baja parejas dúo (Cangrejos, Barcos, Peces o Tiburón+Nadador) para activar su poder (+1 pt c/u).',
    '• Fin de ronda: Con 7+ puntos (mano + mesa) puedes decir "STOP" (todos puntúan ya) o "ÚLTIMA OPORTUNIDAD" (los rivales juegan 1 turno; si sigues liderando cobras tus puntos + bonus de tu color mayoritario y ellos solo su bonus; si te superan, tú solo cobras tu bonus).',
    '• Victoria: Suma parejas, colecciones, multiplicadores y Sirenas (1 pt por carta de tu color mayoritario por cada Sirena; 4 Sirenas = victoria instantánea). Meta: 40 pts (2p), 35 pts (3p), 30 pts (4p).',
  ].join('\n'),
  last_bullet: [
    '• Modos: Admite PvP (2–5 jugadores), Cooperativo y Solitario; selecciona el modo arriba antes de guardar para separarlo en tus estadísticas.',
    '• Turno: Gestiona tus disparos, defensas, habilidades y recargas vigilando siempre las balas restantes del cargador para no quedar vendido.',
    '• Claves: Coordina el orden de acciones y guarda tus recursos defensivos para los turnos críticos de impacto.',
    '• Victoria: En PvP gana el último jugador en pie; en Cooperativo/Solitario ganáis al completar el objetivo antes de quedaros sin vidas ni munición.',
  ].join('\n'),
  splendor_marvel: [
    '• Setup: 4 cartas de cada nivel (1–3), losetas de Lugar según jugadores, loseta de Vengadores Unidos (+3 pts) y Guantelete. Fichas: 4 por color (2p), 5 (3p) o 7 (4p), más 5 grises y 1 verde (Gema del Tiempo).',
    '• Turno (1 acción): Tomar 3 fichas distintas, tomar 2 del mismo color (si quedan 4+), reservar 1 carta + 1 ficha gris (máx. 3 reservadas) o reclutar 1 personaje pagando con fichas y descuentos permanentes.',
    '• Claves: Máximo 10 fichas al acabar tu turno. Con 3+ iconos de Vengadores tomas la loseta (+3 pts), pero puede robártela quien te supere. Solo reclutar una carta de Nivel 3 otorga la ficha verde.',
    '• Fin y Desempate: Quien llegue a 16+ pts teniendo 1 carta de cada color y la ficha verde reclama el Guantelete (se igualan turnos). Desempate: loseta de Vengadores > menos cartas reclutadas.',
  ].join('\n'),
  azul_duel: [
    '• Setup: Tablero personal de cúpula, fichas de bonificación disponibles y pilas de discos/ofertas preparadas para 5 rondas.',
    '• Ronda: 1) Colocación de losetas de cúpula (boca arriba o apiladas para controlar la oferta). 2) Draft de fichas de color hacia tus líneas de patrón (1 color por línea; las sobrantes caen al suelo y restan puntos).',
    '• Claves: Al llenar una fila trasladas 1 ficha a tu cúpula puntuando por adyacencias verticales y horizontales. Completa los objetivos de tus fichas de bonificación para rematar la puntuación.',
    '• Fin y Desempate: Termina tras la 5.ª ronda sumando bonificaciones finales. Desempate: más fichas de bonificación completadas.',
  ].join('\n'),
  ttr_europa: [
    '• Setup: 45 vagones, 3 estaciones, 4 cartas de vagón, 1 billete largo y 3 normales (quédate mínimo 2; puedes descartar el largo). 5 cartas de vagón boca arriba.',
    '• Turno (1 acción): Robar 2 cartas (1 locomotora visible cuenta como tus 2 robos; 3 locomotoras visibles renuevan el mercado), cubrir 1 recorrido (en túneles revela 3 cartas del mazo y paga 1 extra por coincidencia), robar 3 billetes (quédate ≥1) o poner 1 estación (1/2/3 cartas iguales).',
    '• Claves: En 2–3 jugadores solo se usa una vía en rutas dobles. Cada estación sin usar vale +4 pts.',
    '• Fin y Desempate: Al quedar ≤2 vagones, todos juegan 1 último turno. Suma recorridos (1/2/4/7/15/21), billetes (+/−), estaciones (+4) y Expreso Europeo (+10). Desempate: más billetes completados > más estaciones sin usar.',
  ].join('\n'),
  monopoly_deal: [
    '• Setup: Reparte 5 cartas a cada jugador y deja el mazo en el centro.',
    '• Turno: Roba 2 cartas (5 si empiezas el turno sin cartas) y juega hasta 3 cartas en cualquier orden: dinero/acciones a tu Banco, propiedades a tu mesa o Acciones al centro.',
    '• Claves: Máximo 7 cartas en mano al terminar el turno. Nunca se devuelve cambio al pagar deudas y las cartas del Banco no vuelven a la mano. Reorganizar comodines en tu turno es gratis. "Di que no" anula cualquier acción contra ti.',
    '• Victoria: Gana al instante el primer jugador con 3 grupos completos de propiedades de colores distintos.',
  ].join('\n'),
  skull_king: [
    '• Setup: 10 rondas; en la ronda N se reparten N cartas a cada jugador.',
    '• Ronda: 1) Apuesta simultánea de cuántas bazas ganarás (0 a N). 2) Juego de bazas siguiendo el palo inicial (verde, morado, amarillo o negro/triunfo); las cartas especiales pueden jugarse en cualquier momento.',
    '• Jerarquía: Escape (pierde) < Colores < Negro (triunfo) < Piratas/Sirenas/Skull King. Triángulo: Pirata vence a Sirena, Skull King vence a Pirata y Sirena vence al Skull King (+40 bonus).',
    '• Puntuación: Acertar (>0): +20/baza + bonus (14 color +10, 14 negro +20, capturas +20/+30/+40). Fallar (>0): −10 por diferencia (sin bonus). Apostar 0: +10×ronda si aciertas, −10×ronda si fallas.',
  ].join('\n'),
  faraway: [
    '• Setup: 3 cartas de Región en mano por jugador y (N+1) cartas de Región visibles en el centro.',
    '• Ronda (8 rondas): 1) Todos eligen y revelan a la vez 1 Región y la añaden a la derecha de su fila. 2) En orden ascendente del número jugado, cada uno roba 1 nueva Región del centro (siempre 3 en mano).',
    '• Santuarios: Si tu número jugado es MAYOR que el de tu carta anterior, robas (1 + tus iconos de mapa) cartas de Santuario y te quedas 1 boca arriba.',
    '• Puntuación inversa: Al acabar las 8 rondas, voltea tus 8 Regiones y revélalas de derecha a izquierda (de la 8 a la 1); cada carta solo cuenta símbolos visibles en ese momento (ya reveladas + Santuarios). Desempate: menor suma de números de tus 8 Regiones.',
  ].join('\n'),
  trio: [
    '• Setup: 3p = 9 mano / 9 mesa; 4p = 7 / 8; 5p = 6 / 6; 6p = 5 / 6. Ordena tu mano de menor a mayor sin cambiar el orden.',
    '• Turno: Revela cartas de una en una pidiendo a cualquier jugador (o a ti mismo) su carta MÁS BAJA o MÁS ALTA, o volteando 1 de la mesa.',
    '• Claves: Si las cartas reveladas coinciden en número puedes seguir hasta juntar 3 iguales y ganar el trío. En cuanto aparezca un número diferente, termina tu turno y las cartas vuelven a su sitio.',
    '• Victoria: Modo Simple: 3 tríos O el trío de 7s. Modo Picante: 2 tríos conectados (números pequeños de la esquina) O el trío de 7s.',
  ].join('\n'),
  virus: [
    '• Setup: Reparte 3 cartas a cada jugador y deja el mazo en el centro.',
    '• Turno: Juega 1 carta (órgano propio sin repetir color, virus a un rival, medicina propia o Tratamiento) O descarta las cartas que quieras de tu mano. Al acabar, roba siempre hasta tener 3 cartas.',
    '• Claves: 1 virus infecta; 2.º virus extirpa el órgano. 1 medicina cura un virus o vacuna un órgano sano; 2.ª medicina lo INMUNIZA para siempre. Los comodines valen por cualquier color.',
    '• Victoria: Gana al instante quien consiga 4 órganos sanos de distinto color (5 o 6 con expansiones).',
  ].join('\n'),
  odin: [
    '• Setup: Reparte 9 cartas a cada jugador; las sobrantes no entran en la ronda.',
    '• Turno: Supera la jugada en mesa o pasa. Debes jugar el MISMO número de cartas o exactamente 1 carta MÁS; si juegas 2+, deben compartir color O número (se ordenan de mayor a menor para leer el número, ej. 7 y 4 = 74).',
    '• Claves: Tras superar una jugada, te llevas OBLIGATORIAMENTE 1 carta de la jugada anterior a tu mano (salvo si acabas de vaciar tu mano y ganar la ronda). Si todos pasan, quien jugó último limpia la mesa y sale libre.',
    '• Fin y Victoria: Al vaciar su mano alguien, el resto suma +1 pt por carta restante. Cuando alguien alcanza 15+ pts acaba la partida y gana el MENOR puntaje.',
  ].join('\n'),
  got_five: [
    '• Setup: Prepara los 5 números secretos y los soportes/cartas de deducción para cada jugador.',
    '• Turno: Formula preguntas o jugadas de descarte para acotar las posiciones y valores de los 5 números ocultos.',
    '• Claves: Contrasta las pistas abiertas con los extremos ya descartados antes de lanzar una adivinación definitiva.',
    '• Victoria: Gana el primer jugador que consiga deducir los 5 números o completar el objetivo de la partida.',
  ].join('\n'),
  the_mind: [
    '• Setup: Vidas iniciales = n.º de jugadores y 1 Shuriken. Niveles objetivo: 12 (2p), 10 (3p), 8 (4p). En el nivel N se reparten N cartas (1–100) por jugador.',
    '• Ronda: Prohibido hablar, gesticular o hacer señas. Jugad las cartas al centro en orden estrictamente ascendente según vuestra intuición del tiempo.',
    '• Claves: Si alguien tiene una carta menor que la jugada, grita "¡Alto!", perdéis 1 vida y se descartan todas las cartas inferiores antes de seguir. Si todos levantan la mano usáis 1 Shuriken (cada uno descarta su carta más baja boca arriba).',
    '• Recompensas y Fin: Al superar ciertos niveles recuperáis vidas (nv. 3, 6, 9) o Shurikens (nv. 2, 5, 8). Ganáis al completar el último nivel; perdéis con 0 vidas.',
  ].join('\n'),
  flip_7: [
    '• Setup: Mazo con copias igual a su valor (doce 12s, once 11s… hasta un 1 y un 0), modificadores (+2 a +10, ×2) y cartas de acción.',
    '• Turno: Por orden, cada jugador activo elige "Pedir" (roba carta) o "Plantarse" (asegura sus puntos y sale de la ronda).',
    '• Claves: Si robas un número que ya tienes delante haces BUST (0 pts en la ronda), salvo si tienes Segunda Oportunidad. Acciones: Congelar (planta a un jugador), Roba 3 (fuerza 3 robos), Segunda Oportunidad (salva 1 duplicado).',
    '• Puntuación y Fin: 7 números distintos = fin inmediato de ronda y +15 pts extra. El ×2 multiplica solo tus cartas de número antes de sumar modificadores. Al superar 200 pts al fin de una ronda, gana quien tenga más puntos.',
  ].join('\n'),
  sleeping_queens: [
    '• Setup: 12 Reinas boca abajo en el centro y 5 cartas en mano por jugador.',
    '• Turno (1 acción y robas hasta 5 cartas): Rey (despiertas 1 Reina), Caballero (robas Reina rival salvo Dragón), Poción (duermes Reina rival salvo Varita), Bufón (revelas 1 carta: acción = repites turno; número = cuentas desde ti para despertar Reina), o descartar números (1 carta, pareja igual o suma válida ej. 2+3=5).',
    '• Claves: La Reina Rosa despierta otra Reina gratis. No puedes tener a la vez la Reina Gato y la Reina Perro (si sale la segunda, vuelve boca abajo).',
    '• Victoria: 2–3 jugadores: 5 Reinas o 50 pts. 4–5 jugadores: 4 Reinas o 40 pts.',
  ].join('\n'),
  exploding_kittens: [
    '• Setup: Retira bombas y Defuse; reparte 7 cartas + 1 Defuse a cada jugador. Mete (N−1) Exploding Kittens y los Defuse sobrantes en el mazo y baraja.',
    '• Turno: 1) Juega tantas cartas de acción como quieras (o ninguna). 2) Roba 1 carta del mazo para cerrar tu turno.',
    '• Claves: Si robas bomba sin Defuse quedas eliminado; con Defuse la escondes donde quieras del mazo. 2 cartas iguales roban 1 carta al azar a un rival; 3 iguales piden una carta concreta. "Nope" anula casi cualquier carta salvo Defuse y bombas.',
    '• Victoria: Gana el último superviviente en mesa.',
  ].join('\n'),
  sushi_go: [
    '• Setup: 3 rondas. Cartas iniciales: 10 (2p), 9 (3p), 8 (4p) o 7 (5p).',
    '• Ronda: Todos eligen en secreto 1 carta, la revelan a la vez y pasan el resto de la mano a la izquierda hasta vaciarlas.',
    '• Puntuación: Tempura (pareja = 5), Sashimi (trío = 10), Gyoza (1/3/6/10/15), Nigiris (1/2/3; sobre Wasabi previo ×3 = 3/6/9), Maki (+6 al 1.º, +3 al 2.º; empates dividen redondeando abajo). Los Palillos permiten bajar 2 cartas en un turno posterior.',
    '• Pudines y Desempate: Se guardan hasta terminar la 3.ª ronda (+6 al que tenga más; −6 al que tenga menos solo con 3+ jugadores). Desempate: más Pudines.',
  ].join('\n'),
};

const TFM_CORPS = [
  'Credicor', 'Ecoline', 'Helion', 'Interplanetary Cin.', 'Inventrix',
  'Mining Guild', 'Phobolog', 'Tharsis Republic', 'Thorgate',
  'UNMI', 'Saturn Systems', 'Teractor', 'Principiante', 'Otra'
];

const PALETTE_CHOICES = [
  { color: '#2E7D4F', color2: '#1B5E3A', label: 'Bosque' },
  { color: '#2563EB', color2: '#1E3A8A', label: 'Zafiro' },
  { color: '#C84B31', color2: '#8B2C18', label: 'Marte' },
  { color: '#7C3AED', color2: '#4C1D95', label: 'Amatista' },
  { color: '#A21CAF', color2: '#581C87', label: 'Orquídea' },
  { color: '#D97706', color2: '#9A4A06', label: 'Ámbar' },
  { color: '#E11D48', color2: '#9F1239', label: 'Carmesí' },
  { color: '#0D9488', color2: '#115E59', label: 'Turquesa' },
  { color: '#3F6212', color2: '#1A2E05', label: 'Oliva' },
  { color: '#475569', color2: '#1E293B', label: 'Pizarra' },
];

const ICON_CHOICES = ['dragon', 'gem', 'planet', 'hex', 'ring', 'sword', 'camel', 'origami', 'target', 'gauntlet', 'tile', 'unicorn', 'train', 'bank', 'skull', 'compass', 'trio', 'virus', 'helmet', 'hand', 'mind', 'cards', 'crown', 'cat', 'sushi', 'scales', 'meeple', 'dice'];

// =========================================================================
// 4. ESTADO GLOBAL DE LA APP
// =========================================================================
let games = [];
let deletedGameIds = [];
let matchHistory = [];
let frequentPlayers = [];
let playerProfiles = {}; // { [nameLower]: { name, color, initials } }
let pendingDeletes = [];

const PLAYER_AVATAR_COLORS = [
  '#227554', '#D48A17', '#2563EB', '#D04E36', '#7C3AED',
  '#0D9488', '#E11D48', '#0284C7', '#A21CAF', '#65A30D',
  '#EA580C', '#475569'
];

let matchTimer = {
  running: false,
  startedAtMs: null,
  elapsedMs: 0,
  gameId: '',
};
let timerIntervalId = null;

let uiState = {
  activeTab: 'log', // 'log' | 'history' | 'stats' | 'shelf'
  historyProfileKey: 'all',
  historyFilterGame: 'all',
  historySearch: '',
  historyLimit: 30,
  expandedHistoryLedgerId: null,
  statsFilterGame: 'all',
  statsSubTab: 'overview', // 'overview' | 'ranking' | 'badges'
  statsDonutMode: 'plays', // 'plays' | 'hours'
  statsRecentPointsMode: 'recent', // 'recent' | 'top'
  statsPlayerMode: 'all', // 'all' | 'single' | 'vs'
  statsPlayerA: '',
  statsPlayerB: '',
  logGameSearch: '',
  logSearchOpen: false,
  logGameMode: 'recent', // 'recent' | 'favorites' | 'all'
  shelfSearch: '',
  shelfSort: 'default', // 'default' | 'favorites' | 'rating' | 'most_played' | 'az' | 'calc'
  shelfProfileKey: 'all',
  lastPersonProfileKey: 'sebas',
  openCorpPickerIdx: -1,
  timerOpen: false,
  expandedMatchId: null,
  heatmapView: 'month', // 'month' | 'year'
  heatmapMonthKey: '', // 'YYYY-MM'
  heatmapScope: '12m', // '12m' | 'YYYY'
  heatmapSelectedDate: '',
  dustyTab: 'dusty', // 'dusty' | 'unplayed'
};

let tableToolsState = {
  activeTab: 'picker', // 'picker' | 'starter' | 'round' | 'turn'
  // Decisor "¿A qué jugar?"
  pickPlayers: 0, // 0 = cualquiera
  pickMaxTime: 0, // 0 = cualquiera
  pickType: 'all', // 'all' | 'competitive' | 'coop' | 'solo'
  pickOnlyFavs: false,
  pickDustyFirst: false,
  pickedGameId: null,
  isRollingGame: false,
  // Sorteo "¿Quién empieza?"
  starterCustomPlayers: [],
  starterSelected: [],
  starterWinner: '',
  starterOrder: [],
  isRollingStarter: false,
  // Contador de rondas y turnos
  roundNum: 1,
  turnIdx: 0,
  // Temporizador de turno
  turnPresetSec: 60,
  turnRemainingSec: 60,
  turnRunning: false,
  turnSound: true,
};
let turnTimerIntervalId = null;

let activeChartInstances = [];

function destroyActiveCharts() {
  activeChartInstances.forEach((ch) => {
    try { ch.destroy(); } catch (e) {}
  });
  activeChartInstances = [];
}

let syncState = {
  mode: 'local', // 'connecting' | 'sheets' | 'local'
  connected: false,
  apiUrl: '',
  pin: '',
  errorMessage: '',
  isSaving: false,
  isLoading: false,
  lastSyncedAt: null,
  catalogSupported: null, // null | true | false
  catalogDirty: false,
  catalogUpdatedAtMs: 0,
  catalogSyncedAtMs: 0,
  swStatus: 'checking', // 'checking' | 'active' | 'unsupported' | 'local_file' | 'error'
  serverVersion: 0,
  lastSwCheckAt: 0,
  updateAvailable: false,
};
let swRegistrationRef = null;
let swUpdateBannerDismissed = false;
let catalogPushTimerId = null;

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function createEmptyDraft(gameId = 'harmonies') {
  const g = games.find((x) => x.id === gameId) || DEFAULT_GAMES[0];
  const today = todayISO();
  return {
    editingMatchId: null,
    editingCreatedAtMs: null,
    editingOriginalSource: null,
    gameId: g.id,
    date: today,
    dateSetOn: today,
    manualDateOverride: false,
    duration: g.defaultDuration || 30,
    notes: '',
    // Extras por juego
    harmoniesSide: 'A',
    harmoniesSpirit: false,
    harmoniesBreakdown: null,
    scoreBreakdown: null,
    calcSnapshot: null,
    splendorWinType: '20 puntos',
    tfmMap: 'Tharsis',
    tfmGenerations: 10,
    wyrmspanSolo: false,
    lotrWinType: 'Anillo / Monte',
    trioWinType: '3 Tríos',
    winMode: '',
    customWinMode: '',
    playMode: '',
    coopWon: true,
    coopLevel: 8,
    // Jugadores
    players: [
      { name: '', score: '', winner: false, tag: '' },
      { name: '', score: '', winner: false, tag: '' },
    ],
    manualWinnerOverride: false,
  };
}

let draft = createEmptyDraft('harmonies');

function syncDraftDateToToday({ force = false } = {}) {
  if (draft.editingMatchId && !force) return false;
  const today = todayISO();
  const shouldReset = force || !draft.manualDateOverride || draft.dateSetOn !== today || !draft.date;
  if (!shouldReset) return false;
  const changed = draft.date !== today || draft.manualDateOverride || draft.dateSetOn !== today;
  draft.date = today;
  draft.dateSetOn = today;
  draft.manualDateOverride = false;
  if (changed) saveDraftLocal();
  return changed;
}

function getEffectivePlayMode(game) {
  if (!game || !Array.isArray(game.playModes) || game.playModes.length === 0) return '';
  if (draft.playMode && game.playModes.includes(draft.playMode)) return draft.playMode;
  return game.playModes[0];
}

function isDraftSoloMode(game) {
  const pm = getEffectivePlayMode(game).toLowerCase();
  return pm.includes('solitario') || pm.includes('automa');
}

function getEffectiveWinMode(game) {
  if (!game || !Array.isArray(game.winModes) || game.winModes.length === 0) return '';
  if (draft.winMode === '__custom__' && game.allowCustomWinMode) return '__custom__';
  if (draft.winMode && game.winModes.includes(draft.winMode)) return draft.winMode;
  return game.winModes[0];
}

function getResolvedWinModeText(game) {
  const wm = getEffectiveWinMode(game);
  if (!wm) return '';
  if (wm === '__custom__') return (draft.customWinMode || '').trim() || game.winModes[0];
  return wm;
}

function getEffectiveScoringType(game, playMode = null) {
  if (!game) return 'points';
  if (game.extraType === 'last_bullet') {
    const pm = String(playMode ?? getEffectivePlayMode(game)).toLowerCase();
    if (pm.includes('coop') || pm.includes('solitario') || pm.includes('automa')) return 'coop';
    return 'winner_only';
  }
  return game.scoringType || 'points';
}

function getMatchScoringType(match) {
  if (match && match.scoringType) return match.scoringType;
  const g = getGameById(match?.gameId);
  if (g.extraType === 'last_bullet') {
    const pm = String(match?.meta?.playMode || '').toLowerCase();
    if (pm.includes('pvp')) return 'winner_only';
    if (pm.includes('coop') || pm.includes('solitario') || match?.meta?.coopWon !== undefined) return 'coop';
    return 'winner_only';
  }
  return g.scoringType || 'points';
}

// Estado temporal para los marcadores en vivo
let flip7State = null;
let sushiState = null;
let skullKingState = null;
let farawayState = null;
let odinState = null;
let harmoniesState = null;
let wyrmspanState = null;
let tfmState = null;
let ttrState = null;

function resetAllCalculators() {
  flip7State = null;
  sushiState = null;
  skullKingState = null;
  farawayState = null;
  odinState = null;
  harmoniesState = null;
  wyrmspanState = null;
  tfmState = null;
  ttrState = null;
}

function hydrateCalculatorFromDraft(kind) {
  if (!kind) return false;
  const snap = draft.calcSnapshot;
  const clone = (obj) => JSON.parse(JSON.stringify(obj));

  // 1) Precarga exacta 1:1 desde calcSnapshot (todos los 9 marcadores)
  if (snap && snap.kind === kind && snap.state) {
    const st = clone(snap.state);
    if (kind === 'flip7') { flip7State = st; return true; }
    if (kind === 'sushigo') { sushiState = st; return true; }
    if (kind === 'skullking') { skullKingState = st; return true; }
    if (kind === 'faraway') { farawayState = st; return true; }
    if (kind === 'odin') { odinState = st; return true; }
    if (kind === 'harmonies') { harmoniesState = st; return true; }
    if (kind === 'wyrmspan') { wyrmspanState = st; return true; }
    if (kind === 'tfm') { tfmState = st; return true; }
    if (kind === 'ttr') { ttrState = st; return true; }
  }

  // 2) Reconstrucción de respaldo desde desglose legado (partidas previas sin calcSnapshot)
  const bd = (kind === 'harmonies' && Array.isArray(draft.harmoniesBreakdown) && draft.harmoniesBreakdown.length > 0)
    ? draft.harmoniesBreakdown
    : (Array.isArray(draft.scoreBreakdown) && draft.scoreBreakdown.length > 0 ? draft.scoreBreakdown : null);
  if (!bd) return false;

  const findItem = (b, label) => {
    const it = Array.isArray(b.items) ? b.items.find((x) => x.l === label) : null;
    return it ? (Number(it.v) || 0) : 0;
  };

  if (kind === 'wyrmspan' && bd[0]?.kind === 'wyrmspan') {
    wyrmspanState = {
      activeIdx: 0,
      players: bd.map((b, i) => {
        const tieM = String(b.tieNote || '').match(/(\d+)\s*mon.*?(\d+)\s*rec.*?(\d+)\s*cartas/i);
        return {
          name: draft.players[i]?.name?.trim() || b.jugador || `Jugador ${i + 1}`,
          guild: findItem(b, 'Gremio'),
          dragons: findItem(b, 'Dragones'),
          endAbilities: findItem(b, 'Fin partida'),
          objectives: findItem(b, 'Objetivos'),
          eggs: findItem(b, 'Huevos'),
          cached: findItem(b, 'Almacenados'),
          tucked: findItem(b, 'Solapadas'),
          coins: tieM ? Number(tieM[1]) : findItem(b, 'Monedas'),
          remResources: tieM ? Number(tieM[2]) : findItem(b, 'Rec. (÷4)') * 4,
          remCards: tieM ? Number(tieM[3]) : 0,
        };
      }),
    };
    return true;
  }

  if (kind === 'tfm' && bd[0]?.kind === 'tfm') {
    tfmState = {
      activeIdx: 0,
      players: bd.map((b, i) => {
        const awPts = findItem(b, 'Recompensas');
        const aw1 = Math.floor(awPts / 5);
        const aw2 = Math.floor((awPts % 5) / 2);
        const mcM = String(b.tieNote || '').match(/(\d+)/);
        return {
          name: draft.players[i]?.name?.trim() || b.jugador || `Jugador ${i + 1}`,
          tr: findItem(b, 'VT'),
          milestones: Math.min(3, Math.round(findItem(b, 'Hitos') / 5)),
          awards1st: aw1,
          awards2nd: aw2,
          greeneries: findItem(b, 'Vegetación'),
          cities: findItem(b, 'Ciudades'),
          cards: findItem(b, 'Cartas'),
          mc: mcM ? Number(mcM[1]) : 0,
        };
      }),
    };
    return true;
  }

  if (kind === 'harmonies' && bd[0] && bd[0].arboles !== undefined) {
    const side = draft.harmoniesSide || 'A';
    harmoniesState = {
      side,
      spiritEnabled: Boolean(draft.harmoniesSpirit),
      activeIdx: 0,
      players: bd.map((b, i) => ({
        name: draft.players[i]?.name?.trim() || b.jugador || `Jugador ${i + 1}`,
        t1: Number(b.arboles) || 0, t2: 0, t3: 0,
        m1: Number(b.montanas) || 0, m2: 0, m3: 0,
        fields: Math.round((Number(b.campos) || 0) / 5),
        buildings: Math.round((Number(b.edificios) || 0) / 5),
        riverLen: side === 'A' ? ([0, 2, 3, 4, 5, 6].find((l) => calcHarmoniesRiverPts(l) === (Number(b.agua) || 0)) || 0) : 0,
        islands: side === 'B' ? Math.round((Number(b.agua) || 0) / 5) : 0,
        animalCards: [],
        animalAdj: Number(b.animales) || 0,
        spirit: Number(b.espiritu) || 0,
        cubes: Number(b.cubos) || 0,
      })),
    };
    return true;
  }

  return false;
}

// =========================================================================
// 5. PWA ICONO DINÁMICO + MANIFEST + TEMA OSCURO
// =========================================================================
function setupPwaAssets() {
  // En HTTPS / GitHub Pages usamos manifest.json e iconos PNG estáticos reales para iOS/Android
  if (location.protocol !== 'file:') return;
  try {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Fondo degradado esmeralda profundo elegante
    const bg = ctx.createLinearGradient(0, 0, size, size);
    bg.addColorStop(0, '#142620');
    bg.addColorStop(0.55, '#1F4236');
    bg.addColorStop(1, '#0D1B17');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);

    // Brillo cálido
    const glow = ctx.createRadialGradient(size * 0.5, size * 0.45, 24, size * 0.5, size * 0.5, 230);
    glow.addColorStop(0, 'rgba(217, 145, 30, 0.28)');
    glow.addColorStop(1, 'rgba(217, 145, 30, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, size, size);

    // Hexágono principal estilo loseta de mesa
    ctx.beginPath();
    const cx = 256, cy = 256, r = 165;
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(246, 243, 236, 0.10)';
    ctx.fill();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#F6F3EC';
    ctx.stroke();

    // Tres fichas de colores (esmeralda, oro, coral)
    const dots = [
      { x: 204, y: 215, c: '#FBBF24' },
      { x: 308, y: 215, c: '#34D399' },
      { x: 256, y: 308, c: '#FB7185' },
    ];
    dots.forEach((d) => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, 38, 0, Math.PI * 2);
      ctx.fillStyle = d.c;
      ctx.fill();
      ctx.lineWidth = 7;
      ctx.strokeStyle = '#F6F3EC';
      ctx.stroke();
    });

    const pngUrl = canvas.toDataURL('image/png');
    const apple = document.getElementById('dynamic-apple-icon');
    const fav = document.getElementById('dynamic-favicon');
    if (apple) apple.href = pngUrl;
    if (fav) fav.href = pngUrl;

    const manifest = {
      name: 'Ludoteca — Diario de Partidas',
      short_name: 'Ludoteca',
      description: 'Registro de partidas, estadísticas y marcadores rápidos',
      start_url: window.location.pathname || './',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#F6F3EC',
      theme_color: '#142620',
      icons: [{ src: pngUrl, sizes: '512x512', type: 'image/png', purpose: 'any maskable' }],
    };
    const blob = new Blob([JSON.stringify(manifest)], { type: 'application/manifest+json' });
    const link = document.getElementById('dynamic-manifest');
    if (link) link.href = URL.createObjectURL(blob);
  } catch (e) {
    console.warn('PWA assets skip:', e);
  }
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');
  if (sun && moon) {
    sun.classList.toggle('hidden', !isDark);
    moon.classList.toggle('hidden', isDark);
  }
  const meta = document.getElementById('meta-theme-color');
  if (meta) meta.content = isDark ? '#060E0B' : '#081410';
  try { localStorage.setItem(KEYS.THEME, isDark ? 'dark' : 'light'); } catch (e) {}
  if (typeof uiState !== 'undefined' && uiState.activeTab === 'stats' && document.getElementById('view-stats')) {
    renderStatsTab();
  }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(KEYS.THEME); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    applyTheme('light');
  }
}

// =========================================================================
// 6. UTILIDADES E ICONOS SVG DE JUEGOS
// =========================================================================
function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getGameById(id) {
  return games.find((g) => g.id === id) || {
    id: id || 'custom',
    name: id || 'Juego',
    color: '#475569',
    color2: '#1E293B',
    icon: 'dice',
    scoringType: 'points',
    extraType: 'none',
    defaultDuration: 30,
  };
}

const COMPACT_GAME_NAMES = {
  lotr_duel: 'LOTR: Duel',
  lotr_battle: 'LOTR: Battle',
  ttr_europa: 'Ticket to Ride',
};

function getCompactGameName(g) {
  if (!g) return '';
  if (g.shortName && String(g.shortName).trim()) return String(g.shortName).trim();
  if (COMPACT_GAME_NAMES[g.id]) return COMPACT_GAME_NAMES[g.id];
  return String(g.name || '');
}

function gameIconSvg(iconName, cls = 'w-5 h-5') {
  const icons = {
    // Harmonies: hexágono con montaña, árbol y río
    hex: `<polygon points="12,2.2 20.6,7.1 20.6,16.9 12,21.8 3.4,16.9 3.4,7.1" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M5.5 15.8 9.2 10.5l2.6 3.5 2.4-3.1 4.3 4.9" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15.3" cy="8.2" r="1.35" fill="currentColor"/>`,
    // Wyrmspan: dragón alado estilizado con cuerno y ala
    dragon: `<path d="M4.5 18.5c1.5-5.6 5.2-10.2 12.2-12.5-.8 3.1-1.3 5 2.3 5.9-2.8 1.8-4.7 3.8-4.8 7.6-3.2-.6-6.2-.5-9.7-1Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M9.5 13.5 5.2 9.2c2.8-.2 5 .7 6.8 2.2M14.2 7.5 13 4.2" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14.6" cy="9.6" r="1.05" fill="currentColor"/>`,
    // Terraforming Mars: planeta rojo con órbita y cráteres
    planet: `<circle cx="12" cy="12" r="5.6" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/><ellipse cx="12" cy="12" rx="10.2" ry="3.6" transform="rotate(-24 12 12)" fill="none" stroke="currentColor" stroke-width="1.75"/><circle cx="10.2" cy="10.5" r="1.05" fill="currentColor"/><circle cx="13.8" cy="13.6" r="0.8" fill="currentColor"/>`,
    // Splendor Duel: diamante tallado + destello real
    gem: `<polygon points="6.2,4.5 17.8,4.5 21.5,9.8 12,20.8 2.5,9.8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M2.5 9.8h19M12 20.8 8.4 9.8 12 4.5l3.6 5.3L12 20.8Z" fill="none" stroke="currentColor" stroke-width="1.45" stroke-linejoin="round"/><path d="M19.5 3.2v2.4M18.3 4.4h2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
    // Lord of the Rings: Duel: El Anillo Único con luz estelar
    ring: `<circle cx="12" cy="13.6" r="6.8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="2.15"/><circle cx="12" cy="13.6" r="3.7" fill="none" stroke="currentColor" stroke-width="1.25" stroke-dasharray="2.1 1.9"/><path d="M12 2.4v3.4M10.3 4.1h3.4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>`,
    // Lord of the Rings: Battle for Middle-earth: espadas cruzadas de batalla
    sword: `<path d="M5 19 17.8 6.2M19 19 6.2 6.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15.2 4.4 19.6 4.4 19.6 8.8M8.8 4.4 4.4 4.4 4.4 8.8" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.2 14.5 9.5 18.8M18.8 14.5 14.5 18.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    // Jaipur: camello mercader estilizado
    camel: `<path d="M4.2 18.5v-5.2c0-1.4.8-2.3 2-2.6l1.3-.4c.8-2 2.3-3.1 3.7-2.6 1 .3 1.4 1.3 1.8 1.3s1-.9 2-1.1c1.3-.3 2.4.6 2.9 2.1l1.2-.8c.8-.5 1.8 0 1.8.9 0 .9-.7 1.6-1.5 1.8l-1.2.3v6.3M8 15.2v3.3M15.2 15.2v3.3M7.8 15.2h7.6" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19.1" cy="10.2" r="0.7" fill="currentColor"/>`,
    // Sea Salt & Paper: barco de origami sobre ola
    origami: `<path d="M3.2 14.6 12 4.4l8.8 10.2-3.4 3.4H6.6l-3.4-3.4Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M12 4.4v13.6M3.2 14.6h17.6" stroke="currentColor" stroke-width="1.55"/><path d="M3.5 20.6c2-.9 3.6.9 5.6 0s3.6.9 5.6 0 3.6.9 5.8 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
    // Last Bullet: mira táctica + bala central
    target: `<circle cx="12" cy="12" r="7.8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.85"/><path d="M12 2.2v3.2M12 18.6v3.2M2.2 12h3.2M18.6 12h3.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M10.2 15.6v-4.2c0-1.5.8-2.8 1.8-3.5 1 .7 1.8 2 1.8 3.5v4.2h-3.6Z" fill="currentColor"/>`,
    // Splendor Marvel: escudo/guantelete con las 6 Gemas del Infinito
    gauntlet: `<path d="M12 2.8 4.4 6.2v5.6c0 4.7 3.2 8 7.6 9.4 4.4-1.4 7.6-4.7 7.6-9.4V6.2L12 2.8Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><circle cx="12" cy="11.4" r="2" fill="currentColor"/><circle cx="8.6" cy="8.6" r="1.05" fill="currentColor"/><circle cx="15.4" cy="8.6" r="1.05" fill="currentColor"/><circle cx="8.8" cy="14.4" r="1.05" fill="currentColor"/><circle cx="15.2" cy="14.4" r="1.05" fill="currentColor"/><circle cx="12" cy="16.5" r="0.95" fill="currentColor"/>`,
    // Azul Duel: azulejo portugués con estrella geométrica
    tile: `<rect x="3.6" y="3.6" width="16.8" height="16.8" rx="2.8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.85"/><path d="M12 6 13.7 10.3 18 12l-4.3 1.7L12 18l-1.7-4.3L6 12l4.3-1.7L12 6Z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>`,
    // Unstable Unicorns: cabeza de unicornio con cuerno en espiral
    unicorn: `<path d="M6.2 19.6c.4-3.4 1.3-6.2 3.2-8.4l1.1-1.3c1.6-.8 3.5-.6 5 .5l3.6 2.8c.8.6.7 1.8-.2 2.3l-2.6 1.3c-1.1.5-2.3.3-3.1-.5l-.7-.7c-.3 1.5-.3 2.8 0 4" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.6 9.8 18.2 3.4l-2.8 7.4" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.8 9.9 8.4 7.2l2.6 1.4M6.8 14.2c-1.2.4-2 1.4-2.2 2.6" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14.6" cy="12.3" r="0.95" fill="currentColor"/>`,
    // Ticket to Ride: Europa: locomotora clásica frontal
    train: `<rect x="5.2" y="3.8" width="13.6" height="12.6" rx="3.2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.85"/><path d="M5.2 10.5h13.6M8.2 20.2l2.1-3.8M15.8 20.2l-2.1-3.8M6.8 19.2h10.4" stroke="currentColor" stroke-width="1.85" stroke-linecap="round"/><circle cx="9.2" cy="13.5" r="1.15" fill="currentColor"/><circle cx="14.8" cy="13.5" r="1.15" fill="currentColor"/><path d="M9.5 6.8h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    // Monopoly Deal: banco / propiedad con columnas
    bank: `<path d="M3.2 9.4 12 3.8l8.8 5.6H3.2Z" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M5.4 9.8v7.4M9.8 9.8v7.4M14.2 9.8v7.4M18.6 9.8v7.4M3 20h18M4.2 17.4h15.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    // Skull King: calavera pirata con parche y bandana
    skull: `<path d="M5.2 11.4a6.8 6.8 0 1 1 13.6 0c0 2.5-1.3 4.5-3.1 5.5v2.8H8.3v-2.8C6.5 15.9 5.2 13.9 5.2 11.4Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><circle cx="9.4" cy="11.5" r="1.35" fill="currentColor"/><rect x="13.1" y="10.2" width="2.8" height="2.6" rx="0.8" fill="currentColor"/><path d="M13 10.4 17.8 7.5M10.5 19.7v-2.2M13.5 19.7v-2.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
    // Faraway: rosa de los vientos de explorador
    compass: `<circle cx="12" cy="12" r="8.6" fill="currentColor" fill-opacity="0.13" stroke="currentColor" stroke-width="1.85"/><polygon points="15.8,8.2 13.8,13.8 8.2,15.8 10.2,10.2" fill="currentColor" fill-opacity="0.32" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.15" fill="currentColor"/><path d="M12 4.5v1.3M12 18.2v1.3M4.5 12h1.3M18.2 12h1.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
    // Trío: tres cartas/círculos en tríada perfecta
    trio: `<circle cx="12" cy="7.3" r="3.4" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.85"/><circle cx="7.4" cy="15.7" r="3.4" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/><circle cx="16.6" cy="15.7" r="3.4" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/>`,
    // Virus!: microbio con púas y núcleo
    virus: `<circle cx="12" cy="12" r="4.9" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.85"/><path d="M12 3.2v3.6M12 17.2v3.6M3.2 12h3.6M17.2 12h3.6M5.8 5.8l2.5 2.5M15.7 15.7l2.5 2.5M18.2 5.8l-2.5 2.5M8.3 15.7l-2.5 2.5" stroke="currentColor" stroke-width="1.85" stroke-linecap="round"/><circle cx="10.4" cy="11.1" r="1.05" fill="currentColor"/><circle cx="13.8" cy="13.2" r="0.85" fill="currentColor"/>`,
    // Odín: yelmo vikingo con cuernos y protección nasal
    helmet: `<path d="M6.2 13a5.8 5.8 0 0 1 11.6 0v5.2H6.2V13Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M6.2 12.2C3.6 11.6 2.6 9.1 3.6 6.2c1 1.9 2.1 2.5 3.6 2.5M17.8 12.2c2.6-.6 3.6-3.1 2.6-6-1 1.9-2.1 2.5-3.6 2.5" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.2v11M6.2 14h11.6" stroke="currentColor" stroke-width="1.65"/>`,
    // Got Five!: ficha/carta con el número 5
    hand: `<rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.2" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.85"/><path d="M14.8 8.4H9.8l-.4 3.3c.7-.4 1.5-.6 2.4-.6 2 0 3.2 1.1 3.2 2.7 0 1.8-1.4 3-3.4 3-1.4 0-2.5-.5-3-1.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    // The Mind: conexión telepática con ondas concéntricas
    mind: `<path d="M12 3.2a5.8 5.8 0 0 0-5.8 5.8c0 2.2 1.2 4 2.8 5v2.8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V14c1.6-1 2.8-2.8 2.8-5A5.8 5.8 0 0 0 12 3.2Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/><path d="M9.6 21h4.8M9.5 9.6c.7-.8 1.5-1.2 2.5-1.2s1.8.4 2.5 1.2" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><circle cx="12" cy="11.5" r="1.05" fill="currentColor"/>`,
    // Flip 7: cartas en abanico con el 7 protagonista
    cards: `<rect x="4" y="4.8" width="11.4" height="15.2" rx="2.2" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/><path d="M15.4 6.8h2.6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9.2a2 2 0 0 1-2-2v-.8" fill="none" stroke="currentColor" stroke-width="1.75"/><path d="M7.6 9.8h4.2l-2.3 5.8" fill="none" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"/>`,
    // Sleeping Queens: corona real con media luna
    crown: `<path d="M3.2 17.2 5.2 7.8l4.8 3.8 2-5.8 2 5.8 4.8-3.8 2 9.4H3.2Z" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><path d="M4.2 20.2h15.6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="14.2" r="1.05" fill="currentColor"/>`,
    // Exploding Kittens: gato travieso con mecha encendida
    cat: `<path d="M5.2 9.6V4.4l4 2.9h5.6l4-2.9v5.2c1.2 1.2 2 2.8 2 4.7 0 4-3.8 6.9-8.8 6.9s-8.8-2.9-8.8-6.9c0-1.9.8-3.5 2-4.7Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/><circle cx="9.2" cy="13.2" r="1.15" fill="currentColor"/><circle cx="14.8" cy="13.2" r="1.15" fill="currentColor"/><path d="M10.8 16c.6.6 1.8.6 2.4 0M12 2.2v2.4M10.4 3.2l.8.8M13.6 3.2l-.8.8" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"/>`,
    // Sushi Go!: rollo maki con palillos
    sushi: `<ellipse cx="12" cy="9.6" rx="7.2" ry="3.8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85"/><path d="M4.8 9.6v5.8c0 2.1 3.2 3.8 7.2 3.8s7.2-1.7 7.2-3.8V9.6" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.85"/><ellipse cx="12" cy="9.6" rx="2.9" ry="1.4" fill="currentColor"/><path d="M6 4.4 18.8 6.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
    // Extras para juegos personalizados
    scales: `<path d="M12 4v16M7 20h10M5 8h14" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M6 8 3.5 14a3 3 0 0 0 5 0L6 8ZM18 8l-2.5 6a3 3 0 0 0 5 0L18 8Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>`,
    meeple: `<circle cx="12" cy="5.5" r="2.4" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.85"/><path d="M6.2 10.6 12 9.1l5.8 1.5-2 4.4 2.4 5.4h-4.1l-2.1-3.4-2.1 3.4H5.8L8.2 15l-2-4.4Z" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="1.85" stroke-linejoin="round"/>`,
    dice: `<rect x="4" y="4" width="16" height="16" rx="3.6" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.85"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/>`,
  };
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${icons[iconName] || icons.dice}</svg>`;
}

const MONTHS_SHORT_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

function normalizeDateToISO(raw, fallbackMs = null) {
  const s = String(raw || '').trim();
  if (s) {
    // 1) Timestamp ISO con hora (ej. 2026-11-25T23:00:00.000Z) -> convertir a fecha local del dispositivo
    if (/^\d{4}-\d{2}-\d{2}T/.test(s)) {
      const dt = new Date(s);
      if (!isNaN(dt.getTime())) {
        return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
      }
    }
    // 2) YYYY-MM-DD (o YYYY-M-D)
    const isoM = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (isoM) {
      return `${isoM[1]}-${String(Number(isoM[2])).padStart(2, '0')}-${String(Number(isoM[3])).padStart(2, '0')}`;
    }
    // 3) DD/MM/YYYY o DD-MM-YYYY
    const esM = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (esM) {
      return `${esM[3]}-${String(Number(esM[2])).padStart(2, '0')}-${String(Number(esM[1])).padStart(2, '0')}`;
    }
    // 4) "26 nov 2026" o "26 nov. 2026"
    const txtM = s.toLowerCase().match(/^(\d{1,2})\s+([a-z]{3})\.?\s+(\d{4})$/);
    if (txtM) {
      const mIdx = MONTHS_SHORT_ES.indexOf(txtM[2]);
      if (mIdx >= 0) {
        return `${txtM[3]}-${String(mIdx + 1).padStart(2, '0')}-${String(Number(txtM[1])).padStart(2, '0')}`;
      }
    }
  }
  if (fallbackMs) {
    const dt = new Date(Number(fallbackMs));
    if (!isNaN(dt.getTime())) {
      return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
    }
  }
  return todayISO();
}

function formatDisplayDate(isoStr, createdAtMs) {
  const norm = normalizeDateToISO(isoStr, createdAtMs);
  const m = norm.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) {
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const d = Number(m[3]);
    if (mo >= 0 && mo < 12) {
      return `${d} ${MONTHS_SHORT_ES[mo]} ${y}`;
    }
  }
  return isoStr || 'Hoy';
}

function normalizeStarRating(raw) {
  const cleaned = typeof raw === 'string' ? raw.trim().replace(',', '.') : raw;
  const n = Number(cleaned);
  if (!n || isNaN(n) || n <= 0) return 0;
  // Migración suave de notas antiguas en escala 5–10 a 1–5 en pasos de 0.5
  let val = n > 5 ? (Math.round(n) / 2) : n;
  val = Math.round(val * 2) / 2;
  return Math.min(5, Math.max(1, val));
}

const DEFAULT_OWNER_KEY = 'sebas';
const DEFAULT_OWNER_NAME = 'Sebas';
const SHELF_HOME_KEY = 'all';

function isFourMermaidsMatch(match) {
  if (!match || match.gameId !== 'oceanos_de_papel') return false;
  const wt = String(match.meta?.winType || '');
  const ex = String(match.extraLabel || '');
  return /4\s*sirenas/i.test(wt) || /4\s*sirenas/i.test(ex);
}

function getGameAverageRating(g) {
  if (!g) return { avg: 0, count: 0 };
  const map = (g.ratingsByPlayer && typeof g.ratingsByPlayer === 'object') ? g.ratingsByPlayer : {};
  const vals = Object.values(map)
    .map((v) => normalizeStarRating(v))
    .filter((v) => v > 0);
  if (vals.length === 0) {
    const leg = normalizeStarRating(g.rating);
    return leg > 0 ? { avg: leg, count: 1 } : { avg: 0, count: 0 };
  }
  const sum = vals.reduce((a, b) => a + b, 0);
  return { avg: sum / vals.length, count: vals.length };
}

function formatAverageRating(avg) {
  if (!avg || avg <= 0) return '';
  return Number(avg).toFixed(1);
}

function isGameFavoriteByAny(g) {
  if (!g) return false;
  if (g.favoritesByPlayer && typeof g.favoritesByPlayer === 'object') {
    if (Object.values(g.favoritesByPlayer).some(Boolean)) return true;
  }
  return Boolean(g.favorite);
}

function isShelfHomeMode() {
  return normName(uiState.shelfProfileKey) === SHELF_HOME_KEY;
}

function migrateGameRatingsToProfiles(gameList) {
  if (!Array.isArray(gameList)) return false;
  let changed = false;
  gameList.forEach((g) => {
    if (!g || typeof g !== 'object') return;
    if (!g.ratingsByPlayer || typeof g.ratingsByPlayer !== 'object' || Array.isArray(g.ratingsByPlayer)) {
      g.ratingsByPlayer = {};
      changed = true;
    }
    if (!g.favoritesByPlayer || typeof g.favoritesByPlayer !== 'object' || Array.isArray(g.favoritesByPlayer)) {
      g.favoritesByPlayer = {};
      changed = true;
    }

    // Normaliza valores existentes en ratingsByPlayer
    Object.keys(g.ratingsByPlayer).forEach((k) => {
      const cleanK = normName(k);
      const val = normalizeStarRating(g.ratingsByPlayer[k]);
      if (!cleanK || val <= 0) {
        delete g.ratingsByPlayer[k];
        changed = true;
      } else {
        if (cleanK !== k) {
          delete g.ratingsByPlayer[k];
          changed = true;
        }
        if (g.ratingsByPlayer[cleanK] !== val) {
          g.ratingsByPlayer[cleanK] = val;
          changed = true;
        }
      }
    });

    // Normaliza claves existentes en favoritesByPlayer
    Object.keys(g.favoritesByPlayer).forEach((k) => {
      const cleanK = normName(k);
      const val = Boolean(g.favoritesByPlayer[k]);
      if (!cleanK || !val) {
        delete g.favoritesByPlayer[k];
        changed = true;
      } else if (cleanK !== k) {
        delete g.favoritesByPlayer[k];
        g.favoritesByPlayer[cleanK] = true;
        changed = true;
      }
    });

    // Migra rating/favorite planos al perfil principal (Sebas) si aún no estaban ahí
    const legacyRating = normalizeStarRating(g.rating);
    if (legacyRating > 0 && !g.ratingsByPlayer[DEFAULT_OWNER_KEY]) {
      g.ratingsByPlayer[DEFAULT_OWNER_KEY] = legacyRating;
      changed = true;
    }
    if (g.favorite === true && !g.favoritesByPlayer[DEFAULT_OWNER_KEY]) {
      g.favoritesByPlayer[DEFAULT_OWNER_KEY] = true;
      changed = true;
    }

    // Mantiene espejados g.rating y g.favorite con Sebas para compatibilidad con columnas de Sheets
    const ownerRating = normalizeStarRating(g.ratingsByPlayer[DEFAULT_OWNER_KEY]);
    if (ownerRating > 0) {
      if (g.rating !== ownerRating) { g.rating = ownerRating; changed = true; }
    } else if (g.rating !== undefined) {
      delete g.rating;
      changed = true;
    }
    const ownerFav = Boolean(g.favoritesByPlayer[DEFAULT_OWNER_KEY]);
    if (Boolean(g.favorite) !== ownerFav) {
      g.favorite = ownerFav;
      changed = true;
    }
  });
  return changed;
}

function getGameRatingFor(g, profileKey = null) {
  if (!g) return 0;
  const key = normName(profileKey || getActiveShelfProfile().key) || DEFAULT_OWNER_KEY;
  if (g.ratingsByPlayer && typeof g.ratingsByPlayer === 'object' && g.ratingsByPlayer[key] !== undefined) {
    return normalizeStarRating(g.ratingsByPlayer[key]);
  }
  if (key === DEFAULT_OWNER_KEY) return normalizeStarRating(g.rating);
  return 0;
}

function setGameRatingFor(g, rating, profileKey = null) {
  if (!g) return false;
  const key = normName(profileKey || getActiveShelfProfile().key) || DEFAULT_OWNER_KEY;
  if (!g.ratingsByPlayer || typeof g.ratingsByPlayer !== 'object') g.ratingsByPlayer = {};
  if (!g.ratingUpdatedAtByPlayer || typeof g.ratingUpdatedAtByPlayer !== 'object') g.ratingUpdatedAtByPlayer = {};
  const prev = getGameRatingFor(g, key);
  const norm = normalizeStarRating(rating);
  if (prev === norm) return false;
  if (norm > 0) g.ratingsByPlayer[key] = norm;
  else delete g.ratingsByPlayer[key];
  g.ratingUpdatedAtByPlayer[key] = Date.now();
  if (key === DEFAULT_OWNER_KEY) {
    if (norm > 0) g.rating = norm;
    else delete g.rating;
  }
  return true;
}

function isGameFavoriteFor(g, profileKey = null) {
  if (!g) return false;
  const key = normName(profileKey || getActiveShelfProfile().key) || DEFAULT_OWNER_KEY;
  if (g.favoritesByPlayer && typeof g.favoritesByPlayer === 'object' && key in g.favoritesByPlayer) {
    return Boolean(g.favoritesByPlayer[key]);
  }
  if (key === DEFAULT_OWNER_KEY) return Boolean(g.favorite);
  return false;
}

function setGameFavoriteFor(g, isFav, profileKey = null) {
  if (!g) return false;
  const key = normName(profileKey || getActiveShelfProfile().key) || DEFAULT_OWNER_KEY;
  if (!g.favoritesByPlayer || typeof g.favoritesByPlayer !== 'object') g.favoritesByPlayer = {};
  if (!g.favoriteUpdatedAtByPlayer || typeof g.favoriteUpdatedAtByPlayer !== 'object') g.favoriteUpdatedAtByPlayer = {};
  const prev = isGameFavoriteFor(g, key);
  const next = Boolean(isFav);
  if (prev === next) return false;
  if (next) g.favoritesByPlayer[key] = true;
  else delete g.favoritesByPlayer[key];
  g.favoriteUpdatedAtByPlayer[key] = Date.now();
  if (key === DEFAULT_OWNER_KEY) g.favorite = next;
  return true;
}

// Fusión determinista y segura por perfil entre dos copias del mismo juego (local vs remoto)
function mergeSingleGameRecords(localG, remoteG, preferLocalOnTie = false) {
  if (!localG) return JSON.parse(JSON.stringify(remoteG));
  if (!remoteG) return JSON.parse(JSON.stringify(localG));

  const loc = JSON.parse(JSON.stringify(localG));
  const rem = JSON.parse(JSON.stringify(remoteG));
  migrateGameRatingsToProfiles([loc, rem]);

  const locMetaTs = Number(loc.metaUpdatedAt) || 0;
  const remMetaTs = Number(rem.metaUpdatedAt) || 0;
  const base = (locMetaTs > remMetaTs || (locMetaTs === remMetaTs && preferLocalOnTie)) ? loc : rem;
  const merged = JSON.parse(JSON.stringify(base));

  // Reglas: gana la edición más reciente
  const locRulesTs = Number(loc.rulesUpdatedAt) || 0;
  const remRulesTs = Number(rem.rulesUpdatedAt) || 0;
  if (locRulesTs > remRulesTs) {
    merged.rulesNotes = loc.rulesNotes;
    merged.rulesUpdatedAt = locRulesTs;
  } else if (remRulesTs > locRulesTs) {
    merged.rulesNotes = rem.rulesNotes;
    merged.rulesUpdatedAt = remRulesTs;
  }

  // Estrellas por persona: cada clave se resuelve de forma independiente por timestamp
  const mergedRatings = {};
  const mergedRatingTs = {};
  const allRatingKeys = new Set([
    ...Object.keys(loc.ratingsByPlayer || {}),
    ...Object.keys(rem.ratingsByPlayer || {}),
    ...Object.keys(loc.ratingUpdatedAtByPlayer || {}),
    ...Object.keys(rem.ratingUpdatedAtByPlayer || {}),
  ]);
  let localWonAny = false;
  allRatingKeys.forEach((rawK) => {
    const k = normName(rawK);
    if (!k) return;
    const lTs = Number(loc.ratingUpdatedAtByPlayer?.[k]) || 0;
    const rTs = Number(rem.ratingUpdatedAtByPlayer?.[k]) || 0;
    const lVal = normalizeStarRating(loc.ratingsByPlayer?.[k]);
    const rVal = normalizeStarRating(rem.ratingsByPlayer?.[k]);
    let winVal = 0;
    let winTs = 0;

    if (lTs > rTs) {
      winVal = lVal; winTs = lTs;
      if (lVal !== rVal) localWonAny = true;
    } else if (rTs > lTs) {
      winVal = rVal; winTs = rTs;
    } else {
      // Sin timestamp (datos legados): nunca perder una nota existente
      if (lVal > 0 && rVal === 0) { winVal = lVal; localWonAny = true; }
      else if (rVal > 0 && lVal === 0) { winVal = rVal; }
      else { winVal = preferLocalOnTie ? lVal : rVal; }
    }
    if (winVal > 0) mergedRatings[k] = winVal;
    if (winTs > 0) mergedRatingTs[k] = winTs;
  });

  // Favoritos por persona: cada clave se resuelve de forma independiente por timestamp
  const mergedFavs = {};
  const mergedFavTs = {};
  const allFavKeys = new Set([
    ...Object.keys(loc.favoritesByPlayer || {}),
    ...Object.keys(rem.favoritesByPlayer || {}),
    ...Object.keys(loc.favoriteUpdatedAtByPlayer || {}),
    ...Object.keys(rem.favoriteUpdatedAtByPlayer || {}),
  ]);
  allFavKeys.forEach((rawK) => {
    const k = normName(rawK);
    if (!k) return;
    const lTs = Number(loc.favoriteUpdatedAtByPlayer?.[k]) || 0;
    const rTs = Number(rem.favoriteUpdatedAtByPlayer?.[k]) || 0;
    const lFav = Boolean(loc.favoritesByPlayer?.[k]);
    const rFav = Boolean(rem.favoritesByPlayer?.[k]);
    let winFav = false;
    let winTs = 0;

    if (lTs > rTs) {
      winFav = lFav; winTs = lTs;
      if (lFav !== rFav) localWonAny = true;
    } else if (rTs > lTs) {
      winFav = rFav; winTs = rTs;
    } else {
      // Sin timestamp (datos legados): conservar si cualquiera lo tenía marcado
      winFav = lFav || rFav;
      if (lFav && !rFav) localWonAny = true;
    }
    if (winFav) mergedFavs[k] = true;
    if (winTs > 0) mergedFavTs[k] = winTs;
  });

  merged.ratingsByPlayer = mergedRatings;
  merged.ratingUpdatedAtByPlayer = mergedRatingTs;
  merged.favoritesByPlayer = mergedFavs;
  merged.favoriteUpdatedAtByPlayer = mergedFavTs;
  merged.metaUpdatedAt = Math.max(locMetaTs, remMetaTs);
  migrateGameRatingsToProfiles([merged]);
  return { game: merged, localWonAny };
}

function getShelfProfileCandidates() {
  const map = new Map();
  const addCandidate = (rawName) => {
    const clean = String(rawName || '').trim();
    const key = clean.toLowerCase();
    if (!key) return;
    if (!map.has(key)) {
      const prof = getPlayerProfile(clean);
      map.set(key, { key, name: prof.name || clean, color: prof.color, initials: prof.initials, ratedCount: 0, favCount: 0 });
    }
  };

  // Dueño principal siempre primero
  const ownerSaved = playerProfiles[DEFAULT_OWNER_KEY]?.name || DEFAULT_OWNER_NAME;
  addCandidate(ownerSaved);

  // Jugadores del historial ordenados por frecuencia
  getAllPlayersWithCounts().forEach((p) => addCandidate(p.name));
  // Perfiles personalizados y frecuentes
  Object.values(playerProfiles || {}).forEach((p) => addCandidate(p?.name));
  (frequentPlayers || []).forEach((n) => addCandidate(n));
  // Cualquier clave con valoraciones o favoritos guardados
  games.forEach((g) => {
    Object.keys(g.ratingsByPlayer || {}).forEach((k) => {
      const pretty = playerProfiles[k]?.name || (k.charAt(0).toUpperCase() + k.slice(1));
      addCandidate(pretty);
    });
    Object.keys(g.favoritesByPlayer || {}).forEach((k) => {
      const pretty = playerProfiles[k]?.name || (k.charAt(0).toUpperCase() + k.slice(1));
      addCandidate(pretty);
    });
  });

  // Cuenta cuántas valoraciones/favoritos tiene cada persona
  games.forEach((g) => {
    map.forEach((cand) => {
      if (getGameRatingFor(g, cand.key) > 0) cand.ratedCount += 1;
      if (isGameFavoriteFor(g, cand.key)) cand.favCount += 1;
    });
  });

  return Array.from(map.values());
}

function getActiveShelfProfile() {
  const candidates = getShelfProfileCandidates();
  const rawKey = normName(uiState.shelfProfileKey);
  const wanted = (rawKey && rawKey !== SHELF_HOME_KEY)
    ? rawKey
    : (normName(uiState.lastPersonProfileKey) || DEFAULT_OWNER_KEY);
  const found = candidates.find((c) => c.key === wanted) || candidates[0];
  if (found) {
    uiState.lastPersonProfileKey = found.key;
    if (rawKey && rawKey !== SHELF_HOME_KEY && rawKey !== found.key) {
      uiState.shelfProfileKey = found.key;
    }
  }
  return found || {
    key: DEFAULT_OWNER_KEY,
    name: DEFAULT_OWNER_NAME,
    color: getPlayerColor(DEFAULT_OWNER_NAME),
    initials: computeDefaultInitials(DEFAULT_OWNER_NAME),
    ratedCount: 0,
    favCount: 0,
  };
}

function setActiveShelfProfile(key) {
  const cleanKey = normName(key) || SHELF_HOME_KEY;
  uiState.shelfProfileKey = cleanKey;
  if (cleanKey !== SHELF_HOME_KEY) {
    uiState.lastPersonProfileKey = cleanKey;
    try { localStorage.setItem(KEYS.SHELF_PROFILE, cleanKey); } catch (e) {}
  }
}

// Motor FLIP ligero para píldora deslizante en controles segmentados
const segThumbPrevState = {};
function syncSegmentedControls() {
  document.querySelectorAll('.seg-control[data-seg-id]').forEach((wrap) => {
    const id = wrap.dataset.segId;
    const thumb = wrap.querySelector(':scope > .seg-thumb');
    const activeBtn = wrap.querySelector(':scope > .seg-btn[data-seg-active="true"]');
    if (!thumb || !activeBtn) return;

    const targetX = activeBtn.offsetLeft - 2;
    const targetW = activeBtn.offsetWidth;
    if (targetW <= 0) return;

    const prev = segThumbPrevState[id];
    if (prev && (Math.abs(prev.x - targetX) > 0.5 || Math.abs(prev.w - targetW) > 0.5)) {
      thumb.style.transition = 'none';
      thumb.style.width = `${prev.w}px`;
      thumb.style.transform = `translate3d(${prev.x}px, 0, 0)`;
      void thumb.offsetWidth;
      thumb.style.transition = '';
      thumb.style.width = `${targetW}px`;
      thumb.style.transform = `translate3d(${targetX}px, 0, 0)`;
    } else {
      thumb.style.transition = 'none';
      thumb.style.width = `${targetW}px`;
      thumb.style.transform = `translate3d(${targetX}px, 0, 0)`;
      requestAnimationFrame(() => { thumb.style.transition = ''; });
    }
    segThumbPrevState[id] = { x: targetX, w: targetW };
  });
}

function formatStarRating(raw) {
  const val = normalizeStarRating(raw);
  if (!val) return '';
  return val.toFixed(1);
}

function renderStarSvg(state, uid, sizeCls = 'w-9 h-9') {
  // state: 'full' | 'half' | 'empty'
  const starPath = 'M12 2.35l2.96 5.98 6.6.96-4.78 4.65 1.13 6.57L12 17.4l-5.91 3.11 1.13-6.57-4.78-4.65 6.6-.96L12 2.35z';
  if (state === 'full') {
    return `<svg class="${sizeCls}" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="starFull_${uid}" x1="0" y1="0" x2="0.2" y2="1"><stop offset="0%" stop-color="#FDE047"/><stop offset="55%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/></linearGradient></defs><path d="${starPath}" fill="url(#starFull_${uid})" stroke="#B45309" stroke-width="1.25" stroke-linejoin="round"/></svg>`;
  }
  if (state === 'half') {
    return `<svg class="${sizeCls}" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="starHalf_${uid}" x1="0" y1="0" x2="1" y2="0"><stop offset="50%" stop-color="#F59E0B"/><stop offset="50%" stop-color="rgba(148,163,184,0.18)"/></linearGradient></defs><path d="${starPath}" fill="url(#starHalf_${uid})" stroke="#D97706" stroke-width="1.25" stroke-linejoin="round"/></svg>`;
  }
  return `<svg class="${sizeCls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${starPath}" fill="rgba(148,163,184,0.14)" stroke="rgba(148,163,184,0.45)" stroke-width="1.35" stroke-linejoin="round"/></svg>`;
}

function getStarVerdictLabel(val) {
  const n = normalizeStarRating(val);
  if (!n) return 'Desliza o toca';
  const map = {
    1.0: 'No es para mí',
    1.5: 'Flojo',
    2.0: 'Pasable',
    2.5: 'Correcto',
    3.0: 'Entretenido',
    3.5: 'Muy bueno',
    4.0: 'Gran juego',
    4.5: 'Imprescindible',
    5.0: 'Obra maestra',
  };
  return map[n] || 'Valorado';
}

function renderStarScrubberHtml({ uid, rating = 0, profileName = '', avgText = '', clearAttr = '' }) {
  const val = normalizeStarRating(rating);
  const railPct = val > 0 ? Math.round((val / 5) * 100) : 0;
  const verdict = getStarVerdictLabel(val);

  return `
    <div class="star-rater-stage space-y-2" data-star-stage="${esc(uid)}">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-1.5 min-w-0">
          <span class="text-[10.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 truncate">
            ${profileName ? `Nota de ${esc(profileName)}` : 'Valoración'}
          </span>
          ${avgText ? `<span class="px-1.5 py-0.5 rounded-md bg-amber-500/14 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold tabular-nums shrink-0">Media ★ ${esc(avgText)}</span>` : ''}
        </div>
        <button type="button" ${clearAttr} data-star-clear-btn
          class="btn-tap text-[11px] font-bold text-coralBrand shrink-0 ${val > 0 ? '' : 'hidden'}">
          Quitar
        </button>
      </div>

      <div class="flex items-center justify-center gap-2.5 pt-0.5">
        <span data-star-score-val class="font-display text-3xl font-extrabold tabular-nums leading-none ${val > 0 ? 'text-goldBrand dark:text-amber-300' : 'text-inkMuted/50 dark:text-white/30'}">
          ${val > 0 ? formatStarRating(val) : '—'}
        </span>
        <span data-star-verdict class="star-verdict-pill ${val > 0 ? '' : 'is-empty'}">
          ${esc(verdict)}
        </span>
      </div>

      <div data-star-scrubber="${esc(uid)}" data-current-rating="${val}" role="slider" aria-label="Valoración de 1 a 5 estrellas" aria-valuemin="1" aria-valuemax="5" aria-valuenow="${val || 0}"
        class="star-scrubber-track">
        ${[1, 2, 3, 4, 5].map((n) => {
          const st = val >= n ? 'full' : (val >= n - 0.5 ? 'half' : 'empty');
          return `
            <span data-star-slot="${n}" class="star-scrubber-item ${st !== 'empty' ? 'is-lit' : ''}">
              ${renderStarSvg(st, `${uid}_${n}`, 'w-10 h-10')}
            </span>
          `;
        }).join('')}
      </div>

      <div class="star-rail-track">
        <div data-star-rail-fill class="star-rail-fill" style="width:${railPct}%;"></div>
      </div>

      <p class="text-[10px] text-center text-inkMuted dark:text-white/45 pt-0.5">
        Desliza el dedo sobre las estrellas o toca su mitad izquierda / derecha
      </p>
    </div>
  `;
}

function bindStarScrubber(rootEl, { onPreview = null, onCommit = null } = {}) {
  if (!rootEl) return;
  const track = rootEl.querySelector('[data-star-scrubber]');
  const stage = rootEl.querySelector('[data-star-stage]');
  if (!track || !stage) return;

  const uid = track.dataset.starScrubber || 'sr';
  const scoreEl = stage.querySelector('[data-star-score-val]');
  const verdictEl = stage.querySelector('[data-star-verdict]');
  const railEl = stage.querySelector('[data-star-rail-fill]');
  const clearBtn = stage.querySelector('[data-star-clear-btn]');
  const slots = Array.from(track.querySelectorAll('[data-star-slot]'));

  let activePointerId = null;
  let lastVal = Number(track.dataset.currentRating) || 0;

  const paintRating = (val, popStarIdx = 0) => {
    const norm = normalizeStarRating(val);
    track.dataset.currentRating = String(norm);
    track.setAttribute('aria-valuenow', String(norm));

    slots.forEach((slotEl, idx) => {
      const n = idx + 1;
      const st = norm >= n ? 'full' : (norm >= n - 0.5 ? 'half' : 'empty');
      slotEl.innerHTML = renderStarSvg(st, `${uid}_${n}`, 'w-10 h-10');
      slotEl.classList.toggle('is-lit', st !== 'empty');
      slotEl.classList.toggle('is-pop', popStarIdx === n);
    });

    if (scoreEl) {
      scoreEl.textContent = norm > 0 ? formatStarRating(norm) : '—';
      scoreEl.className = `font-display text-3xl font-extrabold tabular-nums leading-none ${norm > 0 ? 'text-goldBrand dark:text-amber-300' : 'text-inkMuted/50 dark:text-white/30'}`;
    }
    if (verdictEl) {
      verdictEl.textContent = getStarVerdictLabel(norm);
      verdictEl.classList.toggle('is-empty', norm <= 0);
    }
    if (railEl) {
      railEl.style.width = `${norm > 0 ? Math.round((norm / 5) * 100) : 0}%`;
    }
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', norm <= 0);
    }
  };

  const calcFromClientX = (clientX) => {
    const rect = track.getBoundingClientRect();
    if (!rect.width) return 1.0;
    const rel = Math.max(0.001, Math.min(1, (clientX - rect.left) / rect.width));
    const halfStep = Math.ceil(rel * 10) / 2;
    return Math.max(1.0, Math.min(5.0, halfStep));
  };

  track.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    activePointerId = e.pointerId;
    try { track.setPointerCapture(e.pointerId); } catch (err) {}
    const nextVal = calcFromClientX(e.clientX);
    if (nextVal !== lastVal) {
      lastVal = nextVal;
      try { if (navigator.vibrate) navigator.vibrate(8); } catch (err) {}
    }
    paintRating(nextVal, Math.ceil(nextVal));
    if (typeof onPreview === 'function') onPreview(nextVal);
  });

  track.addEventListener('pointermove', (e) => {
    if (activePointerId !== e.pointerId) return;
    e.stopPropagation();
    const nextVal = calcFromClientX(e.clientX);
    if (nextVal !== lastVal) {
      lastVal = nextVal;
      try { if (navigator.vibrate) navigator.vibrate(6); } catch (err) {}
      paintRating(nextVal, Math.ceil(nextVal));
      if (typeof onPreview === 'function') onPreview(nextVal);
    }
  });

  const finishScrub = (e) => {
    if (activePointerId !== e.pointerId) return;
    activePointerId = null;
    try { track.releasePointerCapture(e.pointerId); } catch (err) {}
    paintRating(lastVal, 0);
    if (typeof onCommit === 'function' && lastVal > 0) onCommit(lastVal);
  };

  track.addEventListener('pointerup', finishScrub);
  track.addEventListener('pointercancel', finishScrub);
}

function showToast(msg, tone = 'neutral') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  const cls = {
    success: 'bg-emeraldBrand text-white',
    danger: 'bg-coralBrand text-white',
    milestone: 'toast-milestone',
    neutral: 'bg-pine text-white dark:bg-white dark:text-pine',
  }[tone] || 'bg-pine text-white';
  el.className = `${cls} px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold shadow-elevated anim-in text-center`;
  el.textContent = msg;
  container.appendChild(el);
  const holdMs = tone === 'milestone' ? 3400 : 2400;
  setTimeout(() => {
    el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(-6px)';
    setTimeout(() => el.remove(), 260);
  }, holdMs);
}

function triggerMilestoneCelebration(msg) {
  showToast(msg, 'milestone');
  const palette = ['#FBBF24', '#34D399', '#FDE68A', '#F59E0B', '#6EE7B7'];
  const count = 14;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = 'ludo-sparkle';
    const angle = (-Math.PI * 0.85) + (i / (count - 1)) * (Math.PI * 0.7) + (Math.random() - 0.5) * 0.18;
    const dist = 54 + Math.random() * 68;
    const sx = Math.round(Math.cos(angle) * dist);
    const sy = Math.round(Math.sin(angle) * dist * 0.65 + 32 + Math.random() * 34);
    const sr = Math.round((Math.random() - 0.5) * 260);
    dot.style.background = palette[i % palette.length];
    dot.style.setProperty('--sx', `${sx}px`);
    dot.style.setProperty('--sy', `${sy}px`);
    dot.style.setProperty('--sr', `${sr}deg`);
    dot.style.animationDelay = `${Math.round(Math.random() * 140)}ms`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1400);
  }
}

function openModal({ title, subtitle = '', bodyHtml, actions = [] }) {
  const backdrop = document.getElementById('modal-backdrop');
  document.getElementById('modal-title').textContent = title;
  const subEl = document.getElementById('modal-subtitle');
  if (subtitle) {
    subEl.textContent = subtitle;
    subEl.classList.remove('hidden');
  } else {
    subEl.classList.add('hidden');
  }
  const modalBodyEl = document.getElementById('modal-body');
  modalBodyEl.onclick = null;
  modalBodyEl.innerHTML = bodyHtml;

  const actionsEl = document.getElementById('modal-actions');
  actionsEl.innerHTML = '';
  if (actions.length === 0) {
    actionsEl.classList.add('hidden');
  } else {
    actionsEl.classList.remove('hidden');
    actions.forEach((act) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = act.label;
      btn.className = act.className || 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/15 text-ink dark:text-white';
      btn.addEventListener('click', () => {
        if (!act.keepOpen) closeModal();
        if (typeof act.onClick === 'function') act.onClick();
      });
      actionsEl.appendChild(btn);
    });
  }

  const card = document.getElementById('modal-card');
  if (card) {
    card.classList.remove('is-dragging', 'is-snapping');
    card.style.transform = '';
  }
  backdrop.style.backgroundColor = '';
  backdrop.classList.remove('hidden');
  backdrop.classList.add('flex');
  requestAnimationFrame(syncSegmentedControls);
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const card = document.getElementById('modal-card');
  if (card) {
    card.classList.remove('is-dragging', 'is-snapping');
    card.style.transform = '';
  }
  backdrop.style.backgroundColor = '';
  backdrop.classList.add('hidden');
  backdrop.classList.remove('flex');
  if (turnTimerIntervalId && !tableToolsState.turnRunning) {
    clearInterval(turnTimerIntervalId);
    turnTimerIntervalId = null;
  }
}

// =========================================================================
// 7. PERSISTENCIA LOCAL
// =========================================================================
function loadLocalData() {
  try {
    const rawGames = localStorage.getItem(KEYS.GAMES);
    if (rawGames) {
      const parsed = JSON.parse(rawGames);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Merge defaults if new fields were added
        games = parsed;
      } else {
        games = JSON.parse(JSON.stringify(DEFAULT_GAMES));
      }
    } else {
      games = JSON.parse(JSON.stringify(DEFAULT_GAMES));
    }
  } catch (e) {
    games = JSON.parse(JSON.stringify(DEFAULT_GAMES));
  }

  try {
    const rawHist = localStorage.getItem(KEYS.HISTORY);
    matchHistory = rawHist ? JSON.parse(rawHist) : [];
    if (!Array.isArray(matchHistory)) matchHistory = [];
    matchHistory.forEach((m) => {
      if (m && m.date) m.date = normalizeDateToISO(m.date, m.createdAtMs);
    });
  } catch (e) {
    matchHistory = [];
  }

  try {
    const rawPl = localStorage.getItem(KEYS.PLAYERS);
    frequentPlayers = rawPl ? JSON.parse(rawPl) : [];
    if (!Array.isArray(frequentPlayers)) frequentPlayers = [];
  } catch (e) {
    frequentPlayers = [];
  }

  try {
    const rawProf = localStorage.getItem(KEYS.PLAYER_PROFILES);
    const parsedProf = rawProf ? JSON.parse(rawProf) : {};
    playerProfiles = (parsedProf && typeof parsedProf === 'object' && !Array.isArray(parsedProf)) ? parsedProf : {};
  } catch (e) {
    playerProfiles = {};
  }

  try {
    const rawDraft = localStorage.getItem(KEYS.DRAFT);
    if (rawDraft) {
      const d = JSON.parse(rawDraft);
      if (d && d.gameId && Array.isArray(d.players)) {
        draft = { ...createEmptyDraft(d.gameId), ...d };
      }
    }
  } catch (e) {}

  // Al abrir la app, si no estamos editando una partida pasada, la fecha arranca en hoy
  if (!draft.editingMatchId) {
    syncDraftDateToToday({ force: true });
  }

  try {
    const rawDel = localStorage.getItem(KEYS.DELETED_GAMES);
    deletedGameIds = rawDel ? JSON.parse(rawDel) : [];
    if (!Array.isArray(deletedGameIds)) deletedGameIds = [];
  } catch (e) {
    deletedGameIds = [];
  }

  try {
    const rawCatMeta = localStorage.getItem(KEYS.CATALOG_META);
    if (rawCatMeta) {
      const parsedMeta = JSON.parse(rawCatMeta);
      if (parsedMeta && typeof parsedMeta === 'object') {
        syncState.catalogDirty = Boolean(parsedMeta.dirty);
        syncState.catalogUpdatedAtMs = Number(parsedMeta.updatedAtMs) || 0;
        syncState.catalogSyncedAtMs = Number(parsedMeta.syncedAtMs) || 0;
      }
    }
  } catch (e) {}

  try {
    const rawPendDel = localStorage.getItem(KEYS.PENDING_DELETES);
    pendingDeletes = rawPendDel ? JSON.parse(rawPendDel) : [];
    if (!Array.isArray(pendingDeletes)) pendingDeletes = [];
  } catch (e) {
    pendingDeletes = [];
  }

  try {
    const rawTimer = localStorage.getItem(KEYS.TIMER);
    if (rawTimer) {
      const parsedT = JSON.parse(rawTimer);
      if (parsedT && typeof parsedT === 'object') {
        matchTimer = {
          running: Boolean(parsedT.running),
          startedAtMs: parsedT.startedAtMs ? Number(parsedT.startedAtMs) : null,
          elapsedMs: Math.max(0, Number(parsedT.elapsedMs) || 0),
          gameId: String(parsedT.gameId || ''),
        };
      }
    }
  } catch (e) {}

  try {
    const rawTools = localStorage.getItem(KEYS.TABLE_TOOLS);
    if (rawTools) {
      const parsedTools = JSON.parse(rawTools);
      if (parsedTools && typeof parsedTools === 'object') {
        tableToolsState.roundNum = Math.max(1, Number(parsedTools.roundNum) || 1);
        tableToolsState.turnIdx = Math.max(0, Number(parsedTools.turnIdx) || 0);
        tableToolsState.turnPresetSec = Math.max(10, Number(parsedTools.turnPresetSec) || 60);
        tableToolsState.turnRemainingSec = tableToolsState.turnPresetSec;
        if (typeof parsedTools.turnSound === 'boolean') tableToolsState.turnSound = parsedTools.turnSound;
      }
    }
  } catch (e) {}

  // Migración suave si aún estaba Ticket to Ride: Iberia sin partidas registradas
  let gamesChanged = false;
  const iberiaIdx = games.findIndex((g) => g.id === 'ttr_iberia');
  const hasIberiaMatches = matchHistory.some((m) => m.gameId === 'ttr_iberia');
  if (iberiaIdx >= 0 && !hasIberiaMatches && !games.some((g) => g.id === 'ttr_europa') && !deletedGameIds.includes('ttr_europa')) {
    const europaDef = DEFAULT_GAMES.find((d) => d.id === 'ttr_europa');
    if (europaDef) {
      games[iberiaIdx] = JSON.parse(JSON.stringify(europaDef));
      gamesChanged = true;
    }
  }

  // Añade automáticamente los juegos nuevos del catálogo base si no existen y no fueron borrados por el usuario
  DEFAULT_GAMES.forEach((def) => {
    const existing = games.find((g) => g.id === def.id);
    if (!existing && !deletedGameIds.includes(def.id)) {
      games.push(JSON.parse(JSON.stringify(def)));
      gamesChanged = true;
    } else if (existing) {
      if (def.quickCalc && !existing.quickCalc) {
        existing.quickCalc = def.quickCalc;
        gamesChanged = true;
      }
      if (def.lowestWins && !existing.lowestWins) {
        existing.lowestWins = def.lowestWins;
        gamesChanged = true;
      }
      if (def.extraType && def.extraType !== 'none' && (!existing.extraType || existing.extraType === 'none')) {
        existing.extraType = def.extraType;
        gamesChanged = true;
      }
      if (Array.isArray(def.winModes) && (!Array.isArray(existing.winModes) || existing.winModes.length === 0)) {
        existing.winModes = [...def.winModes];
        if (def.winModeLabel) existing.winModeLabel = def.winModeLabel;
        if (def.allowCustomWinMode) existing.allowCustomWinMode = true;
        gamesChanged = true;
      }
      if (Array.isArray(def.playModes) && (!Array.isArray(existing.playModes) || existing.playModes.length === 0)) {
        existing.playModes = [...def.playModes];
        gamesChanged = true;
      }
      // Migración específica: corrige Battle for Middle-earth (solo puntos por villanos) y actualiza icono de Jaipur
      if (def.id === 'lotr_battle' && Array.isArray(existing.winModes) && existing.winModes.includes('Anillo / Misión')) {
        delete existing.winModes;
        delete existing.winModeLabel;
        delete existing.allowCustomWinMode;
        existing.tagline = def.tagline;
        gamesChanged = true;
      }
      if (def.id === 'jaipur' && existing.icon === 'scales') {
        existing.icon = 'camel';
        gamesChanged = true;
      }
      if (def.id === 'last_bullet' && (!Array.isArray(existing.playModes) || !existing.playModes.includes('PvP') || existing.maxPlayers !== 5 || existing.tagline === 'Duelo PvP, cooperativo o solitario')) {
        existing.playModes = [...def.playModes];
        existing.scoringType = def.scoringType;
        existing.extraType = 'last_bullet';
        existing.maxPlayers = 5;
        existing.tagline = def.tagline;
        gamesChanged = true;
      }
      if (!existing.minPlayers && def.minPlayers) {
        existing.minPlayers = def.minPlayers;
        gamesChanged = true;
      }
      if (!existing.maxPlayers && def.maxPlayers) {
        existing.maxPlayers = def.maxPlayers;
        gamesChanged = true;
      }
    }
  });
  // Renombra Océanos de Papel -> Sea Salt & Paper conservando su ID e historial
  const sspGame = games.find((g) => g.id === 'oceanos_de_papel');
  if (sspGame && sspGame.name === 'Océanos de Papel') {
    sspGame.name = 'Sea Salt & Paper';
    gamesChanged = true;
  }
  let historyRenamed = false;
  matchHistory.forEach((m) => {
    if (m.gameId === 'oceanos_de_papel' && m.gameName === 'Océanos de Papel') {
      m.gameName = 'Sea Salt & Paper';
      historyRenamed = true;
    }
  });
  if (historyRenamed) saveHistoryLocal();

  try {
    const savedShelfProf = localStorage.getItem(KEYS.SHELF_PROFILE);
    if (savedShelfProf && savedShelfProf.trim() && savedShelfProf.trim().toLowerCase() !== SHELF_HOME_KEY) {
      uiState.lastPersonProfileKey = savedShelfProf.trim().toLowerCase();
    }
  } catch (e) {}
  uiState.shelfProfileKey = SHELF_HOME_KEY;

  // Migra valoraciones/favoritos a perfiles por persona (tus notas actuales pasan a Sebas)
  if (migrateGameRatingsToProfiles(games)) gamesChanged = true;

  // Migra paleta de colores v1 -> v2 (25 tonos únicos respetando colores personalizados)
  const paletteMigrated = migrateGamePaletteColors(games);
  if (paletteMigrated) gamesChanged = true;

  // Inyecta o actualiza chuletas base de reglas (respeta cualquier nota editada por el usuario)
  games.forEach((g) => {
    if (!DEFAULT_RULES_NOTES[g.id]) return;
    const curNotes = typeof g.rulesNotes === 'string' ? g.rulesNotes.trim() : '';
    const legacyNotes = LEGACY_RULES_NOTES_V1[g.id] ? LEGACY_RULES_NOTES_V1[g.id].trim() : '';
    if (g.rulesNotes === undefined || curNotes === '' || (legacyNotes && curNotes === legacyNotes)) {
      g.rulesNotes = DEFAULT_RULES_NOTES[g.id];
      gamesChanged = true;
    }
  });
  // Nunca marcar catalogDirty en una migración automática al arrancar,
  // para que un dispositivo sin puntuaciones jamás sobrescriba tu catálogo real en Sheets.
  if (gamesChanged) saveGamesLocal(false);

  // Asegura que el borrador apunte a un juego existente
  if (games.length > 0 && !games.some((g) => g.id === draft.gameId)) {
    draft.gameId = games[0].id;
    draft.duration = games[0].defaultDuration || 30;
  }

  rebuildFrequentPlayersFromHistory();
}

function saveCatalogMetaLocal() {
  try {
    localStorage.setItem(KEYS.CATALOG_META, JSON.stringify({
      dirty: syncState.catalogDirty,
      updatedAtMs: syncState.catalogUpdatedAtMs,
      syncedAtMs: syncState.catalogSyncedAtMs,
    }));
  } catch (e) {}
}

function markCatalogDirty() {
  syncState.catalogDirty = true;
  syncState.catalogUpdatedAtMs = Date.now();
  saveCatalogMetaLocal();
  if (syncState.connected && syncState.apiUrl && syncState.catalogSupported !== false) {
    clearTimeout(catalogPushTimerId);
    catalogPushTimerId = setTimeout(() => {
      pushCatalogToSheets({ silent: true });
    }, 900);
  }
}

function saveGamesLocal(markDirty = true) {
  try { localStorage.setItem(KEYS.GAMES, JSON.stringify(games)); } catch (e) {}
  if (markDirty) markCatalogDirty();
}

function saveDeletedGamesLocal(markDirty = true) {
  try { localStorage.setItem(KEYS.DELETED_GAMES, JSON.stringify(deletedGameIds)); } catch (e) {}
  if (markDirty) markCatalogDirty();
}

function saveHistoryLocal() {
  try { localStorage.setItem(KEYS.HISTORY, JSON.stringify(matchHistory)); } catch (e) {}
}

function saveDraftLocal() {
  try { localStorage.setItem(KEYS.DRAFT, JSON.stringify(draft)); } catch (e) {}
}

function savePlayerProfilesLocal(markDirty = true) {
  try { localStorage.setItem(KEYS.PLAYER_PROFILES, JSON.stringify(playerProfiles)); } catch (e) {}
  if (markDirty) markCatalogDirty();
}

function hashStringIndex(str, mod) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % mod;
}

function computeDefaultInitials(name) {
  const clean = String(name || '').trim();
  if (!clean) return '?';
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase();
}

function getPlayerProfile(name) {
  const clean = String(name || '').trim();
  const key = clean.toLowerCase();
  const saved = key ? playerProfiles[key] : null;
  const defaultColor = key
    ? PLAYER_AVATAR_COLORS[hashStringIndex(key, PLAYER_AVATAR_COLORS.length)]
    : '#64748B';
  return {
    key,
    name: saved?.name || clean || 'Jugador',
    color: saved?.color || defaultColor,
    initials: (saved?.initials && saved.initials.trim()) ? saved.initials.trim().slice(0, 2).toUpperCase() : computeDefaultInitials(clean),
    isCustom: Boolean(saved),
  };
}

function getPlayerColor(name) {
  return getPlayerProfile(name).color;
}

const PLAYER_DARK_SURFACE_COLORS = {
  '#227554': '#34D399',
  '#d48a17': '#FBBF24',
  '#2563eb': '#60A5FA',
  '#d04e36': '#F87171',
  '#7c3aed': '#A78BFA',
  '#0d9488': '#2DD4BF',
  '#e11d48': '#FB7185',
  '#0284c7': '#38BDF8',
  '#a21caf': '#E879F9',
  '#65a30d': '#A3E635',
  '#ea580c': '#FB923C',
  '#475569': '#CBD5E1',
};

function getPlayerColorOnDark(name) {
  const hex = String(getPlayerColor(name) || '#34D399').trim().toLowerCase();
  if (PLAYER_DARK_SURFACE_COLORS[hex]) return PLAYER_DARK_SURFACE_COLORS[hex];
  const m = hex.match(/^#([0-9a-f]{6})$/);
  if (!m) return hex;
  const r = parseInt(m[1].slice(0, 2), 16);
  const g = parseInt(m[1].slice(2, 4), 16);
  const b = parseInt(m[1].slice(4, 6), 16);
  // Mezcla suave hacia blanco para garantizar contraste nítido sobre fondos oscuros
  const lift = (c) => Math.min(255, Math.round(c + (255 - c) * 0.42));
  return `rgb(${lift(r)}, ${lift(g)}, ${lift(b)})`;
}

function renderPlayerAvatarHtml(name, sizeClass = 'w-6 h-6 text-[10px]') {
  const prof = getPlayerProfile(name);
  return `<span class="${sizeClass} rounded-full inline-flex items-center justify-center font-display font-extrabold text-white shrink-0 shadow-2xs select-none" style="background:${prof.color};" title="${esc(prof.name)}">${esc(prof.initials)}</span>`;
}

function renameOrMergePlayer(oldName, newName) {
  const oldClean = String(oldName || '').trim();
  const newClean = String(newName || '').trim();
  const oldKey = oldClean.toLowerCase();
  const newKey = newClean.toLowerCase();
  if (!oldKey || !newKey) return { updatedMatches: 0 };
  if (oldClean === newClean) return { updatedMatches: 0 };

  const hasSheetsUrl = Boolean(syncState.apiUrl || getSavedSheetsUrl());
  let updatedMatches = 0;

  matchHistory.forEach((m) => {
    let changed = false;
    (m.players || []).forEach((p) => {
      if (normName(p.name) === oldKey) {
        p.name = newClean;
        changed = true;
      }
    });

    // Evita duplicados si fusionamos dos perfiles que ya estaban juntos en la misma partida
    if (changed && Array.isArray(m.players)) {
      const seenKeys = new Set();
      m.players = m.players.filter((p) => {
        const pk = normName(p.name);
        if (seenKeys.has(pk)) return false;
        seenKeys.add(pk);
        return true;
      });
    }

    if (changed && Array.isArray(m.meta?.breakdown)) {
      m.meta.breakdown.forEach((b) => {
        if (normName(b.jugador) === oldKey) b.jugador = newClean;
      });
    }

    if (changed) {
      // Reconstruye winnerLabel si contenía el nombre antiguo
      const g = getGameById(m.gameId);
      if (getMatchScoringType(m) !== 'coop') {
        const winners = (m.players || []).filter((p) => p.winner);
        if ((m.players || []).length === 1) {
          m.winnerLabel = `${m.players[0].name} (Solitario)`;
        } else if (winners.length > 1) {
          m.winnerLabel = `Empate: ${winners.map((w) => w.name).join(' y ')}`;
        } else if (winners.length === 1) {
          m.winnerLabel = winners[0].name;
        }
      }
      if (hasSheetsUrl) {
        if (m.source === 'sheets' && !m.pendingReplaceId) {
          m.pendingReplaceId = m.id;
        }
        m.pendingSync = true;
      }
      updatedMatches++;
    }
  });

  // Actualiza el borrador actual si contenía al jugador antiguo
  let draftChanged = false;
  (draft.players || []).forEach((p) => {
    if (normName(p.name) === oldKey) {
      p.name = newClean;
      draftChanged = true;
    }
  });
  if (draftChanged) saveDraftLocal();

  // Migra valoraciones, favoritos y marcas de tiempo de Ludoteca al nuevo perfil
  let gamesProfileMoved = false;
  const moveNow = Date.now();
  games.forEach((g) => {
    if (g.ratingsByPlayer && g.ratingsByPlayer[oldKey] !== undefined) {
      if (!g.ratingUpdatedAtByPlayer) g.ratingUpdatedAtByPlayer = {};
      if (g.ratingsByPlayer[newKey] === undefined) {
        g.ratingsByPlayer[newKey] = g.ratingsByPlayer[oldKey];
        g.ratingUpdatedAtByPlayer[newKey] = moveNow;
      }
      if (oldKey !== newKey) {
        delete g.ratingsByPlayer[oldKey];
        g.ratingUpdatedAtByPlayer[oldKey] = moveNow;
      }
      gamesProfileMoved = true;
    }
    if (g.favoritesByPlayer && g.favoritesByPlayer[oldKey]) {
      if (!g.favoriteUpdatedAtByPlayer) g.favoriteUpdatedAtByPlayer = {};
      g.favoritesByPlayer[newKey] = true;
      g.favoriteUpdatedAtByPlayer[newKey] = moveNow;
      if (oldKey !== newKey) {
        delete g.favoritesByPlayer[oldKey];
        g.favoriteUpdatedAtByPlayer[oldKey] = moveNow;
      }
      gamesProfileMoved = true;
    }
  });
  if (gamesProfileMoved) {
    migrateGameRatingsToProfiles(games);
    saveGamesLocal();
  }
  if (normName(uiState.shelfProfileKey) === oldKey) {
    setActiveShelfProfile(newKey);
  }

  // Actualiza filtros de Stats si apuntaban al nombre antiguo
  if (normName(uiState.statsPlayerA) === oldKey) uiState.statsPlayerA = newClean;
  if (normName(uiState.statsPlayerB) === oldKey) uiState.statsPlayerB = newClean;

  // Actualiza perfiles guardados
  const oldProf = playerProfiles[oldKey];
  const existingNewProf = playerProfiles[newKey];
  if (oldKey !== newKey) {
    if (oldProf && !existingNewProf) {
      playerProfiles[newKey] = {
        name: newClean,
        color: oldProf.color,
        initials: computeDefaultInitials(newClean),
      };
    } else if (existingNewProf) {
      existingNewProf.name = newClean;
    }
    delete playerProfiles[oldKey];
  } else if (oldProf) {
    oldProf.name = newClean;
  }

  // Actualiza lista de frecuentes
  frequentPlayers = frequentPlayers.map((n) => (normName(n) === oldKey ? newClean : n));
  savePlayerProfilesLocal();
  saveHistoryLocal();
  rebuildFrequentPlayersFromHistory();
  renderSyncBadge();
  return { updatedMatches };
}

function openPlayerProfilesModal() {
  const collectAllPlayers = () => {
    const statsMap = new Map();
    // Desde el historial
    matchHistory.forEach((m) => {
      (m.players || []).forEach((p) => {
        const clean = String(p.name || '').trim();
        const key = clean.toLowerCase();
        if (!key) return;
        if (!statsMap.has(key)) statsMap.set(key, { key, name: clean, plays: 0, wins: 0 });
        const st = statsMap.get(key);
        st.plays += 1;
        if (p.winner) st.wins += 1;
      });
    });
    // Desde perfiles guardados y frecuentes
    Object.values(playerProfiles).forEach((prof) => {
      const clean = String(prof.name || '').trim();
      const key = clean.toLowerCase();
      if (key && !statsMap.has(key)) statsMap.set(key, { key, name: clean, plays: 0, wins: 0 });
    });
    frequentPlayers.forEach((n) => {
      const clean = String(n || '').trim();
      const key = clean.toLowerCase();
      if (key && !statsMap.has(key)) statsMap.set(key, { key, name: clean, plays: 0, wins: 0 });
    });
    return Array.from(statsMap.values()).sort((a, b) => (b.plays - a.plays) || a.name.localeCompare(b.name, 'es'));
  };

  let editingKey = null;
  let tempColor = '';
  let tempInitials = '';
  let tempRename = '';
  let tempMergeTarget = '';

  const renderProfilesModal = () => {
    const list = collectAllPlayers();

    if (editingKey) {
      const item = list.find((x) => x.key === editingKey);
      if (!item) { editingKey = null; renderProfilesModal(); return; }
      const prof = getPlayerProfile(item.name);
      if (!tempColor) tempColor = prof.color;
      if (!tempInitials) tempInitials = prof.initials;
      if (!tempRename) tempRename = item.name;
      const otherPlayers = list.filter((x) => x.key !== editingKey);

      const bodyHtml = `
        <div class="space-y-4">
          <!-- Cabecera del perfil editado -->
          <div class="p-4 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 flex items-center gap-3.5">
            <span id="pp-preview-avatar" class="w-12 h-12 rounded-2xl inline-flex items-center justify-center font-display text-lg font-extrabold text-white shrink-0 shadow-sm" style="background:${tempColor};">
              ${esc(tempInitials || computeDefaultInitials(tempRename))}
            </span>
            <div class="min-w-0 flex-1">
              <div class="font-display text-base font-extrabold text-ink dark:text-white truncate">${esc(item.name)}</div>
              <div class="text-xs text-inkMuted dark:text-white/55 tabular-nums">${item.wins}V / ${item.plays}P registradas</div>
            </div>
            <button type="button" data-pp="back" class="btn-tap px-2.5 py-1.5 rounded-xl bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 text-xs font-bold text-inkMuted dark:text-white/75">
              ← Lista
            </button>
          </div>

          <!-- Color fijo -->
          <div class="space-y-2">
            <div class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Color fijo en gráficas y avatares</div>
            <div class="grid grid-cols-6 gap-2">
              ${PLAYER_AVATAR_COLORS.map((col) => `
                <button type="button" data-pp="pick-color" data-val="${col}"
                  class="btn-tap h-9 rounded-xl border-2 flex items-center justify-center ${tempColor === col ? 'border-ink dark:border-white scale-105 shadow-xs' : 'border-transparent'}"
                  style="background:${col};" aria-label="Color ${col}">
                  ${tempColor === col ? `<svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Iniciales y Nombre -->
          <div class="grid grid-cols-[1fr_92px] gap-2.5">
            <div>
              <label for="pp-rename-input" class="block text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 mb-1.5">Nombre</label>
              <input id="pp-rename-input" type="text" maxlength="24" value="${esc(tempRename)}"
                class="w-full h-10 input-pro rounded-xl px-3 text-xs font-bold text-ink dark:text-white outline-none" />
            </div>
            <div>
              <label for="pp-initials-input" class="block text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 mb-1.5">Iniciales</label>
              <input id="pp-initials-input" type="text" maxlength="2" value="${esc(tempInitials)}" placeholder="AB"
                class="w-full h-10 text-center uppercase input-pro rounded-xl px-2 text-xs font-extrabold text-ink dark:text-white outline-none" />
            </div>
          </div>

          ${otherPlayers.length > 0 ? `
            <!-- Fusionar duplicado -->
            <div class="p-3.5 rounded-2xl bg-amber-50/75 dark:bg-amber-500/10 border border-amber-400/35 space-y-2.5">
              <div>
                <div class="text-xs font-extrabold text-amber-950 dark:text-amber-200">Fusionar duplicado</div>
                <p class="text-[11px] text-amber-900/75 dark:text-amber-200/70 mt-0.5 leading-relaxed">
                  Si <strong>${esc(item.name)}</strong> es la misma persona que otro jugador, mueve todas sus partidas a ese perfil.
                </p>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${otherPlayers.map((op) => {
                  const sel = tempMergeTarget === op.name;
                  return `
                    <button type="button" data-pp="pick-merge" data-val="${esc(op.name)}"
                      class="btn-tap inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        sel
                          ? 'bg-amber-600 text-white border-transparent shadow-xs'
                          : 'bg-white dark:bg-surfaceDark text-ink dark:text-white border-amber-400/35'
                      }">
                      ${renderPlayerAvatarHtml(op.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
                      <span>${esc(op.name)}</span>
                      <span class="text-[10px] opacity-75 tabular-nums">${op.plays}P</span>
                    </button>
                  `;
                }).join('')}
              </div>
              ${tempMergeTarget ? `
                <button type="button" data-pp="do-merge"
                  class="btn-tap w-full h-9 px-3 rounded-xl bg-amber-600 text-white text-xs font-extrabold">
                  Confirmar fusión en ${esc(tempMergeTarget)}
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;

      openModal({
        title: 'Editar Perfil de Jugador',
        subtitle: 'Color constante en gráficas, iniciales y renombrado',
        bodyHtml,
        actions: [
          {
            label: 'Volver',
            keepOpen: true,
            onClick: () => {
              editingKey = null;
              tempColor = '';
              tempInitials = '';
              tempRename = '';
              tempMergeTarget = '';
              renderProfilesModal();
            },
          },
          {
            label: 'Guardar perfil',
            className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
            keepOpen: true,
            onClick: () => {
              const renInp = document.getElementById('pp-rename-input');
              const iniInp = document.getElementById('pp-initials-input');
              const finalName = (renInp?.value || tempRename || item.name).trim();
              if (!finalName) {
                showToast('Escribe un nombre válido', 'danger');
                return;
              }
              const finalInitials = (iniInp?.value || '').trim().slice(0, 2).toUpperCase() || computeDefaultInitials(finalName);

              let movedCount = 0;
              if (finalName !== item.name) {
                const res = renameOrMergePlayer(item.name, finalName);
                movedCount = res.updatedMatches;
              }
              const finalKey = finalName.toLowerCase();
              playerProfiles[finalKey] = {
                name: finalName,
                color: tempColor || getPlayerColor(finalName),
                initials: finalInitials,
                updatedAtMs: Date.now(),
              };
              savePlayerProfilesLocal();
              rebuildFrequentPlayersFromHistory();

              editingKey = null;
              tempColor = '';
              tempInitials = '';
              tempRename = '';
              tempMergeTarget = '';
              renderActiveTab();
              renderProfilesModal();
              showToast(
                movedCount > 0
                  ? `Perfil actualizado (${movedCount} ${movedCount === 1 ? 'partida actualizada' : 'partidas actualizadas'})`
                  : `Perfil de ${finalName} guardado`,
                'success'
              );
            },
          },
        ],
      });

      const bodyEl = document.getElementById('modal-body');
      const renInp = document.getElementById('pp-rename-input');
      const iniInp = document.getElementById('pp-initials-input');
      if (renInp) renInp.addEventListener('input', (e) => { tempRename = e.target.value; });
      if (iniInp) {
        iniInp.addEventListener('input', (e) => {
          tempInitials = e.target.value.toUpperCase();
          const prev = document.getElementById('pp-preview-avatar');
          if (prev) prev.textContent = tempInitials || computeDefaultInitials(tempRename);
        });
      }

      bodyEl.onclick = (e) => {
        const el = e.target.closest('[data-pp]');
        if (!el) return;
        const act = el.dataset.pp;
        if (act === 'back') {
          editingKey = null; tempColor = ''; tempInitials = ''; tempRename = ''; tempMergeTarget = '';
          renderProfilesModal();
        } else if (act === 'pick-color') {
          tempColor = el.dataset.val;
          renderProfilesModal();
        } else if (act === 'pick-merge') {
          tempMergeTarget = tempMergeTarget === el.dataset.val ? '' : el.dataset.val;
          renderProfilesModal();
        } else if (act === 'do-merge') {
          const target = (tempMergeTarget || '').trim();
          if (!target) {
            showToast('Elige el jugador destino para fusionar', 'neutral');
            return;
          }
          const res = renameOrMergePlayer(item.name, target);
          editingKey = null; tempColor = ''; tempInitials = ''; tempRename = ''; tempMergeTarget = '';
          renderActiveTab();
          renderProfilesModal();
          showToast(`Fusionado en ${target} (${res.updatedMatches} ${res.updatedMatches === 1 ? 'partida' : 'partidas'})`, 'success');
        }
      };
      return;
    }

    // Vista principal: lista de perfiles + añadir jugador fijo
    const bodyHtml = `
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <input id="pp-new-player-input" type="text" maxlength="24" placeholder="Nuevo jugador habitual..."
            class="flex-1 h-10 input-pro rounded-xl px-3 text-xs font-semibold text-ink dark:text-white outline-none" />
          <button type="button" data-pp="create-player"
            class="btn-tap h-10 px-3.5 rounded-xl bg-pine dark:bg-emeraldBrand text-white text-xs font-extrabold shrink-0">
            + Añadir
          </button>
        </div>

        ${list.length > 0 ? `
          <div class="space-y-2">
            ${list.map((p) => {
              const prof = getPlayerProfile(p.name);
              return `
                <button type="button" data-pp="edit-player" data-key="${esc(p.key)}"
                  class="btn-tap w-full p-3 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 hover:border-emeraldBrand flex items-center justify-between gap-3 text-left">
                  <div class="flex items-center gap-3 min-w-0">
                    <span class="w-10 h-10 rounded-xl inline-flex items-center justify-center font-display text-sm font-extrabold text-white shrink-0 shadow-xs" style="background:${prof.color};">
                      ${esc(prof.initials)}
                    </span>
                    <div class="min-w-0">
                      <div class="text-sm font-extrabold text-ink dark:text-white truncate">${esc(p.name)}</div>
                      <div class="text-[11px] text-inkMuted dark:text-white/55 tabular-nums">${p.wins}V / ${p.plays}P · Toca para color, iniciales o fusionar</div>
                    </div>
                  </div>
                  <svg class="w-4 h-4 text-inkMuted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="p-6 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-dashed border-[#DFD8CB] dark:border-white/15 text-center text-xs text-inkMuted dark:text-white/55">
            Añade tus jugadores habituales arriba o registra tu primera partida para personalizar colores e iniciales.
          </div>
        `}
      </div>
    `;

    openModal({
      title: 'Perfiles de Jugadores',
      subtitle: 'Color constante en gráficas, iniciales y fusión de duplicados',
      bodyHtml,
      actions: [{ label: 'Cerrar' }],
    });

    const bodyEl = document.getElementById('modal-body');
    const newInp = document.getElementById('pp-new-player-input');
    const createNewProfile = () => {
      const val = (newInp?.value || '').trim();
      if (!val) return;
      const key = val.toLowerCase();
      if (!playerProfiles[key]) {
        playerProfiles[key] = {
          name: val,
          color: getPlayerColor(val),
          initials: computeDefaultInitials(val),
          updatedAtMs: Date.now(),
        };
        savePlayerProfilesLocal();
      }
      if (!frequentPlayers.some((x) => normName(x) === key)) {
        frequentPlayers.push(val);
        try { localStorage.setItem(KEYS.PLAYERS, JSON.stringify(frequentPlayers)); } catch (e) {}
      }
      renderActiveTab();
      renderProfilesModal();
      showToast(`Jugador ${val} añadido`, 'success');
    };
    if (newInp) {
      newInp.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') { ev.preventDefault(); createNewProfile(); }
      });
    }

    bodyEl.onclick = (e) => {
      const el = e.target.closest('[data-pp]');
      if (!el) return;
      const act = el.dataset.pp;
      if (act === 'create-player') {
        createNewProfile();
      } else if (act === 'edit-player') {
        editingKey = el.dataset.key;
        tempColor = ''; tempInitials = ''; tempRename = ''; tempMergeTarget = '';
        renderProfilesModal();
      }
    };
  };

  renderProfilesModal();
}

function savePendingDeletesLocal() {
  try { localStorage.setItem(KEYS.PENDING_DELETES, JSON.stringify(pendingDeletes)); } catch (e) {}
}

function saveTimerLocal() {
  try { localStorage.setItem(KEYS.TIMER, JSON.stringify(matchTimer)); } catch (e) {}
}

function saveTableToolsLocal() {
  try {
    localStorage.setItem(KEYS.TABLE_TOOLS, JSON.stringify({
      roundNum: tableToolsState.roundNum,
      turnIdx: tableToolsState.turnIdx,
      turnPresetSec: tableToolsState.turnPresetSec,
      turnSound: tableToolsState.turnSound,
    }));
  } catch (e) {}
}

function playTurnDoneAlert() {
  try {
    if (navigator.vibrate) navigator.vibrate([180, 90, 220]);
  } catch (e) {}
  if (!tableToolsState.turnSound) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);
      gain.gain.setValueAtTime(0.001, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.16, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.24);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.26);
    });
  } catch (e) {}
}

function matchChronoKey(m) {
  const iso = normalizeDateToISO(m?.date, m?.createdAtMs);
  return `${iso}|${String(Number(m?.createdAtMs) || 0).padStart(15, '0')}`;
}

function getLatestPlayDateISO(gameId) {
  let latestIso = '';
  matchHistory.forEach((m) => {
    if (m.gameId !== gameId) return;
    const iso = normalizeDateToISO(m.date, m.createdAtMs);
    if (iso && (!latestIso || iso > latestIso)) latestIso = iso;
  });
  return latestIso || null;
}

function getDaysSinceLastPlay(gameId) {
  const latestIso = getLatestPlayDateISO(gameId);
  if (!latestIso) return null;
  const parts = latestIso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!parts) return 0;
  const matchMidnight = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3])).getTime();
  const now = new Date();
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.max(0, Math.round((todayMidnight - matchMidnight) / 86400000));
}

function formatDustyLabel(days) {
  if (days === null) return 'Sin estrenar';
  if (days === 0) return 'Jugado hoy';
  if (days === 1) return 'Hace 1 día';
  if (days < 30) return `Hace ${days} días`;
  const months = Math.floor(days / 30);
  return months === 1 ? 'Hace 1 mes' : `Hace ${months} meses`;
}

function gameSupportsModeType(g, type) {
  if (type === 'all') return true;
  const pmLower = Array.isArray(g.playModes) ? g.playModes.map((x) => x.toLowerCase()) : [];
  const hasSolo = (Number(g.minPlayers) || 2) <= 1 || pmLower.some((p) => p.includes('solitario') || p.includes('automa'));
  const hasCoop = g.scoringType === 'coop' || pmLower.some((p) => p.includes('coop'));
  const hasComp = g.scoringType !== 'coop' || g.extraType === 'last_bullet';
  if (type === 'solo') return hasSolo;
  if (type === 'coop') return hasCoop;
  if (type === 'competitive') return hasComp;
  return true;
}

function getActiveTablePlayerPool() {
  const draftNames = draft.players.map((p) => p.name.trim()).filter(Boolean);
  const base = draftNames.length > 0 ? draftNames : frequentPlayers.slice(0, 6);
  const merged = [...new Set([...base, ...tableToolsState.starterCustomPlayers])].filter(Boolean);
  return merged;
}

function toggleFavoriteGame(gameId, profileKey = null) {
  const g = games.find((x) => x.id === gameId);
  if (!g) return;
  const prof = profileKey
    ? (getShelfProfileCandidates().find((c) => c.key === normName(profileKey)) || getActiveShelfProfile())
    : getActiveShelfProfile();
  const next = !isGameFavoriteFor(g, prof.key);
  setGameFavoriteFor(g, next, prof.key);
  saveGamesLocal();
  renderActiveTab();
  showToast(
    next ? `★ ${g.name} añadido a favoritos (${prof.name})` : `${g.name} quitado de favoritos (${prof.name})`,
    'neutral'
  );
}

function getPendingSyncCount() {
  const unsyncedMatches = matchHistory.filter((m) => m.pendingSync).length;
  return unsyncedMatches + pendingDeletes.length;
}

function getTimerElapsedMs() {
  const base = Number(matchTimer.elapsedMs) || 0;
  if (matchTimer.running && matchTimer.startedAtMs) {
    return base + Math.max(0, Date.now() - matchTimer.startedAtMs);
  }
  return base;
}

function formatTimerClock(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return hrs > 0 ? `${hrs}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
}

function updateTimerDisplays() {
  const ms = getTimerElapsedMs();
  const formatted = formatTimerClock(ms);
  const minsRounded = Math.max(1, Math.round(ms / 60000));

  const liveEl = document.getElementById('live-timer-display');
  if (liveEl) liveEl.textContent = formatted;

  const applyBtn = document.getElementById('btn-apply-timer');
  if (applyBtn) applyBtn.textContent = `Aplicar (${minsRounded} min)`;

  const hdrBtn = document.getElementById('btn-header-timer');
  const hdrTxt = document.getElementById('header-timer-text');
  if (hdrBtn && hdrTxt) {
    hdrTxt.textContent = formatted;
    hdrBtn.classList.toggle('hidden', !matchTimer.running);
  }
}

function ensureTimerTick() {
  updateTimerDisplays();
  if (matchTimer.running && !timerIntervalId) {
    timerIntervalId = setInterval(updateTimerDisplays, 1000);
  } else if (!matchTimer.running && timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function toggleMatchTimer() {
  if (matchTimer.running) {
    matchTimer.elapsedMs = getTimerElapsedMs();
    matchTimer.running = false;
    matchTimer.startedAtMs = null;
  } else {
    matchTimer.running = true;
    matchTimer.startedAtMs = Date.now();
    matchTimer.gameId = draft.gameId;
    uiState.timerOpen = true;
  }
  saveTimerLocal();
  ensureTimerTick();
  if (uiState.activeTab === 'log') renderLogTab();
}

function resetMatchTimer() {
  matchTimer = { running: false, startedAtMs: null, elapsedMs: 0, gameId: '' };
  saveTimerLocal();
  ensureTimerTick();
  if (uiState.activeTab === 'log') renderLogTab();
}

function applyMatchTimerToDuration() {
  const ms = getTimerElapsedMs();
  if (ms < 5000) {
    showToast('Inicia el cronómetro primero', 'neutral');
    return;
  }
  const mins = Math.max(1, Math.min(600, Math.round(ms / 60000)));
  draft.duration = mins;
  matchTimer = { running: false, startedAtMs: null, elapsedMs: 0, gameId: '' };
  uiState.timerOpen = false;
  saveDraftLocal();
  saveTimerLocal();
  ensureTimerTick();
  renderLogTab();
  showToast(`Duración fijada en ${mins} min`, 'success');
}

function rebuildFrequentPlayersFromHistory() {
  const counts = {};
  frequentPlayers.forEach((n) => {
    const clean = String(n || '').trim();
    if (clean) counts[clean] = (counts[clean] || 0);
  });
  matchHistory.forEach((m) => {
    (m.players || []).forEach((p) => {
      const clean = String(p.name || '').trim();
      if (clean) counts[clean] = (counts[clean] || 0) + 1;
    });
  });
  frequentPlayers = Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, 14);
  try { localStorage.setItem(KEYS.PLAYERS, JSON.stringify(frequentPlayers)); } catch (e) {}
}

// =========================================================================
// 8. CONEXIÓN A GOOGLE SHEETS (APPS SCRIPT CON PIN OPCIONAL)
// =========================================================================
function normalizeExecUrl(url) {
  if (typeof url !== 'string') return '';
  let t = url.trim();
  if (!t) return '';
  // Corrige enlaces multi-cuenta de Google (/macros/u/0/s/... -> /macros/s/...) que fallan por CORS en Safari/iOS
  t = t.replace(/\/macros\/u\/\d+\/s\//, '/macros/s/');
  // Quita query params sobrantes si el usuario pegó una URL de prueba
  const execIdx = t.indexOf('/exec');
  if (execIdx !== -1) {
    t = t.slice(0, execIdx + 5);
  }
  return t;
}

function isValidExecUrl(url) {
  const t = normalizeExecUrl(url);
  return t.startsWith('https://script.google.com/') && !t.includes('PEGA_AQUI') && t.endsWith('/exec');
}

function getSavedSheetsUrl() {
  try {
    const s = localStorage.getItem(KEYS.SHEETS_URL);
    if (isValidExecUrl(s)) return normalizeExecUrl(s);
  } catch (e) {}
  if (isValidExecUrl(GOOGLE_SHEETS_API_URL)) return normalizeExecUrl(GOOGLE_SHEETS_API_URL);
  return '';
}

function getSavedPin() {
  try { return (localStorage.getItem(KEYS.SHEETS_PIN) || '').trim(); } catch (e) { return ''; }
}

async function fetchSheetsJson(url, options = {}) {
  let res;
  try {
    res = await fetch(url, { redirect: 'follow', ...options });
  } catch (netErr) {
    const raw = String(netErr?.message || '');
    if (/load failed|failed to fetch|networkerror/i.test(raw)) {
      throw new Error('Google bloqueó la conexión (Load failed). En Apps Script ve a Gestionar implementaciones → Editar y asegúrate de tener "Ejecutar como: Yo" y "Quién tiene acceso: Cualquier usuario".');
    }
    throw netErr;
  }
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error('Google no devolvió JSON (posible pantalla de inicio de sesión o error en Apps Script). Verifica que esté en "Cualquier usuario".');
  }
  if (!res.ok || data.ok === false) {
    throw new Error(data.error || `Error HTTP ${res.status}`);
  }
  return data;
}

function groupSheetRows(rows) {
  const map = new Map();
  rows.forEach((row) => {
    const id = String(row.partidaId || '').trim();
    if (!id) return;

    let meta = {};
    if (row.metaJson) {
      try { meta = JSON.parse(row.metaJson); } catch (e) {}
    }

    if (!map.has(id)) {
      map.set(id, {
        id,
        source: 'sheets',
        date: normalizeDateToISO(row.fecha, Number(row.createdAtMs) || null),
        createdAtMs: Number(row.createdAtMs) || Date.now(),
        gameId: String(row.juegoId || 'custom'),
        gameName: String(row.juego || 'Juego'),
        scoringType: String(row.modo || 'points'),
        duration: Number(row.duracionMin) || 0,
        extraLabel: String(row.detalleExtra || ''),
        winnerLabel: String(row.ganador || ''),
        topScore: row.mejorPuntuacion !== '' && row.mejorPuntuacion !== undefined ? Number(row.mejorPuntuacion) : null,
        notes: String(row.notas || ''),
        meta,
        players: [],
      });
    }

    const m = map.get(id);
    m.players.push({
      name: String(row.jugador || 'Jugador'),
      rank: Number(row.posicion) || (m.players.length + 1),
      score: row.puntos !== '' && row.puntos !== undefined && row.puntos !== null ? Number(row.puntos) : null,
      winner: Number(row.posicion) === 1,
      tag: String(row.datoJugador || ''),
    });
  });

  const list = Array.from(map.values());
  list.forEach((m) => {
    m.players.sort((a, b) => a.rank - b.rank);
    // Asegura que juegos personalizados existentes en Sheets aparezcan en la ludoteca (salvo si el usuario los borró)
    if (m.gameId && !games.some((g) => g.id === m.gameId) && !deletedGameIds.includes(m.gameId)) {
      games.push({
        id: m.gameId,
        name: m.gameName,
        color: '#475569',
        color2: '#1E293B',
        icon: 'dice',
        scoringType: m.scoringType || 'points',
        minPlayers: 1,
        maxPlayers: 6,
        defaultDuration: m.duration || 30,
        extraType: 'none',
        tagline: 'Añadido desde Sheets',
      });
      saveGamesLocal();
    }
  });

  list.sort((a, b) => matchChronoKey(b).localeCompare(matchChronoKey(a)));
  return list;
}

function activateLocalMode(reason = '') {
  syncState.mode = 'local';
  syncState.connected = false;
  syncState.isLoading = false;
  syncState.errorMessage = reason;
  renderSyncBadge();
  updateNavBadge();
  renderActiveTab();
}

async function flushOfflineQueue() {
  const url = syncState.apiUrl || getSavedSheetsUrl();
  const pin = syncState.pin || getSavedPin();
  if (!url) return { uploaded: 0, deleted: 0, remaining: getPendingSyncCount() };

  let deleted = 0;
  let uploaded = 0;

  // 1) Procesa borrados en cola (partidas eliminadas sin conexión)
  if (pendingDeletes.length > 0) {
    const stillPendingDeletes = [];
    for (let i = 0; i < pendingDeletes.length; i++) {
      const delId = pendingDeletes[i];
      try {
        await fetchSheetsJson(url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'delete', pin: pin || '', partidaId: delId }),
        });
        deleted++;
      } catch (err) {
        stillPendingDeletes.push(...pendingDeletes.slice(i));
        pendingDeletes = stillPendingDeletes;
        savePendingDeletesLocal();
        throw err;
      }
    }
    pendingDeletes = [];
    savePendingDeletesLocal();
  }

  // 2) Sube partidas pendientes (nuevas o editadas offline) en orden cronológico
  const pendingMatches = matchHistory
    .filter((m) => m.pendingSync)
    .sort((a, b) => (a.createdAtMs || 0) - (b.createdAtMs || 0));

  for (const m of pendingMatches) {
    if (m.pendingReplaceId) {
      await fetchSheetsJson(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'delete', pin: pin || '', partidaId: m.pendingReplaceId }),
      });
    }
    const cleanPayload = { ...m };
    delete cleanPayload.pendingSync;
    delete cleanPayload.pendingReplaceId;
    cleanPayload.source = 'sheets';

    const res = await fetchSheetsJson(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'save', pin: pin || '', match: cleanPayload }),
    });

    m.id = String(res.partidaId || m.id);
    m.source = 'sheets';
    delete m.pendingSync;
    delete m.pendingReplaceId;
    saveHistoryLocal();
    uploaded++;
  }

  return { uploaded, deleted, remaining: getPendingSyncCount() };
}

function mergeRemoteCatalog(remoteCat, { markDirtyIfLocalAhead = true } = {}) {
  if (!remoteCat || typeof remoteCat !== 'object') return false;
  syncState.catalogSupported = true;
  const remoteUpdatedAt = Number(remoteCat.updatedAtMs) || 0;
  const localById = new Map(games.map((g) => [g.id, g]));
  const remoteGames = Array.isArray(remoteCat.games) ? remoteCat.games : [];
  migrateGameRatingsToProfiles(remoteGames);

  const localIsDirty = Boolean(syncState.catalogDirty);
  let changed = false;
  let needsRePush = localIsDirty;

  // Fusiona juegos borrados (si local tiene borrados nuevos pendientes, se combinan)
  const remoteDeleted = Array.isArray(remoteCat.deletedGameIds) ? remoteCat.deletedGameIds.map(String) : [];
  if (remoteDeleted.length > 0 || !localIsDirty) {
    const mergedDeleted = localIsDirty
      ? [...new Set([...deletedGameIds, ...remoteDeleted])]
      : [...new Set(remoteDeleted)];
    if (JSON.stringify(mergedDeleted) !== JSON.stringify(deletedGameIds)) {
      deletedGameIds = mergedDeleted;
      saveDeletedGamesLocal(false);
      changed = true;
    }
  }

  if (remoteGames.length > 0) {
    const mergedMap = new Map();
    const deletedSet = new Set(deletedGameIds);

    remoteGames.forEach((rg) => {
      if (!rg || !rg.id || deletedSet.has(rg.id)) return;
      const loc = localById.get(rg.id);
      if (loc) {
        const res = mergeSingleGameRecords(loc, rg, localIsDirty);
        mergedMap.set(rg.id, res.game);
        if (res.localWonAny && markDirtyIfLocalAhead) needsRePush = true;
      } else {
        mergedMap.set(rg.id, rg);
      }
    });

    // Conserva juegos personalizados creados localmente en este móvil que aún no estén en Sheets
    if (localIsDirty) {
      games.forEach((loc) => {
        if (loc && loc.id && !mergedMap.has(loc.id) && !deletedSet.has(loc.id)) {
          mergedMap.set(loc.id, loc);
          needsRePush = true;
        }
      });
    }

    // Conserva juegos del catálogo base si no fueron explícitamente borrados
    DEFAULT_GAMES.forEach((def) => {
      if (!mergedMap.has(def.id) && !deletedSet.has(def.id)) {
        const loc = localById.get(def.id);
        const copy = loc ? JSON.parse(JSON.stringify(loc)) : JSON.parse(JSON.stringify(def));
        if (!copy.rulesNotes && DEFAULT_RULES_NOTES[def.id]) copy.rulesNotes = DEFAULT_RULES_NOTES[def.id];
        mergedMap.set(def.id, copy);
      }
    });

    games = Array.from(mergedMap.values());
    migrateGameRatingsToProfiles(games);
    const remotePaletteMigrated = migrateGamePaletteColors(games);
    if (remotePaletteMigrated && markDirtyIfLocalAhead) needsRePush = true;
    saveGamesLocal(false);
    changed = true;
  }

  // Fusiona perfiles de jugadores por clave respetando el más reciente
  if (remoteCat.playerProfiles && typeof remoteCat.playerProfiles === 'object' && !Array.isArray(remoteCat.playerProfiles)) {
    const nextProfiles = { ...playerProfiles };
    Object.entries(remoteCat.playerProfiles).forEach(([rawK, rp]) => {
      const k = normName(rawK);
      if (!k || !rp) return;
      const lp = nextProfiles[k];
      const lTs = Number(lp?.updatedAtMs) || 0;
      const rTs = Number(rp?.updatedAtMs) || 0;
      if (!lp || rTs >= lTs) {
        nextProfiles[k] = { ...lp, ...rp };
      } else if (markDirtyIfLocalAhead) {
        needsRePush = true;
      }
    });
    playerProfiles = nextProfiles;
    savePlayerProfilesLocal(false);
    changed = true;
  }

  if (needsRePush && markDirtyIfLocalAhead) {
    syncState.catalogDirty = true;
    syncState.catalogUpdatedAtMs = Math.max(syncState.catalogUpdatedAtMs || 0, remoteUpdatedAt, Date.now());
    saveCatalogMetaLocal();
  } else if (remoteUpdatedAt > 0 && !syncState.catalogDirty) {
    syncState.catalogUpdatedAtMs = remoteUpdatedAt;
    syncState.catalogSyncedAtMs = Date.now();
    syncState.catalogDirty = false;
    saveCatalogMetaLocal();
  }
  return changed;
}

let catalogPushInFlight = false;
let catalogPushQueued = false;
async function pushCatalogToSheets({ silent = false, skipPreMerge = false } = {}) {
  const url = syncState.apiUrl || getSavedSheetsUrl();
  const pin = syncState.pin || getSavedPin();
  if (!url) return false;
  if (catalogPushInFlight) {
    catalogPushQueued = true;
    return false;
  }

  catalogPushInFlight = true;
  catalogPushQueued = false;
  const sentUpdatedAtMs = syncState.catalogUpdatedAtMs || Date.now();
  try {
    // Si el Apps Script aún es v2.0 (sin fusión atómica en servidor), descarga y fusiona por perfil antes de subir
    if (!skipPreMerge && syncState.serverVersion > 0 && syncState.serverVersion < 2.1) {
      try {
        const sep = url.includes('?') ? '&' : '?';
        const pinParam = pin ? `&pin=${encodeURIComponent(pin)}` : '';
        const latest = await fetchSheetsJson(`${url}${sep}t=${Date.now()}${pinParam}`);
        if (latest && latest.catalog) {
          mergeRemoteCatalog(latest.catalog, { markDirtyIfLocalAhead: false });
        }
      } catch (e) {}
    }

    const payload = {
      action: 'saveCatalog',
      pin: pin || '',
      catalog: {
        games,
        deletedGameIds,
        playerProfiles,
        updatedAtMs: sentUpdatedAtMs,
      },
    };
    const res = await fetchSheetsJson(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    if (res && res.catalogSaved) {
      syncState.catalogSupported = true;
      if (res.version) syncState.serverVersion = Number(res.version) || syncState.serverVersion;
      const editedWhileInFlight = (syncState.catalogUpdatedAtMs || 0) > sentUpdatedAtMs;
      if (!editedWhileInFlight) {
        syncState.catalogDirty = false;
        if (res.updatedAtMs) syncState.catalogUpdatedAtMs = Number(res.updatedAtMs);
      } else {
        syncState.catalogDirty = true;
        catalogPushQueued = true;
      }
      syncState.catalogSyncedAtMs = Date.now();
      // Si Apps Script v2.1 devolvió el catálogo ya fusionado atómicamente, fusionamos sin pisar ediciones hechas durante la subida
      if (res.catalog) {
        mergeRemoteCatalog(res.catalog, { markDirtyIfLocalAhead: editedWhileInFlight });
        const modalOpenNow = !document.getElementById('modal-backdrop')?.classList.contains('hidden');
        if (uiState.activeTab === 'shelf' && !modalOpenNow && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          renderShelfTab();
        }
      }
      saveCatalogMetaLocal();
      if (!silent) showToast('Catálogo y perfiles sincronizados con Sheets', 'success');
      return true;
    } else {
      syncState.catalogSupported = false;
      if (!silent) showToast('Actualiza tu Apps Script a v2.1 para sincronizar el catálogo', 'neutral');
      return false;
    }
  } catch (err) {
    const msg = String(err?.message || '').toLowerCase();
    if (msg.includes('acción') || msg.includes('action') || msg.includes('no soportada') || msg.includes('desconocida')) {
      syncState.catalogSupported = false;
      if (!silent) showToast('Actualiza tu Apps Script a v2.1 para sincronizar el catálogo', 'neutral');
      return false;
    }
    if (!silent) showToast('No se pudo subir el catálogo a Sheets', 'danger');
    return false;
  } finally {
    catalogPushInFlight = false;
    if (catalogPushQueued || syncState.catalogDirty) {
      catalogPushQueued = false;
      clearTimeout(catalogPushTimerId);
      catalogPushTimerId = setTimeout(() => {
        pushCatalogToSheets({ silent: true });
      }, 350);
    }
  }
}

function getAppsScriptV2Template() {
  const currentPin = syncState.pin || getSavedPin() || '';
  return `// =========================================================================
// LUDOTECA — GOOGLE APPS SCRIPT v2.1 (FUSIÓN SEGURA MULTI-MÓVIL POR PERFIL)
// =========================================================================
const SECRET_PIN = "${currentPin.replace(/"/g, '\\"')}";
const SHEET_MATCHES = "Partidas";
const SHEET_STATS   = "Estadísticas";
const SHEET_GAMES   = "Ludoteca_Juegos";
const SHEET_PLAYERS = "Ludoteca_Perfiles";

const MATCH_HEADERS = [
  "partidaId","fecha","createdAtMs","juegoId","juego","modo","duracionMin",
  "detalleExtra","ganador","mejorPuntuacion","posicion","jugador","puntos",
  "datoJugador","notas","metaJson"
];

const GAME_HEADERS = [
  "id","nombre","color","color2","icono","modoPuntuacion","minJugadores",
  "maxJugadores","duracionMin","favorito","valoracion","tagline","reglas","configJson"
];

const PLAYER_HEADERS = ["clave","nombre","color","iniciales"];

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function checkPin(pin) {
  if (!SECRET_PIN) return true;
  return String(pin || "").trim() === String(SECRET_PIN).trim();
}

function normalizeDisplayDate(raw) {
  var s = String(raw || "").trim();
  var iso = s.match(/^(\\d{4})-(\\d{1,2})-(\\d{1,2})/);
  if (iso) {
    return iso[1] + "-" + ("0" + iso[2]).slice(-2) + "-" + ("0" + iso[3]).slice(-2);
  }
  var es = s.match(/^(\\d{1,2})\\/(\\d{1,2})\\/(\\d{4})/);
  if (es) {
    return es[3] + "-" + ("0" + es[2]).slice(-2) + "-" + ("0" + es[1]).slice(-2);
  }
  var months = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  var txt = s.toLowerCase().match(/^(\\d{1,2})\\s+([a-z]{3})\\.?\\s+(\\d{4})/);
  if (txt) {
    var mi = months.indexOf(txt[2]);
    if (mi >= 0) {
      return txt[3] + "-" + ("0" + (mi + 1)).slice(-2) + "-" + ("0" + txt[1]).slice(-2);
    }
  }
  return s.slice(0, 10);
}

function ensureSheet(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sh.setFrozenRows(1);
  } else if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
    sh.setFrozenRows(1);
  }
  return sh;
}

function readCatalog(ss) {
  const props = PropertiesService.getScriptProperties();
  const gamesSh = ss.getSheetByName(SHEET_GAMES);
  const playersSh = ss.getSheetByName(SHEET_PLAYERS);
  const gamesList = [];
  const profiles = {};

  if (gamesSh && gamesSh.getLastRow() > 1) {
    const gCols = Math.max(1, Math.min(gamesSh.getLastColumn() || GAME_HEADERS.length, GAME_HEADERS.length));
    const vals = gamesSh.getRange(2, 1, gamesSh.getLastRow() - 1, gCols).getValues();
    vals.forEach(function(r) {
      if (!r[0]) return;
      var obj = null;
      if (r[13]) { try { obj = JSON.parse(r[13]); } catch (e) {} }
      if (!obj || typeof obj !== "object") {
        obj = {
          id: String(r[0]), name: String(r[1]), color: String(r[2] || "#475569"),
          color2: String(r[3] || "#1E293B"), icon: String(r[4] || "dice"),
          scoringType: String(r[5] || "points"), minPlayers: Number(r[6]) || 1,
          maxPlayers: Number(r[7]) || 6, defaultDuration: Number(r[8]) || 30,
          favorite: r[9] === true || String(r[9]) === "Sí",
          rating: r[10] ? Number(String(r[10]).replace(',', '.')) : undefined,
          tagline: String(r[11] || ""), rulesNotes: String(r[12] || "")
        };
      }
      gamesList.push(obj);
    });
  }

  if (playersSh && playersSh.getLastRow() > 1) {
    const pCols = Math.max(1, Math.min(playersSh.getLastColumn() || PLAYER_HEADERS.length, PLAYER_HEADERS.length));
    const pVals = playersSh.getRange(2, 1, playersSh.getLastRow() - 1, pCols).getValues();
    pVals.forEach(function(r) {
      if (!r[0]) return;
      profiles[String(r[0]).toLowerCase()] = {
        name: String(r[1] || r[0]),
        color: String(r[2] || "#227554"),
        initials: String(r[3] || "")
      };
    });
  }

  var deletedIds = [];
  try { deletedIds = JSON.parse(props.getProperty("LUDOTECA_DELETED_GAMES") || "[]"); } catch (e) {}
  var updatedAtMs = Number(props.getProperty("LUDOTECA_CATALOG_UPDATED_MS") || "0");

  return { games: gamesList, deletedGameIds: deletedIds, playerProfiles: profiles, updatedAtMs: updatedAtMs };
}

function doGet(e) {
  try {
    const pin = (e && e.parameter && e.parameter.pin) || "";
    if (!checkPin(pin)) return jsonOut({ ok: false, error: "PIN incorrecto" });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ensureSheet(ss, SHEET_MATCHES, MATCH_HEADERS);
    const lastRow = sh.getLastRow();
    const rows = [];

    if (lastRow > 1) {
      const colCount = Math.max(1, Math.min(sh.getLastColumn() || MATCH_HEADERS.length, MATCH_HEADERS.length));
      const vals = sh.getRange(2, 1, lastRow - 1, colCount).getValues();
      const dateTexts = sh.getRange(2, 2, lastRow - 1, 1).getDisplayValues();
      vals.forEach(function(r, rowIdx) {
        if (!r[0]) return;
        var obj = {};
        MATCH_HEADERS.forEach(function(h, idx) {
          if (h === "fecha") {
            obj[h] = normalizeDisplayDate(dateTexts[rowIdx][0]);
          } else {
            obj[h] = idx < r.length ? r[idx] : "";
          }
        });
        rows.push(obj);
      });
    }

    return jsonOut({ ok: true, version: 2.1, rows: rows, catalog: readCatalog(ss) });
  } catch (err) {
    return jsonOut({ ok: false, error: "Error leyendo Sheets: " + (err && err.message ? err.message : String(err)) });
  }
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {
    return jsonOut({ ok: false, error: "JSON inválido" });
  }
  if (!checkPin(body.pin)) return jsonOut({ ok: false, error: "PIN incorrecto" });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) {
    return jsonOut({ ok: false, error: "Servidor ocupado. Reintenta en unos segundos." });
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const action = body.action || "save";

    if (action === "saveCatalog") {
      const cat = body.catalog || {};
      const gamesSh = ensureSheet(ss, SHEET_GAMES, GAME_HEADERS);
      const playersSh = ensureSheet(ss, SHEET_PLAYERS, PLAYER_HEADERS);
      const existing = readCatalog(ss);

      // Fusión segura en servidor por perfil (Sebas, Raquel, etc.) bajo LockService
      const existingById = {};
      (existing.games || []).forEach(function(eg) { if (eg && eg.id) existingById[eg.id] = eg; });

      const mergePerProfile = function(srvG, incG) {
        if (!srvG) return incG;
        var out = JSON.parse(JSON.stringify((Number(incG.metaUpdatedAt) || 0) >= (Number(srvG.metaUpdatedAt) || 0) ? incG : srvG));
        var sRTs = Number(srvG.rulesUpdatedAt) || 0;
        var iRTs = Number(incG.rulesUpdatedAt) || 0;
        if (sRTs > iRTs) { out.rulesNotes = srvG.rulesNotes; out.rulesUpdatedAt = sRTs; }
        else if (iRTs > sRTs) { out.rulesNotes = incG.rulesNotes; out.rulesUpdatedAt = iRTs; }

        var mRat = {}, mRatTs = {};
        var rKeys = {};
        [srvG.ratingsByPlayer, incG.ratingsByPlayer, srvG.ratingUpdatedAtByPlayer, incG.ratingUpdatedAtByPlayer].forEach(function(o) {
          if (o && typeof o === "object") Object.keys(o).forEach(function(k) { rKeys[String(k).toLowerCase()] = true; });
        });
        Object.keys(rKeys).forEach(function(k) {
          var sTs = Number(srvG.ratingUpdatedAtByPlayer && srvG.ratingUpdatedAtByPlayer[k]) || 0;
          var iTs = Number(incG.ratingUpdatedAtByPlayer && incG.ratingUpdatedAtByPlayer[k]) || 0;
          var sV = Number(srvG.ratingsByPlayer && srvG.ratingsByPlayer[k]) || 0;
          var iV = Number(incG.ratingsByPlayer && incG.ratingsByPlayer[k]) || 0;
          var wV = 0, wTs = 0;
          if (iTs > sTs) { wV = iV; wTs = iTs; }
          else if (sTs > iTs) { wV = sV; wTs = sTs; }
          else { wV = iV || sV; }
          if (wV > 0) mRat[k] = wV;
          if (wTs > 0) mRatTs[k] = wTs;
        });

        var mFav = {}, mFavTs = {};
        var fKeys = {};
        [srvG.favoritesByPlayer, incG.favoritesByPlayer, srvG.favoriteUpdatedAtByPlayer, incG.favoriteUpdatedAtByPlayer].forEach(function(o) {
          if (o && typeof o === "object") Object.keys(o).forEach(function(k) { fKeys[String(k).toLowerCase()] = true; });
        });
        Object.keys(fKeys).forEach(function(k) {
          var sTs = Number(srvG.favoriteUpdatedAtByPlayer && srvG.favoriteUpdatedAtByPlayer[k]) || 0;
          var iTs = Number(incG.favoriteUpdatedAtByPlayer && incG.favoriteUpdatedAtByPlayer[k]) || 0;
          var sF = Boolean(srvG.favoritesByPlayer && srvG.favoritesByPlayer[k]);
          var iF = Boolean(incG.favoritesByPlayer && incG.favoritesByPlayer[k]);
          var wF = false, wTs = 0;
          if (iTs > sTs) { wF = iF; wTs = iTs; }
          else if (sTs > iTs) { wF = sF; wTs = sTs; }
          else { wF = iF || sF; }
          if (wF) mFav[k] = true;
          if (wTs > 0) mFavTs[k] = wTs;
        });

        out.ratingsByPlayer = mRat;
        out.ratingUpdatedAtByPlayer = mRatTs;
        out.favoritesByPlayer = mFav;
        out.favoriteUpdatedAtByPlayer = mFavTs;
        if (mRat.sebas > 0) out.rating = mRat.sebas; else delete out.rating;
        out.favorite = Boolean(mFav.sebas);
        return out;
      };

      const deletedList = Array.isArray(cat.deletedGameIds) ? cat.deletedGameIds.map(String) : [];
      const deletedMap = {};
      deletedList.forEach(function(id) { deletedMap[id] = true; });

      const mergedGames = [];
      const seenIds = {};
      (Array.isArray(cat.games) ? cat.games : []).forEach(function(ig) {
        if (!ig || !ig.id || deletedMap[ig.id]) return;
        seenIds[ig.id] = true;
        mergedGames.push(mergePerProfile(existingById[ig.id], ig));
      });
      (existing.games || []).forEach(function(eg) {
        if (eg && eg.id && !seenIds[eg.id] && !deletedMap[eg.id]) {
          mergedGames.push(eg);
        }
      });

      if (gamesSh.getLastRow() > 1) {
        gamesSh.getRange(2, 1, gamesSh.getLastRow() - 1, GAME_HEADERS.length).clearContent();
      }
      if (mergedGames.length > 0) {
        const gRows = mergedGames.map(function(g) {
          return [
            g.id || "", g.name || "", g.color || "", g.color2 || "", g.icon || "dice",
            g.scoringType || "points", g.minPlayers || 1, g.maxPlayers || 6, g.defaultDuration || 30,
            g.favorite ? "Sí" : "", g.rating || "", g.tagline || "", g.rulesNotes || "",
            JSON.stringify(g)
          ];
        });
        gamesSh.getRange(2, 1, gRows.length, GAME_HEADERS.length).setValues(gRows);
      }

      const mergedProfiles = {};
      var srvP = existing.playerProfiles || {};
      var incP = cat.playerProfiles || {};
      Object.keys(srvP).forEach(function(k) { mergedProfiles[k.toLowerCase()] = srvP[k]; });
      Object.keys(incP).forEach(function(k) {
        var lk = k.toLowerCase();
        var prev = mergedProfiles[lk];
        var next = incP[k];
        if (!prev || (Number(next && next.updatedAtMs) || 0) >= (Number(prev && prev.updatedAtMs) || 0)) {
          mergedProfiles[lk] = next;
        }
      });

      if (playersSh.getLastRow() > 1) {
        playersSh.getRange(2, 1, playersSh.getLastRow() - 1, PLAYER_HEADERS.length).clearContent();
      }
      const pRows = Object.keys(mergedProfiles).map(function(k) {
        var p = mergedProfiles[k] || {};
        return [k, p.name || k, p.color || "#227554", p.initials || ""];
      });
      if (pRows.length > 0) {
        playersSh.getRange(2, 1, pRows.length, PLAYER_HEADERS.length).setValues(pRows);
      }

      const props = PropertiesService.getScriptProperties();
      const ts = Math.max(Number(existing.updatedAtMs) || 0, Number(cat.updatedAtMs) || 0, Date.now());
      props.setProperty("LUDOTECA_DELETED_GAMES", JSON.stringify(deletedList));
      props.setProperty("LUDOTECA_CATALOG_UPDATED_MS", String(ts));

      return jsonOut({
        ok: true,
        version: 2.1,
        catalogSaved: true,
        updatedAtMs: ts,
        catalog: { games: mergedGames, deletedGameIds: deletedList, playerProfiles: mergedProfiles, updatedAtMs: ts }
      });
    }

    const sh = ensureSheet(ss, SHEET_MATCHES, MATCH_HEADERS);

    if (action === "delete") {
      const targetId = String(body.partidaId || "").trim();
      if (targetId && sh.getLastRow() > 1) {
        const ids = sh.getRange(2, 1, sh.getLastRow() - 1, 1).getValues();
        for (var i = ids.length - 1; i >= 0; i--) {
          if (String(ids[i][0]).trim() === targetId) sh.deleteRow(i + 2);
        }
        rebuildStatsSheet(ss, sh);
      }
      return jsonOut({ ok: true, deletedId: targetId });
    }

    // action === "save"
    const m = body.match || {};
    const partidaId = String(m.id || ("lud_" + Date.now()));
    const players = Array.isArray(m.players) ? m.players : [];
    const metaStr = JSON.stringify(m.meta || {});
    const newRows = players.map(function(p, idx) {
      return [
        partidaId, m.date || "", Number(m.createdAtMs) || Date.now(), m.gameId || "custom",
        m.gameName || "Juego", m.scoringType || "points", Number(m.duration) || 0,
        m.extraLabel || "", m.winnerLabel || "", m.topScore !== null && m.topScore !== undefined ? m.topScore : "",
        Number(p.rank) || (idx + 1), p.name || "Jugador", p.score !== null && p.score !== undefined ? p.score : "",
        p.tag || "", m.notes || "", metaStr
      ];
    });

    if (newRows.length > 0) {
      const startRow = sh.getLastRow() + 1;
      sh.getRange(startRow, 2, newRows.length, 1).setNumberFormat("@");
      sh.getRange(startRow, 1, newRows.length, MATCH_HEADERS.length).setValues(newRows);
      rebuildStatsSheet(ss, sh);
    }
    return jsonOut({ ok: true, partidaId: partidaId });
  } catch (err) {
    return jsonOut({ ok: false, error: "Error guardando en Sheets: " + (err && err.message ? err.message : String(err)) });
  } finally {
    lock.releaseLock();
  }
}

function rebuildStatsSheet(ss, matchSh) {
  const statsHeaders = ["Juego", "Partidas", "% Partidas", "Horas Jugadas", "Puntuación Récord", "Última Partida"];
  const stSh = ensureSheet(ss, SHEET_STATS, statsHeaders);
  if (stSh.getLastRow() > 1) stSh.getRange(2, 1, stSh.getLastRow() - 1, statsHeaders.length).clearContent();
  if (matchSh.getLastRow() <= 1) return;

  const colCount = Math.max(1, Math.min(matchSh.getLastColumn() || MATCH_HEADERS.length, MATCH_HEADERS.length));
  const vals = matchSh.getRange(2, 1, matchSh.getLastRow() - 1, colCount).getValues();
  const dateTexts = matchSh.getRange(2, 2, matchSh.getLastRow() - 1, 1).getDisplayValues();
  const seenMatches = {};
  const byGame = {};
  vals.forEach(function(r, rowIdx) {
    var mid = String(r[0]);
    if (!mid || seenMatches[mid]) return;
    seenMatches[mid] = true;
    var gName = String(r[4] || "Juego");
    var dur = Number(r[6]) || 0;
    var top = r[9] !== "" && r[9] !== null && r[9] !== undefined ? Number(r[9]) : null;
    var dt = normalizeDisplayDate(dateTexts[rowIdx][0]);
    if (!byGame[gName]) byGame[gName] = { plays: 0, mins: 0, best: null, last: "" };
    byGame[gName].plays++;
    byGame[gName].mins += dur;
    if (top !== null && !isNaN(top) && (byGame[gName].best === null || top > byGame[gName].best)) byGame[gName].best = top;
    if (dt > byGame[gName].last) byGame[gName].last = dt;
  });

  const totalMatches = Object.keys(seenMatches).length || 1;
  const rows = Object.keys(byGame).sort().map(function(name) {
    var d = byGame[name];
    return [
      name, d.plays, ((d.plays / totalMatches) * 100).toFixed(1) + "%",
      Number((d.mins / 60).toFixed(1)), d.best !== null ? d.best : "-", d.last
    ];
  });
  if (rows.length > 0) {
    stSh.getRange(2, 6, rows.length, 1).setNumberFormat("@");
    stSh.getRange(2, 1, rows.length, statsHeaders.length).setValues(rows);
  }
}
`;
}

function getServiceWorkerSource() {
  return `// Ludoteca — Service Worker Offline v38 (Auto-actualización + Network-First en app)
const CACHE_NAME = 'ludoteca-offline-v38';
const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(
      PRECACHE_URLS.map((url) =>
        fetch(url, { mode: url.startsWith('http') ? 'no-cors' : 'same-origin', cache: 'no-cache' })
          .then((res) => cache.put(url, res))
          .catch(() => {})
      )
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Nunca cachear las llamadas en vivo a Google Apps Script
  if (url.hostname.includes('script.google.com') || url.hostname.includes('script.googleusercontent.com')) {
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const isAppShellFile = isSameOrigin && (
    req.mode === 'navigate'
    || url.pathname.endsWith('/')
    || url.pathname.endsWith('.html')
    || url.pathname.endsWith('.js')
    || url.pathname.endsWith('.css')
    || url.pathname.endsWith('manifest.json')
  );

  // Archivos de la app (HTML, JS, CSS): Network-First para recibir cambios de GitHub al instante con respaldo offline
  if (isAppShellFile) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const fresh = await fetch(req, { cache: 'no-cache' });
        if (fresh && fresh.status === 200) {
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (err) {
        const cached = await cache.match(req)
          || (req.mode === 'navigate' ? (await cache.match('./index.html') || await cache.match('./')) : null);
        return cached || new Response('Sin conexión y sin caché local todavía.', { status: 503 });
      }
    })());
    return;
  }

  // Librerías CDN, fuentes e iconos: Cache-First + actualización en segundo plano
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: false });
    const fetchPromise = fetch(req).then((res) => {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        cache.put(req, res.clone());
      }
      return res;
    }).catch(() => null);

    return cached || (await fetchPromise) || new Response('', { status: 504 });
  })());
});
`;
}

function showUpdateAvailableBanner() {
  syncState.updateAvailable = true;
  if (swUpdateBannerDismissed) return;
  if (document.getElementById('pwa-update-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-update-banner';
  banner.className = 'fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-3 anim-in';
  banner.innerHTML = `
    <div class="p-3 rounded-2xl toast-milestone flex items-center justify-between gap-2.5 shadow-elevated">
      <div class="flex items-center gap-2 min-w-0">
        <span class="w-2 h-2 rounded-full bg-amber-300 animate-pulse shrink-0"></span>
        <div class="min-w-0">
          <div class="text-xs font-extrabold text-white leading-tight">Nueva versión disponible</div>
          <div class="text-[10.5px] text-amber-100 truncate">Actualiza para aplicar los últimos cambios</div>
        </div>
      </div>
      <div class="flex items-center gap-1.5 shrink-0">
        <button type="button" id="btn-apply-pwa-update"
          class="btn-tap px-3 py-1.5 rounded-xl bg-amber-400 text-[#142620] text-xs font-extrabold shadow-xs">
          Actualizar
        </button>
        <button type="button" id="btn-dismiss-pwa-update"
          class="btn-tap w-7 h-7 rounded-xl bg-white/15 text-white text-xs font-bold flex items-center justify-center" aria-label="Cerrar aviso">
          ✕
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('btn-apply-pwa-update')?.addEventListener('click', () => {
    if (swRegistrationRef && swRegistrationRef.waiting) {
      swRegistrationRef.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  });
  document.getElementById('btn-dismiss-pwa-update')?.addEventListener('click', () => {
    swUpdateBannerDismissed = true;
    banner.remove();
  });
}

function checkSwUpdateThrottled(force = false) {
  if (!swRegistrationRef || typeof swRegistrationRef.update !== 'function') return Promise.resolve(false);
  if (navigator.onLine === false) return Promise.resolve(false);
  const now = Date.now();
  if (!force && now - (syncState.lastSwCheckAt || 0) < 60000) return Promise.resolve(false);
  syncState.lastSwCheckAt = now;
  return swRegistrationRef.update()
    .then(() => {
      if (swRegistrationRef.waiting) {
        swUpdateBannerDismissed = false;
        showUpdateAvailableBanner();
        return true;
      }
      return Boolean(syncState.updateAvailable);
    })
    .catch(() => false);
}

function registerOfflineServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    syncState.swStatus = 'unsupported';
    return;
  }
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    syncState.swStatus = 'local_file';
    return;
  }

  const hadController = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController) {
      swUpdateBannerDismissed = false;
      showUpdateAvailableBanner();
    }
  });

  navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
    .then((reg) => {
      swRegistrationRef = reg;
      syncState.swStatus = 'active';
      syncState.lastSwCheckAt = Date.now();

      if (reg.waiting && hadController) {
        showUpdateAvailableBanner();
      }
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) {
            swUpdateBannerDismissed = false;
            showUpdateAvailableBanner();
          }
        });
      });

      if (reg.update) {
        try { reg.update(); } catch (e) {}
      }
    })
    .catch(() => {
      syncState.swStatus = 'error';
    });
}

function openAppsScriptV2Modal() {
  const code = getAppsScriptV2Template();
  const bodyHtml = `
    <div class="space-y-3">
      <div class="p-3 rounded-2xl bg-emeraldBrand/10 border border-emeraldBrand/25 text-xs text-ink dark:text-white/85 leading-relaxed">
        Pega este código en tu proyecto de <strong>Google Apps Script</strong> (reemplazando el anterior) y pulsa <strong>Implementar → Gestionar implementaciones → Editar (lápiz) → Nueva versión</strong>. Mantiene tu misma URL <code class="font-mono">/exec</code> y añade las pestañas <code class="font-mono">Ludoteca_Juegos</code> y <code class="font-mono">Ludoteca_Perfiles</code>.
      </div>
      <textarea id="as-v2-textarea" readonly rows="12"
        class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 rounded-2xl p-3 text-[11px] font-mono text-ink dark:text-emerald-200 outline-none">${esc(code)}</textarea>
    </div>
  `;
  openModal({
    title: 'Google Apps Script v2.1',
    subtitle: 'Sincroniza partidas, catálogo de juegos, reglas y perfiles',
    bodyHtml,
    actions: [
      { label: 'Cerrar' },
      {
        label: 'Copiar código',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        keepOpen: true,
        onClick: async () => {
          try {
            await navigator.clipboard.writeText(code);
            showToast('Apps Script v2 copiado al portapapeles', 'success');
          } catch (e) {
            const ta = document.getElementById('as-v2-textarea');
            if (ta) { ta.select(); document.execCommand('copy'); }
            showToast('Código copiado', 'success');
          }
        },
      },
    ],
  });
}

async function syncFromSheets({ silent = false } = {}) {
  const url = syncState.apiUrl || getSavedSheetsUrl();
  const pin = syncState.pin || getSavedPin();
  if (!url) {
    activateLocalMode('Pega la URL /exec de tu Google Apps Script para sincronizar.');
    return false;
  }

  syncState.apiUrl = url;
  syncState.pin = pin;
  syncState.isLoading = true;
  if (!syncState.connected) {
    syncState.mode = 'connecting';
    renderSyncBadge();
  }
  if (uiState.activeTab === 'history') renderHistoryTab();

  const computeStateFingerprint = () => {
    try {
      const mSig = matchHistory.map((m) => `${m.id}|${m.date}|${m.duration}|${m.topScore}|${m.winnerLabel}|${(m.players || []).length}|${m.pendingSync ? 1 : 0}`).join(';');
      const gSig = games.map((g) => `${g.id}|${g.name}|${JSON.stringify(g.ratingsByPlayer || {})}|${JSON.stringify(g.favoritesByPlayer || {})}|${g.rulesUpdatedAt || 0}|${g.metaUpdatedAt || 0}`).join(';');
      const pSig = JSON.stringify(playerProfiles || {});
      return `${mSig}##${gSig}##${pSig}`;
    } catch (e) {
      return String(Date.now());
    }
  };
  const beforeSyncFp = computeStateFingerprint();

  try {
    // Paso 1: Empuja primero la cola offline antes de descargar para no perder nunca cambios locales
    const flushStats = await flushOfflineQueue();

    // Paso 2: Descarga historial actualizado desde Sheets
    const sep = url.includes('?') ? '&' : '?';
    const pinParam = pin ? `&pin=${encodeURIComponent(pin)}` : '';
    const data = await fetchSheetsJson(`${url}${sep}t=${Date.now()}${pinParam}`);
    const rows = Array.isArray(data.rows) ? data.rows : (Array.isArray(data) ? data : []);

    if (data && data.version) {
      syncState.serverVersion = Number(data.version) || syncState.serverVersion;
    }

    if (data && data.catalog) {
      const remoteHadGames = Array.isArray(data.catalog.games) && data.catalog.games.length > 0;
      mergeRemoteCatalog(data.catalog);
      // Si es la primera vez con Apps Script v2 o el merge dejó cambios locales más recientes, sube ya fusionado
      if (!remoteHadGames || syncState.catalogDirty) {
        await pushCatalogToSheets({ silent: true, skipPreMerge: true });
      }
    } else if (data && !Array.isArray(data) && data.version === undefined) {
      syncState.catalogSupported = false;
    }

    const remoteMatches = groupSheetRows(rows).filter((rm) => !pendingDeletes.includes(rm.id));

    // Paso 3: Fusión segura (conserva cualquier partida aún pendiente en local sin duplicar)
    const remoteIds = new Set(remoteMatches.map((rm) => rm.id));
    const stillLocalPending = matchHistory.filter((lm) => lm.pendingSync && !remoteIds.has(lm.id));
    matchHistory = [...stillLocalPending, ...remoteMatches].sort((a, b) => matchChronoKey(b).localeCompare(matchChronoKey(a)));

    saveHistoryLocal();
    rebuildFrequentPlayersFromHistory();

    syncState.mode = 'sheets';
    syncState.connected = true;
    syncState.errorMessage = '';
    syncState.isLoading = false;
    syncState.lastSyncedAt = Date.now();

    renderSyncBadge();
    updateNavBadge();
    const afterSyncFp = computeStateFingerprint();
    const dataActuallyChanged = afterSyncFp !== beforeSyncFp;
    const isTypingNow = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
    const modalOpenNow = !document.getElementById('modal-backdrop')?.classList.contains('hidden');
    if (dataActuallyChanged || !silent) {
      if (!(silent && (isTypingNow || modalOpenNow))) {
        renderActiveTab();
      }
    }

    if (flushStats.uploaded > 0 || flushStats.deleted > 0) {
      const parts = [];
      if (flushStats.uploaded > 0) parts.push(`${flushStats.uploaded} ${flushStats.uploaded === 1 ? 'subida' : 'subidas'}`);
      if (flushStats.deleted > 0) parts.push(`${flushStats.deleted} ${flushStats.deleted === 1 ? 'borrada' : 'borradas'}`);
      showToast(`Cola sincronizada (${parts.join(' · ')})`, 'success');
    } else if (!silent) {
      showToast('Sincronizado con Google Sheets', 'success');
    }
    return true;
  } catch (err) {
    console.warn('Error al sincronizar Sheets:', err);
    activateLocalMode(err.message || 'No se pudo conectar con Sheets.');
    if (!silent) showToast('Sin conexión · cambios protegidos en cola local', 'danger');
    return false;
  }
}


function triggerBackgroundSync(minIntervalMs = 20000) {
  if (!getSavedSheetsUrl()) return;
  if (navigator.onLine === false) return;
  if (syncState.isLoading || syncState.isSaving) return;
  const hasPending = getPendingSyncCount() > 0 || syncState.catalogDirty;
  const elapsed = Date.now() - (syncState.lastSyncedAt || 0);
  if (!hasPending && syncState.lastSyncedAt && elapsed < minIntervalMs) return;
  syncFromSheets({ silent: true });
}

function renderAppVersionBadge() {
  const hdr = document.querySelector('header.header-pro') || document.querySelector('header');
  const h1 = hdr?.querySelector('h1') || document.getElementById('header-subtitle')?.previousElementSibling;
  if (!h1) return;

  h1.classList.add('flex', 'items-center', 'gap-1.5');
  let tag = document.getElementById('app-version-tag');
  if (!tag) {
    tag = document.createElement('span');
    tag.id = 'app-version-tag';
    h1.appendChild(tag);
  }
  tag.className = 'header-version-pill';
  tag.textContent = APP_VERSION;

  // Mejora estética de la insignia del logo y botones circulares de la cabecera
  if (hdr) {
    const titleWrap = h1.parentElement;
    const brandIcon = titleWrap?.previousElementSibling;
    if (brandIcon && brandIcon.tagName === 'DIV') {
      brandIcon.classList.add('header-brand-icon');
    }
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) themeBtn.classList.add('header-glass-btn');
    const toolsBtn = hdr.querySelector('[data-action="open-table-tools"]');
    if (toolsBtn) toolsBtn.classList.add('header-glass-btn');
  }
}

function renderSyncBadge() {
  const btn = document.getElementById('btn-sync-settings');
  const dot = document.getElementById('sync-dot');
  const label = document.getElementById('sync-label');

  const pending = getPendingSyncCount();
  if (syncState.connected && pending === 0) {
    btn.className = 'btn-tap header-sync-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all bg-emerald-500/20 border-emerald-300/35 text-emerald-100';
    dot.className = 'w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.9)]';
    label.textContent = 'Sheets activo';
  } else if (syncState.mode === 'connecting') {
    btn.className = 'btn-tap header-sync-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all bg-white/10 border-white/18 text-white/85';
    dot.className = 'w-1.5 h-1.5 rounded-full bg-amber-300 shrink-0 animate-pulse';
    label.textContent = 'Sincronizando...';
  } else if (pending > 0) {
    btn.className = 'btn-tap header-sync-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all bg-amber-400/24 border-amber-300/45 text-amber-100';
    dot.className = 'w-1.5 h-1.5 rounded-full bg-amber-300 shrink-0 animate-pulse';
    label.textContent = `${pending} pend.`;
  } else {
    btn.className = 'btn-tap header-sync-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all bg-amber-400/18 border-amber-300/35 text-amber-100';
    dot.className = 'w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0';
    label.textContent = 'Modo local';
  }
}

function updateNavBadge() {
  const badge = document.getElementById('nav-history-badge');
  if (!badge) return;
  if (matchHistory.length > 0) {
    badge.textContent = matchHistory.length > 99 ? '99+' : matchHistory.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function openSyncSettingsModal() {
  const currentUrl = syncState.apiUrl || getSavedSheetsUrl();
  const currentPin = syncState.pin || getSavedPin();

  const pendingCount = getPendingSyncCount();
  const pendingBlock = pendingCount > 0 ? `
    <div class="p-3 rounded-2xl bg-amber-500/14 border border-amber-500/35 text-amber-900 dark:text-amber-200 text-xs font-semibold mb-3 flex items-center justify-between gap-2">
      <span>Tienes <strong>${pendingCount}</strong> ${pendingCount === 1 ? 'cambio pendiente' : 'cambios pendientes'} en cola offline.</span>
      ${currentUrl ? `<button type="button" id="btn-flush-pending-modal" class="btn-tap shrink-0 px-2.5 py-1.5 rounded-xl bg-amber-600 text-white text-[11px] font-bold">Subir ahora</button>` : ''}
    </div>
  ` : '';

  const banner = (syncState.connected
    ? `<div class="p-3 rounded-2xl bg-emeraldBrand/12 border border-emeraldBrand/25 text-emeraldBrand dark:text-emerald-300 text-xs font-semibold mb-3">Conectado a Google Sheets${currentPin ? ' con PIN de seguridad' : ''}. Tus partidas y ediciones se sincronizan automáticamente.</div>`
    : `<div class="p-3 rounded-2xl bg-amber-500/12 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">Modo local activo. Tus partidas se guardan en este dispositivo y se subirán solas al conectar.${syncState.errorMessage ? `<div class="mt-1 font-normal opacity-85">${esc(syncState.errorMessage)}</div>` : ''}</div>`) + pendingBlock;

  const bodyHtml = `
    ${banner}
    <div class="space-y-3.5">
      <div>
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <label for="cfg-sheets-url" class="text-xs font-bold text-ink dark:text-white">URL de Google Apps Script (/exec)</label>
          <button type="button" id="btn-test-sheets-url" class="btn-tap text-[11px] font-bold text-emeraldBrand dark:text-emerald-400 hover:underline">
            Probar enlace ↗
          </button>
        </div>
        <input id="cfg-sheets-url" type="url" value="${esc(currentUrl)}" placeholder="https://script.google.com/macros/s/.../exec"
          class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2.5 text-xs font-mono text-ink dark:text-white outline-none" />
      </div>
      <div>
        <label for="cfg-sheets-pin" class="block text-xs font-bold text-ink dark:text-white mb-1.5">PIN secreto (opcional, recomendado)</label>
        <input id="cfg-sheets-pin" type="password" value="${esc(currentPin)}" placeholder="Ej. 4829 o tu palabra clave"
          class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2.5 text-xs text-ink dark:text-white outline-none" />
        <p class="mt-1.5 text-[11px] text-inkMuted dark:text-white/55 leading-relaxed">
          Tanto la URL como el PIN se guardan solo en tu móvil (nunca en GitHub). Si pones un PIN aquí, escribe el mismo en <code class="font-mono px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">SECRET_PIN</code> dentro de tu Apps Script.
        </p>
      </div>

      <div class="pt-3 border-t border-[#EAE3D7] dark:border-white/10 space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-bold text-ink dark:text-white">Catálogo y Perfiles en Sheets</div>
            <div class="text-[10.5px] text-inkMuted dark:text-white/55">
              ${syncState.catalogSupported === true
                ? (syncState.catalogDirty ? 'Cambios locales pendientes de subir' : 'Ludoteca_Juegos y Perfiles sincronizados ✓')
                : syncState.catalogSupported === false
                  ? 'Usa Apps Script v2 para guardar tus juegos, reglas y perfiles en Sheets'
                  : 'Sincroniza juegos, favoritos, reglas y colores entre dispositivos'}
            </div>
          </div>
          <button type="button" id="btn-open-as-v2" class="btn-tap shrink-0 px-2.5 py-1.5 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[11px] font-extrabold">
            Apps Script v2.1
          </button>
        </div>
        ${syncState.connected ? `
          <button type="button" id="btn-push-catalog-now" class="btn-tap w-full py-2 px-3 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 text-xs font-bold text-ink dark:text-white">
            Sincronizar catálogo y perfiles ahora
          </button>
        ` : ''}
      </div>

      <div class="pt-3 border-t border-[#EAE3D7] dark:border-white/10 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-bold text-ink dark:text-white">Modo 100 % Offline (PWA)</div>
            <div class="text-[10.5px] text-inkMuted dark:text-white/55">
              ${syncState.swStatus === 'active'
                ? 'Service Worker activo · funciona sin cobertura con estilos y gráficas ✓'
                : syncState.swStatus === 'local_file'
                  ? 'Disponible al abrir desde tu web HTTPS (GitHub Pages)'
                  : 'Sube sw.js junto a index.html en tu repo para activar caché offline total'}
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button type="button" id="btn-check-pwa-update" class="btn-tap px-2.5 py-1.5 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[11px] font-extrabold">
              Buscar versión
            </button>
            <button type="button" id="btn-download-sw" class="btn-tap px-2.5 py-1.5 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/15 text-[11px] font-bold text-ink dark:text-white">
              sw.js
            </button>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-[#EAE3D7] dark:border-white/10">
        <div class="text-xs font-bold text-ink dark:text-white mb-2">Copia de seguridad local</div>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" id="btn-export-json" class="btn-tap py-2 px-3 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 text-xs font-bold text-ink dark:text-white">Exportar JSON</button>
          <label class="btn-tap py-2 px-3 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 text-xs font-bold text-ink dark:text-white text-center cursor-pointer">
            Importar JSON
            <input id="input-import-json" type="file" accept=".json,application/json" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  `;

  openModal({
    title: 'Sincronización y Datos',
    subtitle: `Ludoteca ${APP_VERSION} · Google Sheets privado + respaldo local`,
    bodyHtml,
    actions: [
      { label: 'Cerrar' },
      {
        label: 'Guardar y conectar',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-pine dark:bg-emeraldBrand text-white',
        keepOpen: true,
        onClick: async () => {
          const urlVal = normalizeExecUrl(document.getElementById('cfg-sheets-url')?.value || '');
          const pinVal = (document.getElementById('cfg-sheets-pin')?.value || '').trim();
          try { localStorage.setItem(KEYS.SHEETS_PIN, pinVal); } catch (e) {}
          syncState.pin = pinVal;

          if (!urlVal) {
            try { localStorage.removeItem(KEYS.SHEETS_URL); } catch (e) {}
            syncState.apiUrl = '';
            closeModal();
            activateLocalMode('URL borrada. Trabajando en modo local.');
            showToast('Cambiado a modo local', 'neutral');
            return;
          }
          if (!isValidExecUrl(urlVal)) {
            showToast('La URL debe empezar por script.google.com y terminar en /exec', 'danger');
            return;
          }
          try { localStorage.setItem(KEYS.SHEETS_URL, urlVal); } catch (e) {}
          syncState.apiUrl = urlVal;
          closeModal();
          showToast('Conectando con Google Sheets...', 'neutral');
          await syncFromSheets({ silent: false });
        },
      },
    ],
  });

  setTimeout(() => {
    const testUrlBtn = document.getElementById('btn-test-sheets-url');
    if (testUrlBtn) {
      testUrlBtn.addEventListener('click', () => {
        const raw = normalizeExecUrl(document.getElementById('cfg-sheets-url')?.value || '');
        const p = (document.getElementById('cfg-sheets-pin')?.value || '').trim();
        if (!isValidExecUrl(raw)) {
          showToast('Pega primero una URL válida terminada en /exec', 'danger');
          return;
        }
        const testTarget = `${raw}?t=${Date.now()}${p ? `&pin=${encodeURIComponent(p)}` : ''}`;
        window.open(testTarget, '_blank', 'noopener,noreferrer');
      });
    }
    const flushBtn = document.getElementById('btn-flush-pending-modal');
    if (flushBtn) {
      flushBtn.addEventListener('click', async () => {
        closeModal();
        showToast('Subiendo cola pendiente...', 'neutral');
        await syncFromSheets({ silent: false });
      });
    }
    const asV2Btn = document.getElementById('btn-open-as-v2');
    if (asV2Btn) {
      asV2Btn.addEventListener('click', () => {
        openAppsScriptV2Modal();
      });
    }
    const pushCatBtn = document.getElementById('btn-push-catalog-now');
    if (pushCatBtn) {
      pushCatBtn.addEventListener('click', async () => {
        showToast('Subiendo catálogo y perfiles...', 'neutral');
        await pushCatalogToSheets({ silent: false });
      });
    }
    const chkUpdBtn = document.getElementById('btn-check-pwa-update');
    if (chkUpdBtn) {
      chkUpdBtn.addEventListener('click', async () => {
        showToast('Comprobando GitHub Pages...', 'neutral');
        const found = await checkSwUpdateThrottled(true);
        if (!found) {
          showToast(`Ya tienes la última versión instalada (${APP_VERSION})`, 'success');
        }
      });
    }
    const swBtn = document.getElementById('btn-download-sw');
    if (swBtn) {
      swBtn.addEventListener('click', () => {
        const blob = new Blob([getServiceWorkerSource()], { type: 'application/javascript' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'sw.js';
        a.click();
        showToast('sw.js descargado · súbelo junto a index.html', 'success');
      });
    }
    const expBtn = document.getElementById('btn-export-json');
    if (expBtn) {
      expBtn.addEventListener('click', () => {
        const payload = { exportedAt: new Date().toISOString(), games, deletedGameIds, playerProfiles, matchHistory };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `ludoteca_backup_${todayISO()}.json`;
        a.click();
        showToast('Copia JSON descargada', 'success');
      });
    }
    const impInput = document.getElementById('input-import-json');
    if (impInput) {
      impInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(reader.result);
            if (Array.isArray(parsed.games) && parsed.games.length) {
              games = parsed.games;
              saveGamesLocal();
            }
            if (Array.isArray(parsed.deletedGameIds)) {
              deletedGameIds = parsed.deletedGameIds;
              saveDeletedGamesLocal();
            }
            if (parsed.playerProfiles && typeof parsed.playerProfiles === 'object' && !Array.isArray(parsed.playerProfiles)) {
              playerProfiles = parsed.playerProfiles;
              savePlayerProfilesLocal();
            }
            if (Array.isArray(parsed.matchHistory)) {
              matchHistory = parsed.matchHistory;
              saveHistoryLocal();
              rebuildFrequentPlayersFromHistory();
            }
            closeModal();
            updateNavBadge();
            renderActiveTab();
            showToast('Copia importada correctamente', 'success');
          } catch (err) {
            showToast('Archivo JSON no válido', 'danger');
          }
        };
        reader.readAsText(file);
      });
    }
  }, 20);
}

// =========================================================================
// 9. TAB 1: REGISTRAR PARTIDA (FLUJO ULTRARRÁPIDO + DETALLES POR JUEGO)
// =========================================================================
function syncAutoWinners() {
  const g = getGameById(draft.gameId);
  if (getEffectiveScoringType(g) !== 'points' || draft.manualWinnerOverride) return;
  const numeric = draft.players.map((p) => (p.score === '' || p.score === null ? null : Number(p.score)));
  const valid = numeric.filter((n) => n !== null && !isNaN(n));
  if (valid.length === 0) {
    draft.players.forEach((p) => { p.winner = false; });
    return;
  }
  const bestVal = g.lowestWins ? Math.min(...valid) : Math.max(...valid);
  draft.players.forEach((p, idx) => {
    p.winner = numeric[idx] !== null && numeric[idx] === bestVal;
  });
}

function renderPlayModeButtonsHtml(game) {
  if (!Array.isArray(game.playModes) || game.playModes.length === 0) return '';
  const activeMode = getEffectivePlayMode(game);
  return `
    <div class="space-y-1.5">
      <div class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Modo de partida</div>
      <div class="grid gap-1.5" style="grid-template-columns: repeat(${Math.min(3, game.playModes.length)}, minmax(0, 1fr));">
        ${game.playModes.map((pm) => {
          const active = activeMode === pm;
          return `
            <button type="button" data-action="set-play-mode" data-val="${esc(pm)}"
              class="btn-tap py-2 px-2.5 rounded-xl text-xs font-bold border text-center truncate ${
                active
                  ? 'text-white border-transparent shadow-xs'
                  : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'
              }"
              style="${active ? `background:${game.color};` : ''}">
              ${esc(pm)}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderWinModeBlockHtml(game) {
  if (!Array.isArray(game.winModes) || game.winModes.length === 0) return '';
  const activeWm = getEffectiveWinMode(game);
  const isCustom = activeWm === '__custom__';
  const heading = game.winModeLabel || 'Forma de victoria';

  return `
    <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-[#EAE3D7] dark:border-white/10 space-y-2.5">
      <div class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">${esc(heading)}</div>
      <div class="flex flex-wrap gap-1.5">
        ${game.winModes.map((opt) => {
          const active = activeWm === opt;
          return `
            <button type="button" data-action="set-win-mode" data-val="${esc(opt)}"
              class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                active
                  ? 'text-white border-transparent shadow-xs'
                  : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'
              }"
              style="${active ? `background:${game.color};` : ''}">
              ${esc(opt)}
            </button>
          `;
        }).join('')}
        ${game.allowCustomWinMode ? `
          <button type="button" data-action="set-win-mode" data-val="__custom__"
            class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              isCustom
                ? 'text-white border-transparent shadow-xs'
                : 'bg-white dark:bg-surfaceDark text-inkMuted dark:text-white/65 border-dashed border-[#CFC7B8] dark:border-white/20'
            }"
            style="${isCustom ? `background:${game.color};` : ''}">
            + Otra
          </button>
        ` : ''}
      </div>
      ${isCustom ? `
        <input id="draft-custom-win-mode" type="text" maxlength="36" value="${esc(draft.customWinMode || '')}"
          placeholder="Ej. 50 puntos, 6 órganos, 4 sets..."
          class="w-full h-9 bg-white dark:bg-surfaceDark border border-emeraldBrand/50 rounded-xl px-3 text-xs font-semibold text-ink dark:text-white outline-none" />
      ` : ''}
    </div>
  `;
}

function renderGameExtrasHtml(game) {
  const blocks = [];

  // 1) Bloque específico de Harmonies (Cara A/B, Espíritu y Modo Solitario/Multijugador)
  if (game.extraType === 'harmonies') {
    blocks.push(`
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-[#EAE3D7] dark:border-white/10 space-y-3">
        ${renderPlayModeButtonsHtml(game)}
        <div class="space-y-2">
          <div class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Tablero y expansión</div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button type="button" data-action="set-draft-field" data-field="harmoniesSide" data-val="A"
              class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border ${draft.harmoniesSide === 'A' ? 'bg-[#2B7A9B] text-white border-[#2B7A9B]' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'}">
              Cara A · Río
            </button>
            <button type="button" data-action="set-draft-field" data-field="harmoniesSide" data-val="B"
              class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border ${draft.harmoniesSide === 'B' ? 'bg-[#D9911E] text-white border-[#D9911E]' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'}">
              Cara B · Islas
            </button>
            <button type="button" data-action="toggle-draft-bool" data-field="harmoniesSpirit"
              class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border ${draft.harmoniesSpirit ? 'bg-[#6D5A99] text-white border-[#6D5A99]' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'}">
              ${draft.harmoniesSpirit ? '✓ Con Espíritu' : '+ Espíritu'}
            </button>
          </div>
        </div>
      </div>
    `);
  } else if (game.extraType === 'tfm') {
    const maps = ['Tharsis', 'Hellas', 'Elysium'];
    blocks.push(`
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-[#EAE3D7] dark:border-white/10 space-y-3">
        ${renderPlayModeButtonsHtml(game)}
        <div class="flex items-center justify-between gap-2 pt-0.5">
          <span class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Mapa y Generaciones</span>
          <div class="inline-flex items-center gap-1.5 bg-white dark:bg-surfaceDark border border-[#DFD8CB] dark:border-white/15 rounded-xl p-0.5">
            <button type="button" data-action="step-tfm-gen" data-delta="-1" class="btn-tap w-7 h-7 rounded-lg font-bold text-sm">−</button>
            <span class="px-2 text-xs font-extrabold tabular-nums">Gen ${draft.tfmGenerations}</span>
            <button type="button" data-action="step-tfm-gen" data-delta="1" class="btn-tap w-7 h-7 rounded-lg font-bold text-sm">+</button>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-1.5">
          ${maps.map((m) => `
            <button type="button" data-action="set-draft-field" data-field="tfmMap" data-val="${m}"
              class="btn-tap py-1.5 px-2 rounded-xl text-xs font-bold border ${draft.tfmMap === m ? 'bg-[#C84B31] text-white border-[#C84B31]' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-[#DFD8CB] dark:border-white/15'}">
              ${m}
            </button>
          `).join('')}
        </div>
      </div>
    `);
  } else if (game.extraType === 'themind' || getEffectiveScoringType(game) === 'coop') {
    const showLevels = game.extraType === 'themind';
    blocks.push(`
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-[#EAE3D7] dark:border-white/10 space-y-3">
        ${renderPlayModeButtonsHtml(game)}
        <div class="space-y-2">
          <div class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Resultado</div>
          <div class="grid grid-cols-2 gap-2">
            <button type="button" data-action="set-draft-bool" data-field="coopWon" data-val="true"
              class="btn-tap py-2.5 rounded-xl text-xs font-extrabold border ${draft.coopWon ? 'bg-emeraldBrand text-white border-emeraldBrand shadow-xs' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/75 border-[#DFD8CB] dark:border-white/15'}">
              ✓ ¡Superado!
            </button>
            <button type="button" data-action="set-draft-bool" data-field="coopWon" data-val="false"
              class="btn-tap py-2.5 rounded-xl text-xs font-extrabold border ${!draft.coopWon ? 'bg-coralBrand text-white border-coralBrand shadow-xs' : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/75 border-[#DFD8CB] dark:border-white/15'}">
              ✕ Derrota
            </button>
          </div>
        </div>
        ${showLevels ? `
          <div class="flex items-center justify-between gap-2 pt-1">
            <span class="text-xs font-bold text-ink dark:text-white/85">Nivel alcanzado</span>
            <div class="inline-flex items-center gap-1.5 bg-white dark:bg-surfaceDark border border-[#DFD8CB] dark:border-white/15 rounded-xl p-0.5">
              <button type="button" data-action="step-coop-level" data-delta="-1" class="btn-tap w-9 h-9 rounded-lg font-bold text-base">−</button>
              <span class="w-10 text-center text-sm font-extrabold tabular-nums">Nv. ${draft.coopLevel}</span>
              <button type="button" data-action="step-coop-level" data-delta="1" class="btn-tap w-9 h-9 rounded-lg font-bold text-base">+</button>
            </div>
          </div>
        ` : ''}
      </div>
    `);
  } else if (Array.isArray(game.playModes) && game.playModes.length > 0) {
    blocks.push(`
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-[#EAE3D7] dark:border-white/10">
        ${renderPlayModeButtonsHtml(game)}
      </div>
    `);
  }

  // 2) Bloque unificado de Formas de Victoria / Objetivo (Sea Salt & Paper, Virus!, Monopoly Deal, Jaipur, Splendor Duel/Marvel, LOTR, Trío, Sleeping Queens, etc.)
  const winBlock = renderWinModeBlockHtml(game);
  if (winBlock) blocks.push(winBlock);

  return blocks.join('');
}

function renderLogTab() {
  const container = document.getElementById('view-log');
  const game = getGameById(draft.gameId);
  syncAutoWinners();

  // Conteo rápido y recencia real por fecha/hora de última partida
  const playCountsByGame = {};
  const lastPlayedStamp = {};
  matchHistory.forEach((m) => {
    playCountsByGame[m.gameId] = (playCountsByGame[m.gameId] || 0) + 1;
    const stamp = `${String(m.date || '').slice(0, 10)}|${String(Number(m.createdAtMs) || 0).padStart(15, '0')}`;
    if (!lastPlayedStamp[m.gameId] || stamp > lastPlayedStamp[m.gameId]) {
      lastPlayedStamp[m.gameId] = stamp;
    }
  });

  const activeShelfProf = getActiveShelfProfile();
  const favCount = games.filter((g) => isGameFavoriteFor(g, activeShelfProf.key)).length;
  if (uiState.logGameMode === 'favorites' && favCount === 0) {
    uiState.logGameMode = 'recent';
  }

  const logSearchTerm = (uiState.logGameSearch || '').trim().toLowerCase();
  let visibleGames = games.filter((g) => {
    if (logSearchTerm) {
      return g.name.toLowerCase().includes(logSearchTerm) || (g.tagline || '').toLowerCase().includes(logSearchTerm);
    }
    if (uiState.logGameMode === 'favorites') return isGameFavoriteFor(g, activeShelfProf.key);
    return true;
  });

  if (!logSearchTerm && uiState.logGameMode === 'recent') {
    visibleGames = [...visibleGames].sort((a, b) => {
      const sA = lastPlayedStamp[a.id] || '';
      const sB = lastPlayedStamp[b.id] || '';
      if (sA && sB) return sB.localeCompare(sA);
      if (sA) return -1;
      if (sB) return 1;
      return 0;
    });
  }

  const gamePills = visibleGames.length > 0 ? visibleGames.map((g) => {
    const active = g.id === game.id;
    const pCount = playCountsByGame[g.id] || 0;
    return `
      <button type="button" data-action="select-game" data-game-id="${esc(g.id)}" ${active ? 'data-active-game-pill="true"' : ''}
        class="btn-tap shrink-0 w-[110px] p-2.5 rounded-[20px] text-left transition-all flex flex-col justify-between gap-2.5 relative overflow-hidden ${
          active
            ? 'text-white cover-sheen carousel-pill-active'
            : 'carousel-pill text-ink dark:text-white hover:border-black/15 dark:hover:border-white/20'
        }"
        style="${active
          ? `background: linear-gradient(145deg, ${g.color}, ${g.color2 || g.color}); --pill-accent: ${g.color};`
          : ''}"
      >
        ${active ? `<div class="cover-watermark">${gameIconSvg(g.icon, 'w-14 h-14')}</div>` : ''}
        <div class="flex items-center justify-between gap-1 relative z-10">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${active ? 'bg-white/20 border border-white/20 text-white' : ''}"
            style="${!active ? `background:${g.color}16; color:${g.color}; box-shadow: inset 0 0 0 1px ${g.color}24;` : ''}">
            ${gameIconSvg(g.icon, 'w-4 h-4')}
          </div>
          <div class="flex items-center gap-1 shrink-0">
            ${g.quickCalc ? `
              <span class="w-5 h-5 rounded-md inline-flex items-center justify-center ${active ? 'bg-white/20 text-white' : 'bg-emeraldBrand/10 text-emeraldBrand dark:text-emerald-300'}" title="Incluye marcador en vivo" aria-label="Marcador en vivo">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="4" y="2.5" width="16" height="19" rx="2.5"/><line x1="8" y1="7" x2="16" y2="7"/><circle cx="8.5" cy="12" r="0.8" fill="currentColor"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><circle cx="15.5" cy="12" r="0.8" fill="currentColor"/><circle cx="8.5" cy="16.5" r="0.8" fill="currentColor"/><circle cx="12" cy="16.5" r="0.8" fill="currentColor"/><circle cx="15.5" cy="16.5" r="0.8" fill="currentColor"/>
                </svg>
              </span>
            ` : ''}
            ${isGameFavoriteFor(g, activeShelfProf.key) ? `<span class="text-[11px] leading-none ${active ? 'text-amber-300' : 'text-goldBrand'}" title="Favorito (${esc(activeShelfProf.name)})">★</span>` : ''}
            ${pCount > 0 ? `
              <span class="text-[10px] font-extrabold tabular-nums px-1.5 py-0.5 rounded-md ${active ? 'bg-black/22 text-white' : 'bg-black/[0.045] dark:bg-white/[0.08] text-inkMuted dark:text-white/55'}">${pCount}</span>
            ` : ''}
          </div>
        </div>
        <div class="relative z-10 min-h-[2.4em] flex items-end">
          <div class="font-display text-[11.5px] font-extrabold leading-tight line-clamp-2">${esc(g.name)}</div>
        </div>
      </button>
    `;
  }).join('') : `
    <div class="w-full py-4 text-center text-xs text-inkMuted dark:text-white/55">
      ${uiState.logGameMode === 'favorites' && !logSearchTerm ? 'Toca la estrella de cualquier juego para fijarlo en favoritos' : `No hay juegos que coincidan con "${esc(uiState.logGameSearch)}"`}
    </div>
  `;

  const quickCalcBanner = game.quickCalc ? `
    <button type="button" data-action="open-quick-calc" data-calc="${game.quickCalc}"
      class="btn-tap cover-sheen w-full p-3.5 rounded-[22px] text-white flex items-center justify-between gap-3 shadow-elevated"
      style="background: linear-gradient(130deg, ${game.color}, ${game.color2 || game.color});"
    >
      <div class="flex items-center gap-3 min-w-0 text-left relative z-10">
        <div class="w-10 h-10 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center shrink-0">
          ${gameIconSvg(game.icon, 'w-5 h-5')}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="font-display text-sm font-extrabold leading-tight">Marcador de ${esc(game.name)}</span>
            <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/20 text-[9px] font-extrabold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>Vivo
            </span>
          </div>
          <div class="text-[11px] text-white/80 mt-0.5 truncate">${({ harmonies: 'Árboles, Montañas, Campos, Edificios, Agua, Animales y Espíritu', wyrmspan: 'Gremio, dragones, huevos, recursos, objetivos y monedas', tfm: 'VT, hitos, recompensas, vegetaciones, ciudades y cartas', ttr: 'Recorridos, estaciones, billetes y Expreso Europeo (+10)', flip7: 'Cartas, ×2, modificadores y +15 por ronda', sushigo: '3 rondas, wasabi, makis y pudines automáticos', skullking: '10 rondas: apuestas, bazas y bonificaciones', faraway: 'Puntuación inversa (Carta 8 → 1) y Santuarios', odin: 'Rondas hasta 15 pts · gana el menor puntaje' })[game.quickCalc] || 'Calculadora rápida de puntuación'}</div>
        </div>
      </div>
      <div class="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 relative z-10">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </button>
  ` : '';

  // Chips de jugadores frecuentes no añadidos todavía
  const currentNamesLower = draft.players.map((p) => p.name.trim().toLowerCase());
  const availableChips = frequentPlayers.filter((n) => !currentNamesLower.includes(n.toLowerCase()));
  const quickPlayerChipsHtml = availableChips.length > 0 ? `
    <div class="scroll-strip no-scrollbar">
      <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted/80 dark:text-white/45 shrink-0">Rápido:</span>
      ${availableChips.map((name) => `
        <button type="button" data-action="quick-fill-player" data-name="${esc(name)}"
          class="btn-tap shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/10 text-xs font-semibold text-ink dark:text-white/85 hover:border-emeraldBrand">
          <span>+ ${esc(name)}</span>
          <span class="w-2 h-2 rounded-full shrink-0" style="background:${getPlayerColor(name)};"></span>
        </button>
      `).join('')}
    </div>
  ` : '';

  const playerRowsHtml = draft.players.map((pl, idx) => {
    const effScoring = getEffectiveScoringType(game);
    const isPoints = effScoring === 'points';
    const isCoop = effScoring === 'coop';
    const showTfmCorp = game.extraType === 'tfm';

    return `
      <div class="p-2 rounded-2xl transition-all border ${
        pl.winner && !isCoop
          ? 'bg-gradient-to-r from-amber-50/90 via-canvas/70 to-canvas/50 dark:from-amber-500/12 dark:via-surfaceDarkAlt dark:to-surfaceDarkAlt border-goldBrand/50 shadow-xs'
          : 'bg-canvas/70 dark:bg-surfaceDarkAlt/80 border-black/[0.06] dark:border-white/[0.08]'
      }">
        <div class="flex items-center gap-2">
          ${!isCoop ? `
            <button type="button" data-action="toggle-player-winner" data-idx="${idx}"
              title="Marcar como ganador"
              class="btn-tap w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                pl.winner
                  ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white border-transparent shadow-sm'
                  : 'bg-white dark:bg-surfaceDark text-inkMuted/50 dark:text-white/30 border-black/[0.07] dark:border-white/10 hover:text-goldBrand'
              }">
              ${gameIconSvg('crown', 'w-4 h-4')}
            </button>
          ` : `
            <div class="w-9 h-9 rounded-xl bg-white dark:bg-surfaceDark border border-black/[0.07] dark:border-white/10 flex items-center justify-center text-xs font-extrabold text-inkMuted dark:text-white/60 shrink-0">
              ${idx + 1}
            </div>
          `}

          <input type="text" data-player-name="${idx}" value="${esc(pl.name)}" maxlength="24"
            placeholder="Jugador ${idx + 1}"
            class="flex-1 min-w-0 h-10 input-pro rounded-xl px-3 text-sm font-semibold text-ink dark:text-white outline-none" />

          ${isPoints ? `
            <input type="number" inputmode="decimal" data-player-score="${idx}" value="${esc(pl.score)}"
              placeholder="Pts"
              class="w-[74px] h-10 text-center input-pro rounded-xl text-sm font-extrabold tabular-nums text-ink dark:text-white outline-none" />
          ` : ''}

          ${draft.players.length > 1 ? `
            <button type="button" data-action="remove-draft-player" data-idx="${idx}"
              class="btn-tap w-8 h-10 rounded-xl flex items-center justify-center text-inkMuted/70 hover:text-coralBrand shrink-0" aria-label="Quitar jugador">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          ` : ''}
        </div>

        ${showTfmCorp ? `
          <div class="mt-2 pl-12 space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold text-inkMuted dark:text-white/50 shrink-0">Corp:</span>
              <button type="button" data-action="toggle-corp-picker" data-idx="${idx}"
                class="btn-tap flex-1 min-w-0 h-8 input-pro rounded-lg px-2.5 text-xs font-semibold flex items-center justify-between gap-2 ${pl.tag ? 'text-ink dark:text-white' : 'text-inkMuted dark:text-white/55'}">
                <span class="truncate">${pl.tag ? esc(pl.tag) : 'Elegir corporación (opcional)'}</span>
                <svg class="w-3.5 h-3.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${uiState.openCorpPickerIdx === idx ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'}"/></svg>
              </button>
              ${pl.tag ? `
                <button type="button" data-action="pick-player-tag" data-idx="${idx}" data-val=""
                  class="btn-tap px-2 h-8 rounded-lg text-[10.5px] font-bold text-inkMuted hover:text-coralBrand">✕</button>
              ` : ''}
            </div>
            ${uiState.openCorpPickerIdx === idx ? `
              <div class="flex flex-wrap gap-1.5 pt-0.5 anim-in">
                ${TFM_CORPS.map((c) => `
                  <button type="button" data-action="pick-player-tag" data-idx="${idx}" data-val="${esc(c)}"
                    class="btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                      pl.tag === c
                        ? 'bg-[#C84B31] text-white border-[#C84B31] shadow-2xs'
                        : 'bg-white dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.08] dark:border-white/12'
                    }">${esc(c)}</button>
                `).join('')}
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  const durationOpts = [15, 30, 45, 60, 90, 120];

  container.innerHTML = `
    <!-- Carrusel de Juegos -->
    <div class="space-y-2 anim-in">
      <div class="flex items-center justify-between gap-2 px-0.5">
        <div class="flex items-center gap-2">
          <h2 class="font-display text-[11px] font-extrabold uppercase tracking-[0.12em] text-inkMuted dark:text-white/55">Elige el juego</h2>
          <span class="px-1.5 py-0.5 rounded-md bg-black/[0.045] dark:bg-white/[0.08] text-[10px] font-extrabold text-inkMuted dark:text-white/60 tabular-nums">${games.length}</span>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" data-action="toggle-log-search"
            class="btn-tap inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${uiState.logSearchOpen || uiState.logGameSearch ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'card-pro text-inkMuted dark:text-white/70'}">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span>Buscar</span>
          </button>
          <button type="button" data-action="open-add-game" class="btn-tap text-xs font-bold text-emeraldBrand dark:text-emerald-400 hover:underline">
            + Nuevo
          </button>
        </div>
      </div>
      <div class="scroll-strip no-scrollbar">
        <button type="button" data-action="set-log-game-mode" data-val="recent"
          class="btn-tap shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${uiState.logGameMode === 'recent' ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-2xs' : 'pill-chip text-inkMuted dark:text-white/70'}">
          Recientes
        </button>
        ${favCount > 0 ? `
          <button type="button" data-action="set-log-game-mode" data-val="favorites"
            class="btn-tap shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${uiState.logGameMode === 'favorites' ? 'bg-goldBrand text-white border-transparent shadow-2xs' : 'pill-chip text-inkMuted dark:text-white/70'}">
            ★ Favoritos (${favCount})
          </button>
        ` : ''}
        <button type="button" data-action="set-log-game-mode" data-val="all"
          class="btn-tap shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold border ${uiState.logGameMode === 'all' ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-2xs' : 'pill-chip text-inkMuted dark:text-white/70'}">
          Todos
        </button>
        <button type="button" data-action="open-table-tools-tab" data-tab="picker"
          class="btn-tap shrink-0 ml-auto px-2.5 py-1 rounded-full text-[11px] font-bold border border-amber-500/35 bg-amber-500/12 text-amber-800 dark:text-amber-300 inline-flex items-center gap-1">
          <span>¿A qué jugar?</span>
        </button>
      </div>
      ${uiState.logSearchOpen || uiState.logGameSearch ? `
        <div class="relative">
          <svg class="w-3.5 h-3.5 text-inkMuted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input id="log-game-search-input" type="search" value="${esc(uiState.logGameSearch)}" placeholder="Filtrar entre tus ${games.length} juegos..."
            class="w-full h-9 pl-9 pr-3 card-pro focus:border-emeraldBrand rounded-xl text-xs font-semibold text-ink dark:text-white outline-none" />
        </div>
      ` : ''}
      <div id="log-game-carousel" class="scroll-strip-cards no-scrollbar">
        ${gamePills}
      </div>
    </div>

    ${quickCalcBanner}

    ${draft.editingMatchId ? `
      <div class="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/16 via-amber-400/12 to-amber-500/10 border border-amber-500/40 flex items-center justify-between gap-2.5 anim-in">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-extrabold text-amber-950 dark:text-amber-100 truncate">Editando partida guardada</div>
            <div class="text-[11px] font-medium text-amber-800/85 dark:text-amber-200/75 truncate">${esc(formatDisplayDate(draft.date))} · modifica cualquier campo y guarda</div>
          </div>
        </div>
        <button type="button" data-action="cancel-edit-match"
          class="btn-tap shrink-0 px-3 py-1.5 rounded-xl bg-white dark:bg-surfaceDark border border-amber-500/35 text-xs font-bold text-amber-900 dark:text-amber-200">
          Cancelar
        </button>
      </div>
    ` : ''}

    <!-- Tarjeta Principal de Registro -->
    <div class="card-pro rounded-[26px] overflow-hidden anim-in ${draft.editingMatchId ? 'ring-2 ring-amber-400/60' : ''}">
      <!-- Cabecera con textura, marca de agua y degradado del juego -->
      <div class="cover-sheen px-4 py-4 text-white flex items-center justify-between gap-3"
        style="background: linear-gradient(125deg, ${game.color}, ${game.color2 || game.color});">
        <div class="cover-watermark">${gameIconSvg(game.icon, 'w-20 h-20')}</div>
        <div class="flex items-center gap-3 min-w-0 relative z-10">
          <div class="w-11 h-11 rounded-2xl bg-white/18 border border-white/25 flex items-center justify-center shrink-0 shadow-sm backdrop-blur-xs">
            ${gameIconSvg(game.icon, 'w-6 h-6')}
          </div>
          <div class="min-w-0">
            <div class="font-display text-base font-extrabold leading-tight truncate">${esc(game.name)}</div>
            <div class="text-[11px] text-white/80 truncate mt-0.5">${esc(game.tagline || 'Registro rápido de partida')}</div>
          </div>
        </div>
        <div class="flex items-center gap-1.5 relative z-10 shrink-0">
          <button type="button" data-action="toggle-favorite-game" data-game-id="${esc(game.id)}"
            class="btn-tap w-8 h-8 rounded-xl bg-black/18 hover:bg-black/30 border border-white/15 flex items-center justify-center ${isGameFavoriteFor(game, activeShelfProf.key) ? 'text-amber-300' : 'text-white/75'}"
            title="${isGameFavoriteFor(game, activeShelfProf.key) ? `Quitar de favoritos (${esc(activeShelfProf.name)})` : `Añadir a favoritos (${esc(activeShelfProf.name)})`}" aria-label="Favorito">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="${isGameFavoriteFor(game, activeShelfProf.key) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
          <button type="button" data-action="open-game-sheet" data-game-id="${esc(game.id)}"
            class="btn-tap w-8 h-8 rounded-xl bg-black/18 hover:bg-black/30 border border-white/15 flex items-center justify-center text-white/90"
            title="Chuleta de reglas y valoración" aria-label="Reglas de ${esc(game.name)}">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </button>
          <button type="button" data-action="clear-draft" class="btn-tap px-2.5 py-1.5 rounded-xl bg-black/18 hover:bg-black/28 border border-white/15 text-[11px] font-bold">
            Limpiar
          </button>
        </div>
      </div>

      <div class="p-4 sm:p-5 space-y-4">
        <!-- Jugadores -->
        <div class="space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">
              Jugadores (${draft.players.length})${getEffectiveScoringType(game) === 'winner_only' ? ' · toca la corona' : ''}
            </span>
            <div class="flex items-center gap-1.5">
              <button type="button" data-action="open-player-profiles"
                class="btn-tap px-2.5 py-1 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.07] dark:border-white/10 text-inkMuted dark:text-white/70 hover:text-ink dark:hover:text-white text-[11px] font-bold">
                Perfiles
              </button>
              <button type="button" data-action="add-draft-player"
                class="btn-tap px-2.5 py-1 rounded-xl bg-emeraldBrand/12 hover:bg-emeraldBrand/18 text-emeraldBrand dark:text-emerald-300 text-xs font-bold">
                + Jugador
              </button>
            </div>
          </div>

          ${quickPlayerChipsHtml}

          <div class="space-y-2">
            ${playerRowsHtml}
          </div>
        </div>

        <!-- Extras específicos del juego -->
        ${renderGameExtrasHtml(game)}

        <!-- Fecha y Duración -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 min-w-0">
          <div class="min-w-0">
            <div class="flex items-center justify-between mb-1.5">
              <label for="draft-date" class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Fecha</label>
              ${draft.date !== todayISO() ? `
                <button type="button" data-action="reset-draft-date"
                  class="btn-tap text-[11px] font-extrabold text-emeraldBrand dark:text-emerald-400 hover:underline">
                  Volver a hoy
                </button>
              ` : `<span class="text-[10.5px] font-bold text-emeraldBrand dark:text-emerald-400">Hoy</span>`}
            </div>
            <div class="relative w-full min-w-0 h-10 input-pro rounded-xl px-3 flex items-center justify-between gap-2 overflow-hidden focus-within:border-emeraldBrand focus-within:ring-2 focus-within:ring-emeraldBrand/15">
              <span class="text-xs font-bold text-ink dark:text-white truncate tabular-nums">${esc(formatDisplayDate(draft.date))}</span>
              <svg class="w-4 h-4 text-inkMuted dark:text-white/55 shrink-0 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2.5"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              <input id="draft-date" type="date" value="${esc(draft.date)}" aria-label="Fecha de la partida"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-base" />
            </div>
          </div>

          <div class="min-w-0">
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <label for="draft-duration-input" class="text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Duración</label>
              <div class="flex items-center gap-1.5">
                <div class="inline-flex items-center gap-1 px-2 h-6 rounded-lg bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 focus-within:border-emeraldBrand">
                  <input id="draft-duration-input" type="number" inputmode="numeric" min="1" max="600" value="${esc(draft.duration)}" aria-label="Duración en minutos"
                    class="w-10 bg-transparent text-right text-[11px] font-extrabold tabular-nums text-emeraldBrand dark:text-emerald-400 outline-none" />
                  <span class="text-[10px] font-bold text-inkMuted dark:text-white/55">min</span>
                </div>
                <button type="button" data-action="toggle-timer-panel"
                  class="btn-tap inline-flex items-center gap-1 px-2 h-6 rounded-lg text-[10.5px] font-bold border ${
                    matchTimer.running
                      ? 'bg-emeraldBrand text-white border-transparent'
                      : uiState.timerOpen || getTimerElapsedMs() > 0
                        ? 'bg-pine dark:bg-emeraldBrand/25 text-white dark:text-emerald-300 border-transparent'
                        : 'bg-canvas dark:bg-surfaceDarkAlt text-inkMuted dark:text-white/70 border-black/[0.08] dark:border-white/12'
                  }" title="Cronómetro de partida">
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6"/></svg>
                  <span>${matchTimer.running ? 'En curso' : 'Crono'}</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-1 p-0.5 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/[0.08]">
              ${durationOpts.map((min) => `
                <button type="button" data-action="set-duration" data-val="${min}"
                  class="btn-tap h-9 rounded-[10px] text-[11px] font-bold tabular-nums ${
                    Number(draft.duration) === min
                      ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs'
                      : 'text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white'
                  }">
                  ${min}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        ${uiState.timerOpen || matchTimer.running || getTimerElapsedMs() > 0 ? `
          <div class="p-3 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-emeraldBrand/25 flex flex-wrap items-center justify-between gap-2.5 anim-in">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full shrink-0 ${matchTimer.running ? 'bg-emeraldBrand animate-pulse shadow-[0_0_8px_rgba(34,117,84,0.8)]' : 'bg-inkMuted/40'}"></span>
              <div>
                <div class="text-[10px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/50">Cronómetro de partida</div>
                <div id="live-timer-display" class="font-display text-xl font-extrabold tabular-nums text-ink dark:text-white leading-tight">${formatTimerClock(getTimerElapsedMs())}</div>
              </div>
            </div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <button type="button" data-action="timer-toggle"
                class="btn-tap px-3 py-1.5 rounded-xl text-xs font-extrabold ${matchTimer.running ? 'bg-amber-500 text-white' : 'bg-emeraldBrand text-white'}">
                ${matchTimer.running ? 'Pausar' : (getTimerElapsedMs() > 0 ? 'Reanudar' : 'Iniciar')}
              </button>
              ${getTimerElapsedMs() >= 5000 ? `
                <button id="btn-apply-timer" type="button" data-action="timer-apply"
                  class="btn-tap px-3 py-1.5 rounded-xl bg-pine dark:bg-white text-white dark:text-pine text-xs font-extrabold tabular-nums">
                  Aplicar (${Math.max(1, Math.round(getTimerElapsedMs() / 60000))} min)
                </button>
              ` : ''}
              ${getTimerElapsedMs() > 0 || matchTimer.running ? `
                <button type="button" data-action="timer-reset"
                  class="btn-tap px-2.5 py-1.5 rounded-xl bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 text-xs font-bold text-inkMuted hover:text-coralBrand">
                  Reiniciar
                </button>
              ` : ''}
            </div>
          </div>
        ` : ''}

        <!-- Notas opcionales -->
        <div>
          <label for="draft-notes" class="block text-[11px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55 mb-1.5">Nota rápida (opcional)</label>
          <input id="draft-notes" type="text" maxlength="140" value="${esc(draft.notes)}"
            placeholder="Ej. Remontada en el último turno, expansión usada..."
            class="w-full h-10 input-pro rounded-xl px-3 text-xs font-medium text-ink dark:text-white outline-none" />
        </div>

        <!-- Botón Guardar -->
        <button type="button" data-action="save-match" ${syncState.isSaving ? 'disabled' : ''}
          class="btn-tap btn-primary-pro w-full py-3.5 px-5 rounded-2xl text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 disabled:opacity-70"
        >
          ${syncState.isSaving
            ? `<svg class="w-4 h-4 spin-fast" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg><span>Guardando partida...</span>`
            : `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${draft.editingMatchId ? (syncState.connected ? 'Guardar cambios en Sheets' : 'Guardar cambios (local)') : (syncState.connected ? 'Guardar partida en Sheets' : 'Guardar partida (local)')}</span>`
          }
        </button>
      </div>
    </div>
  `;

  bindLogInputs();
}

function bindLogInputs() {
  document.querySelectorAll('[data-player-name]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const idx = Number(e.target.dataset.playerName);
      draft.players[idx].name = e.target.value;
      saveDraftLocal();
    });
  });

  document.querySelectorAll('[data-player-score]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const idx = Number(e.target.dataset.playerScore);
      draft.players[idx].score = e.target.value;
      draft.manualWinnerOverride = false;
      syncAutoWinners();
      saveDraftLocal();
      // Actualiza visualmente coronas sin perder foco del input
      draft.players.forEach((p, i) => {
        const btn = document.querySelector(`[data-action="toggle-player-winner"][data-idx="${i}"]`);
        if (btn) {
          btn.className = `btn-tap w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
            p.winner
              ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white border-transparent shadow-sm'
              : 'bg-white dark:bg-surfaceDark text-inkMuted/50 dark:text-white/30 border-black/[0.07] dark:border-white/10 hover:text-goldBrand'
          }`;
        }
      });
    });
  });



  const dateEl = document.getElementById('draft-date');
  if (dateEl) {
    dateEl.addEventListener('click', () => {
      try {
        if (typeof dateEl.showPicker === 'function') dateEl.showPicker();
      } catch (e) {}
    });
    dateEl.addEventListener('change', (e) => {
      const today = todayISO();
      const picked = e.target.value || today;
      draft.date = picked;
      draft.dateSetOn = today;
      draft.manualDateOverride = picked !== today;
      saveDraftLocal();
      renderLogTab();
    });
  }

  const notesEl = document.getElementById('draft-notes');
  if (notesEl) {
    notesEl.addEventListener('input', (e) => {
      draft.notes = e.target.value;
      saveDraftLocal();
    });
  }

  const durEl = document.getElementById('draft-duration-input');
  if (durEl) {
    durEl.addEventListener('input', (e) => {
      const val = Math.max(1, Math.min(600, Number(e.target.value) || 0));
      if (val > 0) {
        draft.duration = val;
        saveDraftLocal();
        document.querySelectorAll('[data-action="set-duration"]').forEach((b) => {
          const isMatch = Number(b.dataset.val) === val;
          b.className = `btn-tap h-9 rounded-[10px] text-[11px] font-bold tabular-nums ${
            isMatch
              ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs'
              : 'text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white'
          }`;
        });
      }
    });
  }
  ensureTimerTick();

  const customWinEl = document.getElementById('draft-custom-win-mode');
  if (customWinEl) {
    customWinEl.addEventListener('input', (e) => {
      draft.customWinMode = e.target.value;
      saveDraftLocal();
    });
  }

  const logSearchEl = document.getElementById('log-game-search-input');
  if (logSearchEl) {
    logSearchEl.addEventListener('input', (e) => {
      uiState.logGameSearch = e.target.value;
      renderLogTab();
      const el = document.getElementById('log-game-search-input');
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
  }
}

function buildMatchExtra(game) {
  const parts = [];
  const meta = {};
  const playMode = getEffectivePlayMode(game);
  const winType = getResolvedWinModeText(game);

  if (playMode) {
    meta.playMode = playMode;
    if (isDraftSoloMode(game)) meta.solo = true;
  }

  if (game.extraType === 'harmonies') {
    if (playMode && isDraftSoloMode(game)) parts.push('Solitario');
    parts.push(`Cara ${draft.harmoniesSide} (${draft.harmoniesSide === 'A' ? 'Río' : 'Islas'})`);
    if (draft.harmoniesSpirit) parts.push('Espíritu');
    meta.boardSide = draft.harmoniesSide;
    meta.spirit = draft.harmoniesSpirit;
    if (Array.isArray(draft.harmoniesBreakdown) && draft.harmoniesBreakdown.length > 0) {
      meta.breakdown = draft.harmoniesBreakdown;
    }
  } else if (game.extraType === 'tfm') {
    if (playMode && isDraftSoloMode(game)) parts.push('Solitario');
    parts.push(`${draft.tfmMap} · Gen ${draft.tfmGenerations}`);
    meta.map = draft.tfmMap;
    meta.generations = draft.tfmGenerations;
  } else if (game.extraType === 'themind') {
    parts.push(`${draft.coopWon ? 'Superado' : 'Derrota'} · Nivel ${draft.coopLevel}`);
    meta.coopWon = draft.coopWon;
    meta.level = draft.coopLevel;
  } else if (getEffectiveScoringType(game) === 'coop') {
    if (playMode) parts.push(playMode);
    parts.push(draft.coopWon ? 'Superado' : 'Derrota');
    meta.coopWon = draft.coopWon;
  } else if (playMode) {
    parts.push(playMode);
  }

  if (winType) {
    meta.winType = winType;
    const prefix = (game.winModeLabel || '').toLowerCase().includes('objetivo') ? 'Objetivo' : 'Victoria';
    parts.push(`${prefix}: ${winType}`);
  }

  if (!meta.breakdown && Array.isArray(draft.scoreBreakdown) && draft.scoreBreakdown.length > 0) {
    meta.breakdown = draft.scoreBreakdown;
  }
  if (draft.calcSnapshot && draft.calcSnapshot.kind && draft.calcSnapshot.state) {
    meta.calcSnapshot = draft.calcSnapshot;
  }

  return { label: parts.join(' · '), meta };
}

async function saveDraftMatch() {
  if (syncState.isSaving) return;
  const game = getGameById(draft.gameId);

  // Limpia jugadores (en modo solitario omite filas secundarias totalmente vacías)
  let sourcePlayers = draft.players;
  if (isDraftSoloMode(game) && sourcePlayers.length > 1) {
    const nonEmpty = sourcePlayers.filter((p) => p.name.trim() || (p.score !== '' && p.score !== null) || p.winner || (p.tag || '').trim());
    sourcePlayers = nonEmpty.length > 0 ? nonEmpty : [sourcePlayers[0]];
  }
  const effScoring = getEffectiveScoringType(game);
  const cleanedPlayers = sourcePlayers
    .map((p, i) => ({
      name: p.name.trim() || `Jugador ${i + 1}`,
      score: effScoring === 'points' && p.score !== '' && p.score !== null ? Number(p.score) : null,
      winner: Boolean(p.winner),
      tag: (p.tag || '').trim(),
    }));

  if (cleanedPlayers.length === 0) {
    showToast('Añade al menos un jugador', 'danger');
    return;
  }

  if (effScoring === 'points') {
    const hasAnyScore = cleanedPlayers.some((p) => p.score !== null && !isNaN(p.score));
    if (!hasAnyScore && !cleanedPlayers.some((p) => p.winner)) {
      showToast('Introduce al menos una puntuación o marca un ganador', 'neutral');
      return;
    }
    // Ordenar por puntuación y asignar rank (ascendente si gana el menor puntaje, ej. Odín)
    cleanedPlayers.sort((a, b) => {
      if (a.winner !== b.winner && draft.manualWinnerOverride) return a.winner ? -1 : 1;
      if (game.lowestWins) {
        const sa = a.score ?? Infinity;
        const sb = b.score ?? Infinity;
        return sa - sb;
      }
      const sa = a.score ?? -Infinity;
      const sb = b.score ?? -Infinity;
      return sb - sa;
    });
    cleanedPlayers.forEach((p, idx) => {
      if (idx === 0) {
        p.rank = 1;
        if (!draft.manualWinnerOverride) p.winner = true;
      } else {
        const prev = cleanedPlayers[idx - 1];
        const tied = p.score !== null && p.score === prev.score && p.winner === prev.winner;
        p.rank = tied ? prev.rank : idx + 1;
      }
    });
  } else if (effScoring === 'winner_only') {
    if (!cleanedPlayers.some((p) => p.winner)) {
      showToast('Toca la corona del jugador ganador', 'neutral');
      return;
    }
    cleanedPlayers.sort((a, b) => (b.winner ? 1 : 0) - (a.winner ? 1 : 0));
    cleanedPlayers.forEach((p) => { p.rank = p.winner ? 1 : 2; });
  } else {
    // Cooperativo o Solitario supervivencia
    cleanedPlayers.forEach((p) => {
      p.winner = draft.coopWon;
      p.rank = draft.coopWon ? 1 : 2;
    });
  }

  const { label: extraLabel, meta } = buildMatchExtra(game);
  const winners = cleanedPlayers.filter((p) => p.winner);
  let winnerLabel = '';
  if (effScoring === 'coop') {
    if (game.extraType === 'themind') {
      winnerLabel = draft.coopWon ? `¡Victoria! (Nv. ${draft.coopLevel})` : `Derrota en Nv. ${draft.coopLevel}`;
    } else {
      const pm = getEffectivePlayMode(game);
      winnerLabel = draft.coopWon
        ? (pm ? `¡Superado! (${pm})` : '¡Superado!')
        : (pm ? `Derrota (${pm})` : 'Derrota');
    }
  } else if (cleanedPlayers.length === 1) {
    winnerLabel = `${cleanedPlayers[0].name} (Solitario)`;
  } else if (winners.length > 1) {
    winnerLabel = `Empate: ${winners.map((w) => w.name).join(' y ')}`;
  } else if (winners.length === 1) {
    winnerLabel = winners[0].name;
  } else {
    winnerLabel = cleanedPlayers[0].name;
  }

  const validScores = cleanedPlayers.map((p) => p.score).filter((s) => s !== null && !isNaN(s));
  const topScore = validScores.length > 0
    ? (game.lowestWins ? Math.min(...validScores) : Math.max(...validScores))
    : null;
  const isEditing = Boolean(draft.editingMatchId);
  const originalId = draft.editingMatchId || null;
  const originalSource = draft.editingOriginalSource || 'local';
  const createdAtMs = isEditing && draft.editingCreatedAtMs ? Number(draft.editingCreatedAtMs) : Date.now();

  // Captura estado previo para celebrar hitos reales (nuevo récord del juego o subida de Índice H)
  const prevHBeforeSave = !isEditing ? computeHIndex(matchHistory).h : null;
  let prevGameBestScore = null;
  if (!isEditing && effScoring === 'points' && topScore !== null) {
    matchHistory.forEach((hm) => {
      if (hm.gameId !== game.id) return;
      (hm.players || []).forEach((hp) => {
        if (hp.score !== null && hp.score !== undefined && !isNaN(hp.score)) {
          const v = Number(hp.score);
          if (prevGameBestScore === null || (game.lowestWins ? v < prevGameBestScore : v > prevGameBestScore)) {
            prevGameBestScore = v;
          }
        }
      });
    });
  }
  const hasSheetsConfigured = Boolean(syncState.apiUrl || getSavedSheetsUrl());

  const record = {
    id: isEditing ? originalId : ('lud_' + createdAtMs),
    source: syncState.connected ? 'sheets' : 'local',
    date: draft.date || todayISO(),
    createdAtMs,
    gameId: game.id,
    gameName: game.name,
    scoringType: effScoring,
    duration: Number(draft.duration) || 0,
    extraLabel,
    winnerLabel,
    topScore,
    notes: (draft.notes || '').trim(),
    meta,
    players: cleanedPlayers,
  };

  const upsertLocalRecord = (rec, replaceId = null) => {
    if (replaceId) {
      const idx = matchHistory.findIndex((m) => m.id === replaceId);
      if (idx >= 0) matchHistory[idx] = rec;
      else matchHistory.unshift(rec);
    } else {
      matchHistory.unshift(rec);
    }
    matchHistory.sort((a, b) => matchChronoKey(b).localeCompare(matchChronoKey(a)));
    saveHistoryLocal();
    rebuildFrequentPlayersFromHistory();
  };

  syncState.isSaving = true;
  renderLogTab();

  let savedOk = false;
  try {
    if (syncState.connected && syncState.apiUrl) {
      if (isEditing && originalSource === 'sheets') {
        await fetchSheetsJson(syncState.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'delete', pin: syncState.pin || '', partidaId: originalId }),
        });
      }
      const data = await fetchSheetsJson(syncState.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'save', pin: syncState.pin || '', match: record }),
      });
      record.id = String(data.partidaId || record.id);
      record.source = 'sheets';
      delete record.pendingSync;
      delete record.pendingReplaceId;
      upsertLocalRecord(record, isEditing ? originalId : null);
      showToast(isEditing ? 'Cambios guardados en Google Sheets' : 'Partida guardada en Google Sheets', 'success');
    } else {
      if (hasSheetsConfigured) {
        record.pendingSync = true;
        if (isEditing && originalSource === 'sheets') record.pendingReplaceId = originalId;
      }
      upsertLocalRecord(record, isEditing ? originalId : null);
      showToast(
        hasSheetsConfigured
          ? (isEditing ? 'Cambios guardados en cola offline' : 'Guardada en cola offline (se subirá al conectar)')
          : (isEditing ? 'Cambios guardados en este dispositivo' : 'Partida guardada en este dispositivo'),
        'success'
      );
    }
    savedOk = true;
  } catch (err) {
    console.error('Error guardando partida:', err);
    record.source = 'local';
    record.pendingSync = true;
    if (isEditing && originalSource === 'sheets') record.pendingReplaceId = originalId;
    upsertLocalRecord(record, isEditing ? originalId : null);
    activateLocalMode('Sin conexión con Sheets. Guardado en cola offline.');
    showToast('Sin conexión · guardada en cola offline', 'danger');
    savedOk = true;
  } finally {
    syncState.isSaving = false;
    if (savedOk) {
      // Reinicia borrador manteniendo juego y nombres de jugadores
      const keepNames = draft.players.map((p) => p.name);
      const keepGameId = draft.gameId;
      resetAllCalculators();
      draft = createEmptyDraft(keepGameId);
      draft.players = keepNames.map((n) => ({ name: n, score: '', winner: false, tag: '' }));
      saveDraftLocal();
      renderSyncBadge();
      updateNavBadge();
      if (isEditing) {
        switchTab('history', { resetScroll: true });
      } else {
        renderLogTab();
        // Celebra sutilmente si esta partida batió récord del juego o subió tu Índice H
        const beatRecord = prevGameBestScore !== null && topScore !== null
          && (game.lowestWins ? topScore < prevGameBestScore : topScore > prevGameBestScore);
        const newHAfterSave = prevHBeforeSave !== null ? computeHIndex(matchHistory).h : prevHBeforeSave;
        const leveledUpH = prevHBeforeSave !== null && newHAfterSave > prevHBeforeSave;
        if (beatRecord) {
          setTimeout(() => triggerMilestoneCelebration(`★ Nuevo récord en ${game.name}: ${topScore} pts`), 380);
        } else if (leveledUpH) {
          setTimeout(() => triggerMilestoneCelebration(`★ ¡Subes de Índice H! Ahora H = ${newHAfterSave}`), 380);
        }
      }
    } else {
      renderLogTab();
    }
  }
}

// =========================================================================
// 10. MARCADORES EN VIVO INTEGRADOS (FLIP 7 & SUSHI GO!)
// =========================================================================
function openFlip7Scorer() {
  if (!flip7State) hydrateCalculatorFromDraft('flip7');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  if (!flip7State || flip7State.players.length !== names.length) {
    flip7State = {
      activeIdx: 0,
      players: names.map((name) => ({ name, rounds: [] })),
      // Mano en curso del jugador activo
      selectedNums: [],
      hasX2: false,
      selectedMods: [],
    };
  } else {
    flip7State.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderFlip7Modal();
}

function calcFlip7Hand() {
  const numSum = flip7State.selectedNums.reduce((a, b) => a + b, 0);
  const afterX2 = flip7State.hasX2 ? numSum * 2 : numSum;
  const modSum = flip7State.selectedMods.reduce((a, b) => a + b, 0);
  const flip7Bonus = flip7State.selectedNums.length >= 7 ? 15 : 0;
  return { numSum, afterX2, modSum, flip7Bonus, total: afterX2 + modSum + flip7Bonus };
}

function renderFlip7Modal() {
  const pl = flip7State.players[flip7State.activeIdx];
  const hand = calcFlip7Hand();
  const totals = flip7State.players.map((p) => p.rounds.reduce((a, b) => a + b, 0));
  const maxTotal = Math.max(0, ...totals);

  const playerStrip = flip7State.players.map((p, i) => {
    const tot = totals[i];
    const pct = Math.min(100, Math.round((tot / 200) * 100));
    const active = i === flip7State.activeIdx;
    return `
      <button type="button" data-f7="select-player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[104px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#7C3AED] text-white border-[#7C3AED] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-xs font-bold truncate">${esc(p.name)}</div>
        </div>
        <div class="mt-1 flex items-baseline justify-between">
          <span class="font-display text-lg font-extrabold tabular-nums">${tot}</span>
          <span class="text-[10px] opacity-75">R${p.rounds.length}</span>
        </div>
        <div class="mt-1.5 h-1.5 rounded-full overflow-hidden ${active ? 'bg-white/25' : 'bg-black/8 dark:bg-white/10'}">
          <div class="h-full rounded-full ${tot >= 200 ? 'bg-amber-300' : (active ? 'bg-white' : 'bg-[#7C3AED]')}" style="width:${pct}%"></div>
        </div>
      </button>
    `;
  }).join('');

  const numBtns = Array.from({ length: 13 }, (_, n) => {
    const sel = flip7State.selectedNums.includes(n);
    return `
      <button type="button" data-f7="toggle-num" data-val="${n}"
        class="btn-tap h-10 rounded-xl font-display font-extrabold text-sm tabular-nums border ${
          sel
            ? 'bg-[#7C3AED] text-white border-[#7C3AED] shadow-xs'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">${n}</button>
    `;
  }).join('');

  const modValues = [2, 4, 6, 8, 10];
  const modBtns = modValues.map((m) => {
    const sel = flip7State.selectedMods.includes(m);
    return `
      <button type="button" data-f7="toggle-mod" data-val="${m}"
        class="btn-tap h-9 rounded-xl font-extrabold text-xs tabular-nums border ${
          sel
            ? 'bg-amber-500 text-white border-amber-500'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">+${m}</button>
    `;
  }).join('');

  const bodyHtml = `
    <div class="space-y-4">
      ${maxTotal >= 200 ? `<div class="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-800 dark:text-amber-200 text-xs font-bold text-center">¡Alguien llegó a 200+ pts! Termina la ronda y pasa los totales al registro.</div>` : ''}

      <div class="scroll-strip-cards is-tight no-scrollbar">
        ${playerStrip}
      </div>

      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-extrabold text-ink dark:text-white">Ronda para ${esc(pl.name)}</div>
            <div class="text-[11px] text-inkMuted dark:text-white/55">
              ${flip7State.selectedNums.length}/7 números distintos ${hand.flip7Bonus ? '· <strong class="text-emeraldBrand">¡FLIP 7 (+15)!</strong>' : ''}
            </div>
          </div>
          <div class="px-3 py-1 rounded-xl bg-[#7C3AED]/12 text-[#7C3AED] dark:text-violet-300 font-display font-extrabold text-lg tabular-nums">
            +${hand.total}
          </div>
        </div>

        <div class="grid grid-cols-5 sm:grid-cols-7 gap-1.5">
          ${numBtns}
        </div>

        <div class="grid grid-cols-6 gap-1.5 pt-1">
          <button type="button" data-f7="toggle-x2"
            class="btn-tap h-9 rounded-xl font-extrabold text-xs border ${
              flip7State.hasX2
                ? 'bg-emeraldBrand text-white border-emeraldBrand'
                : 'bg-white dark:bg-surfaceDark text-emeraldBrand dark:text-emerald-300 border-emeraldBrand/35'
            }">×2</button>
          ${modBtns}
        </div>

        <div class="text-[11px] text-inkMuted dark:text-white/55 text-center tabular-nums">
          Números: ${hand.numSum}${flip7State.hasX2 ? ` ×2 = ${hand.afterX2}` : ''}${hand.modSum ? ` + Mod: ${hand.modSum}` : ''}${hand.flip7Bonus ? ` + Flip 7: 15` : ''}
        </div>

        <div class="grid grid-cols-2 gap-2 pt-1">
          <button type="button" data-f7="commit-bust" class="btn-tap py-2.5 rounded-xl bg-coralBrand/12 text-coralBrand font-bold text-xs border border-coralBrand/25">
            Repetida / Bust (0 pts)
          </button>
          <button type="button" data-f7="commit-hand" class="btn-tap py-2.5 rounded-xl bg-[#7C3AED] text-white font-bold text-xs shadow-xs">
            Sumar +${hand.total} pts
          </button>
        </div>
      </div>

      ${pl.rounds.length > 0 ? `
        <div class="flex items-center justify-between gap-2 px-1 text-xs text-inkMuted dark:text-white/60">
          <span class="truncate">Rondas de ${esc(pl.name)}: <strong class="text-ink dark:text-white">${pl.rounds.join(' · ')}</strong></span>
          <button type="button" data-f7="undo-round" class="btn-tap text-coralBrand font-bold shrink-0">Deshacer</button>
        </div>
      ` : ''}
    </div>
  `;

  openModal({
    title: 'Flip 7 — Marcador en vivo',
    subtitle: 'Aplica ×2 solo a números, luego modificadores y +15',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          flip7State = null;
          openFlip7Scorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'flip7', state: JSON.parse(JSON.stringify(flip7State)) };
          flip7State.players.forEach((p, idx) => {
            if (draft.players[idx]) {
              draft.players[idx].score = String(p.rounds.reduce((a, b) => a + b, 0));
            }
          });
          draft.manualWinnerOverride = false;
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
          showToast('Totales de Flip 7 pasados al registro', 'success');
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-f7]');
    if (!el) return;
    const act = el.dataset.f7;
    if (act === 'select-player') {
      flip7State.activeIdx = Number(el.dataset.idx);
      flip7State.selectedNums = [];
      flip7State.hasX2 = false;
      flip7State.selectedMods = [];
      renderFlip7Modal();
    } else if (act === 'toggle-num') {
      const v = Number(el.dataset.val);
      const i = flip7State.selectedNums.indexOf(v);
      if (i >= 0) flip7State.selectedNums.splice(i, 1);
      else flip7State.selectedNums.push(v);
      renderFlip7Modal();
    } else if (act === 'toggle-mod') {
      const v = Number(el.dataset.val);
      const i = flip7State.selectedMods.indexOf(v);
      if (i >= 0) flip7State.selectedMods.splice(i, 1);
      else flip7State.selectedMods.push(v);
      renderFlip7Modal();
    } else if (act === 'toggle-x2') {
      flip7State.hasX2 = !flip7State.hasX2;
      renderFlip7Modal();
    } else if (act === 'commit-hand' || act === 'commit-bust') {
      const pts = act === 'commit-bust' ? 0 : calcFlip7Hand().total;
      flip7State.players[flip7State.activeIdx].rounds.push(pts);
      flip7State.selectedNums = [];
      flip7State.hasX2 = false;
      flip7State.selectedMods = [];
      flip7State.activeIdx = (flip7State.activeIdx + 1) % flip7State.players.length;
      renderFlip7Modal();
    } else if (act === 'undo-round') {
      flip7State.players[flip7State.activeIdx].rounds.pop();
      renderFlip7Modal();
    }
  };
}

function openSushiGoScorer() {
  if (!sushiState) hydrateCalculatorFromDraft('sushigo');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const emptyRound = () => ({ tempura: 0, sashimi: 0, gyoza: 0, maki: 0, n1: 0, n2: 0, n3: 0, w1: 0, w2: 0, w3: 0 });
  if (!sushiState || sushiState.players.length !== names.length) {
    sushiState = {
      roundIdx: 0, // 0, 1, 2
      activeIdx: 0,
      players: names.map((name) => ({
        name,
        puddings: 0,
        rounds: [emptyRound(), emptyRound(), emptyRound()],
      })),
    };
  } else {
    sushiState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderSushiModal();
}

function calcSushiTotals() {
  const gyozaTable = [0, 1, 3, 6, 10, 15];
  const nPlayers = sushiState.players.length;
  const perPlayer = sushiState.players.map(() => ({ rounds: [0, 0, 0], puddingPts: 0, total: 0 }));

  for (let r = 0; r < 3; r++) {
    // Puntos individuales de la ronda r
    const makis = sushiState.players.map((p) => p.rounds[r].maki);
    sushiState.players.forEach((p, idx) => {
      const d = p.rounds[r];
      const pts =
        Math.floor(d.tempura / 2) * 5 +
        Math.floor(d.sashimi / 3) * 10 +
        gyozaTable[Math.min(5, d.gyoza)] +
        d.n1 * 1 + d.n2 * 2 + d.n3 * 3 +
        d.w1 * 3 + d.w2 * 6 + d.w3 * 9;
      perPlayer[idx].rounds[r] = pts;
    });

    // Mayorías de Maki (6 al 1.º, 3 al 2.º; empates dividen redondeando hacia abajo)
    const maxMaki = Math.max(...makis);
    if (maxMaki > 0) {
      const firsts = makis.map((v, i) => (v === maxMaki ? i : -1)).filter((i) => i >= 0);
      const firstPts = Math.floor(6 / firsts.length);
      firsts.forEach((i) => { perPlayer[i].rounds[r] += firstPts; });

      if (firsts.length === 1) {
        const rem = makis.filter((v) => v < maxMaki);
        const secondMaki = rem.length ? Math.max(...rem) : 0;
        if (secondMaki > 0) {
          const seconds = makis.map((v, i) => (v === secondMaki ? i : -1)).filter((i) => i >= 0);
          const secondPts = Math.floor(3 / seconds.length);
          seconds.forEach((i) => { perPlayer[i].rounds[r] += secondPts; });
        }
      }
    }
  }

  // Pudines al final (con 2 jugadores no hay penalización de -6)
  const puds = sushiState.players.map((p) => p.puddings);
  const maxP = Math.max(...puds);
  const minP = Math.min(...puds);
  if (maxP > 0 && !(maxP === minP)) {
    const winners = puds.map((v, i) => (v === maxP ? i : -1)).filter((i) => i >= 0);
    const wPts = Math.floor(6 / winners.length);
    winners.forEach((i) => { perPlayer[i].puddingPts += wPts; });

    if (nPlayers >= 3) {
      const losers = puds.map((v, i) => (v === minP ? i : -1)).filter((i) => i >= 0);
      const lPts = -Math.floor(6 / losers.length);
      losers.forEach((i) => { perPlayer[i].puddingPts += lPts; });
    }
  }

  perPlayer.forEach((pp) => {
    pp.total = pp.rounds[0] + pp.rounds[1] + pp.rounds[2] + pp.puddingPts;
  });
  return perPlayer;
}

function renderSushiModal() {
  const calc = calcSushiTotals();
  const pl = sushiState.players[sushiState.activeIdx];
  const rd = pl.rounds[sushiState.roundIdx];

  const rowStepper = (label, sub, key, val, isPudding = false) => `
    <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8 last:border-0">
      <div class="min-w-0">
        <div class="text-xs font-bold text-ink dark:text-white">${label}</div>
        <div class="text-[10px] text-inkMuted dark:text-white/55">${sub}</div>
      </div>
      <div class="inline-flex items-center gap-1.5 bg-canvas dark:bg-surfaceDark rounded-xl p-0.5 border border-[#E2DACE] dark:border-white/12">
        <button type="button" data-sg="${isPudding ? 'pud' : 'step'}" data-key="${key}" data-delta="-1" class="btn-tap w-8 h-8 rounded-lg font-bold text-base">−</button>
        <span class="w-6 text-center text-xs font-extrabold tabular-nums">${val}</span>
        <button type="button" data-sg="${isPudding ? 'pud' : 'step'}" data-key="${key}" data-delta="1" class="btn-tap w-8 h-8 rounded-lg font-bold text-base">+</button>
      </div>
    </div>
  `;

  const bodyHtml = `
    <div class="space-y-3.5">
      <!-- Selector de ronda -->
      <div class="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-white/8">
        ${[0, 1, 2].map((r) => `
          <button type="button" data-sg="round" data-val="${r}"
            class="btn-tap py-2 rounded-xl text-xs font-extrabold ${
              sushiState.roundIdx === r
                ? 'bg-[#E11D48] text-white shadow-xs'
                : 'text-inkMuted dark:text-white/70'
            }">Ronda ${r + 1}</button>
        `).join('')}
      </div>

      <!-- Jugadores -->
      <div class="scroll-strip-cards is-tight no-scrollbar">
        ${sushiState.players.map((p, i) => `
          <button type="button" data-sg="player" data-idx="${i}"
            class="btn-tap shrink-0 min-w-[96px] p-2 rounded-xl border text-left ${
              i === sushiState.activeIdx
                ? 'bg-pine dark:bg-[#E11D48] text-white border-transparent'
                : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
            }">
            <div class="flex items-center gap-1.5 min-w-0">
              ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
              <div class="text-[11px] font-bold truncate">${esc(p.name)}</div>
            </div>
            <div class="font-display text-base font-extrabold tabular-nums mt-0.5">${calc[i].total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
          </button>
        `).join('')}
      </div>

      <!-- Cartas de la ronda -->
      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        ${rowStepper('Tempura (cartas)', 'Cada pareja = 5 pts', 'tempura', rd.tempura)}
        ${rowStepper('Sashimi (cartas)', 'Cada trío = 10 pts', 'sashimi', rd.sashimi)}
        ${rowStepper('Gyozas', '1 / 3 / 6 / 10 / 15 pts', 'gyoza', rd.gyoza)}
        ${rowStepper('Iconos de Maki', '1.º +6 pts · 2.º +3 pts (auto)', 'maki', rd.maki)}
        <div class="pt-2 pb-1 text-[11px] font-bold text-inkMuted dark:text-white/55">Nigiris (normal y sobre Wasabi ×3)</div>
        <div class="grid grid-cols-3 gap-1.5 pb-2.5 border-b border-[#EFEAE0] dark:border-white/8">
          ${[
            { k: 'n1', l: 'Tortilla (1)', v: rd.n1 },
            { k: 'n2', l: 'Salmón (2)', v: rd.n2 },
            { k: 'n3', l: 'Calamar (3)', v: rd.n3 },
            { k: 'w1', l: 'Tortilla+W (3)', v: rd.w1 },
            { k: 'w2', l: 'Salmón+W (6)', v: rd.w2 },
            { k: 'w3', l: 'Calamar+W (9)', v: rd.w3 },
          ].map((x) => `
            <div class="p-1.5 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-[#E7E0D4] dark:border-white/10 text-center">
              <div class="text-[10px] font-bold text-inkMuted dark:text-white/60 truncate">${x.l}</div>
              <div class="mt-1 flex items-center justify-center gap-1.5">
                <button type="button" data-sg="step" data-key="${x.k}" data-delta="-1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/12 text-xs font-bold">−</button>
                <span class="text-xs font-extrabold tabular-nums w-4">${x.v}</span>
                <button type="button" data-sg="step" data-key="${x.k}" data-delta="1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/12 text-xs font-bold">+</button>
              </div>
            </div>
          `).join('')}
        </div>
        ${rowStepper('Pudines totales (toda la partida)', `Bonus actual: ${calc[sushiState.activeIdx].puddingPts >= 0 ? '+' : ''}${calc[sushiState.activeIdx].puddingPts} pts`, 'puddings', pl.puddings, true)}
      </div>
    </div>
  `;

  openModal({
    title: 'Sushi Go! — 3 Rondas',
    subtitle: 'Makis y pudines se calculan automáticamente entre jugadores',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          sushiState = null;
          openSushiGoScorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'sushigo', state: JSON.parse(JSON.stringify(sushiState)) };
          const totals = calcSushiTotals();
          totals.forEach((t, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(t.total);
          });
          draft.manualWinnerOverride = false;
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
          showToast('Totales de Sushi Go! pasados al registro', 'success');
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-sg]');
    if (!el) return;
    const act = el.dataset.sg;
    if (act === 'round') {
      sushiState.roundIdx = Number(el.dataset.val);
      renderSushiModal();
    } else if (act === 'player') {
      sushiState.activeIdx = Number(el.dataset.idx);
      renderSushiModal();
    } else if (act === 'step') {
      const k = el.dataset.key;
      const d = Number(el.dataset.delta);
      const rdObj = sushiState.players[sushiState.activeIdx].rounds[sushiState.roundIdx];
      rdObj[k] = Math.max(0, (rdObj[k] || 0) + d);
      renderSushiModal();
    } else if (act === 'pud') {
      const d = Number(el.dataset.delta);
      sushiState.players[sushiState.activeIdx].puddings = Math.max(0, sushiState.players[sushiState.activeIdx].puddings + d);
      renderSushiModal();
    }
  };
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: SKULL KING (10 RONDAS, APUESTAS, BAZAS Y BONOS)
// -------------------------------------------------------------------------
function openSkullKingScorer() {
  if (!skullKingState) hydrateCalculatorFromDraft('skullking');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const makeEmptyRounds = () => Array.from({ length: 10 }, () => ({ bid: 0, won: 0, bonus: 0, active: false }));
  if (!skullKingState || skullKingState.players.length !== names.length) {
    skullKingState = {
      roundIdx: 0, // 0..9 => Ronda 1..10
      players: names.map((name) => ({ name, rounds: makeEmptyRounds() })),
    };
  } else {
    skullKingState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderSkullKingModal();
}

function calcSkullKingRoundPoints(roundNumber, entry) {
  if (!entry || !entry.active) return 0;
  const bid = Number(entry.bid) || 0;
  const won = Number(entry.won) || 0;
  const bonus = Number(entry.bonus) || 0;
  if (bid === 0) {
    return won === 0 ? (10 * roundNumber + bonus) : (-10 * roundNumber);
  }
  return bid === won ? (20 * bid + bonus) : (-10 * Math.abs(bid - won));
}

function calcSkullKingTotals() {
  return skullKingState.players.map((p) =>
    p.rounds.reduce((sum, entry, idx) => sum + calcSkullKingRoundPoints(idx + 1, entry), 0)
  );
}

function renderSkullKingModal() {
  const rIdx = skullKingState.roundIdx;
  const rNum = rIdx + 1;
  const totals = calcSkullKingTotals();
  const tricksSum = skullKingState.players.reduce((s, p) => s + (p.rounds[rIdx].active ? p.rounds[rIdx].won : 0), 0);
  const anyActiveInRound = skullKingState.players.some((p) => p.rounds[rIdx].active);

  const roundPills = Array.from({ length: 10 }, (_, idx) => {
    const done = skullKingState.players.some((p) => p.rounds[idx].active);
    const current = idx === rIdx;
    return `
      <button type="button" data-sk="round" data-val="${idx}"
        class="btn-tap h-8 rounded-xl text-[11px] font-extrabold tabular-nums border relative ${
          current
            ? 'bg-[#1E293B] text-white border-[#1E293B] shadow-xs'
            : done
              ? 'bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 border-emeraldBrand/30'
              : 'bg-white dark:bg-surfaceDarkAlt text-inkMuted dark:text-white/60 border-[#E2DACE] dark:border-white/12'
        }">R${idx + 1}</button>
    `;
  }).join('');

  const playerCards = skullKingState.players.map((p, pIdx) => {
    const rd = p.rounds[rIdx];
    const rPts = calcSkullKingRoundPoints(rNum, rd);
    const exact = rd.active && rd.bid === rd.won;
    const missed = rd.active && rd.bid !== rd.won;

    return `
      <div class="p-3 rounded-2xl bg-white dark:bg-surfaceDarkAlt border transition-all ${
        exact
          ? 'border-emeraldBrand/45'
          : missed
            ? 'border-coralBrand/35'
            : 'border-[#E7E0D4] dark:border-white/10'
      }">
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <div class="flex items-center gap-2 min-w-0">
            ${renderPlayerAvatarHtml(p.name, 'w-7 h-7 text-[10px]')}
            <div class="min-w-0">
              <div class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(p.name)}</div>
              <div class="text-[10.5px] font-semibold text-inkMuted dark:text-white/55 tabular-nums">Acumulado: <strong class="text-ink dark:text-white">${totals[pIdx]} pts</strong></div>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-xl text-xs font-extrabold tabular-nums ${
            !rd.active
              ? 'bg-black/[0.05] dark:bg-white/10 text-inkMuted dark:text-white/50'
              : rPts >= 0
                ? 'bg-emeraldBrand/14 text-emeraldBrand dark:text-emerald-300'
                : 'bg-coralBrand/14 text-coralBrand'
          }">
            ${!rd.active ? 'Sin punt.' : `${rPts >= 0 ? '+' : ''}${rPts} pts`}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div class="p-2 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 flex items-center justify-between">
            <span class="text-[11px] font-bold text-inkMuted dark:text-white/60">Apuesta</span>
            <div class="inline-flex items-center gap-1">
              <button type="button" data-sk="bid" data-idx="${pIdx}" data-delta="-1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
              <span class="w-5 text-center text-xs font-extrabold tabular-nums">${rd.bid}</span>
              <button type="button" data-sk="bid" data-idx="${pIdx}" data-delta="1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
            </div>
          </div>

          <div class="p-2 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 flex items-center justify-between">
            <span class="text-[11px] font-bold text-inkMuted dark:text-white/60">Bazas</span>
            <div class="inline-flex items-center gap-1">
              <button type="button" data-sk="won" data-idx="${pIdx}" data-delta="-1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
              <span class="w-5 text-center text-xs font-extrabold tabular-nums">${rd.won}</span>
              <button type="button" data-sk="won" data-idx="${pIdx}" data-delta="1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
            </div>
          </div>
        </div>

        <div class="mt-2 flex items-center justify-between gap-1.5 flex-wrap">
          <div class="flex items-center gap-1 flex-wrap">
            <span class="text-[10px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/50">Bonus${rd.bonus ? ` (+${rd.bonus})` : ''}:</span>
            ${[10, 20, 30, 40].map((b) => `
              <button type="button" data-sk="bonus" data-idx="${pIdx}" data-delta="${b}" ${missed ? 'disabled' : ''}
                class="btn-tap px-1.5 py-0.5 rounded-lg text-[10.5px] font-bold border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 disabled:opacity-35">+${b}</button>
            `).join('')}
            ${rd.bonus > 0 ? `<button type="button" data-sk="bonus-clear" data-idx="${pIdx}" class="btn-tap px-1.5 py-0.5 rounded-lg text-[10px] font-bold text-coralBrand">✕</button>` : ''}
          </div>
          ${!rd.active ? `
            <button type="button" data-sk="zero-ok" data-idx="${pIdx}" class="btn-tap px-2 py-0.5 rounded-lg bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[10.5px] font-bold">
              0/0 ✓ (+${10 * rNum})
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  const bodyHtml = `
    <div class="space-y-3.5">
      <div class="grid grid-cols-5 gap-1.5">
        ${roundPills}
      </div>

      <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10 text-xs">
        <span class="font-bold text-ink dark:text-white">Ronda ${rNum} · ${rNum} ${rNum === 1 ? 'carta' : 'cartas'}</span>
        <span class="font-extrabold tabular-nums ${anyActiveInRound && tricksSum === rNum ? 'text-emeraldBrand dark:text-emerald-400' : 'text-inkMuted dark:text-white/60'}">
          Bazas: ${tricksSum}/${rNum}
        </span>
      </div>

      <div class="space-y-2.5">
        ${playerCards}
      </div>

      ${rIdx < 9 ? `
        <button type="button" data-sk="next-round" class="btn-tap w-full py-2.5 rounded-xl bg-[#1E293B] text-white text-xs font-extrabold">
          Pasar a Ronda ${rNum + 1} →
        </button>
      ` : ''}
    </div>
  `;

  openModal({
    title: 'Skull King — 10 Rondas',
    subtitle: 'Acertar = +20/baza (+bonus) · Cero = ±10×ronda · Fallo = −10/dif.',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          skullKingState = null;
          openSkullKingScorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'skullking', state: JSON.parse(JSON.stringify(skullKingState)) };
          const fin = calcSkullKingTotals();
          fin.forEach((tot, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(tot);
          });
          draft.manualWinnerOverride = false;
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
          showToast('Totales de Skull King pasados al registro', 'success');
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-sk]');
    if (!el) return;
    const act = el.dataset.sk;
    if (act === 'round') {
      skullKingState.roundIdx = Number(el.dataset.val);
      renderSkullKingModal();
    } else if (act === 'next-round') {
      skullKingState.roundIdx = Math.min(9, skullKingState.roundIdx + 1);
      renderSkullKingModal();
    } else if (act === 'bid' || act === 'won') {
      const pIdx = Number(el.dataset.idx);
      const delta = Number(el.dataset.delta);
      const rd = skullKingState.players[pIdx].rounds[skullKingState.roundIdx];
      rd.active = true;
      rd[act] = Math.max(0, Math.min(skullKingState.roundIdx + 1, rd[act] + delta));
      renderSkullKingModal();
    } else if (act === 'zero-ok') {
      const pIdx = Number(el.dataset.idx);
      const rd = skullKingState.players[pIdx].rounds[skullKingState.roundIdx];
      rd.active = true;
      rd.bid = 0;
      rd.won = 0;
      renderSkullKingModal();
    } else if (act === 'bonus') {
      const pIdx = Number(el.dataset.idx);
      const delta = Number(el.dataset.delta);
      const rd = skullKingState.players[pIdx].rounds[skullKingState.roundIdx];
      rd.active = true;
      rd.bonus = Math.max(0, rd.bonus + delta);
      renderSkullKingModal();
    } else if (act === 'bonus-clear') {
      const pIdx = Number(el.dataset.idx);
      skullKingState.players[pIdx].rounds[skullKingState.roundIdx].bonus = 0;
      renderSkullKingModal();
    }
  };
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: FARAWAY (8 REGIONES EN ORDEN INVERSO 8 → 1 + SANTUARIOS)
// -------------------------------------------------------------------------
function openFarawayScorer() {
  if (!farawayState) hydrateCalculatorFromDraft('faraway');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  if (!farawayState || farawayState.players.length !== names.length) {
    farawayState = {
      activeIdx: 0,
      players: names.map((name) => ({
        name,
        // Índices 0..7 corresponden a Carta 8 down to Carta 1 en orden de puntuación
        cards: [0, 0, 0, 0, 0, 0, 0, 0],
        sanctuaries: 0,
      })),
    };
  } else {
    farawayState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderFarawayModal();
}

function calcFarawayPlayer(p) {
  const regions = p.cards.reduce((a, b) => a + (Number(b) || 0), 0);
  const sanct = Number(p.sanctuaries) || 0;
  return { regions, sanct, total: regions + sanct };
}

function renderFarawayModal() {
  const pl = farawayState.players[farawayState.activeIdx];
  const sums = farawayState.players.map(calcFarawayPlayer);
  const curSum = sums[farawayState.activeIdx];

  const playerStrip = farawayState.players.map((p, i) => {
    const active = i === farawayState.activeIdx;
    return `
      <button type="button" data-fw="player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[98px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-[11px] font-bold truncate">${esc(p.name)}</div>
        </div>
        <div class="font-display text-lg font-extrabold tabular-nums mt-0.5">${sums[i].total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
      </button>
    `;
  }).join('');

  const cardSlotsHtml = pl.cards.map((val, idx) => {
    const cardNum = 8 - idx; // 8, 7, 6, 5, 4, 3, 2, 1
    return `
      <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8 last:border-0">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-7 h-7 rounded-lg bg-[#0284C7]/12 text-[#0284C7] dark:text-sky-300 font-display font-extrabold text-xs flex items-center justify-center shrink-0 tabular-nums">#${cardNum}</span>
          <div class="min-w-0">
            <div class="text-xs font-bold text-ink dark:text-white">Región ${cardNum}</div>
            <div class="text-[10px] text-inkMuted dark:text-white/50">${idx === 0 ? 'Se revela 1.ª (derecha)' : idx === 7 ? 'Se revela última (izquierda)' : `Paso ${idx + 1} de 8`}</div>
          </div>
        </div>
        <div class="inline-flex items-center gap-1">
          <button type="button" data-fw="card-step" data-slot="${idx}" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
          <input type="number" inputmode="numeric" data-fw-input="card" data-slot="${idx}" value="${val || ''}" placeholder="0"
            class="w-12 h-8 text-center input-pro rounded-lg text-xs font-extrabold tabular-nums text-ink dark:text-white outline-none" />
          <button type="button" data-fw="card-step" data-slot="${idx}" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
          <button type="button" data-fw="card-step" data-slot="${idx}" data-delta="5" class="btn-tap px-1.5 h-8 rounded-lg bg-[#0284C7]/12 text-[#0284C7] dark:text-sky-300 text-[10.5px] font-extrabold">+5</button>
        </div>
      </div>
    `;
  }).join('');

  const bodyHtml = `
    <div class="space-y-3.5">
      <div class="scroll-strip-cards is-tight no-scrollbar">
        ${playerStrip}
      </div>

      <div class="px-3.5 py-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        <div class="flex items-center justify-between pb-2 mb-1 border-b border-[#EFEAE0] dark:border-white/10">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Orden inverso (8 → 1)</span>
          <span id="fw-subtotal-badge" class="text-xs font-extrabold text-[#0284C7] dark:text-sky-300 tabular-nums">Regiones: ${curSum.regions} pts</span>
        </div>
        ${cardSlotsHtml}
      </div>

      <div class="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-500/10 border border-amber-300/50 dark:border-amber-400/25 flex items-center justify-between gap-2">
        <div>
          <div class="text-xs font-extrabold text-ink dark:text-white">Santuarios</div>
          <div class="text-[10.5px] text-inkMuted dark:text-white/55">Suma total de cartas de Santuario</div>
        </div>
        <div class="inline-flex items-center gap-1">
          <button type="button" data-fw="sanct-step" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
          <input type="number" inputmode="numeric" data-fw-input="sanct" value="${pl.sanctuaries || ''}" placeholder="0"
            class="w-12 h-8 text-center bg-white dark:bg-surfaceDark border border-black/[0.1] dark:border-white/15 rounded-lg text-xs font-extrabold tabular-nums text-ink dark:text-white outline-none" />
          <button type="button" data-fw="sanct-step" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
          <button type="button" data-fw="sanct-step" data-delta="5" class="btn-tap px-1.5 h-8 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10.5px] font-extrabold">+5</button>
        </div>
      </div>
    </div>
  `;

  openModal({
    title: 'Faraway — Recuento Inverso',
    subtitle: 'Ve revelando de derecha (8) a izquierda (1) y suma los Santuarios',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          farawayState = null;
          openFarawayScorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'faraway', state: JSON.parse(JSON.stringify(farawayState)) };
          farawayState.players.forEach((p, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(calcFarawayPlayer(p).total);
          });
          draft.manualWinnerOverride = false;
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
          showToast('Totales de Faraway pasados al registro', 'success');
        },
      },
    ],
  });

  const bodyEl = document.getElementById('modal-body');
  bodyEl.onclick = (e) => {
    const el = e.target.closest('[data-fw]');
    if (!el) return;
    const act = el.dataset.fw;
    if (act === 'player') {
      farawayState.activeIdx = Number(el.dataset.idx);
      renderFarawayModal();
    } else if (act === 'card-step') {
      const slot = Number(el.dataset.slot);
      const delta = Number(el.dataset.delta);
      const cur = farawayState.players[farawayState.activeIdx].cards[slot] || 0;
      farawayState.players[farawayState.activeIdx].cards[slot] = Math.max(0, cur + delta);
      renderFarawayModal();
    } else if (act === 'sanct-step') {
      const delta = Number(el.dataset.delta);
      const cur = farawayState.players[farawayState.activeIdx].sanctuaries || 0;
      farawayState.players[farawayState.activeIdx].sanctuaries = Math.max(0, cur + delta);
      renderFarawayModal();
    }
  };

  bodyEl.querySelectorAll('[data-fw-input]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const kind = e.target.dataset.fwInput;
      const val = Math.max(0, Number(e.target.value) || 0);
      const p = farawayState.players[farawayState.activeIdx];
      if (kind === 'card') {
        p.cards[Number(e.target.dataset.slot)] = val;
      } else {
        p.sanctuaries = val;
      }
      const updated = calcFarawayPlayer(p);
      const subEl = document.getElementById('fw-subtotal-badge');
      if (subEl) subEl.textContent = `Regiones: ${updated.regions} pts`;
      const activeBtn = bodyEl.querySelector(`[data-fw="player"][data-idx="${farawayState.activeIdx}"] .font-display`);
      if (activeBtn) activeBtn.innerHTML = `${updated.total} <span class="text-[10px] font-medium opacity-75">pts</span>`;
    });
  });
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: ODÍN (RONDAS HASTA 15 PTS · GANA EL MENOR PUNTAJE)
// -------------------------------------------------------------------------
function openOdinScorer() {
  if (!odinState) hydrateCalculatorFromDraft('odin');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  if (!odinState || odinState.players.length !== names.length) {
    odinState = {
      players: names.map((name) => ({ name, rounds: [], pending: 0 })),
    };
  } else {
    odinState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderOdinModal();
}

function renderOdinModal() {
  const totals = odinState.players.map((p) => p.rounds.reduce((a, b) => a + b, 0));
  const maxTot = Math.max(0, ...totals);
  const minTot = totals.length > 0 ? Math.min(...totals) : 0;
  const roundsPlayed = odinState.players[0]?.rounds.length || 0;
  const gameEnded = maxTot >= 15;

  const playerStrip = odinState.players.map((p, i) => {
    const tot = totals[i];
    const pct = Math.min(100, Math.round((tot / 15) * 100));
    const isLeader = roundsPlayed > 0 && tot === minTot;
    const hitLimit = tot >= 15;
    return `
      <div class="shrink-0 min-w-[104px] p-2.5 rounded-2xl border ${
        isLeader
          ? 'bg-gradient-to-br from-[#4F46E5] to-[#312E81] text-white border-transparent shadow-sm'
          : hitLimit
            ? 'bg-coralBrand/10 border-coralBrand/40 text-ink dark:text-white'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
      }">
        <div class="flex items-center justify-between gap-1">
          <span class="flex items-center gap-1.5 min-w-0">
            ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
            <span class="text-xs font-bold truncate">${esc(p.name)}</span>
          </span>
          ${isLeader ? `<span class="text-amber-300 text-xs shrink-0">★</span>` : ''}
        </div>
        <div class="mt-1 flex items-baseline justify-between">
          <span class="font-display text-lg font-extrabold tabular-nums">${tot}</span>
          <span class="text-[10px] opacity-75">/ 15</span>
        </div>
        <div class="mt-1.5 h-1.5 rounded-full overflow-hidden ${isLeader ? 'bg-white/25' : 'bg-black/8 dark:bg-white/10'}">
          <div class="h-full rounded-full ${hitLimit ? 'bg-coralBrand' : (isLeader ? 'bg-emerald-300' : 'bg-[#4F46E5]')}" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  const roundInputRows = odinState.players.map((p, i) => `
    <div class="p-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px]')}
          <span class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(p.name)}</span>
        </span>
        <span class="text-xs font-extrabold tabular-nums ${p.pending === 0 ? 'text-emeraldBrand dark:text-emerald-400' : 'text-[#4F46E5] dark:text-indigo-300'}">
          ${p.pending === 0 ? '0 (Ganó ronda)' : `+${p.pending} ${p.pending === 1 ? 'carta' : 'cartas'}`}
        </span>
      </div>
      <div class="grid grid-cols-7 gap-1">
        ${[0, 1, 2, 3, 4, 5].map((n) => `
          <button type="button" data-od="set-pending" data-idx="${i}" data-val="${n}"
            class="btn-tap h-8 rounded-lg text-xs font-extrabold tabular-nums border ${
              p.pending === n
                ? (n === 0 ? 'bg-emeraldBrand text-white border-emeraldBrand' : 'bg-[#4F46E5] text-white border-[#4F46E5]')
                : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.07] dark:border-white/10'
            }">${n}</button>
        `).join('')}
        <button type="button" data-od="inc-pending" data-idx="${i}"
          class="btn-tap h-8 rounded-lg text-xs font-extrabold border bg-canvas dark:bg-surfaceDark text-ink dark:text-white border-black/[0.07] dark:border-white/10">+1</button>
      </div>
    </div>
  `).join('');

  const bodyHtml = `
    <div class="space-y-3.5">
      ${gameEnded ? `<div class="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/35 text-amber-800 dark:text-amber-200 text-xs font-bold text-center">¡Alguien llegó a 15+ pts! Partida terminada · gana quien tenga MENOS puntos.</div>` : ''}

      <div class="scroll-strip-cards is-tight no-scrollbar">
        ${playerStrip}
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between px-0.5">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Cartas restantes — Ronda ${roundsPlayed + 1}</span>
          ${roundsPlayed > 0 ? `<button type="button" data-od="undo" class="btn-tap text-xs font-bold text-coralBrand">Deshacer R${roundsPlayed}</button>` : ''}
        </div>
        ${roundInputRows}
      </div>

      <button type="button" data-od="commit-round" class="btn-tap w-full py-2.5 rounded-xl bg-[#4F46E5] text-white text-xs font-extrabold shadow-xs">
        Registrar Ronda ${roundsPlayed + 1}
      </button>
    </div>
  `;

  openModal({
    title: 'Odín — Marcador de Rondas',
    subtitle: '1 punto por cada carta en mano · termina al llegar a 15 (gana el menor)',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          odinState = null;
          openOdinScorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'odin', state: JSON.parse(JSON.stringify(odinState)) };
          odinState.players.forEach((p, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(p.rounds.reduce((a, b) => a + b, 0));
          });
          draft.manualWinnerOverride = false;
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
          showToast('Totales de Odín pasados al registro (gana el menor)', 'success');
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-od]');
    if (!el) return;
    const act = el.dataset.od;
    if (act === 'set-pending') {
      odinState.players[Number(el.dataset.idx)].pending = Number(el.dataset.val);
      renderOdinModal();
    } else if (act === 'inc-pending') {
      const p = odinState.players[Number(el.dataset.idx)];
      p.pending = Math.min(15, (p.pending || 0) + 1);
      renderOdinModal();
    } else if (act === 'commit-round') {
      odinState.players.forEach((p) => {
        p.rounds.push(Number(p.pending) || 0);
        p.pending = 0;
      });
      renderOdinModal();
    } else if (act === 'undo') {
      odinState.players.forEach((p) => { p.rounds.pop(); });
      renderOdinModal();
    }
  };
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: HARMONIES (ÁRBOLES, MONTAÑAS, CAMPOS, EDIFICIOS, AGUA, ANIMALES Y ESPÍRITU)
// -------------------------------------------------------------------------
function openHarmoniesScorer() {
  if (!harmoniesState) hydrateCalculatorFromDraft('harmonies');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const makeEmptyPlayer = (name) => ({
    name,
    t1: 0, t2: 0, t3: 0,
    m1: 0, m2: 0, m3: 0,
    fields: 0,
    buildings: 0,
    riverLen: 0,
    islands: 0,
    animalCards: [],
    animalAdj: 0,
    spirit: 0,
    cubes: 0,
  });

  if (!harmoniesState || harmoniesState.players.length !== names.length) {
    harmoniesState = {
      side: draft.harmoniesSide || 'A',
      spiritEnabled: Boolean(draft.harmoniesSpirit),
      activeIdx: 0,
      players: names.map(makeEmptyPlayer),
    };
  } else {
    harmoniesState.side = draft.harmoniesSide || harmoniesState.side || 'A';
    harmoniesState.spiritEnabled = Boolean(draft.harmoniesSpirit);
    harmoniesState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderHarmoniesModal();
}

function calcHarmoniesRiverPts(len) {
  const n = Math.max(0, Number(len) || 0);
  if (n <= 1) return 0;
  const table = [0, 0, 2, 5, 8, 11, 15];
  if (n <= 6) return table[n];
  return 15 + (n - 6) * 4;
}

function calcHarmoniesPlayer(p, side, spiritEnabled) {
  const trees = (p.t1 || 0) * 1 + (p.t2 || 0) * 3 + (p.t3 || 0) * 7;
  const mountains = (p.m1 || 0) * 1 + (p.m2 || 0) * 3 + (p.m3 || 0) * 7;
  const fields = (p.fields || 0) * 5;
  const buildings = (p.buildings || 0) * 5;
  const water = side === 'B' ? (p.islands || 0) * 5 : calcHarmoniesRiverPts(p.riverLen || 0);
  const landscapes = trees + mountains + fields + buildings + water;
  const animalsCardsSum = (p.animalCards || []).reduce((a, b) => a + b, 0);
  const animals = Math.max(0, animalsCardsSum + (Number(p.animalAdj) || 0));
  const spirit = spiritEnabled ? Math.max(0, Number(p.spirit) || 0) : 0;
  const total = landscapes + animals + spirit;
  return {
    trees, mountains, fields, buildings, water, landscapes, animals, spirit, total,
    cubes: Math.max(0, Number(p.cubes) || 0),
  };
}

function renderHarmoniesModal() {
  const side = harmoniesState.side;
  const spiritOn = harmoniesState.spiritEnabled;
  const pl = harmoniesState.players[harmoniesState.activeIdx];
  const allCalcs = harmoniesState.players.map((p) => calcHarmoniesPlayer(p, side, spiritOn));
  const cur = allCalcs[harmoniesState.activeIdx];

  const playerStrip = harmoniesState.players.map((p, i) => {
    const c = allCalcs[i];
    const active = i === harmoniesState.activeIdx;
    return `
      <button type="button" data-hm="player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[104px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#2E7D4F] text-white border-[#2E7D4F] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-[11px] font-bold truncate">${esc(p.name)}</div>
        </div>
        <div class="font-display text-lg font-extrabold tabular-nums leading-tight mt-0.5">${c.total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
        <div class="text-[9.5px] font-semibold mt-0.5 tabular-nums ${active ? 'text-white/80' : 'text-inkMuted dark:text-white/50'}">P:${c.landscapes} · A:${c.animals}${spiritOn ? ` · E:${c.spirit}` : ''}</div>
      </button>
    `;
  }).join('');

  const stepperRow = (label, sub, key, val, ptsText, dotColor) => `
    <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8 last:border-0">
      <div class="flex items-center gap-2 min-w-0">
        <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${dotColor};"></span>
        <div class="min-w-0">
          <div class="text-xs font-bold text-ink dark:text-white leading-tight">${label}</div>
          <div class="text-[10px] text-inkMuted dark:text-white/55">${sub}${ptsText ? ` · <strong class="text-ink dark:text-white/85">${ptsText}</strong>` : ''}</div>
        </div>
      </div>
      <div class="inline-flex items-center gap-1.5 bg-canvas dark:bg-surfaceDark rounded-xl p-0.5 border border-black/[0.08] dark:border-white/12 shrink-0">
        <button type="button" data-hm="step" data-key="${key}" data-delta="-1" class="btn-tap w-8 h-8 rounded-lg font-bold text-base">−</button>
        <span class="w-6 text-center text-xs font-extrabold tabular-nums">${val}</span>
        <button type="button" data-hm="step" data-key="${key}" data-delta="1" class="btn-tap w-8 h-8 rounded-lg font-bold text-base">+</button>
      </div>
    </div>
  `;

  const waterSectionHtml = side === 'A' ? `
    <div class="p-3 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2.5">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#2B7A9B]"></span>
          <div>
            <div class="text-xs font-extrabold text-ink dark:text-white">Agua · Río más largo (Cara A)</div>
            <div class="text-[10px] text-inkMuted dark:text-white/55">2→2 · 3→5 · 4→8 · 5→11 · 6→15 · 7+→+4 c/u</div>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded-lg bg-[#2B7A9B]/14 text-[#2B7A9B] dark:text-sky-300 text-xs font-extrabold tabular-nums">${cur.water} pts</span>
      </div>

      <div class="flex items-center justify-between gap-2">
        <div class="grid grid-cols-7 gap-1 flex-1">
          ${[0, 2, 3, 4, 5, 6, 7].map((len) => `
            <button type="button" data-hm="set-river" data-val="${len}"
              class="btn-tap h-8 rounded-lg text-[11px] font-extrabold tabular-nums border ${
                pl.riverLen === len
                  ? 'bg-[#2B7A9B] text-white border-[#2B7A9B]'
                  : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.07] dark:border-white/10'
              }">${len}</button>
          `).join('')}
        </div>
        <div class="inline-flex items-center gap-1 shrink-0">
          <button type="button" data-hm="step" data-key="riverLen" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
          <span class="w-5 text-center text-xs font-extrabold tabular-nums">${pl.riverLen}</span>
          <button type="button" data-hm="step" data-key="riverLen" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
        </div>
      </div>
    </div>
  ` : `
    <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
      <div class="flex items-center justify-between pb-1.5 mb-1 border-b border-[#EFEAE0] dark:border-white/8">
        <span class="text-xs font-extrabold text-ink dark:text-white">Agua · Islas (Cara B)</span>
        <span class="px-2 py-0.5 rounded-lg bg-[#D9911E]/15 text-amber-800 dark:text-amber-300 text-xs font-extrabold tabular-nums">${cur.water} pts</span>
      </div>
      ${stepperRow('Islas separadas por agua', '5 pts por cada isla', 'islands', pl.islands, `${cur.water} pts`, '#2B7A9B')}
    </div>
  `;

  const animalChips = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15];

  const bodyHtml = `
    <div class="space-y-3">
      <!-- Configuración Cara A/B + Espíritu -->
      <div class="flex flex-wrap items-center gap-1.5">
        <button type="button" data-hm="side" data-val="A"
          class="btn-tap flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold border ${side === 'A' ? 'bg-[#2B7A9B] text-white border-[#2B7A9B]' : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white/80 border-[#E2DACE] dark:border-white/12'}">
          Cara A · Río
        </button>
        <button type="button" data-hm="side" data-val="B"
          class="btn-tap flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold border ${side === 'B' ? 'bg-[#D9911E] text-white border-[#D9911E]' : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white/80 border-[#E2DACE] dark:border-white/12'}">
          Cara B · Islas
        </button>
        <button type="button" data-hm="toggle-spirit"
          class="btn-tap py-1.5 px-3 rounded-xl text-xs font-bold border ${spiritOn ? 'bg-[#6D5A99] text-white border-[#6D5A99]' : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white/80 border-[#E2DACE] dark:border-white/12'}">
          ${spiritOn ? '✓ Espíritu' : '+ Espíritu'}
        </button>
      </div>

      <!-- Selector de jugadores -->
      <div class="scroll-strip-cards is-tight no-scrollbar">
        ${playerStrip}
      </div>

      <!-- Árboles -->
      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        <div class="flex items-center justify-between pb-1.5 mb-0.5 border-b border-[#EFEAE0] dark:border-white/8">
          <span class="text-xs font-extrabold text-ink dark:text-white">Árboles</span>
          <span class="px-2 py-0.5 rounded-lg bg-[#2E7D4F]/14 text-[#2E7D4F] dark:text-emerald-300 text-xs font-extrabold tabular-nums">${cur.trees} pts</span>
        </div>
        ${stepperRow('1 ficha (verde)', '1 pt c/u', 't1', pl.t1, `${pl.t1 * 1} pts`, '#2E7D4F')}
        ${stepperRow('2 fichas (marrón + verde)', '3 pts c/u', 't2', pl.t2, `${pl.t2 * 3} pts`, '#2E7D4F')}
        ${stepperRow('3 fichas (2 marrones + verde)', '7 pts c/u', 't3', pl.t3, `${pl.t3 * 7} pts`, '#2E7D4F')}
      </div>

      <!-- Montañas -->
      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        <div class="flex items-center justify-between pb-1.5 mb-0.5 border-b border-[#EFEAE0] dark:border-white/8">
          <div>
            <span class="text-xs font-extrabold text-ink dark:text-white">Montañas</span>
            <span class="text-[10px] text-inkMuted dark:text-white/50 ml-1">(solo adyacentes a otra)</span>
          </div>
          <span class="px-2 py-0.5 rounded-lg bg-slate-500/15 text-slate-700 dark:text-slate-200 text-xs font-extrabold tabular-nums">${cur.mountains} pts</span>
        </div>
        ${stepperRow('Altura 1 (1 gris)', '1 pt c/u', 'm1', pl.m1, `${pl.m1 * 1} pts`, '#64748B')}
        ${stepperRow('Altura 2 (2 grises)', '3 pts c/u', 'm2', pl.m2, `${pl.m2 * 3} pts`, '#64748B')}
        ${stepperRow('Altura 3 (3 grises)', '7 pts c/u', 'm3', pl.m3, `${pl.m3 * 7} pts`, '#64748B')}
      </div>

      <!-- Campos y Edificios -->
      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        <div class="flex items-center justify-between pb-1.5 mb-0.5 border-b border-[#EFEAE0] dark:border-white/8">
          <span class="text-xs font-extrabold text-ink dark:text-white">Campos y Edificios</span>
          <span class="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-extrabold tabular-nums">${cur.fields + cur.buildings} pts</span>
        </div>
        ${stepperRow('Campos (2+ amarillas juntas)', '5 pts por grupo', 'fields', pl.fields, `${cur.fields} pts`, '#EAB308')}
        ${stepperRow('Edificios (rodeados de 3+ colores)', '5 pts c/u', 'buildings', pl.buildings, `${cur.buildings} pts`, '#DC2626')}
      </div>

      <!-- Agua -->
      ${waterSectionHtml}

      <!-- Animales -->
      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-extrabold text-ink dark:text-white">Cartas de Animales</div>
            <div class="text-[10px] text-inkMuted dark:text-white/55">Toca los puntos de cada carta para ir sumándolos</div>
          </div>
          <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-extrabold tabular-nums">${cur.animals} pts</span>
        </div>

        <div class="grid grid-cols-5 gap-1.5">
          ${animalChips.map((pts) => `
            <button type="button" data-hm="add-animal" data-val="${pts}"
              class="btn-tap h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 text-xs font-extrabold tabular-nums text-ink dark:text-white hover:border-emeraldBrand">
              +${pts}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center justify-between gap-2 pt-1 text-[11px]">
          <div class="min-w-0 text-inkMuted dark:text-white/60 truncate">
            ${pl.animalCards.length > 0
              ? `Cartas: <strong class="text-ink dark:text-white tabular-nums">${pl.animalCards.join(' + ')}</strong>`
              : 'Sin cartas sumadas aún'}
          </div>
          <div class="inline-flex items-center gap-1 shrink-0">
            <button type="button" data-hm="animal-adj" data-delta="-1" class="btn-tap px-2 h-7 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-xs">−1</button>
            <button type="button" data-hm="animal-adj" data-delta="1" class="btn-tap px-2 h-7 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-xs">+1</button>
            ${pl.animalCards.length > 0 ? `<button type="button" data-hm="undo-animal" class="btn-tap px-2 h-7 rounded-lg text-coralBrand font-bold text-xs">Deshacer</button>` : ''}
          </div>
        </div>
      </div>

      ${spiritOn ? `
        <!-- Espíritu de la Naturaleza -->
        <div class="p-3.5 rounded-2xl bg-violet-50/80 dark:bg-violet-500/10 border border-violet-300/50 dark:border-violet-400/25 flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-extrabold text-ink dark:text-white">Espíritu de la Naturaleza</div>
            <div class="text-[10.5px] text-inkMuted dark:text-white/55">Puntos de tu carta de Espíritu</div>
          </div>
          <div class="inline-flex items-center gap-1">
            <button type="button" data-hm="step" data-key="spirit" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
            <span class="w-8 text-center text-xs font-extrabold tabular-nums">${cur.spirit}</span>
            <button type="button" data-hm="step" data-key="spirit" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
            <button type="button" data-hm="step" data-key="spirit" data-delta="5" class="btn-tap px-1.5 h-8 rounded-lg bg-[#6D5A99]/18 text-[#6D5A99] dark:text-violet-300 text-[10.5px] font-extrabold">+5</button>
          </div>
        </div>
      ` : ''}

      <!-- Desempate: Cubos de animal -->
      <div class="px-3.5 py-2 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt/70 border border-black/[0.06] dark:border-white/10 flex items-center justify-between gap-2">
        <div>
          <div class="text-[11px] font-bold text-ink dark:text-white">Cubos de animal (opcional · desempate)</div>
          <div class="text-[10px] text-inkMuted dark:text-white/50">Solo importa si dos jugadores empatan en puntos</div>
        </div>
        <div class="inline-flex items-center gap-1 shrink-0">
          <button type="button" data-hm="step" data-key="cubes" data-delta="-1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
          <span class="w-6 text-center text-xs font-extrabold tabular-nums">${cur.cubes}</span>
          <button type="button" data-hm="step" data-key="cubes" data-delta="1" class="btn-tap w-7 h-7 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
        </div>
      </div>

      <!-- Resumen en vivo del jugador activo -->
      <div class="p-3 rounded-2xl bg-pine text-white flex items-center justify-between gap-2">
        <div class="text-[11px] text-white/80 tabular-nums">
          Paisajes <strong class="text-white">${cur.landscapes}</strong> + Animales <strong class="text-white">${cur.animals}</strong>${spiritOn ? ` + Espíritu <strong class="text-white">${cur.spirit}</strong>` : ''}
        </div>
        <div class="font-display text-lg font-extrabold text-amber-300 tabular-nums shrink-0">${cur.total} pts</div>
      </div>
    </div>
  `;

  openModal({
    title: 'Harmonies — Calculadora',
    subtitle: 'Desglose completo sincronizado con el registro y Google Sheets',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => {
          harmoniesState = null;
          openHarmoniesScorer();
        },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'harmonies', state: JSON.parse(JSON.stringify(harmoniesState)) };
          const finalCalcs = harmoniesState.players.map((p) => calcHarmoniesPlayer(p, harmoniesState.side, harmoniesState.spiritEnabled));
          draft.harmoniesSide = harmoniesState.side;
          draft.harmoniesSpirit = harmoniesState.spiritEnabled;
          draft.harmoniesBreakdown = harmoniesState.players.map((p, idx) => ({
            jugador: p.name,
            arboles: finalCalcs[idx].trees,
            montanas: finalCalcs[idx].mountains,
            campos: finalCalcs[idx].fields,
            edificios: finalCalcs[idx].buildings,
            agua: finalCalcs[idx].water,
            paisajes: finalCalcs[idx].landscapes,
            animales: finalCalcs[idx].animals,
            espiritu: finalCalcs[idx].spirit,
            cubos: finalCalcs[idx].cubes,
            total: finalCalcs[idx].total,
          }));

          finalCalcs.forEach((c, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(c.total);
          });

          // Comprueba si hubo empate en puntos y desempate por cubos de animal
          const maxScore = Math.max(...finalCalcs.map((c) => c.total));
          const tiedIdxs = finalCalcs.map((c, idx) => (c.total === maxScore ? idx : -1)).filter((i) => i >= 0);
          const maxCubes = tiedIdxs.length > 1 ? Math.max(...tiedIdxs.map((i) => finalCalcs[i].cubes)) : 0;
          const minCubes = tiedIdxs.length > 1 ? Math.min(...tiedIdxs.map((i) => finalCalcs[i].cubes)) : 0;

          if (tiedIdxs.length > 1 && maxCubes > minCubes) {
            draft.manualWinnerOverride = true;
            draft.players.forEach((p, idx) => {
              p.winner = tiedIdxs.includes(idx) && finalCalcs[idx].cubes === maxCubes;
            });
            showToast('Totales pasados (desempate aplicado por cubos)', 'success');
          } else {
            draft.manualWinnerOverride = false;
            syncAutoWinners();
            showToast('Totales y desglose de Harmonies pasados al registro', 'success');
          }

          saveDraftLocal();
          renderLogTab();
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-hm]');
    if (!el) return;
    const act = el.dataset.hm;
    const p = harmoniesState.players[harmoniesState.activeIdx];
    if (act === 'player') {
      harmoniesState.activeIdx = Number(el.dataset.idx);
      renderHarmoniesModal();
    } else if (act === 'side') {
      harmoniesState.side = el.dataset.val === 'B' ? 'B' : 'A';
      renderHarmoniesModal();
    } else if (act === 'toggle-spirit') {
      harmoniesState.spiritEnabled = !harmoniesState.spiritEnabled;
      renderHarmoniesModal();
    } else if (act === 'step') {
      const k = el.dataset.key;
      const d = Number(el.dataset.delta);
      p[k] = Math.max(0, (Number(p[k]) || 0) + d);
      renderHarmoniesModal();
    } else if (act === 'set-river') {
      p.riverLen = Math.max(0, Number(el.dataset.val) || 0);
      renderHarmoniesModal();
    } else if (act === 'add-animal') {
      p.animalCards.push(Number(el.dataset.val) || 0);
      renderHarmoniesModal();
    } else if (act === 'undo-animal') {
      p.animalCards.pop();
      renderHarmoniesModal();
    } else if (act === 'animal-adj') {
      const d = Number(el.dataset.delta);
      const cardsSum = p.animalCards.reduce((a, b) => a + b, 0);
      if (cardsSum + (p.animalAdj || 0) + d >= 0) {
        p.animalAdj = (p.animalAdj || 0) + d;
      }
      renderHarmoniesModal();
    }
  };
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: WYRMSPAN (GREMIO, DRAGONES, HUEVOS, RECURSOS, OBJETIVOS Y MONEDAS)
// -------------------------------------------------------------------------
function openWyrmspanScorer() {
  if (!wyrmspanState) hydrateCalculatorFromDraft('wyrmspan');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const makePlayer = (name) => ({
    name,
    guild: 0,
    dragons: 0,
    endAbilities: 0,
    objectives: 0,
    eggs: 0,
    cached: 0,
    tucked: 0,
    coins: 0,
    remResources: 0,
    remCards: 0,
  });
  if (!wyrmspanState || wyrmspanState.players.length !== names.length) {
    wyrmspanState = {
      activeIdx: 0,
      players: names.map(makePlayer),
    };
  } else {
    wyrmspanState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderWyrmspanModal();
}

function calcWyrmspanPlayer(p) {
  const guild = Math.max(0, Number(p.guild) || 0);
  const dragons = Math.max(0, Number(p.dragons) || 0);
  const endAbilities = Math.max(0, Number(p.endAbilities) || 0);
  const objectives = Math.max(0, Number(p.objectives) || 0);
  const eggs = Math.max(0, Number(p.eggs) || 0);
  const cached = Math.max(0, Number(p.cached) || 0);
  const tucked = Math.max(0, Number(p.tucked) || 0);
  const coins = Math.max(0, Number(p.coins) || 0);
  const remResources = Math.max(0, Number(p.remResources) || 0);
  const remResPts = Math.floor(remResources / 4);
  const remCards = Math.max(0, Number(p.remCards) || 0);
  const total = guild + dragons + endAbilities + objectives + eggs + cached + tucked + coins + remResPts;
  return { guild, dragons, endAbilities, objectives, eggs, cached, tucked, coins, remResources, remResPts, remCards, total };
}

function renderWyrmspanModal() {
  const pl = wyrmspanState.players[wyrmspanState.activeIdx];
  const allCalcs = wyrmspanState.players.map(calcWyrmspanPlayer);
  const cur = allCalcs[wyrmspanState.activeIdx];

  const playerStrip = wyrmspanState.players.map((p, i) => {
    const active = i === wyrmspanState.activeIdx;
    return `
      <button type="button" data-wy="player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[104px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#9B2C4E] text-white border-[#9B2C4E] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-[11px] font-bold truncate">${esc(p.name)}</div>
        </div>
        <div class="font-display text-lg font-extrabold tabular-nums mt-0.5">${allCalcs[i].total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
      </button>
    `;
  }).join('');

  const numRow = (label, sub, key, val, quickStep = 5, accent = '#9B2C4E') => `
    <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8 last:border-0">
      <div class="min-w-0">
        <div class="text-xs font-bold text-ink dark:text-white leading-tight">${label}</div>
        <div class="text-[10px] text-inkMuted dark:text-white/55">${sub}</div>
      </div>
      <div class="inline-flex items-center gap-1 shrink-0">
        <button type="button" data-wy="step" data-key="${key}" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
        <input type="number" inputmode="numeric" data-wy-input="${key}" value="${val || ''}" placeholder="0"
          class="w-12 h-8 text-center input-pro rounded-lg text-xs font-extrabold tabular-nums text-ink dark:text-white outline-none" />
        <button type="button" data-wy="step" data-key="${key}" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
        ${quickStep ? `<button type="button" data-wy="step" data-key="${key}" data-delta="${quickStep}" class="btn-tap px-1.5 h-8 rounded-lg text-[10.5px] font-extrabold" style="background:${accent}18; color:${accent};">+${quickStep}</button>` : ''}
      </div>
    </div>
  `;

  const bodyHtml = `
    <div class="space-y-3">
      <div class="scroll-strip-cards is-tight no-scrollbar">${playerStrip}</div>

      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        ${numRow('Gremio de Dragones', 'Losetas de bonificación del tablero de Gremio', 'guild', pl.guild, 5)}
        ${numRow('Dragones (pts impresos)', 'Suma del valor impreso en cada dragón jugado', 'dragons', pl.dragons, 5)}
        ${numRow('Habilidades de fin de partida', 'Puntos por efectos de final de partida', 'endAbilities', pl.endAbilities, 5)}
        ${numRow('Objetivos públicos', 'Suma de las 4 rondas', 'objectives', pl.objectives, 2)}
      </div>

      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        ${numRow('Huevos', '1 pt por cada huevo en tus cuevas', 'eggs', pl.eggs, 5, '#D97706')}
        ${numRow('Recursos almacenados', '1 pt por recurso guardado sobre dragones', 'cached', pl.cached, 5, '#D97706')}
        ${numRow('Cartas solapadas', '1 pt por carta debajo de dragones', 'tucked', pl.tucked, 5, '#D97706')}
      </div>

      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        ${numRow('Monedas restantes', '1 pt c/u · 1.er desempate oficial', 'coins', pl.coins, 0, '#B45309')}
        ${numRow('Recursos sobrantes (cant.)', `4 recursos = 1 pt · ahora: +${cur.remResPts} pts · 2.º desempate`, 'remResources', pl.remResources, 4, '#227554')}
        ${numRow('Cartas en mano (opcional)', '0 pts · 3.er desempate oficial', 'remCards', pl.remCards, 0, '#64748B')}
      </div>

      <div class="p-3 rounded-2xl bg-[#6B1A33] text-white flex items-center justify-between gap-2">
        <span class="text-xs font-semibold text-white/85">Total de ${esc(pl.name)}</span>
        <span id="wy-total-badge" class="font-display text-lg font-extrabold text-amber-300 tabular-nums">${cur.total} pts</span>
      </div>
    </div>
  `;

  openModal({
    title: 'Wyrmspan — Hoja de Puntuación',
    subtitle: 'Suma todas las categorías y aplica desempate automático',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => { wyrmspanState = null; openWyrmspanScorer(); },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'wyrmspan', state: JSON.parse(JSON.stringify(wyrmspanState)) };
          const calcs = wyrmspanState.players.map(calcWyrmspanPlayer);
          draft.scoreBreakdown = wyrmspanState.players.map((p, idx) => ({
            kind: 'wyrmspan',
            jugador: p.name,
            total: calcs[idx].total,
            items: [
              { l: 'Gremio', v: calcs[idx].guild },
              { l: 'Dragones', v: calcs[idx].dragons },
              { l: 'Fin partida', v: calcs[idx].endAbilities },
              { l: 'Objetivos', v: calcs[idx].objectives },
              { l: 'Huevos', v: calcs[idx].eggs },
              { l: 'Almacenados', v: calcs[idx].cached },
              { l: 'Solapadas', v: calcs[idx].tucked },
              { l: 'Monedas', v: calcs[idx].coins },
              { l: 'Rec. (÷4)', v: calcs[idx].remResPts },
            ],
            tieNote: `Desempate: ${calcs[idx].coins} mon · ${calcs[idx].remResources} rec · ${calcs[idx].remCards} cartas`,
          }));

          calcs.forEach((c, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(c.total);
          });

          // Desempate oficial Wyrmspan: monedas > recursos sobrantes > cartas en mano
          const maxScore = Math.max(...calcs.map((c) => c.total));
          const tied = calcs.map((c, idx) => (c.total === maxScore ? idx : -1)).filter((i) => i >= 0);
          if (tied.length > 1) {
            const tieKey = (i) => calcs[i].coins * 10000 + calcs[i].remResources * 100 + calcs[i].remCards;
            const bestTk = Math.max(...tied.map(tieKey));
            const minTk = Math.min(...tied.map(tieKey));
            if (bestTk > minTk) {
              draft.manualWinnerOverride = true;
              draft.players.forEach((p, idx) => { p.winner = tied.includes(idx) && tieKey(idx) === bestTk; });
              showToast('Totales de Wyrmspan pasados (desempate aplicado)', 'success');
            } else {
              draft.manualWinnerOverride = false;
              syncAutoWinners();
              showToast('Totales y desglose de Wyrmspan pasados', 'success');
            }
          } else {
            draft.manualWinnerOverride = false;
            syncAutoWinners();
            showToast('Totales y desglose de Wyrmspan pasados', 'success');
          }

          saveDraftLocal();
          renderLogTab();
        },
      },
    ],
  });

  const bodyEl = document.getElementById('modal-body');
  bodyEl.onclick = (e) => {
    const el = e.target.closest('[data-wy]');
    if (!el) return;
    const act = el.dataset.wy;
    if (act === 'player') {
      wyrmspanState.activeIdx = Number(el.dataset.idx);
      renderWyrmspanModal();
    } else if (act === 'step') {
      const k = el.dataset.key;
      const d = Number(el.dataset.delta);
      const p = wyrmspanState.players[wyrmspanState.activeIdx];
      p[k] = Math.max(0, (Number(p[k]) || 0) + d);
      renderWyrmspanModal();
    }
  };

  bodyEl.querySelectorAll('[data-wy-input]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const k = e.target.dataset.wyInput;
      const p = wyrmspanState.players[wyrmspanState.activeIdx];
      p[k] = Math.max(0, Number(e.target.value) || 0);
      const upd = calcWyrmspanPlayer(p);
      const totEl = document.getElementById('wy-total-badge');
      if (totEl) totEl.textContent = `${upd.total} pts`;
      const pillTot = bodyEl.querySelector(`[data-wy="player"][data-idx="${wyrmspanState.activeIdx}"] .font-display`);
      if (pillTot) pillTot.innerHTML = `${upd.total} <span class="text-[10px] font-medium opacity-75">pts</span>`;
    });
  });
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: TERRAFORMING MARS (VT, HITOS, RECOMPENSAS, LOSETAS Y CARTAS)
// -------------------------------------------------------------------------
function openTfmScorer() {
  if (!tfmState) hydrateCalculatorFromDraft('tfm');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const makePlayer = (name) => ({
    name,
    tr: 20,
    milestones: 0, // 0..3 => 5 pts c/u
    awards1st: 0, // 5 pts c/u
    awards2nd: 0, // 2 pts c/u
    greeneries: 0, // 1 pt c/u
    cities: 0, // suma de vegetaciones adyacentes
    cards: 0, // puede ser negativo
    mc: 0, // desempate M€
  });
  if (!tfmState || tfmState.players.length !== names.length) {
    tfmState = {
      activeIdx: 0,
      players: names.map(makePlayer),
    };
  } else {
    tfmState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderTfmModal();
}

function calcTfmPlayer(p) {
  const tr = Math.max(0, Number(p.tr) || 0);
  const milestonesPts = Math.max(0, Number(p.milestones) || 0) * 5;
  const awardsPts = Math.max(0, Number(p.awards1st) || 0) * 5 + Math.max(0, Number(p.awards2nd) || 0) * 2;
  const greeneries = Math.max(0, Number(p.greeneries) || 0);
  const cities = Math.max(0, Number(p.cities) || 0);
  const cards = Number(p.cards) || 0;
  const mc = Math.max(0, Number(p.mc) || 0);
  const total = tr + milestonesPts + awardsPts + greeneries + cities + cards;
  return { tr, milestonesPts, awardsPts, greeneries, cities, cards, mc, total };
}

function renderTfmModal() {
  const pl = tfmState.players[tfmState.activeIdx];
  const allCalcs = tfmState.players.map(calcTfmPlayer);
  const cur = allCalcs[tfmState.activeIdx];

  const playerStrip = tfmState.players.map((p, i) => {
    const active = i === tfmState.activeIdx;
    const corpTag = draft.players[i]?.tag ? ` · ${draft.players[i].tag}` : '';
    return `
      <button type="button" data-tm="player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[108px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#C84B31] text-white border-[#C84B31] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-[11px] font-bold truncate">${esc(p.name)}${esc(corpTag)}</div>
        </div>
        <div class="font-display text-lg font-extrabold tabular-nums mt-0.5">${allCalcs[i].total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
      </button>
    `;
  }).join('');

  const numRow = (label, sub, key, val, allowNeg = false, stepBig = 5) => `
    <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8 last:border-0">
      <div class="min-w-0">
        <div class="text-xs font-bold text-ink dark:text-white leading-tight">${label}</div>
        <div class="text-[10px] text-inkMuted dark:text-white/55">${sub}</div>
      </div>
      <div class="inline-flex items-center gap-1 shrink-0">
        ${allowNeg ? `<button type="button" data-tm="step" data-key="${key}" data-delta="-5" class="btn-tap px-1.5 h-8 rounded-lg bg-coralBrand/12 text-coralBrand text-[10.5px] font-extrabold">−5</button>` : ''}
        <button type="button" data-tm="step" data-key="${key}" data-delta="-1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">−</button>
        <input type="number" inputmode="${allowNeg ? 'text' : 'numeric'}" data-tm-input="${key}" value="${val}" placeholder="0"
          class="w-12 h-8 text-center input-pro rounded-lg text-xs font-extrabold tabular-nums text-ink dark:text-white outline-none" />
        <button type="button" data-tm="step" data-key="${key}" data-delta="1" class="btn-tap w-7 h-8 rounded-lg bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-bold text-sm">+</button>
        ${stepBig ? `<button type="button" data-tm="step" data-key="${key}" data-delta="${stepBig}" class="btn-tap px-1.5 h-8 rounded-lg bg-[#C84B31]/14 text-[#C84B31] dark:text-orange-300 text-[10.5px] font-extrabold">+${stepBig}</button>` : ''}
      </div>
    </div>
  `;

  const bodyHtml = `
    <div class="space-y-3">
      <div class="scroll-strip-cards is-tight no-scrollbar">${playerStrip}</div>

      <div class="px-3.5 py-2 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
        ${numRow('Valor de Terraformación (VT)', 'Posición final en el marcador de VT', 'tr', pl.tr, false, 5)}

        <div class="flex items-center justify-between gap-2 py-2 border-b border-[#EFEAE0] dark:border-white/8">
          <div>
            <div class="text-xs font-bold text-ink dark:text-white">Hitos conseguidos</div>
            <div class="text-[10px] text-inkMuted dark:text-white/55">5 pts c/u · ahora: +${cur.milestonesPts} pts</div>
          </div>
          <div class="grid grid-cols-4 gap-1">
            ${[0, 1, 2, 3].map((n) => `
              <button type="button" data-tm="set" data-key="milestones" data-val="${n}"
                class="btn-tap w-8 h-8 rounded-lg text-xs font-extrabold border ${pl.milestones === n ? 'bg-[#C84B31] text-white border-[#C84B31]' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.07] dark:border-white/10'}">${n}</button>
            `).join('')}
          </div>
        </div>

        <div class="py-2 border-b border-[#EFEAE0] dark:border-white/8 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-ink dark:text-white">Recompensas</span>
            <span class="text-xs font-extrabold text-[#C84B31] dark:text-orange-300 tabular-nums">+${cur.awardsPts} pts</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 flex items-center justify-between">
              <span class="text-[11px] font-bold text-inkMuted dark:text-white/65">1.º (+5)</span>
              <div class="inline-flex items-center gap-1">
                <button type="button" data-tm="step" data-key="awards1st" data-delta="-1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">−</button>
                <span class="w-4 text-center text-xs font-extrabold tabular-nums">${pl.awards1st}</span>
                <button type="button" data-tm="step" data-key="awards1st" data-delta="1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">+</button>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 flex items-center justify-between">
              <span class="text-[11px] font-bold text-inkMuted dark:text-white/65">2.º (+2)</span>
              <div class="inline-flex items-center gap-1">
                <button type="button" data-tm="step" data-key="awards2nd" data-delta="-1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">−</button>
                <span class="w-4 text-center text-xs font-extrabold tabular-nums">${pl.awards2nd}</span>
                <button type="button" data-tm="step" data-key="awards2nd" data-delta="1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">+</button>
              </div>
            </div>
          </div>
        </div>

        ${numRow('Losetas de Vegetación', '1 pt por cada loseta propia', 'greeneries', pl.greeneries, false, 3)}
        ${numRow('Puntos de Ciudades', '1 pt por cada vegetación adyacente a tus ciudades', 'cities', pl.cities, false, 3)}
        ${numRow('Cartas y Recursos sobre cartas', 'Admite puntos negativos (−)', 'cards', pl.cards, true, 5)}
        ${numRow('M€ sobrantes (desempate)', 'No da puntos · resuelve empates', 'mc', pl.mc, false, 10)}
      </div>

      <div class="p-3 rounded-2xl bg-[#8B2C18] text-white flex items-center justify-between gap-2">
        <span class="text-xs font-semibold text-white/85">Total Marte · ${esc(pl.name)}</span>
        <span id="tm-total-badge" class="font-display text-lg font-extrabold text-amber-300 tabular-nums">${cur.total} pts</span>
      </div>
    </div>
  `;

  openModal({
    title: 'Terraforming Mars — Puntuación',
    subtitle: 'VT, Hitos, Recompensas, Tablero, Cartas y desempate por M€',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => { tfmState = null; openTfmScorer(); },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'tfm', state: JSON.parse(JSON.stringify(tfmState)) };
          const calcs = tfmState.players.map(calcTfmPlayer);
          draft.scoreBreakdown = tfmState.players.map((p, idx) => ({
            kind: 'tfm',
            jugador: p.name,
            total: calcs[idx].total,
            items: [
              { l: 'VT', v: calcs[idx].tr },
              { l: 'Hitos', v: calcs[idx].milestonesPts },
              { l: 'Recompensas', v: calcs[idx].awardsPts },
              { l: 'Vegetación', v: calcs[idx].greeneries },
              { l: 'Ciudades', v: calcs[idx].cities },
              { l: 'Cartas', v: calcs[idx].cards },
            ],
            tieNote: calcs[idx].mc > 0 ? `M€ sobrantes: ${calcs[idx].mc}` : '',
          }));

          calcs.forEach((c, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(c.total);
          });

          // Desempate oficial por M€
          const maxScore = Math.max(...calcs.map((c) => c.total));
          const tied = calcs.map((c, idx) => (c.total === maxScore ? idx : -1)).filter((i) => i >= 0);
          if (tied.length > 1) {
            const maxMc = Math.max(...tied.map((i) => calcs[i].mc));
            const minMc = Math.min(...tied.map((i) => calcs[i].mc));
            if (maxMc > minMc) {
              draft.manualWinnerOverride = true;
              draft.players.forEach((p, idx) => { p.winner = tied.includes(idx) && calcs[idx].mc === maxMc; });
              showToast('Totales de Marte pasados (desempate por M€)', 'success');
            } else {
              draft.manualWinnerOverride = false;
              syncAutoWinners();
              showToast('Totales y desglose de Marte pasados', 'success');
            }
          } else {
            draft.manualWinnerOverride = false;
            syncAutoWinners();
            showToast('Totales y desglose de Marte pasados', 'success');
          }

          saveDraftLocal();
          renderLogTab();
        },
      },
    ],
  });

  const bodyEl = document.getElementById('modal-body');
  bodyEl.onclick = (e) => {
    const el = e.target.closest('[data-tm]');
    if (!el) return;
    const act = el.dataset.tm;
    const p = tfmState.players[tfmState.activeIdx];
    if (act === 'player') {
      tfmState.activeIdx = Number(el.dataset.idx);
      renderTfmModal();
    } else if (act === 'set') {
      p[el.dataset.key] = Number(el.dataset.val) || 0;
      renderTfmModal();
    } else if (act === 'step') {
      const k = el.dataset.key;
      const d = Number(el.dataset.delta);
      const next = (Number(p[k]) || 0) + d;
      p[k] = k === 'cards' ? next : Math.max(0, next);
      renderTfmModal();
    }
  };

  bodyEl.querySelectorAll('[data-tm-input]').forEach((inp) => {
    inp.addEventListener('input', (e) => {
      const k = e.target.dataset.tmInput;
      const p = tfmState.players[tfmState.activeIdx];
      const num = Number(e.target.value);
      if (!isNaN(num)) p[k] = k === 'cards' ? num : Math.max(0, num);
      const upd = calcTfmPlayer(p);
      const totEl = document.getElementById('tm-total-badge');
      if (totEl) totEl.textContent = `${upd.total} pts`;
      const pillTot = bodyEl.querySelector(`[data-tm="player"][data-idx="${tfmState.activeIdx}"] .font-display`);
      if (pillTot) pillTot.innerHTML = `${upd.total} <span class="text-[10px] font-medium opacity-75">pts</span>`;
    });
  });
}

// -------------------------------------------------------------------------
// MARCADOR EN VIVO: TICKET TO RIDE: EUROPA (RECORRIDOS, ESTACIONES, BILLETES Y EXPRESO)
// -------------------------------------------------------------------------
function openTtrScorer() {
  if (!ttrState) hydrateCalculatorFromDraft('ttr');
  const names = draft.players.map((p, i) => p.name.trim() || `Jugador ${i + 1}`);
  const makePlayer = (name) => ({
    name,
    r1: 0, r2: 0, r3: 0, r4: 0, r6: 0, r8: 0,
    stationsLeft: 3, // 4 pts c/u
    tickets: [], // { val: number, ok: boolean }
    longestRoute: false,
  });
  if (!ttrState || ttrState.players.length !== names.length) {
    ttrState = {
      activeIdx: 0,
      ticketMode: 'ok', // 'ok' (+) | 'fail' (-)
      players: names.map(makePlayer),
    };
  } else {
    ttrState.players.forEach((p, i) => { p.name = names[i]; });
  }
  renderTtrModal();
}

function calcTtrPlayer(p) {
  const routesPts = (p.r1 || 0) * 1 + (p.r2 || 0) * 2 + (p.r3 || 0) * 4 + (p.r4 || 0) * 7 + (p.r6 || 0) * 15 + (p.r8 || 0) * 21;
  const trainsUsed = (p.r1 || 0) * 1 + (p.r2 || 0) * 2 + (p.r3 || 0) * 3 + (p.r4 || 0) * 4 + (p.r6 || 0) * 6 + (p.r8 || 0) * 8;
  const stationsPts = Math.max(0, Math.min(3, Number(p.stationsLeft) ?? 3)) * 4;
  const ticketsPts = (p.tickets || []).reduce((s, t) => s + (t.ok ? t.val : -t.val), 0);
  const ticketsCompleted = (p.tickets || []).filter((t) => t.ok).length;
  const longestPts = p.longestRoute ? 10 : 0;
  const total = routesPts + stationsPts + ticketsPts + longestPts;
  return { routesPts, trainsUsed, stationsPts, ticketsPts, ticketsCompleted, longestPts, total };
}

function renderTtrModal() {
  const pl = ttrState.players[ttrState.activeIdx];
  const allCalcs = ttrState.players.map(calcTtrPlayer);
  const cur = allCalcs[ttrState.activeIdx];

  const playerStrip = ttrState.players.map((p, i) => {
    const active = i === ttrState.activeIdx;
    return `
      <button type="button" data-tr="player" data-idx="${i}"
        class="btn-tap shrink-0 min-w-[104px] p-2.5 rounded-2xl border text-left transition-all ${
          active
            ? 'bg-[#D97706] text-white border-[#D97706] shadow-sm'
            : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
        }">
        <div class="flex items-center gap-1.5 min-w-0">
          ${renderPlayerAvatarHtml(p.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
          <div class="text-[11px] font-bold truncate">${esc(p.name)}</div>
        </div>
        <div class="font-display text-lg font-extrabold tabular-nums mt-0.5">${allCalcs[i].total} <span class="text-[10px] font-medium opacity-75">pts</span></div>
      </button>
    `;
  }).join('');

  const routeDefs = [
    { k: 'r1', len: 1, pts: 1 },
    { k: 'r2', len: 2, pts: 2 },
    { k: 'r3', len: 3, pts: 4 },
    { k: 'r4', len: 4, pts: 7 },
    { k: 'r6', len: 6, pts: 15 },
    { k: 'r8', len: 8, pts: 21 },
  ];
  const ticketPresets = [5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21];

  const bodyHtml = `
    <div class="space-y-3">
      <div class="scroll-strip-cards is-tight no-scrollbar">${playerStrip}</div>

      <!-- Recorridos -->
      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-extrabold text-ink dark:text-white">Recorridos completados</div>
            <div class="text-[10px] font-semibold ${cur.trainsUsed > 45 ? 'text-coralBrand' : 'text-inkMuted dark:text-white/55'} tabular-nums">Vagones usados: ${cur.trainsUsed} / 45</div>
          </div>
          <span class="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-300 text-xs font-extrabold tabular-nums">${cur.routesPts} pts</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          ${routeDefs.map((r) => `
            <div class="p-2 rounded-xl bg-canvas/80 dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 flex items-center justify-between gap-1">
              <div>
                <div class="text-xs font-extrabold text-ink dark:text-white">${r.len} vag.</div>
                <div class="text-[9.5px] text-inkMuted dark:text-white/55">${r.pts} pts</div>
              </div>
              <div class="inline-flex items-center gap-1">
                <button type="button" data-tr="step" data-key="${r.k}" data-delta="-1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">−</button>
                <span class="w-4 text-center text-xs font-extrabold tabular-nums">${pl[r.k]}</span>
                <button type="button" data-tr="step" data-key="${r.k}" data-delta="1" class="btn-tap w-6 h-6 rounded-md bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Estaciones y Expreso Europeo -->
      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <div>
            <div class="text-xs font-bold text-ink dark:text-white">Estaciones sin usar</div>
            <div class="text-[10px] text-inkMuted dark:text-white/55">4 pts c/u · ahora: +${cur.stationsPts} pts</div>
          </div>
          <div class="grid grid-cols-4 gap-1">
            ${[0, 1, 2, 3].map((n) => `
              <button type="button" data-tr="set-stations" data-val="${n}"
                class="btn-tap w-8 h-8 rounded-lg text-xs font-extrabold border ${pl.stationsLeft === n ? 'bg-[#D97706] text-white border-[#D97706]' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.07] dark:border-white/10'}">${n}</button>
            `).join('')}
          </div>
        </div>

        <button type="button" data-tr="toggle-longest"
          class="btn-tap w-full py-2 px-3 rounded-xl text-xs font-extrabold border flex items-center justify-between ${pl.longestRoute ? 'bg-emeraldBrand text-white border-emeraldBrand' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.07] dark:border-white/10'}">
          <span>Expreso Europeo (ruta continua más larga)</span>
          <span>${pl.longestRoute ? '✓ +10 pts' : '+10 pts'}</span>
        </button>
      </div>

      <!-- Billetes de destino -->
      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div class="text-xs font-extrabold text-ink dark:text-white">Billetes de destino</div>
          <span class="px-2 py-0.5 rounded-lg text-xs font-extrabold tabular-nums ${cur.ticketsPts >= 0 ? 'bg-emeraldBrand/14 text-emeraldBrand dark:text-emerald-300' : 'bg-coralBrand/14 text-coralBrand'}">${cur.ticketsPts >= 0 ? '+' : ''}${cur.ticketsPts} pts</span>
        </div>

        <div class="grid grid-cols-2 gap-1.5">
          <button type="button" data-tr="ticket-mode" data-val="ok"
            class="btn-tap py-1.5 rounded-xl text-xs font-extrabold border ${ttrState.ticketMode === 'ok' ? 'bg-emeraldBrand text-white border-emeraldBrand' : 'bg-canvas dark:bg-surfaceDark text-inkMuted border-black/[0.07] dark:border-white/10'}">
            ✓ Completado (+)
          </button>
          <button type="button" data-tr="ticket-mode" data-val="fail"
            class="btn-tap py-1.5 rounded-xl text-xs font-extrabold border ${ttrState.ticketMode === 'fail' ? 'bg-coralBrand text-white border-coralBrand' : 'bg-canvas dark:bg-surfaceDark text-inkMuted border-black/[0.07] dark:border-white/10'}">
            ✕ No completado (−)
          </button>
        </div>

        <div class="flex flex-wrap gap-1.5">
          ${ticketPresets.map((v) => `
            <button type="button" data-tr="add-ticket" data-val="${v}"
              class="btn-tap px-2.5 h-8 rounded-lg text-xs font-extrabold tabular-nums border ${ttrState.ticketMode === 'ok' ? 'bg-emeraldBrand/10 text-emeraldBrand dark:text-emerald-300 border-emeraldBrand/25' : 'bg-coralBrand/10 text-coralBrand border-coralBrand/25'}">
              ${ttrState.ticketMode === 'ok' ? '+' : '−'}${v}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center justify-between gap-2 pt-1 text-[11px]">
          <div class="min-w-0 truncate text-inkMuted dark:text-white/60">
            ${pl.tickets.length > 0
              ? `Billetes: <strong class="text-ink dark:text-white tabular-nums">${pl.tickets.map((t) => `${t.ok ? '+' : '−'}${t.val}`).join(' · ')}</strong>`
              : 'Toca el valor de cada billete para sumarlo o restarlo'}
          </div>
          ${pl.tickets.length > 0 ? `<button type="button" data-tr="undo-ticket" class="btn-tap text-coralBrand font-bold shrink-0">Deshacer</button>` : ''}
        </div>
      </div>

      <div class="p-3 rounded-2xl bg-[#9A4A06] text-white flex items-center justify-between gap-2">
        <span class="text-xs font-semibold text-white/85">Total Europa · ${esc(pl.name)}</span>
        <span class="font-display text-lg font-extrabold text-amber-200 tabular-nums">${cur.total} pts</span>
      </div>
    </div>
  `;

  openModal({
    title: 'Ticket to Ride: Europa',
    subtitle: 'Recorridos, estaciones, billetes y Expreso Europeo',
    bodyHtml,
    actions: [
      {
        label: 'Reiniciar',
        keepOpen: true,
        onClick: () => { ttrState = null; openTtrScorer(); },
      },
      {
        label: 'Pasar totales al registro',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        onClick: () => {
          draft.calcSnapshot = { kind: 'ttr', state: JSON.parse(JSON.stringify(ttrState)) };
          const calcs = ttrState.players.map(calcTtrPlayer);
          draft.scoreBreakdown = ttrState.players.map((p, idx) => ({
            kind: 'ttr',
            jugador: p.name,
            total: calcs[idx].total,
            items: [
              { l: 'Recorridos', v: calcs[idx].routesPts },
              { l: 'Estaciones', v: calcs[idx].stationsPts },
              { l: 'Billetes', v: calcs[idx].ticketsPts },
              { l: 'Expreso', v: calcs[idx].longestPts },
            ],
            tieNote: `Billetes compl.: ${calcs[idx].ticketsCompleted} · Estaciones: ${p.stationsLeft}`,
          }));

          calcs.forEach((c, idx) => {
            if (draft.players[idx]) draft.players[idx].score = String(c.total);
          });

          // Desempate oficial: más billetes completados > más estaciones sin usar
          const maxScore = Math.max(...calcs.map((c) => c.total));
          const tied = calcs.map((c, idx) => (c.total === maxScore ? idx : -1)).filter((i) => i >= 0);
          if (tied.length > 1) {
            const tk = (i) => calcs[i].ticketsCompleted * 100 + (ttrState.players[i].stationsLeft || 0);
            const bestTk = Math.max(...tied.map(tk));
            const minTk = Math.min(...tied.map(tk));
            if (bestTk > minTk) {
              draft.manualWinnerOverride = true;
              draft.players.forEach((p, idx) => { p.winner = tied.includes(idx) && tk(idx) === bestTk; });
              showToast('Totales de Europa pasados (desempate aplicado)', 'success');
            } else {
              draft.manualWinnerOverride = false;
              syncAutoWinners();
              showToast('Totales y desglose de Europa pasados', 'success');
            }
          } else {
            draft.manualWinnerOverride = false;
            syncAutoWinners();
            showToast('Totales y desglose de Europa pasados', 'success');
          }

          saveDraftLocal();
          renderLogTab();
        },
      },
    ],
  });

  document.getElementById('modal-body').onclick = (e) => {
    const el = e.target.closest('[data-tr]');
    if (!el) return;
    const act = el.dataset.tr;
    const p = ttrState.players[ttrState.activeIdx];
    if (act === 'player') {
      ttrState.activeIdx = Number(el.dataset.idx);
      renderTtrModal();
    } else if (act === 'step') {
      const k = el.dataset.key;
      const d = Number(el.dataset.delta);
      p[k] = Math.max(0, (Number(p[k]) || 0) + d);
      renderTtrModal();
    } else if (act === 'set-stations') {
      p.stationsLeft = Math.max(0, Math.min(3, Number(el.dataset.val) || 0));
      renderTtrModal();
    } else if (act === 'toggle-longest') {
      p.longestRoute = !p.longestRoute;
      renderTtrModal();
    } else if (act === 'ticket-mode') {
      ttrState.ticketMode = el.dataset.val === 'fail' ? 'fail' : 'ok';
      renderTtrModal();
    } else if (act === 'add-ticket') {
      p.tickets.push({ val: Number(el.dataset.val) || 0, ok: ttrState.ticketMode === 'ok' });
      renderTtrModal();
    } else if (act === 'undo-ticket') {
      p.tickets.pop();
      renderTtrModal();
    }
  };
}

function openHarmoniesBreakdownModal(matchId) {
  const m = matchHistory.find((x) => x.id === matchId);
  const breakdown = m?.meta?.breakdown;
  if (!Array.isArray(breakdown) || breakdown.length === 0) return;
  const g = getGameById(m.gameId);

  const bodyHtml = `
    <div class="space-y-3">
      ${breakdown.map((b) => {
        const hasGenericItems = Array.isArray(b.items) && b.items.length > 0;
        const cells = hasGenericItems
          ? b.items
          : [
              { l: 'Árboles', v: b.arboles ?? 0 },
              { l: 'Montañas', v: b.montanas ?? 0 },
              { l: 'Campos', v: b.campos ?? 0 },
              { l: 'Edificios', v: b.edificios ?? 0 },
              { l: 'Agua', v: b.agua ?? 0 },
              { l: 'Animales', v: b.animales ?? 0 },
            ];
        return `
          <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2">
            <div class="flex items-center justify-between gap-2">
              <span class="flex items-center gap-2 min-w-0">
                ${renderPlayerAvatarHtml(b.jugador, 'w-6 h-6 text-[10px]')}
                <span class="font-display text-sm font-extrabold text-ink dark:text-white truncate">${esc(b.jugador)}</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-lg text-xs font-extrabold tabular-nums" style="background:${g.color}1C; color:${g.color};">${b.total} pts</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5 text-[11px] tabular-nums">
              ${cells.map((it) => `<div class="px-2 py-1 rounded-lg bg-canvas dark:bg-surfaceDark">${esc(it.l)}: <strong>${it.v}</strong></div>`).join('')}
            </div>
            ${b.tieNote ? `<div class="text-[11px] text-inkMuted dark:text-white/60 pt-0.5">${esc(b.tieNote)}</div>` : ''}
            ${!hasGenericItems && (b.espiritu || b.cubos) ? `
              <div class="text-[11px] text-inkMuted dark:text-white/60 flex items-center gap-3 pt-0.5 tabular-nums">
                ${b.espiritu ? `<span>Espíritu: <strong class="text-ink dark:text-white">${b.espiritu}</strong></span>` : ''}
                ${b.cubos ? `<span>Cubos: <strong class="text-ink dark:text-white">${b.cubos}</strong></span>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;

  openModal({
    title: `Desglose · ${m.gameName}`,
    subtitle: `${formatDisplayDate(m.date, m.createdAtMs)}${m.extraLabel ? ` · ${m.extraLabel}` : ''}`,
    bodyHtml,
    actions: [{ label: 'Cerrar' }],
  });
}

// =========================================================================
// 10B. SISTEMA DE RATING Y RANKING (0.0 – 10.0 / 0 – 1000 PTS)
// =========================================================================
const GAME_WEIGHT_LEVELS = {
  light:  { key: 'light',  label: 'Ligero',     mult: 0.75, hint: '×0.75' },
  medium: { key: 'medium', label: 'Medio',      mult: 1.00, hint: '×1.0'  },
  heavy:  { key: 'heavy',  label: 'Estrategia', mult: 1.35, hint: '×1.35' },
};

const DEFAULT_GAME_WEIGHTS = {
  // Ligero (×0.75)
  virus: 'light',
  exploding_kittens: 'light',
  odin: 'light',
  trio: 'light',
  flip_7: 'light',
  sushi_go: 'light',
  got_five: 'light',
  monopoly_deal: 'light',
  sleeping_queens: 'light',
  // Medio (×1.0)
  harmonies: 'medium',
  splendor_duel: 'medium',
  jaipur: 'medium',
  oceanos_de_papel: 'medium',
  faraway: 'medium',
  skull_king: 'medium',
  azul_duel: 'medium',
  ttr_europa: 'medium',
  lotr_duel: 'medium',
  splendor_marvel: 'medium',
  unstable_unicorns: 'medium',
  last_bullet: 'medium',
  lotr_battle: 'medium',
  // Estrategia (×1.35)
  wyrmspan: 'heavy',
  terraforming_mars: 'heavy',
};

function getGameWeightKey(g) {
  if (!g) return 'medium';
  if (g.weight && GAME_WEIGHT_LEVELS[g.weight]) return g.weight;
  if (g.id && DEFAULT_GAME_WEIGHTS[g.id]) return DEFAULT_GAME_WEIGHTS[g.id];
  return 'medium';
}

function getGameWeightInfo(g) {
  return GAME_WEIGHT_LEVELS[getGameWeightKey(g)] || GAME_WEIGHT_LEVELS.medium;
}

function flameIconSvg(cls = 'w-3 h-3') {
  return `<svg class="${cls} shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.6 2.2c.4 2.5-.6 4.4-2.1 5.8-1.3 1.2-2.2 2.4-2.2 4.1 0 1.4.8 2.6 2.1 3.1-.5-.8-.6-1.8-.1-2.7.5-.9 1.4-1.5 2-2.5.4 1.5 1.5 2.4 2 3.7.4 1 .2 2.1-.5 2.9 1.7-.7 3-2.5 3-4.7 0-2.6-1.4-4.7-2.6-6.2-.5-.7-1.1-2-1.6-3.5Zm-.6 19.6a6.8 6.8 0 0 1-6.8-6.8c0-3 1.5-5.3 3.4-7.1 1.6-1.5 2.9-3.1 3.2-5.7.1-.5.8-.7 1.1-.3 1.4 1.8 2.5 3.1 3.7 4.7 1.4 1.8 2.2 4 2.2 6.4 0 4.9-3 8.8-6.8 8.8Z"/></svg>`;
}

function renderStreakPillHtml(streak, { onDark = false } = {}) {
  const n = Number(streak) || 0;
  if (n < 2) return '';
  const hotCls = onDark ? 'is-on-dark' : (n >= 4 ? 'is-hot' : '');
  return `<span class="streak-pill ${hotCls}" title="Racha activa: ${n} victorias seguidas">${flameIconSvg('w-3 h-3')}<span>${n}</span></span>`;
}

function formatRatingNote(points) {
  const clamped = Math.max(0, Math.min(1000, Number(points) || 0));
  return (clamped / 100).toFixed(1);
}

function formatRatingDelta(delta, hitCap = false) {
  const d = Math.round(Number(delta) || 0);
  if (hitCap && d === 0) return '+0 · Tope';
  if (d > 0) return `+${d}`;
  if (d < 0) return `${d}`;
  return '0';
}

function getRatingTierInfo(points) {
  const p = Number(points) || 0;
  if (p >= 900) return { label: 'Leyenda',      cls: 'tier-legend',     color: '#FBBF24' };
  if (p >= 750) return { label: 'Gran Maestro', cls: 'tier-gm',         color: '#A78BFA' };
  if (p >= 630) return { label: 'Maestro',      cls: 'tier-master',     color: '#60A5FA' };
  if (p >= 550) return { label: 'Estratega',    cls: 'tier-strategist', color: '#34D399' };
  if (p >= 500) return { label: 'Competidor',   cls: 'tier-competitor', color: '#2DD4BF' };
  if (p >= 450) return { label: 'Aspirante',    cls: 'tier-challenger', color: '#F59E0B' };
  return              { label: 'En remontada',  cls: 'tier-climb',      color: '#FB7185' };
}

function computeRatingSystem(matches, options = {}) {
  const START_PTS = 500;
  const K_BASE = 32;
  const SCALE = 400;
  const MIN_PTS = 0;
  const MAX_PTS = 1000;
  const MAX_HISTORY = options.maxHistory !== undefined ? Math.max(0, Number(options.maxHistory) || 0) : 15;
  const includeTimeline = options.includeTimeline !== false;
  const includeByMatch = options.includeByMatch !== false;

  const chrono = [...(matches || [])].sort((a, b) => matchChronoKey(a).localeCompare(matchChronoKey(b)));
  const stateByKey = {};
  const byMatch = {};
  const timeline = [];
  let ratedMatchCount = 0;

  const ensurePlayer = (name) => {
    const clean = String(name || '').trim() || 'Jugador';
    const key = normName(clean);
    if (!stateByKey[key]) {
      stateByKey[key] = {
        key,
        name: clean,
        points: START_PTS,
        peakPoints: START_PTS,
        minPoints: START_PTS,
        ratedPlays: 0,
        wins: 0,
        currentStreak: 0,
        bestStreak: 0,
        wasLeader: false,
        lastDelta: 0,
        lastHitCap: false,
        recentForm: [],
        byGame: {},
        byWeight: {
          light:  { key: 'light',  label: 'Ligero',     hint: '×0.75', plays: 0, wins: 0, netDelta: 0 },
          medium: { key: 'medium', label: 'Medio',      hint: '×1.0',  plays: 0, wins: 0, netDelta: 0 },
          heavy:  { key: 'heavy',  label: 'Estrategia', hint: '×1.35', plays: 0, wins: 0, netDelta: 0 },
        },
        byOpponent: {},
        bestGain: null,
        worstDrop: null,
        history: [],
      };
    } else {
      stateByKey[key].name = clean;
    }
    return stateByKey[key];
  };

  chrono.forEach((m) => {
    const scoringType = getMatchScoringType(m);
    if (scoringType === 'coop') return;

    // Deduplica jugadores por clave dentro de la partida y exige 2+ rivales
    const rawPlayers = Array.isArray(m.players) ? m.players : [];
    const seen = new Set();
    const participants = [];
    rawPlayers.forEach((p) => {
      const clean = String(p.name || '').trim();
      const k = normName(clean);
      if (!k || seen.has(k)) return;
      seen.add(k);
      participants.push({
        key: k,
        name: clean,
        score: (p.score !== null && p.score !== undefined && p.score !== '' && !isNaN(p.score)) ? Number(p.score) : null,
        rank: Number(p.rank) || 99,
        winner: Boolean(p.winner),
      });
    });
    if (participants.length < 2) return;

    const g = getGameById(m.gameId);
    const weightInfo = getGameWeightInfo(g);
    const N = participants.length;
    const isPoints = scoringType === 'points';
    const isLowestWins = Boolean(g.lowestWins);
    const isFourMermaids = isFourMermaidsMatch(m);
    const isSpecialNonPointsWin = isFourMermaids;
    const specialWinLabel = isFourMermaids ? '4 Sirenas' : '';

    participants.forEach((p) => ensurePlayer(p.name));

    const beforeMap = {};
    const rawDeltaMap = {};
    const marginSamples = {};
    participants.forEach((p) => {
      beforeMap[p.key] = stateByKey[p.key].points;
      rawDeltaMap[p.key] = 0;
      marginSamples[p.key] = [];
    });

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const pi = participants[i];
        const pj = participants[j];
        let sI = null;
        let marginMult = 1.0;

        // Si uno ganó explícitamente (incluye 4 Sirenas, 10 coronas, desempates manuales), su victoria manda siempre
        if (pi.winner !== pj.winner) {
          sI = pi.winner ? 1 : 0;
          if (isPoints && !isSpecialNonPointsWin && pi.score !== null && pj.score !== null && pi.score !== pj.score) {
            const scoreAgrees = isLowestWins
              ? (pi.winner ? pi.score < pj.score : pj.score < pi.score)
              : (pi.winner ? pi.score > pj.score : pj.score > pi.score);
            if (scoreAgrees) {
              const diff = Math.abs(pi.score - pj.score);
              const ref = Math.max(Math.abs(pi.score), Math.abs(pj.score), 10);
              const relDiff = Math.min(1, diff / ref);
              marginMult = 0.75 + 0.50 * Math.min(1, relDiff / 0.40);
              marginSamples[pi.key].push(marginMult);
              marginSamples[pj.key].push(marginMult);
            }
          }
        } else if (isPoints && !isSpecialNonPointsWin && pi.score !== null && pj.score !== null && pi.score !== pj.score) {
          const iWins = isLowestWins ? (pi.score < pj.score) : (pi.score > pj.score);
          sI = iWins ? 1 : 0;
          const diff = Math.abs(pi.score - pj.score);
          const ref = Math.max(Math.abs(pi.score), Math.abs(pj.score), 10);
          const relDiff = Math.min(1, diff / ref);
          marginMult = 0.75 + 0.50 * Math.min(1, relDiff / 0.40);
          marginSamples[pi.key].push(marginMult);
          marginSamples[pj.key].push(marginMult);
        } else if (pi.rank !== pj.rank) {
          sI = pi.rank < pj.rank ? 1 : 0;
        } else if (!pi.winner && !pj.winner && (scoringType === 'winner_only' || isSpecialNonPointsWin)) {
          // En victorias especiales o solo-ganador con 3+ jugadores, los no-ganadores no se quitan puntos entre sí
          continue;
        } else {
          sI = 0.5;
        }

        const rI = beforeMap[pi.key];
        const rJ = beforeMap[pj.key];
        const eI = 1 / (1 + Math.pow(10, (rJ - rI) / SCALE));
        const pairDelta = (K_BASE / (N - 1)) * weightInfo.mult * marginMult * (sI - eI);
        rawDeltaMap[pi.key] += pairDelta;
        rawDeltaMap[pj.key] -= pairDelta;

        // Balance exacto por rival (funciona tanto en 1v1 como en mesas de 3+)
        const stI = stateByKey[pi.key];
        const stJ = stateByKey[pj.key];
        if (!stI.byOpponent[pj.key]) stI.byOpponent[pj.key] = { key: pj.key, name: pj.name, plays: 0, wins: 0, losses: 0, draws: 0, rawDelta: 0 };
        if (!stJ.byOpponent[pi.key]) stJ.byOpponent[pi.key] = { key: pi.key, name: pi.name, plays: 0, wins: 0, losses: 0, draws: 0, rawDelta: 0 };
        const oppI = stI.byOpponent[pj.key];
        const oppJ = stJ.byOpponent[pi.key];
        oppI.name = pj.name;
        oppJ.name = pi.name;
        oppI.plays += 1;
        oppJ.plays += 1;
        oppI.rawDelta += pairDelta;
        oppJ.rawDelta -= pairDelta;
        if (sI === 1) { oppI.wins += 1; oppJ.losses += 1; }
        else if (sI === 0) { oppI.losses += 1; oppJ.wins += 1; }
        else { oppI.draws += 1; oppJ.draws += 1; }
      }
    }

    ratedMatchCount += 1;
    byMatch[m.id] = {};
    const stepRatings = {};
    const stepDeltas = {};

    participants.forEach((p) => {
      const st = stateByKey[p.key];
      const before = beforeMap[p.key];
      const rawDelta = rawDeltaMap[p.key];
      const roundedDelta = Math.round(rawDelta);
      const after = Math.max(MIN_PTS, Math.min(MAX_PTS, before + roundedDelta));
      const appliedDelta = after - before;
      const hitCap = (rawDelta > 0.4 && after === MAX_PTS && appliedDelta === 0)
        || (rawDelta < -0.4 && after === MIN_PTS && appliedDelta === 0);

      st.points = after;
      if (after > st.peakPoints) st.peakPoints = after;
      if (after < st.minPoints) st.minPoints = after;
      st.ratedPlays += 1;
      if (p.winner) {
        st.wins += 1;
        st.currentStreak += 1;
        if (st.currentStreak > st.bestStreak) st.bestStreak = st.currentStreak;
      } else {
        st.currentStreak = 0;
      }
      st.lastDelta = appliedDelta;
      st.lastHitCap = hitCap;

      const avgMargin = marginSamples[p.key].length > 0
        ? marginSamples[p.key].reduce((a, b) => a + b, 0) / marginSamples[p.key].length
        : 1.0;
      let marginTag = '';
      if (specialWinLabel) {
        marginTag = specialWinLabel;
      } else if (marginSamples[p.key].length > 0) {
        if (avgMargin <= 0.84) marginTag = 'Por la mínima';
        else if (avgMargin >= 1.15) marginTag = 'Margen amplio';
      }
      if (!marginTag && N >= 3) marginTag = `Mesa de ${N}`;

      const oppNames = participants.filter((o) => o.key !== p.key).map((o) => o.name);
      const oppSummary = oppNames.length === 1 ? `vs ${oppNames[0]}` : `Mesa de ${N} (${oppNames.slice(0, 2).join(', ')}${oppNames.length > 2 ? '…' : ''})`;

      const gNameResolved = m.gameName || g.name;
      // Forma reciente O(1) (últimas 5)
      st.recentForm.push({ won: p.winner });
      if (st.recentForm.length > 5) st.recentForm.shift();

      // Agregados vitalicios O(1) por juego, por peso y extremos
      if (!st.byGame[m.gameId]) {
        st.byGame[m.gameId] = { gameId: m.gameId, gameName: gNameResolved, plays: 0, wins: 0, netDelta: 0 };
      }
      const gStat = st.byGame[m.gameId];
      gStat.gameName = gNameResolved;
      gStat.plays += 1;
      if (p.winner) gStat.wins += 1;
      gStat.netDelta += appliedDelta;

      const wStat = st.byWeight[weightInfo.key] || st.byWeight.medium;
      wStat.plays += 1;
      if (p.winner) wStat.wins += 1;
      wStat.netDelta += appliedDelta;

      if (appliedDelta > 0 && (!st.bestGain || appliedDelta > st.bestGain.delta)) {
        st.bestGain = { delta: appliedDelta, gameId: m.gameId, gameName: gNameResolved, date: m.date, createdAtMs: m.createdAtMs };
      }
      if (appliedDelta < 0 && (!st.worstDrop || appliedDelta < st.worstDrop.delta)) {
        st.worstDrop = { delta: appliedDelta, gameId: m.gameId, gameName: gNameResolved, date: m.date, createdAtMs: m.createdAtMs };
      }

      if (MAX_HISTORY > 0 || includeByMatch) {
        const entry = {
          matchId: m.id,
          date: m.date,
          createdAtMs: m.createdAtMs,
          gameId: m.gameId,
          gameName: gNameResolved,
          weightKey: weightInfo.key,
          weightLabel: weightInfo.label,
          before,
          after,
          delta: appliedDelta,
          hitCap,
          won: p.winner,
          rank: p.rank,
          playerScore: p.score,
          oppSummary,
          marginTag,
          numPlayers: N,
        };
        if (MAX_HISTORY > 0) {
          st.history.push(entry);
          if (st.history.length > MAX_HISTORY) st.history.shift();
        }
        if (includeByMatch) byMatch[m.id][p.key] = entry;
      }
      stepDeltas[p.key] = appliedDelta;
    });

    // Marca al líder tras cada partida (solo entre jugadores calibrados >= 3P cuando los hay)
    if (ratedMatchCount >= 2) {
      const allNow = Object.values(stateByKey);
      const calNow = allNow.filter((x) => x.ratedPlays >= 3);
      const leaderPool = calNow.length > 0 ? calNow : allNow;
      const maxNow = Math.max(...leaderPool.map((x) => x.points));
      if (maxNow > START_PTS) {
        leaderPool.forEach((x) => {
          if (x.points === maxNow) x.wasLeader = true;
        });
      }
    }

    // Snapshot de evolución para la gráfica (solo cuando se necesita)
    if (includeTimeline) {
      Object.values(stateByKey).forEach((st) => {
        stepRatings[st.key] = Number((st.points / 100).toFixed(2));
      });
      timeline.push({
        step: ratedMatchCount,
        matchId: m.id,
        date: formatDisplayDate(m.date, m.createdAtMs),
        gameName: m.gameName || g.name,
        ratings: stepRatings,
        deltas: stepDeltas,
      });
    }
  });

  const sortByRating = (a, b) =>
    (b.points - a.points) || (b.wins - a.wins) || (b.ratedPlays - a.ratedPlays) || a.name.localeCompare(b.name, 'es');

  const allSorted = Object.values(stateByKey).sort(sortByRating);
  const MIN_CALIBRATED = 3;
  const hasCalibrated = allSorted.some((p) => p.ratedPlays >= MIN_CALIBRATED);
  const calibratedPlayers = hasCalibrated ? allSorted.filter((p) => p.ratedPlays >= MIN_CALIBRATED) : allSorted;
  const calibratingPlayers = hasCalibrated ? allSorted.filter((p) => p.ratedPlays < MIN_CALIBRATED) : [];

  calibratedPlayers.forEach((p, idx) => {
    p.rank = idx + 1;
    p.isCalibrating = false;
    p.note = formatRatingNote(p.points);
    p.peakNote = formatRatingNote(p.peakPoints);
    p.provisional = p.ratedPlays < 5;
    p.isFormerLeader = Boolean(p.wasLeader && p.rank > 1);
    p.winRate = p.ratedPlays > 0 ? Math.round((p.wins / p.ratedPlays) * 100) : 0;
  });

  calibratingPlayers.forEach((p) => {
    p.rank = null;
    p.isCalibrating = true;
    p.note = formatRatingNote(p.points);
    p.peakNote = formatRatingNote(p.peakPoints);
    p.provisional = true;
    p.isFormerLeader = false;
    p.winRate = p.ratedPlays > 0 ? Math.round((p.wins / p.ratedPlays) * 100) : 0;
  });

  const players = [...calibratedPlayers, ...calibratingPlayers];
  players.forEach((p) => {
    Object.values(p.byOpponent || {}).forEach((opp) => {
      opp.netDelta = Math.round(opp.rawDelta || 0);
    });
  });
  return {
    players,
    calibratedPlayers,
    calibratingPlayers,
    hasCalibrated,
    minCalibratedPlays: MIN_CALIBRATED,
    byKey: stateByKey,
    byMatch,
    timeline,
    ratedMatchCount,
  };
}

function openRatingInfoModal() {
  const bodyHtml = `
    <div class="space-y-3 text-xs text-ink dark:text-white/85 leading-relaxed">
      <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-1.5">
        <div class="font-display text-sm font-extrabold text-ink dark:text-white">Escala unificada: 0.0 a 10.0</div>
        <p class="text-inkMuted dark:text-white/65">
          Todos arrancan en <strong class="text-ink dark:text-white">5.0 (500 pts)</strong>. Cada <strong>100 puntos</strong> equivalen exactamente a <strong>1.0</strong> de nota, con límites estrictos en <strong>0.0</strong> y <strong>10.0</strong>.
        </p>
      </div>

      <div class="space-y-2">
        <div class="p-3 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10">
          <div class="font-extrabold text-ink dark:text-white">1. Nivel del rival (Elo)</div>
          <p class="text-[11px] text-inkMuted dark:text-white/60 mt-0.5">Ganar a quien va por encima da un salto mayor; perder contra el líder resta menos. Es suma cero y sin ayudas artificiales.</p>
        </div>
        <div class="p-3 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10">
          <div class="font-extrabold text-ink dark:text-white">2. Peso del juego (editable en Ludoteca)</div>
          <p class="text-[11px] text-inkMuted dark:text-white/60 mt-0.5"><strong>Ligero (×0.75)</strong> · <strong>Medio (×1.0)</strong> · <strong>Estrategia (×1.35)</strong>. Ganar un euro pesado premia más que un filler rápido.</p>
        </div>
        <div class="p-3 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10">
          <div class="font-extrabold text-ink dark:text-white">3. Margen de puntuación (×0.75 a ×1.25)</div>
          <p class="text-[11px] text-inkMuted dark:text-white/60 mt-0.5">Perder por 1 punto amortigua la caída; ganar holgado premia más (también al anotar coronas u objetivos numéricos). En 4 Sirenas o juegos sin puntos, el margen es neutro (×1.0).</p>
        </div>
        <div class="p-3 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10">
          <div class="font-extrabold text-ink dark:text-white">4. Mesas de 3+ jugadores y exclusiones</div>
          <p class="text-[11px] text-inkMuted dark:text-white/60 mt-0.5">Se evalúa contra cada rival de la mesa (quedar 2.º de 5 suma puntos). Solitario y cooperativos no alteran el ranking, la llama de racha es puramente visual, y hace falta un mínimo de 3 partidas para entrar en la clasificación principal.</p>
        </div>
      </div>
    </div>
  `;

  openModal({
    title: 'Cómo funciona el Ranking',
    subtitle: 'Sistema justo por partida · recalculado en vivo',
    bodyHtml,
    actions: [{ label: 'Entendido', className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-pine dark:bg-emeraldBrand text-white' }],
  });
}

function openPlayerRatingDetailModal(playerKey, filterGameId = 'all') {
  const sourceMatches = filterGameId && filterGameId !== 'all'
    ? matchHistory.filter((m) => m.gameId === filterGameId)
    : matchHistory;
  const ratingData = computeRatingSystem(sourceMatches, { includeTimeline: false, includeByMatch: false, maxHistory: 15 });
  const st = ratingData.byKey[normName(playerKey)];
  if (!st) return;

  const gameScopeObj = filterGameId && filterGameId !== 'all' ? getGameById(filterGameId) : null;
  const tierInfo = getRatingTierInfo(st.points);
  const pctBar = Math.max(2, Math.min(100, Math.round(st.points / 10)));
  const peakPctBar = Math.max(2, Math.min(100, Math.round(st.peakPoints / 10)));
  const allRecent = [...st.history].reverse(); // máximo 15 en memoria
  let visibleCount = 5;

  // 1) Rendimiento por peso (solo en vista global)
  const weightList = !gameScopeObj
    ? [st.byWeight.light, st.byWeight.medium, st.byWeight.heavy]
    : [];
  const hasWeightData = weightList.some((w) => w && w.plays > 0);
  const weightSectionHtml = hasWeightData ? `
    <div class="space-y-1.5">
      <div class="flex items-center justify-between px-0.5">
        <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Rendimiento por peso</span>
        <span class="text-[10px] font-semibold text-inkMuted dark:text-white/45">Balance neto</span>
      </div>
      <div class="grid grid-cols-3 gap-2">
        ${weightList.map((w) => {
          const stateCls = w.plays === 0 ? '' : (w.netDelta > 0 ? 'is-pos' : w.netDelta < 0 ? 'is-neg' : '');
          const deltaTxt = w.plays === 0 ? '—' : (w.netDelta > 0 ? `+${w.netDelta}` : `${w.netDelta}`);
          const deltaCol = w.plays === 0
            ? 'text-inkMuted/50 dark:text-white/30'
            : (w.netDelta > 0 ? 'text-emeraldBrand dark:text-emerald-400' : w.netDelta < 0 ? 'text-coralBrand' : 'text-ink dark:text-white');
          const wr = w.plays > 0 ? Math.round((w.wins / w.plays) * 100) : 0;
          return `
            <div class="weight-stat-card ${stateCls}">
              <div class="text-[9.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 truncate">${esc(w.label)}</div>
              <div class="font-display text-base font-extrabold tabular-nums leading-tight mt-1 ${deltaCol}">${deltaTxt}</div>
              <div class="text-[9.5px] font-semibold text-inkMuted dark:text-white/50 tabular-nums mt-0.5 truncate">
                ${w.plays > 0 ? `${w.wins}V/${w.plays}P · ${wr}%` : w.hint}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : '';

  // 2) Balance por juego: dónde sumas y dónde pierdes (solo global con 2+ juegos)
  const gamesArr = !gameScopeObj ? Object.values(st.byGame || {}) : [];
  let gameImpactHtml = '';
  if (gamesArr.length >= 2) {
    const posGames = gamesArr.filter((x) => x.netDelta > 0).sort((a, b) => b.netDelta - a.netDelta);
    const negGames = gamesArr.filter((x) => x.netDelta < 0).sort((a, b) => a.netDelta - b.netDelta);
    let highlighted = [];
    if (posGames.length > 0 && negGames.length > 0) {
      highlighted = [...posGames.slice(0, 2), ...negGames.slice(0, 2)];
    } else {
      highlighted = [...gamesArr].sort((a, b) => Math.abs(b.netDelta) - Math.abs(a.netDelta)).slice(0, 3);
    }
    const maxAbs = Math.max(1, ...highlighted.map((x) => Math.abs(x.netDelta)));

    gameImpactHtml = `
      <div class="space-y-1.5">
        <div class="flex items-center justify-between px-0.5">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Dónde sumas y pierdes</span>
          <span class="text-[10px] font-semibold text-inkMuted dark:text-white/45 tabular-nums">${gamesArr.length} juegos</span>
        </div>
        <div class="rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 px-3.5 py-2 space-y-2.5">
          ${highlighted.map((gs) => {
            const gObj = getGameById(gs.gameId);
            const pct = Math.max(8, Math.round((Math.abs(gs.netDelta) / maxAbs) * 100));
            const isPos = gs.netDelta > 0;
            const isNeg = gs.netDelta < 0;
            const dCls = isPos ? 'is-pos' : isNeg ? 'is-neg' : 'is-flat';
            const dTxt = isPos ? `+${gs.netDelta}` : `${gs.netDelta}`;
            const barBg = isPos ? '#227554' : isNeg ? '#D04E36' : '#64748B';
            return `
              <div class="space-y-1">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style="background:${gObj.color}18; color:${gObj.color};">
                      ${gameIconSvg(gObj.icon, 'w-3.5 h-3.5')}
                    </span>
                    <span class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(gs.gameName)}</span>
                    <span class="text-[10px] font-semibold text-inkMuted dark:text-white/50 tabular-nums shrink-0">${gs.wins}V/${gs.plays}P</span>
                  </div>
                  <span class="rating-delta-chip ${dCls}">${dTxt} pts</span>
                </div>
                <div class="elo-mini-track">
                  <div class="h-full rounded-full" style="width:${pct}%; background:${barBg};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 3) Rivalidades en Rating (exacto desde duelos por pareja) + Extremos
  const oppArr = Object.values(st.byOpponent || {}).filter((o) => o.plays > 0);
  let rivalryHtml = '';
  if (oppArr.length > 0) {
    const bestOpp = [...oppArr].filter((o) => o.netDelta > 0).sort((a, b) => (b.netDelta - a.netDelta) || (b.plays - a.plays))[0] || null;
    const worstOpp = [...oppArr].filter((o) => o.netDelta < 0).sort((a, b) => (a.netDelta - b.netDelta) || (b.plays - a.plays))[0] || null;

    let cards = [];
    if (bestOpp && worstOpp) {
      cards = [
        { role: 'Rival rentable', opp: bestOpp, tone: 'is-pos' },
        { role: 'Bestia negra', opp: worstOpp, tone: 'is-neg' },
      ];
    } else {
      const topOpps = [...oppArr].sort((a, b) => (Math.abs(b.netDelta) - Math.abs(a.netDelta)) || (b.plays - a.plays)).slice(0, 2);
      cards = topOpps.map((o) => ({
        role: oppArr.length === 1 ? 'Duelo principal' : 'Rival frecuente',
        opp: o,
        tone: o.netDelta > 0 ? 'is-pos' : o.netDelta < 0 ? 'is-neg' : '',
      }));
    }

    rivalryHtml = `
      <div class="space-y-1.5">
        <div class="px-0.5 text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Rivalidades en Rating</div>
        <div class="grid ${cards.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2">
          ${cards.map(({ role, opp, tone }) => {
            const dCls = opp.netDelta > 0 ? 'is-pos' : opp.netDelta < 0 ? 'is-neg' : 'is-flat';
            const dTxt = opp.netDelta > 0 ? `+${opp.netDelta}` : `${opp.netDelta}`;
            return `
              <div class="rivalry-mini-card ${tone}">
                <div class="flex items-center justify-between gap-1 mb-1.5">
                  <span class="text-[9.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 truncate">${esc(role)}</span>
                  <span class="rating-delta-chip ${dCls}">${dTxt}</span>
                </div>
                <div class="flex items-center gap-2 min-w-0">
                  ${renderPlayerAvatarHtml(opp.name, 'w-7 h-7 text-[10px]')}
                  <div class="min-w-0">
                    <div class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(opp.name)}</div>
                    <div class="text-[10px] font-semibold text-inkMuted dark:text-white/55 tabular-nums">${opp.wins}V–${opp.losses}D${opp.draws > 0 ? `–${opp.draws}E` : ''}</div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 4) Hitos extremos: mayor subida / mayor caída en una partida
  const extremesHtml = (st.bestGain || st.worstDrop) && st.ratedPlays >= 2 ? `
    <div class="grid ${st.bestGain && st.worstDrop ? 'grid-cols-2' : 'grid-cols-1'} gap-2">
      ${st.bestGain ? `
        <div class="rivalry-mini-card is-pos flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="text-[9.5px] font-extrabold uppercase tracking-wider text-emeraldBrand dark:text-emerald-400">Mayor subida</div>
            <div class="text-[11px] font-bold text-ink dark:text-white truncate mt-0.5">${esc(st.bestGain.gameName)}</div>
          </div>
          <span class="rating-delta-chip is-pos shrink-0">+${st.bestGain.delta}</span>
        </div>
      ` : ''}
      ${st.worstDrop ? `
        <div class="rivalry-mini-card is-neg flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="text-[9.5px] font-extrabold uppercase tracking-wider text-coralBrand">Mayor caída</div>
            <div class="text-[11px] font-bold text-ink dark:text-white truncate mt-0.5">${esc(st.worstDrop.gameName)}</div>
          </div>
          <span class="rating-delta-chip is-neg shrink-0">${st.worstDrop.delta}</span>
        </div>
      ` : ''}
    </div>
  ` : '';

  const renderModalContent = () => {
    const slice = allRecent.slice(0, visibleCount);
    const moreInBuffer = Math.max(0, allRecent.length - slice.length);
    const hasOlderInHistory = st.ratedPlays > slice.length;

    const bodyHtml = `
      <div class="space-y-4">
        <!-- Cabecera de ficha -->
        <div class="ranking-arena-hero cover-sheen rounded-[24px] p-4 text-white border border-white/10">
          <div class="flex items-center justify-between gap-3 relative z-10">
            <div class="flex items-center gap-3 min-w-0">
              <span class="podium-avatar-glow" style="--glow-col:${getPlayerColor(st.name)};">
                ${renderPlayerAvatarHtml(st.name, 'w-12 h-12 text-sm ring-2 ring-white/25 relative z-10')}
              </span>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="font-display text-base font-extrabold truncate">${esc(st.name)}</span>
                  <span class="px-2 py-0.5 rounded-lg bg-white/12 border border-white/15 text-[10px] font-extrabold tabular-nums">${st.rank ? `#${st.rank}` : `${st.ratedPlays}/3P`}</span>
                  <span class="tier-pill is-on-dark" style="color:${tierInfo.color};">${esc(tierInfo.label)}</span>
                  ${st.isFormerLeader ? `<span class="px-2 py-0.5 rounded-lg bg-amber-400/20 border border-amber-300/35 text-[10px] font-extrabold text-amber-200">Exlíder</span>` : ''}
                  ${st.provisional ? `<span class="px-2 py-0.5 rounded-lg bg-white/12 text-[10px] font-bold text-white/75">Prov.</span>` : ''}
                </div>
                <div class="flex items-center gap-2 mt-1 text-[11px] text-white/70 tabular-nums">
                  <span>${st.wins}V / ${st.ratedPlays}P (${st.winRate}%)</span>
                  ${renderStreakPillHtml(st.currentStreak, { onDark: true })}
                </div>
              </div>
            </div>
            <div class="px-3.5 py-2 rounded-2xl bg-black/30 border border-white/15 text-center shrink-0">
              <div class="font-display text-2xl font-extrabold text-amber-300 tabular-nums leading-none">${st.note}</div>
              <div class="text-[9.5px] font-bold text-white/60 tabular-nums mt-0.5">${st.points} pts</div>
            </div>
          </div>

          <div class="mt-3.5 relative z-10 space-y-1.5">
            <div class="rating-bar-track bg-white/15">
              <div class="h-full rounded-full transition-all duration-500" style="width:${pctBar}%; background:${getPlayerColorOnDark(st.name)};"></div>
              <span class="rating-mid-mark" style="background:rgba(255,255,255,0.45);"></span>
              ${st.peakPoints > st.points + 8 ? `<span class="rating-peak-pin" style="left:${peakPctBar}%;" title="Pico histórico: ${st.peakNote}"></span>` : ''}
            </div>
            <div class="flex items-center justify-between text-[9.5px] font-bold text-white/55 tabular-nums">
              <span>0.0</span>
              <span>Base 5.0</span>
              <span>10.0</span>
            </div>
          </div>
        </div>

        <!-- 3 hitos del jugador -->
        <div class="grid grid-cols-3 gap-2">
          <div class="p-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center">
            <div class="text-[9.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/50">Pico máx.</div>
            <div class="font-display text-base font-extrabold text-goldBrand dark:text-amber-300 tabular-nums mt-0.5">${st.peakNote}</div>
          </div>
          <div class="p-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center">
            <div class="text-[9.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/50">Mejor racha</div>
            <div class="font-display text-base font-extrabold text-ink dark:text-white tabular-nums mt-0.5">${st.bestStreak} seg.</div>
          </div>
          <div class="p-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center">
            <div class="text-[9.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/50">Últ. cambio</div>
            <div class="font-display text-base font-extrabold tabular-nums mt-0.5 ${st.lastDelta > 0 ? 'text-emeraldBrand dark:text-emerald-400' : st.lastDelta < 0 ? 'text-coralBrand' : 'text-inkMuted'}">${formatRatingDelta(st.lastDelta, st.lastHitCap)}</div>
          </div>
        </div>

        <!-- Analítica compacta del Rating -->
        ${weightSectionHtml}
        ${gameImpactHtml}
        ${rivalryHtml}
        ${extremesHtml}

        <!-- Actividad reciente (5 por defecto, tope 15 en memoria) -->
        <div class="space-y-2">
          <div class="flex items-center justify-between px-0.5">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Actividad reciente</span>
            <span class="text-[10.5px] font-semibold text-inkMuted dark:text-white/50 tabular-nums">
              ${slice.length < st.ratedPlays ? `Últimas ${slice.length} de ${st.ratedPlays}` : `${st.ratedPlays} ${st.ratedPlays === 1 ? 'partida' : 'partidas'}`}
            </span>
          </div>
          <div class="rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 px-3.5 py-1.5 hairline-list">
            ${slice.map((h) => {
              const gObj = getGameById(h.gameId);
              const deltaCls = h.delta > 0 ? 'is-pos' : h.delta < 0 ? 'is-neg' : 'is-flat';
              const tags = [h.weightLabel];
              if (h.marginTag) tags.push(h.marginTag);
              return `
                <div class="hairline-row flex items-center justify-between gap-2.5">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style="background:${gObj.color}18; color:${gObj.color};">
                      ${gameIconSvg(gObj.icon, 'w-4 h-4')}
                    </span>
                    <div class="min-w-0">
                      <div class="flex items-center gap-1.5 min-w-0">
                        <span class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(h.gameName)}</span>
                        ${h.playerScore !== null ? `<span class="text-[10.5px] font-bold text-inkMuted dark:text-white/60 tabular-nums shrink-0">${h.playerScore} pts</span>` : ''}
                      </div>
                      <div class="text-[10.5px] text-inkMuted dark:text-white/55 truncate mt-0.5">
                        ${esc(formatDisplayDate(h.date, h.createdAtMs))} · ${esc(tags.join(' · '))} · ${esc(h.oppSummary)}
                      </div>
                    </div>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="rating-delta-chip ${deltaCls}">${esc(formatRatingDelta(h.delta, h.hitCap))}</span>
                    <div class="text-[10px] font-bold text-inkMuted dark:text-white/50 tabular-nums mt-0.5">${formatRatingNote(h.after)}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${(moreInBuffer > 0 || hasOlderInHistory) ? `
            <div class="flex items-center gap-2 pt-0.5">
              ${moreInBuffer > 0 ? `
                <button type="button" data-prd="show-more"
                  class="btn-tap flex-1 py-2 px-3 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12 text-xs font-bold text-ink dark:text-white tabular-nums">
                  Ver ${Math.min(5, moreInBuffer)} más (${moreInBuffer} ${moreInBuffer === 1 ? 'reciente' : 'recientes'})
                </button>
              ` : ''}
              ${hasOlderInHistory ? `
                <button type="button" data-prd="open-history"
                  class="btn-tap ${moreInBuffer > 0 ? 'shrink-0' : 'flex-1'} py-2 px-3 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-xs font-extrabold">
                  ${moreInBuffer > 0 ? 'Historial →' : `Ver las ${st.ratedPlays} en Historial →`}
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    openModal({
      title: `Radiografía · ${st.name}`,
      subtitle: gameScopeObj ? `Solo partidas en ${gameScopeObj.name}` : 'Análisis de nivel y actividad reciente (0.0 – 10.0)',
      bodyHtml,
      actions: [{ label: 'Cerrar' }],
    });

    const bodyEl = document.getElementById('modal-body');
    bodyEl.onclick = (e) => {
      const btn = e.target.closest('[data-prd]');
      if (!btn) return;
      const act = btn.dataset.prd;
      if (act === 'show-more') {
        visibleCount = Math.min(allRecent.length, visibleCount + 5);
        renderModalContent();
      } else if (act === 'open-history') {
        closeModal();
        uiState.historyProfileKey = st.key;
        uiState.historyFilterGame = filterGameId || 'all';
        uiState.historySearch = '';
        uiState.historyLimit = 30;
        uiState.expandedHistoryLedgerId = null;
        switchTab('history', { resetScroll: true });
      }
    };
  };

  renderModalContent();
}

function mountRankingChart(ratingData, highlightedKeys = null) {
  if (typeof Chart === 'undefined') return;
  const canvas = document.getElementById('chart-rating-evolution');
  if (!canvas || !ratingData || ratingData.timeline.length < 2) return;

  const isDark = document.documentElement.classList.contains('dark');
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(20,38,32,0.08)';
  const tickColor = isDark ? 'rgba(242,239,233,0.65)' : '#6B665D';
  const refColor = isDark ? 'rgba(251,191,36,0.34)' : 'rgba(180,83,9,0.28)';

  // Prioriza jugadores calibrados (3+P) y respeta cualquier jugador resaltado por filtro
  const baseChartPool = ratingData.hasCalibrated
    ? ratingData.players.filter((p) => !p.isCalibrating || (highlightedKeys && highlightedKeys.has(p.key)))
    : [...ratingData.players];
  let chartPlayers = [...baseChartPool];
  chartPlayers.sort((a, b) => {
    const aIn = highlightedKeys && highlightedKeys.has(a.key) ? 1 : 0;
    const bIn = highlightedKeys && highlightedKeys.has(b.key) ? 1 : 0;
    const rA = a.rank ?? (900 - a.points / 100);
    const rB = b.rank ?? (900 - b.points / 100);
    return (bIn - aIn) || (rA - rB);
  });
  chartPlayers = chartPlayers.slice(0, 6);

  const labels = ['Inicio', ...ratingData.timeline.map((t, i) => `#${i + 1}`)];
  const allVals = [5.0];
  const totalSteps = ratingData.timeline.length;
  const leaderKey = chartPlayers[0]?.key || '';

  const datasets = chartPlayers.map((pl) => {
    const col = getPlayerColor(pl.name);
    const isDimmed = highlightedKeys && highlightedKeys.size > 0 && !highlightedKeys.has(pl.key);
    const isPrimary = !isDimmed && pl.key === leaderKey;

    // Encuentra la primera partida donde debuta el jugador para evitar líneas planas aburridas en 5.0 antes de jugar
    const firstStepIdx = ratingData.timeline.findIndex((step) => step.ratings[pl.key] !== undefined);
    const series = new Array(totalSteps + 1).fill(null);
    let lastVal = 5.0;
    if (firstStepIdx >= 0) {
      series[firstStepIdx] = 5.0; // Punto de partida 5.0 justo antes de su debut
      for (let i = firstStepIdx; i < totalSteps; i++) {
        const step = ratingData.timeline[i];
        if (step.ratings[pl.key] !== undefined) {
          lastVal = step.ratings[pl.key];
          allVals.push(lastVal);
        }
        series[i + 1] = lastVal;
      }
    }

    const pointRadii = series.map((val, idx) => {
      if (val === null) return 0;
      if (idx === totalSteps) return isDimmed ? 3.5 : 5.5;
      if (idx === firstStepIdx) return 2.4;
      const stepDelta = ratingData.timeline[idx - 1]?.deltas?.[pl.key];
      return stepDelta !== undefined ? (totalSteps > 35 ? 0 : (totalSteps > 18 ? 1.4 : 2.2)) : 0;
    });

    return {
      label: pl.name,
      playerKey: pl.key,
      data: series,
      borderColor: isDimmed ? (col + '55') : col,
      backgroundColor: isPrimary
        ? (ctx) => {
            const chartArea = ctx.chart.chartArea;
            if (!chartArea) return col + '22';
            const g = ctx.chart.ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            g.addColorStop(0, col + (isDark ? '38' : '2A'));
            g.addColorStop(1, col + '00');
            return g;
          }
        : col,
      fill: isPrimary,
      borderWidth: isDimmed ? 1.7 : (isPrimary ? 3 : 2.4),
      tension: 0.34,
      spanGaps: false,
      pointRadius: pointRadii,
      pointHoverRadius: 6,
      pointBackgroundColor: col,
      pointBorderColor: isDark ? '#111A17' : '#FFFFFF',
      pointBorderWidth: 1.8,
    };
  });

  const minVal = Math.max(0, Math.floor((Math.min(...allVals) - 0.35) * 2) / 2);
  const maxVal = Math.min(10, Math.ceil((Math.max(...allVals) + 0.35) * 2) / 2);

  // Línea de referencia horizontal limpia en 5.0 (Base neutra) con etiqueta discreta
  const baseLinePlugin = {
    id: 'ratingBaseFiveLine',
    beforeDatasetsDraw(chart) {
      const yScale = chart.scales.y;
      const area = chart.chartArea;
      if (!yScale || !area) return;
      const yPos = yScale.getPixelForValue(5.0);
      if (yPos < area.top || yPos > area.bottom) return;
      const ctx = chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = refColor;
      ctx.lineWidth = 1.25;
      ctx.moveTo(area.left, yPos);
      ctx.lineTo(area.right, yPos);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = '700 9.5px Inter, system-ui, sans-serif';
      ctx.fillStyle = refColor;
      ctx.textAlign = 'right';
      ctx.fillText('BASE 5.0', area.right - 2, yPos - 5);
      ctx.restore();
    },
  };

  activeChartInstances.push(new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    plugins: [baseLinePlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: tickColor,
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 12,
            font: { size: 11, weight: '700' },
          },
        },
        tooltip: {
          backgroundColor: isDark ? '#1A2622' : '#142620',
          padding: 10,
          cornerRadius: 12,
          callbacks: {
            title: (items) => {
              const idx = items[0]?.dataIndex ?? 0;
              if (idx === 0) return 'Inicio · Base 5.0 (500 pts)';
              const st = ratingData.timeline[idx - 1];
              return st ? `${st.gameName} · ${st.date}` : `Partida #${idx}`;
            },
            label: (ctx) => {
              const idx = ctx.dataIndex;
              const val = Number(ctx.parsed.y).toFixed(1);
              if (idx === 0) return ` ${ctx.dataset.label}: ${val}`;
              const st = ratingData.timeline[idx - 1];
              const d = st?.deltas?.[ctx.dataset.playerKey];
              const dTxt = d !== undefined ? ` (${d > 0 ? '+' : ''}${d} pts)` : '';
              return ` ${ctx.dataset.label}: ${val}${dTxt}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: tickColor, font: { size: 10, weight: '600' }, maxTicksLimit: 8 },
        },
        y: {
          min: minVal,
          max: maxVal,
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { size: 10.5, weight: '600' },
            callback: (v) => Number(v).toFixed(1),
          },
        },
      },
    },
  }));
}

// =========================================================================
// 11. TAB 2: HISTORIAL CON FILTROS Y TARJETAS EXPANDIBLES
// =========================================================================
function getHistoryProfileCandidates(globalRatings) {
  const map = new Map();
  getAllPlayersWithCounts().forEach((p) => {
    const key = normName(p.name);
    if (!key || map.has(key)) return;
    const rSt = globalRatings?.byKey?.[key] || null;
    map.set(key, {
      key,
      name: p.name,
      plays: p.count,
      note: rSt ? rSt.note : '',
      points: rSt ? rSt.points : null,
      rank: rSt ? rSt.rank : null,
    });
  });
  return Array.from(map.values());
}

function buildHistoryDynamicHtml() {
  const globalRatings = computeRatingSystem(matchHistory, { includeTimeline: false, maxHistory: 0 });
  const rawProfKey = normName(uiState.historyProfileKey);
  const isAllMode = !rawProfKey || rawProfKey === SHELF_HOME_KEY;
  const activePlayerKey = isAllMode ? null : rawProfKey;

  // Base de partidas según modo: Casita (todas) o Jugador concreto (solo las que jugó)
  const playerBaseMatches = activePlayerKey
    ? matchHistory.filter((m) => (m.players || []).some((p) => normName(p.name) === activePlayerKey))
    : matchHistory;

  const usedGameIds = [...new Set(playerBaseMatches.map((m) => m.gameId))];
  if (uiState.historyFilterGame !== 'all' && !usedGameIds.includes(uiState.historyFilterGame)) {
    uiState.historyFilterGame = 'all';
  }

  const filtered = playerBaseMatches.filter((m) => {
    if (uiState.historyFilterGame !== 'all' && m.gameId !== uiState.historyFilterGame) return false;
    if (uiState.historySearch.trim()) {
      const q = uiState.historySearch.trim().toLowerCase();
      const blob = `${m.gameName} ${m.winnerLabel} ${m.extraLabel} ${m.notes} ${(m.players || []).map((p) => `${p.name} ${p.tag}`).join(' ')}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });

  const limit = Math.max(30, Number(uiState.historyLimit) || 30);
  const visibleSlice = filtered.slice(0, limit);
  const remaining = Math.max(0, filtered.length - visibleSlice.length);

  const filterChips = usedGameIds.length > 0 ? `
    <div class="scroll-strip no-scrollbar">
      <button type="button" data-action="filter-history-game" data-val="all"
        class="btn-tap shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border ${uiState.historyFilterGame === 'all' ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-xs' : 'pill-chip text-ink dark:text-white/80'}">
        Todos (${playerBaseMatches.length})
      </button>
      ${usedGameIds.map((gid) => {
        const g = getGameById(gid);
        const active = uiState.historyFilterGame === gid;
        return `
          <button type="button" data-action="filter-history-game" data-val="${esc(gid)}"
            class="btn-tap shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 ${active ? 'text-white border-transparent shadow-xs' : 'pill-chip text-ink dark:text-white/80'}"
            style="${active ? `background:${g.color};` : ''}">
            <span class="w-2 h-2 rounded-full" style="background:${active ? '#fff' : g.color}"></span>
            <span>${esc(g.name)}</span>
          </button>
        `;
      }).join('')}
    </div>
  ` : '';

  // ==================== VISTA INDIVIDUAL: REGISTRO DE GANANCIA / PÉRDIDA DEL JUGADOR ====================
  if (activePlayerKey) {
    const rSt = globalRatings.byKey[activePlayerKey] || null;
    const samplePlayer = playerBaseMatches
      .flatMap((m) => m.players || [])
      .find((p) => normName(p.name) === activePlayerKey);
    const displayName = rSt?.name || samplePlayer?.name || playerProfiles[activePlayerKey]?.name || activePlayerKey;
    const tierInfo = rSt ? getRatingTierInfo(rSt.points) : null;

    // Métricas exactas en la vista/filtro actual
    let viewWins = 0;
    let viewNetDelta = 0;
    let viewRatedCount = 0;
    filtered.forEach((m) => {
      const me = (m.players || []).find((p) => normName(p.name) === activePlayerKey);
      if (me?.winner) viewWins += 1;
      const rInfo = globalRatings.byMatch[m.id]?.[activePlayerKey];
      if (rInfo) {
        viewNetDelta += rInfo.delta;
        viewRatedCount += 1;
      }
    });
    const viewWr = filtered.length > 0 ? Math.round((viewWins / filtered.length) * 100) : 0;
    const netLabel = viewRatedCount > 0
      ? `${viewNetDelta > 0 ? '+' : ''}${viewNetDelta} pts`
      : 'Sin rating';
    const netColor = viewRatedCount === 0
      ? 'text-white/65'
      : (viewNetDelta > 0 ? 'text-emerald-300' : viewNetDelta < 0 ? 'text-rose-300' : 'text-white/80');
    const gameScopeObj = uiState.historyFilterGame !== 'all' ? getGameById(uiState.historyFilterGame) : null;

    const playerHeroHtml = `
      <div class="ranking-arena-hero cover-sheen rounded-[24px] p-4 text-white border border-white/10 anim-in">
        <div class="flex items-center justify-between gap-3 relative z-10">
          <div class="flex items-center gap-3 min-w-0">
            <span class="podium-avatar-glow" style="--glow-col:${getPlayerColor(displayName)};">
              ${renderPlayerAvatarHtml(displayName, 'w-11 h-11 text-sm ring-2 ring-white/25 relative z-10')}
            </span>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-display text-base font-extrabold truncate">${esc(displayName)}</span>
                ${rSt?.rank ? `<span class="px-1.5 py-0.5 rounded-lg bg-white/12 border border-white/15 text-[10px] font-extrabold tabular-nums">#${rSt.rank}</span>` : ''}
                ${tierInfo ? `<span class="tier-pill is-on-dark" style="color:${tierInfo.color};">${esc(tierInfo.label)}</span>` : ''}
                ${rSt && rSt.currentStreak >= 2 ? renderStreakPillHtml(rSt.currentStreak, { onDark: true }) : ''}
              </div>
              <div class="text-[11px] text-white/70 truncate mt-0.5">
                ${gameScopeObj ? `Registro en ${esc(gameScopeObj.name)}` : 'Historial de ganancias y pérdidas por partida'}
              </div>
            </div>
          </div>
          ${rSt ? `
            <button type="button" data-action="open-player-rating-detail" data-key="${esc(activePlayerKey)}"
              class="btn-tap px-3 py-1.5 rounded-2xl bg-black/30 hover:bg-black/40 border border-white/15 text-center shrink-0" title="Abrir Radiografía completa">
              <div class="font-display text-xl font-extrabold text-amber-300 tabular-nums leading-none">${rSt.note}</div>
              <div class="text-[9.5px] font-bold text-white/60 tabular-nums mt-0.5">${rSt.points} pts</div>
            </button>
          ` : ''}
        </div>

        <div class="mt-3 league-pulse-grid relative z-10">
          <div class="league-pulse-item">
            <div class="text-[9px] font-bold uppercase tracking-wider text-white/50 truncate">Partidas</div>
            <div class="text-xs font-extrabold text-white tabular-nums mt-0.5">${filtered.length} ${filtered.length === 1 ? 'jugada' : 'jugadas'}</div>
          </div>
          <div class="league-pulse-item">
            <div class="text-[9px] font-bold uppercase tracking-wider text-white/50 truncate">Victorias</div>
            <div class="text-xs font-extrabold text-amber-200 tabular-nums mt-0.5">${viewWins}V · ${viewWr}%</div>
          </div>
          <div class="league-pulse-item">
            <div class="text-[9px] font-bold uppercase tracking-wider text-white/50 truncate">Balance Elo</div>
            <div class="text-xs font-extrabold ${netColor} tabular-nums mt-0.5">${netLabel}</div>
          </div>
        </div>
      </div>
    `;

    const ledgerRowsHtml = visibleSlice.length > 0 ? `
      <div class="card-pro rounded-[24px] px-3.5 py-2 anim-in">
        <div class="flex items-center justify-between gap-2 pb-2 mb-0.5 border-b border-black/[0.05] dark:border-white/[0.06] px-0.5">
          <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Registro de partidas</span>
          <span class="text-[10.5px] font-semibold text-inkMuted dark:text-white/50">Toca una fila para acciones</span>
        </div>
        <div class="hairline-list">
          ${visibleSlice.map((m) => {
            const g = getGameById(m.gameId);
            const me = (m.players || []).find((p) => normName(p.name) === activePlayerKey);
            const rInfo = globalRatings.byMatch[m.id]?.[activePlayerKey] || null;
            const isExp = uiState.expandedHistoryLedgerId === m.id;
            const dCls = rInfo ? (rInfo.delta > 0 ? 'is-pos' : rInfo.delta < 0 ? 'is-neg' : 'is-flat') : 'is-flat';
            const dTxt = rInfo ? formatRatingDelta(rInfo.delta, rInfo.hitCap) : (getMatchScoringType(m) === 'coop' ? 'Coop' : 'Solo');
            const oppNames = (m.players || []).filter((p) => normName(p.name) !== activePlayerKey).map((p) => p.name);
            const oppTxt = oppNames.length === 0
              ? 'Solitario'
              : (oppNames.length === 1 ? `vs ${oppNames[0]}` : `Mesa de ${oppNames.length + 1}`);
            const subParts = [formatDisplayDate(m.date, m.createdAtMs)];
            if (rInfo?.weightLabel) subParts.push(rInfo.weightLabel);
            if (rInfo?.marginTag) subParts.push(rInfo.marginTag);
            else if (m.extraLabel) subParts.push(m.extraLabel);
            subParts.push(oppTxt);

            return `
              <div class="hairline-row">
                <button type="button" data-action="toggle-ledger-match" data-id="${esc(m.id)}" class="ledger-row-btn">
                  <div class="flex items-center justify-between gap-2.5">
                    <div class="flex items-center gap-2.5 min-w-0">
                      <span class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border" style="background:${g.color}15; border-color:${g.color}28; color:${g.color};">
                        ${gameIconSvg(g.icon, 'w-4 h-4')}
                      </span>
                      <div class="min-w-0">
                        <div class="flex items-center gap-1.5 min-w-0">
                          ${me?.winner ? `<svg class="w-3.5 h-3.5 text-goldBrand shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17 5 7l5 4 2-6 2 6 5-4 2 10H3Z"/></svg>` : ''}
                          <span class="text-xs sm:text-sm font-extrabold text-ink dark:text-white truncate">${esc(m.gameName)}</span>
                          ${me?.score !== null && me?.score !== undefined ? `<span class="text-[11px] font-extrabold text-emeraldBrand dark:text-emerald-400 tabular-nums shrink-0">${me.score} pts</span>` : ''}
                          ${m.pendingSync ? `<span class="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[9px] font-extrabold uppercase shrink-0">Pend.</span>` : ''}
                        </div>
                        <div class="text-[10.5px] text-inkMuted dark:text-white/55 truncate mt-0.5">
                          ${esc(subParts.join(' · '))}
                        </div>
                      </div>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="rating-delta-chip is-lg ${dCls}">${esc(dTxt)}</span>
                      <div class="text-[10px] font-bold text-inkMuted dark:text-white/50 tabular-nums mt-0.5">
                        ${rInfo ? `${formatRatingNote(rInfo.before)} → <strong class="text-ink dark:text-white">${formatRatingNote(rInfo.after)}</strong>` : 'Sin rating'}
                      </div>
                    </div>
                  </div>
                </button>

                ${isExp ? `
                  <div class="ledger-row-expand space-y-2.5 anim-in">
                    <div class="flex flex-wrap gap-1.5">
                      ${(m.players || []).map((pl) => {
                        const plR = globalRatings.byMatch[m.id]?.[normName(pl.name)] || null;
                        const plCls = plR ? (plR.delta > 0 ? 'is-pos' : plR.delta < 0 ? 'is-neg' : 'is-flat') : '';
                        const plTxt = plR ? (plR.delta > 0 ? `+${plR.delta}` : `${plR.delta}`) : '';
                        return `
                          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-[11px] border ${
                            pl.winner
                              ? 'bg-amber-50/80 dark:bg-amber-500/12 border-amber-400/40 text-ink dark:text-white font-bold'
                              : 'bg-canvas/75 dark:bg-surfaceDarkAlt border-black/[0.06] dark:border-white/[0.08] text-ink dark:text-white/80 font-medium'
                          }">
                            <span class="w-2 h-2 rounded-full shrink-0" style="background:${getPlayerColor(pl.name)};"></span>
                            <span>${esc(pl.name)}</span>
                            ${pl.score !== null && pl.score !== undefined ? `<strong class="tabular-nums text-emeraldBrand dark:text-emerald-400">${pl.score}</strong>` : ''}
                            ${plR ? `<span class="rating-delta-chip ${plCls}">${plTxt}</span>` : ''}
                          </span>
                        `;
                      }).join('')}
                    </div>
                    ${Array.isArray(m.meta?.breakdown) && m.meta.breakdown.length > 0 ? `
                      <button type="button" data-action="view-harmonies-breakdown" data-id="${esc(m.id)}"
                        class="btn-tap inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold" style="background:${g.color}18; color:${g.color};">
                        Ver desglose por categorías →
                      </button>
                    ` : ''}
                    ${m.notes ? `<p class="text-[11px] text-inkMuted dark:text-white/60 italic bg-canvas/60 dark:bg-surfaceDarkAlt/60 rounded-xl px-2.5 py-1.5 border-l-2 border-emeraldBrand/45">${esc(m.notes)}</p>` : ''}
                    <div class="grid grid-cols-4 gap-1 pt-0.5">
                      <button type="button" data-action="share-match-png" data-id="${esc(m.id)}" class="btn-tap history-action-btn is-blue">
                        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        <span>PNG</span>
                      </button>
                      <button type="button" data-action="edit-match" data-id="${esc(m.id)}" class="btn-tap history-action-btn is-amber">
                        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                        <span>Editar</span>
                      </button>
                      <button type="button" data-action="rematch-match" data-id="${esc(m.id)}" class="btn-tap history-action-btn is-emerald">
                        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                        <span>Repetir</span>
                      </button>
                      <button type="button" data-action="delete-match" data-id="${esc(m.id)}" class="btn-tap history-action-btn is-danger">
                        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        <span>Borrar</span>
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : `
      <div class="card-pro rounded-[24px] border-dashed p-8 text-center anim-in">
        <p class="text-xs font-semibold text-inkMuted dark:text-white/60">
          Ninguna partida de ${esc(displayName)} coincide con este filtro.
        </p>
      </div>
    `;

    const loadMoreHtml = remaining > 0 ? `
      <div class="pt-1 text-center">
        <button type="button" data-action="load-more-history"
          class="btn-tap w-full sm:w-auto px-5 py-2.5 rounded-2xl card-pro hover:border-emeraldBrand/45 text-xs font-extrabold text-ink dark:text-white tabular-nums">
          Cargar más partidas (${remaining} ${remaining === 1 ? 'restante' : 'restantes'})
        </button>
      </div>
    ` : '';

    return `
      ${playerHeroHtml}
      ${filterChips}
      ${ledgerRowsHtml}
      ${loadMoreHtml}
    `;
  }

  const cardsHtml = visibleSlice.length > 0 ? visibleSlice.map((m) => {
    const g = getGameById(m.gameId);
    return `
      <article class="card-pro rounded-[22px] overflow-hidden anim-in">
        <div class="flex">
          <div class="w-1.5 shrink-0" style="background: linear-gradient(180deg, ${g.color}, ${g.color2 || g.color});"></div>
          <div class="flex-1 p-4 min-w-0">
            <!-- Cabecera a ancho completo -->
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border" style="background:${g.color}14; border-color:${g.color}28; color:${g.color};">
                ${gameIconSvg(g.icon, 'w-5 h-5')}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2">
                  <h3 class="font-display text-[15px] font-extrabold text-ink dark:text-white leading-tight">${esc(m.gameName)}</h3>
                  <div class="flex items-center gap-1 shrink-0">
                    ${m.topScore !== null ? `<span class="px-2 py-0.5 rounded-lg bg-amber-500/14 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold tabular-nums">${m.topScore} pts</span>` : ''}
                    ${m.pendingSync ? `<span class="px-1.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-[9.5px] font-extrabold uppercase tracking-wider">Pendiente</span>` : ''}
                  </div>
                </div>
                <div class="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-inkMuted dark:text-white/60">
                  <span class="font-semibold tabular-nums" style="white-space:nowrap;">${esc(formatDisplayDate(m.date, m.createdAtMs))}${m.duration ? ` · ${m.duration} min` : ''}</span>
                  ${m.extraLabel ? `<span class="px-2 py-0.5 rounded-lg bg-black/[0.045] dark:bg-white/[0.08] text-[10.5px] font-semibold text-inkMuted dark:text-white/70">${esc(m.extraLabel)}</span>` : ''}
                </div>
              </div>
            </div>

            <!-- Jugadores -->
            <div class="mt-3 pt-2.5 border-t border-black/[0.05] dark:border-white/[0.06] flex flex-wrap gap-1.5">
              ${(m.players || []).map((pl) => {
                const rInfo = globalRatings.byMatch[m.id]?.[normName(pl.name)] || null;
                const dCls = rInfo ? (rInfo.delta > 0 ? 'is-pos' : rInfo.delta < 0 ? 'is-neg' : 'is-flat') : '';
                const dTxt = rInfo ? (rInfo.hitCap && rInfo.delta === 0 ? '+0' : (rInfo.delta > 0 ? `+${rInfo.delta}` : `${rInfo.delta}`)) : '';
                const dTitle = rInfo ? `Rating: ${formatRatingNote(rInfo.before)} → ${formatRatingNote(rInfo.after)} (${formatRatingDelta(rInfo.delta, rInfo.hitCap)} pts)` : '';
                return `
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs border ${
                  pl.winner
                    ? 'bg-gradient-to-r from-amber-50 to-amber-50/40 dark:from-amber-500/15 dark:to-amber-500/5 border-amber-400/40 text-ink dark:text-white font-bold'
                    : 'bg-canvas/75 dark:bg-surfaceDarkAlt border-black/[0.06] dark:border-white/[0.08] text-ink dark:text-white/85 font-medium'
                }">
                  ${pl.winner
                    ? `<svg class="w-3.5 h-3.5 text-goldBrand shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17 5 7l5 4 2-6 2 6 5-4 2 10H3Z"/></svg>`
                    : `<span class="text-[10px] font-bold text-inkMuted/70 dark:text-white/40">#${pl.rank || ''}</span>`}
                  <span class="w-2 h-2 rounded-full shrink-0" style="background:${getPlayerColor(pl.name)};"></span>
                  <span>${esc(pl.name)}</span>
                  ${pl.score !== null && pl.score !== undefined ? `<strong class="tabular-nums text-emeraldBrand dark:text-emerald-400">${pl.score}</strong>` : ''}
                  ${rInfo ? `<span class="rating-delta-chip ${dCls}" title="${esc(dTitle)}">${dTxt}</span>` : ''}
                  ${pl.tag ? `<span class="text-[10px] px-1.5 py-0.5 rounded-md bg-black/[0.05] dark:bg-white/10 text-inkMuted dark:text-white/60">${esc(pl.tag)}</span>` : ''}
                </span>
              `;
              }).join('')}
            </div>

            ${Array.isArray(m.meta?.breakdown) && m.meta.breakdown.length > 0 ? `
              <div class="mt-2.5">
                <button type="button" data-action="view-harmonies-breakdown" data-id="${esc(m.id)}"
                  class="btn-tap inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-bold" style="background:${g.color}18; color:${g.color};">
                  Ver desglose por categorías →
                </button>
              </div>
            ` : ''}
            ${m.notes ? `<p class="mt-2.5 text-xs text-inkMuted dark:text-white/60 italic bg-canvas/60 dark:bg-surfaceDarkAlt/60 rounded-xl px-3 py-2 border-l-2 border-emeraldBrand/45">${esc(m.notes)}</p>` : ''}

            <!-- Barra de acciones inferior ligera sin cajas -->
            <div class="mt-2.5 pt-2 border-t border-black/[0.05] dark:border-white/[0.06] grid grid-cols-4 gap-1">
              <button type="button" data-action="share-match-png" data-id="${esc(m.id)}"
                class="btn-tap history-action-btn is-blue" title="Exportar tarjeta PNG" aria-label="Compartir PNG">
                <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                <span>PNG</span>
              </button>
              <button type="button" data-action="edit-match" data-id="${esc(m.id)}"
                class="btn-tap history-action-btn is-amber" title="Editar partida" aria-label="Editar partida">
                <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                </svg>
                <span>Editar</span>
              </button>
              <button type="button" data-action="rematch-match" data-id="${esc(m.id)}"
                class="btn-tap history-action-btn is-emerald" title="Revancha (cargar juego y jugadores)" aria-label="Revancha">
                <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
                </svg>
                <span>Repetir</span>
              </button>
              <button type="button" data-action="delete-match" data-id="${esc(m.id)}"
                class="btn-tap history-action-btn is-danger" title="Eliminar partida" aria-label="Eliminar">
                <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
                <span>Borrar</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('') : `
    <div class="card-pro rounded-[26px] border-dashed p-9 text-center anim-in">
      <div class="w-12 h-12 mx-auto rounded-2xl bg-canvas dark:bg-surfaceDarkAlt flex items-center justify-center text-inkMuted dark:text-white/50 mb-3">
        ${gameIconSvg('dice', 'w-6 h-6')}
      </div>
      <h3 class="font-display text-base font-extrabold text-ink dark:text-white">${matchHistory.length === 0 ? 'Aún no hay partidas registradas' : 'Ninguna partida coincide con el filtro'}</h3>
      <p class="text-xs text-inkMuted dark:text-white/60 mt-1 max-w-xs mx-auto leading-relaxed">
        ${matchHistory.length === 0 ? 'Registra tu primera partida en menos de 10 segundos y empezarán a aparecer aquí tus estadísticas e insignias.' : 'Prueba a cambiar el juego seleccionado o limpia el buscador.'}
      </p>
      ${matchHistory.length === 0 ? `<button type="button" data-nav="log" class="btn-tap btn-primary-pro mt-4 px-4 py-2.5 rounded-xl text-white text-xs font-bold">Registrar primera partida</button>` : ''}
    </div>
  `;

  const loadMoreHtml = remaining > 0 ? `
    <div class="pt-1 text-center">
      <button type="button" data-action="load-more-history"
        class="btn-tap w-full sm:w-auto px-5 py-2.5 rounded-2xl card-pro hover:border-emeraldBrand/45 text-xs font-extrabold text-ink dark:text-white tabular-nums">
        Cargar más partidas (${remaining} ${remaining === 1 ? 'restante' : 'restantes'})
      </button>
    </div>
  ` : '';

  return `
    ${filterChips}
    <div class="space-y-3 stagger-list">${cardsHtml}</div>
    ${loadMoreHtml}
  `;
}

function updateHistoryDynamicRegion() {
  const region = document.getElementById('history-dynamic-region');
  if (region) {
    region.innerHTML = buildHistoryDynamicHtml();
  } else {
    renderHistoryTab();
  }
}

function renderHistoryTab() {
  const container = document.getElementById('view-history');

  const pendingCount = getPendingSyncCount();
  const hasSheetsUrl = Boolean(syncState.apiUrl || getSavedSheetsUrl());
  const syncBar = pendingCount > 0 && hasSheetsUrl
    ? `
      <div class="px-3.5 py-2.5 rounded-2xl bg-amber-500/14 border border-amber-500/35 flex items-center justify-between gap-2 text-xs text-amber-900 dark:text-amber-200 font-semibold">
        <span class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
          <span class="truncate">${pendingCount} ${pendingCount === 1 ? 'cambio pendiente' : 'cambios pendientes'} de subir a Sheets</span>
        </span>
        <button type="button" data-action="refresh-sheets" ${syncState.isLoading ? 'disabled' : ''}
          class="btn-tap shrink-0 px-2.5 py-1 rounded-xl bg-amber-600 text-white font-bold text-[11px] flex items-center gap-1 shadow-2xs">
          <svg class="w-3.5 h-3.5 ${syncState.isLoading ? 'spin-fast' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
          <span>${syncState.isLoading ? 'Subiendo' : 'Subir ahora'}</span>
        </button>
      </div>
    `
    : syncState.connected
      ? `
        <div class="px-3.5 py-2.5 rounded-2xl bg-emeraldBrand/10 border border-emeraldBrand/20 flex items-center justify-between gap-2 text-xs text-emeraldBrand dark:text-emerald-300 font-semibold">
          <span class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emeraldBrand shadow-[0_0_6px_rgba(34,117,84,0.7)]"></span>
            <span>Sincronizado con Sheets · ${matchHistory.length} ${matchHistory.length === 1 ? 'partida' : 'partidas'}</span>
          </span>
          <button type="button" data-action="refresh-sheets" ${syncState.isLoading ? 'disabled' : ''}
            class="btn-tap px-2.5 py-1 rounded-xl bg-white dark:bg-surfaceDark border border-emeraldBrand/25 font-bold text-[11px] flex items-center gap-1 shadow-2xs">
            <svg class="w-3.5 h-3.5 ${syncState.isLoading ? 'spin-fast' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
            <span>${syncState.isLoading ? 'Cargando' : 'Recargar'}</span>
          </button>
        </div>
      `
      : '';

  const historyRatings = matchHistory.length > 0
    ? computeRatingSystem(matchHistory, { includeTimeline: false, includeByMatch: false, maxHistory: 0 })
    : null;
  const histProfiles = matchHistory.length > 0 ? getHistoryProfileCandidates(historyRatings) : [];
  const activeHistKey = normName(uiState.historyProfileKey);
  if (activeHistKey && activeHistKey !== SHELF_HOME_KEY && !histProfiles.some((p) => p.key === activeHistKey)) {
    uiState.historyProfileKey = SHELF_HOME_KEY;
  }
  const isHistHome = !normName(uiState.historyProfileKey) || normName(uiState.historyProfileKey) === SHELF_HOME_KEY;

  const profileStripHtml = histProfiles.length > 0 ? `
    <div class="scroll-strip no-scrollbar">
      <button type="button" data-action="set-history-profile" data-key="${SHELF_HOME_KEY}"
        class="profile-chip is-icon-only btn-tap shrink-0 ${isHistHome ? 'is-active' : ''}"
        title="Historial general (todas las partidas)" aria-label="Historial general">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5"/>
        </svg>
      </button>
      ${histProfiles.map((prof) => {
        const isAct = !isHistHome && prof.key === normName(uiState.historyProfileKey);
        return `
          <button type="button" data-action="set-history-profile" data-key="${esc(prof.key)}"
            class="profile-chip btn-tap shrink-0 ${isAct ? 'is-active' : ''}">
            ${renderPlayerAvatarHtml(prof.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
            <span>${esc(prof.name)}</span>
            ${prof.note ? `<span class="text-[10px] font-extrabold tabular-nums ${isAct ? 'text-amber-300' : 'text-goldBrand'}">${prof.note}</span>` : ''}
          </button>
        `;
      }).join('')}
    </div>
  ` : '';

  container.innerHTML = `
    ${syncBar}
    ${profileStripHtml}
    ${matchHistory.length > 0 ? `
      <div class="relative">
        <svg class="w-4 h-4 text-inkMuted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="history-search-input" type="search" value="${esc(uiState.historySearch)}" placeholder="${isHistHome ? 'Buscar por jugador, juego, corporación, nota...' : 'Filtrar partidas por juego, rival o nota...'}"
          class="w-full h-11 pl-10 pr-4 card-pro focus:border-emeraldBrand rounded-2xl text-xs sm:text-sm text-ink dark:text-white outline-none" />
      </div>
    ` : ''}
    <div id="history-dynamic-region" class="space-y-4">
      ${buildHistoryDynamicHtml()}
    </div>
  `;

  const searchEl = document.getElementById('history-search-input');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      uiState.historySearch = e.target.value;
      uiState.historyLimit = 30;
      updateHistoryDynamicRegion();
    });
  }
}

// =========================================================================
// 11B. ANALÍTICA AVANZADA (ÍNDICE H, HEATMAP ANUAL, POLVO) Y TARJETAS PNG
// =========================================================================
function computeHIndex(matches) {
  const countsMap = {};
  (matches || []).forEach((m) => {
    countsMap[m.gameId] = (countsMap[m.gameId] || 0) + 1;
  });
  const list = Object.entries(countsMap)
    .map(([gid, count]) => ({ game: getGameById(gid), count }))
    .sort((a, b) => b.count - a.count);

  let h = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].count >= i + 1) h = i + 1;
    else break;
  }

  const nextH = h + 1;
  const ladderSlots = [];
  let playsNeeded = 0;
  for (let i = 0; i < nextH; i++) {
    const item = list[i] || null;
    const count = item ? item.count : 0;
    const missing = Math.max(0, nextH - count);
    playsNeeded += missing;
    ladderSlots.push({
      slotNum: i + 1,
      game: item ? item.game : null,
      count,
      target: nextH,
      ready: count >= nextH,
      missing,
    });
  }
  const gamesAtNextH = ladderSlots.filter((s) => s.ready).length;
  const contributors = list.slice(0, h);

  let levelLabel = 'Primer paso';
  if (h >= 10) levelLabel = 'Leyenda de mesa';
  else if (h >= 8) levelLabel = 'Veterano';
  else if (h >= 5) levelLabel = 'Estratega';
  else if (h >= 3) levelLabel = 'Jugón habitual';
  else if (h >= 1) levelLabel = 'Explorador';

  return { h, nextH, playsNeeded, gamesAtNextH, contributors, ladderSlots, levelLabel, totalUnique: list.length };
}

function computeActivityHeatmap(matches, scope = '12m') {
  const byDay = {};
  const yearsSet = new Set();
  (matches || []).forEach((m) => {
    const iso = String(m.date || '').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return;
    yearsSet.add(iso.slice(0, 4));
    if (!byDay[iso]) byDay[iso] = [];
    byDay[iso].push(m);
  });

  const currentYear = String(new Date().getFullYear());
  yearsSet.add(currentYear);
  const availableYears = Array.from(yearsSet).sort((a, b) => b.localeCompare(a));

  // Construye rango de fechas (lunes a domingo)
  const pad2 = (n) => String(n).padStart(2, '0');
  const toIso = (dt) => `${dt.getFullYear()}-${pad2(dt.getMonth() + 1)}-${pad2(dt.getDate())}`;
  const mondayOffset = (dt) => (dt.getDay() + 6) % 7; // 0=Lun .. 6=Dom

  let startDate, endDate;
  if (scope === '12m' || !/^\d{4}$/.test(scope)) {
    const now = new Date();
    endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    startDate = new Date(endDate.getTime());
    startDate.setDate(startDate.getDate() - 364);
    startDate.setDate(startDate.getDate() - mondayOffset(startDate));
  } else {
    const y = Number(scope);
    startDate = new Date(y, 0, 1);
    startDate.setDate(startDate.getDate() - mondayOffset(startDate));
    endDate = new Date(y, 11, 31);
  }

  const weeks = [];
  const monthMarkers = [];
  let cur = new Date(startDate.getTime());
  let lastMonth = -1;
  let activeDays = 0;
  let totalInRange = 0;
  let bestDay = null;
  let curWeekStreak = 0;
  let maxWeekStreak = 0;

  while (cur <= endDate) {
    const weekCols = [];
    const weekIdx = weeks.length;
    let weekHasPlay = false;

    for (let dow = 0; dow < 7; dow++) {
      const iso = toIso(cur);
      const inTarget = (scope === '12m')
        ? (cur <= endDate)
        : (String(cur.getFullYear()) === String(scope));

      if (dow === 0 && inTarget && cur.getMonth() !== lastMonth) {
        lastMonth = cur.getMonth();
        const mLabel = cur.toLocaleDateString('es-ES', { month: 'short' }).replace('.', '');
        monthMarkers.push({ weekIdx, label: mLabel.charAt(0).toUpperCase() + mLabel.slice(1) });
      }

      const dayMatches = inTarget ? (byDay[iso] || []) : [];
      const count = dayMatches.length;
      if (count > 0) {
        activeDays++;
        totalInRange += count;
        weekHasPlay = true;
        if (!bestDay || count > bestDay.count) {
          bestDay = { iso, count, games: [...new Set(dayMatches.map((x) => x.gameName))] };
        }
      }
      weekCols.push({ iso, count, inTarget, matches: dayMatches });
      cur.setDate(cur.getDate() + 1);
    }

    if (weekHasPlay) {
      curWeekStreak++;
      if (curWeekStreak > maxWeekStreak) maxWeekStreak = curWeekStreak;
    } else {
      curWeekStreak = 0;
    }
    weeks.push(weekCols);
  }

  return { weeks, monthMarkers, availableYears, byDay, activeDays, totalInRange, bestDay, maxWeekStreak };
}

function computeShelfDustRanking() {
  const played = [];
  const unplayed = [];
  games.forEach((g) => {
    const gMatches = matchHistory.filter((m) => m.gameId === g.id);
    if (gMatches.length === 0) {
      unplayed.push({ game: g, plays: 0, days: null, lastDate: null });
    } else {
      const days = getDaysSinceLastPlay(g.id);
      const lastDate = getLatestPlayDateISO(g.id) || gMatches[0].date;
      played.push({ game: g, plays: gMatches.length, days: days ?? 0, lastDate });
    }
  });
  played.sort((a, b) => (b.days - a.days) || (a.plays - b.plays));
  unplayed.sort((a, b) => (getGameRatingFor(b.game) - getGameRatingFor(a.game)) || a.game.name.localeCompare(b.game.name, 'es'));
  return { played, unplayed };
}

// -------------------------------------------------------------------------
// GENERADOR DE TARJETAS PNG COMPARTIBLES (CANVAS 2D HD)
// -------------------------------------------------------------------------
function canvasRoundRect(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

function canvasTruncateText(ctx, text, maxW) {
  const s = String(text || '');
  if (ctx.measureText(s).width <= maxW) return s;
  let out = s;
  while (out.length > 1 && ctx.measureText(out + '…').width > maxW) {
    out = out.slice(0, -1);
  }
  return out + '…';
}

function canvasDrawBrandHex(ctx, cx, cy, r) {
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  ctx.fill();
  ctx.lineWidth = 2.4;
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.stroke();

  const dots = [
    { dx: -r * 0.28, dy: -r * 0.16, c: '#FBBF24' },
    { dx: r * 0.28, dy: -r * 0.16, c: '#34D399' },
    { dx: 0, dy: r * 0.30, c: '#FB7185' },
  ];
  dots.forEach((d) => {
    ctx.beginPath();
    ctx.arc(cx + d.dx, cy + d.dy, r * 0.17, 0, Math.PI * 2);
    ctx.fillStyle = d.c;
    ctx.fill();
  });
  ctx.restore();
}

function loadGameIconImage(iconName, colorHex = '#FFFFFF', size = 280) {
  return new Promise((resolve) => {
    try {
      const rawSvg = gameIconSvg(iconName || 'dice', '');
      const innerMatch = rawSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
      if (!innerMatch) { resolve(null); return; }
      const inner = innerMatch[1].replace(/currentColor/g, colorHex);
      const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">${inner}</svg>`;
      const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(fullSvg);
      const img = new Image();
      let settled = false;
      const done = (val) => { if (!settled) { settled = true; resolve(val); } };
      img.onload = () => done(img);
      img.onerror = () => done(null);
      setTimeout(() => done(null), 650);
      img.src = dataUrl;
    } catch (e) {
      resolve(null);
    }
  });
}

function buildMatchCardCanvas(match, iconImg = null) {
  const g = getGameById(match.gameId);
  const players = (match.players || []).slice(0, 8);
  const hasNote = Boolean((match.notes || '').trim());
  const W = 1080;
  const H = 560 + players.length * 98 + (hasNote ? 128 : 0) + 110;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Fondo degradado profundo con identidad del juego
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0C1A15');
  bg.addColorStop(0.55, '#11261E');
  bg.addColorStop(1, '#08120E');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Resplandor superior con el color del juego
  const glow1 = ctx.createRadialGradient(W * 0.16, 120, 20, W * 0.16, 120, 620);
  glow1.addColorStop(0, (g.color || '#227554') + '88');
  glow1.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow1;
  ctx.fillRect(0, 0, W, H);

  const glow2 = ctx.createRadialGradient(W * 0.9, H * 0.85, 20, W * 0.9, H * 0.85, 520);
  glow2.addColorStop(0, 'rgba(212, 138, 23, 0.22)');
  glow2.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow2;
  ctx.fillRect(0, 0, W, H);

  // Marco interior editorial
  canvasRoundRect(ctx, 36, 36, W - 72, H - 72, 44);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Franja de cabecera con degradado, brillo especular y marca de agua SVG del juego
  ctx.save();
  canvasRoundRect(ctx, 64, 68, W - 128, 250, 36);
  const hdrGrad = ctx.createLinearGradient(64, 68, W - 64, 318);
  hdrGrad.addColorStop(0, g.color || '#227554');
  hdrGrad.addColorStop(1, g.color2 || '#12241E');
  ctx.fillStyle = hdrGrad;
  ctx.fill();
  ctx.clip();

  // Luz especular superior derecha + velo de contraste editorial (como .cover-sheen)
  const sheen = ctx.createRadialGradient(W - 140, 96, 10, W - 140, 96, 360);
  sheen.addColorStop(0, 'rgba(255,255,255,0.22)');
  sheen.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = sheen;
  ctx.fillRect(64, 68, W - 128, 250);

  const veil = ctx.createLinearGradient(64, 68, 64, 318);
  veil.addColorStop(0, 'rgba(0,0,0,0.03)');
  veil.addColorStop(0.55, 'rgba(0,0,0,0.12)');
  veil.addColorStop(1, 'rgba(0,0,0,0.34)');
  ctx.fillStyle = veil;
  ctx.fillRect(64, 68, W - 128, 250);

  // Marca de agua del icono propio del juego rotada -10°
  if (iconImg) {
    ctx.save();
    ctx.globalAlpha = 0.14;
    ctx.translate(W - 164, 246);
    ctx.rotate(-10 * Math.PI / 180);
    ctx.drawImage(iconImg, -124, -124, 248, 248);
    ctx.restore();
  }
  ctx.restore();

  // Filo sutil sobre la cabecera
  canvasRoundRect(ctx, 64, 68, W - 128, 250, 36);
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.lineWidth = 1.6;
  ctx.stroke();

  // Etiqueta superior + Fecha/Duración
  ctx.font = '800 22px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.80)';
  ctx.fillText('RESULTADO DE PARTIDA', 106, 120);

  const metaRight = `${formatDisplayDate(match.date, match.createdAtMs)}${match.duration ? `  ·  ${match.duration} min` : ''}`;
  ctx.font = '700 24px Inter, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.fillText(metaRight, W - 106, 120);
  ctx.textAlign = 'left';

  // Badge del icono del juego + Título y subtítulo
  let titleX = 106;
  let titleMaxW = W - 212;
  if (iconImg) {
    canvasRoundRect(ctx, 106, 152, 114, 114, 28);
    ctx.fillStyle = 'rgba(255,255,255,0.17)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.drawImage(iconImg, 131, 177, 64, 64);
    titleX = 248;
    titleMaxW = W - 360;
  }

  ctx.font = '800 52px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(canvasTruncateText(ctx, match.gameName, titleMaxW), titleX, 206);

  ctx.font = '600 25px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.86)';
  const subLine = match.extraLabel || g.tagline || 'Diario de Ludoteca';
  ctx.fillText(canvasTruncateText(ctx, subLine, titleMaxW), titleX, 256);

  // Banner del ganador
  let curY = 352;
  canvasRoundRect(ctx, 64, curY, W - 128, 128, 30);
  const winBg = ctx.createLinearGradient(64, curY, W - 64, curY + 128);
  winBg.addColorStop(0, 'rgba(245, 158, 11, 0.24)');
  winBg.addColorStop(1, 'rgba(245, 158, 11, 0.08)');
  ctx.fillStyle = winBg;
  ctx.fill();
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = '800 20px Inter, sans-serif';
  ctx.fillStyle = '#FCD34D';
  ctx.fillText(getMatchScoringType(match) === 'coop' ? 'RESULTADO DEL EQUIPO' : 'CAMPEÓN EN MESA', 104, curY + 44);

  ctx.font = '800 40px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(canvasTruncateText(ctx, match.winnerLabel || '—', W - 380), 104, curY + 96);

  if (match.topScore !== null && match.topScore !== undefined) {
    ctx.textAlign = 'right';
    ctx.font = '800 46px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FBBF24';
    ctx.fillText(`${match.topScore} pts`, W - 104, curY + 86);
    ctx.textAlign = 'left';
  }

  curY += 164;

  // Lista de jugadores
  players.forEach((p) => {
    const prof = getPlayerProfile(p.name);
    canvasRoundRect(ctx, 64, curY, W - 128, 82, 22);
    ctx.fillStyle = p.winner ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.055)';
    ctx.fill();
    ctx.strokeStyle = p.winner ? 'rgba(251,191,36,0.45)' : 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1.6;
    ctx.stroke();

    // Posición
    ctx.font = '800 26px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = p.winner ? '#FBBF24' : 'rgba(255,255,255,0.55)';
    ctx.fillText(p.winner ? '★' : `#${p.rank || ''}`, 96, curY + 50);

    // Avatar fijo
    ctx.beginPath();
    ctx.arc(166, curY + 41, 24, 0, Math.PI * 2);
    ctx.fillStyle = prof.color;
    ctx.fill();
    ctx.font = '800 20px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(prof.initials, 166, curY + 48);
    ctx.textAlign = 'left';

    // Nombre + tag
    ctx.font = '700 30px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    const label = p.tag ? `${p.name}  ·  ${p.tag}` : p.name;
    ctx.fillText(canvasTruncateText(ctx, label, W - 440), 210, curY + 51);

    // Puntuación
    if (p.score !== null && p.score !== undefined) {
      ctx.textAlign = 'right';
      ctx.font = '800 34px "Plus Jakarta Sans", Inter, sans-serif';
      ctx.fillStyle = p.winner ? '#6EE7B7' : 'rgba(255,255,255,0.88)';
      ctx.fillText(`${p.score} pts`, W - 104, curY + 52);
      ctx.textAlign = 'left';
    }
    curY += 98;
  });

  // Nota opcional
  if (hasNote) {
    curY += 12;
    canvasRoundRect(ctx, 64, curY, W - 128, 92, 22);
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.fill();
    ctx.fillStyle = '#34D399';
    ctx.fillRect(64, curY + 18, 6, 56);
    ctx.font = 'italic 500 24px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.78)';
    ctx.fillText(canvasTruncateText(ctx, `"${match.notes.trim()}"`, W - 180), 96, curY + 55);
    curY += 116;
  }

  // Pie de marca
  const footY = H - 72;
  canvasDrawBrandHex(ctx, 94, footY - 8, 22);
  ctx.font = '800 24px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.fillText('Ludoteca', 130, footY);
  ctx.textAlign = 'right';
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.fillText('Diario de Partidas', W - 76, footY);
  ctx.textAlign = 'left';

  return canvas;
}

function buildRecapCardCanvas({ title, subtitle, matches, playerCtx = null }) {
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Fondo nocturno esmeralda-oro de lujo
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#091612');
  bg.addColorStop(0.5, '#122921');
  bg.addColorStop(1, '#1F1A10');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const glowA = ctx.createRadialGradient(140, 140, 20, 140, 140, 620);
  glowA.addColorStop(0, 'rgba(34, 117, 84, 0.42)');
  glowA.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowA;
  ctx.fillRect(0, 0, W, H);

  const glowB = ctx.createRadialGradient(W - 120, H - 220, 20, W - 120, H - 220, 580);
  glowB.addColorStop(0, 'rgba(212, 138, 23, 0.30)');
  glowB.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowB;
  ctx.fillRect(0, 0, W, H);

  canvasRoundRect(ctx, 36, 36, W - 72, H - 72, 44);
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Cabecera
  canvasDrawBrandHex(ctx, 102, 112, 28);
  ctx.font = '800 24px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = '#FCD34D';
  ctx.fillText('LUDOTECA · RESUMEN', 148, 120);

  ctx.font = '800 62px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(canvasTruncateText(ctx, title, W - 140), 74, 214);

  ctx.font = '600 26px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.68)';
  ctx.fillText(canvasTruncateText(ctx, subtitle, W - 140), 74, 258);

  // Métricas
  const totalPlays = matches.length;
  const totalMins = matches.reduce((s, m) => s + (Number(m.duration) || 0), 0);
  const totalHours = (totalMins / 60).toFixed(1);
  const uniqueGames = new Set(matches.map((m) => m.gameId)).size;
  const hData = computeHIndex(matches);

  const kpis = [
    { label: 'PARTIDAS', val: String(totalPlays), accent: '#34D399' },
    { label: 'HORAS EN MESA', val: `${totalHours}h`, accent: '#60A5FA' },
    { label: 'JUEGOS', val: String(uniqueGames), accent: '#FBBF24' },
    { label: 'ÍNDICE H', val: `H = ${hData.h}`, accent: '#C084FC' },
  ];

  const cardW = (W - 148 - 36) / 4;
  kpis.forEach((k, i) => {
    const x = 74 + i * (cardW + 12);
    const y = 304;
    canvasRoundRect(ctx, x, y, cardW, 146, 26);
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.11)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.font = '800 18px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.62)';
    ctx.fillText(k.label, x + 22, y + 44);

    ctx.font = '800 46px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = k.accent;
    ctx.fillText(k.val, x + 22, y + 112);
  });

  // Top 5 juegos más jugados
  const gCounts = {};
  matches.forEach((m) => { gCounts[m.gameId] = (gCounts[m.gameId] || 0) + 1; });
  const topGames = Object.entries(gCounts)
    .map(([gid, c]) => ({ game: getGameById(gid), count: c }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const maxGamePlays = Math.max(1, ...topGames.map((x) => x.count));

  let curY = 498;
  ctx.font = '800 24px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.88)';
  ctx.fillText('TOP JUEGOS EN MESA', 74, curY);
  curY += 24;

  canvasRoundRect(ctx, 74, curY, W - 148, 392, 30);
  ctx.fillStyle = 'rgba(255,255,255,0.055)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  topGames.forEach((item, idx) => {
    const ry = curY + 46 + idx * 70;
    ctx.font = '800 22px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.fillText(`#${idx + 1}`, 106, ry);

    ctx.font = '700 26px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(canvasTruncateText(ctx, item.game.name, 490), 158, ry);

    ctx.textAlign = 'right';
    ctx.font = '800 24px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText(`${item.count} ${item.count === 1 ? 'partida' : 'partidas'}`, W - 108, ry);
    ctx.textAlign = 'left';

    // Barra
    const barX = 158, barY = ry + 14, barW = W - 266;
    canvasRoundRect(ctx, barX, barY, barW, 12, 6);
    ctx.fillStyle = 'rgba(255,255,255,0.10)';
    ctx.fill();
    const fillW = Math.max(24, Math.round((item.count / maxGamePlays) * barW));
    canvasRoundRect(ctx, barX, barY, fillW, 12, 6);
    ctx.fillStyle = item.game.color || '#227554';
    ctx.fill();
  });

  // Podio de jugadores (usa Rating 0.0-10.0 en partidas competitivas; si solo hay coop, usa coop)
  const pMap = {};
  const hasCompInRecap = matches.some((m) => getMatchScoringType(m) !== 'coop');
  const recapRatings = hasCompInRecap ? computeRatingSystem(matches, { includeTimeline: false, includeByMatch: false, maxHistory: 0 }) : null;
  matches.forEach((m) => {
    const isCoop = getMatchScoringType(m) === 'coop';
    if (hasCompInRecap && isCoop) return;
    (m.players || []).forEach((p) => {
      const n = (p.name || '').trim();
      if (!n) return;
      if (playerCtx?.allowedKeys && !playerCtx.allowedKeys.has(normName(n))) return;
      if (!pMap[n]) pMap[n] = { name: n, plays: 0, wins: 0 };
      pMap[n].plays++;
      if (p.winner) pMap[n].wins++;
    });
  });
  const topPlayers = Object.values(pMap)
    .map((pl) => ({ ...pl, ratingInfo: recapRatings?.byKey?.[normName(pl.name)] || null }))
    .sort((a, b) => {
      if (hasCompInRecap) {
        const aCal = a.ratingInfo && !a.ratingInfo.isCalibrating ? 2 : (a.ratingInfo ? 1 : 0);
        const bCal = b.ratingInfo && !b.ratingInfo.isCalibrating ? 2 : (b.ratingInfo ? 1 : 0);
        if (aCal !== bCal) return bCal - aCal;
        if (a.ratingInfo && b.ratingInfo && a.ratingInfo.points !== b.ratingInfo.points) {
          return b.ratingInfo.points - a.ratingInfo.points;
        }
      }
      return (b.wins - a.wins) || (b.plays - a.plays);
    })
    .slice(0, 3);

  curY += 446;
  ctx.font = '800 24px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.88)';
  ctx.fillText(hasCompInRecap ? 'PODIO DE JUGADORES · NOTA 0–10' : 'PODIO DE JUGADORES', 74, curY);
  curY += 24;

  const pCardW = (W - 148 - 28) / 3;
  topPlayers.forEach((pl, idx) => {
    const px = 74 + idx * (pCardW + 14);
    const prof = getPlayerProfile(pl.name);
    const rate = pl.plays > 0 ? Math.round((pl.wins / pl.plays) * 100) : 0;

    canvasRoundRect(ctx, px, curY, pCardW, 204, 28);
    ctx.fillStyle = idx === 0 ? 'rgba(245, 158, 11, 0.16)' : 'rgba(255,255,255,0.06)';
    ctx.fill();
    ctx.strokeStyle = idx === 0 ? 'rgba(251, 191, 36, 0.45)' : 'rgba(255,255,255,0.10)';
    ctx.lineWidth = 1.6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(px + 54, curY + 56, 26, 0, Math.PI * 2);
    ctx.fillStyle = prof.color;
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.font = '800 22px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(prof.initials, px + 54, curY + 64);
    ctx.textAlign = 'left';

    ctx.font = '800 22px Inter, sans-serif';
    ctx.fillStyle = idx === 0 ? '#FBBF24' : 'rgba(255,255,255,0.55)';
    ctx.fillText(`#${idx + 1}`, px + 92, curY + 64);

    if (pl.ratingInfo) {
      canvasRoundRect(ctx, px + pCardW - 92, curY + 34, 72, 42, 14);
      ctx.fillStyle = idx === 0 ? 'rgba(251, 191, 36, 0.24)' : 'rgba(255, 255, 255, 0.10)';
      ctx.fill();
      ctx.textAlign = 'center';
      ctx.font = '800 24px "Plus Jakarta Sans", Inter, sans-serif';
      ctx.fillStyle = idx === 0 ? '#FDE68A' : '#6EE7B7';
      ctx.fillText(pl.ratingInfo.note, px + pCardW - 56, curY + 63);
      ctx.textAlign = 'left';
    }

    ctx.font = '800 28px "Plus Jakarta Sans", Inter, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(canvasTruncateText(ctx, pl.name, pCardW - 44), px + 24, curY + 122);

    ctx.font = '700 22px Inter, sans-serif';
    ctx.fillStyle = '#6EE7B7';
    ctx.fillText(`${pl.wins}V / ${pl.plays}P · ${rate}%`, px + 24, curY + 166);
  });

  // Pie de marca
  const footY = H - 72;
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillText(`Generado el ${formatDisplayDate(todayISO())}`, 74, footY);
  ctx.textAlign = 'right';
  ctx.font = '800 22px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.78)';
  ctx.fillText('Ludoteca · Diario de Partidas', W - 74, footY);
  ctx.textAlign = 'left';

  return canvas;
}

async function shareOrDownloadCanvasPng(canvas, filename, shareTitle, forceDownload = false) {
  return new Promise((resolve) => {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        showToast('No se pudo generar la imagen PNG', 'danger');
        resolve(false);
        return;
      }
      const file = new File([blob], filename, { type: 'image/png' });
      if (!forceDownload && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ title: shareTitle, files: [file] });
          resolve(true);
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') { resolve(false); return; }
        }
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      showToast('Tarjeta PNG descargada', 'success');
      resolve(true);
    }, 'image/png');
  });
}

async function openShareMatchPngModal(matchId) {
  const m = matchHistory.find((x) => x.id === matchId);
  if (!m) return;
  const g = getGameById(m.gameId);
  const iconImg = await loadGameIconImage(g.icon, '#FFFFFF', 280);
  const canvas = buildMatchCardCanvas(m, iconImg);
  const previewUrl = canvas.toDataURL('image/png');
  const safeName = (m.gameName || 'partida').toLowerCase().replace(/[^a-z0-9]+/g, '_');
  const filename = `ludoteca_${safeName}_${m.date || todayISO()}.png`;

  const bodyHtml = `
    <div class="space-y-3">
      <div class="rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 shadow-elevated bg-[#0A1410]">
        <img src="${previewUrl}" alt="Tarjeta de partida" class="w-full h-auto block" />
      </div>
      <p class="text-[11px] text-center text-inkMuted dark:text-white/55">Lista en alta resolución (1080px) para compartir por WhatsApp o redes.</p>
    </div>
  `;

  openModal({
    title: 'Tarjeta de Partida (PNG)',
    subtitle: `${m.gameName} · ${formatDisplayDate(m.date, m.createdAtMs)}`,
    bodyHtml,
    actions: [
      {
        label: 'Descargar PNG',
        keepOpen: true,
        onClick: () => shareOrDownloadCanvasPng(canvas, filename, m.gameName, true),
      },
      {
        label: 'Compartir',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        keepOpen: true,
        onClick: () => shareOrDownloadCanvasPng(canvas, filename, `Partida de ${m.gameName}`, false),
      },
    ],
  });
}

function openRecapPngModal() {
  const pCtx = resolveStatsPlayerContext();
  const baseMatches = pCtx.scopedMatches;
  if (baseMatches.length === 0) {
    showToast('Registra partidas primero para generar tu resumen', 'neutral');
    return;
  }

  const now = new Date();
  const curYear = String(now.getFullYear());
  const curMonthKey = `${curYear}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const curMonthLabel = now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  const curMonthCap = curMonthLabel.charAt(0).toUpperCase() + curMonthLabel.slice(1);

  let period = 'year'; // 'month' | 'year' | 'all'
  const hasThisMonth = baseMatches.some((m) => String(m.date || '').startsWith(curMonthKey));
  const hasThisYear = baseMatches.some((m) => String(m.date || '').startsWith(curYear));
  if (!hasThisYear) period = 'all';

  const renderRecapModal = () => {
    let filtered = baseMatches;
    let title = 'Resumen Histórico';
    let subtitle = pCtx.mode === 'vs'
      ? `${pCtx.playerA} vs ${pCtx.playerB}`
      : pCtx.mode === 'single'
        ? `Estadísticas de ${pCtx.playerA}`
        : 'Toda tu trayectoria en mesa';

    if (period === 'month') {
      filtered = baseMatches.filter((m) => String(m.date || '').startsWith(curMonthKey));
      title = curMonthCap;
    } else if (period === 'year') {
      filtered = baseMatches.filter((m) => String(m.date || '').startsWith(curYear));
      title = `Resumen ${curYear}`;
    }

    const canvas = filtered.length > 0
      ? buildRecapCardCanvas({ title, subtitle, matches: filtered, playerCtx: pCtx })
      : null;
    const previewUrl = canvas ? canvas.toDataURL('image/png') : '';
    const filename = `ludoteca_resumen_${period === 'month' ? curMonthKey : period === 'year' ? curYear : 'historico'}.png`;

    const bodyHtml = `
      <div class="space-y-3.5">
        <div class="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12">
          <button type="button" data-rc="period" data-val="month" ${!hasThisMonth ? 'disabled' : ''}
            class="btn-tap py-2 rounded-xl text-xs font-extrabold disabled:opacity-40 ${period === 'month' ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs' : 'text-inkMuted dark:text-white/65'}">
            Este mes
          </button>
          <button type="button" data-rc="period" data-val="year" ${!hasThisYear ? 'disabled' : ''}
            class="btn-tap py-2 rounded-xl text-xs font-extrabold disabled:opacity-40 ${period === 'year' ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs' : 'text-inkMuted dark:text-white/65'}">
            Año ${curYear}
          </button>
          <button type="button" data-rc="period" data-val="all"
            class="btn-tap py-2 rounded-xl text-xs font-extrabold ${period === 'all' ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs' : 'text-inkMuted dark:text-white/65'}">
            Histórico
          </button>
        </div>

        ${previewUrl ? `
          <div class="rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 shadow-elevated bg-[#0A1410]">
            <img src="${previewUrl}" alt="Resumen PNG" class="w-full h-auto block" />
          </div>
        ` : `
          <div class="p-8 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-dashed border-[#DFD8CB] dark:border-white/15 text-center text-xs text-inkMuted">
            No hay partidas en este periodo todavía.
          </div>
        `}
      </div>
    `;

    openModal({
      title: 'Resumen Compartible (PNG)',
      subtitle: 'Exporta tu mes, año o histórico en alta resolución',
      bodyHtml,
      actions: canvas ? [
        {
          label: 'Descargar PNG',
          keepOpen: true,
          onClick: () => shareOrDownloadCanvasPng(canvas, filename, title, true),
        },
        {
          label: 'Compartir',
          className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
          keepOpen: true,
          onClick: () => shareOrDownloadCanvasPng(canvas, filename, `Ludoteca · ${title}`, false),
        },
      ] : [{ label: 'Cerrar' }],
    });

    document.getElementById('modal-body').onclick = (e) => {
      const el = e.target.closest('[data-rc="period"]');
      if (!el) return;
      period = el.dataset.val;
      renderRecapModal();
    };
  };

  renderRecapModal();
}

// =========================================================================
// 12. TAB 3: ESTADÍSTICAS, GRÁFICAS INTERACTIVAS, DUELO (VS) E INSIGNIAS
// =========================================================================
const PLAYER_CHART_PALETTE = [
  '#2B7A58', '#D9911E', '#2563EB', '#D04E36', '#7C3AED',
  '#0D9488', '#E11D48', '#0284C7', '#CA8A04', '#475569'
];

function normName(n) {
  return String(n || '').trim().toLowerCase();
}

function getAllPlayersWithCounts() {
  const map = new Map();
  matchHistory.forEach((m) => {
    (m.players || []).forEach((p) => {
      const clean = String(p.name || '').trim();
      const key = clean.toLowerCase();
      if (!key) return;
      if (!map.has(key)) map.set(key, { key, name: clean, plays: 0, wins: 0 });
      const entry = map.get(key);
      entry.plays += 1;
      if (p.winner) entry.wins += 1;
    });
  });
  return Array.from(map.values()).sort((a, b) => (b.plays - a.plays) || (b.wins - a.wins) || a.name.localeCompare(b.name));
}

function evaluateHeadToHeadMatch(match, keyA, keyB) {
  const g = getGameById(match.gameId);
  const players = match.players || [];
  const pA = players.find((p) => normName(p.name) === keyA);
  const pB = players.find((p) => normName(p.name) === keyB);
  if (!pA || !pB) return null;
  if (getMatchScoringType(match) === 'coop') {
    return { kind: 'coop', won: Boolean(match.meta?.coopWon), pA, pB };
  }

  // 1) Si ambos tienen puntuación numérica, desempata con exactitud respetando lowestWins
  const hasScoreA = pA.score !== null && pA.score !== undefined && !isNaN(pA.score);
  const hasScoreB = pB.score !== null && pB.score !== undefined && !isNaN(pB.score);
  if (hasScoreA && hasScoreB && Number(pA.score) !== Number(pB.score)) {
    const aWins = g.lowestWins ? Number(pA.score) < Number(pB.score) : Number(pA.score) > Number(pB.score);
    return { kind: 'duel', outcome: aWins ? 'A' : 'B', pA, pB };
  }

  // 2) Compara posición / rank si es distinto
  const rA = Number(pA.rank) || 99;
  const rB = Number(pB.rank) || 99;
  if (rA !== rB) {
    return { kind: 'duel', outcome: rA < rB ? 'A' : 'B', pA, pB };
  }

  // 3) Flag de ganador
  if (Boolean(pA.winner) !== Boolean(pB.winner)) {
    return { kind: 'duel', outcome: pA.winner ? 'A' : 'B', pA, pB };
  }

  // En juegos de solo ganador con 3+ jugadores, si ganó un tercero ninguno venció al otro (no es empate entre A y B)
  if (!pA.winner && !pB.winner && getMatchScoringType(match) === 'winner_only') {
    return { kind: 'duel', outcome: 'none', pA, pB };
  }

  return { kind: 'duel', outcome: 'tie', pA, pB };
}

function resolveStatsPlayerContext() {
  const allPlayers = getAllPlayersWithCounts();
  const validKeys = new Set(allPlayers.map((p) => p.key));

  if (uiState.statsPlayerMode === 'single') {
    if (!validKeys.has(normName(uiState.statsPlayerA))) {
      if (allPlayers.length > 0) uiState.statsPlayerA = allPlayers[0].name;
      else uiState.statsPlayerMode = 'all';
    }
  } else if (uiState.statsPlayerMode === 'vs') {
    if (allPlayers.length < 2) {
      uiState.statsPlayerMode = 'all';
    } else {
      if (!validKeys.has(normName(uiState.statsPlayerA))) uiState.statsPlayerA = allPlayers[0].name;
      if (!validKeys.has(normName(uiState.statsPlayerB)) || normName(uiState.statsPlayerB) === normName(uiState.statsPlayerA)) {
        const alt = allPlayers.find((p) => p.key !== normName(uiState.statsPlayerA));
        uiState.statsPlayerB = alt ? alt.name : '';
      }
    }
  }

  const mode = uiState.statsPlayerMode;
  const vsScope = 'together';
  const playerA = uiState.statsPlayerA;
  const playerB = uiState.statsPlayerB;
  const keyA = normName(playerA);
  const keyB = normName(playerB);

  let allowedKeys = null;
  let scopedMatches = matchHistory;

  if (mode === 'single' && keyA) {
    allowedKeys = new Set([keyA]);
    scopedMatches = matchHistory.filter((m) => (m.players || []).some((p) => normName(p.name) === keyA));
  } else if (mode === 'vs' && keyA && keyB) {
    allowedKeys = new Set([keyA, keyB]);
    scopedMatches = matchHistory.filter((m) => {
      const keys = new Set((m.players || []).map((p) => normName(p.name)));
      return keys.has(keyA) && keys.has(keyB);
    });
  }

  return { allPlayers, mode, vsScope, playerA, playerB, keyA, keyB, allowedKeys, scopedMatches };
}

function openStatsPlayerFilterModal() {
  const allPlayers = getAllPlayersWithCounts();
  if (allPlayers.length === 0) {
    showToast('Registra al menos una partida para filtrar jugadores', 'neutral');
    return;
  }

  let tempMode = uiState.statsPlayerMode || 'all';
  let tempA = uiState.statsPlayerA || allPlayers[0]?.name || '';
  let tempB = uiState.statsPlayerB || allPlayers[1]?.name || '';
  let activeVsSlot = null; // null | 'A' | 'B'

  if (tempMode === 'vs' && allPlayers.length < 2) tempMode = 'single';
  if (normName(tempA) === normName(tempB) && allPlayers.length >= 2) {
    const alt = allPlayers.find((p) => p.key !== normName(tempA));
    if (alt) tempB = alt.name;
  }

  const renderModalContent = () => {
    const canCompare = allPlayers.length >= 2;
    const statsA = allPlayers.find((p) => p.key === normName(tempA));
    const statsB = allPlayers.find((p) => p.key === normName(tempB));
    let pickerBody = '';

    if (tempMode === 'all') {
      pickerBody = `
        <div class="p-4 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center space-y-1.5">
          <div class="text-xs font-extrabold text-ink dark:text-white">Vista General de toda la ludoteca</div>
          <p class="text-[11px] text-inkMuted dark:text-white/60 leading-relaxed">
            Muestra gráficas, estadísticas globales e insignias entre los <strong>${allPlayers.length}</strong> ${allPlayers.length === 1 ? 'jugador registrado' : 'jugadores registrados'}.
          </p>
        </div>
      `;
    } else if (tempMode === 'single') {
      pickerBody = `
        <div class="space-y-2.5">
          <div class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Elige un jugador</div>
          <div class="grid grid-cols-2 gap-2">
            ${allPlayers.map((p) => {
              const sel = normName(tempA) === p.key;
              return `
                <button type="button" data-pf="pick-a" data-name="${esc(p.name)}"
                  class="btn-tap p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                    sel
                      ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-sm'
                      : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#E2DACE] dark:border-white/12'
                  }">
                  ${renderPlayerAvatarHtml(p.name, 'w-8 h-8 text-[11px] ring-1 ring-white/25')}
                  <div class="min-w-0">
                    <div class="text-xs font-extrabold truncate">${esc(p.name)}</div>
                    <div class="text-[10.5px] mt-0.5 tabular-nums ${sel ? 'text-white/80' : 'text-inkMuted dark:text-white/55'}">${p.wins}V / ${p.plays}P</div>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } else {
      pickerBody = `
        <div class="space-y-3.5">
          <!-- Selectores táctiles propios Jugador 1 vs Jugador 2 -->
          <div class="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
            <div class="min-w-0">
              <div class="text-[10.5px] font-extrabold uppercase tracking-wider text-emeraldBrand dark:text-emerald-400 mb-1.5">Jugador 1</div>
              <button type="button" data-pf="open-slot" data-slot="A"
                class="picker-slot btn-tap ${activeVsSlot === 'A' ? 'is-open' : ''}">
                <span class="flex items-center gap-2 min-w-0">
                  ${renderPlayerAvatarHtml(tempA, 'w-7 h-7 text-[10px] ring-1 ring-white/25')}
                  <span class="min-w-0">
                    <span class="block text-xs font-extrabold text-ink dark:text-white truncate">${esc(tempA)}</span>
                    <span class="block text-[10px] text-inkMuted dark:text-white/55 tabular-nums">${statsA ? `${statsA.plays}P` : ''}</span>
                  </span>
                </span>
                <svg class="w-3.5 h-3.5 text-inkMuted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${activeVsSlot === 'A' ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'}"/></svg>
              </button>
            </div>

            <button type="button" data-pf="swap" title="Intercambiar" aria-label="Intercambiar jugadores"
              class="btn-tap h-11 w-9 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 flex items-center justify-center text-inkMuted dark:text-white/75 font-bold text-xs">
              ⇄
            </button>

            <div class="min-w-0">
              <div class="text-[10.5px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">Jugador 2</div>
              <button type="button" data-pf="open-slot" data-slot="B"
                class="picker-slot btn-tap ${activeVsSlot === 'B' ? 'is-open-amber' : ''}">
                <span class="flex items-center gap-2 min-w-0">
                  ${renderPlayerAvatarHtml(tempB, 'w-7 h-7 text-[10px] ring-1 ring-white/25')}
                  <span class="min-w-0">
                    <span class="block text-xs font-extrabold text-ink dark:text-white truncate">${esc(tempB)}</span>
                    <span class="block text-[10px] text-inkMuted dark:text-white/55 tabular-nums">${statsB ? `${statsB.plays}P` : ''}</span>
                  </span>
                </span>
                <svg class="w-3.5 h-3.5 text-inkMuted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${activeVsSlot === 'B' ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'}"/></svg>
              </button>
            </div>
          </div>

          ${activeVsSlot ? `
            <div class="p-3 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2 anim-in">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10.5px] font-extrabold uppercase tracking-wider ${activeVsSlot === 'A' ? 'text-emeraldBrand dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}">
                  Elige ${activeVsSlot === 'A' ? 'Jugador 1' : 'Jugador 2'}
                </span>
                <button type="button" data-pf="close-slot" class="btn-tap text-[11px] font-bold text-inkMuted">Listo</button>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                ${allPlayers.map((p) => {
                  const isCurrent = normName(activeVsSlot === 'A' ? tempA : tempB) === p.key;
                  const isOther = normName(activeVsSlot === 'A' ? tempB : tempA) === p.key;
                  return `
                    <button type="button" data-pf="assign-slot" data-name="${esc(p.name)}"
                      class="btn-tap p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        isCurrent
                          ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-xs'
                          : 'bg-canvas/70 dark:bg-surfaceDark text-ink dark:text-white border-black/[0.06] dark:border-white/10'
                      }">
                      ${renderPlayerAvatarHtml(p.name, 'w-6 h-6 text-[9.5px] ring-1 ring-white/25')}
                      <span class="min-w-0 flex-1">
                        <span class="block text-xs font-extrabold truncate">${esc(p.name)}</span>
                        <span class="block text-[9.5px] ${isCurrent ? 'text-white/75' : 'text-inkMuted dark:text-white/50'} tabular-nums">${isOther ? 'Intercambiar ⇄' : `${p.plays}P`}</span>
                      </span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <div class="px-3.5 py-2.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-[11px] text-inkMuted dark:text-white/60 leading-relaxed">
            Modo <strong class="text-ink dark:text-white">Cara a Cara</strong>: cuenta únicamente las partidas en las que ambos coincidisteis en la misma mesa.
          </div>
        </div>
      `;
    }

    const bodyHtml = `
      <div class="space-y-4">
        <div class="seg-control seg-grid grid-cols-3 bg-white dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12" data-seg-id="pf-mode">
          <span class="seg-thumb ${tempMode === 'vs' ? 'seg-thumb-vs' : 'seg-thumb-pine'}"></span>
          <button type="button" data-pf="mode" data-val="all" data-seg-active="${tempMode === 'all' ? 'true' : 'false'}"
            class="seg-btn btn-tap py-2 rounded-xl text-xs font-extrabold ${tempMode === 'all' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Todos
          </button>
          <button type="button" data-pf="mode" data-val="single" data-seg-active="${tempMode === 'single' ? 'true' : 'false'}"
            class="seg-btn btn-tap py-2 rounded-xl text-xs font-extrabold ${tempMode === 'single' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            1 Jugador
          </button>
          <button type="button" data-pf="mode" data-val="vs" ${!canCompare ? 'disabled' : ''} data-seg-active="${tempMode === 'vs' ? 'true' : 'false'}"
            class="seg-btn btn-tap py-2 rounded-xl text-xs font-extrabold disabled:opacity-40 ${tempMode === 'vs' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Comparar VS
          </button>
        </div>
        ${pickerBody}
      </div>
    `;

    openModal({
      title: 'Filtrar y Comparar Jugadores',
      subtitle: 'Aplica a Gráficas, Estadísticas e Insignias',
      bodyHtml,
      actions: [
        { label: 'Cancelar' },
        {
          label: 'Aplicar',
          className: 'btn-tap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
          keepOpen: true,
          onClick: () => {
            if (tempMode === 'vs' && normName(tempA) === normName(tempB)) {
              showToast('Elige dos personas distintas para comparar', 'danger');
              return;
            }
            uiState.statsPlayerMode = tempMode;
            uiState.statsPlayerA = tempA;
            uiState.statsPlayerB = tempB;
            closeModal();
            renderStatsTab();
          },
        },
      ],
    });

    const bodyEl = document.getElementById('modal-body');
    bodyEl.onclick = (e) => {
      const el = e.target.closest('[data-pf]');
      if (!el) return;
      const act = el.dataset.pf;
      if (act === 'mode') {
        tempMode = el.dataset.val;
        activeVsSlot = null;
        if (tempMode === 'vs' && normName(tempA) === normName(tempB) && allPlayers.length >= 2) {
          const alt = allPlayers.find((p) => p.key !== normName(tempA));
          if (alt) tempB = alt.name;
        }
        renderModalContent();
      } else if (act === 'pick-a') {
        tempA = el.dataset.name;
        renderModalContent();
      } else if (act === 'open-slot') {
        const s = el.dataset.slot;
        activeVsSlot = activeVsSlot === s ? null : s;
        renderModalContent();
      } else if (act === 'close-slot') {
        activeVsSlot = null;
        renderModalContent();
      } else if (act === 'assign-slot') {
        const picked = el.dataset.name;
        if (activeVsSlot === 'A') {
          if (normName(picked) === normName(tempB)) {
            tempB = tempA;
          }
          tempA = picked;
        } else if (activeVsSlot === 'B') {
          if (normName(picked) === normName(tempA)) {
            tempA = tempB;
          }
          tempB = picked;
        }
        activeVsSlot = null;
        renderModalContent();

      } else if (act === 'swap') {
        const tmp = tempA;
        tempA = tempB;
        tempB = tmp;
        renderModalContent();
      }
    };
  };

  renderModalContent();
}

function badgeMedalSvg(tier = 'gold', symbol = 'trophy', uid = '0') {
  const tiers = {
    gold: {
      c1: '#FEF08A', c2: '#F59E0B', c3: '#B45309',
      ring: '#FFFBEB', ribbon1: '#B91C1C', ribbon2: '#7F1D1D', icon: '#78350F',
    },
    platinum: {
      c1: '#F8FAFC', c2: '#CBD5E1', c3: '#64748B',
      ring: '#FFFFFF', ribbon1: '#1D4ED8', ribbon2: '#1E3A8A', icon: '#334155',
    },
    emerald: {
      c1: '#A7F3D0', c2: '#10B981', c3: '#065F46',
      ring: '#ECFDF5', ribbon1: '#142620', ribbon2: '#0B1813', icon: '#064E3B',
    },
    ruby: {
      c1: '#FECDD3', c2: '#E11D48', c3: '#881337',
      ring: '#FFF1F2', ribbon1: '#D97706', ribbon2: '#92400E', icon: '#FFF1F2',
    },
    sapphire: {
      c1: '#BFDBFE', c2: '#2563EB', c3: '#1E3A8A',
      ring: '#EFF6FF', ribbon1: '#0F172A', ribbon2: '#020617', icon: '#EFF6FF',
    },
    amethyst: {
      c1: '#E9D5FF', c2: '#7C3AED', c3: '#4C1D95',
      ring: '#F5F3FF', ribbon1: '#D97706', ribbon2: '#92400E', icon: '#F5F3FF',
    },
  };
  const t = tiers[tier] || tiers.gold;

  const glyphs = {
    crown: `<path d="M16 33.5 18 24.5 22.2 28 26 21.5 29.8 28 34 24.5 36 33.5H16Z" fill="${t.icon}"/><rect x="17" y="35" width="18" height="2.4" rx="1.2" fill="${t.icon}"/>`,
    trophy: `<path d="M19 22h14v5.5a7 7 0 0 1-14 0V22Z" fill="${t.icon}"/><path d="M19 23.5h-2.8a2.5 2.5 0 0 0 0 5H19M33 23.5h2.8a2.5 2.5 0 0 1 0 5H33" stroke="${t.icon}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M26 34.5v3.5M21.5 38h9" stroke="${t.icon}" stroke-width="2.3" stroke-linecap="round"/>`,
    star: `<polygon points="26,20.5 28.9,26.3 35.3,27.2 30.6,31.7 31.7,38 26,35 20.3,38 21.4,31.7 16.7,27.2 23.1,26.3" fill="${t.icon}"/>`,
    flame: `<path d="M26.5 20c1.2 3.2 5.2 5.2 5.2 10.2a6.2 6.2 0 1 1-12.4 0c0-2.6 1.2-4.8 2.8-6.4.2 1.6 1 2.6 2 2.9-.5-2.6.8-5.1 2.4-6.7Z" fill="${t.icon}"/>`,
    target: `<circle cx="26" cy="29.5" r="7.2" fill="none" stroke="${t.icon}" stroke-width="2.1"/><circle cx="26" cy="29.5" r="3.9" fill="none" stroke="${t.icon}" stroke-width="2"/><circle cx="26" cy="29.5" r="1.6" fill="${t.icon}"/>`,
    gem: `<polygon points="20.5,23 31.5,23 35,28 26,37.5 17,28" fill="${t.icon}"/>`,
    dice: `<rect x="19" y="22.5" width="14" height="14" rx="3" fill="${t.icon}"/><circle cx="23" cy="26.5" r="1.2" fill="${t.ring}"/><circle cx="29" cy="26.5" r="1.2" fill="${t.ring}"/><circle cx="26" cy="29.5" r="1.2" fill="${t.ring}"/><circle cx="23" cy="32.5" r="1.2" fill="${t.ring}"/><circle cx="29" cy="32.5" r="1.2" fill="${t.ring}"/>`,
    compass: `<circle cx="26" cy="29.5" r="7.5" fill="none" stroke="${t.icon}" stroke-width="2.1"/><polygon points="26,24 28.4,29.5 26,35 23.6,29.5" fill="${t.icon}"/>`,
    team: `<circle cx="22.5" cy="26.5" r="2.6" fill="${t.icon}"/><circle cx="29.5" cy="26.5" r="2.6" fill="${t.icon}"/><path d="M17.5 35.5c0-2.7 2.2-4.5 5-4.5s5 1.8 5 4.5M24.5 35.5c0-2.7 2.2-4.5 5-4.5s5 1.8 5 4.5" stroke="${t.icon}" stroke-width="2.2" stroke-linecap="round" fill="none"/>`,
  };

  return `
    <svg class="w-12 h-12 shrink-0 drop-shadow-sm" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mgrad_${uid}" x1="10" y1="12" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${t.c1}"/>
          <stop offset="52%" stop-color="${t.c2}"/>
          <stop offset="100%" stop-color="${t.c3}"/>
        </linearGradient>
      </defs>
      <polygon points="15,4 24,4 27,18 19,18" fill="${t.ribbon1}"/>
      <polygon points="37,4 28,4 25,18 33,18" fill="${t.ribbon2}"/>
      <circle cx="26" cy="30" r="18" fill="url(#mgrad_${uid})" stroke="${t.ring}" stroke-width="2"/>
      <circle cx="26" cy="30" r="14.2" fill="none" stroke="${t.ring}" stroke-opacity="0.55" stroke-width="1.2" stroke-dasharray="2.5 2"/>
      <path d="M14.5 23.5A13.5 13.5 0 0 1 33 17.8" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="2.2" stroke-linecap="round"/>
      ${glyphs[symbol] || glyphs.trophy}
    </svg>
  `;
}

function formatHolderNames(names) {
  if (!names || names.length === 0) return '—';
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} y ${names[1]}`;
  return `${names.slice(0, 2).join(', ')} +${names.length - 2}`;
}

function computeAllBadges(sourceMatches = matchHistory, playerCtx = null) {
  const globalBadges = [];
  const gameSections = [];
  const allowedKeys = playerCtx?.allowedKeys || null;
  const isDirectDuel = playerCtx?.mode === 'vs' && playerCtx?.vsScope === 'together';

  if (!sourceMatches || sourceMatches.length === 0) {
    return { globalBadges, gameSections, medalTable: [], totalBadgesCount: 0 };
  }

  const isAllowed = (name) => !allowedKeys || allowedKeys.has(normName(name));

  // Helper para determinar si p ganó la partida competitiva (o ganó el duelo directo A vs B en modo 'together')
  const didPlayerWinInContext = (m, p) => {
    if (getMatchScoringType(m) === 'coop') return false;
    if (isDirectDuel) {
      const h2h = evaluateHeadToHeadMatch(m, playerCtx.keyA, playerCtx.keyB);
      if (h2h && h2h.kind === 'duel') {
        const pk = normName(p.name);
        return (h2h.outcome === 'A' && pk === playerCtx.keyA) || (h2h.outcome === 'B' && pk === playerCtx.keyB);
      }
      return false;
    }
    return Boolean(p.winner);
  };

  // 1) Estadísticas globales por jugador
  const gPlayers = {};
  const chronologicalAll = [...sourceMatches].sort((a, b) => matchChronoKey(a).localeCompare(matchChronoKey(b)));

  let bestSingleScore = null;

  chronologicalAll.forEach((m) => {
    const isCoopMatch = getMatchScoringType(m) === 'coop';
    (m.players || []).forEach((p) => {
      const name = (p.name || '').trim();
      if (!name || !isAllowed(name)) return;
      if (!gPlayers[name]) {
        gPlayers[name] = {
          name,
          plays: 0,
          compPlays: 0,
          wins: 0,
          totalPoints: 0,
          scoredPlays: 0,
          gamesPlayed: new Set(),
          gamesWon: new Set(),
          curStreak: 0,
          maxStreak: 0,
        };
      }
      const st = gPlayers[name];
      st.plays += 1;
      st.gamesPlayed.add(m.gameId);

      if (!isCoopMatch) {
        st.compPlays += 1;
        const wonHere = didPlayerWinInContext(m, p);
        if (wonHere) {
          st.wins += 1;
          st.gamesWon.add(m.gameId);
          st.curStreak += 1;
          if (st.curStreak > st.maxStreak) st.maxStreak = st.curStreak;
        } else {
          st.curStreak = 0;
        }
      }

      const matchGameObj = getGameById(m.gameId);
      if (p.score !== null && p.score !== undefined && !isNaN(p.score) && !matchGameObj.lowestWins) {
        const sc = Number(p.score);
        st.totalPoints += sc;
        st.scoredPlays += 1;

        if (!bestSingleScore || sc > bestSingleScore.score) {
          bestSingleScore = {
            score: sc,
            holders: [name],
            detail: `${m.gameName} · ${formatDisplayDate(m.date, m.createdAtMs)}`,
          };
        } else if (sc === bestSingleScore.score && !bestSingleScore.holders.includes(name)) {
          bestSingleScore.holders.push(name);
        }
      }
    });
  });

  const playerStatsList = Object.values(gPlayers);

  const topHolders = (list, getter, minVal = 1) => {
    let best = -Infinity;
    list.forEach((x) => {
      const v = getter(x);
      if (v > best) best = v;
    });
    if (best < minVal) return null;
    return {
      value: best,
      holders: list.filter((x) => getter(x) === best).map((x) => x.name),
    };
  };

  // GLOBAL 1: Más victorias (o duelos ganados en Cara a Cara)
  const mostWins = topHolders(playerStatsList, (p) => p.wins, 1);
  if (mostWins) {
    globalBadges.push({
      id: 'g_most_wins',
      title: isDirectDuel ? 'Rey del Duelo' : 'Rey de la Mesa',
      subtitle: isDirectDuel ? 'Más enfrentamientos ganados' : 'Más partidas ganadas',
      tier: 'gold',
      symbol: 'crown',
      holders: mostWins.holders,
      metric: `${mostWins.value} ${mostWins.value === 1 ? 'victoria' : 'victorias'}`,
      detail: isDirectDuel ? 'Dominio directo entre ambos' : 'Líder histórico en este filtro',
    });
  }

  // GLOBAL 2: Puntuación más alta en una sola partida
  if (bestSingleScore) {
    globalBadges.push({
      id: 'g_high_score',
      title: 'Puntuación Legendaria',
      subtitle: 'Récord en una sola partida',
      tier: 'gold',
      symbol: 'trophy',
      holders: bestSingleScore.holders,
      metric: `${bestSingleScore.score} pts`,
      detail: bestSingleScore.detail,
    });
  }

  // GLOBAL 3: Más puntos acumulados en total
  const mostTotalPts = topHolders(playerStatsList.filter((p) => p.scoredPlays > 0), (p) => p.totalPoints, 1);
  if (mostTotalPts) {
    globalBadges.push({
      id: 'g_total_pts',
      title: 'Acumulador Supremo',
      subtitle: 'Más puntos totales conseguidos',
      tier: 'platinum',
      symbol: 'gem',
      holders: mostTotalPts.holders,
      metric: `${mostTotalPts.value.toLocaleString('es-ES')} pts`,
      detail: 'Suma de todas las partidas con puntos',
    });
  }

  // GLOBAL 4: Mejor porcentaje de victorias (solo partidas competitivas)
  const compPool = playerStatsList.filter((p) => p.compPlays > 0);
  const eligibleWinRate = compPool.filter((p) => p.compPlays >= 2);
  const winRatePool = eligibleWinRate.length > 0 ? eligibleWinRate : compPool;
  const bestWinRate = topHolders(winRatePool, (p) => Math.round((p.wins / p.compPlays) * 100), 1);
  if (bestWinRate) {
    globalBadges.push({
      id: 'g_win_rate',
      title: 'Estratega Implacable',
      subtitle: isDirectDuel ? 'Mayor % en el duelo' : 'Mayor porcentaje de victorias',
      tier: 'emerald',
      symbol: 'target',
      holders: bestWinRate.holders,
      metric: `${bestWinRate.value}% éxito`,
      detail: eligibleWinRate.length > 0 ? 'Con mínimo 2 partidas' : 'Mejor efectividad actual',
    });
  }

  // GLOBAL 5: Mayor racha de victorias seguidas
  const bestStreak = topHolders(playerStatsList, (p) => p.maxStreak, 2);
  if (bestStreak) {
    globalBadges.push({
      id: 'g_streak',
      title: 'Racha Imparable',
      subtitle: 'Victorias consecutivas',
      tier: 'ruby',
      symbol: 'flame',
      holders: bestStreak.holders,
      metric: `${bestStreak.value} seguidas`,
      detail: 'Racha récord cronológica',
    });
  }

  // GLOBAL 6: Más partidas jugadas (se omite en duelo 'together' porque ambos jugaron las mismas)
  if (!isDirectDuel) {
    const mostPlayed = topHolders(playerStatsList, (p) => p.plays, 1);
    if (mostPlayed) {
      globalBadges.push({
        id: 'g_most_plays',
        title: 'Alma de la Ludoteca',
        subtitle: 'Más partidas jugadas',
        tier: 'sapphire',
        symbol: 'dice',
        holders: mostPlayed.holders,
        metric: `${mostPlayed.value} ${mostPlayed.value === 1 ? 'partida' : 'partidas'}`,
        detail: 'Siempre listo para abrir caja',
      });
    }
  }

  // GLOBAL 7: Más juegos distintos ganados
  const mostVariety = topHolders(playerStatsList, (p) => p.gamesWon.size, 2);
  if (mostVariety) {
    globalBadges.push({
      id: 'g_variety',
      title: 'Conquistador Versátil',
      subtitle: 'Más juegos distintos ganados',
      tier: 'amethyst',
      symbol: 'compass',
      holders: mostVariety.holders,
      metric: `${mostVariety.value} juegos`,
      detail: 'Domina distintos tableros',
    });
  }

  // 2) Insignias POR JUEGO
  const byGameMap = {};
  sourceMatches.forEach((m) => {
    if (!byGameMap[m.gameId]) byGameMap[m.gameId] = [];
    byGameMap[m.gameId].push(m);
  });

  const sortedGameIds = Object.keys(byGameMap).sort((a, b) => byGameMap[b].length - byGameMap[a].length);

  sortedGameIds.forEach((gid) => {
    const g = getGameById(gid);
    const matches = byGameMap[gid];
    const badges = [];

    const coopMatches = matches.filter((m) => getMatchScoringType(m) === 'coop');
    const compMatches = matches.filter((m) => getMatchScoringType(m) !== 'coop');

    if (coopMatches.length > 0) {
      let maxLevel = 0;
      let coopWins = 0;
      let maxLevelHolders = [];
      const allCoopNames = new Set();
      coopMatches.forEach((m) => {
        const lvl = Number(m.meta?.level) || 0;
        const won = Boolean(m.meta?.coopWon);
        if (won) coopWins++;
        (m.players || []).forEach((p) => {
          const nm = (p.name || '').trim();
          if (nm && isAllowed(nm)) allCoopNames.add(nm);
        });
        if (lvl > maxLevel) {
          maxLevel = lvl;
          maxLevelHolders = (m.players || []).map((p) => (p.name || '').trim()).filter((n) => n && isAllowed(n));
        }
      });
      const hasLevels = g.extraType === 'themind' || maxLevel > 0;
      const coopRate = coopMatches.length > 0 ? Math.round((coopWins / coopMatches.length) * 100) : 0;
      const teamHolders = maxLevelHolders.length ? maxLevelHolders : (allCoopNames.size ? Array.from(allCoopNames) : ['Equipo']);
      badges.push({
        id: `${gid}_coop`,
        title: hasLevels ? 'Mente Colectiva' : `Superviviente Coop · ${g.name}`,
        subtitle: hasLevels ? 'Nivel máximo alcanzado en equipo' : 'Balance en cooperativo y solitario',
        tier: 'emerald',
        symbol: hasLevels ? 'team' : 'target',
        holders: teamHolders,
        metric: hasLevels ? `Nivel ${maxLevel}` : `${coopRate}% éxito`,
        detail: `${coopWins} ${coopWins === 1 ? 'victoria' : 'victorias'} en ${coopMatches.length} ${coopMatches.length === 1 ? 'intento' : 'intentos'}`,
        isTeamBadge: true,
      });
    }

    if (compMatches.length > 0) {
      const gp = {};
      let gameRecord = null;
      const crownWinsByPlayer = {};
      let bestSpiritScore = null;

      compMatches.forEach((m) => {
        (m.players || []).forEach((p) => {
          const name = (p.name || '').trim();
          if (!name || !isAllowed(name)) return;
          if (!gp[name]) gp[name] = { name, plays: 0, wins: 0, scores: [] };
          gp[name].plays += 1;
          if (didPlayerWinInContext(m, p)) {
            gp[name].wins += 1;
            if (g.extraType === 'splendor' && m.meta?.winType === '10 coronas') {
              crownWinsByPlayer[name] = (crownWinsByPlayer[name] || 0) + 1;
            }
          }
          if (p.score !== null && p.score !== undefined && !isNaN(p.score)) {
            const sc = Number(p.score);
            gp[name].scores.push(sc);
            if (!gameRecord || (g.lowestWins ? sc < gameRecord.score : sc > gameRecord.score)) {
              gameRecord = { score: sc, holders: [name], date: formatDisplayDate(m.date, m.createdAtMs) };
            } else if (sc === gameRecord.score && !gameRecord.holders.includes(name)) {
              gameRecord.holders.push(name);
            }

            if (g.extraType === 'harmonies' && m.meta?.spirit) {
              if (!bestSpiritScore || sc > bestSpiritScore.score) {
                bestSpiritScore = { score: sc, holders: [name] };
              } else if (sc === bestSpiritScore.score && !bestSpiritScore.holders.includes(name)) {
                bestSpiritScore.holders.push(name);
              }
            }
          }
        });
      });

      const gpList = Object.values(gp);

      const gMostWins = topHolders(gpList, (x) => x.wins, 1);
      if (gMostWins) {
        badges.push({
          id: `${gid}_wins`,
          title: g.scoringType === 'winner_only' ? (g.extraType === 'last_bullet' ? 'Pistolero PvP' : 'Último Superviviente') : `Campeón de ${g.name}`,
          subtitle: isDirectDuel ? 'Más duelos ganados' : (g.extraType === 'last_bullet' ? 'Más partidas PvP ganadas' : 'Más partidas ganadas'),
          tier: 'gold',
          symbol: 'crown',
          holders: gMostWins.holders,
          metric: `${gMostWins.value} ${gMostWins.value === 1 ? 'victoria' : 'victorias'}`,
          detail: `De ${compMatches.length} ${compMatches.length === 1 ? 'partida registrada' : 'partidas registradas'}`,
        });
      }

      if (g.scoringType === 'points' && gameRecord) {
        badges.push({
          id: `${gid}_record`,
          title: `Récord de ${g.name}`,
          subtitle: g.lowestWins ? 'Menor puntuación en una partida' : 'Más puntos en una partida',
          tier: 'gold',
          symbol: 'trophy',
          holders: gameRecord.holders,
          metric: `${gameRecord.score} pts`,
          detail: `Logrado el ${gameRecord.date}`,
        });
      }

      const scoredPlayers = gpList.filter((x) => x.scores.length >= 2);
      if (g.scoringType === 'points' && scoredPlayers.length > 0) {
        const avgVal = (x) => Number((x.scores.reduce((a, b) => a + b, 0) / x.scores.length).toFixed(1));
        let bestAvg = null;
        if (g.lowestWins) {
          const minAvg = Math.min(...scoredPlayers.map(avgVal));
          bestAvg = { value: minAvg, holders: scoredPlayers.filter((x) => avgVal(x) === minAvg).map((x) => x.name) };
        } else {
          bestAvg = topHolders(scoredPlayers, avgVal, 1);
        }
        if (bestAvg) {
          badges.push({
            id: `${gid}_avg`,
            title: 'Regularidad de Oro',
            subtitle: 'Mejor media de puntos',
            tier: 'platinum',
            symbol: 'star',
            holders: bestAvg.holders,
            metric: `${bestAvg.value} pts/p`,
            detail: 'Mínimo 2 partidas puntuadas',
          });
        }
      }

      if (g.extraType === 'splendor') {
        const crownList = Object.entries(crownWinsByPlayer).map(([name, c]) => ({ name, c }));
        const topCrown = topHolders(crownList, (x) => x.c, 1);
        if (topCrown) {
          badges.push({
            id: `${gid}_crowns`,
            title: 'Señor de las Coronas',
            subtitle: 'Más victorias por 10 coronas',
            tier: 'sapphire',
            symbol: 'gem',
            holders: topCrown.holders,
            metric: `${topCrown.value} ${topCrown.value === 1 ? 'vez' : 'veces'}`,
            detail: 'Especialista en coronas',
          });
        }
      }

      if (g.extraType === 'harmonies' && bestSpiritScore) {
        badges.push({
          id: `${gid}_spirit`,
          title: 'Guardián del Espíritu',
          subtitle: 'Récord con Espíritu activo',
          tier: 'amethyst',
          symbol: 'star',
          holders: bestSpiritScore.holders,
          metric: `${bestSpiritScore.score} pts`,
          detail: 'Máxima puntuación con carta de Espíritu',
        });
      }

      if (g.scoringType === 'winner_only' && !isDirectDuel) {
        const gMostPlays = topHolders(gpList, (x) => x.plays, 2);
        if (gMostPlays) {
          badges.push({
            id: `${gid}_vet`,
            title: `Veterano de ${g.name}`,
            subtitle: 'Más partidas jugadas',
            tier: 'sapphire',
            symbol: 'dice',
            holders: gMostPlays.holders,
            metric: `${gMostPlays.value} partidas`,
            detail: 'Asiduo a la mesa',
          });
        }
      }
    }

    if (badges.length > 0) {
      gameSections.push({ game: g, playCount: matches.length, badges });
    }
  });

  // 3) Medallero consolidado por jugador
  const medalCounts = {};
  if (playerCtx?.mode === 'vs') {
    medalCounts[playerCtx.playerA] = { name: playerCtx.playerA, total: 0, gold: 0, other: 0 };
    medalCounts[playerCtx.playerB] = { name: playerCtx.playerB, total: 0, gold: 0, other: 0 };
  }
  const countBadgeList = (list) => {
    list.forEach((b) => {
      if (b.isTeamBadge) return;
      (b.holders || []).forEach((name) => {
        if (!medalCounts[name]) medalCounts[name] = { name, total: 0, gold: 0, other: 0 };
        medalCounts[name].total += 1;
        if (b.tier === 'gold') medalCounts[name].gold += 1;
        else medalCounts[name].other += 1;
      });
    });
  };
  countBadgeList(globalBadges);
  gameSections.forEach((sec) => countBadgeList(sec.badges));

  const medalTable = Object.values(medalCounts).sort((a, b) => (b.total - a.total) || (b.gold - a.gold));
  const totalBadgesCount = globalBadges.length + gameSections.reduce((acc, s) => acc + s.badges.length, 0);

  return { globalBadges, gameSections, medalTable, totalBadgesCount };
}

function renderBadgeCardHtml(badge, uid) {
  const tierAccent = {
    gold: 'border-amber-300/60 dark:border-amber-400/25 bg-gradient-to-br from-amber-50/90 via-white to-white dark:from-amber-500/12 dark:via-surfaceDark dark:to-surfaceDark',
    platinum: 'border-slate-300/70 dark:border-slate-400/25 bg-gradient-to-br from-slate-50/90 via-white to-white dark:from-slate-400/12 dark:via-surfaceDark dark:to-surfaceDark',
    emerald: 'border-emerald-300/60 dark:border-emerald-400/25 bg-gradient-to-br from-emerald-50/80 via-white to-white dark:from-emerald-500/12 dark:via-surfaceDark dark:to-surfaceDark',
    ruby: 'border-rose-300/60 dark:border-rose-400/25 bg-gradient-to-br from-rose-50/80 via-white to-white dark:from-rose-500/12 dark:via-surfaceDark dark:to-surfaceDark',
    sapphire: 'border-blue-300/60 dark:border-blue-400/25 bg-gradient-to-br from-blue-50/80 via-white to-white dark:from-blue-500/12 dark:via-surfaceDark dark:to-surfaceDark',
    amethyst: 'border-violet-300/60 dark:border-violet-400/25 bg-gradient-to-br from-violet-50/80 via-white to-white dark:from-violet-500/12 dark:via-surfaceDark dark:to-surfaceDark',
  }[badge.tier] || 'border-[#E7E0D4] dark:border-white/10 bg-white dark:bg-surfaceDark';

  const pillTone = {
    gold: 'bg-amber-500/15 text-amber-800 dark:text-amber-300',
    platinum: 'bg-slate-500/15 text-slate-700 dark:text-slate-200',
    emerald: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300',
    ruby: 'bg-rose-500/15 text-rose-800 dark:text-rose-300',
    sapphire: 'bg-blue-500/15 text-blue-800 dark:text-blue-300',
    amethyst: 'bg-violet-500/15 text-violet-800 dark:text-violet-300',
  }[badge.tier] || 'bg-black/8 text-ink';

  return `
    <article class="rounded-[22px] border p-3.5 sm:p-4 shadow-soft flex items-center gap-3.5 anim-in relative overflow-hidden ${tierAccent}">
      <div class="shrink-0 relative">
        ${badgeMedalSvg(badge.tier, badge.symbol, uid)}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <h4 class="font-display text-[13.5px] font-extrabold text-ink dark:text-white leading-tight line-clamp-2">${esc(badge.title)}</h4>
            <p class="text-[11px] font-medium text-inkMuted dark:text-white/55 truncate mt-0.5">${esc(badge.subtitle)}</p>
          </div>
          <span class="shrink-0 px-2 py-0.5 rounded-lg text-[11px] font-extrabold tabular-nums ${pillTone}">${esc(badge.metric)}</span>
        </div>
        <div class="mt-2 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-2">
          <span class="inline-flex items-center gap-1 text-xs font-extrabold text-ink dark:text-white truncate">
            <span class="w-1.5 h-1.5 rounded-full bg-goldBrand shrink-0"></span>
            <span class="truncate">${esc(formatHolderNames(badge.holders))}</span>
          </span>
          <span class="text-[10px] font-medium text-inkMuted dark:text-white/45 truncate">${esc(badge.detail)}</span>
        </div>
      </div>
    </article>
  `;
}

function computeVsDuelSummary(subset, pCtx) {
  let winsA = 0, winsB = 0, ties = 0, sharedPlays = 0, sharedCompPlays = 0, coopShared = 0, coopSharedWins = 0;
  let totalWinsA = 0, totalWinsB = 0, playsA = 0, playsB = 0, allPlaysA = 0, allPlaysB = 0;
  const scoresA = [], scoresB = [];
  const sharedGamesCount = {};
  const duelEvents = [];

  subset.forEach((m) => {
    const isCoop = getMatchScoringType(m) === 'coop';
    const pA = (m.players || []).find((p) => normName(p.name) === pCtx.keyA);
    const pB = (m.players || []).find((p) => normName(p.name) === pCtx.keyB);

    if (pA) {
      allPlaysA++;
      if (!isCoop) {
        playsA++;
        if (pA.winner) totalWinsA++;
      }
      if (pA.score !== null && pA.score !== undefined && !isNaN(pA.score)) scoresA.push(Number(pA.score));
    }
    if (pB) {
      allPlaysB++;
      if (!isCoop) {
        playsB++;
        if (pB.winner) totalWinsB++;
      }
      if (pB.score !== null && pB.score !== undefined && !isNaN(pB.score)) scoresB.push(Number(pB.score));
    }

    if (pA && pB) {
      sharedPlays++;
      if (isCoop) {
        coopShared++;
        if (m.meta?.coopWon) coopSharedWins++;
      } else {
        sharedCompPlays++;
        sharedGamesCount[m.gameName] = (sharedGamesCount[m.gameName] || 0) + 1;
        const res = evaluateHeadToHeadMatch(m, pCtx.keyA, pCtx.keyB);
        if (res?.outcome === 'A' || res?.outcome === 'B' || res?.outcome === 'tie') {
          if (res.outcome === 'A') winsA++;
          else if (res.outcome === 'B') winsB++;
          else ties++;
          duelEvents.push({
            chrono: matchChronoKey(m),
            outcome: res.outcome,
            gameName: m.gameName || 'Partida',
            date: formatDisplayDate(m.date, m.createdAtMs),
          });
        }
      }
    }
  });

  duelEvents.sort((a, b) => a.chrono.localeCompare(b.chrono));
  const recentDuels = duelEvents.slice(-5);
  let activeStreak = null;
  if (duelEvents.length > 0) {
    const lastOut = duelEvents[duelEvents.length - 1].outcome;
    if (lastOut === 'A' || lastOut === 'B') {
      let streakCount = 0;
      for (let i = duelEvents.length - 1; i >= 0; i--) {
        if (duelEvents[i].outcome === lastOut) streakCount++;
        else break;
      }
      if (streakCount >= 2) {
        activeStreak = {
          who: lastOut,
          name: lastOut === 'A' ? pCtx.playerA : pCtx.playerB,
          count: streakCount,
        };
      }
    }
  }

  const avgA = scoresA.length > 0 ? (scoresA.reduce((a, b) => a + b, 0) / scoresA.length).toFixed(1) : null;
  const avgB = scoresB.length > 0 ? (scoresB.reduce((a, b) => a + b, 0) / scoresB.length).toFixed(1) : null;
  const topSharedGame = Object.entries(sharedGamesCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  return {
    winsA, winsB, ties, sharedPlays, sharedCompPlays, coopShared, coopSharedWins,
    totalWinsA, totalWinsB, playsA, playsB, allPlaysA, allPlaysB,
    winRateA: playsA > 0 ? Math.round((totalWinsA / playsA) * 100) : 0,
    winRateB: playsB > 0 ? Math.round((totalWinsB / playsB) * 100) : 0,
    avgA, avgB, topSharedGame,
    recentDuels, activeStreak,
  };
}

function renderVsDuelCardHtml(vs, pCtx, gameObj) {
  const profA = getPlayerProfile(pCtx.playerA);
  const profB = getPlayerProfile(pCtx.playerB);
  const rawColA = profA.color;
  const rawColB = profB.color;
  const colorAOnDark = getPlayerColorOnDark(pCtx.playerA);
  const colorBOnDark = getPlayerColorOnDark(pCtx.playerB);
  const onlyCoop = vs.sharedCompPlays === 0 && vs.coopShared > 0;
  const scoreLeft = vs.winsA;
  const scoreRight = vs.winsB;
  const denom = scoreLeft + scoreRight;
  const pctA = onlyCoop ? Math.round((vs.coopSharedWins / Math.max(1, vs.coopShared)) * 100) : (denom > 0 ? Math.round((scoreLeft / denom) * 100) : 50);
  const pctB = 100 - pctA;

  const leaderSide = onlyCoop ? null : (scoreLeft > scoreRight ? 'A' : scoreRight > scoreLeft ? 'B' : null);

  const subLeft = onlyCoop ? `${vs.coopShared} coop` : `${pctA}%`;
  const subRight = onlyCoop
    ? `${vs.coopSharedWins} ${vs.coopSharedWins === 1 ? 'superada' : 'superadas'}`
    : `${pctB}%`;

  const extraMetaParts = [];
  if (vs.ties > 0) extraMetaParts.push(`${vs.ties} ${vs.ties === 1 ? 'empate' : 'empates'}`);
  if (vs.coopShared > 0) extraMetaParts.push(`+${vs.coopShared} coop`);

  const hasGameAverages = !onlyCoop && Boolean(gameObj) && (vs.avgA !== null || vs.avgB !== null);
  const globalFooterParts = [];
  if (vs.topSharedGame && !gameObj) globalFooterParts.push(`Top juntos: ${esc(vs.topSharedGame)}`);
  else if (!gameObj) globalFooterParts.push('Cara a cara en mesa');
  globalFooterParts.push(...extraMetaParts);

  const barFooterHtml = onlyCoop
    ? `<div class="mt-1.5 text-center text-[10.5px] font-medium text-white/65 leading-tight truncate">Partidas cooperativas · no cuentan como duelo</div>`
    : hasGameAverages
      ? `
        <div class="mt-2 flex items-center justify-between gap-2 text-[10.5px] leading-tight">
          <span class="font-bold tabular-nums shrink-0" style="color:${colorAOnDark};">Med. ${vs.avgA !== null ? vs.avgA : '—'}</span>
          <span class="text-white/55 font-medium text-center truncate">${extraMetaParts.length > 0 ? extraMetaParts.join(' · ') : 'Media de puntos'}</span>
          <span class="font-bold tabular-nums shrink-0" style="color:${colorBOnDark};">Med. ${vs.avgB !== null ? vs.avgB : '—'}</span>
        </div>
      `
      : (globalFooterParts.length > 0
          ? `<div class="mt-1.5 text-center text-[10.5px] font-medium text-white/65 leading-tight truncate">${globalFooterParts.join(' · ')}</div>`
          : '');

  const heroBg = onlyCoop
    ? 'radial-gradient(ellipse 65% 60% at 15% 15%, rgba(52, 211, 153, 0.24) 0%, transparent 65%), radial-gradient(ellipse 65% 60% at 85% 15%, rgba(251, 191, 36, 0.18) 0%, transparent 65%), linear-gradient(155deg, #081511 0%, #10261E 54%, #1A170D 100%)'
    : `radial-gradient(ellipse 58% 65% at 10% 24%, ${rawColA}36 0%, transparent 64%), radial-gradient(ellipse 58% 65% at 90% 24%, ${rawColB}36 0%, transparent 64%), linear-gradient(155deg, #081410 0%, #0F231C 52%, #111916 100%)`;

  const centerSubLabel = onlyCoop
    ? 'Equipo'
    : `${vs.sharedCompPlays} ${vs.sharedCompPlays === 1 ? 'duelo' : 'duelos'}`;

  return `
    <div class="vs-duel-hero cover-sheen rounded-[26px] p-4 sm:p-5 text-white anim-in" style="background: ${heroBg};">
      <!-- Cabecera limpia -->
      <div class="flex items-center justify-between gap-2 mb-4 relative z-10">
        <div class="flex items-center gap-2 min-w-0">
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400/18 border border-amber-300/35 text-[10px] font-extrabold uppercase tracking-widest text-amber-200 shrink-0">
            ${gameIconSvg(onlyCoop ? 'mind' : 'sword', 'w-3 h-3 text-amber-300 shrink-0')}
            <span>${onlyCoop ? 'En Equipo' : 'Cara a Cara'}</span>
          </span>
          ${gameObj ? `<span class="text-[11px] font-bold text-white/80 truncate">${esc(gameObj.name)}</span>` : ''}
        </div>
        <span class="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10.5px] font-bold text-white/80 tabular-nums shrink-0">
          ${vs.sharedPlays} ${vs.sharedPlays === 1 ? 'partida' : 'partidas'}
        </span>
      </div>

      <!-- Enfrentamiento principal -->
      <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5 relative z-10">
        <!-- Jugador A -->
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="vs-avatar-wrap" style="--vs-glow:${rawColA};">
            ${renderPlayerAvatarHtml(pCtx.playerA, 'w-9 h-9 text-xs ring-2 ring-white/25 relative z-10')}
            ${leaderSide === 'A' ? `<span class="vs-leader-crown is-left" title="Líder del cara a cara">${gameIconSvg('crown', 'w-2.5 h-2.5')}</span>` : ''}
          </span>
          <div class="min-w-0">
            <div class="font-display text-sm sm:text-base font-extrabold text-white truncate leading-tight">${esc(pCtx.playerA)}</div>
            <div class="text-[10.5px] font-bold mt-0.5 truncate tabular-nums" style="color:${colorAOnDark};">${subLeft}</div>
          </div>
        </div>

        <!-- Marcador central -->
        <div class="vs-score-plaque">
          <div class="font-display text-2xl sm:text-3xl font-extrabold tabular-nums tracking-tight leading-none flex items-center justify-center gap-2">
            ${onlyCoop ? `
              <span class="text-emerald-300">${vs.coopSharedWins}</span>
              <span class="text-white/35 text-base">/</span>
              <span class="text-white">${vs.coopShared}</span>
            ` : `
              <span style="color:${colorAOnDark}; text-shadow: 0 0 14px ${rawColA}66;">${scoreLeft}</span>
              <span class="text-white/35 text-base font-bold">–</span>
              <span style="color:${colorBOnDark}; text-shadow: 0 0 14px ${rawColB}66;">${scoreRight}</span>
            `}
          </div>
          <div class="text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/55 mt-1 tabular-nums">${centerSubLabel}</div>
        </div>

        <!-- Jugador B -->
        <div class="flex items-center justify-end gap-2.5 min-w-0 text-right">
          <div class="min-w-0">
            <div class="font-display text-sm sm:text-base font-extrabold text-white truncate leading-tight">${esc(pCtx.playerB)}</div>
            <div class="text-[10.5px] font-bold mt-0.5 truncate tabular-nums" style="color:${colorBOnDark};">${subRight}</div>
          </div>
          <span class="vs-avatar-wrap" style="--vs-glow:${rawColB};">
            ${renderPlayerAvatarHtml(pCtx.playerB, 'w-9 h-9 text-xs ring-2 ring-white/25 relative z-10')}
            ${leaderSide === 'B' ? `<span class="vs-leader-crown" title="Líder del cara a cara">${gameIconSvg('crown', 'w-2.5 h-2.5')}</span>` : ''}
          </span>
        </div>
      </div>

      <!-- Barra de dominio con destello de choque -->
      <div class="mt-4 relative z-10">
        <div class="vs-dom-track">
          ${onlyCoop ? `
            <div class="vs-dom-seg bg-emerald-400" style="width:${pctA}%;"></div>
          ` : `
            <div class="vs-dom-seg" style="width:${pctA}%; background: linear-gradient(90deg, ${rawColA}, ${colorAOnDark});"></div>
            <div class="vs-dom-seg" style="width:${pctB}%; background: linear-gradient(90deg, ${colorBOnDark}, ${rawColB});"></div>
            ${pctA > 4 && pctA < 96 ? `<span class="vs-dom-split" style="left:${pctA}%;"></span>` : ''}
          `}
        </div>
        ${barFooterHtml}
      </div>

      <!-- Dock inferior: Últimos 5 con fichas de iniciales + Racha de fuego -->
      ${!onlyCoop && Array.isArray(vs.recentDuels) && vs.recentDuels.length > 0 ? (() => {
        const latestDuel = vs.recentDuels[vs.recentDuels.length - 1];
        const latestLabel = latestDuel.outcome === 'A'
          ? pCtx.playerA
          : latestDuel.outcome === 'B'
            ? pCtx.playerB
            : 'Empate';
        const latestDotCol = latestDuel.outcome === 'A'
          ? rawColA
          : latestDuel.outcome === 'B'
            ? rawColB
            : 'rgba(255,255,255,0.45)';
        const latestTextCol = latestDuel.outcome === 'A'
          ? colorAOnDark
          : latestDuel.outcome === 'B'
            ? colorBOnDark
            : 'rgba(255,255,255,0.8)';

        return `
          <div class="mt-3 vs-momentum-dock relative z-10">
            <div class="flex items-center gap-2 min-w-0">
              <span class="text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/50 shrink-0">Últ. ${vs.recentDuels.length}</span>
              <div class="flex items-center gap-1.5">
                ${vs.recentDuels.map((d, i) => {
                  const isLast = i === vs.recentDuels.length - 1;
                  const isA = d.outcome === 'A';
                  const isB = d.outcome === 'B';
                  const chipRaw = isA ? rawColA : isB ? rawColB : '#64748B';
                  const chipBright = isA ? colorAOnDark : isB ? colorBOnDark : 'rgba(255,255,255,0.75)';
                  const chipTxt = isA ? profA.initials : isB ? profB.initials : '=';
                  const whoTxt = isA ? `Ganó ${pCtx.playerA}` : isB ? `Ganó ${pCtx.playerB}` : 'Empate';
                  const toastMsg = `${d.gameName} (${d.date}) · ${whoTxt}`;
                  const styleStr = isLast
                    ? `background:${chipRaw}; border:1px solid rgba(255,255,255,0.35); --chip-glow:${chipRaw};`
                    : `background:${chipRaw}2E; border:1px solid ${chipRaw}78; color:${chipBright};`;
                  return `
                    <button type="button" data-action="toast-vs-duel" data-msg="${esc(toastMsg)}"
                      class="vs-duel-chip ${isLast ? 'is-latest' : ''}"
                      style="${styleStr}"
                      title="${esc(toastMsg)}" aria-label="${esc(toastMsg)}">
                      ${esc(chipTxt)}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            ${vs.activeStreak ? `
              <span class="vs-streak-badge ${vs.activeStreak.count >= 3 ? 'is-hot' : ''}" title="Racha activa en duelos cara a cara">
                ${flameIconSvg('w-3.5 h-3.5 vs-flame-icon')}
                <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background:${vs.activeStreak.who === 'A' ? colorAOnDark : colorBOnDark};"></span>
                <span class="truncate max-w-[78px]">${esc(vs.activeStreak.name)}</span>
                <span class="text-amber-300 font-extrabold">×${vs.activeStreak.count}</span>
              </span>
            ` : `
              <span class="vs-last-badge">
                <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background:${latestDotCol};"></span>
                <span class="truncate">Últ: <strong style="color:${latestTextCol};">${esc(latestLabel)}</strong></span>
              </span>
            `}
          </div>
        `;
      })() : ''}
    </div>
  `;
}

function getCurrentStatsSubset() {
  const pCtx = resolveStatsPlayerContext();
  return uiState.statsFilterGame === 'all'
    ? pCtx.scopedMatches
    : pCtx.scopedMatches.filter((m) => m.gameId === uiState.statsFilterGame);
}

function formatFullWeekdayDate(iso) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso || '';
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const raw = dt.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function buildSelectedDayDetailHtml(iso, subset) {
  if (!iso) {
    return `
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-black/[0.05] dark:border-white/[0.07] text-xs text-inkMuted dark:text-white/60 text-center">
        Toca cualquier día con color para ver todas las partidas jugadas.
      </div>
    `;
  }
  const dayMatches = (subset || []).filter((m) => String(m.date || '').slice(0, 10) === iso);
  const dateLabel = formatFullWeekdayDate(iso);
  const isTodayIso = iso === todayISO();
  const todayBadge = isTodayIso ? `<span class="px-1.5 py-0.5 rounded-md bg-emeraldBrand/14 text-emeraldBrand dark:text-emerald-300 text-[9.5px] font-extrabold uppercase tracking-wider">Hoy</span>` : '';

  if (dayMatches.length === 0) {
    return `
      <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-black/[0.05] dark:border-white/[0.07] flex flex-wrap items-center justify-between gap-2">
        <span class="inline-flex items-center gap-1.5 text-xs font-extrabold text-ink dark:text-white">${esc(dateLabel)} ${todayBadge}</span>
        <span class="text-[11px] font-medium text-inkMuted dark:text-white/55">Sin partidas registradas</span>
      </div>
    `;
  }

  const totalMins = dayMatches.reduce((s, m) => s + (Number(m.duration) || 0), 0);
  const durLabel = totalMins >= 60
    ? `${Math.floor(totalMins / 60)}h ${totalMins % 60 > 0 ? `${totalMins % 60}m` : ''}`.trim()
    : (totalMins > 0 ? `${totalMins} min` : '');

  return `
    <div class="p-3.5 rounded-2xl bg-canvas/85 dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/[0.08] space-y-2.5">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="inline-flex items-center gap-1.5 text-xs font-extrabold text-ink dark:text-white">${esc(dateLabel)} ${todayBadge}</span>
        <span class="px-2 py-0.5 rounded-lg bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[11px] font-extrabold tabular-nums">
          ${dayMatches.length} ${dayMatches.length === 1 ? 'partida' : 'partidas'}${durLabel ? ` · ${durLabel}` : ''}
        </span>
      </div>

      <div class="hairline-list">
        ${dayMatches.map((m) => {
          const g = getGameById(m.gameId);
          return `
            <div class="hairline-row flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${g.color};"></span>
                <span class="text-xs font-extrabold text-ink dark:text-white leading-tight">${esc(m.gameName)}</span>
              </div>
              <div class="flex items-center gap-1.5 text-[11px] text-inkMuted dark:text-white/65 tabular-nums">
                ${m.winnerLabel ? `<span class="font-bold text-ink dark:text-white/85">★ ${esc(m.winnerLabel)}</span>` : ''}
                ${m.topScore !== null && m.topScore !== undefined ? `<span class="px-1.5 py-0.5 rounded-md bg-amber-500/14 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold">${m.topScore} pts</span>` : ''}
                ${m.duration ? `<span class="text-[10.5px] opacity-75">${m.duration}m</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function buildMonthlyCalendarGrid(subset, monthKey) {
  const byDay = {};
  const availableMonthsSet = new Set();
  (subset || []).forEach((m) => {
    const iso = String(m.date || '').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return;
    if (!byDay[iso]) byDay[iso] = [];
    byDay[iso].push(m);
    availableMonthsSet.add(iso.slice(0, 7));
  });

  const now = new Date();
  const curMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const sortedMonths = Array.from(availableMonthsSet).sort((a, b) => b.localeCompare(a));

  let activeMonth = monthKey;
  if (!/^\d{4}-\d{2}$/.test(activeMonth)) {
    activeMonth = curMonthKey;
  }

  const [yearNum, monthNum] = activeMonth.split('-').map(Number);
  const firstDay = new Date(yearNum, monthNum - 1, 1);
  const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7; // 0 = Lunes

  const prevDt = new Date(yearNum, monthNum - 2, 1);
  const nextDt = new Date(yearNum, monthNum, 1);
  const pad2 = (n) => String(n).padStart(2, '0');
  const prevKey = `${prevDt.getFullYear()}-${pad2(prevDt.getMonth() + 1)}`;
  const nextKey = `${nextDt.getFullYear()}-${pad2(nextDt.getMonth() + 1)}`;

  const monthTitleRaw = firstDay.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  const monthTitle = monthTitleRaw.charAt(0).toUpperCase() + monthTitleRaw.slice(1);

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push({ empty: true });

  let monthPlays = 0;
  let monthActiveDays = 0;
  let latestActiveIso = '';
  const todayStr = todayISO();

  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${yearNum}-${pad2(monthNum)}-${pad2(d)}`;
    const list = byDay[iso] || [];
    const count = list.length;
    if (count > 0) {
      monthPlays += count;
      monthActiveDays += 1;
      latestActiveIso = iso;
    }
    cells.push({ empty: false, day: d, iso, count, isToday: iso === todayStr });
  }

  return {
    activeMonth, monthTitle, prevKey, nextKey, canGoNext: activeMonth < curMonthKey,
    cells, monthPlays, monthActiveDays, latestActiveIso, byDay,
  };
}

function buildHeatmapCardInnerHtml(subset) {
  const hm = computeActivityHeatmap(subset, '12m');
  const todayStr = todayISO();
  const todayMonthKey = todayStr.slice(0, 7);
  const mc = buildMonthlyCalendarGrid(subset, uiState.heatmapMonthKey);
  uiState.heatmapMonthKey = mc.activeMonth;

  // Si estamos en el mes actual y no hay selección manual en este mes, marca hoy por defecto
  const selBelongsToMonth = uiState.heatmapSelectedDate && uiState.heatmapSelectedDate.startsWith(mc.activeMonth);
  const selDate = selBelongsToMonth
    ? uiState.heatmapSelectedDate
    : (mc.activeMonth === todayMonthKey ? todayStr : mc.latestActiveIso);
  const showBackToToday = mc.activeMonth !== todayMonthKey || selDate !== todayStr;

  const dayBtnClass = (count, isSelected, isToday) => {
    const ring = isSelected
      ? ' ring-2 ring-goldBrand ring-offset-1 ring-offset-white dark:ring-offset-surfaceDark'
      : '';
    const todayBorder = isToday && !isSelected ? ' border-2 border-emeraldBrand font-extrabold text-emeraldBrand dark:text-emerald-300' : '';
    if (count === 0) {
      if (isToday && !isSelected) return 'bg-emeraldBrand/10 dark:bg-emeraldBrand/25 border-2 border-emeraldBrand text-emeraldBrand dark:text-emerald-300 font-extrabold';
      return 'bg-canvas/70 dark:bg-surfaceDarkAlt/70 text-inkMuted dark:text-white/55 border border-black/[0.05] dark:border-white/[0.06]' + ring;
    }
    if (count === 1) return 'bg-emeraldBrand/15 dark:bg-emerald-500/35 text-emeraldBrand dark:text-emerald-200 border border-emeraldBrand/30 font-extrabold' + todayBorder + ring;
    if (count === 2) return 'bg-emeraldBrand/65 dark:bg-emerald-500/60 text-white border border-transparent font-extrabold' + todayBorder + ring;
    if (count === 3) return 'bg-emeraldBrand dark:bg-emerald-400 text-white dark:text-pine border border-transparent font-extrabold' + todayBorder + ring;
    return 'bg-goldBrand dark:bg-amber-400 text-white dark:text-pine border border-transparent font-extrabold' + todayBorder + ring;
  };

  return `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Calendario de Actividad</h3>
        <p class="text-[11px] text-inkMuted dark:text-white/55 tabular-nums">
          ${hm.totalInRange} ${hm.totalInRange === 1 ? 'partida' : 'partidas'} en ${hm.activeDays} ${hm.activeDays === 1 ? 'día activo' : 'días activos'}${hm.maxWeekStreak >= 2 ? ` · Racha: ${hm.maxWeekStreak} sem.` : ''}
        </p>
      </div>
      ${showBackToToday ? `
        <button type="button" data-action="reset-heatmap-today"
          class="btn-tap px-2.5 py-1 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[11px] font-extrabold">
          Volver a hoy
        </button>
      ` : ''}
    </div>

    <!-- Navegación mensual limpia -->
    <div class="flex items-center justify-between gap-2 px-1">
      <button type="button" data-action="step-heatmap-month" data-val="${mc.prevKey}"
        class="btn-tap w-8 h-8 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.07] dark:border-white/12 flex items-center justify-center text-ink dark:text-white" aria-label="Mes anterior">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div class="text-center min-w-0">
        <div class="font-display text-sm font-extrabold text-ink dark:text-white">${esc(mc.monthTitle)}</div>
        <div class="text-[10.5px] font-semibold text-inkMuted dark:text-white/55 tabular-nums">
          ${mc.monthPlays > 0 ? `${mc.monthPlays} ${mc.monthPlays === 1 ? 'partida' : 'partidas'} · ${mc.monthActiveDays} ${mc.monthActiveDays === 1 ? 'día' : 'días'}` : 'Sin partidas este mes'}
        </div>
      </div>
      <button type="button" data-action="step-heatmap-month" data-val="${mc.nextKey}" ${!mc.canGoNext ? 'disabled' : ''}
        class="btn-tap w-8 h-8 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.07] dark:border-white/12 flex items-center justify-center text-ink dark:text-white disabled:opacity-35" aria-label="Mes siguiente">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>

    <!-- Cabecera días de la semana -->
    <div class="grid grid-cols-7 gap-1.5 text-center text-[10px] font-extrabold uppercase tracking-wider text-inkMuted/80 dark:text-white/45 select-none">
      <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
    </div>

    <!-- Cuadrícula mensual espaciosa -->
    <div class="grid grid-cols-7 gap-1.5">
      ${mc.cells.map((c) => {
        if (c.empty) return '<div class="h-10"></div>';
        return `
          <button type="button" data-action="select-heatmap-day" data-iso="${c.iso}"
            class="btn-tap h-10 rounded-xl flex flex-col items-center justify-center tabular-nums leading-none ${dayBtnClass(c.count, c.iso === selDate, c.isToday)}">
            <span class="text-xs font-bold">${c.day}</span>
            ${c.count > 0 ? `<span class="text-[9px] font-extrabold opacity-85 mt-0.5">${c.count === 1 ? '•' : `×${c.count}`}</span>` : ''}
          </button>
        `;
      }).join('')}
    </div>

    <!-- Detalle completo del día seleccionado (sin recortes) -->
    <div id="stats-heatmap-detail">
      ${buildSelectedDayDetailHtml(selDate, subset)}
    </div>

    <!-- Leyenda compacta -->
    <div class="flex items-center justify-end gap-1.5 text-[10px] text-inkMuted dark:text-white/50">
      <span>Actividad:</span>
      <span class="w-2.5 h-2.5 rounded-[2px] bg-black/[0.06] dark:bg-white/[0.08]"></span>
      <span class="w-2.5 h-2.5 rounded-[2px] bg-emeraldBrand/35"></span>
      <span class="w-2.5 h-2.5 rounded-[2px] bg-emeraldBrand/65"></span>
      <span class="w-2.5 h-2.5 rounded-[2px] bg-emeraldBrand"></span>
      <span class="w-2.5 h-2.5 rounded-[2px] bg-goldBrand"></span>
      <span>Más</span>
    </div>
  `;
}

function updateStatsHeatmapPartial() {
  const card = document.getElementById('stats-heatmap-card');
  if (!card) { renderStatsTab(); return; }
  card.innerHTML = buildHeatmapCardInnerHtml(getCurrentStatsSubset());
}

function selectHeatmapDayPartial(iso) {
  uiState.heatmapSelectedDate = iso || '';
  updateStatsHeatmapPartial();
}

function buildShelfDustInnerHtml() {
  const dustyData = computeShelfDustRanking();
  if (dustyData.played.length === 0 && dustyData.unplayed.length === 0) return '';
  const showDustyTab = uiState.dustyTab === 'unplayed' && dustyData.unplayed.length > 0 ? 'unplayed' : 'dusty';
  const dustyRows = (showDustyTab === 'unplayed' ? dustyData.unplayed : dustyData.played).slice(0, 6);

  return `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Polvo en la estantería</h3>
        <p class="text-[11px] text-inkMuted dark:text-white/55">Juegos que llevan más tiempo esperando salir a mesa</p>
      </div>
      <div class="seg-control bg-canvas dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12" data-seg-id="dusty-tab">
        <span class="seg-thumb ${showDustyTab === 'unplayed' ? 'seg-thumb-amber' : 'seg-thumb-pine'}"></span>
        <button type="button" data-action="set-dusty-tab" data-val="dusty" data-seg-active="${showDustyTab === 'dusty' ? 'true' : 'false'}"
          class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold ${showDustyTab === 'dusty' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
          Más días
        </button>
        <button type="button" data-action="set-dusty-tab" data-val="unplayed" ${dustyData.unplayed.length === 0 ? 'disabled' : ''} data-seg-active="${showDustyTab === 'unplayed' ? 'true' : 'false'}"
          class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold disabled:opacity-40 ${showDustyTab === 'unplayed' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
          Sin estrenar (${dustyData.unplayed.length})
        </button>
      </div>
    </div>

    <div class="hairline-list stagger-list">
      ${dustyRows.map((item) => {
        const gRating = getGameRatingFor(item.game);
        const gFav = isGameFavoriteFor(item.game);
        const pillTone = item.days === null
          ? (gFav ? 'is-warm' : 'is-mild')
          : item.days === 0
            ? 'is-fresh'
            : item.days < 7
              ? 'is-mild'
              : item.days < 30
                ? 'is-warm'
                : 'is-hot';
        const pillText = item.days === null
          ? (gRating ? `★ ${formatStarRating(gRating)} · Estrenar` : 'Sin estrenar')
          : formatDustyLabel(item.days);
        return `
        <div class="hairline-row flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style="background:${item.game.color}18; color:${item.game.color}; box-shadow: inset 0 0 0 1px ${item.game.color}24;">
              ${gameIconSvg(item.game.icon, 'w-4 h-4')}
            </span>
            <div class="min-w-0">
              <div class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(item.game.name)}</div>
              <div class="mt-0.5 flex items-center gap-1.5 flex-wrap tabular-nums">
                <span class="dust-pill ${pillTone}">${esc(pillText)}</span>
                ${item.days !== null ? `<span class="text-[10.5px] font-semibold text-inkMuted dark:text-white/50">${item.plays} ${item.plays === 1 ? 'partida' : 'partidas'}</span>` : ''}
              </div>
            </div>
          </div>
          <button type="button" data-action="quick-log-game" data-game-id="${esc(item.game.id)}"
            class="btn-tap shrink-0 px-2.5 py-1.5 rounded-xl bg-canvas dark:bg-surfaceDarkAlt text-[11px] font-extrabold text-emeraldBrand dark:text-emerald-400">
            Sacar →
          </button>
        </div>
      `;
      }).join('')}
    </div>
  `;
}

function updateStatsDustyPartial() {
  const card = document.getElementById('stats-dusty-card');
  if (!card) { renderStatsTab(); return; }
  card.innerHTML = buildShelfDustInnerHtml();
  requestAnimationFrame(syncSegmentedControls);
}

function renderStatsTab() {
  const container = document.getElementById('view-stats');
  destroyActiveCharts();

  if (matchHistory.length === 0) {
    container.innerHTML = `
      <div class="bg-white dark:bg-surfaceDark rounded-[26px] border border-dashed border-[#D8CFC0] dark:border-white/15 p-10 text-center anim-in">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-emeraldBrand/12 text-emeraldBrand flex items-center justify-center mb-3">
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7" rx="1"/><rect x="13" y="6" width="3" height="11" rx="1"/><rect x="19" y="13" width="2" height="4" rx="1"/></svg>
        </div>
        <h3 class="font-display text-lg font-extrabold text-ink dark:text-white">Tus gráficas e insignias aparecerán aquí</h3>
        <p class="text-xs text-inkMuted dark:text-white/60 mt-1.5 max-w-xs mx-auto leading-relaxed">
          En cuanto registres tus primeras partidas se desbloquearán gráficas interactivas, el ranking y las medallas de oro globales y por juego.
        </p>
        <button type="button" data-nav="log" class="btn-tap mt-5 px-5 py-2.5 rounded-xl bg-pine dark:bg-emeraldBrand text-white text-xs font-bold">Registrar partida</button>
      </div>
    `;
    return;
  }

  const pCtx = resolveStatsPlayerContext();
  const playedGameIds = [...new Set(pCtx.scopedMatches.map((m) => m.gameId))];
  if (uiState.statsFilterGame !== 'all' && !playedGameIds.includes(uiState.statsFilterGame)) {
    uiState.statsFilterGame = 'all';
  }

  const subset = uiState.statsFilterGame === 'all'
    ? pCtx.scopedMatches
    : pCtx.scopedMatches.filter((m) => m.gameId === uiState.statsFilterGame);

  const badgesData = computeAllBadges(pCtx.scopedMatches, pCtx);
  const selectedGameObj = uiState.statsFilterGame !== 'all' ? getGameById(uiState.statsFilterGame) : null;

  // Barra de filtro de jugadores / VS (con Perfiles y PNG siempre accesibles en todos los modos)
  const sharedProfileAndPngBtns = `
    <button type="button" data-action="open-player-profiles"
      class="btn-tap shrink-0 h-10 px-2.5 sm:px-3 rounded-2xl card-pro hover:border-emeraldBrand/45 text-xs font-extrabold text-ink dark:text-white inline-flex items-center gap-1.5"
      title="Gestionar perfiles, colores y duplicados" aria-label="Perfiles de jugadores">
      <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-emeraldBrand to-goldBrand shrink-0"></span>
      <span class="hidden sm:inline">Perfiles</span>
    </button>
    <button type="button" data-action="open-recap-png"
      class="btn-tap shrink-0 h-10 px-3 rounded-2xl bg-pine dark:bg-emeraldBrand text-white text-xs font-extrabold inline-flex items-center gap-1 shadow-xs"
      title="Exportar Resumen del mes o año en PNG">
      <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
      <span>PNG</span>
    </button>
  `;

  const playerFilterPillHtml = (() => {
    if (pCtx.mode === 'vs') {
      return `
        <div class="flex items-center gap-1.5">
          <button type="button" data-action="open-stats-player-filter"
            class="btn-tap flex-1 min-w-0 h-10 px-3 rounded-2xl text-white text-xs font-extrabold flex items-center justify-between gap-1.5 shadow-soft"
            style="background: linear-gradient(125deg, #132821, #227554 55%, #B45309);">
            <span class="flex items-center gap-1.5 min-w-0">
              <svg class="w-4 h-4 shrink-0 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span class="truncate">${esc(pCtx.playerA)} <span class="text-amber-300 mx-0.5">VS</span> ${esc(pCtx.playerB)}</span>
            </span>
            <span class="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/18 hidden sm:inline">Cambiar</span>
          </button>
          <button type="button" data-action="clear-stats-player-filter" title="Volver a todos" aria-label="Quitar filtro de jugadores"
            class="btn-tap w-10 h-10 rounded-2xl card-pro flex items-center justify-center text-inkMuted hover:text-coralBrand shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          ${sharedProfileAndPngBtns}
        </div>
      `;
    }
    if (pCtx.mode === 'single') {
      return `
        <div class="flex items-center gap-1.5">
          <button type="button" data-action="open-stats-player-filter"
            class="btn-tap flex-1 min-w-0 h-10 px-3 rounded-2xl bg-pine dark:bg-emeraldBrand text-white text-xs font-extrabold flex items-center justify-between gap-1.5 shadow-soft">
            <span class="flex items-center gap-1.5 min-w-0">
              ${renderPlayerAvatarHtml(pCtx.playerA, 'w-5 h-5 text-[9px] ring-1 ring-white/30')}
              <span class="truncate">${esc(pCtx.playerA)}</span>
            </span>
            <span class="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/18 hidden sm:inline">Cambiar</span>
          </button>
          <button type="button" data-action="clear-stats-player-filter" title="Volver a todos" aria-label="Quitar filtro de jugador"
            class="btn-tap w-10 h-10 rounded-2xl card-pro flex items-center justify-center text-inkMuted hover:text-coralBrand shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          ${sharedProfileAndPngBtns}
        </div>
      `;
    }
    return `
      <div class="flex items-center gap-1.5">
        <button type="button" data-action="open-stats-player-filter"
          class="btn-tap flex-1 min-w-0 h-10 px-3.5 rounded-2xl card-pro hover:border-emeraldBrand/45 text-xs font-bold text-ink dark:text-white flex items-center justify-between gap-2">
          <span class="flex items-center gap-2 min-w-0">
            <span class="w-6 h-6 rounded-lg bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-400 flex items-center justify-center shrink-0">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <span class="truncate">Todos los jugadores</span>
          </span>
          <span class="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-canvas dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10 text-[11px] font-extrabold text-emeraldBrand dark:text-emerald-400">
            <span>Filtrar / VS</span>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </button>
        <button type="button" data-action="open-player-profiles"
          class="btn-tap shrink-0 h-10 px-3 rounded-2xl card-pro hover:border-emeraldBrand/45 text-xs font-extrabold text-ink dark:text-white inline-flex items-center gap-1.5"
          title="Gestionar perfiles, colores y duplicados">
          <span class="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-emeraldBrand to-goldBrand"></span>
          <span>Perfiles</span>
        </button>
        <button type="button" data-action="open-recap-png"
          class="btn-tap shrink-0 h-10 px-3 rounded-2xl bg-pine dark:bg-emeraldBrand text-white text-xs font-extrabold inline-flex items-center gap-1 shadow-xs"
          title="Exportar Resumen del mes o año en PNG">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          <span>PNG</span>
        </button>
      </div>
    `;
  })();

  // Rating global o por juego seleccionado (siempre con todos los rivales de esas partidas para Elo exacto)
  const ratingScopeMatches = uiState.statsFilterGame === 'all'
    ? matchHistory
    : matchHistory.filter((m) => m.gameId === uiState.statsFilterGame);
  const ratingData = computeRatingSystem(ratingScopeMatches);

  // Barra superior compartida: Sub-pestañas (Stats | Ranking | Insignias) + Filtro Jugador/VS + Filtro Juego
  const topControlsHtml = `
    <div class="grid grid-cols-3 gap-1 p-1 rounded-2xl card-pro">
      <button type="button" data-action="set-stats-subtab" data-val="overview"
        class="btn-tap py-2.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
          uiState.statsSubTab === 'overview'
            ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs'
            : 'text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white'
        }">
        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7" rx="1"/><rect x="13" y="6" width="3" height="11" rx="1"/><rect x="19" y="13" width="2" height="4" rx="1"/></svg>
        <span>Stats</span>
      </button>

      <button type="button" data-action="set-stats-subtab" data-val="ranking"
        class="btn-tap py-2.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
          uiState.statsSubTab === 'ranking'
            ? 'bg-gradient-to-r from-pine via-emeraldBrand to-pine text-white shadow-xs'
            : 'text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white'
        }">
        ${gameIconSvg('crown', 'w-3.5 h-3.5 shrink-0')}
        <span>Ranking</span>
      </button>

      <button type="button" data-action="set-stats-subtab" data-val="badges"
        class="btn-tap py-2.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 transition-all ${
          uiState.statsSubTab === 'badges'
            ? 'bg-gradient-to-r from-[#B45309] via-[#D9911E] to-[#B45309] text-white shadow-xs'
            : 'text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white'
        }">
        <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
        <span>Insignias</span>
        <span class="px-1.5 py-0.5 rounded-md text-[9.5px] font-extrabold tabular-nums ${
          uiState.statsSubTab === 'badges' ? 'bg-white/25 text-white' : 'bg-goldBrand/18 text-amber-800 dark:text-amber-300'
        }">${badgesData.totalBadgesCount}</span>
      </button>
    </div>

    ${playerFilterPillHtml}

    ${playedGameIds.length > 0 ? `
      <div class="scroll-strip no-scrollbar">
        <button type="button" data-action="filter-stats-game" data-val="all"
          class="btn-tap shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border ${uiState.statsFilterGame === 'all' ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-xs' : 'pill-chip text-ink dark:text-white/80'}">
          Toda la ludoteca
        </button>
        ${playedGameIds.map((gid) => {
          const g = getGameById(gid);
          const active = uiState.statsFilterGame === gid;
          return `
            <button type="button" data-action="filter-stats-game" data-val="${esc(gid)}"
              class="btn-tap shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 ${active ? 'text-white border-transparent shadow-xs' : 'pill-chip text-ink dark:text-white/80'}"
              style="${active ? `background:${g.color};` : ''}">
              <span class="w-2 h-2 rounded-full" style="background:${active ? '#fff' : g.color}"></span>
              <span>${esc(g.name)}</span>
            </button>
          `;
        }).join('')}
      </div>
    ` : ''}
  `;

  // Estado vacío si A y B no han jugado juntos todavía
  if (subset.length === 0) {
    container.innerHTML = `
      ${topControlsHtml}
      <div class="card-pro rounded-[26px] border-dashed p-9 text-center anim-in space-y-3">
        <div class="w-12 h-12 mx-auto rounded-2xl bg-amber-500/12 text-amber-600 dark:text-amber-300 flex items-center justify-center">
          ${gameIconSvg('trio', 'w-6 h-6')}
        </div>
        <div>
          <h3 class="font-display text-base font-extrabold text-ink dark:text-white">Sin partidas juntos todavía</h3>
          <p class="text-xs text-inkMuted dark:text-white/60 mt-1 max-w-xs mx-auto leading-relaxed">
            ${pCtx.mode === 'vs'
              ? `${esc(pCtx.playerA)} y ${esc(pCtx.playerB)} aún no han coincidido en la misma mesa${selectedGameObj ? ` en ${esc(selectedGameObj.name)}` : ''}.`
              : 'No hay partidas que coincidan con este filtro.'}
          </p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 pt-1">
          ${pCtx.mode === 'vs' ? `
            <button type="button" data-action="open-stats-player-filter"
              class="btn-tap btn-primary-pro px-4 py-2 rounded-xl text-white text-xs font-bold">
              Cambiar jugadores
            </button>
          ` : ''}
          <button type="button" data-action="clear-stats-player-filter"
            class="btn-tap card-pro px-4 py-2 rounded-xl text-xs font-bold text-ink dark:text-white">
            Volver a todos
          </button>
        </div>
      </div>
    `;
    return;
  }

  const vsSummary = pCtx.mode === 'vs' ? computeVsDuelSummary(subset, pCtx) : null;
  const vsDuelCardHtml = vsSummary ? renderVsDuelCardHtml(vsSummary, pCtx, selectedGameObj) : '';

  // ==================== SUB-VISTA: RANKING 0.0 – 10.0 ====================
  if (uiState.statsSubTab === 'ranking') {
    const podiumPool = ratingData.calibratedPlayers.slice(0, 3);
    const leader = podiumPool[0] || ratingData.players[0] || null;
    const runnerUp = podiumPool[1] || null;
    const highlightKeys = pCtx.allowedKeys || null;
    const scopeLabel = selectedGameObj ? `En ${selectedGameObj.name}` : 'Toda la ludoteca';

    // Pulso narrativo de la liga (brecha al #1, mayor subida reciente, pico histórico)
    const gapPts = leader && runnerUp ? Math.max(0, leader.points - runnerUp.points) : null;
    const hotRiser = [...ratingData.players]
      .filter((p) => p.lastDelta > 0)
      .sort((a, b) => (b.lastDelta - a.lastDelta) || (b.points - a.points))[0] || null;
    const peakHolder = [...ratingData.players]
      .sort((a, b) => (b.peakPoints - a.peakPoints) || (b.points - a.points))[0] || null;

    const pulseItems = [];
    if (gapPts !== null) {
      pulseItems.push({
        label: gapPts <= 30 ? 'Duelo al rojo' : 'Ventaja #1',
        value: gapPts === 0 ? 'Empatados' : `±${gapPts} pts`,
        accent: gapPts <= 30 ? 'text-amber-300' : 'text-emerald-300',
      });
    }
    if (hotRiser) {
      pulseItems.push({
        label: 'En alza',
        value: `${hotRiser.name} +${hotRiser.lastDelta}`,
        accent: 'text-emerald-300',
      });
    }
    if (peakHolder) {
      pulseItems.push({
        label: 'Pico récord',
        value: `${peakHolder.peakNote} · ${peakHolder.name}`,
        accent: 'text-amber-200',
      });
    }

    const renderPodiumSlot = (pl) => {
      const isFirst = pl.rank === 1;
      const slotCls = isFirst ? 'is-first' : (pl.rank === 2 ? 'is-second' : 'is-third');
      const ringCls = isFirst
        ? 'ring-2 ring-amber-400/60'
        : pl.rank === 2
          ? 'ring-2 ring-slate-300/60'
          : 'ring-2 ring-amber-600/60';
      const tier = getRatingTierInfo(pl.points);
      const dCls = pl.lastDelta > 0 ? 'is-pos' : pl.lastDelta < 0 ? 'is-neg' : 'is-flat';
      const dTxt = pl.lastHitCap && pl.lastDelta === 0
        ? '+0'
        : (pl.lastDelta > 0 ? `+${pl.lastDelta}` : `${pl.lastDelta}`);
      return `
        <button type="button" data-action="open-player-rating-detail" data-key="${esc(pl.key)}"
          class="podium-slot btn-tap ${slotCls}">
          <div class="flex items-center justify-center gap-1 mb-1.5">
            ${isFirst
              ? `<span class="podium-crown-halo">${gameIconSvg('crown', 'w-3 h-3')}</span>`
              : `<span class="podium-medal is-${pl.rank}">#${pl.rank}</span>`}
            ${pl.currentStreak >= 2 ? renderStreakPillHtml(pl.currentStreak, { onDark: true }) : ''}
          </div>
          <span class="podium-avatar-glow" style="--glow-col:${getPlayerColor(pl.name)};">
            ${renderPlayerAvatarHtml(pl.name, `${isFirst ? 'w-12 h-12 text-sm' : 'w-10 h-10 text-xs'} ${ringCls} relative z-10`)}
          </span>
          <div class="font-display text-xs sm:text-sm font-extrabold text-white truncate max-w-full mt-2 leading-tight">${esc(pl.name)}</div>
          <div class="text-[9.5px] font-bold leading-none mt-1" style="color:${tier.color};">${esc(tier.label)}</div>
          <div class="flex items-center justify-center gap-1 mt-1.5">
            <span class="font-display ${isFirst ? 'text-2xl' : 'text-xl'} font-extrabold ${isFirst ? 'text-amber-300' : 'text-white'} tabular-nums leading-none">${pl.note}</span>
            <span class="podium-delta ${dCls}">${dTxt}</span>
          </div>
          <div class="text-[9.5px] font-semibold text-white/55 tabular-nums mt-1">${pl.wins}V/${pl.ratedPlays}P · ${pl.winRate}%</div>
        </button>
      `;
    };

    const orderedPodium = podiumPool.length === 3
      ? [podiumPool[1], podiumPool[0], podiumPool[2]]
      : podiumPool;

    const heroRankingHtml = leader ? `
      <div class="ranking-arena-hero cover-sheen rounded-[26px] p-4 sm:p-5 text-white anim-in border border-white/10">
        <div class="flex items-center justify-between gap-2 mb-3.5 relative z-10">
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-2 py-0.5 rounded-lg bg-amber-400/20 border border-amber-300/35 text-[10px] font-extrabold uppercase tracking-widest text-amber-200 shrink-0">
              Liga · 0–10
            </span>
            <span class="text-[11px] font-bold text-white/75 truncate">${esc(scopeLabel)}</span>
          </div>
          <button type="button" data-action="open-rating-info"
            class="btn-tap px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-[10.5px] font-bold text-white/85 shrink-0">
            ? Cómo funciona
          </button>
        </div>

        ${podiumPool.length >= 2 ? `
          <div class="ranking-podium-grid ${podiumPool.length === 2 ? 'is-duo' : ''} relative z-10">
            ${orderedPodium.map(renderPodiumSlot).join('')}
          </div>
        ` : `
          <button type="button" data-action="open-player-rating-detail" data-key="${esc(leader.key)}"
            class="btn-tap w-full flex items-center justify-between gap-3 text-left relative z-10">
            <div class="flex items-center gap-3 min-w-0">
              <span class="podium-avatar-glow" style="--glow-col:${getPlayerColor(leader.name)};">
                ${renderPlayerAvatarHtml(leader.name, 'w-12 h-12 text-sm ring-2 ring-amber-400/60 relative z-10')}
              </span>
              <div class="min-w-0">
                <div class="text-[10px] font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5">
                  <span>#1 Líder actual</span>
                  ${renderStreakPillHtml(leader.currentStreak, { onDark: true })}
                </div>
                <div class="font-display text-lg font-extrabold leading-tight truncate mt-0.5">${esc(leader.name)}</div>
                <div class="text-[11px] text-white/70 mt-0.5 truncate tabular-nums">
                  ${leader.wins}V / ${leader.ratedPlays}P · Pico ${leader.peakNote}
                </div>
              </div>
            </div>
            <div class="px-3.5 py-2 rounded-2xl bg-black/30 border border-amber-300/30 text-center shrink-0">
              <div class="font-display text-2xl font-extrabold text-amber-300 tabular-nums leading-none">${leader.note}</div>
              <div class="text-[9.5px] font-bold text-white/60 tabular-nums mt-0.5">${leader.points} pts</div>
            </div>
          </button>
        `}

        ${pulseItems.length >= 2 ? `
          <div class="mt-3.5 league-pulse-grid ${pulseItems.length === 2 ? 'is-duo' : ''} relative z-10">
            ${pulseItems.map((it) => `
              <div class="league-pulse-item">
                <div class="text-[9px] font-bold uppercase tracking-wider text-white/50 truncate">${esc(it.label)}</div>
                <div class="text-[11px] font-extrabold ${it.accent} truncate tabular-nums mt-0.5">${esc(it.value)}</div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 text-[11px] text-white/70 relative z-10 tabular-nums">
            <span>${ratingData.ratedMatchCount} ${ratingData.ratedMatchCount === 1 ? 'partida valorada' : 'partidas valoradas'}</span>
            <span>Base neutra: 5.0 (500 pts)</span>
          </div>
        `}
      </div>
    ` : '';

    const renderRankingRow = (pl) => {
      const isHighlighted = highlightKeys && highlightKeys.has(pl.key);
      const tier = getRatingTierInfo(pl.points);
      const deltaCls = pl.lastDelta > 0 ? 'is-pos' : pl.lastDelta < 0 ? 'is-neg' : 'is-flat';
      const deltaTxt = pl.lastHitCap && pl.lastDelta === 0
        ? '+0 · Tope'
        : (pl.lastDelta > 0 ? `+${pl.lastDelta}` : `${pl.lastDelta}`);
      const noteColorCls = pl.rank === 1
        ? 'text-goldBrand dark:text-amber-400'
        : pl.points >= 550
          ? 'text-emeraldBrand dark:text-emerald-400'
          : pl.points < 450
            ? 'text-coralBrand'
            : 'text-ink dark:text-white';
      const pctScale = Math.max(2, Math.min(100, Math.round(pl.points / 10)));
      const peakPctScale = Math.max(2, Math.min(100, Math.round(pl.peakPoints / 10)));
      const recentForm = (pl.recentForm && pl.recentForm.length > 0) ? pl.recentForm : (pl.history || []).slice(-5);
      const playerCol = getPlayerColor(pl.name);
      // Etiqueta principal: Tier o Calibración, más llama de racha si >= 2
      const primaryBadgeHtml = pl.isCalibrating
        ? `<span class="px-1.5 py-0.5 rounded-md bg-black/[0.06] dark:bg-white/10 text-[9.5px] font-bold text-inkMuted dark:text-white/55 tabular-nums shrink-0">${pl.ratedPlays}/3P</span>`
        : (pl.currentStreak >= 2
            ? renderStreakPillHtml(pl.currentStreak)
            : `<span class="tier-pill ${tier.cls}">${esc(tier.label)}</span>`);
      return `
        <button type="button" data-action="open-player-rating-detail" data-key="${esc(pl.key)}"
          class="hairline-row btn-tap w-full text-left block ${isHighlighted ? 'bg-emeraldBrand/10 rounded-xl px-2 -mx-1' : ''}">
          <div class="flex items-center justify-between gap-2.5">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-7 h-7 rounded-xl flex items-center justify-center font-display font-extrabold text-xs shrink-0 ${
                pl.rank === 1
                  ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-[#142620] shadow-xs'
                  : pl.rank === 2
                    ? 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900'
                    : pl.rank === 3
                      ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50'
                      : 'bg-black/[0.06] dark:bg-white/10 text-inkMuted dark:text-white/65'
              }">${pl.rank ? `#${pl.rank}` : '—'}</span>
              ${renderPlayerAvatarHtml(pl.name, 'w-9 h-9 text-[11px]')}
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="text-sm font-extrabold text-ink dark:text-white truncate">${esc(pl.name)}</span>
                  ${primaryBadgeHtml}
                </div>
                <div class="text-[11px] text-inkMuted dark:text-white/55 truncate tabular-nums mt-0.5">
                  ${pl.wins}V / ${pl.ratedPlays}P · ${pl.winRate}% · Pico ${pl.peakNote}${!pl.isCalibrating && pl.provisional ? ' · Prov.' : ''}
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <div class="text-right">
                <div class="font-display text-xl font-extrabold tabular-nums leading-none ${noteColorCls}">${pl.note}</div>
                <div class="mt-1 inline-flex items-center justify-end gap-1">
                  <span class="text-[10px] font-semibold text-inkMuted dark:text-white/50 tabular-nums">${pl.points} pts</span>
                  <span class="rating-delta-chip ${deltaCls}">${deltaTxt}</span>
                </div>
              </div>
              <svg class="w-3.5 h-3.5 text-inkMuted/50 dark:text-white/30 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
          <div class="mt-2.5 flex items-center gap-2.5">
            <div class="flex-1 rating-row-track">
              <div class="h-full rounded-full transition-all duration-500" style="width:${pctScale}%; background: linear-gradient(90deg, ${playerCol}B8, ${playerCol});"></div>
              <span class="rating-mid-mark" title="Base neutra: 5.0"></span>
              ${pl.peakPoints > pl.points + 8 ? `<span class="rating-peak-pin" style="left:${peakPctScale}%;" title="Pico histórico: ${pl.peakNote}"></span>` : ''}
            </div>
            ${recentForm.length > 0 ? `
              <div class="inline-flex items-center gap-1 shrink-0" title="Forma reciente (últimas ${recentForm.length})">
                ${recentForm.map((h) => `<span class="form-dot ${h.won ? 'is-win' : 'is-loss'}"></span>`).join('')}
              </div>
            ` : ''}
          </div>
        </button>
      `;
    };

    const rankingRowsHtml = ratingData.players.length > 0 ? `
      <div class="card-pro rounded-[24px] p-4 sm:p-5 anim-in">
        <div class="flex items-center justify-between gap-2 mb-3">
          <div>
            <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Clasificación por Nota</h3>
            <p class="text-[11px] text-inkMuted dark:text-white/55">Toca un jugador para ver su historial de puntos</p>
          </div>
          <span class="text-[11px] font-bold text-inkMuted dark:text-white/55 tabular-nums">${ratingData.calibratedPlayers.length} jug.</span>
        </div>

        <div class="hairline-list">
          ${ratingData.calibratedPlayers.map(renderRankingRow).join('')}
        </div>

        ${ratingData.calibratingPlayers.length > 0 ? `
          <div class="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <span class="text-[10.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/50">En calibración (menos de 3 partidas)</span>
              <span class="text-[10px] font-semibold text-inkMuted/70 dark:text-white/40 tabular-nums">${ratingData.calibratingPlayers.length}</span>
            </div>
            <div class="hairline-list">
              ${ratingData.calibratingPlayers.map(renderRankingRow).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    ` : `
      <div class="card-pro rounded-[26px] border-dashed p-9 text-center anim-in space-y-2">
        <div class="w-12 h-12 mx-auto rounded-2xl bg-amber-500/12 text-amber-600 dark:text-amber-300 flex items-center justify-center">
          ${gameIconSvg('crown', 'w-6 h-6')}
        </div>
        <h3 class="font-display text-base font-extrabold text-ink dark:text-white">Sin partidas competitivas todavía</h3>
        <p class="text-xs text-inkMuted dark:text-white/60 max-w-xs mx-auto leading-relaxed">
          Registra partidas competitivas de 2 o más jugadores para activar el ranking de 0.0 a 10.0. Las partidas en solitario y cooperativas no alteran la nota.
        </p>
      </div>
    `;

    const evolutionCardHtml = ratingData.timeline.length >= 2 ? `
      <div class="card-pro rounded-[24px] p-5 anim-in">
        <div class="flex items-center justify-between gap-2 mb-3">
          <div>
            <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Evolución del Rating</h3>
            <p class="text-[11px] text-inkMuted dark:text-white/55">Trayectoria en escala 0.0 – 10.0 (línea punteada en 5.0)</p>
          </div>
        </div>
        <div class="h-[230px] relative">
          <canvas id="chart-rating-evolution"></canvas>
        </div>
      </div>
    ` : '';

    container.innerHTML = `
      ${topControlsHtml}
      ${heroRankingHtml}
      ${rankingRowsHtml}
      ${evolutionCardHtml}
    `;
    requestAnimationFrame(syncSegmentedControls);
    mountRankingChart(ratingData, highlightKeys);
    return;
  }

  // ==================== SUB-VISTA: INSIGNIAS Y MEDALLERO ====================
  if (uiState.statsSubTab === 'badges') {
    let uidCounter = 1;
    const nextUid = () => `b${uidCounter++}`;

    const medalTitle = pCtx.mode === 'vs'
      ? `Duelo de Medallas · ${pCtx.playerA} vs ${pCtx.playerB}`
      : pCtx.mode === 'single'
        ? `Vitrina Personal · ${pCtx.playerA}`
        : 'Medallero General';

    const medalSubLabel = pCtx.mode === 'vs'
      ? 'Duelo Cara a Cara'
      : 'Sala de Trofeos';

    const medalTableHtml = uiState.statsFilterGame === 'all' && badgesData.medalTable.length > 0 ? `
      <div class="cover-sheen rounded-[26px] p-5 text-white shadow-elevated anim-in border border-white/10"
        style="background: linear-gradient(135deg, #0E1F19 0%, #19382E 52%, #473011 100%);">
        <div class="flex items-center justify-between gap-2 mb-4 relative z-10">
          <div class="min-w-0">
            <div class="text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-300/90">${esc(medalSubLabel)}</div>
            <h3 class="font-display text-base sm:text-lg font-extrabold leading-tight mt-0.5 truncate">${esc(medalTitle)}</h3>
          </div>
          <span class="px-3 py-1 rounded-full bg-white/12 border border-white/18 text-[11px] font-bold tabular-nums shrink-0">
            ${badgesData.totalBadgesCount} ${badgesData.totalBadgesCount === 1 ? 'insignia' : 'insignias'}
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 relative z-10">
          ${badgesData.medalTable.slice(0, 6).map((row, idx) => `
            <div class="flex items-center justify-between gap-2 px-3 py-2.5 rounded-2xl ${idx === 0 ? 'bg-gradient-to-r from-amber-400/22 to-amber-300/10 border border-amber-300/40' : 'bg-white/[0.07] border border-white/10'}">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-7 h-7 rounded-xl flex items-center justify-center font-display text-xs font-extrabold shrink-0 ${
                  idx === 0
                    ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-[#142620] shadow-xs'
                    : idx === 1
                      ? 'bg-slate-200/90 text-slate-900'
                      : idx === 2
                        ? 'bg-amber-700/80 text-amber-100'
                        : 'bg-white/15 text-white'
                }">#${idx + 1}</span>
                <span class="text-sm font-bold truncate">${esc(row.name)}</span>
              </div>
              <div class="flex items-center gap-1.5 shrink-0 text-[11px] font-extrabold tabular-nums">
                ${row.gold > 0 ? `<span class="px-2 py-0.5 rounded-lg bg-amber-400/22 text-amber-200">${row.gold} Oro</span>` : ''}
                <span class="px-2 py-0.5 rounded-lg bg-white/14 text-white">${row.total} tot.</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const globalBlockHtml = uiState.statsFilterGame === 'all' && badgesData.globalBadges.length > 0 ? `
      <div class="space-y-2.5">
        <div class="flex items-center justify-between px-0.5">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-goldBrand"></span>
            <h3 class="font-display text-sm font-extrabold uppercase tracking-wider text-ink dark:text-white">${pCtx.mode === 'vs' ? 'Global del Duelo' : 'Global'}</h3>
          </div>
          <span class="text-[11px] font-semibold text-inkMuted dark:text-white/55">${badgesData.globalBadges.length} medallas</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${badgesData.globalBadges.map((b) => renderBadgeCardHtml(b, nextUid())).join('')}
        </div>
      </div>
    ` : '';

    const visibleGameSections = uiState.statsFilterGame === 'all'
      ? badgesData.gameSections
      : badgesData.gameSections.filter((s) => s.game.id === uiState.statsFilterGame);

    const gamesBlocksHtml = visibleGameSections.map((sec) => `
      <div class="space-y-2.5 pt-1">
        <div class="flex items-center justify-between gap-2 px-1">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-7 h-7 rounded-xl text-white flex items-center justify-center shrink-0 shadow-xs"
              style="background: linear-gradient(135deg, ${sec.game.color}, ${sec.game.color2 || sec.game.color});">
              ${gameIconSvg(sec.game.icon, 'w-4 h-4')}
            </div>
            <h3 class="font-display text-sm font-extrabold uppercase tracking-wider text-ink dark:text-white truncate">${esc(sec.game.name)}</h3>
          </div>
          <span class="text-[11px] font-semibold text-inkMuted dark:text-white/55 shrink-0">${sec.playCount} ${sec.playCount === 1 ? 'partida' : 'partidas'}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${sec.badges.map((b) => renderBadgeCardHtml(b, nextUid())).join('')}
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      ${topControlsHtml}
      <div class="space-y-5">
        ${vsDuelCardHtml}
        ${medalTableHtml}
        ${globalBlockHtml}
        ${gamesBlocksHtml}
      </div>
    `;
    return;
  }

  // ==================== SUB-VISTA: GRÁFICAS Y STATS ====================
  const totalPlays = subset.length;
  const totalMins = subset.reduce((a, m) => a + (Number(m.duration) || 0), 0);
  const totalHours = (totalMins / 60).toFixed(1);
  const isLowestWinsFilter = uiState.statsFilterGame !== 'all' && Boolean(getGameById(uiState.statsFilterGame).lowestWins);
  const isDirectDuel = pCtx.mode === 'vs' && pCtx.vsScope === 'together';

  // Agregado por jugador (excluye cooperativas de victorias/duelos competitivos salvo filtro de juego puramente coop)
  const isPureCoopFilter = Boolean(selectedGameObj && selectedGameObj.scoringType === 'coop');
  const playerMap = {};
  subset.forEach((m) => {
    const isCoopMatch = getMatchScoringType(m) === 'coop';
    (m.players || []).forEach((p) => {
      const name = (p.name || '').trim();
      if (!name) return;
      if (pCtx.allowedKeys && !pCtx.allowedKeys.has(normName(name))) return;
      if (!playerMap[name]) {
        playerMap[name] = {
          name, plays: 0, compPlays: 0, compWins: 0, coopPlays: 0, coopWins: 0,
          scores: [], bestScore: isLowestWinsFilter ? Infinity : -Infinity,
          specialRecord: '', fourMermaidsCount: 0,
          byGame: {}, winsByGame: {},
        };
      }
      const st = playerMap[name];
      st.plays += 1;

      if (isCoopMatch) {
        st.coopPlays += 1;
        if (m.meta?.coopWon) st.coopWins += 1;
      } else {
        st.compPlays += 1;
        let wonMatch = Boolean(p.winner);
        if (isDirectDuel) {
          const h2h = evaluateHeadToHeadMatch(m, pCtx.keyA, pCtx.keyB);
          if (h2h && h2h.kind === 'duel') {
            const pk = normName(name);
            wonMatch = (h2h.outcome === 'A' && pk === pCtx.keyA) || (h2h.outcome === 'B' && pk === pCtx.keyB);
          } else {
            wonMatch = false;
          }
        }
        if (wonMatch) {
          st.compWins += 1;
          st.winsByGame[m.gameName] = (st.winsByGame[m.gameName] || 0) + 1;
        }
      }

      if (isFourMermaidsMatch(m) && Boolean(p.winner)) {
        st.fourMermaidsCount += 1;
        st.specialRecord = '4 Sirenas';
      }
      if (p.score !== null && p.score !== undefined && !isNaN(p.score)) {
        const sc = Number(p.score);
        st.scores.push(sc);
        const mg = getGameById(m.gameId);
        if (!(uiState.statsFilterGame === 'all' && mg.lowestWins)) {
          if (isLowestWinsFilter ? sc < st.bestScore : sc > st.bestScore) st.bestScore = sc;
        }
      }
      st.byGame[m.gameName] = (st.byGame[m.gameName] || 0) + 1;
    });
  });

  const leaderboard = Object.values(playerMap).map((st) => {
    const useCoopOnly = isPureCoopFilter || (st.compPlays === 0 && st.coopPlays > 0);
    const effectivePlays = useCoopOnly ? st.coopPlays : st.compPlays;
    const wins = useCoopOnly ? st.coopWins : st.compWins;
    const winRate = effectivePlays > 0 ? Math.round((wins / effectivePlays) * 100) : 0;
    const avg = st.scores.length > 0 ? (st.scores.reduce((a, b) => a + b, 0) / st.scores.length).toFixed(1) : null;
    const favGame = Object.entries(st.byGame).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
    const topWonEntry = Object.entries(st.winsByGame).sort((a, b) => b[1] - a[1])[0] || null;
    const topWonGame = topWonEntry ? topWonEntry[0] : '';
    const topWonCount = topWonEntry ? topWonEntry[1] : 0;
    const rInfo = !useCoopOnly ? (ratingData.byKey[normName(st.name)] || null) : null;
    return { ...st, effectivePlays, wins, winRate, avg, favGame, topWonGame, topWonCount, coopOnly: useCoopOnly, ratingInfo: rInfo };
  }).sort((a, b) => {
    if (!isDirectDuel && !isPureCoopFilter) {
      const aCal = a.ratingInfo && !a.ratingInfo.isCalibrating ? 2 : (a.ratingInfo ? 1 : 0);
      const bCal = b.ratingInfo && !b.ratingInfo.isCalibrating ? 2 : (b.ratingInfo ? 1 : 0);
      if (aCal !== bCal) return bCal - aCal;
      if (a.ratingInfo && b.ratingInfo && a.ratingInfo.points !== b.ratingInfo.points) {
        return b.ratingInfo.points - a.ratingInfo.points;
      }
    }
    return (b.wins - a.wins) || (b.winRate - a.winRate) || (b.effectivePlays - a.effectivePlays);
  });

  // Récord de puntuación del filtro (en Sea Salt & Paper, 4 Sirenas cuenta como récord máximo)
  let recordEntry = null;
  const mermaidWinners = [];
  subset.forEach((m) => {
    const mg = getGameById(m.gameId);
    if (uiState.statsFilterGame === 'all' && mg.lowestWins) return;
    const isMermaidWinMatch = uiState.statsFilterGame === 'oceanos_de_papel' && isFourMermaidsMatch(m);
    (m.players || []).forEach((p) => {
      if (pCtx.allowedKeys && !pCtx.allowedKeys.has(normName(p.name))) return;
      if (isMermaidWinMatch && p.winner && p.name) {
        mermaidWinners.push(p.name);
      }
      if (p.score !== null && p.score !== undefined && !isNaN(p.score)) {
        const sc = Number(p.score);
        if (!recordEntry || (isLowestWinsFilter ? sc < recordEntry.score : sc > recordEntry.score)) {
          recordEntry = { score: sc, player: p.name, game: m.gameName, date: m.date, createdAtMs: m.createdAtMs, isSpecial: false };
        }
      }
    });
  });
  if (uiState.statsFilterGame === 'oceanos_de_papel' && mermaidWinners.length > 0) {
    const uniqueMermaids = [...new Set(mermaidWinners)];
    const prevNumeric = recordEntry;
    recordEntry = {
      isSpecial: true,
      display: '4 Sirenas',
      score: prevNumeric ? prevNumeric.score : null,
      player: uniqueMermaids.join(' · '),
      game: selectedGameObj ? selectedGameObj.name : 'Sea Salt & Paper',
      subNote: prevNumeric ? `Máx. pts: ${prevNumeric.score} (${prevNumeric.player})` : 'Victoria especial',
    };
  }

  // Donut de juegos (solo vista global)
  let sortedGamesData = [];
  if (uiState.statsFilterGame === 'all') {
    const gameAgg = {};
    subset.forEach((m) => {
      if (!gameAgg[m.gameId]) gameAgg[m.gameId] = { count: 0, mins: 0 };
      gameAgg[m.gameId].count += 1;
      gameAgg[m.gameId].mins += Number(m.duration) || 0;
    });
    sortedGamesData = Object.entries(gameAgg)
      .map(([gid, info]) => ({
        game: getGameById(gid),
        count: info.count,
        hours: Number((info.mins / 60).toFixed(1)),
        pct: Math.round((info.count / totalPlays) * 100),
      }))
      .sort((a, b) => (uiState.statsDonutMode === 'hours' ? b.hours - a.hours : b.count - a.count));
  }

  // Evolución de puntuaciones (cuando hay un juego con puntos seleccionado)
  const chronologicalScored = selectedGameObj && selectedGameObj.scoringType === 'points'
    ? [...subset]
        .filter((m) => (m.players || []).some((p) => (!pCtx.allowedKeys || pCtx.allowedKeys.has(normName(p.name))) && p.score !== null && p.score !== undefined && !isNaN(p.score)))
        .sort((a, b) => `${a.date || ''}|${String(a.createdAtMs || 0).padStart(15, '0')}`.localeCompare(`${b.date || ''}|${String(b.createdAtMs || 0).padStart(15, '0')}`))
        .slice(-12)
    : [];
  const showScoreLineChart = chronologicalScored.length >= 2;

  // Vista global: últimos 3 juegos puntuables (o los 3 más jugados) con sus últimas 3 partidas
  let recentPointsGamesData = [];
  let recentPointsLegendPlayers = [];
  if (uiState.statsFilterGame === 'all') {
    const scoredByGame = {};
    subset.forEach((m) => {
      if (getMatchScoringType(m) !== 'points') return;
      const hasScore = (m.players || []).some((p) =>
        (!pCtx.allowedKeys || pCtx.allowedKeys.has(normName(p.name))) &&
        p.score !== null && p.score !== undefined && !isNaN(p.score)
      );
      if (!hasScore) return;
      if (!scoredByGame[m.gameId]) scoredByGame[m.gameId] = [];
      scoredByGame[m.gameId].push(m);
    });

    const sortKeyAsc = (m) => `${String(m.date || '').slice(0, 10)}|${String(Number(m.createdAtMs) || 0).padStart(15, '0')}`;
    const gameBuckets = Object.entries(scoredByGame).map(([gid, list]) => {
      const sortedAsc = [...list].sort((a, b) => sortKeyAsc(a).localeCompare(sortKeyAsc(b)));
      const latestMatch = sortedAsc[sortedAsc.length - 1];
      return {
        game: getGameById(gid),
        totalPlays: list.length,
        latestKey: sortKeyAsc(latestMatch),
        lastThree: sortedAsc.slice(-3),
      };
    });

    if (uiState.statsRecentPointsMode === 'top') {
      gameBuckets.sort((a, b) => (b.totalPlays - a.totalPlays) || b.latestKey.localeCompare(a.latestKey));
    } else {
      gameBuckets.sort((a, b) => b.latestKey.localeCompare(a.latestKey));
    }

    recentPointsGamesData = gameBuckets.slice(0, 3);

    if (pCtx.mode === 'vs') {
      recentPointsLegendPlayers = [pCtx.playerA, pCtx.playerB];
    } else {
      const seenP = new Map();
      recentPointsGamesData.forEach((gb) => {
        gb.lastThree.forEach((m) => {
          (m.players || []).forEach((p) => {
            const nm = String(p.name || '').trim();
            if (!nm) return;
            if (pCtx.allowedKeys && !pCtx.allowedKeys.has(normName(nm))) return;
            if (p.score === null || p.score === undefined || isNaN(p.score)) return;
            const k = normName(nm);
            if (!seenP.has(k)) seenP.set(k, nm);
          });
        });
      });
      recentPointsLegendPlayers = Array.from(seenP.values()).slice(0, 6);
    }
  }

  // Ritmo mensual (últimos 6 meses — limpio sin horas)
  const now = new Date();
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const dt = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
    const label = dt.toLocaleDateString('es-ES', { month: 'short' }).replace('.', '');
    months.push({ key, label, count: 0 });
  }
  subset.forEach((m) => {
    const k = String(m.date || '').slice(0, 7);
    const found = months.find((x) => x.key === k);
    if (found) found.count++;
  });
  const maxMonth = Math.max(1, ...months.map((x) => x.count));

  // Gráfica extra por juego (TFM corporaciones / Formas de victoria / Coop)
  let extraChartConfig = null;
  if (selectedGameObj && selectedGameObj.extraType === 'tfm') {
    const corps = {};
    subset.forEach((m) => {
      (m.players || []).forEach((p) => {
        if (!p.tag) return;
        if (pCtx.allowedKeys && !pCtx.allowedKeys.has(normName(p.name))) return;
        if (!corps[p.tag]) corps[p.tag] = { plays: 0, wins: 0 };
        corps[p.tag].plays++;
        if (p.winner) corps[p.tag].wins++;
      });
    });
    const corpList = Object.entries(corps)
      .sort((a, b) => b[1].wins - a[1].wins || b[1].plays - a[1].plays)
      .slice(0, 8);
    if (corpList.length > 0) {
      extraChartConfig = {
        type: 'tfm',
        title: 'Rendimiento por Corporación',
        labels: corpList.map(([name]) => name),
        wins: corpList.map(([, c]) => c.wins),
        losses: corpList.map(([, c]) => Math.max(0, c.plays - c.wins)),
      };
    }
  } else if (selectedGameObj) {
    const winCounts = {};
    if (Array.isArray(selectedGameObj.winModes)) {
      selectedGameObj.winModes.forEach((w) => { winCounts[w] = 0; });
    }
    let hasAnyWinType = false;
    subset.forEach((m) => {
      const wt = String(m.meta?.winType || '').trim();
      if (wt) {
        winCounts[wt] = (winCounts[wt] || 0) + 1;
        hasAnyWinType = true;
      }
    });
    if (hasAnyWinType) {
      const entries = Object.entries(winCounts).filter(([, v]) => v > 0);
      const palette = [selectedGameObj.color || '#2563EB', '#D9911E', '#7C3AED', '#227554', '#E11D48', '#0284C7', '#475569'];
      extraChartConfig = {
        type: 'win_modes',
        title: `Cómo se gana en ${selectedGameObj.name}`,
        labels: entries.map(([k]) => k),
        values: entries.map(([, v]) => v),
        colors: entries.map((_, idx) => palette[idx % palette.length]),
      };
    } else if (selectedGameObj.extraType === 'last_bullet') {
      const modeCounts = {};
      subset.forEach((m) => {
        const pm = String(m.meta?.playMode || (getMatchScoringType(m) === 'coop' ? 'Cooperativo' : 'PvP')).trim();
        modeCounts[pm] = (modeCounts[pm] || 0) + 1;
      });
      const entries = Object.entries(modeCounts).filter(([, v]) => v > 0);
      if (entries.length > 0) {
        const colorMap = { 'PvP': '#991B1B', 'Cooperativo': '#227554', 'Solitario': '#D9911E' };
        extraChartConfig = {
          type: 'win_modes',
          title: `Modos jugados en ${selectedGameObj.name}`,
          labels: entries.map(([k]) => k),
          values: entries.map(([, v]) => v),
          colors: entries.map(([k]) => colorMap[k] || '#475569'),
        };
      }
    } else if (selectedGameObj.scoringType === 'coop') {
      let wins = 0, losses = 0;
      subset.forEach((m) => {
        if (m.meta?.coopWon) wins++;
        else losses++;
      });
      if (wins + losses > 0) {
        extraChartConfig = {
          type: 'win_modes',
          title: `Resultado en ${selectedGameObj.name}`,
          labels: ['Superado', 'Derrota'],
          values: [wins, losses],
          colors: ['#227554', '#D04E36'],
        };
      }
    }
  }

  // Vista previa compacta de insignias
  const previewBadges = uiState.statsFilterGame === 'all'
    ? badgesData.globalBadges.slice(0, 2)
    : (badgesData.gameSections.find((s) => s.game.id === uiState.statsFilterGame)?.badges || []).slice(0, 2);

  const badgesTeaserHtml = previewBadges.length > 0 ? `
    <div class="space-y-2.5 anim-in">
      <div class="flex items-center justify-between px-0.5">
        <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">${pCtx.mode === 'vs' ? 'Insignias del duelo' : 'Insignias destacadas'}</h3>
        <button type="button" data-action="set-stats-subtab" data-val="badges"
          class="btn-tap text-xs font-bold text-amber-700 dark:text-amber-300 hover:underline">
          Ver todas (${badgesData.totalBadgesCount}) →
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${previewBadges.map((b, i) => renderBadgeCardHtml(b, `prev${i}`)).join('')}
      </div>
    </div>
  ` : '';

  const donutCardHtml = uiState.statsFilterGame === 'all' ? `
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">
            ${pCtx.mode === 'vs' ? (isDirectDuel ? 'Juegos jugados juntos' : 'Distribución comparada') : pCtx.mode === 'single' ? `Juegos de ${esc(pCtx.playerA)}` : 'Distribución de tu ludoteca'}
          </h3>
          <p class="text-[11px] text-inkMuted dark:text-white/55">Toca cualquier segmento para ver el detalle</p>
        </div>
        <div class="seg-control bg-canvas dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12" data-seg-id="donut-mode">
          <span class="seg-thumb seg-thumb-pine"></span>
          <button type="button" data-action="set-stats-donut-mode" data-val="plays" data-seg-active="${uiState.statsDonutMode === 'plays' ? 'true' : 'false'}"
            class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold ${uiState.statsDonutMode === 'plays' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Partidas
          </button>
          <button type="button" data-action="set-stats-donut-mode" data-val="hours" data-seg-active="${uiState.statsDonutMode === 'hours' ? 'true' : 'false'}"
            class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold ${uiState.statsDonutMode === 'hours' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Horas
          </button>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-5">
        <div class="relative w-[196px] h-[196px] shrink-0">
          <canvas id="chart-games-donut"></canvas>
          <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span id="donut-center-val" class="font-display text-2xl font-extrabold text-ink dark:text-white tabular-nums leading-none">
              ${uiState.statsDonutMode === 'hours' ? `${totalHours}h` : totalPlays}
            </span>
            <span id="donut-center-lbl" class="text-[10px] font-extrabold text-ink dark:text-white/90 mt-1 leading-tight line-clamp-2 w-full">
              ${uiState.statsDonutMode === 'hours' ? 'en mesa' : 'partidas'}
            </span>
            <span id="donut-center-sub" class="text-[9.5px] font-semibold text-inkMuted dark:text-white/55 mt-0.5 tabular-nums truncate w-full">
              ${playedGameIds.length} ${playedGameIds.length === 1 ? 'juego' : 'juegos'}
            </span>
          </div>
        </div>

        <div id="donut-legend-list" class="flex-1 w-full space-y-1">
          ${(() => {
            const totalDonutHours = sortedGamesData.reduce((acc, x) => acc + (x.hours || 0), 0) || 1;
            return sortedGamesData.slice(0, 6).map((item, idx) => {
              const sharePct = uiState.statsDonutMode === 'hours'
                ? Math.max(4, Math.round(((item.hours || 0) / totalDonutHours) * 100))
                : Math.max(4, item.pct);
              return `
                <button type="button" data-donut-idx="${idx}" class="donut-legend-row btn-tap">
                  <div class="flex items-center justify-between gap-2 text-xs">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs" style="background:${item.game.color}"></span>
                      <span class="font-bold text-ink dark:text-white truncate">${esc(item.game.name)}</span>
                    </div>
                    <span class="text-inkMuted dark:text-white/60 font-semibold tabular-nums shrink-0">
                      ${uiState.statsDonutMode === 'hours' ? `${item.hours} h` : `${item.count} (${item.pct}%)`}
                    </span>
                  </div>
                  <div class="donut-bar-track">
                    <div class="donut-bar-fill" style="width:${sharePct}%; background:${item.game.color};"></div>
                  </div>
                </button>
              `;
            }).join('');
          })()}
        </div>
      </div>
    </div>
  ` : '';

  const scoreLineCardHtml = showScoreLineChart ? `
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <div class="flex items-center justify-between gap-2 mb-3">
        <div>
          <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Evolución de puntuaciones</h3>
          <p class="text-[11px] text-inkMuted dark:text-white/55">Últimas ${chronologicalScored.length} partidas de ${esc(selectedGameObj.name)}</p>
        </div>
        <span class="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider text-white" style="background:${selectedGameObj.color};">Tendencia</span>
      </div>
      <div class="relative w-full h-[230px]">
        <canvas id="chart-score-evolution"></canvas>
      </div>
    </div>
  ` : '';

  const playersBarCardHtml = leaderboard.length > 0 && pCtx.mode !== 'single' ? `
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <div class="flex items-center justify-between gap-2 mb-3">
        <div>
          <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">
            ${isDirectDuel ? 'Duelos ganados vs Partidas juntos' : 'Victorias vs Partidas por Jugador'}
          </h3>
          <p class="text-[11px] text-inkMuted dark:text-white/55">Comparativa visual del rendimiento en mesa</p>
        </div>
      </div>
      <div class="relative w-full" style="height:${Math.max(145, Math.min(340, leaderboard.slice(0, 8).length * 42 + 48))}px;">
        <canvas id="chart-players-bar"></canvas>
      </div>
    </div>
  ` : '';

  const extraChartCardHtml = extraChartConfig ? `
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <h3 class="font-display text-sm font-extrabold text-ink dark:text-white mb-3">${esc(extraChartConfig.title)}</h3>
      <div class="relative w-full h-[210px]">
        <canvas id="chart-game-extra"></canvas>
      </div>
    </div>
  ` : '';

  // Índice H didáctico (solo cuando vemos toda la ludoteca)
  const hIndexData = uiState.statsFilterGame === 'all' ? computeHIndex(subset) : null;
  const hIndexCardHtml = (() => {
    if (!hIndexData) return '';
    const { h, nextH, playsNeeded, gamesAtNextH, ladderSlots, levelLabel } = hIndexData;
    const totalTargetPlays = nextH * nextH;
    const currentProgressPlays = ladderSlots.reduce((sum, s) => sum + Math.min(s.count, nextH), 0);
    const progressPct = Math.min(100, Math.round((currentProgressPlays / Math.max(1, totalTargetPlays)) * 100));

    // Si la escalera es muy larga (>6), resumimos los completados y mostramos los pendientes clave
    const readySlots = ladderSlots.filter((s) => s.ready);
    const pendingSlots = ladderSlots.filter((s) => !s.ready);
    const compactReadySummary = ladderSlots.length > 6 && readySlots.length > 2;
    const visibleSlots = compactReadySummary ? pendingSlots.slice(0, 5) : ladderSlots;

    return `
      <div class="card-pro rounded-[24px] p-5 anim-in space-y-3.5">
        <!-- Cabecera + Nivel -->
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-inkMuted dark:text-white/55">Equilibrio de Ludoteca · Índice H</div>
            <div class="mt-1 flex items-center gap-2.5 flex-wrap">
              <span class="font-display text-3xl font-extrabold text-ink dark:text-white tabular-nums leading-none">H = ${h}</span>
              <span class="px-2.5 py-1 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 text-[11px] font-extrabold">
                ${esc(levelLabel)}
              </span>
            </div>
          </div>
          <span class="shrink-0 px-2.5 py-1 rounded-xl bg-violet-500/12 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-[11px] font-extrabold tabular-nums">
            Meta H = ${nextH}
          </span>
        </div>

        <!-- Explicación clara en 1 frase -->
        <p class="text-xs leading-relaxed text-inkMuted dark:text-white/70">
          ${h > 0
            ? `Significa que tienes <strong class="text-ink dark:text-white">${h} ${h === 1 ? 'juego distinto' : 'juegos distintos'}</strong> a los que has jugado al menos <strong class="text-ink dark:text-white">${h} ${h === 1 ? 'vez' : 'veces'}</strong> cada uno. Premia jugar variado y repetir tus juegos.`
            : `Mide tu equilibrio entre <strong class="text-ink dark:text-white">variedad y constancia</strong>: registra tu primera partida para subir a <strong class="text-ink dark:text-white">H = 1</strong>.`}
        </p>

        <!-- Escalera visual hacia el siguiente nivel -->
        <div class="p-3.5 rounded-2xl bg-canvas/80 dark:bg-surfaceDarkAlt border border-black/[0.05] dark:border-white/[0.07] space-y-3">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between gap-2 text-[11px]">
              <span class="font-bold text-ink dark:text-white">
                Para subir a H = ${nextH}: <span class="font-medium text-inkMuted dark:text-white/65">${nextH} juegos × ${nextH} partidas</span>
              </span>
              <span class="shrink-0 font-extrabold text-violet-700 dark:text-violet-300 tabular-nums">
                ${playsNeeded === 1 ? 'Falta 1 partida' : `Faltan ${playsNeeded} partidas`}
              </span>
            </div>
            <div class="h-1.5 w-full rounded-full bg-black/[0.07] dark:bg-white/10 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-emeraldBrand to-violet-500 transition-all duration-500"
                style="width:${progressPct}%"></div>
            </div>
          </div>

          ${compactReadySummary ? `
            <div class="px-2.5 py-2 rounded-xl bg-emeraldBrand/10 border border-emeraldBrand/20 text-[11px] font-bold text-emeraldBrand dark:text-emerald-300 flex items-center justify-between gap-2">
              <span>✓ ${readySlots.length} de ${nextH} juegos ya tienen ≥${nextH} partidas</span>
              <span class="tabular-nums opacity-85">Listos</span>
            </div>
          ` : ''}

          <div class="space-y-2">
            ${visibleSlots.map((slot) => {
              const slotPct = Math.min(100, Math.round((slot.count / Math.max(1, slot.target)) * 100));
              const dotColor = slot.game ? slot.game.color : '#94A3B8';
              return `
                <div class="p-2.5 rounded-xl bg-white dark:bg-surfaceDark border border-black/[0.05] dark:border-white/[0.07] space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${dotColor};"></span>
                      <span class="text-xs font-bold ${slot.game ? 'text-ink dark:text-white' : 'text-inkMuted dark:text-white/55 italic'} truncate">
                        ${slot.game ? esc(slot.game.name) : `Juego #${slot.slotNum} (elige cualquiera de tu estantería)`}
                      </span>
                    </div>
                    ${slot.ready ? `
                      <span class="shrink-0 px-2 py-0.5 rounded-lg bg-emeraldBrand/14 text-emeraldBrand dark:text-emerald-300 text-[10.5px] font-extrabold tabular-nums">
                        ✓ ${slot.count} partidas
                      </span>
                    ` : `
                      <span class="shrink-0 px-2 py-0.5 rounded-lg bg-amber-500/14 text-amber-800 dark:text-amber-300 text-[10.5px] font-extrabold tabular-nums">
                        ${slot.count}/${slot.target} · ${slot.missing === 1 ? 'Falta 1' : `Faltan ${slot.missing}`}
                      </span>
                    `}
                  </div>
                  <div class="h-1 w-full rounded-full bg-black/[0.06] dark:bg-white/10 overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500"
                      style="width:${slotPct}%; background:${slot.ready ? '#227554' : dotColor};"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <p class="text-[10.5px] leading-relaxed text-inkMuted dark:text-white/55">
            ${gamesAtNextH > 0
              ? `Solo cuentan las partidas que sumes en los juegos pendientes; jugar más a los que ya tienen <strong class="text-emeraldBrand dark:text-emerald-300">✓</strong> no sube el índice.`
              : `Juega a los juegos de arriba hasta llegar a ${nextH} partidas en cada uno para subir de nivel.`}
          </p>
        </div>
      </div>
    `;
  })();

  // Calendario Heatmap anual (actualización parcial sin reconstruir gráficas)
  const heatmapCardHtml = `
    <div id="stats-heatmap-card" class="card-pro rounded-[24px] p-5 anim-in space-y-3.5">
      ${buildHeatmapCardInnerHtml(subset)}
    </div>
  `;

  // Ranking de "Polvo en la estantería" (actualización parcial sin reconstruir gráficas)
  const dustyInnerHtml = uiState.statsFilterGame === 'all' ? buildShelfDustInnerHtml() : '';
  const shelfDustCardHtml = dustyInnerHtml ? `
    <div id="stats-dusty-card" class="card-pro rounded-[24px] p-5 anim-in space-y-3.5">
      ${dustyInnerHtml}
    </div>
  ` : '';

  const recentPointsCardHtml = uiState.statsFilterGame === 'all' && recentPointsGamesData.length > 0 ? `
    <div class="card-pro rounded-[24px] p-5 anim-in space-y-3.5">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">Últimas 3 partidas · Juegos de puntos</h3>
          <p class="text-[11px] text-inkMuted dark:text-white/55">
            ${uiState.statsRecentPointsMode === 'top' ? 'Comparativa de puntos en tus 3 juegos puntuables más jugados' : 'Evolución de puntos en los últimos 3 juegos puntuables jugados'}
          </p>
        </div>
        <div class="seg-control bg-canvas dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12" data-seg-id="recent-pts">
          <span class="seg-thumb seg-thumb-pine"></span>
          <button type="button" data-action="set-recent-points-mode" data-val="recent" data-seg-active="${uiState.statsRecentPointsMode !== 'top' ? 'true' : 'false'}"
            class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[10.5px] font-bold ${uiState.statsRecentPointsMode !== 'top' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Recientes
          </button>
          <button type="button" data-action="set-recent-points-mode" data-val="top" data-seg-active="${uiState.statsRecentPointsMode === 'top' ? 'true' : 'false'}"
            class="seg-btn btn-tap px-2.5 py-1 rounded-lg text-[10.5px] font-bold ${uiState.statsRecentPointsMode === 'top' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
            Más jugados
          </button>
        </div>
      </div>

      ${recentPointsLegendPlayers.length > 0 ? `
        <div class="flex flex-wrap items-center gap-2 pb-1 border-b border-black/[0.05] dark:border-white/[0.07]">
          ${recentPointsLegendPlayers.map((pName) => `
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-canvas dark:bg-surfaceDarkAlt text-[11px] font-bold text-ink dark:text-white/85">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${getPlayerColor(pName)};"></span>
              <span>${esc(pName)}</span>
            </span>
          `).join('')}
        </div>
      ` : ''}

      <div class="space-y-3">
        ${recentPointsGamesData.map((gb, idx) => {
          const latest = gb.lastThree[gb.lastThree.length - 1];
          return `
            <div class="p-3.5 rounded-2xl bg-canvas/75 dark:bg-surfaceDarkAlt border border-black/[0.05] dark:border-white/[0.07] space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style="background:${gb.game.color}1C; color:${gb.game.color};">
                    ${gameIconSvg(gb.game.icon, 'w-3.5 h-3.5')}
                  </span>
                  <div class="min-w-0">
                    <div class="text-xs font-extrabold text-ink dark:text-white truncate">${esc(gb.game.name)}${gb.game.lowestWins ? ' <span class="text-[10px] font-semibold text-inkMuted">(menor gana)</span>' : ''}</div>
                    <div class="text-[10px] font-semibold text-inkMuted dark:text-white/55 tabular-nums">
                      ${gb.lastThree.length === 1 ? 'Última partida' : `Últimas ${gb.lastThree.length} partidas`} · Últ. ganador: <strong class="text-ink dark:text-white/85">${esc(latest.winnerLabel || '—')}</strong>
                    </div>
                  </div>
                </div>
                <button type="button" data-action="filter-stats-game" data-val="${esc(gb.game.id)}"
                  class="btn-tap shrink-0 px-2 py-1 rounded-lg bg-white dark:bg-surfaceDark border border-black/[0.06] dark:border-white/10 text-[10px] font-bold text-inkMuted dark:text-white/70 hover:text-emeraldBrand">
                  Ver todo →
                </button>
              </div>
              <div class="relative w-full" style="height:135px;">
                <canvas id="chart-recent-pts-${idx}"></canvas>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : '';

  const monthlyCardHtml = `
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <h3 class="font-display text-sm font-extrabold text-ink dark:text-white mb-4">Ritmo mensual (últimos 6 meses)</h3>
      <div class="grid grid-cols-6 gap-2 items-end h-28 pt-2">
        ${months.map((mo) => {
          const hPct = mo.count > 0 ? Math.max(14, Math.round((mo.count / maxMonth) * 100)) : 6;
          return `
            <div class="flex flex-col items-center gap-1.5 h-full justify-end">
              <span class="text-[10px] font-extrabold tabular-nums ${mo.count > 0 ? 'text-ink dark:text-white' : 'text-inkMuted/50'}">${mo.count}</span>
              <div class="w-full max-w-[34px] rounded-t-xl transition-all ${mo.count > 0 ? 'bg-gradient-to-t from-pine to-emeraldBrand dark:from-emeraldBrand dark:to-emerald-400' : 'bg-black/6 dark:bg-white/10'}" style="height:${hPct}%"></div>
              <span class="text-[10px] font-bold uppercase text-inkMuted dark:text-white/55">${mo.label}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Tercer KPI adaptativo según modo (Todos / 1 Jugador / VS), siempre simétrico con Récord
  const recordSecondLine = !recordEntry
    ? ''
    : (uiState.statsFilterGame === 'all'
      ? recordEntry.game
      : (recordEntry.subNote || (recordEntry.date ? formatDisplayDate(recordEntry.date, recordEntry.createdAtMs) : '')));
  const showSecondKpiLine = Boolean(recordSecondLine);
  const thirdKpiHtml = pCtx.mode === 'single' && leaderboard[0] ? (() => {
    const st0 = leaderboard[0];
    const line1 = st0.coopOnly
      ? `${st0.wins} de ${st0.effectivePlays} coop`
      : `${st0.wins} de ${st0.effectivePlays}${st0.coopPlays > 0 ? ` (+${st0.coopPlays} coop)` : ' partidas'}`;
    const line2 = uiState.statsFilterGame !== 'all'
      ? (st0.avg !== null ? `Media: ${st0.avg} pts` : (Number.isFinite(st0.bestScore) ? `${isLowestWinsFilter ? 'Mín' : 'Máx'}. pts: ${st0.bestScore}` : ''))
      : (st0.topWonGame ? `Fuerte: ${st0.topWonGame}` : (st0.favGame ? `Más jugado: ${st0.favGame}` : ''));
    return `
      <div class="card-pro kpi-card-violet p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Victorias</span>
          <span class="w-7 h-7 rounded-xl bg-violet-500/12 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
            ${gameIconSvg('meeple', 'w-3.5 h-3.5')}
          </span>
        </div>
        <div class="font-display text-2xl font-extrabold text-violet-600 dark:text-violet-400 tabular-nums mt-1.5 leading-none">${st0.winRate}%</div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1 truncate tabular-nums">${esc(line1)}</div>
        ${showSecondKpiLine && line2 ? `<div class="text-[10.5px] font-bold text-ink dark:text-white/80 truncate mt-0.5 tabular-nums">${esc(line2)}</div>` : ''}
      </div>
    `;
  })() : pCtx.mode === 'vs' && vsSummary ? (() => {
    const line1 = vsSummary.sharedCompPlays > 0
      ? `Duelo: ${vsSummary.winsA}–${vsSummary.winsB}`
      : (vsSummary.coopShared > 0 ? `Equipo: ${vsSummary.coopSharedWins}/${vsSummary.coopShared}` : 'Sin duelos');
    const line2 = vsSummary.coopShared > 0 && vsSummary.sharedCompPlays > 0
      ? `${vsSummary.sharedCompPlays} duelos · +${vsSummary.coopShared} coop`
      : (vsSummary.ties > 0
        ? `${vsSummary.ties} ${vsSummary.ties === 1 ? 'empate' : 'empates'}`
        : (uiState.statsFilterGame === 'all' && vsSummary.topSharedGame ? `Top: ${vsSummary.topSharedGame}` : `${vsSummary.sharedCompPlays} ${vsSummary.sharedCompPlays === 1 ? 'duelo' : 'duelos'}`));
    return `
      <div class="card-pro kpi-card-violet p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Juntos</span>
          <span class="w-7 h-7 rounded-xl bg-violet-500/12 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
            ${gameIconSvg('meeple', 'w-3.5 h-3.5')}
          </span>
        </div>
        <div class="font-display text-2xl font-extrabold text-violet-600 dark:text-violet-400 tabular-nums mt-1.5 leading-none">${vsSummary.sharedPlays}</div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1 truncate tabular-nums">${esc(line1)}</div>
        ${showSecondKpiLine && line2 ? `<div class="text-[10.5px] font-bold text-ink dark:text-white/80 truncate mt-0.5 tabular-nums">${esc(line2)}</div>` : ''}
      </div>
    `;
  })() : (() => {
    const leader = leaderboard[0];
    const line2 = leader
      ? (Number.isFinite(leader.bestScore)
        ? `${isLowestWinsFilter ? 'Mín' : 'Máx'}. pts: ${leader.bestScore}`
        : `${leader.wins}V · ${leader.winRate}% éxito`)
      : '';
    return `
      <div class="card-pro kpi-card-violet p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Jugadores</span>
          <span class="w-7 h-7 rounded-xl bg-violet-500/12 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
            ${gameIconSvg('meeple', 'w-3.5 h-3.5')}
          </span>
        </div>
        <div class="font-display text-2xl font-extrabold text-violet-600 dark:text-violet-400 tabular-nums mt-1.5 leading-none">${leaderboard.length}</div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1 truncate">${leader ? `Líder: ${esc(leader.name)}` : '—'}</div>
        ${showSecondKpiLine && line2 ? `<div class="text-[10.5px] font-bold text-ink dark:text-white/80 truncate mt-0.5 tabular-nums">${esc(line2)}</div>` : ''}
      </div>
    `;
  })();

  // Cabecera oscura editorial para Todos / 1 Jugador (rompe la monotonía blanca con el mismo nivel visual que el modo VS)
  const statsHeroCardHtml = pCtx.mode === 'vs' ? '' : pCtx.mode === 'single' && leaderboard[0] ? (() => {
    const st0 = leaderboard[0];
    const topGameText = st0.topWonGame ? `Fuerte: ${st0.topWonGame}` : (st0.favGame ? `Más jugado: ${st0.favGame}` : 'En evolución');
    return `
      <div class="stats-hero-dark cover-sheen rounded-[26px] p-4 sm:p-5 text-white anim-in border border-white/10">
        <div class="flex items-center justify-between gap-2 mb-3 relative z-10">
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-2 py-0.5 rounded-lg bg-amber-400/20 border border-amber-300/30 text-[10px] font-extrabold uppercase tracking-widest text-amber-200 shrink-0">
              Perfil en mesa
            </span>
            ${selectedGameObj ? `<span class="text-[11px] font-bold text-white/75 truncate">${esc(selectedGameObj.name)}</span>` : ''}
          </div>
          ${hIndexData ? `
            <span class="px-2.5 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10.5px] font-extrabold text-emerald-200 tabular-nums shrink-0">
              H = ${hIndexData.h} · ${esc(hIndexData.levelLabel)}
            </span>
          ` : ''}
        </div>
        <div class="flex items-center justify-between gap-3 relative z-10">
          <div class="flex items-center gap-3 min-w-0">
            ${renderPlayerAvatarHtml(st0.name, 'w-11 h-11 text-sm ring-2 ring-white/25')}
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 min-w-0">
                <div class="font-display text-lg font-extrabold leading-tight truncate">${esc(st0.name)}</div>
                ${ratingData.byKey[normName(st0.name)] ? renderStreakPillHtml(ratingData.byKey[normName(st0.name)].currentStreak, { onDark: true }) : ''}
              </div>
              <div class="text-[11px] text-white/70 mt-0.5 truncate tabular-nums">
                ${st0.wins}V / ${st0.effectivePlays}P · ${st0.winRate}% éxito${!st0.coopOnly && st0.coopPlays > 0 ? ` · +${st0.coopPlays} coop` : ''}
              </div>
            </div>
          </div>
          ${ratingData.byKey[normName(st0.name)] ? (() => {
            const rSt = ratingData.byKey[normName(st0.name)];
            return `
              <button type="button" data-action="open-player-rating-detail" data-key="${esc(rSt.key)}"
                class="btn-tap px-3.5 py-1.5 rounded-2xl bg-amber-400/15 hover:bg-amber-400/24 border border-amber-300/35 text-center shrink-0"
                title="Ver desglose del rating (${rSt.points} pts)">
                <div class="font-display text-xl font-extrabold text-amber-300 tabular-nums leading-none">${rSt.note}</div>
                <div class="text-[9px] font-bold uppercase tracking-wider text-amber-100/80 mt-0.5">${rSt.rank ? `Nota #${rSt.rank}` : `${rSt.ratedPlays}/3P`}</div>
              </button>
            `;
          })() : `
            <div class="px-3.5 py-1.5 rounded-2xl bg-black/25 border border-white/15 text-center shrink-0">
              <div class="font-display text-xl font-extrabold text-emerald-300 tabular-nums leading-none">${st0.winRate}%</div>
              <div class="text-[9px] font-bold uppercase tracking-wider text-white/55 mt-0.5">Éxito</div>
            </div>
          `}
        </div>
        <div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 text-[11px] text-white/75 relative z-10">
          <span class="truncate">${esc(topGameText)}</span>
          ${recordEntry ? `<span class="shrink-0 tabular-nums font-bold text-amber-200">Récord: ${recordEntry.isSpecial ? esc(recordEntry.display) : `${recordEntry.score} pts`}</span>` : `<span class="shrink-0 tabular-nums font-bold text-emerald-200">${totalHours}h en mesa</span>`}
        </div>
      </div>
    `;
  })() : (() => {
    const leader = leaderboard[0] || null;
    const topPlayed = sortedGamesData[0] || null;
    const leaderOwnRecord = (() => {
      if (!selectedGameObj || !leader) return '';
      if (selectedGameObj.id === 'oceanos_de_papel' && leader.specialRecord) {
        return `Su récord: ${leader.specialRecord}`;
      }
      if (Number.isFinite(leader.bestScore)) {
        return `Su récord: ${leader.bestScore} pts`;
      }
      return '';
    })();
    const leftFooterText = selectedGameObj
      ? (subset[0] ? `Última: ${esc(formatDisplayDate(subset[0].date, subset[0].createdAtMs))}` : `${leaderboard.length} ${leaderboard.length === 1 ? 'jugador' : 'jugadores'}`)
      : (topPlayed ? `Top: <strong class="text-white">${esc(topPlayed.game.name)}</strong> (${topPlayed.count})` : `${playedGameIds.length} ${playedGameIds.length === 1 ? 'juego jugado' : 'juegos jugados'}`);
    const rightFooterText = selectedGameObj
      ? leaderOwnRecord
      : (recordEntry ? (recordEntry.isSpecial ? `Récord: ${recordEntry.display}` : `Récord: ${recordEntry.score} pts`) : '');
    return `
      <div class="stats-hero-dark cover-sheen rounded-[26px] p-4 sm:p-5 text-white anim-in border border-white/10">
        <div class="flex items-center justify-between gap-2 mb-3 relative z-10">
          <div class="flex items-center gap-2 min-w-0">
            <span class="px-2 py-0.5 rounded-lg bg-amber-400/20 border border-amber-300/30 text-[10px] font-extrabold uppercase tracking-widest text-amber-200 shrink-0">
              ${selectedGameObj ? 'Ficha en mesa' : 'Resumen General'}
            </span>
            ${selectedGameObj ? `<span class="text-[11px] font-bold text-white/80 truncate">${esc(selectedGameObj.name)}</span>` : ''}
          </div>
          ${hIndexData ? `
            <span class="px-2.5 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10.5px] font-extrabold text-emerald-200 tabular-nums shrink-0">
              H = ${hIndexData.h} · ${esc(hIndexData.levelLabel)}
            </span>
          ` : `
            <span class="px-2.5 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10.5px] font-extrabold text-white/85 tabular-nums shrink-0">
              ${totalPlays} ${totalPlays === 1 ? 'partida' : 'partidas'}
            </span>
          `}
        </div>
        <div class="flex items-center justify-between gap-3 relative z-10">
          <div class="flex items-center gap-3 min-w-0">
            ${leader ? renderPlayerAvatarHtml(leader.name, 'w-11 h-11 text-sm ring-2 ring-white/25') : `
              <span class="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">${gameIconSvg('crown', 'w-5 h-5')}</span>
            `}
            <div class="min-w-0">
              <div class="text-[10px] font-bold uppercase tracking-wider text-amber-200">Líder en mesa</div>
              <div class="font-display text-lg font-extrabold leading-tight truncate">${leader ? esc(leader.name) : '—'}</div>
              <div class="text-[11px] text-white/70 mt-0.5 truncate tabular-nums">
                ${leader
                  ? (leader.ratingInfo
                      ? `Nota ${leader.ratingInfo.note} · ${leader.wins}V / ${leader.effectivePlays}P`
                      : `${leader.wins}V / ${leader.effectivePlays}P · ${leader.winRate}% éxito`)
                  : 'Sin datos todavía'}
              </div>
            </div>
          </div>
          <div class="px-3.5 py-1.5 rounded-2xl bg-black/25 border border-white/15 text-center shrink-0">
            <div class="font-display text-xl font-extrabold text-amber-300 tabular-nums leading-none">${totalHours}<span class="text-xs font-bold text-white/65 ml-0.5">h</span></div>
            <div class="text-[9px] font-bold uppercase tracking-wider text-white/55 mt-0.5">En mesa</div>
          </div>
        </div>
        <div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 text-[11px] text-white/75 relative z-10">
          <span class="truncate">${leftFooterText}</span>
          ${rightFooterText ? `<span class="shrink-0 tabular-nums font-bold text-amber-200">${esc(rightFooterText)}</span>` : ''}
        </div>
      </div>
    `;
  })();

  container.innerHTML = `
    ${topControlsHtml}

    <!-- Tarjeta protagonista oscura (VS o Resumen editorial) -->
    ${vsDuelCardHtml}
    ${statsHeroCardHtml}

    <!-- 4 KPI Cards con jerarquía sutil -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 stagger-list">
      <div class="card-pro kpi-card-emerald p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Partidas</span>
          <span class="w-7 h-7 rounded-xl bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-400 flex items-center justify-center shrink-0">
            ${gameIconSvg('dice', 'w-3.5 h-3.5')}
          </span>
        </div>
        <div class="font-display text-2xl font-extrabold text-emeraldBrand dark:text-emerald-400 tabular-nums mt-1.5 leading-none">${totalPlays}</div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1 truncate">${selectedGameObj ? `Media ${Math.round(totalMins / Math.max(1, totalPlays))} min` : `${playedGameIds.length} ${playedGameIds.length === 1 ? 'juego' : 'juegos'}`}</div>
      </div>

      <div class="card-pro kpi-card-blue p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">En mesa</span>
          <span class="w-7 h-7 rounded-xl bg-blue-500/12 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          </span>
        </div>
        <div class="font-display text-2xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums mt-1.5 leading-none">${totalHours}<span class="text-sm font-bold ml-0.5 opacity-75">h</span></div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1">${totalMins} min totales</div>
      </div>

      ${thirdKpiHtml}

      <div class="card-pro kpi-card-gold p-3.5 sm:p-4 rounded-[22px] relative overflow-hidden">
        <div class="flex items-center justify-between gap-1">
          <span class="text-[10.5px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/55">Récord</span>
          <span class="w-7 h-7 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            ${gameIconSvg('crown', 'w-3.5 h-3.5')}
          </span>
        </div>
        <div class="font-display ${recordEntry?.isSpecial ? 'text-xl' : 'text-2xl'} font-extrabold text-goldBrand dark:text-amber-400 tabular-nums mt-1.5 leading-none truncate" style="min-height:1.5rem; display:flex; align-items:flex-end;">${recordEntry ? (recordEntry.isSpecial ? esc(recordEntry.display) : recordEntry.score) : '—'}</div>
        <div class="text-[11px] text-inkMuted dark:text-white/55 font-medium mt-1 truncate">${recordEntry ? esc(recordEntry.player) : 'Sin puntos'}</div>
        ${recordSecondLine ? `<div class="text-[10.5px] font-bold text-ink dark:text-white/80 truncate mt-0.5 tabular-nums">${esc(recordSecondLine)}</div>` : ''}
      </div>
    </div>

    <!-- Vitrina destacada de insignias -->
    ${badgesTeaserHtml}

    <!-- Sección de Gráficas Interactivas y Analítica de Jugón -->
    <div class="space-y-4 stagger-list">
      ${donutCardHtml}
      ${hIndexCardHtml}
      ${heatmapCardHtml}
      ${scoreLineCardHtml}
      ${recentPointsCardHtml}
      ${playersBarCardHtml}
      ${extraChartCardHtml}
      ${monthlyCardHtml}
      ${shelfDustCardHtml}
    </div>

    <!-- Ranking Detallado de Jugadores -->
    <div class="card-pro rounded-[24px] p-5 anim-in">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-display text-sm font-extrabold text-ink dark:text-white">
          ${pCtx.mode === 'vs' ? 'Comparativa Detallada' : pCtx.mode === 'single' ? `Resumen de ${esc(pCtx.playerA)}` : 'Clasificación Detallada'}
        </h3>
        <span class="text-[11px] font-semibold text-inkMuted dark:text-white/55">${isDirectDuel ? 'Duelos y % éxito' : (isPureCoopFilter ? 'Victorias y % éxito' : 'Nota y % éxito')}</span>
      </div>
      <div class="hairline-list">
        ${leaderboard.map((st, idx) => `
          <div class="hairline-row">
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-7 h-7 rounded-xl flex items-center justify-center font-display font-extrabold text-xs shrink-0 ${
                  idx === 0
                    ? 'bg-gradient-to-br from-amber-300 to-amber-500 text-[#142620] shadow-xs'
                    : idx === 1
                      ? 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900'
                      : idx === 2
                        ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50'
                        : 'bg-black/[0.06] dark:bg-white/10 text-inkMuted dark:text-white/65'
                }">#${idx + 1}</span>
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5 min-w-0">
                    ${renderPlayerAvatarHtml(st.name, 'w-5 h-5 text-[9px]')}
                    <span class="text-sm font-extrabold text-ink dark:text-white truncate">${esc(st.name)}</span>
                    ${st.ratingInfo && !isDirectDuel ? `<span class="px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold tabular-nums shrink-0">${st.ratingInfo.note}</span>` : ''}
                  </div>
                  <div class="text-[11px] text-inkMuted dark:text-white/55 truncate">
                    ${st.wins}V / ${st.effectivePlays}P${!st.coopOnly && st.coopPlays > 0 ? ` (+${st.coopPlays} coop)` : ''}${st.avg !== null && uiState.statsFilterGame !== 'all' ? ` · Media ${st.avg}` : (st.favGame ? ` · Top: ${esc(st.favGame)}` : '')}
                  </div>
                </div>
              </div>
              <div class="text-right shrink-0">
                <div class="font-display text-base font-extrabold text-emeraldBrand dark:text-emerald-400 tabular-nums">${st.winRate}%</div>
                ${uiState.statsFilterGame !== 'all' ? (
                  selectedGameObj?.id === 'oceanos_de_papel' && st.specialRecord
                    ? `<div class="text-[10px] font-bold text-goldBrand">★ ${esc(st.specialRecord)}${Number.isFinite(st.bestScore) ? ` · ${st.bestScore}` : ''}</div>`
                    : (Number.isFinite(st.bestScore) ? `<div class="text-[10px] text-inkMuted dark:text-white/55">${isLowestWinsFilter ? 'Mín' : 'Máx'} ${st.bestScore}</div>` : '')
                ) : ''}
              </div>
            </div>
            <div class="mt-2 h-1.5 w-full rounded-full bg-black/8 dark:bg-white/10 overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500" style="width:${st.winRate}%; background:${getPlayerColor(st.name)};"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  requestAnimationFrame(syncSegmentedControls);

  // Montar instancias de Chart.js
  mountStatsCharts({
    sortedGamesData,
    chronologicalScored,
    recentPointsGamesData,
    recentPointsLegendPlayers,
    leaderboard,
    extraChartConfig,
    allowedKeys: pCtx.allowedKeys,
    vsNames: pCtx.mode === 'vs' ? [pCtx.playerA, pCtx.playerB] : null,
  });

}

function mountStatsCharts({ sortedGamesData, chronologicalScored, recentPointsGamesData = [], recentPointsLegendPlayers = [], leaderboard, extraChartConfig, allowedKeys = null, vsNames = null }) {
  if (typeof Chart === 'undefined') return;

  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? 'rgba(242, 239, 233, 0.78)' : '#6A655C';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(20, 38, 32, 0.07)';
  const surfaceBg = isDark ? '#131C19' : '#FFFFFF';
  const tooltipBg = isDark ? '#0D1311' : '#142620';

  const commonTooltip = {
    backgroundColor: tooltipBg,
    titleColor: '#FFFFFF',
    bodyColor: '#F6F3EC',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    padding: 10,
    cornerRadius: 12,
    titleFont: { family: 'Plus Jakarta Sans, sans-serif', weight: '700', size: 12 },
    bodyFont: { family: 'Inter, sans-serif', size: 12 },
  };

  // 1. Donut de juegos (anillo 100% circular sin tooltip superpuesto; detalle integrado en el centro)
  const donutCanvas = document.getElementById('chart-games-donut');
  if (donutCanvas && sortedGamesData.length > 0) {
    const isHours = uiState.statsDonutMode === 'hours';
    const donutValues = sortedGamesData.map((d) => (isHours ? d.hours : d.count));
    const activeSlices = donutValues.filter((v) => v > 0).length;
    const baseColors = sortedGamesData.map((d) => d.game.color);
    const centerValEl = document.getElementById('donut-center-val');
    const centerLblEl = document.getElementById('donut-center-lbl');
    const centerSubEl = document.getElementById('donut-center-sub');
    const defaultCenterVal = centerValEl ? centerValEl.textContent.trim() : '';
    const defaultCenterLbl = centerLblEl ? centerLblEl.textContent.trim() : '';
    const defaultCenterSub = centerSubEl ? centerSubEl.textContent.trim() : '';
    let selectedDonutIdx = -1;

    const applyDonutSelection = (idx, chartRef) => {
      selectedDonutIdx = (idx === selectedDonutIdx || idx < 0 || idx >= sortedGamesData.length) ? -1 : idx;
      document.querySelectorAll('#donut-legend-list [data-donut-idx]').forEach((row) => {
        row.classList.toggle('is-highlighted', Number(row.dataset.donutIdx) === selectedDonutIdx);
      });
      if (centerValEl && centerLblEl) {
        if (selectedDonutIdx >= 0) {
          const it = sortedGamesData[selectedDonutIdx];
          centerValEl.textContent = isHours ? `${it.hours}h` : `${it.pct}%`;
          centerLblEl.textContent = it.game.name;
          if (centerSubEl) {
            centerSubEl.textContent = isHours
              ? `${it.count} ${it.count === 1 ? 'partida' : 'partidas'} · ${it.pct}%`
              : `${it.count} ${it.count === 1 ? 'partida' : 'partidas'}`;
          }
        } else {
          centerValEl.textContent = defaultCenterVal;
          centerLblEl.textContent = defaultCenterLbl;
          if (centerSubEl) centerSubEl.textContent = defaultCenterSub;
        }
      }
      if (chartRef) {
        const ds = chartRef.data.datasets[0];
        ds.backgroundColor = selectedDonutIdx >= 0
          ? baseColors.map((col, i) => (i === selectedDonutIdx ? col : `${col}42`))
          : [...baseColors];
        ds.offset = selectedDonutIdx >= 0 && activeSlices > 1
          ? baseColors.map((_, i) => (i === selectedDonutIdx ? 5 : 0))
          : 0;
        chartRef.setActiveElements(selectedDonutIdx >= 0 ? [{ datasetIndex: 0, index: selectedDonutIdx }] : []);
        chartRef.update('none');
      }
    };

    const ch = new Chart(donutCanvas, {
      type: 'doughnut',
      data: {
        labels: sortedGamesData.map((d) => d.game.name),
        datasets: [{
          data: donutValues,
          backgroundColor: [...baseColors],
          borderColor: 'transparent',
          borderWidth: 0,
          hoverBorderWidth: 0,
          spacing: 0,
          offset: 0,
          hoverOffset: 0,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        layout: { padding: 8 },
        cutout: '70%',
        onClick: (evt, elems) => {
          if (elems && elems.length > 0) {
            applyDonutSelection(elems[0].index, ch);
          } else {
            applyDonutSelection(-1, ch);
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
    activeChartInstances.push(ch);

    const legendList = document.getElementById('donut-legend-list');
    if (legendList) {
      legendList.onclick = (ev) => {
        const btn = ev.target.closest('[data-donut-idx]');
        if (!btn) return;
        applyDonutSelection(Number(btn.dataset.donutIdx), ch);
      };
    }
  }

  // 2. Línea de evolución de puntuaciones (solo jugadores del filtro si aplica)
  const evoCanvas = document.getElementById('chart-score-evolution');
  if (evoCanvas && chronologicalScored.length >= 2) {
    const labels = chronologicalScored.map((m, idx) => {
      const shortDate = m.date && m.date.length >= 10 ? `${m.date.slice(8, 10)}/${m.date.slice(5, 7)}` : `#${idx + 1}`;
      return shortDate;
    });

    let playerNames;
    if (vsNames && vsNames.length === 2) {
      playerNames = vsNames;
    } else {
      playerNames = [...new Set(
        chronologicalScored.flatMap((m) =>
          (m.players || [])
            .map((p) => (p.name || '').trim())
            .filter((n) => n && (!allowedKeys || allowedKeys.has(normName(n))))
        )
      )].slice(0, 6);
    }

    const datasets = playerNames.map((pName) => {
      const col = getPlayerColor(pName);
      const pKey = normName(pName);
      return {
        label: pName,
        data: chronologicalScored.map((m) => {
          const found = (m.players || []).find((p) => normName(p.name) === pKey);
          return found && found.score !== null && found.score !== undefined && !isNaN(found.score)
            ? Number(found.score)
            : null;
        }),
        borderColor: col,
        backgroundColor: col + '22',
        borderWidth: 2.6,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: surfaceBg,
        pointBorderColor: col,
        pointBorderWidth: 2.2,
        tension: 0.32,
        spanGaps: true,
      };
    });

    const ch = new Chart(evoCanvas, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              usePointStyle: true,
              boxWidth: 8,
              padding: 14,
              font: { family: 'Inter, sans-serif', size: 11, weight: '600' },
            },
          },
          tooltip: {
            ...commonTooltip,
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} pts`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor, font: { size: 11, weight: '600' } },
          },
          y: {
            beginAtZero: false,
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 11 } },
          },
        },
      },
    });
    activeChartInstances.push(ch);
  }

  // 2B. Mini gráficas de evolución (últimas 3 partidas de los últimos 3 juegos de puntos en vista global)
  if (Array.isArray(recentPointsGamesData) && recentPointsGamesData.length > 0) {
    recentPointsGamesData.forEach((gb, gIdx) => {
      const canvasEl = document.getElementById(`chart-recent-pts-${gIdx}`);
      if (!canvasEl) return;

      const matches = gb.lastThree || [];
      const labels = matches.map((m, idx) =>
        m.date && m.date.length >= 10 ? `${m.date.slice(8, 10)}/${m.date.slice(5, 7)}` : `#${idx + 1}`
      );

      // Jugadores que realmente puntuaron en estas partidas de este juego
      const gamePlayers = recentPointsLegendPlayers.filter((pName) => {
        const pk = normName(pName);
        return matches.some((m) =>
          (m.players || []).some((p) => normName(p.name) === pk && p.score !== null && p.score !== undefined && !isNaN(p.score))
        );
      });
      if (gamePlayers.length === 0) return;

      const isSingleMatch = matches.length === 1;

      if (isSingleMatch) {
        const m = matches[0];
        const scores = gamePlayers.map((pName) => {
          const found = (m.players || []).find((p) => normName(p.name) === normName(pName));
          return found && found.score !== null && found.score !== undefined && !isNaN(found.score) ? Number(found.score) : 0;
        });
        const ch = new Chart(canvasEl, {
          type: 'bar',
          data: {
            labels: gamePlayers,
            datasets: [{
              label: labels[0],
              data: scores,
              backgroundColor: gamePlayers.map((n) => getPlayerColor(n)),
              borderRadius: 8,
              maxBarThickness: 36,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                ...commonTooltip,
                callbacks: {
                  title: (items) => `${gb.game.name} · ${labels[0]}`,
                  label: (ctx) => ` ${ctx.label}: ${ctx.parsed.y} pts`,
                },
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: textColor, font: { size: 10.5, weight: '700' } },
              },
              y: {
                beginAtZero: true,
                grid: { color: gridColor },
                ticks: { color: textColor, font: { size: 10 }, maxTicksLimit: 4 },
              },
            },
          },
        });
        activeChartInstances.push(ch);
      } else {
        const datasets = gamePlayers.map((pName) => {
          const col = getPlayerColor(pName);
          const pk = normName(pName);
          return {
            label: pName,
            data: matches.map((m) => {
              const found = (m.players || []).find((p) => normName(p.name) === pk);
              return found && found.score !== null && found.score !== undefined && !isNaN(found.score)
                ? Number(found.score)
                : null;
            }),
            borderColor: col,
            backgroundColor: col + '22',
            borderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: surfaceBg,
            pointBorderColor: col,
            pointBorderWidth: 2.2,
            tension: 0.28,
            spanGaps: true,
          };
        });

        const ch = new Chart(canvasEl, {
          type: 'line',
          data: { labels, datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                ...commonTooltip,
                callbacks: {
                  title: (items) => `${gb.game.name} · ${items[0]?.label || ''}`,
                  label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} pts`,
                },
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: textColor, font: { size: 10.5, weight: '600' } },
              },
              y: {
                beginAtZero: false,
                grid: { color: gridColor },
                ticks: { color: textColor, font: { size: 10 }, maxTicksLimit: 4 },
              },
            },
          },
        });
        activeChartInstances.push(ch);
      }
    });
  }

  // 3. Barras horizontales apiladas: Victorias vs Otras partidas por jugador
  const plCanvas = document.getElementById('chart-players-bar');
  if (plCanvas && leaderboard.length > 0) {
    const topPl = leaderboard.slice(0, 8);
    const ch = new Chart(plCanvas, {
      type: 'bar',
      data: {
        labels: topPl.map((p) => p.name),
        datasets: [
          {
            label: 'Victorias',
            data: topPl.map((p) => p.wins),
            backgroundColor: topPl.map((p) => getPlayerColor(p.name)),
            borderRadius: 6,
            barThickness: 18,
          },
          {
            label: 'Otras partidas',
            data: topPl.map((p) => Math.max(0, (p.effectivePlays ?? p.plays) - p.wins)),
            backgroundColor: isDark ? 'rgba(255,255,255,0.16)' : '#E5DEC9',
            borderRadius: 6,
            barThickness: 18,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              usePointStyle: true,
              boxWidth: 8,
              padding: 12,
              font: { family: 'Inter, sans-serif', size: 11, weight: '600' },
            },
          },
          tooltip: {
            ...commonTooltip,
            callbacks: {
              afterBody: (items) => {
                const idx = items[0]?.dataIndex;
                if (idx === undefined) return '';
                const st = topPl[idx];
                return `Tasa de victoria: ${st.winRate}% (${st.wins}/${st.effectivePlays ?? st.plays})`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            grid: { color: gridColor },
            ticks: { color: textColor, precision: 0, font: { size: 11 } },
          },
          y: {
            stacked: true,
            grid: { display: false },
            ticks: { color: textColor, font: { size: 12, weight: '700' } },
          },
        },
      },
    });
    activeChartInstances.push(ch);
  }

  // 4. Gráfica extra por juego (Splendor Duel / LOTR Duel / Terraforming Mars)
  const extraCanvas = document.getElementById('chart-game-extra');
  if (extraCanvas && extraChartConfig) {
    if (extraChartConfig.type === 'win_modes' || extraChartConfig.type === 'splendor' || extraChartConfig.type === 'lotr_duel') {
      const activeExtraSlices = extraChartConfig.values.filter((v) => v > 0).length;
      const ch = new Chart(extraCanvas, {
        type: 'doughnut',
        data: {
          labels: extraChartConfig.labels,
          datasets: [{
            data: extraChartConfig.values,
            backgroundColor: extraChartConfig.colors,
            borderColor: 'transparent',
            borderWidth: 0,
            hoverBorderWidth: 0,
            spacing: 0,
            hoverOffset: activeExtraSlices > 1 ? 4 : 0,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '58%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, usePointStyle: true, padding: 14, font: { size: 11, weight: '600' } },
            },
            tooltip: commonTooltip,
          },
        },
      });
      activeChartInstances.push(ch);
    } else if (extraChartConfig.type === 'tfm') {
      const ch = new Chart(extraCanvas, {
        type: 'bar',
        data: {
          labels: extraChartConfig.labels,
          datasets: [
            { label: 'Victorias', data: extraChartConfig.wins, backgroundColor: '#C84B31', borderRadius: 6, barThickness: 16 },
            { label: 'Otras', data: extraChartConfig.losses, backgroundColor: isDark ? 'rgba(255,255,255,0.16)' : '#E5DEC9', borderRadius: 6, barThickness: 16 },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: textColor, usePointStyle: true, font: { size: 11, weight: '600' } } },
            tooltip: commonTooltip,
          },
          scales: {
            x: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor, precision: 0 } },
            y: { stacked: true, grid: { display: false }, ticks: { color: textColor, font: { size: 11, weight: '700' } } },
          },
        },
      });
      activeChartInstances.push(ch);
    }
  }
}

// =========================================================================
// 13. TAB 4: LUDOTECA (ESTANTERÍA VISUAL + AÑADIR JUEGOS)
// =========================================================================
function renderShelfTab() {
  const container = document.getElementById('view-shelf');
  const shelfProfiles = getShelfProfileCandidates();
  const isHome = isShelfHomeMode();
  const activeProfile = getActiveShelfProfile();

  // Precalcula métricas por juego (Home = resumen general con nota promedio; Perfil = filtrado por persona)
  const enriched = games.map((g, origIdx) => {
    const gMatches = isHome
      ? matchHistory.filter((m) => m.gameId === g.id)
      : matchHistory.filter((m) =>
          m.gameId === g.id
          && (m.players || []).some((p) => normName(p.name) === activeProfile.key)
        );
    const playCount = gMatches.length;
    const lastMatch = gMatches[0] || null;
    let highScore = null;
    let hasFourMermaids = false;
    gMatches.forEach((m) => {
      if (g.id === 'oceanos_de_papel' && isFourMermaidsMatch(m)) {
        if (isHome) {
          if ((m.players || []).some((p) => p.winner)) hasFourMermaids = true;
        } else {
          const me = (m.players || []).find((p) => normName(p.name) === activeProfile.key);
          if (me && me.winner) hasFourMermaids = true;
        }
      }
      if (isHome) {
        if (m.topScore !== null && m.topScore !== undefined && !isNaN(m.topScore)) {
          const sc = Number(m.topScore);
          if (highScore === null || (g.lowestWins ? sc < highScore : sc > highScore)) {
            highScore = sc;
          }
        }
      } else {
        const me = (m.players || []).find((p) => normName(p.name) === activeProfile.key);
        if (me && me.score !== null && me.score !== undefined && !isNaN(me.score)) {
          const sc = Number(me.score);
          if (highScore === null || (g.lowestWins ? sc < highScore : sc > highScore)) {
            highScore = sc;
          }
        }
      }
    });
    const raters = shelfProfiles
      .map((sp) => ({ key: sp.key, name: sp.name, color: sp.color, rating: getGameRatingFor(g, sp.key) }))
      .filter((r) => r.rating > 0);
    const ratingSpread = raters.length >= 2
      ? Number((Math.max(...raters.map((r) => r.rating)) - Math.min(...raters.map((r) => r.rating))).toFixed(1))
      : null;

    const avgInfo = isHome ? getGameAverageRating(g) : null;
    const rating = isHome ? avgInfo.avg : getGameRatingFor(g, activeProfile.key);
    const ratingLabel = isHome
      ? (avgInfo.count > 0 ? formatAverageRating(avgInfo.avg) : '')
      : (rating ? formatStarRating(rating) : '');
    const ratingTitle = isHome && raters.length > 0
      ? raters.map((r) => `${r.name} ★${formatStarRating(r.rating)}`).join(' · ')
      : '';
    const ratingCount = isHome ? avgInfo.count : (rating > 0 ? 1 : 0);
    const favorite = isHome ? isGameFavoriteByAny(g) : isGameFavoriteFor(g, activeProfile.key);
    return { g, origIdx, playCount, lastMatch, highScore, hasFourMermaids, rating, ratingCount, ratingLabel, ratingTitle, favorite, raters, ratingSpread };
  });

  const sharedRatedCount = enriched.filter((x) => x.ratingSpread !== null).length;
  if (uiState.shelfSort === 'disagreement' && (!isHome || sharedRatedCount === 0)) {
    uiState.shelfSort = 'default';
  }

  const q = (uiState.shelfSearch || '').trim().toLowerCase();
  let list = enriched.filter(({ g, favorite, ratingSpread }) => {
    if (uiState.shelfSort === 'calc' && !g.quickCalc) return false;
    if (uiState.shelfSort === 'favorites' && !favorite) return false;
    if (uiState.shelfSort === 'disagreement' && ratingSpread === null) return false;
    if (!q) return true;
    return g.name.toLowerCase().includes(q)
      || (g.tagline || '').toLowerCase().includes(q)
      || (g.rulesNotes || '').toLowerCase().includes(q);
  });

  if (uiState.shelfSort === 'most_played') {
    list.sort((a, b) => (b.playCount - a.playCount) || a.g.name.localeCompare(b.g.name));
  } else if (uiState.shelfSort === 'az') {
    list.sort((a, b) => a.g.name.localeCompare(b.g.name, 'es'));
  } else if (uiState.shelfSort === 'rating') {
    list.sort((a, b) => (b.rating - a.rating) || (b.playCount - a.playCount));
  } else if (uiState.shelfSort === 'favorites') {
    list.sort((a, b) => (b.rating - a.rating) || (b.playCount - a.playCount));
  } else if (uiState.shelfSort === 'disagreement') {
    list.sort((a, b) => ((b.ratingSpread ?? -1) - (a.ratingSpread ?? -1)) || (b.rating - a.rating) || a.g.name.localeCompare(b.g.name, 'es'));
  }

  const cards = list.length > 0 ? list.map(({ g, playCount, lastMatch, highScore, hasFourMermaids, ratingLabel, ratingTitle, favorite, raters, ratingSpread }) => `
      <article class="card-pro rounded-[24px] overflow-hidden flex flex-col anim-in">
        <div class="cover-sheen p-4 text-white" style="background: linear-gradient(135deg, ${g.color}, ${g.color2 || g.color});">
          <div class="cover-watermark">${gameIconSvg(g.icon, 'w-24 h-24')}</div>
          <div class="flex items-start justify-between gap-2 relative z-10">
            <div class="w-11 h-11 rounded-2xl bg-white/18 border border-white/25 flex items-center justify-center shrink-0 shadow-sm backdrop-blur-xs">
              ${gameIconSvg(g.icon, 'w-6 h-6')}
            </div>
            <div class="flex items-center gap-1">
              <button type="button" data-action="open-quick-rate" data-game-id="${esc(g.id)}"
                class="btn-tap px-2 py-1 rounded-full text-[10.5px] font-extrabold tabular-nums transition-all ${
                  ratingLabel
                    ? 'bg-amber-400/24 hover:bg-amber-400/35 border border-amber-300/40 text-amber-100'
                    : 'bg-white/14 hover:bg-white/25 border border-white/20 text-white/85'
                }"
                title="${ratingLabel ? (ratingTitle || 'Toca para cambiar valoración') : 'Toca para puntuar este juego'}">
                ${ratingLabel ? `★ ${ratingLabel}` : '☆ Puntuar'}
              </button>
              <span class="px-2.5 py-1 rounded-full bg-black/24 border border-white/15 text-[11px] font-extrabold tabular-nums">
                ${playCount} p.
              </span>
              <button type="button" data-action="${isHome ? 'open-game-sheet' : 'toggle-favorite-game'}" data-game-id="${esc(g.id)}"
                class="btn-tap w-7 h-7 rounded-full bg-black/24 hover:bg-black/40 border border-white/15 flex items-center justify-center ${favorite ? 'text-amber-300' : 'text-white/75'}"
                title="${isHome ? 'Ver o editar favoritos y valoraciones por perfil' : (favorite ? `Quitar de favoritos (${esc(activeProfile.name)})` : `Marcar favorito (${esc(activeProfile.name)})`)}" aria-label="Favorito ${esc(g.name)}">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="${favorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
              <button type="button" data-action="open-edit-game" data-game-id="${esc(g.id)}"
                class="btn-tap w-7 h-7 rounded-full bg-black/24 hover:bg-black/40 border border-white/15 text-white flex items-center justify-center"
                title="Editar juego" aria-label="Editar ${esc(g.name)}">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                </svg>
              </button>
              <button type="button" data-action="confirm-delete-game" data-game-id="${esc(g.id)}"
                class="btn-tap w-7 h-7 rounded-full bg-black/24 hover:bg-coralBrand border border-white/15 text-white flex items-center justify-center transition-colors"
                title="Eliminar juego" aria-label="Eliminar ${esc(g.name)}">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>
          <h3 class="font-display text-base font-extrabold mt-3.5 leading-tight relative z-10">${esc(g.name)}</h3>
          <p class="text-[11px] text-white/82 mt-0.5 relative z-10 truncate">${esc(g.tagline || '')} · ${g.minPlayers || 1}${g.maxPlayers && g.maxPlayers !== (g.minPlayers || 1) ? `–${g.maxPlayers}` : ''} jug · ${g.defaultDuration || 30} min</p>
        </div>

        <div class="p-3.5 flex-1 flex flex-col justify-between gap-3">
          ${lastMatch ? `
            <div class="shelf-stat-strip">
              <div class="min-w-0">
                <div class="text-[10px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/45">Última</div>
                <div class="text-xs font-extrabold text-ink dark:text-white truncate mt-0.5">${esc(formatDisplayDate(lastMatch.date, lastMatch.createdAtMs))}</div>
              </div>
              <div class="min-w-0">
                <div class="text-[10px] font-bold uppercase tracking-wider text-inkMuted dark:text-white/45">${hasFourMermaids || highScore !== null ? 'Récord' : 'Últ. ganador'}</div>
                <div class="text-xs font-extrabold ${hasFourMermaids || highScore !== null ? 'text-goldBrand tabular-nums' : 'text-ink dark:text-white'} truncate mt-0.5">${hasFourMermaids ? '4 Sirenas' : (highScore !== null ? `${highScore} pts` : esc(lastMatch.winnerLabel))}</div>
              </div>
            </div>
          ` : `
            <div class="py-2 text-xs text-inkMuted dark:text-white/50 italic">
              ${isHome ? 'Sin partidas registradas todavía' : `Sin partidas de ${esc(activeProfile.name)} todavía`}
            </div>
          `}

          ${isHome && uiState.shelfSort === 'disagreement' && raters.length >= 2 ? `
            <div class="disagree-strip">
              <div class="flex flex-wrap items-center gap-2 min-w-0 text-[11px] font-semibold text-ink dark:text-white/85 tabular-nums">
                ${raters.map((r) => `
                  <span class="inline-flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full shrink-0" style="background:${r.color};"></span>
                    <span>${esc(r.name)}</span>
                    <strong class="text-goldBrand dark:text-amber-300">★${formatStarRating(r.rating)}</strong>
                  </span>
                `).join('')}
              </div>
              <span class="px-2 py-0.5 rounded-lg text-[10px] font-extrabold tabular-nums shrink-0 ${
                ratingSpread === 0
                  ? 'bg-emeraldBrand/14 text-emeraldBrand dark:text-emerald-300'
                  : ratingSpread >= 1.5
                    ? 'bg-coralBrand/14 text-coralBrand'
                    : 'bg-amber-500/15 text-amber-800 dark:text-amber-300'
              }">
                ${ratingSpread === 0 ? 'Acuerdo' : `Δ ${ratingSpread.toFixed(1)}`}
              </span>
            </div>
          ` : ''}

          <div class="flex items-center gap-1.5">
            <button type="button" data-action="quick-log-game" data-game-id="${esc(g.id)}"
              class="btn-tap flex-1 py-2 px-3 rounded-xl bg-canvas dark:bg-surfaceDarkAlt hover:bg-pine hover:text-white dark:hover:bg-emeraldBrand text-ink dark:text-white text-xs font-bold border border-black/[0.07] dark:border-white/10 transition-colors">
              + Registrar
            </button>
            <button type="button" data-action="open-game-sheet" data-game-id="${esc(g.id)}"
              class="btn-tap py-2 px-2.5 rounded-xl bg-canvas dark:bg-surfaceDarkAlt hover:border-emeraldBrand text-ink dark:text-white text-xs font-bold border border-black/[0.07] dark:border-white/10 inline-flex items-center gap-1"
              title="Chuleta de reglas y valoración">
              <svg class="w-3.5 h-3.5 text-emeraldBrand dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              <span>Reglas</span>
            </button>
            ${g.quickCalc ? `
              <button type="button" data-action="open-quick-calc-for" data-game-id="${esc(g.id)}" data-calc="${g.quickCalc}"
                class="btn-tap py-2 px-2.5 rounded-xl text-xs font-bold text-white shadow-xs" style="background: linear-gradient(135deg, ${g.color}, ${g.color2 || g.color});" title="Abrir marcador en vivo">
                Marcador
              </button>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('') : `
      <div class="col-span-full card-pro rounded-[24px] border-dashed p-8 text-center">
        <p class="text-xs font-semibold text-inkMuted dark:text-white/60">
          ${uiState.shelfSort === 'favorites' && !q ? (isHome ? 'Nadie ha marcado favoritos ★ todavía' : `${esc(activeProfile.name)} aún no ha marcado favoritos ★`) : `No hay juegos que coincidan con "${esc(uiState.shelfSearch)}"`}
        </p>
      </div>
    `;

  const deletedDefaultsCount = DEFAULT_GAMES.filter((d) => deletedGameIds.includes(d.id) && !games.some((g) => g.id === d.id)).length;
  const favTotal = games.filter((g) => (isHome ? isGameFavoriteByAny(g) : isGameFavoriteFor(g, activeProfile.key))).length;
  const sortOpts = [
    { val: 'default', label: 'Colección' },
    { val: 'favorites', label: `★ Favoritos${favTotal ? ` (${favTotal})` : ''}` },
    { val: 'rating', label: 'Mejor nota' },
    ...(isHome && sharedRatedCount > 0 ? [{ val: 'disagreement', label: 'Discrepancia' }] : []),
    { val: 'most_played', label: 'Más jugados' },
    { val: 'az', label: 'A–Z' },
    { val: 'calc', label: 'Con marcador' },
  ];

  const top3Rated = enriched
    .filter((x) => x.rating > 0)
    .sort((a, b) =>
      (b.rating - a.rating)
      || (isHome ? (b.ratingCount - a.ratingCount) : 0)
      || ((b.favorite ? 1 : 0) - (a.favorite ? 1 : 0))
      || (b.playCount - a.playCount)
      || a.g.name.localeCompare(b.g.name, 'es')
    )
    .slice(0, 3);

  const ratedTotal = enriched.filter((x) => x.rating > 0).length;
  const playedTotal = enriched.filter((x) => x.playCount > 0).length;

  const miniTop3Html = top3Rated.length > 0 ? `
    <div class="shelf-top3-card flex-1 min-w-0" style="max-width: 236px;">
      <div class="relative z-10 flex items-center justify-between gap-2 px-1 pb-1 mb-1 border-b border-white/10">
        <span class="inline-flex items-center gap-1 text-[8.5px] font-extrabold uppercase tracking-[0.14em] text-amber-200 leading-none">
          ${gameIconSvg('crown', 'w-2.5 h-2.5 text-amber-300 shrink-0')}
          <span>Podio</span>
        </span>
        <span class="text-[8.5px] font-bold uppercase tracking-wider text-white/55 truncate leading-none">
          ${isHome ? 'Media' : esc(activeProfile.name)}
        </span>
      </div>
      <div class="flex flex-col" style="gap: 2.5px;">
        ${top3Rated.map((item, idx) => `
          <button type="button" data-action="open-game-sheet" data-game-id="${esc(item.g.id)}"
            class="shelf-top3-row btn-tap ${idx === 0 ? 'is-first' : ''}"
            title="${esc(item.g.name)} · ★ ${item.ratingLabel}">
            <span class="flex items-center gap-1 min-w-0">
              <span class="shelf-top3-rank is-${idx + 1}">${idx + 1}</span>
              <span class="shelf-top3-icon" style="background: linear-gradient(145deg, ${item.g.color}, ${item.g.color2 || item.g.color});">
                ${gameIconSvg(item.g.icon, 'w-2.5 h-2.5')}
              </span>
              <span class="text-[10.5px] ${idx === 0 ? 'font-extrabold text-white' : 'font-semibold text-white/85'} truncate leading-tight">${esc(getCompactGameName(item.g))}</span>
            </span>
            <span class="shelf-top3-score ${idx === 0 ? 'is-first' : ''}">★${item.ratingLabel}</span>
          </button>
        `).join('')}
      </div>
    </div>
  ` : `
    <div class="shelf-top3-card px-3 py-2 text-right shrink-0">
      <div class="relative z-10 inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-amber-200 leading-none">
        ${gameIconSvg('crown', 'w-2.5 h-2.5 text-amber-300 shrink-0')}
        <span>Podio</span>
      </div>
      <div class="relative z-10 text-[10.5px] font-medium text-white/60 mt-1 leading-tight">Sin notas aún</div>
    </div>
  `;

  container.innerHTML = `
    <!-- Selector de vista de Ludoteca (Inicio promedio general + perfiles individuales) -->
    <div class="scroll-strip no-scrollbar">
      <button type="button" data-action="set-shelf-profile" data-key="${SHELF_HOME_KEY}"
        class="profile-chip is-icon-only btn-tap shrink-0 ${isHome ? 'is-active' : ''}"
        title="Vista general (promedio de todos)" aria-label="Inicio general de Ludoteca">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5"/>
        </svg>
      </button>
      ${shelfProfiles.map((prof) => {
        const isAct = !isHome && prof.key === activeProfile.key;
        const favBadge = prof.favCount > 0
          ? `<span class="inline-flex items-center gap-0.5 text-[10px] font-extrabold tabular-nums ${isAct ? 'text-amber-300' : 'text-inkMuted dark:text-white/60'}" title="${prof.favCount} ${prof.favCount === 1 ? 'juego favorito' : 'juegos favoritos'}"><span class="${isAct ? 'text-amber-300' : 'text-goldBrand'}">★</span>${prof.favCount}</span>`
          : '';
        return `
          <button type="button" data-action="set-shelf-profile" data-key="${esc(prof.key)}"
            class="profile-chip btn-tap shrink-0 ${isAct ? 'is-active' : ''}">
            ${renderPlayerAvatarHtml(prof.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
            <span>${esc(prof.name)}</span>
            ${favBadge}
          </button>
        `;
      }).join('')}
      <button type="button" data-action="open-player-profiles"
        class="pill-chip btn-tap shrink-0 w-8 h-8 rounded-full inline-flex items-center justify-center text-inkMuted dark:text-white/70 hover:text-emeraldBrand"
        title="Añadir o editar perfiles" aria-label="Gestionar perfiles">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>

    <!-- Resumen de Ludoteca + Mini Podio Top 3 -->
    <div class="flex items-center justify-between gap-3 px-0.5">
      <div class="min-w-0">
        <h2 class="font-display text-base font-extrabold text-ink dark:text-white leading-tight truncate">Tu Ludoteca (${games.length})</h2>
        <p class="text-xs text-inkMuted dark:text-white/55 mt-0.5 truncate">${isHome ? 'Promedio general' : `Perfil de <strong class="text-ink dark:text-white">${esc(activeProfile.name)}</strong>`}</p>
        <p class="text-[10.5px] font-semibold text-emeraldBrand dark:text-emerald-400 mt-1 tabular-nums leading-tight truncate">${ratedTotal} ${ratedTotal === 1 ? 'valorado' : 'valorados'} · ${playedTotal} ${playedTotal === 1 ? 'jugado' : 'jugados'}</p>
      </div>
      ${miniTop3Html}
    </div>

    <div class="space-y-2.5">
      <div class="relative">
        <svg class="w-4 h-4 text-inkMuted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="shelf-search-input" type="search" value="${esc(uiState.shelfSearch)}" placeholder="Buscar por título o regla..."
          class="w-full h-10 pl-10 pr-4 card-pro focus:border-emeraldBrand rounded-2xl text-xs sm:text-sm text-ink dark:text-white outline-none" />
      </div>

      <div class="scroll-strip no-scrollbar">
        ${sortOpts.map((o) => `
          <button type="button" data-action="set-shelf-sort" data-val="${o.val}"
            class="btn-tap shrink-0 h-8 px-3 rounded-full text-xs font-bold inline-flex items-center justify-center ${uiState.shelfSort === o.val ? 'bg-pine dark:bg-emeraldBrand text-white border border-transparent shadow-xs' : 'pill-chip text-inkMuted dark:text-white/75'}">
            ${o.label}
          </button>
        `).join('')}
        <button type="button" data-action="open-add-game"
          class="btn-tap btn-add-circle shrink-0 w-8 h-8 rounded-full text-white inline-flex items-center justify-center"
          title="Añadir nuevo juego" aria-label="Añadir nuevo juego">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger-list">
      ${cards}
    </div>

    ${deletedDefaultsCount > 0 ? `
      <div class="pt-2 text-center">
        <button type="button" data-action="restore-default-games"
          class="btn-tap card-pro inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-inkMuted dark:text-white/65 hover:text-ink dark:hover:text-white">
          Restaurar ${deletedDefaultsCount} ${deletedDefaultsCount === 1 ? 'juego inicial oculto' : 'juegos iniciales ocultos'}
        </button>
      </div>
    ` : ''}
  `;

  const shelfSearchEl = document.getElementById('shelf-search-input');
  if (shelfSearchEl) {
    shelfSearchEl.addEventListener('input', (e) => {
      uiState.shelfSearch = e.target.value;
      renderShelfTab();
      const el = document.getElementById('shelf-search-input');
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
  }
}

// -------------------------------------------------------------------------
// FICHA DE REGLAS, SETUP Y VALORACIÓN PERSONAL (1–5 ESTRELLAS) POR JUEGO
// -------------------------------------------------------------------------
function formatRulesNotesHtml(notesText) {
  const lines = String(notesText || '').split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) {
    return `<p class="text-xs text-inkMuted dark:text-white/55 italic">Todavía no hay reglas apuntadas para este juego. Pulsa «Editar» para añadir setup, puntuación o reglas de casa.</p>`;
  }
  return `
    <div class="space-y-2">
      ${lines.map((raw) => {
        const clean = raw.replace(/^[•\-*]\s*/, '');
        const colonIdx = clean.indexOf(':');
        const hasHeading = colonIdx > 0 && colonIdx <= 24;
        const head = hasHeading ? clean.slice(0, colonIdx).trim() : '';
        const body = hasHeading ? clean.slice(colonIdx + 1).trim() : clean;
        return `
          <div class="flex items-start gap-2 text-xs leading-relaxed text-ink dark:text-white/85">
            <span class="w-1.5 h-1.5 rounded-full bg-emeraldBrand mt-2 shrink-0"></span>
            <div class="min-w-0 flex-1">
              ${hasHeading ? `<strong class="font-extrabold text-ink dark:text-white">${esc(head)}:</strong> ` : ''}${esc(body)}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function openGameSheetModal(gameId) {
  const initialGame = games.find((x) => x.id === gameId);
  if (!initialGame) return;

  const openedInHome = isShelfHomeMode();
  const candidates = getShelfProfileCandidates();
  let activeKey = getActiveShelfProfile().key;
  const draftRatings = {};
  const draftFavs = {};
  candidates.forEach((c) => {
    draftRatings[c.key] = getGameRatingFor(initialGame, c.key);
    draftFavs[c.key] = isGameFavoriteFor(initialGame, c.key);
  });

  let tempNotes = initialGame.rulesNotes !== undefined ? String(initialGame.rulesNotes) : (DEFAULT_RULES_NOTES[initialGame.id] || '');
  let editingRules = !tempNotes.trim();

  const renderSheet = () => {
    const g = games.find((x) => x.id === gameId) || initialGame;
    const curProf = candidates.find((c) => c.key === activeKey) || candidates[0];
    const gMatches = matchHistory.filter((m) =>
      m.gameId === g.id
      && (m.players || []).some((p) => normName(p.name) === curProf.key)
    );
    let daysSince = null;
    if (gMatches.length > 0) {
      let latestIso = '';
      gMatches.forEach((m) => {
        const iso = normalizeDateToISO(m.date, m.createdAtMs);
        if (iso && (!latestIso || iso > latestIso)) latestIso = iso;
      });
      const parts = latestIso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (parts) {
        const matchMidnight = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3])).getTime();
        const now = new Date();
        const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        daysSince = Math.max(0, Math.round((todayMidnight - matchMidnight) / 86400000));
      } else {
        daysSince = 0;
      }
    }
    const tempRating = draftRatings[curProf.key] || 0;
    const tempFav = Boolean(draftFavs[curProf.key]);
    const otherRatings = candidates
      .filter((c) => c.key !== curProf.key && (draftRatings[c.key] > 0 || draftFavs[c.key]))
      .map((c) => ({ ...c, rating: draftRatings[c.key] || 0, favorite: Boolean(draftFavs[c.key]) }));

    const bodyHtml = `
      <div class="space-y-4">
        <!-- Portada compacta -->
        <div class="cover-sheen p-4 rounded-2xl text-white relative" style="background: linear-gradient(135deg, ${g.color}, ${g.color2 || g.color});">
          <div class="cover-watermark">${gameIconSvg(g.icon, 'w-20 h-20')}</div>
          <div class="flex items-center justify-between gap-2 relative z-10">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-white/18 border border-white/25 flex items-center justify-center shrink-0">
                ${gameIconSvg(g.icon, 'w-5 h-5')}
              </div>
              <div class="min-w-0">
                <div class="font-display text-base font-extrabold leading-tight truncate">${esc(g.name)}</div>
                <div class="text-[11px] text-white/85 mt-0.5">${g.minPlayers || 1}${g.maxPlayers && g.maxPlayers !== (g.minPlayers || 1) ? `–${g.maxPlayers}` : ''} jug · ${g.defaultDuration || 30} min · ${gMatches.length} ${gMatches.length === 1 ? 'partida' : 'partidas'}</div>
              </div>
            </div>
            <button type="button" data-gs="toggle-fav"
              class="btn-tap px-2.5 py-1.5 rounded-xl bg-black/22 border border-white/18 text-xs font-extrabold inline-flex items-center gap-1 shrink-0 ${tempFav ? 'text-amber-300' : 'text-white/80'}">
              <span>${tempFav ? '★' : '☆'}</span>
              <span>${tempFav ? 'Favorito' : 'Fav'}</span>
            </button>
          </div>
          <div class="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-white/80 relative z-10">
            <span>${formatDustyLabel(daysSince)}</span>
            ${g.scoringType !== 'coop' ? (() => {
              const wInfo = getGameWeightInfo(g);
              return `<span class="px-2 py-0.5 rounded-lg bg-black/22 border border-white/15 text-[10px] font-extrabold text-white/90 tabular-nums">Peso: ${esc(wInfo.label)} (${wInfo.hint})</span>`;
            })() : `<span class="px-2 py-0.5 rounded-lg bg-black/22 border border-white/15 text-[10px] font-extrabold text-white/80">Cooperativo</span>`}
          </div>
        </div>

        <!-- Chuleta de setup y reglas -->
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Reglas rápidas, setup y desempates</span>
            <div class="flex items-center gap-2 shrink-0">
              ${DEFAULT_RULES_NOTES[g.id] && tempNotes.trim() !== DEFAULT_RULES_NOTES[g.id].trim() ? `
                <button type="button" data-gs="reset-rules" class="btn-tap text-[11px] font-bold text-amber-700 dark:text-amber-300">Restaurar base</button>
              ` : ''}
              <button type="button" data-gs="toggle-edit-rules"
                class="btn-tap px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                  editingRules
                    ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent'
                    : 'bg-white dark:bg-surfaceDarkAlt text-emeraldBrand dark:text-emerald-400 border-[#E2DACE] dark:border-white/12'
                }">
                ${editingRules ? 'Vista lectura' : 'Editar'}
              </button>
            </div>
          </div>
          ${editingRules ? `
            <textarea id="gs-rules-textarea" rows="9" maxlength="2400" placeholder="Apunta setup, turnos, puntuación, fin de partida y desempates..."
              class="w-full input-pro rounded-2xl p-3 text-xs leading-relaxed text-ink dark:text-white outline-none resize-none">${esc(tempNotes)}</textarea>
          ` : `
            <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10">
              ${formatRulesNotesHtml(tempNotes)}
            </div>
          `}
        </div>

        <!-- Valoración táctil por perfil (desliza o toca media estrella) -->
        <div class="space-y-2.5">
          ${candidates.length > 1 ? `
            <div class="scroll-strip no-scrollbar">
              ${candidates.map((c) => {
                const isSel = c.key === curProf.key;
                const cRat = draftRatings[c.key] || 0;
                return `
                  <button type="button" data-gs="switch-profile" data-key="${esc(c.key)}"
                    class="profile-chip btn-tap shrink-0 ${isSel ? 'is-active' : ''}">
                    ${renderPlayerAvatarHtml(c.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
                    <span>${esc(c.name)}</span>
                    ${cRat > 0 ? `<span class="text-[10px] font-extrabold tabular-nums ${isSel ? 'text-amber-300' : 'text-goldBrand'}">★${formatStarRating(cRat)}</span>` : ''}
                  </button>
                `;
              }).join('')}
            </div>
          ` : ''}

          ${(() => {
            const ratedVals = Object.values(draftRatings).filter((v) => v > 0);
            const liveAvg = ratedVals.length > 1 ? formatAverageRating(ratedVals.reduce((a, b) => a + b, 0) / ratedVals.length) : '';
            return renderStarScrubberHtml({
              uid: `gs_${g.id}_${curProf.key}`,
              rating: tempRating,
              profileName: curProf.name,
              avgText: liveAvg,
              clearAttr: 'data-gs="set-rating" data-val="0"',
            });
          })()}

          ${otherRatings.length > 0 ? `
            <div class="flex flex-wrap items-center justify-center gap-2 text-[11px] text-inkMuted dark:text-white/60">
              ${otherRatings.map((o) => `
                <button type="button" data-gs="switch-profile" data-key="${esc(o.key)}"
                  class="btn-tap inline-flex items-center gap-1 font-semibold tabular-nums px-2 py-0.5 rounded-full bg-white dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10">
                  <span class="w-2 h-2 rounded-full" style="background:${o.color};"></span>
                  <span>${esc(o.name)}</span>
                  ${o.rating > 0 ? `<strong class="text-goldBrand">★ ${formatStarRating(o.rating)}</strong>` : '<strong class="text-goldBrand">★ Fav</strong>'}
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;

    openModal({
      title: 'Ficha y Reglas Rápidas',
      subtitle: 'Guía completa de mesa · editable y guardada en tu ludoteca',
      bodyHtml,
      actions: [
        { label: 'Cerrar' },
        {
          label: 'Guardar ficha',
          className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
          onClick: () => {
            const liveGame = games.find((x) => x.id === gameId) || g;
            const ta = document.getElementById('gs-rules-textarea');
            if (ta) tempNotes = ta.value;
            candidates.forEach((c) => {
              setGameRatingFor(liveGame, draftRatings[c.key] || 0, c.key);
              setGameFavoriteFor(liveGame, Boolean(draftFavs[c.key]), c.key);
            });
            const nextNotes = tempNotes.trim();
            if (nextNotes !== String(liveGame.rulesNotes || '').trim()) {
              liveGame.rulesNotes = nextNotes;
              liveGame.rulesUpdatedAt = Date.now();
            }
            if (openedInHome) {
              uiState.lastPersonProfileKey = activeKey;
              try { localStorage.setItem(KEYS.SHELF_PROFILE, activeKey); } catch (e) {}
            } else {
              setActiveShelfProfile(activeKey);
            }
            saveGamesLocal();
            renderActiveTab();
            showToast(`Ficha de ${liveGame.name} guardada`, 'success');
          },
        },
      ],
    });

    const bodyEl = document.getElementById('modal-body');
    const taEl = document.getElementById('gs-rules-textarea');
    if (taEl) {
      taEl.addEventListener('input', (e) => { tempNotes = e.target.value; });
    }
    bindStarScrubber(bodyEl, {
      onCommit: (val) => {
        const ta = document.getElementById('gs-rules-textarea');
        if (ta) tempNotes = ta.value;
        draftRatings[activeKey] = val;
        renderSheet();
      },
    });
    bodyEl.onclick = (e) => {
      const el = e.target.closest('[data-gs]');
      if (!el) return;
      const act = el.dataset.gs;
      if (act === 'switch-profile') {
        const ta = document.getElementById('gs-rules-textarea');
        if (ta) tempNotes = ta.value;
        activeKey = el.dataset.key || activeKey;
        renderSheet();
      } else if (act === 'toggle-fav') {
        draftFavs[activeKey] = !draftFavs[activeKey];
        renderSheet();
      } else if (act === 'set-rating') {
        const ta = document.getElementById('gs-rules-textarea');
        if (ta) tempNotes = ta.value;
        draftRatings[activeKey] = Number(el.dataset.val) || 0;
        renderSheet();
      } else if (act === 'toggle-edit-rules') {
        const ta = document.getElementById('gs-rules-textarea');
        if (ta) tempNotes = ta.value;
        editingRules = !editingRules;
        renderSheet();
      } else if (act === 'reset-rules') {
        tempNotes = DEFAULT_RULES_NOTES[g.id] || '';
        renderSheet();
      }
    };
  };

  renderSheet();
}

// -------------------------------------------------------------------------
// VALORACIÓN RÁPIDA EN 1 TOQUE (ESTRELLAS TÁCTILES + AUTO-GUARDADO)
// -------------------------------------------------------------------------
function openQuickRateModal(gameId) {
  const initialGame = games.find((x) => x.id === gameId);
  if (!initialGame) return;

  const candidates = getShelfProfileCandidates();
  let activeKey = getActiveShelfProfile().key;

  const renderQuickRate = () => {
    const g = games.find((x) => x.id === gameId) || initialGame;
    const curProf = candidates.find((c) => c.key === activeKey) || candidates[0];
    const curRating = getGameRatingFor(g, curProf.key);
    const curFav = isGameFavoriteFor(g, curProf.key);

    const allRated = candidates
      .map((c) => ({ ...c, rating: getGameRatingFor(g, c.key), fav: isGameFavoriteFor(g, c.key) }))
      .filter((c) => c.rating > 0);
    const avgStr = allRated.length > 1
      ? formatAverageRating(allRated.reduce((s, x) => s + x.rating, 0) / allRated.length)
      : '';

    const bodyHtml = `
      <div class="space-y-4">
        <!-- Portada compacta + Favorito -->
        <div class="cover-sheen p-3.5 rounded-2xl text-white relative" style="background: linear-gradient(135deg, ${g.color}, ${g.color2 || g.color});">
          <div class="cover-watermark">${gameIconSvg(g.icon, 'w-16 h-16')}</div>
          <div class="flex items-center justify-between gap-2 relative z-10">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-white/18 border border-white/25 flex items-center justify-center shrink-0">
                ${gameIconSvg(g.icon, 'w-5 h-5')}
              </div>
              <div class="min-w-0">
                <div class="font-display text-base font-extrabold leading-tight truncate">${esc(g.name)}</div>
                <div class="text-[11px] text-white/80 truncate mt-0.5">${esc(g.tagline || 'Valoración personal')}</div>
              </div>
            </div>
            <button type="button" data-qr="toggle-fav"
              class="btn-tap px-2.5 py-1.5 rounded-xl bg-black/22 border border-white/18 text-xs font-extrabold inline-flex items-center gap-1 shrink-0 ${curFav ? 'text-amber-300' : 'text-white/80'}">
              <span>${curFav ? '★' : '☆'}</span>
              <span>${curFav ? 'Favorito' : 'Fav'}</span>
            </button>
          </div>
        </div>

        <!-- Selector de perfil -->
        ${candidates.length > 1 ? `
          <div class="scroll-strip no-scrollbar">
            ${candidates.map((c) => {
              const isSel = c.key === curProf.key;
              const cRat = getGameRatingFor(g, c.key);
              return `
                <button type="button" data-qr="switch-profile" data-key="${esc(c.key)}"
                  class="profile-chip btn-tap shrink-0 ${isSel ? 'is-active' : ''}">
                  ${renderPlayerAvatarHtml(c.name, 'w-5 h-5 text-[9px] ring-1 ring-white/25')}
                  <span>${esc(c.name)}</span>
                  ${cRat > 0 ? `<span class="text-[10px] font-extrabold tabular-nums ${isSel ? 'text-amber-300' : 'text-goldBrand'}">★${formatStarRating(cRat)}</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>
        ` : ''}

        <!-- Estrellas interactivas táctiles (auto-guardado instantáneo) -->
        ${renderStarScrubberHtml({
          uid: `qr_${g.id}_${curProf.key}`,
          rating: curRating,
          profileName: curProf.name,
          avgText: avgStr,
          clearAttr: 'data-qr="clear-rating"',
        })}

        <!-- Comparativa del grupo -->
        ${allRated.length > 0 ? `
          <div class="rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 p-3 space-y-2">
            <div class="flex items-center justify-between text-[10.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">
              <span>Notas del grupo</span>
              ${avgStr ? `<span class="text-goldBrand dark:text-amber-300 tabular-nums">Media ★ ${avgStr}</span>` : ''}
            </div>
            <div class="space-y-1.5">
              ${allRated.map((item) => {
                const pct = Math.round((item.rating / 5) * 100);
                return `
                  <button type="button" data-qr="switch-profile" data-key="${esc(item.key)}"
                    class="btn-tap w-full flex items-center gap-2.5 text-left">
                    ${renderPlayerAvatarHtml(item.name, 'w-6 h-6 text-[9px]')}
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between gap-2 text-xs">
                        <span class="font-bold text-ink dark:text-white truncate">${esc(item.name)}${item.fav ? ' <span class="text-goldBrand">★</span>' : ''}</span>
                        <span class="font-extrabold text-goldBrand dark:text-amber-300 tabular-nums shrink-0">${formatStarRating(item.rating)}</span>
                      </div>
                      <div class="elo-mini-track mt-1">
                        <div class="h-full rounded-full" style="width:${pct}%; background:${item.color};"></div>
                      </div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    openModal({
      title: 'Valorar juego',
      subtitle: 'Se guarda automáticamente al tocar o deslizar',
      bodyHtml,
      actions: [
        {
          label: 'Ver reglas',
          keepOpen: true,
          onClick: () => openGameSheetModal(gameId),
        },
        {
          label: 'Listo',
          className: 'btn-tap px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
        },
      ],
    });

    const bodyEl = document.getElementById('modal-body');
    const persistRating = (val) => {
      const liveGame = games.find((x) => x.id === gameId);
      if (!liveGame) return;
      const changed = setGameRatingFor(liveGame, val, activeKey);
      if (changed) {
        saveGamesLocal();
        renderActiveTab();
      }
      renderQuickRate();
    };

    bindStarScrubber(bodyEl, {
      onCommit: (val) => persistRating(val),
    });

    bodyEl.onclick = (e) => {
      const el = e.target.closest('[data-qr]');
      if (!el) return;
      const act = el.dataset.qr;
      if (act === 'switch-profile') {
        activeKey = el.dataset.key || activeKey;
        renderQuickRate();
      } else if (act === 'toggle-fav') {
        const liveGame = games.find((x) => x.id === gameId);
        if (!liveGame) return;
        const next = !isGameFavoriteFor(liveGame, activeKey);
        setGameFavoriteFor(liveGame, next, activeKey);
        saveGamesLocal();
        renderActiveTab();
        renderQuickRate();
      } else if (act === 'clear-rating') {
        persistRating(0);
      }
    };
  };

  renderQuickRate();
}

// -------------------------------------------------------------------------
// CENTRO DE UTILIDADES DE MESA: ¿A QUÉ JUGAR?, ¿QUIÉN EMPIEZA?, RONDAS Y TURNO
// -------------------------------------------------------------------------
function ensureTurnTimerLoop() {
  if (tableToolsState.turnRunning && !turnTimerIntervalId) {
    turnTimerIntervalId = setInterval(() => {
      if (!tableToolsState.turnRunning) return;
      if (tableToolsState.turnRemainingSec > 0) {
        tableToolsState.turnRemainingSec -= 1;
        updateTurnTimerDom();
        if (tableToolsState.turnRemainingSec === 0) {
          tableToolsState.turnRunning = false;
          clearInterval(turnTimerIntervalId);
          turnTimerIntervalId = null;
          playTurnDoneAlert();
          if (document.getElementById('tt-turn-display')) renderTableToolsModal();
          else showToast('¡Tiempo de turno agotado!', 'danger');
        }
      }
    }, 1000);
  } else if (!tableToolsState.turnRunning && turnTimerIntervalId) {
    clearInterval(turnTimerIntervalId);
    turnTimerIntervalId = null;
  }
}

function updateTurnTimerDom() {
  const disp = document.getElementById('tt-turn-display');
  const bar = document.getElementById('tt-turn-bar');
  const sec = Math.max(0, tableToolsState.turnRemainingSec);
  const mins = Math.floor(sec / 60);
  const rem = sec % 60;
  const txt = `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  if (disp) {
    disp.textContent = txt;
    disp.className = `font-display text-5xl font-extrabold tabular-nums tracking-tight ${
      sec === 0 ? 'text-coralBrand animate-pulse' : sec <= 10 ? 'text-coralBrand' : sec <= 20 ? 'text-goldBrand' : 'text-ink dark:text-white'
    }`;
  }
  if (bar) {
    const pct = Math.max(0, Math.min(100, Math.round((sec / Math.max(1, tableToolsState.turnPresetSec)) * 100)));
    bar.style.width = `${pct}%`;
    bar.className = `h-full rounded-full transition-all duration-500 ${
      sec <= 10 ? 'bg-coralBrand' : sec <= 20 ? 'bg-goldBrand' : 'bg-emeraldBrand'
    }`;
  }
}

function getPickerCandidates() {
  const pCount = tableToolsState.pickPlayers;
  const maxTime = tableToolsState.pickMaxTime;
  const pType = tableToolsState.pickType;

  let list = games.filter((g) => {
    if (tableToolsState.pickOnlyFavs && !isGameFavoriteFor(g)) return false;
    if (pCount > 0) {
      const minP = Number(g.minPlayers) || 1;
      const maxP = Number(g.maxPlayers) || 8;
      if (pCount === 6) {
        if (maxP < 6) return false;
      } else if (pCount < minP || pCount > maxP) {
        return false;
      }
    }
    if (maxTime > 0) {
      const dur = Number(g.defaultDuration) || 30;
      if (maxTime === 90) {
        if (dur < 60) return false;
      } else if (dur > maxTime) {
        return false;
      }
    }
    if (!gameSupportsModeType(g, pType)) return false;
    return true;
  });

  if (tableToolsState.pickDustyFirst) {
    list = [...list].sort((a, b) => {
      const dA = getDaysSinceLastPlay(a.id);
      const dB = getDaysSinceLastPlay(b.id);
      const scoreA = dA === null ? 99999 : dA;
      const scoreB = dB === null ? 99999 : dB;
      return scoreB - scoreA;
    });
  }
  return list;
}

function openTableToolsModal(initialTab = null) {
  if (initialTab) tableToolsState.activeTab = initialTab;
  // Inicializa jugadores seleccionados para el sorteo si está vacío
  const pool = getActiveTablePlayerPool();
  if (tableToolsState.starterSelected.length === 0 && pool.length > 0) {
    tableToolsState.starterSelected = [...pool];
  }
  renderTableToolsModal();
}

function renderTableToolsModal() {
  const tab = tableToolsState.activeTab;
  const tabsDef = [
    { id: 'picker', label: '¿A qué jugar?' },
    { id: 'starter', label: '¿Quién empieza?' },
    { id: 'round', label: 'Rondas' },
    { id: 'turn', label: 'Turno' },
  ];

  let contentHtml = '';

  if (tab === 'picker') {
    const candidates = getPickerCandidates();
    const picked = tableToolsState.pickedGameId ? candidates.find((c) => c.id === tableToolsState.pickedGameId) : null;
    const playerOpts = [
      { v: 0, l: 'Cualq.' }, { v: 1, l: '1' }, { v: 2, l: '2' }, { v: 3, l: '3' }, { v: 4, l: '4' }, { v: 5, l: '5' }, { v: 6, l: '6+' },
    ];
    const timeOpts = [
      { v: 0, l: 'Cualq.' }, { v: 15, l: '≤15m' }, { v: 30, l: '≤30m' }, { v: 45, l: '≤45m' }, { v: 60, l: '≤60m' }, { v: 90, l: '60m+' },
    ];
    const typeOpts = [
      { v: 'all', l: 'Todos' }, { v: 'competitive', l: 'Competitivo' }, { v: 'coop', l: 'Coop' }, { v: 'solo', l: 'Solitario' },
    ];

    contentHtml = `
      <div class="space-y-3.5">
        <!-- Filtros compactos -->
        <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-3">
          <div>
            <div class="text-[10.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 mb-1.5">Jugadores</div>
            <div class="grid grid-cols-7 gap-1">
              ${playerOpts.map((o) => `
                <button type="button" data-tt="pick-players" data-val="${o.v}"
                  class="btn-tap h-8 rounded-lg text-[11px] font-extrabold border ${tableToolsState.pickPlayers === o.v ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.06] dark:border-white/10'}">${o.l}</button>
              `).join('')}
            </div>
          </div>

          <div>
            <div class="text-[10.5px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55 mb-1.5">Tiempo disponible</div>
            <div class="grid grid-cols-6 gap-1">
              ${timeOpts.map((o) => `
                <button type="button" data-tt="pick-time" data-val="${o.v}"
                  class="btn-tap h-8 rounded-lg text-[11px] font-extrabold border ${tableToolsState.pickMaxTime === o.v ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.06] dark:border-white/10'}">${o.l}</button>
              `).join('')}
            </div>
          </div>

          <div class="grid grid-cols-4 gap-1">
            ${typeOpts.map((o) => `
              <button type="button" data-tt="pick-type" data-val="${o.v}"
                class="btn-tap h-8 rounded-lg text-[11px] font-bold border ${tableToolsState.pickType === o.v ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.06] dark:border-white/10'}">${o.l}</button>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 pt-0.5">
            <button type="button" data-tt="pick-toggle-fav"
              class="btn-tap px-2.5 py-1 rounded-xl text-[11px] font-bold border ${tableToolsState.pickOnlyFavs ? 'bg-goldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-inkMuted dark:text-white/70 border-black/[0.07] dark:border-white/10'}">
              ★ Solo favoritos
            </button>
            <button type="button" data-tt="pick-toggle-dusty"
              class="btn-tap px-2.5 py-1 rounded-xl text-[11px] font-bold border ${tableToolsState.pickDustyFirst ? 'bg-emeraldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-inkMuted dark:text-white/70 border-black/[0.07] dark:border-white/10'}">
              Priorizar sin jugar hace tiempo
            </button>
          </div>
        </div>

        <!-- Botón de sorteo inteligente -->
        <button type="button" data-tt="roll-game" ${candidates.length === 0 || tableToolsState.isRollingGame ? 'disabled' : ''}
          class="btn-tap btn-primary-pro w-full py-3 px-4 rounded-2xl text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 disabled:opacity-50">
          <span>${tableToolsState.isRollingGame ? 'Eligiendo juego...' : `Sortear entre ${candidates.length} ${candidates.length === 1 ? 'juego' : 'juegos'}`}</span>
        </button>

        <!-- Resultado del sorteo -->
        ${picked ? `
          <div class="cover-sheen p-4 rounded-2xl text-white shadow-elevated anim-in relative" style="background: linear-gradient(135deg, ${picked.color}, ${picked.color2 || picked.color});">
            <div class="cover-watermark">${gameIconSvg(picked.icon, 'w-20 h-20')}</div>
            <div class="text-[10px] font-extrabold uppercase tracking-[0.14em] text-amber-200 relative z-10">${tableToolsState.isRollingGame ? 'Sorteando...' : 'Elegido para la mesa'}</div>
            <div class="mt-2 flex items-center gap-3 relative z-10">
              <div class="w-11 h-11 rounded-2xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0">
                ${gameIconSvg(picked.icon, 'w-6 h-6')}
              </div>
              <div class="min-w-0">
                <div class="font-display text-lg font-extrabold leading-tight truncate">${esc(picked.name)}</div>
                <div class="text-[11px] text-white/85 mt-0.5">${picked.minPlayers || 1}–${picked.maxPlayers || 4} jug · ${picked.defaultDuration || 30} min · ${formatDustyLabel(getDaysSinceLastPlay(picked.id))}</div>
              </div>
            </div>
            ${!tableToolsState.isRollingGame ? `
              <div class="mt-3 flex items-center gap-2 relative z-10">
                <button type="button" data-tt="launch-picked" data-game-id="${esc(picked.id)}"
                  class="btn-tap flex-1 py-2 px-3 rounded-xl bg-white text-pine text-xs font-extrabold shadow-xs">
                  Elegir y abrir en Registrar
                </button>
                <button type="button" data-tt="rules-picked" data-game-id="${esc(picked.id)}"
                  class="btn-tap py-2 px-3 rounded-xl bg-black/24 border border-white/20 text-white text-xs font-bold">
                  Reglas
                </button>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Lista compacta de candidatos -->
        <div class="space-y-1.5">
          <div class="text-[11px] font-bold text-inkMuted dark:text-white/55 px-0.5">
            ${candidates.length > 0 ? `Opciones compatibles (${candidates.length})` : 'Ningún juego cumple todos esos filtros'}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-44 overflow-y-auto pr-0.5">
            ${candidates.map((c) => `
              <button type="button" data-tt="launch-picked" data-game-id="${esc(c.id)}"
                class="btn-tap p-2 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-black/[0.06] dark:border-white/10 flex items-center gap-2.5 text-left hover:border-emeraldBrand">
                <span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background:${c.color}18; color:${c.color};">
                  ${gameIconSvg(c.icon, 'w-4 h-4')}
                </span>
                <div class="min-w-0 flex-1">
                  <div class="text-xs font-extrabold text-ink dark:text-white truncate">${isGameFavoriteFor(c) ? '★ ' : ''}${esc(c.name)}</div>
                  <div class="text-[10px] text-inkMuted dark:text-white/55 truncate">${c.defaultDuration || 30} min · ${formatDustyLabel(getDaysSinceLastPlay(c.id))}</div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else if (tab === 'starter') {
    const pool = getActiveTablePlayerPool();
    const activeList = tableToolsState.starterSelected.filter((n) => pool.includes(n));

    contentHtml = `
      <div class="space-y-4">
        <div class="p-3.5 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 space-y-2.5">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Participantes (${activeList.length})</span>
            <span class="text-[10.5px] text-inkMuted dark:text-white/50">Toca para incluir o quitar</span>
          </div>

          ${pool.length > 0 ? `
            <div class="flex flex-wrap gap-1.5">
              ${pool.map((name) => {
                const on = activeList.includes(name);
                return `
                  <button type="button" data-tt="toggle-starter-player" data-name="${esc(name)}"
                    class="btn-tap px-3 py-1.5 rounded-xl text-xs font-bold border ${on ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent shadow-2xs' : 'bg-canvas dark:bg-surfaceDark text-inkMuted dark:text-white/60 border-black/[0.07] dark:border-white/10'}">
                    ${on ? '✓ ' : ''}${esc(name)}
                  </button>
                `;
              }).join('')}
            </div>
          ` : `<p class="text-xs text-inkMuted dark:text-white/55">Añade nombres abajo para sortear quién empieza.</p>`}

          <div class="flex items-center gap-1.5 pt-1">
            <input id="tt-starter-add-input" type="text" maxlength="24" placeholder="Añadir jugador rápido..."
              class="flex-1 h-9 input-pro rounded-xl px-3 text-xs font-semibold text-ink dark:text-white outline-none" />
            <button type="button" data-tt="add-starter-player" class="btn-tap h-9 px-3 rounded-xl bg-emeraldBrand/15 text-emeraldBrand dark:text-emerald-300 text-xs font-extrabold">+ Añadir</button>
          </div>
        </div>

        <button type="button" data-tt="roll-starter" ${activeList.length < 2 || tableToolsState.isRollingStarter ? 'disabled' : ''}
          class="btn-tap btn-primary-pro w-full py-3.5 px-4 rounded-2xl text-white font-display font-extrabold text-sm disabled:opacity-50">
          ${tableToolsState.isRollingStarter ? 'Sorteando jugador inicial...' : 'Sortear quién empieza'}
        </button>

        ${tableToolsState.starterWinner ? `
          <div class="cover-sheen p-5 rounded-2xl text-white text-center shadow-elevated anim-in" style="background: linear-gradient(135deg, #10251E 0%, #227554 62%, #B45309 100%);">
            <div class="text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-amber-300 relative z-10">${tableToolsState.isRollingStarter ? 'Girando...' : 'Jugador inicial'}</div>
            <div class="font-display text-2xl font-extrabold mt-1 relative z-10">${esc(tableToolsState.starterWinner)}</div>
            ${!tableToolsState.isRollingStarter && tableToolsState.starterOrder.length > 1 ? `
              <div class="mt-2.5 text-[11px] text-white/85 relative z-10">
                Orden de mesa: <strong class="text-white">${tableToolsState.starterOrder.map(esc).join(' → ')}</strong>
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>
    `;
  } else if (tab === 'round') {
    const activePlayers = draft.players.map((p) => p.name.trim()).filter(Boolean);
    const curPlayer = activePlayers.length > 0 ? activePlayers[tableToolsState.turnIdx % activePlayers.length] : '';

    contentHtml = `
      <div class="space-y-4">
        <div class="p-6 rounded-[24px] bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center space-y-4">
          <div>
            <div class="text-[11px] font-extrabold uppercase tracking-[0.16em] text-inkMuted dark:text-white/55">Ronda actual</div>
            <div class="font-display text-6xl font-extrabold tabular-nums text-ink dark:text-white mt-1 leading-none">${tableToolsState.roundNum}</div>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button type="button" data-tt="round-step" data-delta="-1"
              class="btn-tap w-14 h-12 rounded-2xl bg-canvas dark:bg-surfaceDark border border-black/[0.08] dark:border-white/12 font-display text-2xl font-extrabold text-ink dark:text-white">−</button>
            <button type="button" data-tt="round-step" data-delta="1"
              class="btn-tap w-24 h-12 rounded-2xl btn-primary-pro font-display text-xl font-extrabold text-white">+ 1</button>
          </div>

          ${curPlayer ? `
            <div class="pt-3 border-t border-black/[0.06] dark:border-white/10 space-y-2.5">
              <div class="text-[11px] font-bold text-inkMuted dark:text-white/55">Turno actual en mesa</div>
              <div class="font-display text-lg font-extrabold text-emeraldBrand dark:text-emerald-400">${esc(curPlayer)}</div>
              <button type="button" data-tt="next-turn"
                class="btn-tap w-full py-2.5 px-4 rounded-xl bg-pine dark:bg-emeraldBrand text-white text-xs font-extrabold">
                Siguiente turno →
              </button>
            </div>
          ` : `
            <p class="text-[11px] text-inkMuted dark:text-white/50 pt-2">Si escribes jugadores en Registrar, aquí también podrás ir pasando el turno de cada uno.</p>
          `}
        </div>

        <button type="button" data-tt="round-reset"
          class="btn-tap w-full py-2.5 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-black/[0.08] dark:border-white/12 text-xs font-bold text-inkMuted hover:text-coralBrand">
          Reiniciar a Ronda 1
        </button>
      </div>
    `;
  } else {
    // Temporizador de turno
    const presets = [
      { s: 30, l: '30s' }, { s: 45, l: '45s' }, { s: 60, l: '1m' }, { s: 90, l: '1:30' }, { s: 120, l: '2m' }, { s: 180, l: '3m' },
    ];
    const sec = Math.max(0, tableToolsState.turnRemainingSec);
    const mins = Math.floor(sec / 60);
    const rem = sec % 60;
    const pct = Math.max(0, Math.min(100, Math.round((sec / Math.max(1, tableToolsState.turnPresetSec)) * 100)));

    contentHtml = `
      <div class="space-y-4">
        <div class="p-6 rounded-[24px] bg-white dark:bg-surfaceDarkAlt border border-[#E7E0D4] dark:border-white/10 text-center space-y-4">
          <div class="flex items-center justify-between text-[11px]">
            <span class="font-extrabold uppercase tracking-wider text-inkMuted dark:text-white/55">Temporizador de turno</span>
            <button type="button" data-tt="turn-sound"
              class="btn-tap px-2.5 py-1 rounded-lg font-bold border ${tableToolsState.turnSound ? 'bg-emeraldBrand/12 text-emeraldBrand dark:text-emerald-300 border-emeraldBrand/25' : 'bg-canvas dark:bg-surfaceDark text-inkMuted border-black/[0.08] dark:border-white/10'}">
              ${tableToolsState.turnSound ? 'Aviso: Sí' : 'Aviso: Silencio'}
            </button>
          </div>

          <div id="tt-turn-display" class="font-display text-5xl font-extrabold tabular-nums tracking-tight ${sec <= 10 ? 'text-coralBrand' : sec <= 20 ? 'text-goldBrand' : 'text-ink dark:text-white'}">
            ${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}
          </div>

          <div class="h-2.5 w-full rounded-full bg-black/[0.07] dark:bg-white/10 overflow-hidden">
            <div id="tt-turn-bar" class="h-full rounded-full transition-all duration-500 ${sec <= 10 ? 'bg-coralBrand' : sec <= 20 ? 'bg-goldBrand' : 'bg-emeraldBrand'}" style="width:${pct}%"></div>
          </div>

          <div class="grid grid-cols-6 gap-1 pt-1">
            ${presets.map((p) => `
              <button type="button" data-tt="turn-preset" data-val="${p.s}"
                class="btn-tap h-8 rounded-lg text-[11px] font-extrabold tabular-nums border ${tableToolsState.turnPresetSec === p.s ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'bg-canvas dark:bg-surfaceDark text-ink dark:text-white/80 border-black/[0.06] dark:border-white/10'}">${p.l}</button>
            `).join('')}
          </div>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <button type="button" data-tt="turn-toggle"
              class="btn-tap py-3 rounded-xl font-extrabold text-xs text-white ${tableToolsState.turnRunning ? 'bg-amber-500' : 'bg-emeraldBrand'}">
              ${tableToolsState.turnRunning ? 'Pausar' : (sec === 0 ? 'Reiniciar e iniciar' : 'Iniciar')}
            </button>
            <button type="button" data-tt="turn-next"
              class="btn-tap py-3 rounded-xl bg-pine dark:bg-white text-white dark:text-pine font-extrabold text-xs">
              Siguiente turno ↻
            </button>
          </div>
        </div>
      </div>
    `;
  }

  const bodyHtml = `
    <div class="space-y-4">
      <div class="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-white dark:bg-surfaceDarkAlt border border-[#E2DACE] dark:border-white/12">
        ${tabsDef.map((t) => `
          <button type="button" data-tt="tab" data-val="${t.id}"
            class="btn-tap py-2 px-1 rounded-xl text-[11px] font-extrabold truncate ${tab === t.id ? 'bg-pine dark:bg-emeraldBrand text-white shadow-xs' : 'text-inkMuted dark:text-white/65'}">
            ${t.label}
          </button>
        `).join('')}
      </div>
      ${contentHtml}
    </div>
  `;

  openModal({
    title: 'Utilidades de Mesa',
    subtitle: 'Decisor de juegos, jugador inicial, rondas y tiempo de turno',
    bodyHtml,
    actions: [{ label: 'Cerrar' }],
  });

  const bodyEl = document.getElementById('modal-body');
  bodyEl.onclick = (e) => {
    const el = e.target.closest('[data-tt]');
    if (!el) return;
    const act = el.dataset.tt;

    if (act === 'tab') {
      tableToolsState.activeTab = el.dataset.val;
      renderTableToolsModal();
    } else if (act === 'pick-players') {
      tableToolsState.pickPlayers = Number(el.dataset.val) || 0;
      tableToolsState.pickedGameId = null;
      renderTableToolsModal();
    } else if (act === 'pick-time') {
      tableToolsState.pickMaxTime = Number(el.dataset.val) || 0;
      tableToolsState.pickedGameId = null;
      renderTableToolsModal();
    } else if (act === 'pick-type') {
      tableToolsState.pickType = el.dataset.val || 'all';
      tableToolsState.pickedGameId = null;
      renderTableToolsModal();
    } else if (act === 'pick-toggle-fav') {
      tableToolsState.pickOnlyFavs = !tableToolsState.pickOnlyFavs;
      tableToolsState.pickedGameId = null;
      renderTableToolsModal();
    } else if (act === 'pick-toggle-dusty') {
      tableToolsState.pickDustyFirst = !tableToolsState.pickDustyFirst;
      renderTableToolsModal();
    } else if (act === 'roll-game') {
      const candidates = getPickerCandidates();
      if (candidates.length === 0) return;
      if (candidates.length === 1) {
        tableToolsState.pickedGameId = candidates[0].id;
        renderTableToolsModal();
        return;
      }
      tableToolsState.isRollingGame = true;
      let steps = 0;
      const totalSteps = 8;
      const iv = setInterval(() => {
        steps++;
        // Si "priorizar sin jugar" está activo, en el paso final da más peso a la primera mitad de la lista
        const poolForFinal = tableToolsState.pickDustyFirst && steps >= totalSteps
          ? candidates.slice(0, Math.max(1, Math.ceil(candidates.length * 0.55)))
          : candidates;
        const pick = poolForFinal[Math.floor(Math.random() * poolForFinal.length)];
        tableToolsState.pickedGameId = pick.id;
        if (steps >= totalSteps) {
          clearInterval(iv);
          tableToolsState.isRollingGame = false;
        }
        if (tableToolsState.activeTab === 'picker') renderTableToolsModal();
      }, 75);
    } else if (act === 'launch-picked') {
      const g = getGameById(el.dataset.gameId);
      draft.gameId = g.id;
      draft.duration = g.defaultDuration || 30;
      draft.winMode = '';
      draft.customWinMode = '';
      draft.playMode = '';
      draft.manualWinnerOverride = false;
      saveDraftLocal();
      closeModal();
      switchTab('log');
      setTimeout(() => {
        const activePill = document.querySelector('[data-active-game-pill="true"]');
        if (activePill) activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 60);
      showToast(`Listo para jugar: ${g.name}`, 'success');
    } else if (act === 'rules-picked') {
      openGameSheetModal(el.dataset.gameId);
    } else if (act === 'toggle-starter-player') {
      const nm = el.dataset.name;
      const idx = tableToolsState.starterSelected.indexOf(nm);
      if (idx >= 0) tableToolsState.starterSelected.splice(idx, 1);
      else tableToolsState.starterSelected.push(nm);
      renderTableToolsModal();
    } else if (act === 'add-starter-player') {
      const inp = document.getElementById('tt-starter-add-input');
      const val = (inp?.value || '').trim();
      if (!val) return;
      if (!tableToolsState.starterCustomPlayers.includes(val)) tableToolsState.starterCustomPlayers.push(val);
      if (!tableToolsState.starterSelected.includes(val)) tableToolsState.starterSelected.push(val);
      renderTableToolsModal();
    } else if (act === 'roll-starter') {
      const pool = getActiveTablePlayerPool();
      const list = tableToolsState.starterSelected.filter((n) => pool.includes(n));
      if (list.length < 2) return;
      tableToolsState.isRollingStarter = true;
      let steps = 0;
      const iv = setInterval(() => {
        steps++;
        const idx = Math.floor(Math.random() * list.length);
        tableToolsState.starterWinner = list[idx];
        if (steps >= 9) {
          clearInterval(iv);
          tableToolsState.isRollingStarter = false;
          const rotated = [...list.slice(idx), ...list.slice(0, idx)];
          tableToolsState.starterOrder = rotated;
        }
        if (tableToolsState.activeTab === 'starter') renderTableToolsModal();
      }, 70);
    } else if (act === 'round-step') {
      tableToolsState.roundNum = Math.max(1, tableToolsState.roundNum + Number(el.dataset.delta));
      saveTableToolsLocal();
      renderTableToolsModal();
    } else if (act === 'next-turn') {
      const activePlayers = draft.players.map((p) => p.name.trim()).filter(Boolean);
      if (activePlayers.length > 0) {
        tableToolsState.turnIdx += 1;
        if (tableToolsState.turnIdx >= activePlayers.length) {
          tableToolsState.turnIdx = 0;
          tableToolsState.roundNum += 1;
        }
        saveTableToolsLocal();
        renderTableToolsModal();
      }
    } else if (act === 'round-reset') {
      tableToolsState.roundNum = 1;
      tableToolsState.turnIdx = 0;
      saveTableToolsLocal();
      renderTableToolsModal();
    } else if (act === 'turn-preset') {
      const secVal = Number(el.dataset.val) || 60;
      tableToolsState.turnPresetSec = secVal;
      tableToolsState.turnRemainingSec = secVal;
      tableToolsState.turnRunning = false;
      ensureTurnTimerLoop();
      saveTableToolsLocal();
      renderTableToolsModal();
    } else if (act === 'turn-toggle') {
      if (tableToolsState.turnRemainingSec <= 0) {
        tableToolsState.turnRemainingSec = tableToolsState.turnPresetSec;
      }
      tableToolsState.turnRunning = !tableToolsState.turnRunning;
      ensureTurnTimerLoop();
      renderTableToolsModal();
    } else if (act === 'turn-next') {
      tableToolsState.turnRemainingSec = tableToolsState.turnPresetSec;
      tableToolsState.turnRunning = true;
      ensureTurnTimerLoop();
      renderTableToolsModal();
    } else if (act === 'turn-sound') {
      tableToolsState.turnSound = !tableToolsState.turnSound;
      saveTableToolsLocal();
      renderTableToolsModal();
    }
  };

  const addStarterInp = document.getElementById('tt-starter-add-input');
  if (addStarterInp) {
    addStarterInp.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        const val = addStarterInp.value.trim();
        if (!val) return;
        if (!tableToolsState.starterCustomPlayers.includes(val)) tableToolsState.starterCustomPlayers.push(val);
        if (!tableToolsState.starterSelected.includes(val)) tableToolsState.starterSelected.push(val);
        renderTableToolsModal();
      }
    });
  }
}

function openGameModal(existingGame = null) {
  const isEdit = Boolean(existingGame);
  let chosenColor = isEdit
    ? (PALETTE_CHOICES.find((p) => p.color === existingGame.color) || { color: existingGame.color, color2: existingGame.color2 || existingGame.color, label: 'Actual' })
    : PALETTE_CHOICES[0];
  let chosenIcon = isEdit ? (existingGame.icon || 'dice') : 'dice';

  let currentName = isEdit ? existingGame.name : '';
  let currentTagline = isEdit ? (existingGame.tagline || '') : '';
  let currentMode = isEdit ? (existingGame.scoringType || 'points') : 'points';
  let currentWeight = isEdit ? getGameWeightKey(existingGame) : 'medium';
  let currentDur = isEdit ? String(existingGame.defaultDuration || 30) : '30';
  let currentMinP = isEdit ? String(existingGame.minPlayers || 1) : '2';
  let currentMaxP = isEdit ? String(existingGame.maxPlayers || 4) : '4';
  let currentWinModesStr = isEdit && Array.isArray(existingGame.winModes) ? existingGame.winModes.join(', ') : '';
  let currentRulesNotes = isEdit ? (existingGame.rulesNotes ?? DEFAULT_RULES_NOTES[existingGame.id] ?? '') : '';
  let currentHasSolo = isEdit && Array.isArray(existingGame.playModes) && existingGame.playModes.some((pm) => pm.toLowerCase().includes('solitario') || pm.toLowerCase().includes('automa'));

  const syncFieldsFromDom = () => {
    const n = document.getElementById('new-game-name');
    const t = document.getElementById('new-game-tagline');
    const d = document.getElementById('new-game-dur');
    const minEl = document.getElementById('new-game-minp');
    const maxEl = document.getElementById('new-game-maxp');
    const w = document.getElementById('new-game-winmodes');
    const r = document.getElementById('new-game-rules');
    const s = document.getElementById('new-game-solo');
    if (n) currentName = n.value;
    if (t) currentTagline = t.value;
    if (d) currentDur = d.value;
    if (minEl) currentMinP = minEl.value;
    if (maxEl) currentMaxP = maxEl.value;
    if (w) currentWinModesStr = w.value;
    if (r) currentRulesNotes = r.value;
    if (s) currentHasSolo = s.checked;
  };

  const renderForm = () => {
    const bodyHtml = `
      <div class="space-y-4">
        <div>
          <label for="new-game-name" class="block text-xs font-bold mb-1.5">Nombre del juego</label>
          <input id="new-game-name" type="text" maxlength="40" value="${esc(currentName)}" placeholder="Ej. Cascadia, Azul, Catan..."
            class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2.5 text-sm font-semibold outline-none" />
        </div>

        <div>
          <label for="new-game-tagline" class="block text-xs font-bold mb-1.5">Subtítulo corto (opcional)</label>
          <input id="new-game-tagline" type="text" maxlength="40" value="${esc(currentTagline)}" placeholder="Ej. Losetas y fauna"
            class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2 text-xs outline-none" />
        </div>

        <div class="space-y-2.5">
          <div>
            <div class="block text-xs font-bold mb-1.5">Tipo de puntuación</div>
            <div class="seg-control seg-grid grid-cols-3 bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15" data-seg-id="new-game-mode">
              <span class="seg-thumb seg-thumb-pine"></span>
              <button type="button" data-pick-mode="points" data-seg-active="${currentMode === 'points' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-xs font-extrabold ${currentMode === 'points' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Por puntos
              </button>
              <button type="button" data-pick-mode="winner_only" data-seg-active="${currentMode === 'winner_only' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-xs font-extrabold ${currentMode === 'winner_only' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Solo ganador
              </button>
              <button type="button" data-pick-mode="coop" data-seg-active="${currentMode === 'coop' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-xs font-extrabold ${currentMode === 'coop' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Cooperativo
              </button>
            </div>
          </div>
          <div>
            <div class="block text-xs font-bold mb-1.5">Peso para el Ranking (0–10)</div>
            <div class="seg-control seg-grid grid-cols-3 bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15" data-seg-id="new-game-weight">
              <span class="seg-thumb seg-thumb-amber"></span>
              <button type="button" data-pick-weight="light" data-seg-active="${currentWeight === 'light' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-[11px] font-extrabold ${currentWeight === 'light' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Ligero · ×0.75
              </button>
              <button type="button" data-pick-weight="medium" data-seg-active="${currentWeight === 'medium' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-[11px] font-extrabold ${currentWeight === 'medium' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Medio · ×1.0
              </button>
              <button type="button" data-pick-weight="heavy" data-seg-active="${currentWeight === 'heavy' ? 'true' : 'false'}"
                class="seg-btn btn-tap py-2 rounded-lg text-[11px] font-extrabold ${currentWeight === 'heavy' ? 'text-white' : 'text-inkMuted dark:text-white/65'}">
                Estrategia · ×1.35
              </button>
            </div>
          </div>
          <div>
            <label for="new-game-dur" class="block text-xs font-bold mb-1.5">Duración media (min)</label>
            <input id="new-game-dur" type="number" min="5" max="360" value="${esc(currentDur)}"
              class="w-full h-10 bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 rounded-xl px-3 text-xs font-bold outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <label for="new-game-minp" class="block text-xs font-bold mb-1.5">Mín. jugadores</label>
            <input id="new-game-minp" type="number" min="1" max="12" value="${esc(currentMinP)}"
              class="w-full h-10 bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 rounded-xl px-3 text-xs font-bold outline-none" />
          </div>
          <div>
            <label for="new-game-maxp" class="block text-xs font-bold mb-1.5">Máx. jugadores</label>
            <input id="new-game-maxp" type="number" min="1" max="20" value="${esc(currentMaxP)}"
              class="w-full h-10 bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 rounded-xl px-3 text-xs font-bold outline-none" />
          </div>
        </div>

        <div>
          <label for="new-game-winmodes" class="block text-xs font-bold mb-1.5">Formas de ganar / objetivos (opcional)</label>
          <input id="new-game-winmodes" type="text" maxlength="120" value="${esc(currentWinModesStr)}" placeholder="Separadas por coma · Ej. 40 puntos, 30 puntos, 4 Sirenas"
            class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2 text-xs outline-none" />
        </div>

        <div>
          <label for="new-game-rules" class="block text-xs font-bold mb-1.5">Chuleta de setup / reglas (opcional)</label>
          <textarea id="new-game-rules" rows="3" maxlength="1200" placeholder="Cartas iniciales, desempates, recordatorios..."
            class="w-full bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 focus:border-emeraldBrand rounded-xl px-3 py-2 text-xs outline-none resize-none">${esc(currentRulesNotes)}</textarea>
        </div>

        <label class="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-surfaceDarkAlt border border-[#DFD8CB] dark:border-white/15 cursor-pointer select-none">
          <input id="new-game-solo" type="checkbox" ${currentHasSolo ? 'checked' : ''} class="w-4 h-4 accent-[#227554] rounded" />
          <span class="text-xs font-bold text-ink dark:text-white">Tiene modo Solitario</span>
        </label>

        <div>
          <div class="text-xs font-bold mb-1.5">Color de portada</div>
          <div class="flex flex-wrap gap-2">
            ${PALETTE_CHOICES.map((p, idx) => `
              <button type="button" data-pick-color="${idx}"
                class="btn-tap w-8 h-8 rounded-full border-2 ${chosenColor.color === p.color ? 'border-ink dark:border-white scale-110' : 'border-transparent'}"
                style="background:${p.color};" aria-label="${p.label}"></button>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="text-xs font-bold mb-1.5">Icono</div>
          <div class="grid grid-cols-6 gap-1.5">
            ${ICON_CHOICES.map((ic) => `
              <button type="button" data-pick-icon="${ic}"
                class="btn-tap h-10 rounded-xl border flex items-center justify-center ${
                  chosenIcon === ic ? 'bg-pine dark:bg-emeraldBrand text-white border-transparent' : 'bg-white dark:bg-surfaceDarkAlt text-ink dark:text-white border-[#DFD8CB] dark:border-white/12'
                }">
                ${gameIconSvg(ic, 'w-5 h-5')}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    openModal({
      title: isEdit ? 'Editar juego' : 'Añadir juego a tu ludoteca',
      bodyHtml,
      actions: [
        { label: 'Cancelar' },
        {
          label: isEdit ? 'Guardar cambios' : 'Añadir juego',
          className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emeraldBrand text-white',
          keepOpen: true,
          onClick: () => {
            syncFieldsFromDom();
            const name = currentName.trim();
            if (!name) {
              showToast('Escribe el nombre del juego', 'danger');
              return;
            }
            const tagline = currentTagline.trim() || 'Juego de mesa';
            const scoringType = currentMode || 'points';
            const defaultDuration = Math.max(5, Math.min(360, Number(currentDur) || 30));
            const minPlayers = Math.max(1, Math.min(12, Number(currentMinP) || 1));
            const maxPlayers = Math.max(minPlayers, Math.min(20, Number(currentMaxP) || minPlayers));
            const rulesNotes = (currentRulesNotes || '').trim();
            const parsedWinModes = currentWinModesStr.split(',').map((s) => s.trim()).filter(Boolean);
            const parsedPlayModes = existingGame?.extraType === 'last_bullet'
              ? (currentHasSolo ? ['PvP', 'Cooperativo', 'Solitario'] : ['PvP', 'Cooperativo'])
              : (currentHasSolo
                ? (scoringType === 'coop' ? ['Cooperativo', 'Solitario'] : ['Multijugador', 'Solitario'])
                : undefined);

            if (isEdit) {
              const target = games.find((g) => g.id === existingGame.id);
              if (target) {
                target.name = name;
                target.tagline = tagline;
                target.color = chosenColor.color;
                target.color2 = chosenColor.color2;
                target.icon = chosenIcon;
                target.scoringType = scoringType;
                target.weight = currentWeight;
                target.defaultDuration = defaultDuration;
                target.minPlayers = minPlayers;
                target.maxPlayers = maxPlayers;
                if (rulesNotes !== String(target.rulesNotes || '').trim()) {
                  target.rulesNotes = rulesNotes;
                  target.rulesUpdatedAt = Date.now();
                }
                target.metaUpdatedAt = Date.now();
                if (parsedWinModes.length > 0) {
                  target.winModes = parsedWinModes;
                  target.allowCustomWinMode = true;
                } else {
                  delete target.winModes;
                  delete target.allowCustomWinMode;
                }
                if (parsedPlayModes) {
                  target.playModes = parsedPlayModes;
                } else {
                  delete target.playModes;
                }
              }
              if (draft.gameId === existingGame.id) {
                draft.duration = defaultDuration;
                saveDraftLocal();
              }
              saveGamesLocal();
              closeModal();
              renderActiveTab();
              showToast(`${name} actualizado`, 'success');
            } else {
              const slug = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '_') + '_' + Date.now().toString(36).slice(-3);
              const newGame = {
                id: slug,
                name,
                tagline,
                color: chosenColor.color,
                color2: chosenColor.color2,
                icon: chosenIcon,
                scoringType,
                weight: currentWeight,
                minPlayers,
                maxPlayers,
                defaultDuration,
                rulesNotes,
                extraType: 'none',
                ...(parsedWinModes.length > 0 ? { winModeLabel: 'Forma de victoria', winModes: parsedWinModes, allowCustomWinMode: true } : {}),
                ...(parsedPlayModes ? { playModes: parsedPlayModes } : {}),
              };
              games.push(newGame);
              deletedGameIds = deletedGameIds.filter((id) => id !== newGame.id);
              saveGamesLocal();
              saveDeletedGamesLocal();
              draft.gameId = newGame.id;
              draft.duration = newGame.defaultDuration;
              saveDraftLocal();
              closeModal();
              document.getElementById('header-subtitle').textContent = `${games.length} juegos en colección`;
              renderActiveTab();
              showToast(`${name} añadido a tu ludoteca`, 'success');
            }
          },
        },
      ],
    });

    document.getElementById('modal-body').onclick = (e) => {
      const mBtn = e.target.closest('[data-pick-mode]');
      if (mBtn) {
        syncFieldsFromDom();
        currentMode = mBtn.dataset.pickMode || 'points';
        renderForm();
        return;
      }
      const wBtn = e.target.closest('[data-pick-weight]');
      if (wBtn) {
        syncFieldsFromDom();
        currentWeight = wBtn.dataset.pickWeight || 'medium';
        renderForm();
        return;
      }
      const cBtn = e.target.closest('[data-pick-color]');
      if (cBtn) {
        syncFieldsFromDom();
        chosenColor = PALETTE_CHOICES[Number(cBtn.dataset.pickColor)];
        renderForm();
        return;
      }
      const iBtn = e.target.closest('[data-pick-icon]');
      if (iBtn) {
        syncFieldsFromDom();
        chosenIcon = iBtn.dataset.pickIcon;
        renderForm();
      }
    };
  };

  renderForm();
}

function confirmDeleteGame(gameId) {
  if (games.length <= 1) {
    showToast('Debes mantener al menos un juego en tu ludoteca', 'neutral');
    return;
  }
  const game = getGameById(gameId);
  const count = matchHistory.filter((m) => m.gameId === gameId).length;
  const extraNote = count > 0
    ? `Tus <strong>${count} ${count === 1 ? 'partida ya registrada' : 'partidas ya registradas'}</strong> en el historial se conservarán intactas.`
    : 'No tienes partidas registradas con este juego.';

  openModal({
    title: `¿Eliminar "${game.name}"?`,
    bodyHtml: `<p class="text-xs sm:text-sm text-inkMuted dark:text-white/75 leading-relaxed">Se quitará de tu ludoteca y del selector de nuevas partidas. ${extraNote}</p>`,
    actions: [
      { label: 'Cancelar' },
      {
        label: 'Sí, eliminar juego',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-coralBrand text-white',
        onClick: () => {
          games = games.filter((g) => g.id !== gameId);
          if (!deletedGameIds.includes(gameId)) {
            deletedGameIds.push(gameId);
          }
          saveGamesLocal();
          saveDeletedGamesLocal();

          if (draft.gameId === gameId && games.length > 0) {
            draft.gameId = games[0].id;
            draft.duration = games[0].defaultDuration || 30;
            saveDraftLocal();
          }

          document.getElementById('header-subtitle').textContent = `${games.length} juegos en colección`;
          renderActiveTab();
          showToast(`${game.name} eliminado de la ludoteca`, 'neutral');
        },
      },
    ],
  });
}

function restoreDefaultGames() {
  let restored = 0;
  DEFAULT_GAMES.forEach((def) => {
    if (!games.some((g) => g.id === def.id)) {
      games.push(JSON.parse(JSON.stringify(def)));
      restored++;
    }
  });
  deletedGameIds = [];
  saveGamesLocal();
  saveDeletedGamesLocal();
  document.getElementById('header-subtitle').textContent = `${games.length} juegos en colección`;
  renderActiveTab();
  showToast(restored > 0 ? `${restored} ${restored === 1 ? 'juego restaurado' : 'juegos restaurados'}` : 'Ludoteca al día', 'success');
}

// =========================================================================
// 14. ELIMINAR PARTIDA
// =========================================================================
function startEditingMatch(matchId) {
  const m = matchHistory.find((x) => x.id === matchId);
  if (!m) return;
  const g = getGameById(m.gameId);

  resetAllCalculators();
  draft = createEmptyDraft(g.id);
  draft.editingMatchId = m.id;
  draft.editingCreatedAtMs = Number(m.createdAtMs) || Date.now();
  draft.editingOriginalSource = m.source || 'local';
  draft.date = m.date || todayISO();
  draft.dateSetOn = todayISO();
  draft.manualDateOverride = true;
  draft.duration = Number(m.duration) || g.defaultDuration || 30;
  draft.notes = m.notes || '';

  if (m.meta?.playMode) draft.playMode = m.meta.playMode;
  if (m.meta?.boardSide) draft.harmoniesSide = m.meta.boardSide;
  if (m.meta?.spirit !== undefined) draft.harmoniesSpirit = Boolean(m.meta.spirit);
  if (Array.isArray(m.meta?.breakdown)) {
    const clonedBd = JSON.parse(JSON.stringify(m.meta.breakdown));
    draft.scoreBreakdown = clonedBd;
    if (g.extraType === 'harmonies') draft.harmoniesBreakdown = clonedBd;
  }
  if (m.meta?.calcSnapshot && m.meta.calcSnapshot.kind && m.meta.calcSnapshot.state) {
    draft.calcSnapshot = JSON.parse(JSON.stringify(m.meta.calcSnapshot));
  }
  if (m.meta?.map) draft.tfmMap = m.meta.map;
  if (m.meta?.generations) draft.tfmGenerations = Number(m.meta.generations) || 10;
  if (m.meta?.coopWon !== undefined) draft.coopWon = Boolean(m.meta.coopWon);
  if (m.meta?.level) draft.coopLevel = Number(m.meta.level) || 8;

  if (m.meta?.winType) {
    if (Array.isArray(g.winModes) && g.winModes.includes(m.meta.winType)) {
      draft.winMode = m.meta.winType;
    } else if (g.allowCustomWinMode) {
      draft.winMode = '__custom__';
      draft.customWinMode = m.meta.winType;
    }
  }

  if (Array.isArray(m.players) && m.players.length > 0) {
    draft.players = m.players.map((p) => ({
      name: p.name || '',
      score: p.score !== null && p.score !== undefined ? String(p.score) : '',
      winner: Boolean(p.winner),
      tag: p.tag || '',
    }));
  }

  // Precarga la calculadora del juego si hay snapshot o desglose guardado
  if (g.quickCalc) hydrateCalculatorFromDraft(g.quickCalc);

  // Preserva el ganador exacto guardado (por si fue desempate manual o por cubos)
  draft.manualWinnerOverride = true;
  uiState.logGameSearch = '';
  uiState.logSearchOpen = false;
  saveDraftLocal();
  switchTab('log', { resetScroll: true });
  setTimeout(() => {
    const activePill = document.querySelector('[data-active-game-pill="true"]');
    if (activePill) activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, 60);
  showToast(`Editando ${g.name}`, 'neutral');
}

function cancelEditingMatch() {
  const keepGame = draft.gameId;
  resetAllCalculators();
  draft = createEmptyDraft(keepGame);
  saveDraftLocal();
  renderLogTab();
  showToast('Edición cancelada', 'neutral');
}

function confirmDeleteMatch(matchId) {
  const targetMatch = matchHistory.find((m) => m.id === matchId);
  openModal({
    title: '¿Eliminar esta partida?',
    bodyHtml: '<p class="text-xs sm:text-sm text-inkMuted dark:text-white/70">Se borrará del historial permanentemente (y de Google Sheets ahora o en cuanto vuelvas a tener conexión).</p>',
    actions: [
      { label: 'Cancelar' },
      {
        label: 'Sí, eliminar',
        className: 'btn-tap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-coralBrand text-white',
        onClick: async () => {
          const needsRemoteDelete = targetMatch && (targetMatch.source === 'sheets' || Boolean(targetMatch.pendingReplaceId));
          const remoteIdToDelete = targetMatch?.pendingReplaceId || matchId;
          const hasSheetsUrl = Boolean(syncState.apiUrl || getSavedSheetsUrl());

          // Si estábamos editando esta misma partida, cancela la edición
          if (draft.editingMatchId === matchId) {
            draft = createEmptyDraft(draft.gameId);
            saveDraftLocal();
          }

          try {
            if (needsRemoteDelete && syncState.connected && syncState.apiUrl) {
              showToast('Eliminando de Sheets...', 'neutral');
              await fetchSheetsJson(syncState.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action: 'delete', pin: syncState.pin || '', partidaId: remoteIdToDelete }),
              });
            } else if (needsRemoteDelete && hasSheetsUrl) {
              if (!pendingDeletes.includes(remoteIdToDelete)) {
                pendingDeletes.push(remoteIdToDelete);
                savePendingDeletesLocal();
              }
            }
            matchHistory = matchHistory.filter((m) => m.id !== matchId);
            saveHistoryLocal();
            rebuildFrequentPlayersFromHistory();
            renderSyncBadge();
            updateNavBadge();
            renderActiveTab();
            showToast(
              needsRemoteDelete && !syncState.connected && hasSheetsUrl
                ? 'Eliminada localmente · se borrará de Sheets al reconectar'
                : 'Partida eliminada',
              'neutral'
            );
          } catch (err) {
            console.error(err);
            if (needsRemoteDelete && !pendingDeletes.includes(remoteIdToDelete)) {
              pendingDeletes.push(remoteIdToDelete);
              savePendingDeletesLocal();
            }
            matchHistory = matchHistory.filter((m) => m.id !== matchId);
            saveHistoryLocal();
            rebuildFrequentPlayersFromHistory();
            activateLocalMode('Sin conexión. Borrado añadido a la cola offline.');
            showToast('Eliminada localmente · pendiente en Sheets', 'neutral');
          }
        },
      },
    ],
  });
}

// =========================================================================
// 15. NAVEGACIÓN Y ENLACE DE EVENTOS
// =========================================================================
const tabScrollTops = { log: 0, history: 0, stats: 0, shelf: 0 };
let hasInitializedTabs = false;

function switchTab(tabName, { resetScroll = false } = {}) {
  const scroller = document.getElementById('main-scroll');

  // Tocar la pestaña ya activa sube suavemente al principio (comportamiento iOS nativo)
  if (hasInitializedTabs && tabName === uiState.activeTab && !resetScroll) {
    if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
    tabScrollTops[tabName] = 0;
    return;
  }

  // Guarda la posición actual antes de cambiar de pestaña
  if (hasInitializedTabs && scroller) {
    tabScrollTops[uiState.activeTab] = scroller.scrollTop;
  }

  uiState.activeTab = tabName;
  hasInitializedTabs = true;

  const sections = ['log', 'history', 'stats', 'shelf'];
  sections.forEach((s) => {
    const secEl = document.getElementById(`view-${s}`);
    const isTarget = s === tabName;
    secEl.classList.toggle('hidden', !isTarget);
    if (isTarget) {
      secEl.classList.remove('view-fade');
      void secEl.offsetWidth;
      secEl.classList.add('view-fade');
    }
  });

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    const active = btn.dataset.nav === tabName;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-current', active ? 'page' : 'false');
  });

  const subMap = {
    log: 'Registrar nueva partida',
    history: `${matchHistory.length} ${matchHistory.length === 1 ? 'partida registrada' : 'partidas registradas'}`,
    stats: 'Estadísticas y récords',
    shelf: `${games.length} juegos en colección`,
  };
  document.getElementById('header-subtitle').textContent = subMap[tabName] || 'Diario de Partidas';

  if (tabName === 'log') syncDraftDateToToday();
  if (tabName === 'shelf') {
    uiState.shelfProfileKey = SHELF_HOME_KEY;
  }
  if (tabName === 'stats') {
    const today = todayISO();
    uiState.heatmapSelectedDate = today;
    uiState.heatmapMonthKey = today.slice(0, 7);
  }
  if (tabName !== 'stats') destroyActiveCharts();
  renderActiveTab();

  if (scroller) {
    const targetY = resetScroll ? 0 : (tabScrollTops[tabName] || 0);
    if (resetScroll) tabScrollTops[tabName] = 0;
    requestAnimationFrame(() => { scroller.scrollTop = targetY; });
  }

  if (tabName === 'shelf' || tabName === 'history' || tabName === 'stats') {
    triggerBackgroundSync(20000);
  }
}

function renderActiveTab() {
  if (uiState.activeTab === 'log') renderLogTab();
  else if (uiState.activeTab === 'history') renderHistoryTab();
  else if (uiState.activeTab === 'stats') renderStatsTab();
  else if (uiState.activeTab === 'shelf') renderShelfTab();
}

function bindGlobalEvents() {
  document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  document.getElementById('btn-sync-settings').addEventListener('click', openSyncSettingsModal);
  document.getElementById('modal-close-x').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });

  // Gesto nativo de cierre arrastrando hacia abajo (swipe-to-dismiss) en modales móvil
  (() => {
    const backdrop = document.getElementById('modal-backdrop');
    const card = document.getElementById('modal-card');
    const modalBody = document.getElementById('modal-body');
    if (!backdrop || !card || !modalBody) return;

    let startY = 0;
    let startX = 0;
    let startTime = 0;
    let currentDy = 0;
    let dragging = false;
    let eligible = false;

    card.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      if (backdrop.classList.contains('hidden')) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.target.closest && e.target.closest('[data-star-scrubber]')) return;
      const inBody = modalBody.contains(e.target);
      if (inBody && modalBody.scrollTop > 2) return;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      startTime = Date.now();
      currentDy = 0;
      dragging = false;
      eligible = true;
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!eligible || e.touches.length !== 1) return;
      const dy = e.touches[0].clientY - startY;
      const dx = Math.abs(e.touches[0].clientX - startX);
      if (!dragging) {
        if (dy < 8 || dx > dy) {
          if (dy < -8 || dx > 14) eligible = false;
          return;
        }
        if (modalBody.contains(e.target) && modalBody.scrollTop > 2) {
          eligible = false;
          return;
        }
        dragging = true;
        card.classList.remove('is-snapping');
        card.classList.add('is-dragging');
      }
      if (dy > 0) {
        currentDy = dy;
        card.style.transform = `translate3d(0, ${dy}px, 0)`;
        const fade = Math.max(0.12, 0.55 * (1 - Math.min(1, dy / 340)));
        backdrop.style.backgroundColor = `rgba(0, 0, 0, ${fade.toFixed(3)})`;
      }
    }, { passive: true });

    const finishDrag = () => {
      if (!dragging) {
        eligible = false;
        return;
      }
      const dt = Math.max(1, Date.now() - startTime);
      const velocity = currentDy / dt;
      dragging = false;
      eligible = false;
      card.classList.remove('is-dragging');
      card.classList.add('is-snapping');

      if (currentDy > 95 || (currentDy > 42 && velocity > 0.45)) {
        card.style.transform = `translate3d(0, 100%, 0)`;
        backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setTimeout(() => closeModal(), 200);
      } else {
        card.style.transform = 'translate3d(0, 0, 0)';
        backdrop.style.backgroundColor = '';
        setTimeout(() => {
          card.classList.remove('is-snapping');
          card.style.transform = '';
        }, 280);
      }
    };
    card.addEventListener('touchend', finishDrag, { passive: true });
    card.addEventListener('touchcancel', finishDrag, { passive: true });
  })();

  // Gesto nativo Pull-to-Refresh en #main-scroll para sincronizar con Sheets
  (() => {
    const scroller = document.getElementById('main-scroll');
    const appBg = document.getElementById('app-bg');
    if (!scroller || !appBg) return;

    const pill = document.createElement('div');
    pill.id = 'ptr-pill';
    pill.className = 'ptr-pill';
    pill.setAttribute('aria-hidden', 'true');
    pill.innerHTML = `
      <svg id="ptr-icon" class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
      </svg>
      <span id="ptr-text">Desliza para sincronizar</span>
    `;
    appBg.appendChild(pill);

    const iconEl = pill.querySelector('#ptr-icon');
    const textEl = pill.querySelector('#ptr-text');
    const THRESHOLD = 56;
    let startY = 0;
    let startX = 0;
    let pulling = false;
    let eligible = false;
    let pullDist = 0;
    let readyTriggered = false;
    let refreshing = false;

    const resetPill = () => {
      pill.classList.remove('is-dragging', 'is-ready', 'is-refreshing');
      pill.style.opacity = '';
      pill.style.transform = '';
      if (iconEl) {
        iconEl.classList.remove('spin-fast');
        iconEl.style.transform = '';
      }
      pulling = false;
      eligible = false;
      pullDist = 0;
      readyTriggered = false;
    };

    scroller.addEventListener('touchstart', (e) => {
      if (refreshing || e.touches.length !== 1) return;
      const backdrop = document.getElementById('modal-backdrop');
      if (backdrop && !backdrop.classList.contains('hidden')) return;
      if (scroller.scrollTop > 1) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (e.target.closest('.scroll-strip, .scroll-strip-cards, .overflow-x-auto')) return;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      eligible = true;
      pulling = false;
      pullDist = 0;
      readyTriggered = false;
    }, { passive: true });

    scroller.addEventListener('touchmove', (e) => {
      if (!eligible || refreshing || e.touches.length !== 1) return;
      if (scroller.scrollTop > 1) { eligible = false; return; }
      const dy = e.touches[0].clientY - startY;
      const dx = Math.abs(e.touches[0].clientX - startX);
      if (!pulling) {
        if (dy < 10) {
          if (dy < -8 || dx > 16) eligible = false;
          return;
        }
        if (dx > dy * 0.72) { eligible = false; return; }
        pulling = true;
        pill.classList.add('is-dragging');
      }
      pullDist = Math.min(84, Math.max(0, dy * 0.46));
      const ratio = Math.min(1, pullDist / THRESHOLD);
      pill.style.opacity = String(Math.min(1, ratio * 1.15).toFixed(3));
      pill.style.transform = `translate3d(-50%, ${Math.round(-18 + pullDist * 0.44)}px, 0) scale(${(0.92 + ratio * 0.08).toFixed(3)})`;
      if (iconEl) iconEl.style.transform = `rotate(${Math.round(ratio * 220)}deg)`;

      const isReady = pullDist >= THRESHOLD;
      pill.classList.toggle('is-ready', isReady);
      if (textEl) {
        textEl.textContent = isReady
          ? (getSavedSheetsUrl() ? 'Suelta para sincronizar' : 'Suelta para refrescar')
          : (getSavedSheetsUrl() ? 'Desliza para sincronizar' : 'Desliza para refrescar');
      }
      if (isReady && !readyTriggered) {
        readyTriggered = true;
        try { if (navigator.vibrate) navigator.vibrate(12); } catch (err) {}
      } else if (!isReady) {
        readyTriggered = false;
      }
    }, { passive: true });

    const finishPull = async () => {
      if (!pulling) { eligible = false; return; }
      const shouldRefresh = pullDist >= THRESHOLD;
      if (!shouldRefresh) {
        resetPill();
        return;
      }

      refreshing = true;
      pulling = false;
      eligible = false;
      pill.classList.remove('is-dragging', 'is-ready');
      pill.classList.add('is-refreshing');
      pill.style.opacity = '';
      pill.style.transform = '';
      if (iconEl) {
        iconEl.style.transform = '';
        iconEl.classList.add('spin-fast');
      }
      if (textEl) textEl.textContent = getSavedSheetsUrl() ? 'Sincronizando…' : 'Actualizando…';

      try {
        if (getSavedSheetsUrl()) {
          await Promise.allSettled([
            syncFromSheets({ silent: false }),
            checkSwUpdateThrottled(true),
          ]);
        } else {
          renderActiveTab();
          showToast('Vista actualizada (modo local)', 'neutral');
          await new Promise((r) => setTimeout(r, 380));
        }
      } finally {
        refreshing = false;
        resetPill();
      }
    };

    scroller.addEventListener('touchend', finishPull, { passive: true });
    scroller.addEventListener('touchcancel', () => { if (!refreshing) resetPill(); }, { passive: true });
  })();

  let segResizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(segResizeTimer);
    segResizeTimer = setTimeout(() => requestAnimationFrame(syncSegmentedControls), 140);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const backdrop = document.getElementById('modal-backdrop');
      if (backdrop && !backdrop.classList.contains('hidden')) {
        closeModal();
      }
    }
  });

  // Al volver a la app: actualiza fecha, sincroniza datos de Sheets y busca nueva versión en GitHub
  const handleAppResume = () => {
    if (syncDraftDateToToday() && uiState.activeTab === 'log') {
      renderLogTab();
    }
    ensureTimerTick();
    triggerBackgroundSync(15000);
    checkSwUpdateThrottled(false);
  };
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') handleAppResume();
  });
  window.addEventListener('pageshow', handleAppResume);
  window.addEventListener('focus', () => {
    if (syncDraftDateToToday() && uiState.activeTab === 'log') {
      renderLogTab();
    }
    ensureTimerTick();
    triggerBackgroundSync(20000);
  });
  window.addEventListener('online', () => {
    if (getSavedSheetsUrl()) {
      syncFromSheets({ silent: getPendingSyncCount() === 0 && !syncState.catalogDirty });
    }
    checkSwUpdateThrottled(false);
  });

  document.body.addEventListener('click', (e) => {
    const navBtn = e.target.closest('[data-nav]');
    if (navBtn) {
      switchTab(navBtn.dataset.nav);
      return;
    }

    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;

    switch (action) {
      case 'select-game': {
        const g = getGameById(el.dataset.gameId);
        if (draft.gameId !== g.id) {
          resetAllCalculators();
          draft.calcSnapshot = null;
          draft.scoreBreakdown = null;
          draft.harmoniesBreakdown = null;
        }
        draft.gameId = g.id;
        draft.duration = g.defaultDuration || 30;
        draft.winMode = '';
        draft.customWinMode = '';
        draft.playMode = '';
        draft.manualWinnerOverride = false;
        uiState.logGameSearch = '';
        uiState.logSearchOpen = false;
        saveDraftLocal();
        renderLogTab();
        setTimeout(() => {
          const activePill = document.querySelector('[data-active-game-pill="true"]');
          if (activePill) activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }, 30);
        break;
      }
      case 'quick-log-game': {
        const g = getGameById(el.dataset.gameId);
        if (draft.gameId !== g.id) {
          resetAllCalculators();
          draft.calcSnapshot = null;
          draft.scoreBreakdown = null;
          draft.harmoniesBreakdown = null;
        }
        draft.gameId = g.id;
        draft.duration = g.defaultDuration || 30;
        draft.winMode = '';
        draft.customWinMode = '';
        draft.playMode = '';
        draft.manualWinnerOverride = false;
        uiState.logGameSearch = '';
        uiState.logSearchOpen = false;
        saveDraftLocal();
        switchTab('log', { resetScroll: true });
        setTimeout(() => {
          const activePill = document.querySelector('[data-active-game-pill="true"]');
          if (activePill) activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }, 60);
        break;
      }
      case 'set-play-mode': {
        const val = el.dataset.val;
        draft.playMode = val;
        const g = getGameById(draft.gameId);
        const soloNow = isDraftSoloMode(g);
        if (soloNow && draft.players.length > 1) {
          // Elimina filas secundarias totalmente vacías al pasar a Solitario
          const filled = draft.players.filter((p) => p.name.trim() || (p.score !== '' && p.score !== null) || p.winner || (p.tag || '').trim());
          draft.players = filled.length > 0 ? filled : [draft.players[0]];
        } else if (!soloNow && draft.players.length === 1) {
          draft.players.push({ name: '', score: '', winner: false, tag: '' });
        }
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'set-win-mode': {
        const val = el.dataset.val;
        draft.winMode = val;
        saveDraftLocal();
        renderLogTab();
        if (val === '__custom__') {
          const inp = document.getElementById('draft-custom-win-mode');
          if (inp) inp.focus();
        }
        break;
      }
      case 'open-quick-calc': {
        const c = el.dataset.calc;
        if (c === 'harmonies') openHarmoniesScorer();
        else if (c === 'wyrmspan') openWyrmspanScorer();
        else if (c === 'tfm') openTfmScorer();
        else if (c === 'ttr') openTtrScorer();
        else if (c === 'flip7') openFlip7Scorer();
        else if (c === 'sushigo') openSushiGoScorer();
        else if (c === 'skullking') openSkullKingScorer();
        else if (c === 'faraway') openFarawayScorer();
        else if (c === 'odin') openOdinScorer();
        break;
      }
      case 'open-quick-calc-for': {
        const g = getGameById(el.dataset.gameId);
        draft.gameId = g.id;
        draft.duration = g.defaultDuration || 20;
        saveDraftLocal();
        switchTab('log', { resetScroll: true });
        const c = el.dataset.calc;
        if (c === 'harmonies') openHarmoniesScorer();
        else if (c === 'wyrmspan') openWyrmspanScorer();
        else if (c === 'tfm') openTfmScorer();
        else if (c === 'ttr') openTtrScorer();
        else if (c === 'flip7') openFlip7Scorer();
        else if (c === 'sushigo') openSushiGoScorer();
        else if (c === 'skullking') openSkullKingScorer();
        else if (c === 'faraway') openFarawayScorer();
        else if (c === 'odin') openOdinScorer();
        break;
      }
      case 'open-player-profiles': {
        openPlayerProfilesModal();
        break;
      }
      case 'view-harmonies-breakdown': {
        openHarmoniesBreakdownModal(el.dataset.id);
        break;
      }
      case 'add-draft-player': {
        if (draft.players.length < 10) {
          draft.players.push({ name: '', score: '', winner: false, tag: '' });
          saveDraftLocal();
          renderLogTab();
        }
        break;
      }
      case 'remove-draft-player': {
        const idx = Number(el.dataset.idx);
        if (draft.players.length > 1) {
          draft.players.splice(idx, 1);
          syncAutoWinners();
          saveDraftLocal();
          renderLogTab();
        }
        break;
      }
      case 'quick-fill-player': {
        const name = el.dataset.name;
        const emptyIdx = draft.players.findIndex((p) => !p.name.trim());
        if (emptyIdx >= 0) {
          draft.players[emptyIdx].name = name;
        } else if (draft.players.length < 10) {
          draft.players.push({ name, score: '', winner: false, tag: '' });
        }
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'toggle-player-winner': {
        const idx = Number(el.dataset.idx);
        draft.manualWinnerOverride = true;
        draft.players[idx].winner = !draft.players[idx].winner;
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'set-draft-field': {
        draft[el.dataset.field] = el.dataset.val;
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'toggle-draft-bool': {
        draft[el.dataset.field] = !draft[el.dataset.field];
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'set-draft-bool': {
        draft[el.dataset.field] = el.dataset.val === 'true';
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'step-tfm-gen': {
        draft.tfmGenerations = Math.max(1, Math.min(30, (draft.tfmGenerations || 10) + Number(el.dataset.delta)));
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'step-coop-level': {
        draft.coopLevel = Math.max(1, Math.min(12, (draft.coopLevel || 8) + Number(el.dataset.delta)));
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'set-duration': {
        draft.duration = Number(el.dataset.val);
        saveDraftLocal();
        renderLogTab();
        break;
      }
      case 'reset-draft-date': {
        syncDraftDateToToday({ force: true });
        renderLogTab();
        break;
      }
      case 'clear-draft': {
        const keepGame = draft.gameId;
        resetAllCalculators();
        draft = createEmptyDraft(keepGame);
        saveDraftLocal();
        renderLogTab();
        showToast('Formulario limpiado', 'neutral');
        break;
      }
      case 'save-match': {
        saveDraftMatch();
        break;
      }
      case 'delete-match': {
        confirmDeleteMatch(el.dataset.id);
        break;
      }
      case 'refresh-sheets': {
        syncFromSheets({ silent: false });
        break;
      }
      case 'set-history-profile': {
        uiState.historyProfileKey = normName(el.dataset.key) || SHELF_HOME_KEY;
        uiState.historyFilterGame = 'all';
        uiState.historyLimit = 30;
        uiState.expandedHistoryLedgerId = null;
        renderHistoryTab();
        break;
      }
      case 'toggle-ledger-match': {
        const mid = el.dataset.id;
        uiState.expandedHistoryLedgerId = uiState.expandedHistoryLedgerId === mid ? null : mid;
        updateHistoryDynamicRegion();
        break;
      }
      case 'filter-history-game': {
        uiState.historyFilterGame = el.dataset.val;
        uiState.historyLimit = 30;
        updateHistoryDynamicRegion();
        break;
      }
      case 'load-more-history': {
        uiState.historyLimit = (Number(uiState.historyLimit) || 30) + 30;
        updateHistoryDynamicRegion();
        break;
      }
      case 'filter-stats-game': {
        uiState.statsFilterGame = el.dataset.val;
        renderStatsTab();
        break;
      }
      case 'set-stats-donut-mode': {
        uiState.statsDonutMode = el.dataset.val === 'hours' ? 'hours' : 'plays';
        renderStatsTab();
        break;
      }
      case 'set-stats-subtab': {
        const val = el.dataset.val;
        uiState.statsSubTab = (val === 'badges' || val === 'ranking') ? val : 'overview';
        renderStatsTab();
        const scroller = document.getElementById('main-scroll');
        if (scroller) scroller.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      }
      case 'open-rating-info': {
        openRatingInfoModal();
        break;
      }
      case 'open-player-rating-detail': {
        openPlayerRatingDetailModal(el.dataset.key || '', uiState.statsFilterGame);
        break;
      }
      case 'toast-vs-duel': {
        if (el.dataset.msg) showToast(el.dataset.msg, 'neutral');
        break;
      }
      case 'open-stats-player-filter': {
        openStatsPlayerFilterModal();
        break;
      }
      case 'clear-stats-player-filter': {
        uiState.statsPlayerMode = 'all';
        uiState.statsPlayerA = '';
        uiState.statsPlayerB = '';
        renderStatsTab();
        break;
      }
      case 'open-add-game': {
        openGameModal(null);
        break;
      }
      case 'open-edit-game': {
        const g = games.find((x) => x.id === el.dataset.gameId);
        if (g) openGameModal(g);
        break;
      }
      case 'confirm-delete-game': {
        confirmDeleteGame(el.dataset.gameId);
        break;
      }
      case 'restore-default-games': {
        restoreDefaultGames();
        break;
      }
      case 'toggle-log-search': {
        uiState.logSearchOpen = !uiState.logSearchOpen;
        if (!uiState.logSearchOpen) uiState.logGameSearch = '';
        renderLogTab();
        if (uiState.logSearchOpen) {
          const inp = document.getElementById('log-game-search-input');
          if (inp) inp.focus();
        }
        break;
      }
      case 'set-shelf-sort': {
        uiState.shelfSort = el.dataset.val || 'default';
        renderShelfTab();
        break;
      }
      case 'set-shelf-profile': {
        setActiveShelfProfile(el.dataset.key || SHELF_HOME_KEY);
        renderShelfTab();
        break;
      }
      case 'toggle-corp-picker': {
        const idx = Number(el.dataset.idx);
        uiState.openCorpPickerIdx = uiState.openCorpPickerIdx === idx ? -1 : idx;
        renderLogTab();
        break;
      }
      case 'pick-player-tag': {
        const idx = Number(el.dataset.idx);
        if (draft.players[idx]) {
          draft.players[idx].tag = el.dataset.val || '';
          saveDraftLocal();
        }
        uiState.openCorpPickerIdx = -1;
        renderLogTab();
        break;
      }
      case 'edit-match': {
        startEditingMatch(el.dataset.id);
        break;
      }
      case 'cancel-edit-match': {
        cancelEditingMatch();
        break;
      }
      case 'toggle-timer-panel': {
        uiState.timerOpen = !uiState.timerOpen;
        renderLogTab();
        break;
      }
      case 'focus-timer': {
        uiState.timerOpen = true;
        switchTab('log', { resetScroll: true });
        break;
      }
      case 'timer-toggle': {
        toggleMatchTimer();
        break;
      }
      case 'timer-reset': {
        resetMatchTimer();
        break;
      }
      case 'timer-apply': {
        applyMatchTimerToDuration();
        break;
      }
      case 'set-log-game-mode': {
        uiState.logGameMode = el.dataset.val || 'recent';
        renderLogTab();
        break;
      }
      case 'toggle-favorite-game': {
        toggleFavoriteGame(el.dataset.gameId);
        break;
      }
      case 'open-game-sheet': {
        openGameSheetModal(el.dataset.gameId);
        break;
      }
      case 'open-quick-rate': {
        openQuickRateModal(el.dataset.gameId);
        break;
      }
      case 'open-table-tools': {
        openTableToolsModal(null);
        break;
      }
      case 'open-table-tools-tab': {
        openTableToolsModal(el.dataset.tab || 'picker');
        break;
      }
      case 'share-match-png': {
        openShareMatchPngModal(el.dataset.id);
        break;
      }
      case 'open-recap-png': {
        openRecapPngModal();
        break;
      }
      case 'step-heatmap-month': {
        const targetMonth = el.dataset.val || '';
        uiState.heatmapMonthKey = targetMonth;
        uiState.heatmapSelectedDate = targetMonth === todayISO().slice(0, 7) ? todayISO() : '';
        updateStatsHeatmapPartial();
        break;
      }
      case 'reset-heatmap-today': {
        const today = todayISO();
        uiState.heatmapMonthKey = today.slice(0, 7);
        uiState.heatmapSelectedDate = today;
        updateStatsHeatmapPartial();
        break;
      }
      case 'set-recent-points-mode': {
        uiState.statsRecentPointsMode = el.dataset.val === 'top' ? 'top' : 'recent';
        renderStatsTab();
        break;
      }
      case 'select-heatmap-day': {
        selectHeatmapDayPartial(el.dataset.iso || '');
        break;
      }
      case 'set-dusty-tab': {
        uiState.dustyTab = el.dataset.val === 'unplayed' ? 'unplayed' : 'dusty';
        updateStatsDustyPartial();
        break;
      }
      case 'rematch-match': {
        const m = matchHistory.find((x) => x.id === el.dataset.id);
        if (m) {
          const g = getGameById(m.gameId);
          resetAllCalculators();
          draft = createEmptyDraft(g.id);
          draft.duration = m.duration || g.defaultDuration || 30;
          if (Array.isArray(m.players) && m.players.length > 0) {
            draft.players = m.players.map((p) => ({ name: p.name || '', score: '', winner: false, tag: '' }));
          }
          if (m.meta?.playMode) draft.playMode = m.meta.playMode;
          if (m.meta?.boardSide) draft.harmoniesSide = m.meta.boardSide;
          if (m.meta?.spirit !== undefined) draft.harmoniesSpirit = Boolean(m.meta.spirit);
          saveDraftLocal();
          switchTab('log', { resetScroll: true });
          showToast(`Revancha lista: ${g.name}`, 'success');
        }
        break;
      }
    }
  });
}

// =========================================================================
// 16. ARRANQUE
// =========================================================================
initTheme();
renderAppVersionBadge();
setupPwaAssets();
registerOfflineServiceWorker();
loadLocalData();
bindGlobalEvents();
renderSyncBadge();
updateNavBadge();
ensureTimerTick();
switchTab('log');

const initialUrl = getSavedSheetsUrl();
if (initialUrl) {
  syncState.apiUrl = initialUrl;
  syncState.pin = getSavedPin();
  syncFromSheets({ silent: true });
}
  
