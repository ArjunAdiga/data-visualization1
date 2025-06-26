import { create } from 'zustand';
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {    // to store  email credentials
  email: string;
  password: string;
  setAuth: (email: string, password: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(    // persisiting data
    (set) => ({
      email: "",
      password: "",
      setAuth: (email, password) => set({ email, password }),
      clearAuth: () => set({ email: "", password: "" }),
    }),
    {
      name: "auth-storage", 
      storage: createJSONStorage(() => localStorage)
    }
  )
);