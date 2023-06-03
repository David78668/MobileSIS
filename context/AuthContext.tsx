/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect } from 'react';
import { useLocalStorage } from '../components/hooks/UseSecureStorage';
import { KEYS } from '../declarations/keys';


export type AuthUser = {
    id: number,
    name: string,
    surname: string,
    shortName: string,
    email: string,
    web: string,
    phone: string
    profileImageUrl: string
    groups: Array<Group>,
} | null;

export interface Group {
    id: number,
    name: string,
}

export interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface TokenData {
  user: AuthUser;
  iat: number;
  exp: number;
}

// výchozí hodnoty kontextu
const defaultValues: AuthContextType = {
  user: null,
  token: null,
  isAuthenticated: false,
  login: (token: string) => { },
  logout: () => { },
};

// vytvoření kontextu pro udržení globálního stavu aplikace (pro držení informace o přihlášení)
const AuthContext = createContext<AuthContextType>(defaultValues);

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useLocalStorage<AuthUser>(KEYS.USER, null);
  const [token, setToken] = useLocalStorage<string>(KEYS.TOKEN, '');
  const [isAuthenticated, setAuthenticated] = useLocalStorage<boolean>(
    KEYS.AUTHENTICATED,
    false,
  );

  // revalidace tokenu po otevření aplikace + odhlášení pokud bude token nevalidní
  const revalidateToken = async () => {
    
  };

  const parseUserData = (token: string) => {
    
  };

  useEffect(() => {
    revalidateToken();
  }, []);

  // přihlášení uživatele do aplikace
  const login = useCallback((token: string) => {
    setToken(token);
    parseUserData(token);
    setAuthenticated(true);
  }, []);

  // odhlášení uživatele z aplikace
  const logout = () => {
    setToken('');
    // setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook pro přístup k Auth kontextu */
export const useAuth = () => {
  return useContext(AuthContext);
};
