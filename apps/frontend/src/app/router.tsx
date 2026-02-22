import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "@/modules/auth/pages/LoginPage";
import {RegisterPage} from "@/modules/auth/pages/RegisterPage";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import { AuthLayout } from "@/modules/auth/layouts/AuthLayout";
import { MainLayout } from "@/shared/layout/MainLayout";
import { features } from "@/config/features";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            {features.registerEnabled && <Route path="/register" element={<RegisterPage />} />}
          </Route>
      </Routes>
    </BrowserRouter>
  );
};
