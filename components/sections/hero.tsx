"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { Smartphone, ShieldCheck, CreditCard, Laptop } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Immersive Gradient Background */}
        <div className="absolute inset-0 bg-[#0D0D2B]" />

        {/* Dynamic Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-800/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Subtle Particle-like effects */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random()
              }}
              animate={{
                y: [null, "-100vh"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <Reveal delay={0.2}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              {t("hero.headline").split(t("hero.headlineAccent")).map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < 1 && <span className="text-primary">{t("hero.headlineAccent")}</span>}
                </React.Fragment>
              ))}
            </span>
          </motion.h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-sans">
            {t("hero.subheadline")}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary hover:to-violet-500 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-[0_0_20px_rgba(108,60,225,0.4)] transition-all hover:shadow-[0_0_30px_rgba(108,60,225,0.6)]"
            >
              {t("hero.ctaPrimary")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>
        </Reveal>

        {/* Trust Badges */}
        <Reveal delay={0.8}>
          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 opacity-60">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              <span>{t("hero.trustBadges.ios")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Laptop className="w-4 h-4" />
              <span>{t("hero.trustBadges.android")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CreditCard className="w-4 h-4" />
              <span>{t("hero.trustBadges.payments")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{t("hero.trustBadges.itsme")}</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest opacity-40">{t("hero.scroll")}</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          animate={{ height: [48, 64, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
