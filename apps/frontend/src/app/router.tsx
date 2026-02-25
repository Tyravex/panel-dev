import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/modules/auth/pages/LoginPage";
import { RegisterPage } from "@/modules/auth/pages/RegisterPage";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";

import { AuthLayout } from "@/modules/auth/layouts/AuthLayout";
import { DashboardLayout } from "@/shared/layout/DashboardLayout";

//import { features } from "@/config/features";

export const AppRouter = () => {
  const enableRegister = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          {enableRegister && <Route path="/register" element={<RegisterPage />} />}
        </Route>

        {/* APP */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
