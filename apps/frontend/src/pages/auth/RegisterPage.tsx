import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/shared/api/client";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e: any) => {
        e.preventDefault();

        await api("/auth/register", {
            method: "POST",
            body: JSON.stringify({
                email,
                username,
                password,
            }),
        });

        navigate("/login");
    };
    return (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-xl">

            <h2 className="text-xl mb-4">Register</h2>

            <form
                onSubmit={submit}
                className="space-y-4"
            >

                <input className="w-full rounded-lg bg-white/10 p-3 outline-none"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input className="w-full rounded-lg bg-white/10 p-3 outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="password"
                    className="w-full rounded-lg bg-white/10 p-3 outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="w-full rounded-lg bg-white text-black p-3 font-semibold">
                    Register
                </button>
            </form>

        </div>
    );
};