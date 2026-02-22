"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

// BentoGrid Wrapper
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 md:px-0",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

// Individual Bento Item
export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
}) => {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }} // V6.0 %95 Press Effect
            onClick={onClick}
            className={cn(
                "row-span-1 rounded-[32px] group/bento transition duration-500 p-6 bg-[var(--surface)] border border-[var(--border-color)] justify-between flex flex-col space-y-4 relative overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] aspect-auto max-md:aspect-[4/3] transform-gpu",
                className
            )}
        >
            {/* 1px Border Glow Effect (Gold/Red based on theme variable) */}
            <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700" />

            {/* Hover Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {header}
            <div className="group-hover/bento:translate-x-1 transition duration-500 relative z-10 mt-auto">
                {icon}
                <div className="font-montserrat font-black text-[var(--foreground)] tracking-tight mb-2 mt-2 transition-colors duration-500 text-lg md:text-xl uppercase leading-tight">
                    {title}
                </div>
                <div className="font-poppins font-normal text-sm text-gray-500 transition-colors duration-500 leading-snug">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
