import { AxiosInstance } from 'axios';
import { StorageService } from './storage-services/storage.services';
import { TTokens } from './types';

export class AbstractApiClient {
  api: AxiosInstance;
  storageService: StorageService;

  constructor(api: AxiosInstance, storageService: StorageService) {
    this.api = api;
    this.storageService = storageService;
  }

  setTokens({ accessToken, refreshToken }: TTokens) {
    this.storageService.set('accessToken', accessToken);
    this.storageService.set('refreshToken', refreshToken);
  }
}
