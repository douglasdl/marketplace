import { createContext, useState, ReactNode, useEffect } from "react"

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   async function checkAuthStatus() {
  //     const token = await AsyncStorage.getItem("userToken");
  //     setIsAuthenticated(!!token);
  //   }
  //   checkAuthStatus();
  // }, []);

  async function login() {
    // await AsyncStorage.setItem("userToken", "example_token");
    setIsAuthenticated(true);
  }

  async function logout() {
    // await AsyncStorage.removeItem("userToken");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}