import { useState } from "react";

export function useLocalStorage<T>(name: string) {
  const storedValue = localStorage.getItem(name);
  const initialValue = storedValue ? JSON.parse(storedValue) : null;

  const [value, setValue] = useState<T | null>(initialValue);

  const addValue = (data: T) => {
    localStorage.setItem(name, JSON.stringify(data));
    setValue(data);
  };

  const removeValue = () => {
    localStorage.removeItem(name);
    setValue(null);
  };

  return { value, addValue, removeValue };
}
