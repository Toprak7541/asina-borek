"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { menuData, Product } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";
import MenuCard from "./MenuCard";

export default function Menu() {
    const { language, t } = useLanguage();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const [activeCategory, setActiveCategory] = useState(menuData[0].id);
    const filteredItems = menuData.find((cat) => cat.id === activeCategory)?.items || [];

    return (
        <section id="menu" className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto min-h-screen font-poppins relative z-10">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-[var(--foreground)] mb-4 tracking-tighter uppercase transition-colors duration-500 font-montserrat"
                >
                    {t("menu")}
                </motion.h2>
                <div className="h-1 w-24 bg-[var(--accent)] mx-auto rounded-full shadow-[0_0_15px_var(--accent)] transition-colors duration-500" />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {menuData.map((category) => (
                    <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-8 py-4 rounded-[24px] text-sm font-black transition-all duration-300 uppercase tracking-widest border font-montserrat ${activeCategory === category.id
                            ? "bg-[var(--foreground)] text-[var(--background)] border-transparent shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            : "bg-[var(--surface)] text-gray-500 border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                            }`}
                    >
                        {category.title[language as keyof typeof category.title] || category.title.en}
                    </motion.button>
                ))}
            </div>

            {/* Product Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{ delay: index * 0.05 }}
                            className="h-full"
                        >
                            <MenuCard item={item} onClick={() => setSelectedProduct(item)} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Smart Pop-up Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 font-poppins">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />

                        <motion.div
                            layoutId={`product-${selectedProduct.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border-color)] rounded-[40px] p-8 md:p-16 shadow-2xl overflow-hidden z-[111] transition-colors duration-500"
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full bg-[var(--background)]/10 hover:bg-[var(--accent)] hover:text-white text-gray-500 transition-all duration-300 border border-[var(--border-color)]"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </button>

                            <div className="space-y-6 md:space-y-8 mt-4 md:mt-0">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-5 py-2 bg-[var(--accent)] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_var(--accent)] transition-colors duration-500">
                                            {t("specialMenu")}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-[var(--foreground)] leading-tight md:leading-none uppercase tracking-tighter transition-colors duration-500 font-montserrat">
                                        {selectedProduct.name[language as keyof typeof selectedProduct.name] || selectedProduct.name.en}
                                    </h3>
                                </div>

                                <p className="text-lg md:text-2xl text-gray-500 leading-relaxed font-light transition-colors duration-500">
                                    {selectedProduct.description[language as keyof typeof selectedProduct.description] || selectedProduct.description.en}
                                </p>

                                <div className="pt-8 md:pt-10 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-end justify-between gap-6 transition-colors duration-500">
                                    <div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1 md:mb-2">{t("portionPrice")}</span>
                                        <div className="font-mono text-5xl md:text-6xl font-black text-[var(--foreground)] flex items-baseline transition-colors duration-500">
                                            {selectedProduct.price}
                                            <span className="text-xl md:text-2xl text-[var(--accent)] ml-2 font-poppins transition-colors duration-500">₺</span>
                                        </div>
                                    </div>

                                    <a
                                        href={`https://wa.me/905383129719`}
                                        className="bg-[var(--primary)] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:opacity-90 transition-opacity duration-500 text-center shadow-[0_0_20px_var(--primary)]/40"
                                    >
                                        {t("getInfo")}
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-1000" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

