import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { waitFor } from '@testing-library/react';
import { createServices } from './index';

const mock = new MockAdapter(axios);
const { authService } = createServices();

describe('Auth service tests', () => {
  const tokens = {
    refreshToken: 'fidsjhfsdjf.fjdsofi.fishf238hefn',
    accessToken: 'kfjkdnvjdf.erohgiregh4324.frlkv324fkjnf',
  };
  const mockSetTokens = jest.spyOn(authService, 'setTokens');

  afterEach(() => {
    mock.reset();
  });

  test('1 should set tokens in localStorage and call with needed url and params', async () => {
    const GOOGLE_TOKEN = 'dfkjdsfksdnfdsf';

    mock.onGet(`/auth/google/verification?token=${GOOGLE_TOKEN}`).reply(200, tokens);
    await authService.googleAuth(GOOGLE_TOKEN);

    await waitFor(() => {
      expect(mock.history.get.length).toBe(1);
      expect(mock.history.get[0].url).toBe(`/auth/google/verification?token=${GOOGLE_TOKEN}`);
      expect(mockSetTokens).toHaveBeenCalledWith(tokens);
    });
  });
});
