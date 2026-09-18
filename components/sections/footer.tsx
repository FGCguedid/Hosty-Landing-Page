"use client";

import React from "react";
import { Instagram, X as Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white">H</div>
              <span className="text-2xl font-display font-bold text-white">Hosty</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t("footer.product")}</h4>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.features")}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.pricing")}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.waitlist")}</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t("footer.legal")}</h4>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.privacy")}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.terms")}</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t("footer.links.cgu")}</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">{t("footer.newsletter")}</h4>
            <p className="text-muted-foreground text-sm mb-4">{t("footer.newsletterDesc")}</p>
            <div className="flex gap-2">
              <Input
                placeholder={t("footer.newsletterEmail")}
                className="bg-white/5 border-white/10 text-white h-9 rounded-lg"
              />
              <Button size="sm" className="bg-primary rounded-lg px-3">
                {t("footer.newsletterBtn")}
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-xs">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-xs">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-xs">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
