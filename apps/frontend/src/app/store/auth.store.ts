import { create } from "zustand";

// Global auth state (frontend only stores USER, not token)
interface AuthState {
  user: any | null; // current authenticated user
  isLoading: boolean; // used to prevent flicker during auth check

  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true, // initially true until we verify auth

  // Set user after successful /auth/me call
  setUser: (user) => set({ user, isLoading: false }),

  // Clears user (does NOT remove cookie, backend should handle that)
  logout: () => set({ user: null }),
}));