import React, { createContext, useContext, useState, useCallback } from 'react';

interface AdminAuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  signup: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

const DEFAULT_ADMIN_USER = 'admin';
const DEFAULT_ADMIN_PASS = 'bdaybuzz2026';
const SESSION_KEY = 'bdaybuzz_admin_auth';
const ADMIN_USERS_KEY = 'bdaybuzz_admin_users';

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });

  const getAdminUsers = () => {
    try {
      const data = localStorage.getItem(ADMIN_USERS_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Ignored
    }
    // Seed with default admin if empty
    return {
      [DEFAULT_ADMIN_USER]: DEFAULT_ADMIN_PASS
    };
  };

  const signup = useCallback((username: string, password: string): boolean => {
    if (!username || !password) return false;
    
    const users = getAdminUsers();
    if (users[username]) {
      // User already exists
      return false;
    }

    // Register user
    users[username] = password;
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));

    // Auto log in after sign up
    sessionStorage.setItem(SESSION_KEY, 'true');
    setIsAuthenticated(true);
    return true;
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    if (!username || !password) return false;

    const users = getAdminUsers();
    
    // Check if user exists and password matches
    if (users[username] && users[username] === password) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = (): AdminAuthContextType => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
};
