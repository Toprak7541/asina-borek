"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[var(--background)] border-t border-[var(--border-color)] py-24 px-4 overflow-hidden relative w-full font-poppins transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-start relative z-10 w-full">

                {/* Brand */}
                <div>
                    <h2 className="text-4xl font-black text-[var(--foreground)] mb-6 uppercase tracking-tighter transition-colors duration-500 font-montserrat">AŞİNA BÖREK</h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-normal transition-colors duration-500 font-poppins opacity-70">
                        {t("footerDesc")}
                    </p>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500 transition-colors duration-500">
                        <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center group hover:bg-[var(--accent)] transition-all duration-500 shadow-lg">
                            <MapPin className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--background)] transition-colors duration-500" />
                        </div>
                        <span className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs font-montserrat">{t("address")}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500 transition-colors duration-500">
                        <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center shadow-lg">
                            <Clock className="w-5 h-5 text-[var(--accent)] transition-colors duration-500" />
                        </div>
                        <span className="font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs font-montserrat">{t("hours")}</span>
                    </div>
                </div>

                {/* Contact Action */}
                <div className="flex flex-col items-center md:items-end justify-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/905383129719"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-4 bg-[var(--foreground)] text-[var(--background)] px-8 py-5 rounded-[24px] transition-all duration-500 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[var(--primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                        <MessageCircle className="w-6 h-6 relative z-10 transition-colors duration-500 group-hover:text-white" />
                        <div className="text-start relative z-10">
                            <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[var(--background)] opacity-70 group-hover:text-white/80 transition-colors duration-500 font-poppins">{t("contactCenter")}</span>
                            <span className="font-black uppercase tracking-[0.1em] text-sm group-hover:text-white transition-colors duration-500 font-montserrat leading-tight">{t("whatsappBtn")}</span>
                        </div>
                    </motion.a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-[var(--border-color)] text-center transition-colors duration-500">
                <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] transition-colors duration-500 font-montserrat opacity-60">
                    © {new Date().getFullYear()} AŞİNA BÖREK. {t("rights")}
                </p>
            </div>

            {/* Background Decor */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[100px] -z-10 transition-colors duration-1000 pointer-events-none" />
        </footer>
    );
}
