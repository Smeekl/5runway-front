import { useMutation } from 'react-query';
import { useService } from '@services/services';
import { useAuth } from '../../providers/auth.provider';
import { useGetUser } from '@composed-components/ProfileSidebar/useGetUser.hook';

export const useLogin = (cb: () => void) => {
  const { userService } = useService();
  const { setIsLoggedIn } = useAuth();
  const { refetch } = useGetUser();

  const { data, isLoading, isError, mutate, error } = useMutation(
    'user',
    (email, password) => userService.loginUser(email, password),
    {
      onSuccess: () => {
        refetch();
        setIsLoggedIn(true);
        cb();
      },
    }
  );

  return {
    data,
    error,
    isLoading,
    isError,
    mutate,
  };
};
