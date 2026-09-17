'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/constants/translations';

type Language = 'fr' | 'en' | 'nl';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('hosty-locale') as Language;
    if (saved && (saved === 'fr' || saved === 'en' || saved === 'nl')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    console.log('Switching language to:', newLang);
    setLangState(newLang);
    localStorage.setItem('hosty-locale', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
