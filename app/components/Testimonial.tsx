"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonial() {
    const { t, language } = useLanguage();

    const reviewText = t("testimonialReview") || "";

    const formatReview = (text: string) => {
        const parts = text.split(/(\(.*?\))/g);
        return parts.map((part, i) => {
            if (part.startsWith('(') && part.endsWith(')')) {
                return (
                    <span key={i} className="italic opacity-80 font-normal">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden bg-[var(--background)] w-full max-w-7xl mx-auto font-poppins transition-colors duration-500">
            <div className="relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-4 transition-colors duration-500 font-montserrat"
                    >
                        {t("testimonialsTitle")}
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="backdrop-blur-3xl bg-[var(--surface)] border border-[var(--border-color)] p-8 md:p-16 lg:p-24 rounded-[32px] relative overflow-hidden group shadow-2xl hover:border-[var(--accent)] transition-colors duration-500"
                >
                    <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                        <Quote className="w-32 h-32 md:w-64 md:h-64 text-[var(--foreground)] -rotate-12 transition-colors duration-500" />
                    </div>

                    <div className="flex justify-center gap-2 mb-8 md:mb-12">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)] fill-[var(--accent)] shadow-[0_0_15px_var(--accent)] transition-colors duration-500" />
                        ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-center text-gray-500 font-normal leading-[1.8] mb-8 md:mb-12 relative z-10 transition-colors duration-500 group-hover:text-[var(--foreground)] font-poppins px-4">
                        {formatReview(reviewText)}
                    </blockquote>

                    <div className="text-center relative z-10">
                        <cite className="not-italic font-black font-montserrat text-[var(--foreground)] text-lg md:text-xl uppercase tracking-widest block transition-colors duration-500">
                            {t("testimonialAuthor")}
                        </cite>
                        <p className="text-[10px] text-[var(--accent)] font-black mt-2 uppercase tracking-[0.3em] transition-colors duration-500">
                            {t("testimonialUnvan")}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[150px] -z-10 transition-colors duration-1000 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[150px] -z-10 transition-colors duration-1000 pointer-events-none" />
        </section>

    );
}
