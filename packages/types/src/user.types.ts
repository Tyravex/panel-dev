export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
}