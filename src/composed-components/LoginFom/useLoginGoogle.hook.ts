import { useMutation } from 'react-query';
import { useAuth } from '@providers/auth.provider';
import { useService } from '@services/services';

export const useLoginGoogle = (onSuccessCallback: () => void) => {
  const { authService } = useService();
  const { setIsLoggedIn } = useAuth();

  const { mutate: mutateGoogle } = useMutation(
    'registerUserByGoogle',
    authService.googleAuth,
    {
      onSuccess: () => {
        setIsLoggedIn(true);
        onSuccessCallback();
      },
    }
  );

  return { mutateGoogle };
};
