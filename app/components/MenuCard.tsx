"use client";

import { motion } from "framer-motion";
import { Croissant, CupSoda, Flame, Coffee } from "lucide-react";
import { MenuCategory, MenuItem } from "../types/menu";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

const categoryIconMap = {
  [MenuCategory.BOREKLER]: Croissant,
  [MenuCategory.HAMUR_ISLERI]: Flame,
  [MenuCategory.SOGUK_ICECEKLER]: CupSoda,
  [MenuCategory.SICAK_ICECEKLER]: Coffee,
};

export default function MenuCard({ item, onClick }: MenuCardProps) {
  const CategoryIcon = categoryIconMap[item.category];

  return (
    <motion.div
      layout
      key={item.id}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{
        scale: 1.04,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-[var(--surface)] border border-[var(--border-color)] rounded-[28px] p-6 overflow-hidden hover:border-[var(--accent)] transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between min-h-[240px] h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="p-2 rounded-xl border border-[var(--border-color)] bg-[var(--background)]/60">
              <CategoryIcon className="w-4 h-4 text-[var(--accent)]" />
            </div>
            {item.isHot && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--accent)]">Hot</span>
            )}
          </div>

          <h3 className="text-xl font-black text-[var(--foreground)] mb-2 uppercase tracking-tight font-montserrat leading-tight">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4 font-poppins leading-relaxed">Not: {item.description}</p>
        </div>

        <div className="mt-4 border-t border-[var(--border-color)] pt-4">
          <div className="flex items-center justify-end gap-1 text-[var(--accent)]">
            <span className="font-mono text-2xl font-black leading-none">
              {item.price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-xl font-black leading-none">₺</span>
          </div>
          {!item.isAvailable && (
            <span className="mt-2 inline-block text-xs font-semibold text-red-400">Geçici olarak stokta yok</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
