import { TAppStore } from "@/app/types";
import { TProfile } from "@/types";
import { create } from "zustand";

const initialState = {
  userId: null,
  profile: null,
};

export const useAppStore = create<TAppStore>((set) => ({
  ...initialState,
  setUserId: (userId: string) => set(() => ({ userId })),
  setProfile: (profile: TProfile) => set(() => ({ profile })),
  reset: () => set(initialState),
}));
