export const getItem = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : value;
}

export const setItem = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));

export const deleteItem = (key: string) => localStorage.removeItem(key);