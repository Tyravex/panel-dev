import { Server } from "../types/server.types";
import { Link } from "react-router-dom";

export const ServerItem = ({ server }: { server: Server }) => {
  return (
    <Link
      to={`/servers/${server.id}`}
      className="bg-[#141b2d] p-4 rounded-xl hover:bg-[#1b243b] transition"
    >
      <h3 className="font-semibold">{server.name}</h3>

      <div className="text-sm mt-2">
        <span className={server.status === "online" ? "text-green-400" : "text-red-400"}>
          ● {server.status}
        </span>
      </div>

      <div className="text-xs text-white/60 mt-2">
        CPU: {server.cpu}% | RAM: {server.ram}GB
      </div>
    </Link>
  );
};