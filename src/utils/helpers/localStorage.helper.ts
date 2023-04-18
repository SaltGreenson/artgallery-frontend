export const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const setToStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.removeItem(key);
  }
};
