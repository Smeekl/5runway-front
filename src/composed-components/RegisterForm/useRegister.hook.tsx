import { useMutation } from 'react-query';
import { useService } from '@services/services';

export const useRegister = (cb: () => void) => {
  const { userService } = useService();

  const { data, isLoading, isError, mutate, error } = useMutation(
    'registerUser',
    (email, password) => userService.registerUser(email, password),
    {
      onSuccess: () => {
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
