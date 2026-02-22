"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function StatusIndicator() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkStatus = () => {
            // Get current time in UTC+3 (Istanbul Timezone equivalent)
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const istanbulTime = new Date(utc + (3600000 * 3)); // UTC+3

            const hours = istanbulTime.getHours();

            // Open between 05:00 and 18:00 (exclusive of 18:00 i.e. closes at 18:00)
            if (hours >= 5 && hours < 18) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--surface)] shadow-xl transition-all duration-500 font-montserrat`}
        >
            <div className={`relative flex items-center justify-center w-2.5 h-2.5`}>
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>

            <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-[var(--foreground)] opacity-90 transition-colors duration-500">
                {isOpen ? t("statusOpen") : t("statusClosed")}
            </span>
        </motion.div>
    );
}
