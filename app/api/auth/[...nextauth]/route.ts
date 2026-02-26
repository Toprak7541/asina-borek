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

    const handler = nextAuthPkg.default({
      providers: [
        googlePkg.default({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
      ],
      session: {
        strategy: "jwt",
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
