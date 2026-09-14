"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Sparkles, Users, CheckCircle, GlassWater } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const experienceSteps = [
  {
    id: "step1",
    icon: Sparkles,
    color: "text-purple-400",
  },
  {
    id: "step2",
    icon: Users,
    color: "text-blue-400",
  },
  {
    id: "step3",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    id: "step4",
    icon: GlassWater,
    color: "text-pink-400",
  },
];

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("experience.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

          {experienceSteps.map((step, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="relative z-10 group p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {t(`experience.steps.${index}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`experience.steps.${index}.desc`)}
                </p>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs border-4 border-[#0D0D2B]">
                  {index + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
