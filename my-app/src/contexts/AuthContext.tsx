import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  auth: { token: string } | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<{ token: string } | null>(() => {
    const token = localStorage.getItem("token");
    return token ? { token } : null;
  });

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setAuth({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
