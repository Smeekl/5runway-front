import { useContext, createContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useService } from '@services/services';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { storageService, userService } = useService();
  const initialState = Boolean(
    storageService.get('accessToken') && storageService.get('refreshToken')
  );
  const [isLoggedIn, setIsLoggedIn] = useState(initialState);
  const queryClient = useQueryClient();

  const logout = () => {
    userService.logoutUser();
    queryClient.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ setIsLoggedIn, isLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
