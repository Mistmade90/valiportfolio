"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Circle,
  Disc3,
  Gamepad2,
  ArrowUpRight,
  Sparkles,
  Cpu,
  X,
  Box,
  Cuboid,
  Layers,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

export default function Portfolio() {
  const [selected, setSelected] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const texts = [
    "Builder",
    "Blender",
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Vali's Blender Projects",

      desc: "Blender Projects and Experiments",

      longDesc:
        "A collection of my Blender creation",

      icon: <Cpu size={28} />,

      tags: ["Blender", "3D", "Rendering", "Sci-Fi"],

      images: [
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345289089206/Vali_2.png?ex=6a04e91b&is=6a03979b&hm=dd6968b3b8922417c49f02d7c1316840775d6eeba4b5024f6bee591308de3e8b&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345876160646/Vali.png?ex=6a04e91b&is=6a03979b&hm=f540c86638760a393f35f0c8a7776771a93f4900ae6a059e92c2a34a056624fc&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346333204581/image.png?ex=6a04e91b&is=6a03979b&hm=7d534e4ee6c8d11cc9f9a3029eb3c7aa3a6310a1b7e0c507e4091a1977b63347&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346761154651/image.png?ex=6a04e91b&is=6a03979b&hm=62986f6cfae21854764a35acff0e915ea14ad7c3173b96d3472cffab6a4af2f7&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867347042042016/image.png?ex=6a04e91c&is=6a03979c&hm=0356e46288f28d42293f584893f5265448391e7994fa72f8c6cfbb46e871b851&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868380199911474/image.png?ex=6a04ea12&is=6a039892&hm=1d75ba2c5923b65b5de76b65a039ad65208d5835d92ff2ff4cb271e0c6919898&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868380682260611/image.png?ex=6a04ea12&is=6a039892&hm=843ff7d13524fc1c1acffce21df8b91850f005607152880b4ce82bf1497ec9d3&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868381189898421/image.png?ex=6a04ea12&is=6a039892&hm=df766f9ed297a556fd47502052167419e6c13ab9150308a2b3b12f4dc2494455&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868381689024582/image.png?ex=6a04ea12&is=6a039892&hm=13cf32e34224f687b39dc42af3741e1c1889c31c1e70c0dd0a84bfacac31b0f1&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868382175432815/image.png?ex=6a04ea12&is=6a039892&hm=cad786327dae6aa049a8f544b0cf02ba3f5e20290532f646053690b6d3c82441&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868383014420643/image.png?ex=6a04ea13&is=6a039893&hm=215cb4df0c586efbc2f6533718efdf224847e11721c9baad93774df2d53504d8&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868383333191690/image.png?ex=6a04ea13&is=6a039893&hm=656652bf535f060d2517e4ed4648a9fadda3c405da674289930507ddb3f30976&",
      ],
    },
  ];

  const floatingIcons = [
    { icon: <Box />, x: "10%", y: "20%", delay: 0 },
    { icon: <Cuboid />, x: "80%", y: "30%", delay: 2 },
    { icon: <Layers />, x: "15%", y: "70%", delay: 4 },
    { icon: <Sparkles />, x: "85%", y: "75%", delay: 1 },
    { icon: <Box />, x: "50%", y: "10%", delay: 3 },
    { icon: <Cuboid />, x: "60%", y: "85%", delay: 5 },
  ];

  const nextImage = () => {
    if (selected && activeImage !== null) {
      setActiveImage(
        (activeImage + 1) % selected.images.length
      );
    }
  };

  const prevImage = () => {
    if (selected && activeImage !== null) {
      setActiveImage(
        activeImage === 0
          ? selected.images.length - 1
          : activeImage - 1
      );
    }
  };

  return (
    <>
      <section className="relative min-h-screen bg-black text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#c026d320,transparent_35%),radial-gradient(circle_at_bottom_right,#ffffff15,transparent_35%)]"></div>

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* BLURS */}
        <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-fuchsia-500/20 blur-[180px] rounded-full"></div>

        {/* SEKUNDÄR FARBE WEISS */}
        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-white/10 blur-[180px] rounded-full"></div>

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-black tracking-wider text-white"
            >
              VALITHAR
            </motion.h1>

            <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
              <a
                href="#home"
                className="hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </nav>
          </div>
        </header>

        {/* FLOATING ICONS */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className="absolute text-white/20"
              style={{ left: item.x, top: item.y }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* HERO */}
        <div
          id="home"
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen grid md:grid-cols-2 gap-20 items-center pt-32"
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-white/20 blur-[140px] rounded-full"></div>

              {/* ROTATING RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-18px] rounded-full border border-white/30 border-dashed"
              ></motion.div>

              {/* SECOND RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-35px] rounded-full border border-fuchsia-400/20"
              ></motion.div>

              {/* IMAGE */}
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.2)]">

                <Image
                  src="https://cdn.discordapp.com/avatars/519825388961005568/0bdc2bbf5705dc4ccd722f9b8fed2bd2.png?size=1024"
                  alt="Profile"
                  fill
                  priority
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* STATUS CARD */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-6 -right-6 bg-white/10 border border-white/20 px-5 py-4 rounded-3xl backdrop-blur-2xl shadow-2xl"
              >

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Sparkles className="text-white" />

                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-300 uppercase tracking-[0.2em]">
                      Available
                    </p>

                    <h4 className="font-semibold text-white">
                      Blender + Fullstack
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* ICONS */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-5 mb-10"
            >

              {[Circle, Disc3, Gamepad2].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  className="w-14 h-14 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:border-white/40 transition"
                >
                  <Icon className="text-white" />
                </motion.div>
              ))}
            </motion.div>

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-5 py-3 rounded-full mb-8 backdrop-blur-xl"
            >

              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>

              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm tracking-[0.2em] uppercase"
                >
                  {texts[currentText]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl md:text-8xl font-black leading-none mb-8"
            >
              Hi, I'm{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-fuchsia-400">
                Valithar
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-6 py-4 rounded-2xl mb-8 backdrop-blur-xl"
            >

              <Star className="text-white" />

              <span className="text-xl font-semibold text-white">
                Fullstack Developer
              </span>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-zinc-200 text-lg leading-9 max-w-2xl mb-12"
            >
              I'm an 18 year old Blender modeler and Roblox Builder from Germany
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-5"
            >

              {[
                ["50+", "Projects"],
                ["1+", "Years"],
                ["100%", "Satisfaction"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-xl hover:border-white/40 transition"
                >

                  <h3 className="text-4xl font-black text-white mb-2">
                    {item[0]}
                  </h3>

                  <p className="text-zinc-300">
                    {item[1]}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-32"
        >

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.3em] text-fuchsia-400 text-sm mb-5">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-5">
              Featured Work
            </h2>

            <p className="text-zinc-400 text-lg">
              Blender Projects and Experiments
            </p>
          </div>

          <div className="grid gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/5 to-violet-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  <div className="flex items-center gap-4 text-fuchsia-400 mb-5">
                    {project.icon}

                    <h3 className="text-4xl font-black">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-lg leading-8 mb-8 max-w-3xl">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelected(project)}
                    className="group/button inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:scale-105 transition"
                  >
                    View Projects

                    <ArrowUpRight className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-950/95 border border-white/10 rounded-[2rem] max-w-6xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
              >
                <X />
              </button>

              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500 mb-5">
                {selected.title}
              </h2>

              <p className="text-zinc-300 text-lg leading-8 mb-10">
                {selected.longDesc}
              </p>

              {/* IMAGES */}
              <div className="grid md:grid-cols-2 gap-5">
                {selected.images.map((img: string, i: number) => (
                  <motion.img
                    key={i}
                    src={img}
                    whileHover={{
                      scale: 1.02,
                    }}
                    onClick={() => setActiveImage(i)}
                    className="h-72 w-full object-cover rounded-2xl border border-white/10 cursor-pointer"
                  />
                ))}
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-10">
                {selected.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE VIEWER */}
      <AnimatePresence>
        {activeImage !== null && selected && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CLOSE */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
            >
              <X size={30} />
            </button>

            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
            >
              <ChevronRight />
            </button>

            {/* IMAGE */}
            <motion.img
              key={activeImage}
              src={selected.images[activeImage]}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}