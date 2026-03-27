export const ServerDetailsPage = () => {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold">Minecraft Server</h1>
        <p className="text-green-400">● Online</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#141b2d] p-4 rounded">CPU: 30%</div>
        <div className="bg-[#141b2d] p-4 rounded">RAM: 2GB</div>
        <div className="bg-[#141b2d] p-4 rounded">Uptime: 5h</div>
      </div>

      {/* Console */}
      <div className="bg-black p-4 rounded-xl h-64 overflow-auto text-sm font-mono">
        <div>[Server] Starting...</div>
        <div>[Server] Running</div>
      </div>

    </div>
  );
};