"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

export default function MapSection() {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <section id="konum" className="py-24 px-4 bg-[var(--background)] w-full max-w-7xl mx-auto font-poppins transition-colors duration-500">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 uppercase tracking-[0.5em] text-[10px] font-black mb-4 transition-colors duration-500 font-montserrat"
                >
                    {t("locationTitle")}
                </motion.p>
                <h2 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tighter uppercase transition-colors duration-500 font-montserrat">{t("contactTitle")}</h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-full h-[300px] md:h-[500px] rounded-[32px] overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl group hover:border-[var(--accent)] transition-colors duration-500"
            >
                {/* Accent Pulse Overlay */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000 shadow-[0_0_20px_var(--accent)]" />

                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=Atat%C3%BCrk%2C+Muammer+Aksoy+Cd.+No%3A89%2C+41420+%C3%87ay%C4%B1rova%2FKocaeli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
                    style={{ filter: theme === 'dark' ? "invert(100%) hue-rotate(180deg) brightness(0.7)" : "grayscale(100%) opacity(0.8)" }}
                    title="Aşina Börek Location"
                ></iframe>

                {/* Contact Highlight Overlay */}
                <div className="absolute bottom-6 start-6 md:bottom-10 md:start-10 z-20 bg-[var(--surface)]/90 backdrop-blur-3xl border border-[var(--border-color)] p-4 md:p-6 rounded-3xl max-w-[280px] md:max-w-sm transition-all duration-500 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                    <h4 className="text-[var(--foreground)] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2 transition-colors duration-500 font-montserrat">{t("address")}</h4>
                    <p className="text-gray-500 text-xs md:text-sm font-normal transition-colors duration-500 font-poppins leading-relaxed opacity-80">Atatürk, Muammer Aksoy Cd. No:89, 41420 Çayırova/Kocaeli</p>
                </div>
            </motion.div>
        </section>
    );
}
