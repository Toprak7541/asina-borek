"use client";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import FloatingLocationBtn from "./components/FloatingLocationBtn";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "./context/LanguageContext";

function AppContent() {
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isRtl = language === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="w-full relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] z-[1000] origin-[0%]"
        style={{ scaleX }}
      />

      {/* Film Grain Layer */}
      <div className="film-grain" />

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }} // V7.0 Snappier transition
        >
          <Navbar />
          <main className="flex flex-col items-center justify-center w-full">
            <Hero />
            <About />
            <ImageSlider />
            <Menu />
            <Testimonial />
            <MapSection />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>

      <FloatingLocationBtn />
    </div>
  );
}


export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--background)] font-sans w-full overflow-hidden transition-colors duration-500">
          <AppContent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

