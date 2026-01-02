import axios from 'axios';
import type { LoginCredentials, LoginResponse, User } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  getCurrentUser: async (): Promise<{ user: User }> => {
    const response = await api.get<{ user: User }>('/auth/me');
    return response.data;
  },
};

export default api;

