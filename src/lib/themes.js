// Theme palette definitions supporting 60-30-10 color proportions

export const THEME_PALETTES = {
  gothic: {
    id: 'gothic',
    name: 'Gothic',
    subtitle: 'Midnight • Deep Sapphire • Crimson',
    dark: {
      id: 'gothic',
      name: 'Gothic',
      bg: '#0B0B0F', // Midnight Black 60%
      surface: '#0F1C3F', // Deep Sapphire Blue 30%
      accent: '#8B0000', // Crimson Red 10%
      accentGlow: 'rgba(139, 0, 0, 0.65)',
      accentHover: '#a30000',
      text: '#F5F5F7',
      textMuted: 'rgba(245, 245, 247, 0.7)',
      border: 'rgba(15, 28, 63, 0.8)',
      cardBg: 'rgba(15, 28, 63, 0.45)',
      cardHoverBorder: 'rgba(139, 0, 0, 0.7)',
      badgeBg: 'rgba(139, 0, 0, 0.2)',
      badgeBorder: 'rgba(139, 0, 0, 0.4)',
      badgeText: '#ff6b6b',
      menuColors: ['#0F1C3F', '#0B0B0F'],
      menuPanelBg: '#0B0B0F',
      specularPrimaryBase: '#8B0000',
      specularSecondaryBase: '#0F1C3F',
      secondaryBtnBg: '#0F1C3F',
      secondaryBtnText: '#F5F5F7',
      secondaryBtnBorder: 'rgba(15, 28, 63, 0.8)',
      dotGlow: '#F5F5F7',
      proportions: 'Midnight Black #0B0B0F (60%) • Deep Sapphire Blue #0F1C3F (30%) • Crimson Red #8B0000 (10%)'
    },
    light: {
      id: 'gothic',
      name: 'Gothic',
      bg: '#C0C0C0', // Antique Silver 60%
      surface: '#0F1C3F', // Deep Sapphire Blue 30%
      accent: '#8B0000', // Crimson Red 10%
      accentGlow: 'rgba(139, 0, 0, 0.4)',
      accentHover: '#a30000',
      text: '#0B0B0F',
      textMuted: 'rgba(11, 11, 15, 0.75)',
      border: 'rgba(15, 28, 63, 0.28)',
      cardBg: 'rgba(255, 255, 255, 0.55)',
      cardHoverBorder: 'rgba(139, 0, 0, 0.7)',
      badgeBg: 'rgba(139, 0, 0, 0.15)',
      badgeBorder: 'rgba(139, 0, 0, 0.35)',
      badgeText: '#8B0000',
      menuColors: ['#0F1C3F', '#a6a6a6'],
      menuPanelBg: '#C0C0C0',
      specularPrimaryBase: '#8B0000',
      specularSecondaryBase: 'rgba(15, 28, 63, 0.1)',
      secondaryBtnBg: 'rgba(15, 28, 63, 0.1)',
      secondaryBtnText: '#0B0B0F',
      secondaryBtnBorder: 'rgba(15, 28, 63, 0.3)',
      dotGlow: '#0F1C3F',
      proportions: 'Antique Silver #C0C0C0 (60%) • Deep Sapphire Blue #0F1C3F (30%) • Crimson Red #8B0000 (10%)'
    }
  },
  classic: {
    id: 'classic',
    name: 'Classic Cyan',
    subtitle: 'Cyan Navy • Ghost White • Neon Pear',
    dark: {
      id: 'classic',
      name: 'Classic Cyan',
      bg: '#092742', // Cyan Navy 60%
      surface: '#0e3253', // Surface 30%
      accent: '#D23A00', // Neon Pear 10%
      accentGlow: 'rgba(210, 58, 0, 0.6)',
      accentHover: '#e04200',
      text: '#FEFFFA',
      textMuted: 'rgba(254, 255, 250, 0.7)',
      border: 'rgba(254, 255, 250, 0.1)',
      cardBg: 'rgba(254, 255, 250, 0.03)',
      cardHoverBorder: 'rgba(210, 58, 0, 0.4)',
      badgeBg: 'rgba(210, 58, 0, 0.15)',
      badgeBorder: 'rgba(210, 58, 0, 0.3)',
      badgeText: '#D23A00',
      menuColors: ['#0e3253', '#092742'],
      menuPanelBg: '#092742',
      specularPrimaryBase: '#D23A00',
      specularSecondaryBase: '#0e375c',
      secondaryBtnBg: '#0e375c',
      secondaryBtnText: '#FEFFFA',
      secondaryBtnBorder: 'rgba(254, 255, 250, 0.14)',
      dotGlow: '#FEFFFA',
      proportions: 'Cyan Navy #092742 (60%) • Ghost White #FEFFFA (30%) • Neon Pear #D23A00 (10%)'
    },
    light: {
      id: 'classic',
      name: 'Classic Cyan',
      bg: '#F5F3EF', // Canvas 60%
      surface: '#e8e4da', // 30%
      accent: '#FFC900', // Gold 10%
      accentGlow: 'rgba(255, 201, 0, 0.5)',
      accentHover: '#e6b500',
      text: '#08090B',
      textMuted: 'rgba(8, 9, 11, 0.7)',
      border: 'rgba(8, 9, 11, 0.1)',
      cardBg: 'rgba(255, 255, 255, 0.6)',
      cardHoverBorder: 'rgba(255, 201, 0, 0.6)',
      badgeBg: 'rgba(255, 201, 0, 0.25)',
      badgeBorder: 'rgba(255, 201, 0, 0.5)',
      badgeText: '#08090B',
      menuColors: ['#e8e4da', '#F5F3EF'],
      menuPanelBg: '#F5F3EF',
      specularPrimaryBase: '#FFC900',
      specularSecondaryBase: 'rgba(8, 9, 11, 0.05)',
      secondaryBtnBg: 'rgba(8, 9, 11, 0.05)',
      secondaryBtnText: '#08090B',
      secondaryBtnBorder: 'rgba(8, 9, 11, 0.14)',
      dotGlow: '#08090B',
      proportions: '#F5F3EF (60%) • #08090B (40%) • #FFC900 (10%)'
    }
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Matrix',
    subtitle: 'Obsidian • Deep Emerald • Neon Mint',
    dark: {
      id: 'emerald',
      name: 'Emerald Matrix',
      bg: '#08100C', // Obsidian 60%
      surface: '#0A291E', // Deep Emerald 30%
      accent: '#00FF88', // Neon Mint 10%
      accentGlow: 'rgba(0, 255, 136, 0.6)',
      accentHover: '#1aff96',
      text: '#F2FFF8',
      textMuted: 'rgba(242, 255, 248, 0.7)',
      border: 'rgba(10, 41, 30, 0.8)',
      cardBg: 'rgba(10, 41, 30, 0.35)',
      cardHoverBorder: 'rgba(0, 255, 136, 0.5)',
      badgeBg: 'rgba(0, 255, 136, 0.15)',
      badgeBorder: 'rgba(0, 255, 136, 0.35)',
      badgeText: '#00FF88',
      menuColors: ['#0A291E', '#08100C'],
      menuPanelBg: '#08100C',
      specularPrimaryBase: '#00FF88',
      specularSecondaryBase: '#0A291E',
      secondaryBtnBg: '#0A291E',
      secondaryBtnText: '#F2FFF8',
      secondaryBtnBorder: 'rgba(10, 41, 30, 0.8)',
      dotGlow: '#F2FFF8',
      proportions: 'Obsidian #08100C (60%) • Deep Emerald #0A291E (30%) • Neon Mint #00FF88 (10%)'
    },
    light: {
      id: 'emerald',
      name: 'Emerald Matrix',
      bg: '#DDEAE4', // Soft mint canvas 60%
      surface: '#C8DDD3', // Sage surface 30%
      accent: '#047857', // Forest Emerald 10%
      accentGlow: 'rgba(4, 120, 87, 0.4)',
      accentHover: '#065f46',
      text: '#06281B', // Deep forest jade ink (high contrast & crisp readability)
      textMuted: 'rgba(6, 40, 27, 0.75)',
      border: 'rgba(4, 120, 87, 0.22)',
      cardBg: 'rgba(255, 255, 255, 0.65)',
      cardHoverBorder: 'rgba(4, 120, 87, 0.6)',
      badgeBg: 'rgba(4, 120, 87, 0.12)',
      badgeBorder: 'rgba(4, 120, 87, 0.3)',
      badgeText: '#047857',
      menuColors: ['#047857', '#C2D9CD'],
      menuPanelBg: '#DDEAE4',
      specularPrimaryBase: '#047857',
      specularSecondaryBase: 'rgba(4, 120, 87, 0.08)',
      secondaryBtnBg: 'rgba(4, 120, 87, 0.08)',
      secondaryBtnText: '#06281B',
      secondaryBtnBorder: 'rgba(4, 120, 87, 0.28)',
      dotGlow: '#06281B',
      proportions: 'Mint Silver #DDEAE4 (60%) • Deep Forest #06281B (30%) • Emerald #047857 (10%)'
    }
  },
  dreamcore: {
    id: 'dreamcore',
    name: 'Dream Core',
    subtitle: 'Sky Blue • Cotton Pink • Dream Yellow',
    dark: {
      id: 'dreamcore',
      name: 'Dream Core',
      bg: '#08131E', // Dark Sky Horizon 60%
      surface: '#1E122A', // Dusky Plum Rose 30%
      accent: '#FFF917', // Dream Yellow 10%
      accentGlow: 'rgba(255, 249, 23, 0.65)',
      accentHover: '#fffb47',
      text: '#F0F8FF', // Alice Dream White
      textMuted: 'rgba(240, 248, 255, 0.75)',
      border: 'rgba(135, 206, 235, 0.28)',
      cardBg: 'rgba(255, 192, 203, 0.12)',
      cardHoverBorder: 'rgba(255, 249, 23, 0.7)',
      badgeBg: 'rgba(255, 249, 23, 0.15)',
      badgeBorder: 'rgba(255, 249, 23, 0.45)',
      badgeText: '#FFF917',
      menuColors: ['#1E122A', '#08131E'],
      menuPanelBg: '#08131E',
      specularPrimaryBase: '#87CEEB',
      specularSecondaryBase: '#1E122A',
      secondaryBtnBg: 'rgba(255, 192, 203, 0.16)',
      secondaryBtnText: '#F0F8FF',
      secondaryBtnBorder: 'rgba(135, 206, 235, 0.4)',
      dotGlow: '#FFF917',
      proportions: 'Sky Blue #87CEEB (60%) • Cotton Pink #FFC0CB (30%) • Dream Yellow #FFF917 (10%)'
    },
    light: {
      id: 'dreamcore',
      name: 'Dream Core',
      bg: '#D6EDF8', // Soft Sky Blue Canvas 60% (#87CEEB base)
      surface: '#FCE1E7', // Pastel Pink Surface 30% (#FFC0CB base)
      accent: '#D49B00', // Golden Dream Amber 10% (high contrast counterpart to #FFF917)
      accentGlow: 'rgba(212, 155, 0, 0.4)',
      accentHover: '#bd8900',
      text: '#0F2438', // Deep Sky Navy
      textMuted: 'rgba(15, 36, 56, 0.75)',
      border: 'rgba(135, 206, 235, 0.45)',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      cardHoverBorder: 'rgba(212, 155, 0, 0.7)',
      badgeBg: 'rgba(255, 249, 23, 0.45)',
      badgeBorder: 'rgba(212, 155, 0, 0.55)',
      badgeText: '#805A00',
      menuColors: ['#FFC0CB', '#D6EDF8'],
      menuPanelBg: '#D6EDF8',
      specularPrimaryBase: '#87CEEB',
      specularSecondaryBase: 'rgba(255, 192, 203, 0.35)',
      secondaryBtnBg: 'rgba(255, 192, 203, 0.45)',
      secondaryBtnText: '#0F2438',
      secondaryBtnBorder: 'rgba(135, 206, 235, 0.55)',
      dotGlow: '#0F2438',
      proportions: 'Sky Blue #87CEEB (60%) • Cotton Pink #FFC0CB (30%) • Dream Yellow #FFF917 (10%)'
    }
  },
  oceanpearl: {
    id: 'oceanpearl',
    name: 'Ocean Pearl',
    subtitle: 'Ocean Blue • Pearl White • Coral Pink',
    dark: {
      id: 'oceanpearl',
      name: 'Ocean Pearl',
      bg: '#021526', // Deep Abyssal Ocean Navy 60%
      surface: '#032845', // Ocean Blue 30%
      accent: '#FFB3C1', // Coral Rose Pearl 10%
      accentGlow: 'rgba(255, 179, 193, 0.6)',
      accentHover: '#ffc5d1',
      text: '#F9F6EE', // Pearl White 30%
      textMuted: 'rgba(249, 246, 238, 0.72)',
      border: 'rgba(0, 119, 190, 0.4)',
      cardBg: 'rgba(3, 40, 69, 0.5)',
      cardHoverBorder: 'rgba(255, 179, 193, 0.7)',
      badgeBg: 'rgba(255, 179, 193, 0.18)',
      badgeBorder: 'rgba(255, 179, 193, 0.4)',
      badgeText: '#FFB3C1',
      menuColors: ['#0077BE', '#021526'],
      menuPanelBg: '#021526',
      specularPrimaryBase: '#0077BE',
      specularSecondaryBase: '#032845',
      secondaryBtnBg: '#032845',
      secondaryBtnText: '#F9F6EE',
      secondaryBtnBorder: 'rgba(0, 119, 190, 0.5)',
      dotGlow: '#F9F6EE',
      proportions: 'Ocean Blue #0077BE (60%) • Pearl White #F9F6EE (30%) • Coral Pink #FFC0CB (10%)'
    },
    light: {
      id: 'oceanpearl',
      name: 'Ocean Pearl',
      bg: '#F9F6EE', // Bone Pearl White Canvas 60% (#F9F6EE)
      surface: '#E3EFF6', // Ocean Blue Tint Surface 30%
      accent: '#0077BE', // Ocean Cerulean Blue 10%
      accentGlow: 'rgba(0, 119, 190, 0.4)',
      accentHover: '#00639e',
      text: '#0A2540', // Deep Maritime Ink
      textMuted: 'rgba(10, 37, 64, 0.75)',
      border: 'rgba(0, 119, 190, 0.22)',
      cardBg: 'rgba(255, 255, 255, 0.75)',
      cardHoverBorder: 'rgba(0, 119, 190, 0.65)',
      badgeBg: 'rgba(255, 192, 203, 0.35)',
      badgeBorder: 'rgba(255, 192, 203, 0.65)',
      badgeText: '#C42B58',
      menuColors: ['#0077BE', '#F9F6EE'],
      menuPanelBg: '#F9F6EE',
      specularPrimaryBase: '#0077BE',
      specularSecondaryBase: 'rgba(0, 119, 190, 0.08)',
      secondaryBtnBg: 'rgba(0, 119, 190, 0.08)',
      secondaryBtnText: '#0A2540',
      secondaryBtnBorder: 'rgba(0, 119, 190, 0.25)',
      dotGlow: '#0077BE',
      proportions: 'Pearl White #F9F6EE (60%) • Ocean Blue #0077BE (30%) • Coral Pink #FFC0CB (10%)'
    }
  },
  scarletiris: {
    id: 'scarletiris',
    name: 'Scarlet Iris',
    subtitle: 'Scarlet Fire • Frost White • Royal Iris',
    dark: {
      id: 'scarletiris',
      name: 'Scarlet Iris',
      bg: '#130305', // Deep Scarlet Obsidian 60%
      surface: '#26080D', // Deep Velvet Crimson 30%
      accent: '#FF2400', // Scarlet Flame 10%
      accentGlow: 'rgba(255, 36, 0, 0.65)',
      accentHover: '#ff4324',
      text: '#F8F9FA', // Frost White 30%
      textMuted: 'rgba(248, 249, 250, 0.72)',
      border: 'rgba(255, 36, 0, 0.35)',
      cardBg: 'rgba(38, 8, 13, 0.55)',
      cardHoverBorder: 'rgba(93, 63, 211, 0.8)',
      badgeBg: 'rgba(93, 63, 211, 0.22)',
      badgeBorder: 'rgba(93, 63, 211, 0.45)',
      badgeText: '#9C84FF',
      menuColors: ['#26080D', '#130305'],
      menuPanelBg: '#130305',
      specularPrimaryBase: '#FF2400',
      specularSecondaryBase: '#5D3FD3',
      secondaryBtnBg: 'rgba(93, 63, 211, 0.25)',
      secondaryBtnText: '#F8F9FA',
      secondaryBtnBorder: 'rgba(93, 63, 211, 0.5)',
      dotGlow: '#FF2400',
      proportions: 'Scarlet #FF2400 (60%) • Frost White #F8F9FA (30%) • Royal Iris #5D3FD3 (10%)'
    },
    light: {
      id: 'scarletiris',
      name: 'Scarlet Iris',
      bg: '#F8F9FA', // Crisp Frost White Canvas 60%
      surface: '#F2EAED', // Soft Scarlet Frost 30%
      accent: '#D91C00', // Deep Scarlet Fire 10%
      accentGlow: 'rgba(217, 28, 0, 0.4)',
      accentHover: '#b81700',
      text: '#1C070B', // Obsidian Scarlet Ink
      textMuted: 'rgba(28, 7, 11, 0.75)',
      border: 'rgba(217, 28, 0, 0.22)',
      cardBg: 'rgba(255, 255, 255, 0.72)',
      cardHoverBorder: 'rgba(93, 63, 211, 0.7)',
      badgeBg: 'rgba(93, 63, 211, 0.12)',
      badgeBorder: 'rgba(93, 63, 211, 0.35)',
      badgeText: '#5D3FD3',
      menuColors: ['#FF2400', '#F8F9FA'],
      menuPanelBg: '#F8F9FA',
      specularPrimaryBase: '#D91C00',
      specularSecondaryBase: 'rgba(93, 63, 211, 0.1)',
      secondaryBtnBg: 'rgba(93, 63, 211, 0.1)',
      secondaryBtnText: '#1C070B',
      secondaryBtnBorder: 'rgba(93, 63, 211, 0.3)',
      dotGlow: '#D91C00',
      proportions: 'Frost White #F8F9FA (60%) • Scarlet #FF2400 (30%) • Royal Iris #5D3FD3 (10%)'
    }
  },
  girlyvibes: {
    id: 'girlyvibes',
    name: 'Girly Vibes',
    subtitle: 'Flamingo Pink • Plum Orchid • Electric Cobalt',
    dark: {
      id: 'girlyvibes',
      name: 'Girly Vibes',
      bg: '#160815', // Midnight Plum Velvet 60%
      surface: '#30112D', // Rich Plum Orchid 30% (#8E4585)
      accent: '#0066FF', // Electric Cobalt Blue 10%
      accentGlow: 'rgba(0, 102, 255, 0.65)',
      accentHover: '#247dff',
      text: '#FDF2F7', // Petal White
      textMuted: 'rgba(253, 242, 247, 0.72)',
      border: 'rgba(252, 142, 172, 0.32)',
      cardBg: 'rgba(48, 17, 45, 0.55)',
      cardHoverBorder: 'rgba(0, 102, 255, 0.8)',
      badgeBg: 'rgba(0, 102, 255, 0.22)',
      badgeBorder: 'rgba(0, 102, 255, 0.5)',
      badgeText: '#5296FF',
      menuColors: ['#8E4585', '#160815'],
      menuPanelBg: '#160815',
      specularPrimaryBase: '#FC8EAC',
      specularSecondaryBase: '#0066FF',
      secondaryBtnBg: 'rgba(0, 102, 255, 0.2)',
      secondaryBtnText: '#FDF2F7',
      secondaryBtnBorder: 'rgba(0, 102, 255, 0.5)',
      dotGlow: '#FC8EAC',
      proportions: 'Flamingo Pink #FC8EAC (60%) • Plum Orchid #8E4585 (30%) • Electric Blue #0066FF (10%)'
    },
    light: {
      id: 'girlyvibes',
      name: 'Girly Vibes',
      bg: '#FDF0F4', // Flamingo Blush Canvas 60% (#FC8EAC base)
      surface: '#F4D5DF', // Soft Plum Surface 30%
      accent: '#0066FF', // Electric Cobalt Blue 10%
      accentGlow: 'rgba(0, 102, 255, 0.4)',
      accentHover: '#0052cc',
      text: '#2C0E28', // Plum Espresso
      textMuted: 'rgba(44, 14, 40, 0.75)',
      border: 'rgba(142, 69, 133, 0.25)',
      cardBg: 'rgba(255, 255, 255, 0.75)',
      cardHoverBorder: 'rgba(0, 102, 255, 0.7)',
      badgeBg: 'rgba(0, 102, 255, 0.12)',
      badgeBorder: 'rgba(0, 102, 255, 0.35)',
      badgeText: '#0052CC',
      menuColors: ['#8E4585', '#FDF0F4'],
      menuPanelBg: '#FDF0F4',
      specularPrimaryBase: '#0066FF',
      specularSecondaryBase: 'rgba(142, 69, 133, 0.12)',
      secondaryBtnBg: 'rgba(142, 69, 133, 0.12)',
      secondaryBtnText: '#2C0E28',
      secondaryBtnBorder: 'rgba(142, 69, 133, 0.3)',
      dotGlow: '#8E4585',
      proportions: 'Flamingo Pink #FC8EAC (60%) • Plum Orchid #8E4585 (30%) • Electric Blue #0066FF (10%)'
    }
  }
};

export const DEFAULT_THEME_ID = 'gothic';

export function getPalette(themeId = DEFAULT_THEME_ID, isDark = true) {
  const theme = THEME_PALETTES[themeId] || THEME_PALETTES.gothic;
  return isDark ? theme.dark : theme.light;
}

export function applyThemeToDocument(themeId, isDark) {
  if (typeof document === 'undefined') return;
  const palette = getPalette(themeId, isDark);
  const root = document.documentElement;

  root.style.setProperty('--theme-bg', palette.bg);
  root.style.setProperty('--theme-surface', palette.surface);
  root.style.setProperty('--theme-accent', palette.accent);
  root.style.setProperty('--theme-accent-glow', palette.accentGlow || 'rgba(4, 120, 87, 0.4)');
  root.style.setProperty('--theme-text', palette.text);
  root.style.setProperty('--theme-text-muted', palette.textMuted);
  root.style.setProperty('--theme-border', palette.border);
  root.style.setProperty('--theme-card-bg', palette.cardBg);

  if (isDark) {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
  }
}
