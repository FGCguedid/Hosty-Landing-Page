'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const languages: { id: 'fr' | 'en' | 'nl'; label: string }[] = [
    { id: 'fr', label: 'FR' },
    { id: 'en', label: 'EN' },
    { id: 'nl', label: 'NL' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-1 p-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
      {languages.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            lang === l.id
            ? 'bg-primary text-white'
            : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
