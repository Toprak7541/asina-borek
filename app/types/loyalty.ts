export interface LoyaltyProfile {
  points: number;
  visitCount: number;
  tier: "bronze" | "silver" | "gold" | "platinum";
  lastVisitAt?: string;
}

export interface LoyaltyUserModel {
  id: string;
  name: string;
  email: string;
  image?: string;
  loyalty: LoyaltyProfile;
}
