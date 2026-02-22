export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role?: string;
  permissions?: string[];
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: AuthUser;
}
