import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { UserDTO } from "@shared/types";

type AuthContextType = {
  user: UserDTO | null;
  login: (data: any) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
    }
  }, []);

  const login = (data: any) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};