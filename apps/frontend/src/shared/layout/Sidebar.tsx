import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
      <h1 className="text-xl font-bold mb-6">Tyravex</h1>

      <nav className="flex flex-col gap-3 text-sm">
        <Link className="hover:text-yellow-400" to="/">Dashboard</Link>
        <Link className="hover:text-yellow-400" to="/servers">Servers</Link>
        <Link className="hover:text-yellow-400" to="/settings">Settings</Link>
      </nav>
    </aside>
  );
};
