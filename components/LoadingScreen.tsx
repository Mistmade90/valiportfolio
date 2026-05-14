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

export default function LoadingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
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
      }, 28);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentLine((prev) => prev + 1);
      }, 650);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  // LOADING BAR
  useEffect(() => {
    const start = async () => {
      await controls.start({
        width: "100%",
        transition: {
          duration: 5,
          ease: [0.4, 0, 0.2, 1],
        },
      });

      setTimeout(onFinish, 400);
    };

    start();
  }, [controls, onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden text-white"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* MASSIVE GLOW (PURE WHITE ONLY) */}
      <div className="absolute w-[900px] h-[900px] bg-white/10 blur-[220px] rounded-full animate-pulse" />
      <div className="absolute w-[700px] h-[700px] bg-white/10 blur-[200px] rounded-full" />

      {/* CENTER RINGS */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[520px] h-[520px] rounded-full border border-white/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[680px] h-[680px] rounded-full border border-white/10"
      />

      {/* FLOATING ICONS */}
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
                `${positions[i].y + 4}vh`,
                `${positions[i].y}vh`,
              ],
              rotate: [0, 12, -12, 0],
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-white/60"
          >
            <Icon size={24 + (i % 3) * 6} />
          </motion.div>
        ))}
      </div>

      {/* MAIN PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        {/* TITLE */}
        <div className="text-center mb-8">
          <motion.h1
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.2)",
                "0 0 25px rgba(255,255,255,0.35)",
                "0 0 10px rgba(255,255,255,0.2)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-5xl font-black tracking-[0.35em] uppercase text-white"
          >
            VALITHAR
          </motion.h1>

          <p className="text-zinc-400 text-xs tracking-[0.4em] mt-3 uppercase">
            creative engine interface
          </p>
        </div>

        {/* TERMINAL */}
        <div className="relative w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.08)]">

          {/* TOP LINE */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-widest">
              <Terminal size={14} />
              system console
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 h-[220px] flex flex-col justify-between">
            <div className="space-y-3 font-mono text-sm">
              <div className="text-zinc-500">
                $ boot --initialize valithar
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white">{">"}</span>

                <div className="text-white leading-7 tracking-wide">
                  {displayText}
                  <span className="animate-pulse ml-1 text-white">▋</span>
                </div>
              </div>
            </div>

            {/* LOADING BAR */}
            <div className="mt-10">
              <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                <span>loading</span>
                <span className="text-white">v2.6.0</span>
              </div>

              <div className="relative h-3 overflow-hidden rounded-full bg-zinc-900 border border-white/10">

                <div className="absolute inset-0 bg-white/5" />

                <motion.div
                  initial={{ width: "0%" }}
                  animate={controls}
                  className="relative h-full rounded-full bg-white"
                >
                  <motion.div
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 w-24 bg-white/30 blur-xl"
                  />
                </motion.div>
              </div>

              {/* STATUS */}
              <div className="flex justify-between mt-4 text-xs">
                <span className="text-white uppercase tracking-widest">
                  boot sequence running...
                </span>

                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="text-zinc-400"
                >
                  ONLINE
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM LINE */}
      <motion.div
        animate={{
          opacity: [0.2, 1, 0.2],
          scaleX: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-14 h-px w-[500px] bg-gradient-to-r from-transparent via-white to-transparent"
      />
    </motion.div>
  );
}