import { useMutation } from 'react-query';
import { useService } from '@services/services';

export const useRegisterGoogle = (cb: () => void) => {
  const { authService } = useService();

  const { mutate: mutateGoogle } = useMutation(
    'registerUserByGoogle',
    (access_token: string) => authService.googleAuth(access_token),
    {
      onSuccess: cb,
    }
  );

  return {
    mutateGoogle,
  };
};
