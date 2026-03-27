import { useState } from "react";

export const Navbar = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <>
      <header className="h-16 border-b border-white/5 flex justify-end items-center px-6">

        <div className="flex items-center gap-4">

          {/* Notifications */}
          <button onClick={() => setOpenNotif(true)}>
            🔔
          </button>

          {/* User */}
          <div className="relative">
            <button onClick={() => setOpenUser(!openUser)}>
              👤
            </button>

            {openUser && (
              <div className="absolute right-0 mt-2 w-48 bg-[#111827] border border-white/10 rounded shadow">

                <div className="p-2 hover:bg-white/5 cursor-pointer">
                  Profile
                </div>

                <div className="p-2 hover:bg-white/5 cursor-pointer">
                  Settings
                </div>

                <div className="p-2 hover:bg-white/5 cursor-pointer">
                  Language
                </div>

                <div className="p-2 text-red-400 hover:bg-white/5 cursor-pointer">
                  Logout
                </div>

              </div>
            )}
          </div>

        </div>
      </header>

      {/* Notifications drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] transition ${
          openNotif ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between border-b border-white/10">
          <h2>Notifications</h2>
          <button onClick={() => setOpenNotif(false)}>✕</button>
        </div>

        <div className="p-4 text-sm space-y-2">
          <div>✅ Server created</div>
          <div>⚠️ Server stopped</div>
          <div>💾 Backup completed</div>
        </div>
      </div>
    </>
  );
};