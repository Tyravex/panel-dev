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

        <input className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <input className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input type="password"
          className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button className="w-full bg-secondary text-black p-3 rounded font-semibold">
          Register
        </button>
      </form>
    </AuthCard>
  );
};