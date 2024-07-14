import { AxiosError } from "axios";
import { tesloAPi } from "../api/teslo.api";
import { create } from "zustand";
import { AuthState, storeApi } from "../stores/auth/auth.store";
import { devtools } from "zustand/middleware";

export interface LoginResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  static login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const { data } = await tesloAPi.post<LoginResponse>("/auth/login", {
        email,
        password,
      });

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response);
        throw new Error(error.response?.data);
      }

      throw new Error("Enable to login");
    }
  };

  static checkStatus = async (): Promise<LoginResponse> => {
    try {
      const { data } = await tesloAPi.get("/auth/check-status");
      return data;
    } catch (error) {
      throw new Error("Enable to login");
    }
  };
}

export const useAuthStore = create<AuthState>()(devtools(storeApi));
