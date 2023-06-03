import { useState } from 'react';
import * as SecureStore from 'expo-secure-store';

/**
 * useLocalStorage hook pro práci s Local Storage v prohlížeči
 * source: https://usehooks.com/useLocalStorage/
 * */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      SecureStore.getItemAsync(key).then((value) => {
        if(value) {
            let parsedValue: T = JSON.parse(value);
            return parsedValue ? parsedValue : initialValue;
        }
        else {
            return initialValue;
        }
      })
      // Parse stored json or if none return initialValue
      
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
    return initialValue;
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      SecureStore.setItemAsync(key, JSON.stringify(valueToStore)).then();
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
