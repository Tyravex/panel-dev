import { env } from '@/config/env';
import { fetcher } from '@/shared/utils/fetcher';
import { LoginRequest, RegisterRequest } from '../types';

export const loginApi = (data: LoginRequest) =>
  fetcher(`${env.api}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const registerApi = (data: RegisterRequest) =>
  fetcher(`${env.api}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(data),
  });