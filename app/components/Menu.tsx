"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CATEGORY_LABELS, menuData } from "../data/menu";
import { useLanguage } from "../context/LanguageContext";
import { MenuCategory, MenuItem } from "../types/menu";
import MenuCard from "./MenuCard";

const categories = Object.values(MenuCategory);

export default function Menu() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.BOREKLER);

  const filteredItems = useMemo(
    () => menuData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

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

      <div className="mb-10">
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-3 rounded-[20px] text-xs md:text-sm font-black transition-all duration-300 uppercase tracking-wider border font-montserrat ${
                activeCategory === category
                  ? "bg-[var(--foreground)] text-[var(--background)] border-transparent"
                  : "bg-[var(--surface)] text-gray-500 border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
              }`}
            >
              {CATEGORY_LABELS[category]}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ delay: index * 0.04 }}
              className="h-full"
            >
              <MenuCard item={item} onClick={() => setSelectedProduct(item)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
                    {selectedProduct.isHot && (
                      <span className="px-5 py-2 bg-[var(--accent)] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_var(--accent)] transition-colors duration-500">
                        Fırından Yeni Çıktı
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-[var(--foreground)] leading-tight md:leading-none uppercase tracking-tighter transition-colors duration-500 font-montserrat">
                    {selectedProduct.name}
                  </h3>
                </div>

                <p className="text-lg md:text-2xl text-gray-500 leading-relaxed font-light transition-colors duration-500">
                  Not: {selectedProduct.description}
                </p>

                <div className="pt-8 md:pt-10 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-end justify-between gap-6 transition-colors duration-500">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1 md:mb-2">{t("portionPrice")}</span>
                    <div className="text-5xl md:text-6xl font-black text-[var(--accent)] text-right">
                      ₺{selectedProduct.price.toFixed(2).replace(".", ",")}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/905383129719"
                    className="bg-[var(--primary)] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:opacity-90 transition-opacity duration-500 text-center shadow-[0_0_20px_var(--primary)]/40"
                  >
                    {t("getInfo")}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
