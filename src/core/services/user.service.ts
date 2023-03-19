import { TUser } from '@composed-components/types';
import { AbstractApiClient } from './abstract.services';
import { ENDPOINTS } from '@constants';

export class UserService extends AbstractApiClient {
  registerUser({ email, password }) {
    return this.api.post('/auth/registration', { email, password });
  }

  async loginUser(email: string, password: string) {
    const { data } = await this.api.post('/auth/login', { email, password });

    this.setTokens(data);

    const user = await this.api.get('/user/profile');

    this.storageService.set('user', JSON.stringify(user.data));
  }

  getUser() {
    return this.api.get<TUser>('/user/profile');
  }

  logoutUser() {
    this.storageService.clear();
  }

  restorePassword(email: string) {
    return this.api.post(ENDPOINTS.RESTORE_PASSWORD, { email });
  }

  resetPassword(token: string, password: string) {
    return this.api.post(ENDPOINTS.RESET_PASSWORD, { token, password });
  }
}
