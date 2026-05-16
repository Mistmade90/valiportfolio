"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

  const lines = useMemo(
    () => [
      "initializing core systems...",
      "loading react modules...",
      "compiling shaders...",
      "booting Valithar engine...",
      "loading blender pipeline...",
      "syncing assets...",
      "system ready...",
    ],
    []
  );

  const icons = useMemo(
    () => [Code2, Braces, Cpu, Terminal, Box, Cuboid, Sparkles, Layers, Brackets],
    []
  );

  const positions = useMemo(
    () => [
      { x: 10, y: 15 },
      { x: 80, y: 20 },
      { x: 25, y: 35 },
      { x: 70, y: 55 },
      { x: 15, y: 70 },
      { x: 85, y: 75 },
      { x: 50, y: 10 },
      { x: 40, y: 85 },
      { x: 60, y: 45 },
    ],
    []
  );

  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const charRef = useRef(0);

  // TYPEWRITER (optimized: fewer re-renders, stable ref)
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const interval = setInterval(() => {
      const line = lines[currentLine];

      if (charRef.current < line.length) {
        setDisplayText(line.slice(0, charRef.current + 1));
        charRef.current += 1;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          charRef.current = 0;
          setDisplayText("");
          setCurrentLine((prev) => prev + 1);
        }, 600);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [currentLine, lines]);

  // LOADING BAR
  useEffect(() => {
    const run = async () => {
      await controls.start({
        width: "100%",
        transition: {
          duration: 4.8,
          ease: [0.4, 0, 0.2, 1],
        },
      });

      setTimeout(onFinish, 400);
    };

    run();
  }, [controls, onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black overflow-hidden text-white"
    >
      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* STRONG WHITE GLOW (cleaner layered depth) */}
      <div className="absolute w-[900px] h-[900px] bg-white/10 blur-[240px] rounded-full animate-pulse" />
      <div className="absolute w-[700px] h-[700px] bg-white/5 blur-[200px] rounded-full" />

      {/* ROTATING RINGS */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[520px] h-[520px] rounded-full border border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute w-[720px] h-[720px] rounded-full border border-white/10"
      />

      {/* FLOATING ICONS (smoother + lighter performance) */}
      <div className="absolute inset-0">
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0.12,
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
              scale: [1, 1.06, 1],
              opacity: [0.12, 0.28, 0.12],
            }}
            transition={{
              duration: 7 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-white/50"
          >
            <Icon size={22 + (i % 3) * 4} />
          </motion.div>
        ))}
      </div>

      {/* MAIN */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* TITLE */}
        <div className="text-center mb-10">
          <motion.h1
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.15)",
                "0 0 28px rgba(255,255,255,0.35)",
                "0 0 10px rgba(255,255,255,0.15)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="text-5xl font-black tracking-[0.35em] uppercase"
          >
            VALITHAR
          </motion.h1>

          <p className="text-zinc-400 text-xs tracking-[0.35em] mt-3 uppercase">
            creative engine interface
          </p>
        </div>

        {/* TERMINAL */}
        <div className="w-[520px] rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_90px_rgba(255,255,255,0.08)] overflow-hidden">

          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-xs tracking-widest uppercase">
              <Terminal size={14} />
              system console
            </div>
          </div>

          {/* BODY */}
          <div className="p-6 h-[220px] flex flex-col justify-between font-mono text-sm">

            <div className="space-y-3">
              <div className="text-zinc-500">$ boot --initialize valithar</div>

              <div className="flex gap-2">
                <span>{">"}</span>

                <div className="text-white leading-7 tracking-wide">
                  {displayText}
                  <span className="animate-pulse ml-1">▋</span>
                </div>
              </div>
            </div>

            {/* LOADING */}
            <div className="mt-8">
              <div className="flex justify-between text-[10px] tracking-[0.3em] text-zinc-500 mb-3">
                <span>loading</span>
                <span className="text-white">v2.6.0</span>
              </div>

              <div className="h-3 rounded-full bg-zinc-900 border border-white/10 overflow-hidden relative">

                <motion.div
                  initial={{ width: "0%" }}
                  animate={controls}
                  className="h-full bg-white relative"
                >
                  <motion.div
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="absolute inset-y-0 w-24 bg-white/30 blur-xl"
                  />
                </motion.div>

              </div>

              <div className="flex justify-between mt-4 text-xs">
                <span className="uppercase tracking-widest text-white">
                  boot sequence running...
                </span>

                <span className="text-zinc-400 animate-pulse">
                  ONLINE
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* BOTTOM GLOW LINE */}
      <motion.div
        animate={{
          opacity: [0.2, 1, 0.2],
          scaleX: [0.9, 1, 0.9],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-14 w-[500px] h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />
    </motion.div>
  );
}