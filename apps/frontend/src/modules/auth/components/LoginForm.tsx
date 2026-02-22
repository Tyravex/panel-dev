import { useState } from "react";
import { loginApi } from "../api/auth.api";
import { useAuth } from "../store/auth.store";
import { AuthCard } from "./AuthCard";

export const LoginForm = () => {
  const { login } = useAuth();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const submit = async (e:any)=>{
    e.preventDefault();
    const data = await loginApi({email,password});
    login(data);
  };

  return (
    <AuthCard title="Login">
      <form onSubmit={submit} className="space-y-4">

        <input
          className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded bg-background border border-gray-700"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button className="w-full bg-primary hover:opacity-90 p-3 rounded font-semibold">
          Login
        </button>
      </form>
    </AuthCard>
  );
};