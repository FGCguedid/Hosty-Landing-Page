"use client";

import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { ShieldCheck, Lock, CreditCard, Zap } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const SecurityPayment = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("security.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("security.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Security Column */}
          <Reveal delay={0.3}>
            <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  {t("security.itsme.title")}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t("security.itsme.desc")}
              </p>
              <div className="space-y-4">
                {t("security.itsme.items").map((text: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    {i === 0 ? <Lock className="w-5 h-5 text-primary" /> : i === 1 ? <ShieldCheck className="w-5 h-5 text-primary" /> : <Zap className="w-5 h-5 text-primary" />}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Payment Column */}
          <Reveal delay={0.5}>
            <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-green-500/20 text-green-400">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  {t("security.payments.title")}
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t("security.payments.desc")}
              </p>
              <div className="space-y-4">
                {t("security.payments.items").map((text: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    {i === 0 ? <CreditCard className="w-5 h-5 text-green-400" /> : i === 1 ? <Lock className="w-5 h-5 text-green-400" /> : <Zap className="w-5 h-5 text-green-400" />}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
