import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createPersonSlice, PersonSlice } from "./person.slice";
import { createGuestCount, GuestSlice } from "./guest.slice";
import { createDateSlice, DateSlice } from "./date.slice";

type shareStateSlice = PersonSlice & GuestSlice & DateSlice;

export const useWeddingBoundStore = create<shareStateSlice>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestCount(...a),
    ...createDateSlice(...a),
  }))
);
