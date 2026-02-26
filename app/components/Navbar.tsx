"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import StatusIndicator from "./StatusIndicator";
import AuthActions from "./AuthActions";
import { Menu as MenuIcon, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 bg-[var(--surface)]/70 backdrop-blur-md border-b border-[var(--border-color)] shadow-xl transition-all duration-500 font-poppins ${scrolled ? 'h-14 py-2' : 'h-20 py-4'}`}
            >
                <div className="flex items-center gap-4 md:gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl font-black font-montserrat tracking-tighter text-[var(--foreground)] cursor-pointer group transition-colors duration-500"
                        onClick={() => scrollToSection("hero")}
                    >
                        AŞİNA<span className="text-[var(--primary)] group-hover:drop-shadow-[0_0_8px_var(--primary)] transition-all">.</span>
                    </motion.div>

                    <div className="hidden lg:block">
                        <StatusIndicator />
                    </div>
                </div>

                {/* Smooth-scroll Links (Desktop) */}
                <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
                    {["about", "menu", "konum"].map((item) => (
                        <motion.button
                            key={item}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                            onClick={() => scrollToSection(item)}
                            className="text-sm font-bold text-gray-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest relative group"
                        >
                            {t(item === "konum" ? "location" : item)}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
                        </motion.button>
                    ))}
                </div>

                {/* Right section */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Magnetic Button for Takeaway / Concept */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('https://wa.me/905383129719', '_blank')}
                        className="hidden lg:block text-xs font-black text-[var(--background)] bg-[var(--foreground)] px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                    >
                        {t("takeawayCta") || "GEL-AL"}
                    </motion.button>

                    <AuthActions />
                    <ThemeToggle />
                    <LanguageToggle />

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        onClick={() => setMobileMenuOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2.5 rounded-full bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] shadow-lg hover:border-[var(--accent)] transition-colors opacity-80 hover:opacity-100"
                    >
                        <MenuIcon className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Bottom Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 z-[120] bg-[var(--surface)] border-t border-[var(--border-color)] rounded-t-[32px] p-6 shadow-2xl flex flex-col md:hidden font-poppins"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-montserrat font-black text-xl text-[var(--foreground)] tracking-tighter">MENÜ</span>
                                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-[var(--foreground)] rounded-full hover:bg-[var(--accent)]/10 transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {["about", "menu", "konum"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className="text-left w-full p-4 rounded-2xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] font-bold uppercase tracking-widest hover:border-[var(--accent)] transition-colors"
                                    >
                                        {t(item === "konum" ? "location" : item)}
                                    </button>
                                ))}
                                <button
                                    onClick={() => { window.open('https://wa.me/905383129719', '_blank'); setMobileMenuOpen(false); }}
                                    className="text-center w-full p-4 mt-4 rounded-2xl bg-[var(--primary)] text-white font-black uppercase tracking-widest shadow-lg shadow-[var(--primary)]/30 hover:opacity-90 transition-opacity"
                                >
                                    {t("getInfo") || "İLETİŞİM"}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-full bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border-color)] shadow-lg hover:border-[var(--accent)] transition-colors opacity-80 hover:opacity-100"
        >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
    );
}
