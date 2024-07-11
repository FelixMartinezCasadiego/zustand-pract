import { StateCreator } from "zustand";

export interface GuestSlice {
  guestCount: number;

  setGuestCount: (guestCount: number) => void;
}

export const createGuestCount: StateCreator<GuestSlice> = (set) => ({
  guestCount: 0,

  setGuestCount: (guestCount: number) => {
    if (guestCount >= 0) {
      set({ guestCount });
    }
  },
});
