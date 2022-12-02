import React from 'react';
import { fakeAuthProvider } from '../authProvider';

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(() =>
    JSON.parse(localStorage.getItem('user')),
  );

  const signin = async (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      callback();
    });
  };

  const signout = async callback => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      localStorage.clear();
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
