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
