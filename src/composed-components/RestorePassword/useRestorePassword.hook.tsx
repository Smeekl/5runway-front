import { useMutation } from 'react-query';
import { useService } from '@services/services';

export const useRestorePassword = (cb: () => void) => {
  const { userService } = useService();

  const { data, isLoading, isError, mutate, error } = useMutation(
    'restorePassword',
    (email: string) => userService.restorePassword(email),
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
