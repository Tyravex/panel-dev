import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/sidebar";
import { Navbar } from "@/widgets/navbar";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-white">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
};