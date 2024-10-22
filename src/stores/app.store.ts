import { TAppStore } from "@/app/types";
import { create } from "zustand";

const initialState = {
  userId: null,
};

export const useAppStore = create<TAppStore>((set) => ({
  ...initialState,
  setUserId: (userId: string) => set(() => ({ userId })),
  reset: () => set(initialState),
}));
