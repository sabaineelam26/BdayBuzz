import React, { createContext, useContext, useState, useCallback } from 'react';

interface UserAuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string, password?: string) => boolean;
  signup: (email: string, password?: string) => boolean;
  logout: () => void;
}

const UserAuthContext = createContext<UserAuthContextType | null>(null);

const SESSION_KEY = 'bdaybuzz_user_auth';
const EMAIL_KEY = 'bdaybuzz_user_email';
const USERS_KEY = 'bdaybuzz_registered_users';

export const UserAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });
  
  const [userEmail, setUserEmail] = useState<string | null>(() => {
    return sessionStorage.getItem(EMAIL_KEY);
  });

  const getRegisteredUsers = () => {
    try {
      const data = localStorage.getItem(USERS_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  };

  const signup = useCallback((email: string, password?: string): boolean => {
    if (!email || !email.includes('@')) return false;
    
    const users = getRegisteredUsers();
    if (users[email]) {
      // User already exists
      return false;
    }

    // Register user
    users[email] = password || 'default';
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Auto log in after sign up
    sessionStorage.setItem(SESSION_KEY, 'true');
    sessionStorage.setItem(EMAIL_KEY, email);
    setIsAuthenticated(true);
    setUserEmail(email);
    return true;
  }, []);

  const login = useCallback((email: string, password?: string): boolean => {
    if (!email || !email.includes('@')) return false;

    const users = getRegisteredUsers();
    
    // Check if user exists and password matches
    if (users[email] && users[email] === (password || 'default')) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      sessionStorage.setItem(EMAIL_KEY, email);
      setIsAuthenticated(true);
      setUserEmail(email);
      return true;
    }
    
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(EMAIL_KEY);
    setIsAuthenticated(false);
    setUserEmail(null);
  }, []);

  return (
    <UserAuthContext.Provider value={{ isAuthenticated, userEmail, login, signup, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = (): UserAuthContextType => {
  const ctx = useContext(UserAuthContext);
  if (!ctx) throw new Error('useUserAuth must be used within UserAuthProvider');
  return ctx;
};
