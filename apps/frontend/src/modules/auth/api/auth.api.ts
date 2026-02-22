import { env } from '@/config/env';

export const loginApi = async (data: {
  usernameOrEmail: string;
  password: string;
}) => {
  const res = await fetch(`${env.api}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const registerApi = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${env.api}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Register failed');
  return res.json();
};