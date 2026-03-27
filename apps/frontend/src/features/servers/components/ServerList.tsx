import { ServerItem } from "./ServerItem";

const mockServers = [
  { id: "1", name: "Minecraft", status: "online", cpu: 30, ram: 2 },
  { id: "2", name: "CS2 Server", status: "offline", cpu: 0, ram: 0 },
];

export const ServerList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {mockServers.map((s) => (
        <ServerItem key={s.id} server={s} />
      ))}
    </div>
  );
};