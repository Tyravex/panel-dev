import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      
      {/* LEFT */}
      <div className="hidden lg:flex flex-col justify-between p-12">
        <div>
          <h1 className="text-3xl font-bold">Tyravex</h1>
          <p className="text-white/60 mt-2">
            Manage servers. Simple. Fast.
          </p>
        </div>

        <div className="text-white/40 text-sm">
          Tyravex © {new Date().getFullYear()}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div >
  );
};