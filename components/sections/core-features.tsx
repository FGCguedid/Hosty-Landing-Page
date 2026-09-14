"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Zap, Users, CreditCard, ShieldCheck, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

const features = [
  {
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    icon: Users,
    color: "text-blue-400",
  },
  {
    icon: CreditCard,
    color: "text-green-400",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-400",
  },
  {
    icon: History,
    color: "text-pink-400",
  },
];

export const CoreFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("features.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors duration-500 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {t(`features.list.${index}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`features.list.${index}.desc`)}
                </p>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={5 * 0.1}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary to-violet-800 flex flex-col items-center justify-center text-center text-white shadow-xl shadow-primary/20">
              <h3 className="text-2xl font-display font-bold mb-4">
                {t("features.cta.title")}
              </h3>
              <p className="text-white/80 mb-6">
                {t("features.cta.desc")}
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6 py-4 font-bold">
                {t("features.cta.btn")}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
