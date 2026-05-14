"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  Cpu,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [selected, setSelected] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const texts = ["Builder", "Blender"];
  const [currentText, setCurrentText] = useState(0);

  const fullText =
    "I'm an 18 year old Blender modeler and Roblox Builder from Germany";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 42);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Vali's Blender Projects",
      desc: "Blender Projects and Experiments",
      longDesc: "A collection of my Blender creations",
      icon: <Cpu size={28} />,
      tags: ["Blender", "3D", "Rendering", "Sci-Fi"],
      images: [
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345289089206/Vali_2.png?ex=6a06e35b&is=6a0591db&hm=48562ccb373987542e2dacfe23c8f8989e963acb50e3d3da5152ce217ecf0e38&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345876160646/Vali.png?ex=6a06e35b&is=6a0591db&hm=d7b94b844fd0ed34b7bd7fc80e34d03f20b453fa3cdd327bf52e443bda61746b&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346333204581/image.png?ex=6a06e35b&is=6a0591db&hm=a8fd0e91910bb723c85eb1704f71679b40fbe3aa962f76b922a984949b3eed0d&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346761154651/image.png?ex=6a06e35b&is=6a0591db&hm=12b09f6b480350857716e1c9c63f910394586cb66b7b68a97dd97e740e5cf825&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867347042042016/image.png?ex=6a06e35c&is=6a0591dc&hm=ab12da07120f6a06842b3954babf40c6696af0c89f220912d235cc6aa9057e59&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868380199911474/image.png?ex=6a06e452&is=6a0592d2&hm=46e38e74f3ccea885776d332b6f1810975c2486e6bdc53fade835165fb9ca692&",
      ],
    },
  ];

  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nextImage = () => {
    if (activeImage === null) return;

    setActiveImage((prev) =>
      prev === selected.images.length - 1 ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (activeImage === null) return;

    setActiveImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev! - 1
    );
  };

  return (
    <>
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: black;
        }
      `}</style>

      <section className="relative min-h-screen bg-black text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/10 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-white/5 blur-[200px] rounded-full" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-white/5 blur-[120px] rounded-full" />
        </div>

        {/* NAV */}
        <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl border-b border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

            <h1 className="text-2xl font-black tracking-wider">
              VALITHAR
            </h1>

            <nav className="flex gap-8 text-sm text-zinc-300">

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

            </nav>
          </div>
        </header>

        {/* HERO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-screen grid md:grid-cols-2 gap-20 items-center pt-32">

          {/* PROFILE */}
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border border-white/20">

              <Image
                src="https://cdn.discordapp.com/avatars/519825388961005568/0bdc2bbf5705dc4ccd722f9b8fed2bd2.png?size=1024"
                alt="Profile"
                fill
                priority
                unoptimized
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* TEXT */}
          <div>

            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-5 py-3 rounded-full mb-8">

              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-sm tracking-[0.2em] uppercase"
              >
                {texts[currentText]}
              </motion.span>

            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8">
              Hi, I'm <span className="text-zinc-300">Valithar</span>
            </h1>

            <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-6 py-4 rounded-2xl mb-8">
              <Star />
              <span className="text-xl font-semibold">
                Fullstack Developer
              </span>
            </div>

            <p className="text-zinc-200 text-lg leading-9 max-w-2xl mb-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black">1+</h3>
                <p className="text-zinc-400 text-sm mt-2">Years</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black">30+</h3>
                <p className="text-zinc-400 text-sm mt-2">Projects</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-black">100%</h3>
                <p className="text-zinc-400 text-sm mt-2">Satisfaction</p>
              </div>

            </div>

          </div>
        </div>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-32"
        >

          <div className="p-10 rounded-3xl border border-white/10 bg-white/5">

            <div className="flex items-center gap-4 mb-5">
              <Cpu size={28} />

              <h3 className="text-4xl font-black">
                Vali's Blender Projects
              </h3>
            </div>

            <p className="text-zinc-300 mb-8">
              Blender Projects and Experiments
            </p>

            <button
              onClick={() => setSelected(projects[0])}
              className="px-6 py-4 bg-white/10 rounded-2xl hover:bg-white/20 transition flex items-center gap-2"
            >
              View Projects
              <ArrowUpRight size={18} />
            </button>

          </div>
        </section>
      </section>

      {/* PROJECT MODAL */}
      <AnimatePresence>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6"
          >

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950/95 w-full max-w-6xl p-8 rounded-3xl border border-white/10 max-h-[90vh] overflow-y-auto"
            >

              <div className="flex items-center justify-between mb-10">

                <div>
                  <h2 className="text-4xl font-black mb-2">
                    {selected.title}
                  </h2>

                  <p className="text-zinc-400">
                    {selected.longDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                >
                  <X />
                </button>

              </div>

              {/* IMAGES */}
              <div className="grid md:grid-cols-2 gap-5">

                {selected.images.map((img: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group"
                    onClick={() => setActiveImage(index)}
                  >

                    <img
                      src={img}
                      alt={`Project ${index}`}
                      className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition text-white font-semibold text-lg">
                        View Image
                      </span>
                    </div>

                  </motion.div>
                ))}

              </div>

            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>

        {activeImage !== null && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center"
          >

            {/* CLOSE */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-50 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <X size={28} />
            </button>

            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-6 z-50 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronLeft size={30} />
            </button>

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-6 z-50 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              <ChevronRight size={30} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={selected.images[activeImage]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.images[activeImage]}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
            />

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}