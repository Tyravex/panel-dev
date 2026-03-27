import { useAuthStore } from "@/app/store/auth.store";
import { loginApi } from "../api/auth.api";

export const useAuth = () => {
  const { login } = useAuthStore();

  const handleLogin = async (data: any) => {
    const res = await loginApi(data);

    login({
      user: res.user,
      token: res.accessToken,
    });
  };

  return {
    login: handleLogin,
  };
};