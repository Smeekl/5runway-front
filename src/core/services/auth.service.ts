import { AbstractApiClient } from './abstract.services';
import { TTokens } from './types';

export class AuthService extends AbstractApiClient {
  googleAuth = async (google_token: string) => {
    const { data } = await this.api.get<TTokens>(`/auth/google/verification?token=${google_token}`);

    this.setTokens(data);
  }
}
