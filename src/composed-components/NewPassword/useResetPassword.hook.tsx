import { useMutation } from 'react-query';
import { useService } from '@services/services';
import { TResetPassword } from '@composed-components/types';

export const useResetPassword = (cb: () => void) => {
  const { userService } = useService();

  const { data, isLoading, isError, mutate, error } = useMutation(
    'resetPassword',
    ({ token, password }: TResetPassword) =>
      userService.resetPassword(token, password),
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
