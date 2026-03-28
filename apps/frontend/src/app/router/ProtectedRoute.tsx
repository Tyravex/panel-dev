import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth.store";

export const ProtectedRoute = ({ children }: any) => {
  const token = useAuthStore((s) => s.accessToken);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};