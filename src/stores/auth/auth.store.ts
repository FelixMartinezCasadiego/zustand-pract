import { StateCreator } from "zustand";
import type { AuthStatus, User } from "../../interfaces";
import { AuthService } from "../../services/auth.service";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
  status: "unauthrized",
  token: undefined,
  user: undefined,

  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);

      set({ status: "authorized", token, user });
    } catch (error) {
      set({ status: "unauthrized", token: undefined, user: undefined });
    }
  },
});