import { TProfile } from "@/types/profile.type";

export type TAppStore = {
  userId: string | null;
  profile: TProfile | null;
  setUserId: (userId: string) => void;
  setProfile: (profile: TProfile) => void;
  reset: () => void;
};
