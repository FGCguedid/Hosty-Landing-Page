'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">H</div>
              <span className="text-2xl font-display font-bold text-white">Hosty</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{t.footer.tagline}</p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><span className="text-xs">IG</span></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><span className="text-xs">TW</span></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><span className="text-xs">LI</span></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t.footer.product}</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.features}</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.pricing}</a>
            <a href="#waitlist" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.waitlist}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t.footer.legal}</h4>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.privacy}</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.terms}</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.footer.links.cgu}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t.footer.newsletter}</h4>
            <p className="text-gray-400 text-sm mb-4">{t.footer.newsletterDesc}</p>
            <div className="flex gap-2">
              <input type="email" placeholder={t.footer.newsletterEmail} className="bg-white/5 border border-white/10 text-white h-9 rounded-lg px-3 flex-1 outline-none focus:border-primary" />
              <button className="bg-primary text-white rounded-lg px-3 text-sm font-bold">{t.footer.newsletterBtn}</button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
