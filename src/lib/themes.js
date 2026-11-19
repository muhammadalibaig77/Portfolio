// Theme palette definitions supporting 60-30-10 color proportions
// Tuned for optimal contrast, readability, and comfort across all modes

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
      accentHover: '#8B0000',
      text: '#F5F5F7',
      textMuted: 'rgba(245, 245, 247, 0.75)',
      border: 'rgba(15, 28, 63, 0.8)',
      cardBg: 'rgba(15, 28, 63, 0.45)',
      cardHoverBorder: '#8B0000',
      badgeBg: 'rgba(139, 0, 0, 0.2)',
      badgeBorder: '#8B0000',
      badgeText: '#8B0000',
      menuColors: ['#0F1C3F', '#0B0B0F'],
      menuPanelBg: '#0B0B0F',
      specularPrimaryBase: '#8B0000',
      specularSecondaryBase: '#0F1C3F',
      secondaryBtnBg: '#0F1C3F',
      secondaryBtnText: '#F5F5F7',
      secondaryBtnBorder: '#0F1C3F',
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
      accentHover: '#8B0000',
      text: '#0B0B0F',
      textMuted: 'rgba(11, 11, 15, 0.75)',
      border: 'rgba(15, 28, 63, 0.28)',
      cardBg: 'rgba(255, 255, 255, 0.55)',
      cardHoverBorder: '#8B0000',
      badgeBg: 'rgba(139, 0, 0, 0.15)',
      badgeBorder: '#8B0000',
      badgeText: '#8B0000',
      menuColors: ['#0F1C3F', '#C0C0C0'],
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
      bg: '#092742',
      surface: '#0e3253',
      accent: '#D23A00',
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
      bg: '#F5F3EF',
      surface: '#e8e4da',
      accent: '#FFC900',
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
      bg: '#08100C',
      surface: '#0A291E',
      accent: '#00FF88',
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
      bg: '#DDEAE4',
      surface: '#C8DDD3',
      accent: '#047857',
      accentGlow: 'rgba(4, 120, 87, 0.4)',
      accentHover: '#065f46',
      text: '#06281B',
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
      bg: '#0A1624', // Deep Midnight Sky (comfortable, not blinding)
      surface: '#1E1428', // Dusky Pink Surface 30%
      accent: '#FFF917', // Dream Yellow 10%
      accentGlow: 'rgba(255, 249, 23, 0.65)',
      accentHover: '#fffb47',
      text: '#F0F8FF', // Alice Cloud White
      textMuted: 'rgba(240, 248, 255, 0.75)',
      border: 'rgba(135, 206, 235, 0.3)',
      cardBg: 'rgba(135, 206, 235, 0.08)',
      cardHoverBorder: '#FFF917',
      badgeBg: 'rgba(255, 249, 23, 0.15)',
      badgeBorder: 'rgba(255, 249, 23, 0.45)',
      badgeText: '#FFF917',
      menuColors: ['#1E1428', '#0A1624'],
      menuPanelBg: '#0A1624',
      specularPrimaryBase: '#87CEEB',
      specularSecondaryBase: '#FFC0CB',
      secondaryBtnBg: 'rgba(255, 192, 203, 0.18)',
      secondaryBtnText: '#FFC0CB',
      secondaryBtnBorder: 'rgba(135, 206, 235, 0.4)',
      dotGlow: '#FFF917',
      proportions: 'Sky Blue #87CEEB (60%) • Cotton Pink #FFC0CB (30%) • Dream Yellow #FFF917 (10%)'
    },
    light: {
      id: 'dreamcore',
      name: 'Dream Core',
      bg: '#EBF5FA', // Soft Cloud Sky (calm, gentle, not blinding)
      surface: '#FCEAF0', // Soft Pastel Pink
      accent: '#D49500', // Deep Dream Yellow Amber (readable on light)
      accentGlow: 'rgba(212, 149, 0, 0.4)',
      accentHover: '#b88100',
      text: '#0F243A', // Deep Sky Navy
      textMuted: 'rgba(15, 36, 58, 0.75)',
      border: 'rgba(135, 206, 235, 0.45)',
      cardBg: 'rgba(255, 255, 255, 0.75)',
      cardHoverBorder: '#D49500',
      badgeBg: 'rgba(255, 249, 23, 0.4)',
      badgeBorder: 'rgba(212, 149, 0, 0.5)',
      badgeText: '#8A6000',
      menuColors: ['#FFC0CB', '#EBF5FA'],
      menuPanelBg: '#EBF5FA',
      specularPrimaryBase: '#87CEEB',
      specularSecondaryBase: 'rgba(255, 192, 203, 0.4)',
      secondaryBtnBg: 'rgba(255, 192, 203, 0.45)',
      secondaryBtnText: '#0F243A',
      secondaryBtnBorder: 'rgba(135, 206, 235, 0.5)',
      dotGlow: '#0F243A',
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
      bg: '#0077BE', // Ocean Blue 60%
      surface: '#0077BE',
      accent: '#FFC0CB', // Coral Pink 10%
      accentGlow: 'rgba(255, 192, 203, 0.65)',
      accentHover: '#FFC0CB',
      text: '#F9F6EE', // Pearl White 30%
      textMuted: 'rgba(249, 246, 238, 0.78)',
      border: 'rgba(249, 246, 238, 0.3)',
      cardBg: 'rgba(249, 246, 238, 0.1)',
      cardHoverBorder: '#FFC0CB',
      badgeBg: 'rgba(255, 192, 203, 0.22)',
      badgeBorder: '#FFC0CB',
      badgeText: '#FFC0CB',
      menuColors: ['#0077BE', '#0077BE'],
      menuPanelBg: '#0077BE',
      specularPrimaryBase: '#FFC0CB',
      specularSecondaryBase: '#0077BE',
      secondaryBtnBg: '#0077BE',
      secondaryBtnText: '#F9F6EE',
      secondaryBtnBorder: '#F9F6EE',
      dotGlow: '#FFC0CB',
      proportions: 'Ocean Blue #0077BE (60%) • Pearl White #F9F6EE (30%) • Coral Pink #FFC0CB (10%)'
    },
    light: {
      id: 'oceanpearl',
      name: 'Ocean Pearl',
      bg: '#F9F6EE', // Pearl White 30%
      surface: '#F9F6EE',
      accent: '#FFC0CB', // Coral Pink 10%
      accentGlow: 'rgba(255, 192, 203, 0.5)',
      accentHover: '#FFC0CB',
      text: '#0077BE', // Ocean Blue 60%
      textMuted: 'rgba(0, 119, 190, 0.8)',
      border: 'rgba(0, 119, 190, 0.25)',
      cardBg: 'rgba(0, 119, 190, 0.06)',
      cardHoverBorder: '#FFC0CB',
      badgeBg: 'rgba(255, 192, 203, 0.35)',
      badgeBorder: '#FFC0CB',
      badgeText: '#0077BE',
      menuColors: ['#0077BE', '#F9F6EE'],
      menuPanelBg: '#F9F6EE',
      specularPrimaryBase: '#0077BE',
      specularSecondaryBase: '#F9F6EE',
      secondaryBtnBg: '#F9F6EE',
      secondaryBtnText: '#0077BE',
      secondaryBtnBorder: '#0077BE',
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
      bg: '#14061F', // Deep Nocturnal Iris (comfortable dark canvas, not blinding)
      surface: '#260B3A', // Royal Iris Surface 30%
      accent: '#FF2400', // Scarlet Fire 10% (vibrant glowing accents)
      accentGlow: 'rgba(255, 36, 0, 0.65)',
      accentHover: '#ff4324',
      text: '#F8F9FA', // Frost White 30%
      textMuted: 'rgba(248, 249, 250, 0.78)',
      border: 'rgba(93, 63, 211, 0.4)',
      cardBg: 'rgba(38, 11, 58, 0.55)',
      cardHoverBorder: '#FF2400',
      badgeBg: 'rgba(255, 36, 0, 0.2)',
      badgeBorder: 'rgba(255, 36, 0, 0.5)',
      badgeText: '#FF6B52',
      menuColors: ['#260B3A', '#14061F'],
      menuPanelBg: '#14061F',
      specularPrimaryBase: '#FF2400',
      specularSecondaryBase: '#5D3FD3',
      secondaryBtnBg: '#5D3FD3',
      secondaryBtnText: '#F8F9FA',
      secondaryBtnBorder: 'rgba(93, 63, 211, 0.6)',
      dotGlow: '#FF2400',
      proportions: 'Scarlet #FF2400 (60%) • Frost White #F8F9FA (30%) • Royal Iris #5D3FD3 (10%)'
    },
    light: {
      id: 'scarletiris',
      name: 'Scarlet Iris',
      bg: '#F8F9FA', // Frost White 60%
      surface: '#F2EBF5',
      accent: '#FF2400', // Scarlet 60%
      accentGlow: 'rgba(255, 36, 0, 0.45)',
      accentHover: '#FF2400',
      text: '#1C0626', // Deep Royal Iris Ink
      textMuted: 'rgba(28, 6, 38, 0.75)',
      border: 'rgba(93, 63, 211, 0.25)',
      cardBg: 'rgba(255, 255, 255, 0.75)',
      cardHoverBorder: '#FF2400',
      badgeBg: 'rgba(255, 36, 0, 0.12)',
      badgeBorder: 'rgba(255, 36, 0, 0.35)',
      badgeText: '#D81E00',
      menuColors: ['#FF2400', '#F8F9FA'],
      menuPanelBg: '#F8F9FA',
      specularPrimaryBase: '#FF2400',
      specularSecondaryBase: 'rgba(93, 63, 211, 0.1)',
      secondaryBtnBg: 'rgba(93, 63, 211, 0.1)',
      secondaryBtnText: '#1C0626',
      secondaryBtnBorder: 'rgba(93, 63, 211, 0.3)',
      dotGlow: '#FF2400',
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
      bg: '#8E4585', // Plum Orchid 30%
      surface: '#8E4585',
      accent: '#0066FF', // Electric Cobalt 10%
      accentGlow: 'rgba(0, 102, 255, 0.65)',
      accentHover: '#0066FF',
      text: '#FC8EAC', // Flamingo Pink 60%
      textMuted: 'rgba(252, 142, 172, 0.8)',
      border: 'rgba(252, 142, 172, 0.3)',
      cardBg: 'rgba(252, 142, 172, 0.1)',
      cardHoverBorder: '#0066FF',
      badgeBg: 'rgba(0, 102, 255, 0.22)',
      badgeBorder: '#0066FF',
      badgeText: '#FC8EAC',
      menuColors: ['#8E4585', '#8E4585'],
      menuPanelBg: '#8E4585',
      specularPrimaryBase: '#0066FF',
      specularSecondaryBase: '#8E4585',
      secondaryBtnBg: '#8E4585',
      secondaryBtnText: '#FC8EAC',
      secondaryBtnBorder: '#FC8EAC',
      dotGlow: '#0066FF',
      proportions: 'Plum Orchid #8E4585 (60%) • Flamingo Pink #FC8EAC (30%) • Electric Blue #0066FF (10%)'
    },
    light: {
      id: 'girlyvibes',
      name: 'Girly Vibes',
      bg: '#FC8EAC', // Flamingo Pink 60%
      surface: '#FC8EAC',
      accent: '#0066FF', // Electric Cobalt 10%
      accentGlow: 'rgba(0, 102, 255, 0.5)',
      accentHover: '#0066FF',
      text: '#8E4585', // Plum Orchid 30%
      textMuted: 'rgba(142, 69, 133, 0.85)',
      border: 'rgba(142, 69, 133, 0.3)',
      cardBg: 'rgba(142, 69, 133, 0.08)',
      cardHoverBorder: '#0066FF',
      badgeBg: 'rgba(0, 102, 255, 0.2)',
      badgeBorder: '#0066FF',
      badgeText: '#8E4585',
      menuColors: ['#8E4585', '#FC8EAC'],
      menuPanelBg: '#FC8EAC',
      specularPrimaryBase: '#0066FF',
      specularSecondaryBase: '#FC8EAC',
      secondaryBtnBg: '#FC8EAC',
      secondaryBtnText: '#8E4585',
      secondaryBtnBorder: '#8E4585',
      dotGlow: '#0066FF',
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
