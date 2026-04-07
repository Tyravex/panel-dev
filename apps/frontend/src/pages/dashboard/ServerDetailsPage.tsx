import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/app/api/axios";

export const ServerDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: server, isLoading } = useQuery(["server", id], async () => {
    const res = await api.get(`/servers/${id}`);
    return res.data;
  });

  if (isLoading) return <div>Loading server...</div>;
  if (!server) return <div>Server not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{server.name}</h1>
      <p>Status: {server.status}</p>
      <p>Players: {server.players}</p>
      <p>CPU: {server.cpu}%</p>
      <p>RAM: {server.ram}MB</p>
    </div>
  );
};