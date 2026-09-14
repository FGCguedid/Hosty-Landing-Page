"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();
  const languages = [
    { code: "fr", label: "FR", name: "Français" },
    { code: "en", label: "EN", name: "English" },
    { code: "nl", label: "NL", name: "Nederlands" },
  ] as const;

  return (
    <div className="flex gap-1 p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLocale(lang.code)}
          className={cn(
            "text-xs font-bold rounded-full px-3 h-7 transition-all",
            locale === lang.code
              ? "bg-primary text-white"
              : "text-white/60 hover:text-white hover:bg-white/10"
          )}
          title={lang.name}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
