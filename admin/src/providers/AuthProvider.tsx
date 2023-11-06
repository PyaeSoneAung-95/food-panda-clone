import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext<AuthContext | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { value: user, addValue, removeValue } = useLocalStorage<Employee>("user");

  const updateUser = (data: Employee | null) => {
    data ? addValue(data) : removeValue();
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>{children}</AuthContext.Provider>
  );
}
