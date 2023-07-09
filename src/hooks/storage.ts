import Cookies from 'js-cookie';
export const setItem = (key: string, value: string) => Cookies.set(key, value, { expires: 7 });
export const getItem = (key: string) => Cookies.get(key);
export const removeItem = (key: string) => Cookies.remove(key);
