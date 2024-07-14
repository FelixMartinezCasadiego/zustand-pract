import axios from "axios";
import { useAuthStore } from "../services/auth.service";

const tesloAPi = axios.create({
  baseURL: "http://localhost:3000/api",
});

tesloAPi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export { tesloAPi };
