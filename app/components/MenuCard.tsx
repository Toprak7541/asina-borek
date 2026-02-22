"use client";

import { motion } from "framer-motion";
import { Product } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";

interface MenuCardProps {
    item: Product;
    onClick: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
    const { language, t } = useLanguage();

    return (
        <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 100, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="group relative bg-[var(--surface)] border border-[var(--border-color)] rounded-[32px] p-6 sm:p-8 overflow-hidden hover:border-[var(--accent)] transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between min-h-[280px] h-full"
        >
            {/* V6.0 Inner Glow */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Radial Glow Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-[var(--foreground)] mb-2 uppercase tracking-tighter transition-colors duration-500 font-montserrat leading-tight">
                        {item.name[language as keyof typeof item.name] || item.name.en}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-3 mb-4 font-normal transition-colors duration-500 font-poppins leading-relaxed opacity-80">
                        {item.description[language as keyof typeof item.description] || item.description.en}
                    </p>
                    {item.unit && (
                        <span className="text-[10px] font-black text-[var(--foreground)] uppercase tracking-widest border border-[var(--border-color)] group-hover:border-[var(--accent)] px-2 py-1 rounded-md bg-[var(--surface)] inline-block transition-colors duration-500 font-poppins">
                            {item.unit[language as keyof typeof item.unit] || item.unit.en}
                        </span>
                    )}
                </div>

                <div className="mt-6 flex items-end justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-widest transition-colors duration-500 font-poppins">{t("price")}</span>
                        <div className="font-mono text-2xl md:text-3xl font-black text-[var(--foreground)] flex items-baseline transition-colors duration-500">
                            {item.price}
                            <span className="text-sm ml-1 text-[var(--accent)] transition-colors duration-500">₺</span>
                        </div>
                    </div>

                    <motion.div
                        className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center bg-[var(--background)] group-hover:border-[var(--accent)] transition-colors duration-500"
                    >
                        {/* Red/Gold accent dot */}
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full group-hover:animate-ping shadow-[0_0_10px_var(--accent)]" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
