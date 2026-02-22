import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* LEFT branding */}
      <div className="hidden md:flex flex-col justify-center p-12 bg-surface">
        <h1 className="text-4xl font-bold">
          Tyravex Panel
        </h1>

        <p className="mt-4 text-gray-400">
          Modern infrastructure management platform
        </p>
      </div>

      {/* RIGHT form */}
      <div className="flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
};