"use client";

import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const galleryItems = [
  {
    id: "poker",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1511193311928-773796987f39?q=80&w=800&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: "birthday",
    category: "celebration",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714b2370?q=80&w=800&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: "chill",
    category: "relax",
    image: "https://images.unsplash.com/photo-1517457373958-b7f300bb75b3?q=80&w=800&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: "boardgames",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1611891487122-2bcbc967c77d?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: "cocktail",
    category: "social",
    image: "https://images.unsplash.com/photo-1516997294767-fca67d65721c?q=80&w=800&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: "cinema",
    category: "relax",
    image: "https://images.unsplash.com/photo-1517604931442-7e06ed092467?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
];

export const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t("gallery.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={t(`gallery.items.${item.id}`)}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
                    {t(`gallery.categories.${item.category}`)}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {t(`gallery.items.${item.id}`)}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
