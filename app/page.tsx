"use client";

import { useState } from "react";
import Portfolio from "@/components/Portfolio";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <main className="bg-black text-white min-h-screen">
          <Portfolio />
        </main>
      )}
    </>
  );
}