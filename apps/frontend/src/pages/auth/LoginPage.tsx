import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, meApi } from "@/features/auth/api/auth.api";

export const LoginPage = () => {

    const navigate = useNavigate();

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: any) => {
        e.preventDefault();
        
        try {
            // Send login request → backend sets cookie
            await loginApi({
                usernameOrEmail,
                password,
            });
            // 🔥 IMPORTANT:
            // We call /auth/me to confirm cookie works
            // and backend recognizes user
            await meApi();
            
            // Only after successful auth → navigate
            navigate('/dashboard');

        } catch (err: any) {
            console.error(err);

            if (err.response?.status === 401) {
                console.log('Invalid credentials');
            } else {
                console.log('Login failed');
            }
        }


    }

    return (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-xl">

            <h2 className="text-xl mb-4">Login</h2>

            <form
                onSubmit={submit}
                className="text-2xl font-semibold mb-6"
            >

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

        </div>
    );
};