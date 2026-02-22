"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { t } = useLanguage();

    const scrollToMenu = () => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div id="hero" className="relative h-screen w-full flex items-center justify-center bg-[var(--background)] px-4 pt-24 pb-8 overflow-hidden font-sans transition-colors duration-500">

            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-full max-h-[85vh]">

                {/* Left (Large Tile): Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-2 bg-[var(--surface)] border border-[var(--border-color)] rounded-[32px] p-8 md:p-16 flex flex-col justify-end relative overflow-hidden group hover:border-[var(--accent)] transition-colors shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 w-full">
                        <motion.h1
                            key={t("heroTitle")}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] leading-[1.1] tracking-tighter mb-6 transition-colors duration-500 uppercase font-montserrat"
                        >
                            {t("heroTitle")}
                        </motion.h1>

                        <motion.p
                            key={t("heroSubtext")}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg lg:text-xl text-gray-500 font-light mb-10 max-w-2xl font-poppins"
                        >
                            {t("heroSubtext")}
                        </motion.p>

                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[var(--accent)] transition-colors duration-500" />
                            <p className="text-sm md:text-lg text-gray-400 font-bold tracking-widest uppercase">
                                AŞİNA BÖREK
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right (Small Tile): High-Res Logo Glass Pulse */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:flex bg-[var(--surface)] border border-[var(--border-color)] rounded-[32px] p-8 flex-col items-center justify-center relative overflow-hidden group shadow-2xl hover:border-[var(--accent)] transition-colors"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-56 h-56 rounded-full bg-[var(--surface)]/30 backdrop-blur-3xl border border-[var(--border-color)] flex items-center justify-center relative z-10 shadow-[0_0_40px_var(--accent)]"
                    >
                        <div className="relative w-40 h-40 drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity">
                            <img src="/logo.png" alt="Aşina Börek Global Logo" className="object-contain w-full h-full" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom (Wide Tile): Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:col-span-3 h-24 bg-[var(--surface)] border border-[var(--border-color)] rounded-[32px] flex items-center justify-between px-8 md:px-12 cursor-pointer hover:border-[var(--accent)] transition-all group shadow-xl"
                    onClick={scrollToMenu}
                >
                    <span className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-[0.4em] group-hover:text-[var(--foreground)] transition-colors font-montserrat">
                        Explore Our Legacy
                    </span>

                    <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center relative">
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-5 h-5 text-gray-400 group-hover:text-[var(--foreground)] transition-colors" />
                        </motion.div>
                        {/* Accent pulsing dot */}
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[var(--accent)] rounded-full animate-ping shadow-[0_0_10px_var(--accent)]" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]" />
                    </div>
                </motion.div>

            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[150px] -z-10 pointer-events-none transition-colors duration-1000" />
        </div>
    );
}

