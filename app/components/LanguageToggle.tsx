"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../context/translations";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string }[] = [
    { code: "tr", label: "TÜRKÇE" },
    { code: "en", label: "ENGLISH" },
    { code: "de", label: "DEUTSCH" },
    { code: "fr", label: "FRANÇAIS" },
    { code: "es", label: "ESPAÑOL" },
    { code: "zh", label: "中文" },
    { code: "ar", label: "العربية" },
    { code: "az", label: "AZƏRBAYCANH" },
];

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] shadow-lg hover:border-[var(--accent)] transition-colors opacity-80 hover:opacity-100"
            >
                <Globe className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute right-0 rtl:left-0 rtl:right-auto mt-4 w-64 md:w-80 p-5 rounded-[32px] bg-[var(--surface)]/90 backdrop-blur-3xl border border-[var(--border-color)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
                    >
                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 ps-2 font-montserrat opacity-70">SELECT ARCHIVE</div>
                        <div className="grid grid-cols-2 gap-2">
                            {languages.map((lang, idx) => (
                                <motion.button
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`relative px-4 py-3 rounded-2xl text-[10px] md:text-xs font-black tracking-[0.15em] uppercase transition-all duration-300 border ${language === lang.code
                                        ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10 shadow-[inset_0_0_10px_var(--accent)]"
                                        : "border-transparent text-gray-500 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                                        } font-montserrat`}
                                >
                                    {lang.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop for closing */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
