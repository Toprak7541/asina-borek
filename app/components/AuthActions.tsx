"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { LoyaltyProfile } from "../types/loyalty";

interface SessionUser {
  name?: string | null;
  image?: string | null;
  loyalty?: LoyaltyProfile;
}

interface SessionData {
  user?: SessionUser;
}

export default function AuthActions() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch("/api/auth/session", { cache: "no-store" });
        if (!response.ok) {
          setSession(null);
          return;
        }
        const data = (await response.json()) as SessionData;
        setSession(data?.user ? data : null);
      } catch {
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    void loadSession();
  }, []);

  const handleSignIn = () => {
    window.location.href = "/api/auth/signin/google";
  };

  const handleSignOut = () => {
    window.location.href = "/api/auth/signout";
  };

  if (loading) {
    return <span className="hidden lg:inline-block text-xs text-gray-400">Auth...</span>;
  }

  if (!session?.user) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleSignIn}
        className="hidden sm:inline-flex items-center text-xs font-black text-[var(--background)] bg-[var(--foreground)] px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
      >
        Giriş Yap
      </motion.button>
    );
  }

  return (
    <button
      onClick={handleSignOut}
      className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)]/80 pl-2 pr-3 py-1.5 shadow-md"
      title="Çıkış Yap"
    >
      {session.user.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name || "Kullanıcı"}
          width={28}
          height={28}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-7 h-7 rounded-full bg-[var(--accent)]/30" />
      )}
      <span className="text-xs font-semibold text-[var(--foreground)] whitespace-nowrap">
        Hoş geldin, {session.user.name || "Misafir"}
      </span>
    </button>
  );
}
