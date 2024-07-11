import { StateCreator } from "zustand";

export interface ConfirmationSlice {
  isConfirmed: boolean;

  setIsConfirmed: (state: boolean) => void;
}

export const createConfirmationSlice: StateCreator<ConfirmationSlice> = (
  set
) => ({
  isConfirmed: false,

  setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
});
