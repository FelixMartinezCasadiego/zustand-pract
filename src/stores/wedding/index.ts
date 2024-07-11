import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createPersonSlice, PersonSlice } from "./person.slice";
import { createGuestCount, GuestSlice } from "./guest.slice";
import { createDateSlice, DateSlice } from "./date.slice";
import {
  ConfirmationSlice,
  createConfirmationSlice,
} from "./confirmation.slice";

type shareStateSlice = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<shareStateSlice>()(
  // persist(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestCount(...a),
    ...createDateSlice(...a),
    ...createConfirmationSlice(...a),
  }))
  // { name: "wedding-store" }
  // )
);
