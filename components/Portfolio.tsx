"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
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

  const texts = ["Builder", "Blender"];
  const [currentText, setCurrentText] = useState(0);

  const fullText =
    "I'm an 18 year old Blender modeler and Roblox Builder from Germany";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Vali's Blender Projects",
      desc: "Blender Projects and Experiments",
      longDesc: "A collection of my Blender creation",
      icon: <Cpu size={28} />,
      tags: ["Blender", "3D", "Rendering", "Sci-Fi"],
      images: [
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345289089206/Vali_2.png?ex=6a06e35b&is=6a0591db&hm=48562ccb373987542e2dacfe23c8f8989e963acb50e3d3da5152ce217ecf0e38&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867345876160646/Vali.png?ex=6a06e35b&is=6a0591db&hm=d7b94b844fd0ed34b7bd7fc80e34d03f20b453fa3cdd327bf52e443bda61746b&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346333204581/image.png?ex=6a06e35b&is=6a0591db&hm=a8fd0e91910bb723c85eb1704f71679b40fbe3aa962f76b922a984949b3eed0d&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867346761154651/image.png?ex=6a06e35b&is=6a0591db&hm=12b09f6b480350857716e1c9c63f910394586cb66b7b68a97dd97e740e5cf825&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503867347042042016/image.png?ex=6a06e35c&is=6a0591dc&hm=ab12da07120f6a06842b3954babf40c6696af0c89f220912d235cc6aa9057e59&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868380199911474/image.png?ex=6a06e452&is=6a0592d2&hm=46e38e74f3ccea885776d332b6f1810975c2486e6bdc53fade835165fb9ca692&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868380682260611/image.png?ex=6a06e452&is=6a0592d2&hm=fb4ff3d1117f74aae55be08c0b9e0b5a0d1f3c700237be29d08548c2ef2fb480&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868381189898421/image.png?ex=6a06e452&is=6a0592d2&hm=8d6b35f0819d9bc2d42d1b0986fa331e43ee2bacd1a35e7fb3d10c52dd395fe9&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868381689024582/image.png?ex=6a06e452&is=6a0592d2&hm=48a8f27e7c611bb4d19095489326247a8d9c985d429361b4a9b6afdf1ce95379&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868382175432815/image.png?ex=6a06e452&is=6a0592d2&hm=cda46a0404547f8c06fbd944d79b7cab769185966b9fcae8cc91730ad05a04ab&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868383014420643/image.png?ex=6a06e453&is=6a0592d3&hm=93dd12b039a57970ec8dc140fd02a0fb42201473b6262d2d58b4ef01980b4434&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1503868383333191690/image.png?ex=6a06e453&is=6a0592d3&hm=cf877725e0b7130d1bf3f2c287f262e887bbc1eb4f37cbfbdba41b04a0acf4ba&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1504551880527843448/image.png?ex=6a0766a1&is=6a061521&hm=3245afe2920f27dbbaddc80286594b5f707de5169bc94fde91f6aa62e4751fb4&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1504551880871907388/image.png?ex=6a0766a1&is=6a061521&hm=3690eb267635b78296a6525a9d3495a29c5490b827513190b6a59250a41602ff&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1504551881278750781/image.png?ex=6a0766a1&is=6a061521&hm=d3b8487a121d2c3f168b23c4c0d24c13ae34107bfe8c244cfaa5d553476c3148&",
        "https://cdn.discordapp.com/attachments/1274696555772776468/1504551881660305658/image.png?ex=6a0766a1&is=6a061521&hm=8c508217c303e03193a3b4a74731cd0230b371a3ce7d260a1c1ff8aee99b4c35&",
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
      setActiveImage((activeImage + 1) % selected.images.length);
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
      {/* ✅ GLOBAL SCROLL FIX (IMPORTANT) */}
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* MAIN WRAPPER */}
      <section className="relative min-h-screen bg-black text-white overflow-x-hidden">

        {/* NAV */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

            <h1 className="text-2xl font-black tracking-wider text-white">
              VALITHAR
            </h1>

            <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition"
              >
                Home
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-white transition"
              >
                Projects
              </button>
            </nav>

          </div>
        </header>

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff10,transparent_40%),radial-gradient(circle_at_bottom_right,#ffffff08,transparent_40%)]" />

        {/* FLOATING ICONS */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              className="absolute text-white/25"
              style={{ left: item.x, top: item.y }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

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
              <Star className="text-white" />
              <span className="text-xl font-semibold text-white">
                Fullstack Developer
              </span>
            </div>

            <p className="text-zinc-200 text-lg leading-9 max-w-2xl mb-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>

          </div>
        </div>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-32"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="flex items-center gap-4 mb-5">
                {project.icon}
                <h3 className="text-4xl font-black">{project.title}</h3>
              </div>

              <p className="text-zinc-300 mb-8">{project.desc}</p>

              <button
                onClick={() => setSelected(project)}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition"
              >
                View Projects <ArrowUpRight />
              </button>
            </div>
          ))}
        </section>

      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-6">
            <motion.div className="bg-zinc-950/95 w-full max-w-6xl p-8 rounded-3xl">

              <button onClick={() => setSelected(null)}>
                <X />
              </button>

              <div className="grid md:grid-cols-2 gap-5 mt-10">
                {selected.images.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={img}
                    className="h-72 w-full object-cover rounded-2xl cursor-pointer"
                    onClick={() => setActiveImage(i)}
                  />
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE VIEWER */}
      <AnimatePresence>
        {activeImage !== null && selected && (
          <motion.div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center">

            <button onClick={() => setActiveImage(null)} className="absolute top-6 right-6">
              <X />
            </button>

            <button onClick={prevImage} className="absolute left-6">
              <ChevronLeft />
            </button>

            <motion.img
              key={activeImage}
              src={selected.images[activeImage]}
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />

            <button onClick={nextImage} className="absolute right-6">
              <ChevronRight />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}