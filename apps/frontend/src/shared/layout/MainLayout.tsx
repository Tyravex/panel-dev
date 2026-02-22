import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div style={{ padding: 24 }}>
      <Outlet />
    </div>
  );
};