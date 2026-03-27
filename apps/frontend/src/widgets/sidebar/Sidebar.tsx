import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0d1321] border-r border-white/5 p-4">

      <h1 className="text-xl font-bold mb-6">Tyravex</h1>

      <nav className="space-y-2 text-sm">

        <Link to="/dashboard" className="block p-2 hover:bg-white/5 rounded">
          Dashboard
        </Link>

        <Link to="/servers" className="block p-2 hover:bg-white/5 rounded">
          Servers
        </Link>

        <Link to="/users" className="block p-2 hover:bg-white/5 rounded">
          Users
        </Link>

        <Link to="/settings" className="block p-2 hover:bg-white/5 rounded">
          Settings
        </Link>

      </nav>

    </aside>
  );
};