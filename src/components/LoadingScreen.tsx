import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 100;
    const duration = 2500;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return target;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Top decorative line */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-px bg-black/25" />
        <div className="w-2 h-2 rounded-full border border-black/35" />
        <div className="w-12 h-px bg-black/25" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.2 }}
        className="text-black/60 text-xs uppercase tracking-[0.4em] mb-8"
      >
        Initialising
      </motion.p>

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <span className="text-[8rem] md:text-[12rem] font-extrabold text-black leading-none tracking-tighter">
          {Math.floor(count).toString().padStart(2, "0")}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5 }}
        className="text-black/45 text-xs uppercase tracking-[0.3em] mb-10"
      >
        Est. 2024
      </motion.p>

      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-black tracking-wide uppercase">
          Brookode
        </h1>
        <p className="text-black/45 text-xs uppercase tracking-[0.4em] mt-2">
          Technologys
        </p>
      </motion.div>

      {/* Bottom decorative line */}
      <div className="flex items-center gap-3 mt-10">
        <div className="w-12 h-px bg-black/25" />
        <div className="w-2 h-2 rounded-full border border-black/35" />
        <div className="w-12 h-px bg-black/25" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="h-px bg-black/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black/55"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
