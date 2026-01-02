import { createContext, useContext, useState, ReactNode } from 'react';
import type { User, LoginCredentials } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Static credentials for frontend-only authentication
const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'admin123';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check credentials with simple if-condition
    if (credentials.username === VALID_USERNAME && credentials.password === VALID_PASSWORD) {
      const userData: User = {
        id: 1,
        username: credentials.username,
        name: 'Admin User',
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', 'frontend-token-' + Date.now());
      setIsLoading(false);
    } else {
      setIsLoading(false);
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

