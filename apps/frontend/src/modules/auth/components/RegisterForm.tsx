import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { registerApi } from "../api/auth.api";
import { AuthCard } from "./AuthCard";

export const RegisterForm = () => {
  const { login } = useAuth();
  const nav = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();

    const data = await registerApi({
      username,
      email,
      password,
    });

    login(data);
    nav('/');
  };

  return (
    <AuthCard title="Create account">
      <form onSubmit={submit} className="space-y-4">

        <input className="w-full rounded-lg bg-white/10 p-3 outline-none"
          placeholder="Username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <input className="w-full rounded-lg bg-white/10 p-3 outline-none"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input type="password"
          className="w-full rounded-lg bg-white/10 p-3 outline-none"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button className="w-full rounded-lg bg-white text-black p-3 font-semibold">
          Register
        </button>
      </form>
    </AuthCard>
  );
};