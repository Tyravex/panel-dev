import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/app/store/auth.store";
import { meApi } from "@/features/auth/api/auth.api";

// Protects routes that require authentication
export const ProtectedRoute = ({ children }: any) => {
  const { user, setUser, isLoading } = useAuthStore();

  useEffect(() => {
    // Check if user is authenticated via backend
    const checkAuth = async () => {
      try {
        const res = await meApi();
        // If request succeeds → user is logged in
        setUser(res.data);
      } catch {
        // If request fails → user is not authenticated
        setUser(null);
      }
    };

    // Only check if we don't already have user
    if (!user) {
      checkAuth();
    }
  }, []);

  // Prevent rendering before auth check completes
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  // Redirect if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};