import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext<AuthContext>({
  user: null,
  addUser: () => {},
  removeUser: () => {},
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    value: user,
    addValue: addUser,
    removeValue: removeUser,
  } = useLocalStorage<Employee>("user");

  return (
    <AuthContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
}
