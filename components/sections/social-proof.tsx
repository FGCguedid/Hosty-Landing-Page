"use client";

import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { Star } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const SocialProof = () => {
  const { t } = useTranslation();
  const currentCount = useCounter(1248);

  return (
    <section className="py-24 px-6 bg-black/20 relative">
      <div className="container mx-auto text-center">
        <div className="mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 animate-bounce">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("social.badge")}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("social.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="text-7xl md:text-9xl font-display font-black text-primary mb-4 tabular-nums">
              {currentCount}+
            </div>
            <p className="text-xl text-muted-foreground">
              {t("social.counter")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t("social.testimonials").map((tst: any, index: number) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-left group hover:bg-white/10 transition-colors duration-500">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-8 italic leading-relaxed">
                  "{tst.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://i.pravatar.cc/150?u=${tst.name}`} alt={tst.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                  <div>
                    <h4 className="text-white font-bold">{tst.name}</h4>
                    <p className="text-muted-foreground text-sm">{tst.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
