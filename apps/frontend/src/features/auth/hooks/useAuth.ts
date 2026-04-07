import { loginApi } from "../api/auth.api";

export const useAuth = () => {

  const handleLogin = async (data: any) => {
    const res = await loginApi(data);
    const token = res.data.access_token || res.data.accessToken;
    login({ user: res.data.user, accessToken: token });
  };

  return { login: handleLogin };
};