"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/1.jpg", alt: "Aşina Börek galeri görseli 1" },
  { src: "/images/gallery/2.jpg", alt: "Aşina Börek galeri görseli 2" },
  { src: "/images/gallery/3.jpg", alt: "Aşina Börek galeri görseli 3" },
  { src: "/images/gallery/4.jpg", alt: "Aşina Börek galeri görseli 4" },
  { src: "/images/gallery/5.jpg", alt: "Aşina Börek galeri görseli 5" },
  { src: "/images/gallery/6.jpg", alt: "Aşina Börek galeri görseli 6" },
];

const carouselItems = [...galleryImages, ...galleryImages];

export default function ImageSlider() {
  return (
    <section className="w-full py-12 md:py-16 overflow-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex gap-4 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {carouselItems.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className="relative w-[240px] h-[180px] md:w-[320px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-[0_14px_35px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 240px, 320px"
                className="object-cover"
                priority={index < 6}
              />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
