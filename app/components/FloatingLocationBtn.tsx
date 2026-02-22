"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingLocationBtn() {
    const { t } = useLanguage();

    const openMaps = () => {
        window.open("https://maps.google.com/maps?q=Atat%C3%BCrk%2C+Muammer+Aksoy+Cd.+No%3A89%2C+41420+%C3%87ay%C4%B1rova%2FKocaeli", "_blank");
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={openMaps}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--border-color)] text-[var(--foreground)] px-4 py-3 rounded-full shadow-2xl hover:border-[var(--accent)] transition-colors duration-500 group"
        >
            <div className="bg-[var(--accent)] p-1.5 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[var(--background)]" />
            </div>
            <span className="font-poppins font-black text-xs uppercase tracking-widest hidden md:block">
                {t("locationCta") || "KONUM"}
            </span>
        </motion.button>
    );
}
