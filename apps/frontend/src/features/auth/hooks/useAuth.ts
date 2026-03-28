import { useAuthStore } from "@/app/store/auth.store";
import { loginApi } from "../api/auth.api";

export const useAuth = () => {
  const { login } = useAuthStore();

  const handleLogin = async (data: any) => {
    const res = await loginApi(data);

    console.log('FULL RESPONSE:', res);
    console.log('accessToken:', res.access_token);

    const token =
      res.access_token ||
      res.accessToken ||
      res?.data?.accessToken;

    login({
      user: res.user,
      accessToken: token,
    });
  };

  return {
    login: handleLogin,
  };
};