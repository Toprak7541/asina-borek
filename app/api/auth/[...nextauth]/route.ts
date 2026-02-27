import { NextResponse } from "next/server";
import type { LoyaltyProfile } from "@/app/types/loyalty";

const fallbackLoyalty: LoyaltyProfile = {
  points: 0,
  visitCount: 0,
  tier: "bronze",
};

const dynamicImport = new Function("modulePath", "return import(modulePath)") as (
  modulePath: string,
) => Promise<unknown>;

async function authHandler(req: Request) {
  try {
    const nextAuthPkg = (await dynamicImport("next-auth")) as { default: Function };
    const googlePkg = (await dynamicImport("next-auth/providers/google")) as { default: Function };
    const credentialsPkg = (await dynamicImport("next-auth/providers/credentials")) as {
      default: Function;
    };

    const handler = nextAuthPkg.default({
      providers: [
        googlePkg.default({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        credentialsPkg.default({
          name: "credentials",
          credentials: {
            email: { label: "E-posta", type: "email" },
            password: { label: "Şifre", type: "password" },
          },
          authorize(credentials: { email?: string; password?: string }) {
            const validEmail = process.env.AUTH_ADMIN_EMAIL ?? "admin@asinaborek.com";
            const validPassword = process.env.AUTH_ADMIN_PASSWORD ?? "123456";

            if (credentials.email === validEmail && credentials.password === validPassword) {
              return {
                id: "asina-admin",
                name: "Aşina Yönetim",
                email: validEmail,
              };
            }

            return null;
          },
        }),
      ],
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: "/",
      },
      callbacks: {
        async jwt({ token }: { token: { loyalty?: LoyaltyProfile } }) {
          token.loyalty = token.loyalty ?? fallbackLoyalty;
          return token;
        },
        async session({
          session,
          token,
        }: {
          session: { user?: Record<string, unknown> };
          token: { loyalty?: LoyaltyProfile };
        }) {
          session.user = {
            ...session.user,
            loyalty: token.loyalty ?? fallbackLoyalty,
          };
          return session;
        },
      },
    });

    return handler(req);
  } catch {
    return NextResponse.json(
      {
        error: "NextAuth kurulumu hazırlandı fakat paket henüz kurulu değil.",
      },
      { status: 503 },
    );
  }
}

export async function GET(req: Request) {
  return authHandler(req);
}

export async function POST(req: Request) {
  return authHandler(req);
}
