import React, { useState, useEffect } from 'react';
import DotField from './components/DotField';
import StaggeredMenu from './components/StaggeredMenu';
import TechText from './components/TechText';
import AnimatedContent from './components/AnimatedContent';
import BounceCards from './components/BounceCards';
import FlexCarousel from './components/FlexCarousel';
import SpecularButton from './components/SpecularButton';
import ThemeToggle from './components/ThemeToggle';
import { getPalette, applyThemeToDocument, DEFAULT_THEME_ID, THEME_PALETTES } from './lib/themes';
import data from './data/portfolioData.json';

const carouselItems = [
  { src: '/images/one.jpg', alt: 'A chrome sculpture', title: 'Iridescence' },
  { src: '/images/two.jpg', alt: 'A figure on a white set', title: 'White Room' },
  { src: '/images/three.jpg', alt: 'A clay bust in profile', title: 'Clay Study', subtitle: 'Studio 04' }
];

export default function App() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme_palette');
      if (savedTheme && THEME_PALETTES[savedTheme]) return savedTheme;
    }
    return DEFAULT_THEME_ID;
  });

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      applyThemeToDocument(currentTheme, isDark);
      localStorage.setItem('theme_palette', currentTheme);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [currentTheme, isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const palette = getPalette(currentTheme, isDark);

  // Responsive font sizes for TechText headings
  const heroHeadingSize = windowWidth < 640 ? 52 : windowWidth < 1024 ? 84 : 120;
  const sectionHeadingSize = windowWidth < 640 ? 38 : windowWidth < 1024 ? 56 : 76;

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative min-h-screen transition-colors duration-300 overflow-x-hidden"
      style={{
        backgroundColor: palette.bg,
        color: palette.text
      }}
    >
      {/* 1. REQUIRED BACKGROUND COMPONENT: DotField (Larger dots, theme-aware) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DotField
          gradientFrom={palette.accent}
          gradientTo={palette.bg}
          glowColor={palette.dotGlow}
          dotRadius={2.4}
          dotSpacing={22}
          cursorRadius={180}
          bulgeStrength={0.35}
          glowRadius={120}
          lightMode={!isDark}
        />
      </div>

      {/* 2. REQUIRED MENU COMPONENT: StaggeredMenu with SpecularButton & AnimatedList Theme Switcher */}
      <StaggeredMenu
        position="right"
        items={data.navigation.menuItems}
        socialItems={data.navigation.socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor={palette.text}
        openMenuButtonColor={palette.text}
        changeMenuColorOnOpen={true}
        colors={palette.menuColors}
        logoUrl="/react.svg"
        accentColor={palette.accent}
        panelBg={palette.menuPanelBg}
        panelBorder={palette.border}
        isFixed={true}
        isDark={isDark}
        currentTheme={currentTheme}
        onThemeSelect={(themeId) => setCurrentTheme(themeId)}
        headerAction={
          <ThemeToggle
            isDark={isDark}
            onToggle={toggleTheme}
            accentColor={palette.accent}
            surfaceColor={palette.surface}
          />
        }
      />

      {/* MAIN CONTENT WRAPPER */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-36 flex flex-col gap-28 sm:gap-36">

        {/* =========================================================================
            SECTION 1: HERO
        ========================================================================= */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-4">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            blur={0}
            stagger={0.06}
            threshold={0.1}
          >
            {/* Main Title via TechText */}
            <div className="w-full h-[110px] sm:h-[150px] lg:h-[180px] relative -ml-2 mb-3">
              <TechText
                text={data.hero.techHeading}
                fontWeight={700}
                fontSize={heroHeadingSize}
                fontFamily="'SF Pro Display', -apple-system, 'Inter', sans-serif"
                color={palette.text}
                accentColor={palette.accent}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={12}
                intro="none"
                introDuration={1.8}
                clickKick
                guides={false}
              />
            </div>

            {/* Sub-heading & Description */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 max-w-2xl leading-snug" style={{ color: palette.text }}>
              {data.hero.subheading}
            </h2>
            <p className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8" style={{ color: palette.textMuted }}>
              {data.hero.tagline}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <SpecularButton
                size="lg"
                radius={16}
                tint={palette.text}
                tintOpacity={0.06}
                textColor="#ffffff"
                lineColor={palette.text}
                baseColor={palette.specularPrimaryBase}
                intensity={1}
                idleIntensity={0.35}
                shineSize={10}
                shineFade={34}
                thickness={1.2}
                glow={1}
                followMouse
                proximity={240}
                style={{
                  backgroundColor: palette.specularPrimaryBase,
                  color: '#ffffff',
                  fontWeight: 600
                }}
                onClick={() => handleScrollTo('projects')}
              >
                View Projects
              </SpecularButton>

              <SpecularButton
                size="lg"
                radius={16}
                tint={palette.text}
                tintOpacity={isDark ? 0.04 : 0.08}
                textColor={palette.secondaryBtnText || palette.text}
                lineColor={palette.text}
                baseColor={palette.secondaryBtnBg || palette.surface}
                intensity={0.8}
                idleIntensity={0.25}
                shineSize={10}
                shineFade={30}
                thickness={1}
                glow={0.6}
                followMouse
                proximity={240}
                style={{
                  backgroundColor: palette.secondaryBtnBg || palette.surface,
                  color: palette.secondaryBtnText || palette.text,
                  borderColor: palette.secondaryBtnBorder || palette.border,
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
                onClick={() => handleScrollTo('contact')}
              >
                Get in Touch
              </SpecularButton>
            </div>

            {/* FlexCarousel Visual Showcase */}
            <div style={{ width: '100%', height: '560px', position: 'relative' }}>
              <FlexCarousel
                items={carouselItems}
                preset="liquid"
                intro="deal"
                cardHeight={0.5}
                gap={12}
                squeeze={0.2}
                focusOnClick
                captions
                liquid={1}
              />
            </div>
          </AnimatedContent>
        </section>

        {/* =========================================================================
            SECTION 2: SKILLS
        ========================================================================= */}
        <section id="skills" className="scroll-mt-24">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            blur={0}
            stagger={0.06}
            threshold={0.1}
          >
            <div className="w-full h-[90px] sm:h-[120px] relative mb-2">
              <TechText
                text={data.skills.techHeading}
                fontWeight={600}
                fontSize={sectionHeadingSize}
                fontFamily="'SF Pro Display', -apple-system, 'Inter', sans-serif"
                color={palette.text}
                accentColor={palette.accent}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={12}
                intro="none"
                introDuration={1.6}
                clickKick
                guides={false}
              />
            </div>

            <p className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: palette.textMuted }}>
              {data.skills.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skills.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-7 sm:p-8 rounded-2xl border transition-colors duration-200 flex flex-col justify-between"
                  style={{
                    backgroundColor: palette.cardBg,
                    borderColor: palette.border
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold" style={{ color: palette.text }}>
                        {cat.title}
                      </h3>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: palette.accent }} />
                    </div>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: palette.textMuted }}>
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-mono transition-colors cursor-default"
                        style={{
                          backgroundColor: palette.badgeBg,
                          borderColor: palette.border,
                          color: palette.text
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </section>

        {/* =========================================================================
            SECTION 3: PROJECTS
        ========================================================================= */}
        <section id="projects" className="scroll-mt-24">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            blur={0}
            stagger={0.06}
            threshold={0.1}
          >
            <div className="w-full h-[90px] sm:h-[120px] relative mb-2">
              <TechText
                text={data.projects.techHeading}
                fontWeight={600}
                fontSize={sectionHeadingSize}
                fontFamily="'SF Pro Display', -apple-system, 'Inter', sans-serif"
                color={palette.text}
                accentColor={palette.accent}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={12}
                intro="none"
                introDuration={1.6}
                clickKick
                guides={false}
              />
            </div>

            <p className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: palette.textMuted }}>
              {data.projects.subtitle}
            </p>

            <div className="space-y-8">
              {data.projects.items.map((proj) => (
                <div
                  key={proj.id}
                  className="p-8 sm:p-10 rounded-2xl border transition-colors duration-200 flex flex-col xl:flex-row gap-8 items-center justify-between"
                  style={{
                    backgroundColor: palette.cardBg,
                    borderColor: palette.border
                  }}
                >
                  {/* Left Column: Project Details */}
                  <div className="flex-1 max-w-xl">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 border"
                      style={{
                        backgroundColor: palette.badgeBg,
                        borderColor: palette.badgeBorder,
                        color: palette.badgeText
                      }}
                    >
                      {proj.badge}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: palette.text }}>
                      {proj.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-5" style={{ color: palette.textMuted }}>
                      {proj.description}
                    </p>

                    {/* Metric Banner */}
                    <div
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono text-xs mb-5"
                      style={{
                        backgroundColor: palette.badgeBg,
                        borderColor: palette.border,
                        color: palette.text
                      }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: palette.accent }} />
                      <span>{proj.metric}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {proj.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-sm" style={{ color: palette.textMuted }}>
                          <span className="mt-0.5" style={{ color: palette.accent }}>•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md border text-xs font-mono"
                          style={{
                            backgroundColor: palette.badgeBg,
                            borderColor: palette.border,
                            color: palette.text
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <SpecularButton
                        size="md"
                        radius={14}
                        tint={palette.text}
                        tintOpacity={0.06}
                        textColor="#ffffff"
                        lineColor={palette.text}
                        baseColor={palette.specularPrimaryBase}
                        intensity={1}
                        idleIntensity={0.35}
                        shineSize={10}
                        shineFade={30}
                        thickness={1.1}
                        glow={1}
                        followMouse
                        proximity={200}
                        style={{
                          backgroundColor: palette.specularPrimaryBase,
                          color: '#ffffff',
                          fontWeight: 600
                        }}
                        onClick={() => window.open(data.navigation.socialItems[0].link, '_blank')}
                      >
                        Inspect Repository
                      </SpecularButton>

                      <SpecularButton
                        size="md"
                        radius={14}
                        tint={palette.text}
                        tintOpacity={isDark ? 0.04 : 0.08}
                        textColor={palette.secondaryBtnText || palette.text}
                        lineColor={palette.text}
                        baseColor={palette.secondaryBtnBg || palette.surface}
                        intensity={0.8}
                        idleIntensity={0.25}
                        shineSize={10}
                        shineFade={30}
                        thickness={1}
                        glow={0.5}
                        followMouse
                        proximity={200}
                        style={{
                          backgroundColor: palette.secondaryBtnBg || palette.surface,
                          color: palette.secondaryBtnText || palette.text,
                          borderColor: palette.secondaryBtnBorder || palette.border,
                          borderWidth: '1px',
                          borderStyle: 'solid'
                        }}
                        onClick={() => handleScrollTo('contact')}
                      >
                        Contact Me
                      </SpecularButton>
                    </div>
                  </div>

                  {/* Right Column: Interactive Card Deck via BounceCards */}
                  <div className="flex flex-col items-center justify-center p-2">
                    <div className="w-[280px] sm:w-[340px] h-[240px] flex items-center justify-center">
                      <BounceCards
                        images={proj.gallery}
                        containerWidth={windowWidth < 600 ? 280 : 340}
                        containerHeight={230}
                        cardSize={140}
                        spread={55}
                        rotation={6}
                        arc={0}
                        pushDistance={110}
                        hoverScale={1.06}
                        bounciness={0.55}
                        animationDelay={0.3}
                        animationStagger={0.05}
                        borderWidth={3}
                        borderColor={palette.text}
                        radius={16}
                        shadow
                        enableHover
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </section>

        {/* =========================================================================
            SECTION 4: CALL TO ACTION / CONTACT
        ========================================================================= */}
        <section id="contact" className="scroll-mt-24">
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={0.7}
            ease="power3.out"
            blur={0}
            stagger={0.06}
            threshold={0.1}
          >
            <div
              className="p-8 sm:p-12 rounded-2xl border relative"
              style={{
                backgroundColor: palette.cardBg,
                borderColor: palette.border
              }}
            >
              <div className="w-full h-[80px] sm:h-[100px] relative mb-3">
                <TechText
                  text={data.contact.techHeading}
                  fontWeight={600}
                  fontSize={sectionHeadingSize * 0.85}
                  fontFamily="'SF Pro Display', -apple-system, 'Inter', sans-serif"
                  color={palette.text}
                  accentColor={palette.accent}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={12}
                  intro="none"
                  introDuration={1.6}
                  clickKick
                  guides={false}
                />
              </div>

              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-4"
                style={{
                  backgroundColor: palette.badgeBg,
                  borderColor: palette.badgeBorder,
                  color: palette.text
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.accent }} />
                <span>{data.contact.status}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 max-w-xl leading-tight" style={{ color: palette.text }}>
                {data.contact.headline}
              </h3>
              <p className="text-base max-w-xl mb-8 leading-relaxed" style={{ color: palette.textMuted }}>
                {data.contact.description}
              </p>

              {/* Contact Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <SpecularButton
                  size="lg"
                  radius={16}
                  tint={palette.text}
                  tintOpacity={0.06}
                  textColor="#ffffff"
                  lineColor={palette.text}
                  baseColor={palette.specularPrimaryBase}
                  intensity={1}
                  idleIntensity={0.35}
                  shineSize={10}
                  shineFade={34}
                  thickness={1.2}
                  glow={1}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: palette.specularPrimaryBase,
                    color: '#ffffff',
                    fontWeight: 600
                  }}
                  onClick={() => {
                    window.location.href = `mailto:${data.contact.email}?subject=Contact%20from%20Portfolio`;
                  }}
                >
                  Send Direct Email
                </SpecularButton>

                <SpecularButton
                  size="lg"
                  radius={16}
                  tint={palette.text}
                  tintOpacity={isDark ? 0.04 : 0.08}
                  textColor={palette.secondaryBtnText || palette.text}
                  lineColor={palette.text}
                  baseColor={palette.secondaryBtnBg || palette.surface}
                  intensity={0.8}
                  idleIntensity={0.25}
                  shineSize={10}
                  shineFade={30}
                  thickness={1}
                  glow={0.5}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: palette.secondaryBtnBg || palette.surface,
                    color: palette.secondaryBtnText || palette.text,
                    borderColor: palette.secondaryBtnBorder || palette.border,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onClick={() => window.open(data.contact.github, '_blank')}
                >
                  Visit GitHub
                </SpecularButton>

                <SpecularButton
                  size="lg"
                  radius={16}
                  tint={palette.text}
                  tintOpacity={isDark ? 0.04 : 0.08}
                  textColor={palette.secondaryBtnText || palette.text}
                  lineColor={palette.text}
                  baseColor={palette.secondaryBtnBg || palette.surface}
                  intensity={0.8}
                  idleIntensity={0.25}
                  shineSize={10}
                  shineFade={30}
                  thickness={1}
                  glow={0.5}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: palette.secondaryBtnBg || palette.surface,
                    color: palette.secondaryBtnText || palette.text,
                    borderColor: palette.secondaryBtnBorder || palette.border,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                  onClick={() => window.open(data.contact.linkedin, '_blank')}
                >
                  Visit LinkedIn
                </SpecularButton>
              </div>

              {/* Bottom Footer Specs */}
              <div
                className="pt-6 border-t flex flex-wrap justify-between items-center text-xs font-mono gap-3"
                style={{
                  borderColor: palette.border,
                  color: palette.textMuted
                }}
              >
                <div>Muhammad Ali Baig • {data.contact.location}</div>
                <div>{palette.proportions}</div>
              </div>
            </div>
          </AnimatedContent>
        </section>

      </main>
    </div>
  );
}
