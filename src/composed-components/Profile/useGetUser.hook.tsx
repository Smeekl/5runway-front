import { useQuery } from 'react-query';
import { useService } from '@services/services';

export const useGetUser = () => {
  const { userService } = useService();

  const {
    data: userData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery('userData', () => userService.getUser());

  return {
    user: userData?.data,
    error,
    isLoading,
    isError,
    refetch,
  };
};
