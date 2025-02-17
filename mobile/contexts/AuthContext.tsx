import { UserDTO } from "@/dtos/UserDTO";
import { createContext, useState, ReactNode, useEffect } from "react"

interface AuthContextDataProps {
  user: UserDTO
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserDTO>({
    id: '1',
    name: 'Douglas Dias Leal',
    phone: '(55)99999-9999',
    email: 'douglas_san@hotmail.com',
    avatarId: null,
    password: '',
    passwordConfirmation: ''
  })
  
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
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}