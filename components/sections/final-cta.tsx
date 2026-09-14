"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "@/app/actions/waitlist";
import confetti from "canvas-confetti";
import { useTranslation } from "@/context/LanguageContext";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  userType: z.enum(["host", "guest"]),
});

type FormValues = z.infer<typeof formSchema>;

export const FinalCTA = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "host",
    },
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setStatus("loading");
    const result = await joinWaitlist(formData);

    if (result.success) {
      setStatus("success");
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6C3CE1", "#FFFFFF", "#0D0D2B"],
      });
    } else {
      setStatus("error");
      setMessage(result.message || "Une erreur est survenue");
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0D0D2B] to-black">
      <div className="container mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            {t("final.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
            {t("final.subtitle")}
          </p>
        </Reveal>

        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-primary/20 border border-primary/30 text-white"
              >
                <h3 className="text-3xl font-display font-bold mb-4">
                  {t("final.success.title")}
                </h3>
                <p className="text-lg opacity-80">
                  {t("final.success.desc")}
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleFormSubmit}
                className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      {t("final.form.firstName")}
                    </label>
                    <Input
                      {...register("firstName")}
                      placeholder="Jean"
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">Champ requis</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      {t("final.form.email")}
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="jean@example.com"
                      className="bg-white/5 border-white/10 text-white h-12 rounded-xl"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">Email invalide</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-4">
                      {t("final.form.role")}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          {...register("userType")}
                          value="host"
                          className="sr-only peer"
                        />
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-white text-center hover:border-primary transition-colors peer-checked:bg-primary peer-checked:border-primary">
                          {t("final.form.host")}
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          {...register("userType")}
                          value="guest"
                          className="sr-only peer"
                        />
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-white text-center hover:border-primary transition-colors peer-checked:bg-primary peer-checked:border-primary">
                          {t("final.form.guest")}
                        </div>
                      </label>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-center font-medium">{message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 rounded-xl transition-all shadow-lg shadow-primary/20"
                  >
                    {status === "loading" ? "..." : t("final.form.btn")}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button variant="ghost" className="text-white/60 hover:text-white rounded-full px-8">
            {t("hero.ctaPrimary")}
          </Button>
          <Button variant="ghost" className="text-white/60 hover:text-white rounded-full px-8">
            {t("hero.ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
};
