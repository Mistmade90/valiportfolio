"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Globe,
  Layers3,
  Sparkles,
  Star,
  Sword,
  Wand2,
  X,
  Shield,
  Rocket,
  Crown,
  Images,
} from "lucide-react";

export default function Portfolio() {
  const [selected, setSelected] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const titles = useMemo(
    () => [
      "Blender Modeler",
      "Roblox Builder",
    ],
    []
  );

  const [currentTitle, setCurrentTitle] = useState(0);

  const aboutText =
    "I'm an 18 year old Blender modeler and Roblox Builder from Germany I specialize in Modeling all sorts of things from Weapons all the way to buildings. My journey through many Star wars projects has let me show my talent in many communities. This talent can be used to create your game too. Feel free to check out my projects and contact me if needed.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(aboutText.slice(0, i));
      i++;

      if (i > aboutText.length) clearInterval(interval);
    }, 12);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Vali's Blender Collection",
      desc: "High quality cinematic renders and sci-fi creations.",
      longDesc:
        "A complete collection of cinematic Blender creations, immersive sci-fi environments, detailed weapons and Star Wars inspired artwork.",
      tags: [
        "Blender",
        "Sci-Fi",
        "Weapons",
        "Roblox",
      ],
      images: [
        "/images/Vali1.png",
        "/images/Vali2.png",
        "/images/Vali3.png",
        "/images/Vali4.png",
        "/images/Vali5.png",
        "/images/Vali6.png",
        "/images/Vali7.png",
        "/images/Vali8.png",
        "/images/Vali9.png",
        "/images/Vali10.png",
        "/images/Vali11.png",
        "/images/Vali12.png",
        "/images/Vali13.png",
      ],
    },
  ];

  const floatingIcons = [
    {
      icon: <Sparkles size={16} />,
      className: "top-[10%] left-[8%]",
      delay: 0,
    },
    {
      icon: <Sword size={16} />,
      className: "top-[18%] right-[12%]",
      delay: 1,
    },
    {
      icon: <Rocket size={16} />,
      className: "bottom-[15%] left-[10%]",
      delay: 2,
    },
    {
      icon: <Layers3 size={16} />,
      className: "bottom-[18%] right-[12%]",
      delay: 3,
    },
    {
      icon: <Shield size={16} />,
      className: "top-[48%] left-[4%]",
      delay: 4,
    },
    {
      icon: <Wand2 size={16} />,
      className: "top-[52%] right-[4%]",
      delay: 5,
    },
  ];

  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const nextImage = useCallback(() => {
    if (activeImage === null || !selected) return;

    setActiveImage((prev) =>
      prev === selected.images.length - 1 ? 0 : prev! + 1
    );
  }, [activeImage, selected]);

  const prevImage = useCallback(() => {
    if (activeImage === null || !selected) return;

    setActiveImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev! - 1
    );
  }, [activeImage, selected]);

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: black;
          overflow-x: hidden;
          color: white;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 999px;
        }
      `}</style>

      <main className="relative min-h-screen bg-black text-white overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-white/[0.05] blur-[180px] rounded-full" />

          <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-white/[0.04] blur-[180px] rounded-full" />

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        {/* FLOATING ICONS */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
            className={`absolute ${item.className} hidden lg:flex z-10 w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md items-center justify-center text-zinc-300`}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* NAV */}
        <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-black/40 backdrop-blur-xl">

          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            <h1 className="text-xl font-black tracking-[0.25em]">
              VALITHAR
            </h1>

            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                Home
              </button>

              <button
                onClick={goToProjects}
                className="hover:text-white transition"
              >
                Projects
              </button>

              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="hover:text-white transition"
              >
                Contact
              </button>

            </nav>

          </div>

        </header>

        {/* HERO */}
        <section className="relative z-20 min-h-screen max-w-6xl mx-auto px-6 pt-24 flex items-center">

          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start">

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >

                <div className="absolute inset-0 bg-white/10 blur-[80px] rounded-full scale-110" />

                <div className="relative w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-white/10">

                  <Image
                    src="https://cdn.discordapp.com/avatars/519825388961005568/0bdc2bbf5705dc4ccd722f9b8fed2bd2.png?size=1024"
                    alt="Valithar"
                    fill
                    priority
                    unoptimized
                    className="object-cover scale-110"
                  />

                </div>

                <div className="absolute bottom-4 right-0 px-4 py-3 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <Crown size={16} />

                    <div>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                        Status
                      </p>

                      <p className="font-bold text-sm">
                        Available
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

            {/* TEXT */}
            <div className="text-center lg:text-left">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl mb-6">

                <Sparkles size={14} />

                <AnimatePresence mode="wait">

                  <motion.span
                    key={currentTitle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="uppercase tracking-[0.25em] text-xs text-zinc-200"
                  >
                    {titles[currentTitle]}
                  </motion.span>

                </AnimatePresence>

              </div>

              <h1 className="text-5xl md:text-7xl leading-none font-black mb-6">

                Hi, I'm{" "}

                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                  Valithar
                </span>

              </h1>

              {/* SMALL BOXES */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.05]">

                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Star size={16} />
                  </div>

                  <span className="font-semibold text-sm">
                    Blender Specialist
                  </span>

                </div>

                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.05]">

                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Globe size={16} />
                  </div>

                  <span className="font-semibold text-sm">
                    Roblox Builder
                  </span>

                </div>

              </div>

              <p className="text-zinc-300 text-base leading-8 max-w-xl mb-10 mx-auto lg:mx-0">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">

                <button
                  onClick={goToProjects}
                  className="group px-7 py-4 rounded-2xl bg-white text-black font-bold hover:scale-[1.02] transition duration-300 flex items-center gap-3"
                >
                  View Projects

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </button>

                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] transition duration-300"
                >
                  Contact Me
                </button>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">

                {[
                  {
                    value: "30+",
                    label: "Projects",
                  },
                  {
                    value: "2+",
                    label: "Years",
                  },
                  {
                    value: "100%",
                    label: "Passion",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >

                    <h3 className="text-3xl font-black mb-1">
                      {item.value}
                    </h3>

                    <p className="text-zinc-400 uppercase tracking-[0.2em] text-[10px]">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative z-20 max-w-5xl mx-auto px-6 py-24"
        >

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8"
            >

              {/* IMAGE COUNT */}
              <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl text-sm">

                <Images size={15} />

                <span>
                  {project.images.length}
                </span>

              </div>

              {/* TITLE */}
              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <Cpu size={24} />
                </div>

                <h2 className="text-3xl md:text-4xl font-black">
                  {project.title}
                </h2>

              </div>

              <p className="text-zinc-400 leading-8 mb-8 max-w-3xl">
                {project.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tags.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-300"
                  >
                    {tag}
                  </div>
                ))}

              </div>

              <button
                onClick={() => setSelected(project)}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-white text-black font-bold hover:scale-[1.02] transition duration-300"
              >
                View Projects

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </button>

            </div>
          ))}

        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative z-20 max-w-5xl mx-auto px-6 pb-28"
        >

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">

            {/* TITLE */}
            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                <Sparkles size={24} />
              </div>

              <h2 className="text-3xl md:text-4xl font-black">
                Let's Build Something
              </h2>

            </div>

            <p className="text-zinc-400 text-base leading-8 max-w-3xl mb-10">
              Feel free to contact me for commissions,
              collaborations, sci-fi assets, environments,
              weapon modeling or Roblox projects.
            </p>

            <div className="grid md:grid-cols-3 gap-5">

              {/* EMAIL */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-.97 1.858l-7.5 5a2.25 2.25 0 01-2.56 0l-7.5-5A2.25 2.25 0 012.25 7.743V7.5"
                    />
                  </svg>

                </div>

                <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500 mb-3">
                  Email
                </p>

                <a
                  href="mailto:roughxvi@gmail.com"
                  className="text-lg font-bold hover:text-zinc-300 transition break-all"
                >
                  roughxvi@gmail.com
                </a>

              </div>

              {/* DISCORD */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    viewBox="0 0 127.14 96.36"
                    fill="currentColor"
                  >
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2A75.57,75.57,0,0,0,95.73,78c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07Z" />
                  </svg>

                </div>

                <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500 mb-3">
                  Discord
                </p>

                <p className="text-lg font-bold">
                  rough4574
                </p>

              </div>

              {/* ROBLOX */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">

                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 3L3 19L19 21L21 5L5 3ZM10.5 9.5L14.5 10.5L13.5 14.5L9.5 13.5L10.5 9.5Z" />
                  </svg>

                </div>

                <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500 mb-3">
                  Roblox
                </p>

                <p className="text-lg font-bold">
                  XVI_RoughJ
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* MODAL */}
        <AnimatePresence>

          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{ duration: 0.12 }}
                className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-4xl font-black mb-3">
                      {selected.title}
                    </h2>

                    <p className="text-zinc-400 max-w-2xl leading-7 text-sm">
                      {selected.longDesc}
                    </p>

                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.08] transition"
                  >
                    <X />
                  </button>

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  {selected.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer"
                      onClick={() => setActiveImage(index)}
                    >

                      <Image
                        src={img}
                        alt={`Project ${index}`}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="w-full h-[260px] object-cover group-hover:scale-[1.02] transition duration-300"
                      />

                    </div>
                  ))}

                </div>

              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>

        {/* FULLSCREEN */}
        <AnimatePresence>

          {activeImage !== null && selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
            >

              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 z-50 w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 z-50 w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.05] flex items-center justify-center"
              >
                <ChevronRight size={24} />
              </button>

              <Image
                src={selected.images[activeImage]}
                alt="Fullscreen"
                width={1800}
                height={1200}
                priority
                className="max-w-[92vw] max-h-[92vh] object-contain rounded-3xl"
              />

            </motion.div>
          )}

        </AnimatePresence>

      </main>
    </>
  );
}