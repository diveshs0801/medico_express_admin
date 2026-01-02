export interface User {
  id: number;
  username: string;
  name: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

