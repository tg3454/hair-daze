"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  signOut: () => void;
  sendResetLink: (email: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);

    if (!email || !_password) return false;

    const name = email.split("@")[0];
    const formatted =
      name.charAt(0).toUpperCase() + name.slice(1);
    setUser({ name: formatted, email });
    return true;
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, _password: string) => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 1500));
      setIsLoading(false);

      if (!name || !email || !_password) return false;

      setUser({ name, email });
      return true;
    },
    []
  );

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const sendResetLink = useCallback(async (email: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    return !!email;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        sendResetLink,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
