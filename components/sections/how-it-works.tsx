"use client";

import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Calendar, Send, PartyPopper } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

const steps = [
  {
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    icon: Send,
    color: "bg-blue-500",
  },
  {
    icon: PartyPopper,
    color: "bg-pink-500",
  },
];

export const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-black/40">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("howItWorks.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Reveal delay={index * 0.2}>
                <div className="flex flex-col items-center text-center group max-w-xs">
                  <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    {t(`howItWorks.steps.${index}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`howItWorks.steps.${index}.desc`)}
                  </p>
                </div>
              </Reveal>
              {index < steps.length - 1 && (
                <Reveal delay={(index + 1) * 0.2}>
                  <div className="hidden md:block relative">
                    <motion.div
                      className="w-24 h-0.5 bg-gradient-to-r from-primary/50 to-primary/0"
                      initial={{ width: 0 }}
                      whileInView={{ width: 96 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </Reveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
