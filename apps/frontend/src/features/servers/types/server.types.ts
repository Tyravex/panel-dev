export interface Server {
  id: string;
  name: string;
  status: "online" | "offline";
  cpu: number;
  ram: number;
}