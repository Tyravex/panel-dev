import { Routes, Route } from "react-router-dom";
// Layouts
import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
// Routes
import { ProtectedRoute } from "./ProtectedRoute";
// Pages
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { ServerDetailsPage } from "@/pages/servers/ServerDetailsPage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";

export const AppRoutes = () => {
  return (
    <Routes>
      
      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* APP */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/servers/:id" element={<ServerDetailsPage />} />
      </Route>

    </Routes>
  );
};