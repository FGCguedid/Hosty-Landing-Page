'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div className="glow-blob w-1/2 h-1/2 top-[-10%] left-[-10%] bg-purple-600/20 animate-pulse"></div>
      <div className="glow-blob w-1/2 h-1/2 bottom-[-10%] right-[-10%] bg-violet-800/20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1] gradient-text reveal">
          {t.hero.headline.split(t.hero.headlineAccent).map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-primary">{t.hero.headlineAccent}</span>}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 reveal" style={{ transitionDelay: '0.2s' }}>
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center reveal" style={{ transitionDelay: '0.4s' }}>
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary hover:to-violet-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_20px_rgba(108,60,225,0.4)] transition-all hover:shadow-[0_0_30px_rgba(108,60,225,0.6)]"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 text-lg rounded-full transition-all hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 opacity-60 text-sm font-medium reveal" style={{ transitionDelay: '0.6s' }}>
          {t.hero.trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
