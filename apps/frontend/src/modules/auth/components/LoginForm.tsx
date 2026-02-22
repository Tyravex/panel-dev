import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/auth.api";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { AuthCard } from "./AuthCard";

export const LoginForm = () => {
  const { login } = useAuth();
  const nav = useNavigate();

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();

    const data = await loginApi({
      usernameOrEmail,
      password,
    });

    login(data);
    nav('/');
  };

  return (
    <AuthCard title="Login">
      <form onSubmit={submit} className="space-y-4">

        <input
          className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Email or username"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary hover:opacity-90 p-3 rounded font-semibold">
          Login
        </button>
      </form>
    </AuthCard>
  );
};