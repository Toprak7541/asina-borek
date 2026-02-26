import type { LoyaltyProfile } from "./loyalty";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      loyalty: LoyaltyProfile;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    loyalty?: LoyaltyProfile;
  }
}
