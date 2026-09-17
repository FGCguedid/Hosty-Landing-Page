'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Hero from '@/components/Hero';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) {
    return <div className="bg-black min-h-screen" />;
  }

  return (
    <main className="relative min-h-screen bg-black">
      <LanguageSwitcher />

      <div className="bg-black">
        <Hero />
      </div>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 bg-black relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight reveal">{t.experience.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-20 reveal" style={{ transitionDelay: '0.2s' }}>{t.experience.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.experience.steps.map((s, i) => (
              <div key={i} className="relative z-10 group p-6 rounded-3xl glass hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 text-center reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs border-4 border-midnight">{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-black relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight reveal">{t.howItWorks.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-20 reveal" style={{ transitionDelay: '0.2s' }}>{t.howItWorks.subtitle}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            {t.howItWorks.steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center group max-w-xs reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && <div className="hidden md:block relative"><div className="w-24 h-0.5 bg-gradient-to-r from-primary/50 to-primary/0"></div></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 px-6 bg-black relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight reveal">{t.features.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-20 reveal" style={{ transitionDelay: '0.2s' }}>{t.features.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.list.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl glass hover:border-primary/50 transition-all duration-500 group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary to-violet-800 flex flex-col items-center justify-center text-center text-white shadow-xl shadow-primary/20 reveal" style={{ transitionDelay: '0.5s' }}>
              <h3 className="text-2xl font-display font-bold mb-4">{t.features.cta.title}</h3>
              <p className="text-white/80 mb-6">{t.features.cta.desc}</p>
              <a href="#waitlist" className="bg-white text-primary hover:bg-white/90 rounded-full px-6 py-4 font-bold transition-all">{t.features.cta.btn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & PAYMENT */}
      <section className="py-24 px-6 bg-black relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight reveal">{t.security.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-20 reveal" style={{ transitionDelay: '0.2s' }}>{t.security.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl glass text-left reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/20 text-primary"><div className="w-8 h-8 bg-primary/20 rounded-full"></div></div>
                <h3 className="text-3xl font-display font-bold text-white">{t.security.itsme.title}</h3>
              </div>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{t.security.itsme.desc}</p>
              <div className="space-y-4">
                {t.security.itsme.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80"><div className="w-5 h-5 text-primary">✓</div><span>{item}</span></div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-3xl glass text-left reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-green-500/20 text-green-400"><div className="w-8 h-8 bg-green-500/20 rounded-full"></div></div>
                <h3 className="text-3xl font-display font-bold text-white">{t.security.payments.title}</h3>
              </div>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{t.security.payments.desc}</p>
              <div className="space-y-4">
                {t.security.payments.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80"><div className="w-5 h-5 text-green-400">✓</div><span>{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA / WAITLIST */}
      <section id="waitlist" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0D0D2B] to-black z-10">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight reveal">{t.final.title}</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans reveal" style={{ transitionDelay: '0.2s' }}>{t.final.subtitle}</p>
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
