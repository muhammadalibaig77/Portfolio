import React, { useState, useEffect } from 'react';
import DotField from './components/DotField';
import StaggeredMenu from './components/StaggeredMenu';
import TechText from './components/TechText';
import AnimatedContent from './components/AnimatedContent';
import BounceCards from './components/BounceCards';
import SpecularButton from './components/SpecularButton';
import ThemeToggle from './components/ThemeToggle';
import data from './data/portfolioData.json';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

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
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

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
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-[#092742] text-[#FEFFFA] selection:bg-[#D23A00] selection:text-[#FEFFFA]'
          : 'bg-[#F5F3EF] text-[#08090B] selection:bg-[#FFC900] selection:text-[#08090B]'
      } overflow-x-hidden`}
    >
      {/* 1. REQUIRED BACKGROUND COMPONENT: DotField (Larger dots, theme-aware) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <DotField
          gradientFrom={isDark ? '#D23A00' : '#FFC900'}
          gradientTo={isDark ? '#092742' : '#F5F3EF'}
          glowColor={isDark ? '#FEFFFA' : '#08090B'}
          dotRadius={2.4}
          dotSpacing={22}
          cursorRadius={180}
          bulgeStrength={0.35}
          glowRadius={120}
          lightMode={!isDark}
        />
      </div>

      {/* 2. REQUIRED MENU COMPONENT: StaggeredMenu with ThemeToggle */}
      <StaggeredMenu
        position="right"
        items={data.navigation.menuItems}
        socialItems={data.navigation.socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor={isDark ? '#FEFFFA' : '#08090B'}
        openMenuButtonColor={isDark ? '#FEFFFA' : '#08090B'}
        changeMenuColorOnOpen={true}
        colors={isDark ? ['#0e3253', '#092742'] : ['#e8e4da', '#F5F3EF']}
        logoUrl="/react.svg"
        accentColor={isDark ? '#D23A00' : '#FFC900'}
        isFixed={true}
        isDark={isDark}
        headerAction={<ThemeToggle isDark={isDark} onToggle={toggleTheme} />}
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
                color={isDark ? '#FEFFFA' : '#08090B'}
                accentColor={isDark ? '#D23A00' : '#FFC900'}
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
            <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${isDark ? 'text-[#FEFFFA]' : 'text-[#08090B]'} mb-4 max-w-2xl leading-snug`}>
              {data.hero.subheading}
            </h2>
            <p className={`text-base sm:text-lg ${isDark ? 'text-[#FEFFFA]/70' : 'text-[#08090B]/70'} max-w-2xl leading-relaxed mb-8`}>
              {data.hero.tagline}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <SpecularButton
                size="lg"
                radius={16}
                tint={isDark ? '#FEFFFA' : '#08090B'}
                tintOpacity={0.06}
                textColor={isDark ? '#FEFFFA' : '#08090B'}
                lineColor={isDark ? '#FEFFFA' : '#08090B'}
                baseColor={isDark ? '#D23A00' : '#FFC900'}
                intensity={1}
                idleIntensity={0.35}
                shineSize={10}
                shineFade={34}
                thickness={1.2}
                glow={1}
                followMouse
                proximity={240}
                style={{
                  backgroundColor: isDark ? '#D23A00' : '#FFC900',
                  color: isDark ? '#FEFFFA' : '#08090B',
                  fontWeight: 600
                }}
                onClick={() => handleScrollTo('projects')}
              >
                View Projects
              </SpecularButton>

              <SpecularButton
                size="lg"
                radius={16}
                tint={isDark ? '#FEFFFA' : '#08090B'}
                tintOpacity={0.04}
                textColor={isDark ? '#FEFFFA' : '#08090B'}
                lineColor={isDark ? '#FEFFFA' : '#08090B'}
                baseColor={isDark ? '#092742' : '#F5F3EF'}
                intensity={0.8}
                idleIntensity={0.25}
                shineSize={10}
                shineFade={30}
                thickness={1}
                glow={0.6}
                followMouse
                proximity={240}
                style={{
                  backgroundColor: isDark ? '#0e375c' : 'rgba(8, 9, 11, 0.05)',
                  color: isDark ? '#FEFFFA' : '#08090B',
                  borderColor: isDark ? 'rgba(254, 255, 250, 0.14)' : 'rgba(8, 9, 11, 0.14)'
                }}
                onClick={() => handleScrollTo('contact')}
              >
                Get in Touch
              </SpecularButton>
            </div>

            {/* Visual Hero Showcase via BounceCards */}
            <div className="w-full flex flex-col items-center justify-center pt-2">
              <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-[#FEFFFA]/50' : 'text-[#08090B]/60'} mb-5 font-mono flex items-center gap-2`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#D23A00]' : 'bg-[#FFC900]'}`} />
                Interactive Visual Gallery • Hover to Straighten Cards
              </div>
              <div className="w-full max-w-[500px] h-[310px] flex items-center justify-center">
                <BounceCards
                  images={data.hero.galleryImages}
                  containerWidth={windowWidth < 600 ? Math.min(windowWidth - 40, 340) : 480}
                  containerHeight={300}
                  cardSize={windowWidth < 600 ? 150 : 190}
                  spread={windowWidth < 600 ? 60 : 80}
                  rotation={8}
                  arc={0}
                  pushDistance={140}
                  hoverScale={1.05}
                  bounciness={0.55}
                  animationDelay={0.4}
                  animationStagger={0.06}
                  borderWidth={3}
                  borderColor={isDark ? '#FEFFFA' : '#08090B'}
                  radius={20}
                  shadow
                  enableHover
                />
              </div>
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
                color={isDark ? '#FEFFFA' : '#08090B'}
                accentColor={isDark ? '#D23A00' : '#FFC900'}
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

            <p className={`${isDark ? 'text-[#FEFFFA]/70' : 'text-[#08090B]/70'} text-base sm:text-lg max-w-2xl mb-10 leading-relaxed`}>
              {data.skills.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skills.categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`p-7 sm:p-8 rounded-2xl ${
                    isDark
                      ? 'bg-[#FEFFFA]/[0.03] border border-[#FEFFFA]/10 hover:border-[#D23A00]/40'
                      : 'bg-[#08090B]/[0.03] border border-[#08090B]/10 hover:border-[#FFC900]/60'
                  } transition-colors duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-[#FEFFFA]' : 'text-[#08090B]'}`}>
                        {cat.title}
                      </h3>
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#D23A00]' : 'bg-[#FFC900]'}`} />
                    </div>
                    <p className={`text-sm ${isDark ? 'text-[#FEFFFA]/65' : 'text-[#08090B]/65'} mb-6 leading-relaxed`}>
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg ${
                          isDark
                            ? 'bg-[#FEFFFA]/[0.05] text-[#FEFFFA]/90 border border-[#FEFFFA]/10 hover:border-[#FEFFFA]/25'
                            : 'bg-[#08090B]/[0.05] text-[#08090B]/90 border border-[#08090B]/10 hover:border-[#08090B]/25'
                        } text-xs sm:text-sm font-mono transition-colors cursor-default`}
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
                color={isDark ? '#FEFFFA' : '#08090B'}
                accentColor={isDark ? '#D23A00' : '#FFC900'}
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

            <p className={`${isDark ? 'text-[#FEFFFA]/70' : 'text-[#08090B]/70'} text-base sm:text-lg max-w-2xl mb-10 leading-relaxed`}>
              {data.projects.subtitle}
            </p>

            <div className="space-y-8">
              {data.projects.items.map((proj) => (
                <div
                  key={proj.id}
                  className={`p-8 sm:p-10 rounded-2xl ${
                    isDark
                      ? 'bg-[#FEFFFA]/[0.03] border border-[#FEFFFA]/10 hover:border-[#D23A00]/40'
                      : 'bg-[#08090B]/[0.03] border border-[#08090B]/10 hover:border-[#FFC900]/60'
                  } transition-colors duration-200 flex flex-col xl:flex-row gap-8 items-center justify-between`}
                >
                  {/* Left Column: Project Details */}
                  <div className="flex-1 max-w-xl">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 ${
                      isDark
                        ? 'bg-[#D23A00]/15 text-[#D23A00]'
                        : 'bg-[#FFC900]/25 text-[#08090B] border border-[#FFC900]/50 font-semibold'
                    }`}>
                      {proj.badge}
                    </div>
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-[#FEFFFA]' : 'text-[#08090B]'} mb-3`}>
                      {proj.title}
                    </h3>
                    <p className={`${isDark ? 'text-[#FEFFFA]/75' : 'text-[#08090B]/75'} text-base leading-relaxed mb-5`}>
                      {proj.description}
                    </p>

                    {/* Metric Banner */}
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg ${
                      isDark
                        ? 'bg-[#FEFFFA]/[0.04] border border-[#FEFFFA]/10 text-[#FEFFFA]/85'
                        : 'bg-[#08090B]/[0.04] border border-[#08090B]/10 text-[#08090B]/85'
                    } font-mono text-xs mb-5`}>
                      <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#D23A00]' : 'bg-[#FFC900]'}`} />
                      <span>{proj.metric}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {proj.highlights.map((h, hIdx) => (
                        <div key={hIdx} className={`flex items-start gap-2 text-sm ${isDark ? 'text-[#FEFFFA]/70' : 'text-[#08090B]/70'}`}>
                          <span className={`mt-0.5 ${isDark ? 'text-[#D23A00]' : 'text-[#FFC900]'}`}>•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-md ${
                            isDark
                              ? 'bg-[#FEFFFA]/[0.05] text-[#FEFFFA]/80 border border-[#FEFFFA]/10'
                              : 'bg-[#08090B]/[0.05] text-[#08090B]/80 border border-[#08090B]/10'
                          } text-xs font-mono`}
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
                        tint={isDark ? '#FEFFFA' : '#08090B'}
                        tintOpacity={0.06}
                        textColor={isDark ? '#FEFFFA' : '#08090B'}
                        lineColor={isDark ? '#FEFFFA' : '#08090B'}
                        baseColor={isDark ? '#D23A00' : '#FFC900'}
                        intensity={1}
                        idleIntensity={0.35}
                        shineSize={10}
                        shineFade={30}
                        thickness={1.1}
                        glow={1}
                        followMouse
                        proximity={200}
                        style={{
                          backgroundColor: isDark ? '#D23A00' : '#FFC900',
                          color: isDark ? '#FEFFFA' : '#08090B',
                          fontWeight: 600
                        }}
                        onClick={() => window.open(data.navigation.socialItems[0].link, '_blank')}
                      >
                        Inspect Repository
                      </SpecularButton>

                      <SpecularButton
                        size="md"
                        radius={14}
                        tint={isDark ? '#FEFFFA' : '#08090B'}
                        tintOpacity={0.04}
                        textColor={isDark ? '#FEFFFA' : '#08090B'}
                        lineColor={isDark ? '#FEFFFA' : '#08090B'}
                        baseColor={isDark ? '#092742' : '#F5F3EF'}
                        intensity={0.8}
                        idleIntensity={0.25}
                        shineSize={10}
                        shineFade={30}
                        thickness={1}
                        glow={0.5}
                        followMouse
                        proximity={200}
                        style={{
                          backgroundColor: isDark ? '#0e375c' : 'rgba(8, 9, 11, 0.05)',
                          color: isDark ? '#FEFFFA' : '#08090B',
                          borderColor: isDark ? 'rgba(254, 255, 250, 0.14)' : 'rgba(8, 9, 11, 0.14)'
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
                        borderColor={isDark ? '#FEFFFA' : '#08090B'}
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
            <div className={`p-8 sm:p-12 rounded-2xl ${
              isDark
                ? 'bg-[#FEFFFA]/[0.03] border border-[#FEFFFA]/10'
                : 'bg-[#08090B]/[0.03] border border-[#08090B]/10'
            } relative`}>
              <div className="w-full h-[80px] sm:h-[100px] relative mb-3">
                <TechText
                  text={data.contact.techHeading}
                  fontWeight={600}
                  fontSize={sectionHeadingSize * 0.85}
                  fontFamily="'SF Pro Display', -apple-system, 'Inter', sans-serif"
                  color={isDark ? '#FEFFFA' : '#08090B'}
                  accentColor={isDark ? '#D23A00' : '#FFC900'}
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

              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                isDark
                  ? 'bg-[#FEFFFA]/[0.05] border border-[#FEFFFA]/10 text-[#FEFFFA]/85'
                  : 'bg-[#08090B]/[0.05] border border-[#08090B]/10 text-[#08090B]/85'
              } text-xs font-mono mb-4`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-[#D23A00]' : 'bg-[#FFC900]'}`} />
                <span>{data.contact.status}</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-semibold ${isDark ? 'text-[#FEFFFA]' : 'text-[#08090B]'} tracking-tight mb-3 max-w-xl leading-tight`}>
                {data.contact.headline}
              </h3>
              <p className={`text-base ${isDark ? 'text-[#FEFFFA]/70' : 'text-[#08090B]/70'} max-w-xl mb-8 leading-relaxed`}>
                {data.contact.description}
              </p>

              {/* Contact Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <SpecularButton
                  size="lg"
                  radius={16}
                  tint={isDark ? '#FEFFFA' : '#08090B'}
                  tintOpacity={0.06}
                  textColor={isDark ? '#FEFFFA' : '#08090B'}
                  lineColor={isDark ? '#FEFFFA' : '#08090B'}
                  baseColor={isDark ? '#D23A00' : '#FFC900'}
                  intensity={1}
                  idleIntensity={0.35}
                  shineSize={10}
                  shineFade={34}
                  thickness={1.2}
                  glow={1}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: isDark ? '#D23A00' : '#FFC900',
                    color: isDark ? '#FEFFFA' : '#08090B',
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
                  tint={isDark ? '#FEFFFA' : '#08090B'}
                  tintOpacity={0.04}
                  textColor={isDark ? '#FEFFFA' : '#08090B'}
                  lineColor={isDark ? '#FEFFFA' : '#08090B'}
                  baseColor={isDark ? '#092742' : '#F5F3EF'}
                  intensity={0.8}
                  idleIntensity={0.25}
                  shineSize={10}
                  shineFade={30}
                  thickness={1}
                  glow={0.5}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: isDark ? '#0e375c' : 'rgba(8, 9, 11, 0.05)',
                    color: isDark ? '#FEFFFA' : '#08090B',
                    borderColor: isDark ? 'rgba(254, 255, 250, 0.14)' : 'rgba(8, 9, 11, 0.14)'
                  }}
                  onClick={() => window.open(data.contact.github, '_blank')}
                >
                  Visit GitHub
                </SpecularButton>

                <SpecularButton
                  size="lg"
                  radius={16}
                  tint={isDark ? '#FEFFFA' : '#08090B'}
                  tintOpacity={0.04}
                  textColor={isDark ? '#FEFFFA' : '#08090B'}
                  lineColor={isDark ? '#FEFFFA' : '#08090B'}
                  baseColor={isDark ? '#092742' : '#F5F3EF'}
                  intensity={0.8}
                  idleIntensity={0.25}
                  shineSize={10}
                  shineFade={30}
                  thickness={1}
                  glow={0.5}
                  followMouse
                  proximity={240}
                  style={{
                    backgroundColor: isDark ? '#0e375c' : 'rgba(8, 9, 11, 0.05)',
                    color: isDark ? '#FEFFFA' : '#08090B',
                    borderColor: isDark ? 'rgba(254, 255, 250, 0.14)' : 'rgba(8, 9, 11, 0.14)'
                  }}
                  onClick={() => window.open(data.contact.linkedin, '_blank')}
                >
                  Visit LinkedIn
                </SpecularButton>
              </div>

              {/* Bottom Footer Specs */}
              <div className={`pt-6 border-t ${
                isDark ? 'border-[#FEFFFA]/10 text-[#FEFFFA]/50' : 'border-[#08090B]/10 text-[#08090B]/50'
              } flex flex-wrap justify-between items-center text-xs font-mono gap-3`}>
                <div>Muhammad Ali Baig • {data.contact.location}</div>
                <div>
                  {isDark
                    ? 'Cyan Navy #092742 • Ghost White #FEFFFA • Neon Pear #D23A00'
                    : '#F5F3EF (60%) • #08090B (40%) • #FFC900 (10%)'}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

      </main>
    </div>
  );
}
