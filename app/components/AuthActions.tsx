"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  useEffect(() => {
    if (!isModalOpen || csrfToken) {
      return;
    }

    const loadCsrfToken = async () => {
      try {
        const response = await fetch("/api/auth/csrf", { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as { csrfToken?: string };
        setCsrfToken(data.csrfToken ?? "");
      } catch {
        setCsrfToken("");
      }
    };

    void loadCsrfToken();
  }, [csrfToken, isModalOpen]);

  const handleGoogleSignIn = () => {
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
      <>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsModalOpen(true)}
          className="hidden sm:inline-flex items-center text-xs font-black text-[var(--background)] bg-[var(--foreground)] px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
        >
          Giriş Yap
        </motion.button>

        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-1/2 top-1/2 z-[160] w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-6 shadow-2xl"
              >
                <h3 className="text-xl font-black text-[var(--foreground)] font-montserrat tracking-tight">
                  Aşina Club&apos;a Hoş Geldiniz
                </h3>

                <button
                  onClick={handleGoogleSignIn}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background)] px-4 py-3 text-sm font-bold text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
                >
                  <GoogleIcon />
                  Google ile Devam Et
                </button>

                <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400">
                  <span className="h-px flex-1 bg-[var(--border-color)]" />
                  veya e-posta ile giriş yap
                  <span className="h-px flex-1 bg-[var(--border-color)]" />
                </div>

                <form method="post" action="/api/auth/callback/credentials" className="space-y-3">
                  <input type="hidden" name="csrfToken" value={csrfToken} />
                  <input type="hidden" name="callbackUrl" value="/" />

                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="E-posta"
                    className="w-full rounded-2xl border border-[var(--accent)]/40 bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-gray-500 focus:border-[var(--accent)]"
                  />

                  <input
                    type="password"
                    name="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Şifre"
                    className="w-full rounded-2xl border border-[var(--accent)]/40 bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-gray-500 focus:border-[var(--accent)]"
                  />

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
                  >
                    Giriş Yap
                  </button>
                </form>

                <a href="#" className="mt-4 inline-block text-xs font-semibold text-[var(--accent)] hover:underline">
                  Şifremi Unuttum
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
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

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.805 10.023h-9.63v3.955h5.528c-.476 2.474-2.54 3.955-5.528 3.955a6.13 6.13 0 1 1 0-12.259c1.698 0 3.151.613 4.33 1.618l2.988-2.988C17.678 2.74 15.146 1.74 12.175 1.74a10.26 10.26 0 1 0 0 20.52c5.926 0 9.837-4.163 9.837-10.036 0-.674-.075-1.315-.207-1.94Z"
        fill="#fff"
      />
    </svg>
  );
}
