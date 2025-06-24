import { create } from 'zustand';

interface AuthState {    // to store  email credentials
  email: string;
  password: string;
  setAuth: (email: string, password: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  setAuth: (email, password) => set({ email, password }),
  clearAuth: () => set({ email: '', password: '' }),
}));