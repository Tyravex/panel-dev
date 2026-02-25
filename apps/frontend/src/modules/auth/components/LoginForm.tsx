import { useState } from "react";
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
      <form onSubmit={submit} className="text-2xl font-semibold mb-6">
        <div className="space-y-4">
          <input
            placeholder="Username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className="w-full rounded-lg bg-white/10 p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-white/10 p-3 outline-none"
          />

          <button className="w-full rounded-lg bg-white text-black p-3 font-semibold">
            Login
          </button>
        </div>

      </form>
    </AuthCard>
  );
};