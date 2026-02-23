"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { useLanguage } from "../context/LanguageContext";
import { History, Award, Heart, Coffee } from "lucide-react";

export default function About() {
    const { t } = useLanguage();

    const items = [
        {
            title: t("aboutHeritage"),
            description: t("The Heritage"),
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex-center justify-center items-center">
                    <History className="w-12 h-12 text-[var(--primary)] opacity-50" />
                </div>
            ),
            icon: <History className="h-4 w-4 text-[var(--primary)]" />,
            className: "md:col-span-2",
        },
        {
            title: t("aboutMaster"),
            description: t("The Master"),
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 flex-center justify-center items-center">
                    <Award className="w-12 h-12 text-[var(--accent)] opacity-50" />
                </div>
            ),
            icon: <Award className="h-4 w-4 text-[var(--accent)]" />,
            className: "md:col-span-1",
        },
        {
            title: t("aboutPhilosophy"),
            description: t("The Philosophy"),
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-transparent flex-center justify-center items-center">
                    <Heart className="w-12 h-12 text-[var(--primary)] opacity-50" />
                </div>
            ),
            icon: <Heart className="h-4 w-4 text-[var(--primary)]" />,
            className: "md:col-span-1",
        },
        {
            title: t("aboutExperience"),
            description: t("The Experience"),
            header: (
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-transparent to-[var(--accent)]/20 flex-center justify-center items-center">
                    <Coffee className="w-12 h-12 text-[var(--accent)] opacity-50" />
                </div>
            ),
            icon: <Coffee className="h-4 w-4 text-[var(--accent)]" />,
            className: "md:col-span-4",
        },
    ];

    return (
        <section id="about" className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto transition-colors duration-500 font-poppins">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-[var(--foreground)] mb-4 tracking-tighter uppercase transition-colors duration-500 font-montserrat"
                >
                    {t("about")}
                </motion.h2>
                <div className="h-1 w-24 bg-[var(--primary)] mx-auto rounded-full shadow-[0_0_15px_var(--primary)] transition-colors duration-500" />
            </div>

            <BentoGrid>
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description=""
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
