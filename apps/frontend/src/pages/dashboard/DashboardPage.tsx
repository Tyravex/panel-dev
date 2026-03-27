import { ServerList } from "@/features/servers/components/ServerList";

export const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        Welcome back, user 👋
      </h1>

      <ServerList />
    </div>
  );
};