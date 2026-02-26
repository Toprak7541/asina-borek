"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Review {
  id: number;
  author: string;
  rating: 5;
  date: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Merve K.",
    rating: 5,
    date: "12 Şubat 2026",
    comment:
      "Küt böreği gerçekten efsane. Çıtır dokusu ve iç harcın dengesi tam yerinde, kahvaltı için favori noktamız oldu.",
  },
  {
    id: 2,
    author: "Yunus E.",
    rating: 5,
    date: "05 Şubat 2026",
    comment:
      "Personel çok ilgili ve hızlı servis var. Özellikle çay ve börek ikilisi sabah toplantıları öncesi kurtarıcımız.",
  },
  {
    id: 3,
    author: "Selin T.",
    rating: 5,
    date: "29 Ocak 2026",
    comment:
      "Mekân tertemiz, ürünler taze. Ailece geldiğimizde herkes kendine göre bir şey buluyor, sıcak atmosferi çok sevdik.",
  },
  {
    id: 4,
    author: "Ahmet C.",
    rating: 5,
    date: "18 Ocak 2026",
    comment:
      "Sucuklu yumurta ve yanında gelen sıcak börekler harika. Fiyat/performans açısından bölgede açık ara en iyi yerlerden biri.",
  },
  {
    id: 5,
    author: "Elif N.",
    rating: 5,
    date: "09 Ocak 2026",
    comment:
      "Google'daki yüksek puanını hak ediyor. Lezzet, hijyen ve güleryüzlü ekip birleşince tekrar tekrar gelmek istiyorsunuz.",
  },
];

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
        <span className="text-sm font-black bg-gradient-to-br from-[#4285F4] via-[#DB4437] to-[#F4B400] bg-clip-text text-transparent">
          G
        </span>
      </div>
      <span className="text-xs font-medium text-[var(--foreground)]/80">Google üzerinden doğrulandı</span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[320px] md:w-[360px] flex-shrink-0 rounded-3xl border border-[var(--accent)]/40 bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] backdrop-blur-xl p-5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between mb-4 gap-3">
        <GoogleBadge />
        <time className="text-xs text-[var(--foreground)]/60">{review.date}</time>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={`${review.id}-${index}`} className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-[var(--foreground)]/90 mb-4">“{review.comment}”</p>

      <p className="text-sm font-semibold text-[var(--foreground)]">{review.author}</p>
    </article>
  );
}

export default function GoogleReviews() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px", once: false });
  const [isHovered, setIsHovered] = useState(false);

  const trackReviews = useMemo(() => [...REVIEWS, ...REVIEWS], []);

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <div className="mb-8 md:mb-10">
        <h3 className="font-montserrat text-2xl md:text-4xl font-black uppercase tracking-tight text-[var(--foreground)]">
          Google Reviews
        </h3>
        <p className="font-poppins text-sm md:text-base text-[var(--foreground)]/70 mt-2">
          {t("testimonialsTitle")}
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        <motion.div
          className="flex gap-4 md:gap-6 will-change-transform"
          animate={isInView ? { x: ["0%", "-50%"] } : { x: "0%" }}
          transition={
            isInView
              ? {
                  duration: isHovered ? 35 : 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
              : { duration: 0 }
          }
        >
          {trackReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
