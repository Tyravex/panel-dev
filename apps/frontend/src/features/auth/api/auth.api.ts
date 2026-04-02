import { api } from '@/app/api/axios';

// Sends login request
// Backend will set httpOnly cookie (access_token)
export const loginApi = (data: {
    usernameOrEmail: string;
    password: string;
}) =>
    api.post('/auth/login', data, {
        withCredentials: true,
    });

// Fetch currently authenticated user
// Uses cookie automatically (no token needed)
export const meApi = () =>
    api.get('/auth/me', {
        withCredentials: true,
    });