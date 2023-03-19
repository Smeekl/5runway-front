import { act, renderHook, waitFor } from '@testing-library/react';
import { wrapper } from '@mocks/ReactQueryWrapper.mock';
import { useLoginGoogle } from './useLoginGoogle.hook';

const mockGoogleAuth = jest.fn();
const mockSetIsLoggedIn = jest.fn();

jest.mock('@services/services', () => ({
  useService: () => ({
    authService: {
      googleAuth: mockGoogleAuth
    }
  })
}));

jest.mock('@providers/auth.provider', () => ({
  useAuth: () => ({
    setIsLoggedIn: mockSetIsLoggedIn
  })
}));

describe('Tests for useLoginGoogle hook', () => {
  const GOOGLE_TOKEN = 'bvfdnbvdfnv';
  const mockOnSuccessCallback = jest.fn();
  const { result } = renderHook(() => useLoginGoogle(mockOnSuccessCallback), {
    wrapper,
  });

  test('1 should be called mockGoogleAuth when mutateGoogle is called', async () => {
    act(() => {
      result.current.mutateGoogle(GOOGLE_TOKEN);
    });

    await waitFor(() => {
      expect(mockGoogleAuth).toHaveBeenCalledTimes(1);
      expect(mockGoogleAuth).toHaveBeenCalledWith(GOOGLE_TOKEN);
    })
  });

  test('2 should be called mockOnSuccessCallback and mockSetIsLoggedIn with expected params after mutateGoogle success calling', async () => {
    act(() => {
       result.current.mutateGoogle(GOOGLE_TOKEN);
    });

    await waitFor(() => {
      expect(mockOnSuccessCallback).toHaveBeenCalledTimes(1);
      expect(mockSetIsLoggedIn).toHaveBeenCalledTimes(1);
      expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    });
  })
});
