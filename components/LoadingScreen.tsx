"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Code2,
  Braces,
  Cpu,
  Terminal,
  Box,
  Cuboid,
  Sparkles,
  Layers,
  Brackets,
} from "lucide-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const controls = useAnimation();

  const lines = [
    "initializing core systems...",
    "loading react modules...",
    "compiling shaders...",
    "booting Valithar engine...",
    "loading blender pipeline...",
    "syncing assets...",
    "system ready...",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const icons = [
    Code2,
    Braces,
    Cpu,
    Terminal,
    Box,
    Cuboid,
    Sparkles,
    Layers,
    Brackets,
  ];

  const positions = [
    { x: 10, y: 15 },
    { x: 80, y: 20 },
    { x: 25, y: 35 },
    { x: 70, y: 55 },
    { x: 15, y: 70 },
    { x: 85, y: 75 },
    { x: 50, y: 10 },
    { x: 40, y: 85 },
    { x: 60, y: 45 },
  ];

  // TYPEWRITER
  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (charIndex < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + lines[currentLine][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentLine((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  // LOADING BAR (5s)
  useEffect(() => {
    const start = async () => {
      await controls.start({
        width: "100%",
        transition: {
          duration: 5,
          ease: [0.4, 0, 0.2, 1],
        },
      });

      setTimeout(onFinish, 300);
    };

    start();
  }, [controls, onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-fuchsia-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-500/20 blur-[160px] rounded-full"></div>

      {/* FLOATING ICONS BACKGROUND */}
      <div className="absolute inset-0">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0.15,
              x: `${positions[i].x}vw`,
              y: `${positions[i].y}vh`,
            }}
            animate={{
              y: [
                `${positions[i].y}vh`,
                `${positions[i].y + 3}vh`,
                `${positions[i].y}vh`,
              ],
              rotate: [0, 10, -10, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-fuchsia-400"
          >
            <Icon size={22 + (i % 3) * 4} />
          </motion.div>
        ))}
      </div>

      {/* TERMINAL BOX */}
      <div className="w-[440px] h-[190px] bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono text-sm shadow-2xl relative z-10">

        {/* HEADER DOTS */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* TEXT */}
        <div className="text-fuchsia-300 leading-6">
          {displayText}
          <span className="animate-pulse text-white">▋</span>
        </div>
      </div>

      {/* LOADING BAR */}
      <div className="w-[360px] h-2 bg-zinc-800 rounded-full overflow-hidden mt-10 relative z-10">
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          className="h-full bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"
        />
      </div>

      {/* STATUS */}
      <p className="text-zinc-500 text-xs mt-4 tracking-widest relative z-10">
        boot sequence running...
      </p>
    </motion.div>
  );
}