"use client";

import { useState, useEffect } from "react";
import { animate } from "framer-motion";

export const useCounter = (targetValue: number, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, targetValue, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [targetValue, duration]);

  return count;
};
