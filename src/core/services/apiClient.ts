import Axios, { AxiosInstance } from 'axios';
import { StorageService } from './storage-services/storage.services';

export function CreateApiClient(
  baseURL: string,
  storageService: StorageService
): AxiosInstance {
  const api = Axios.create({ baseURL });

  let retry = false;

  api.interceptors.request.use(
    (config) => {
      if (!config.headers) {
        config.headers = {};
      }

      config.headers.Authorization = `Bearer ${storageService.get(
        'accessToken'
      )}`;

      return config;
    },
    (error) => Promise.reject(error)
  );
  api.interceptors.response.use(
    (res) => res,
    async (err) => {
      if (err.response.status === 401 && !retry) {
        retry = true;

        const refreshToken = storageService.get('refreshToken');

        if (!refreshToken) {
          return;
        }

        try {
          const { data } = await api.post('/auth/refresh', { refreshToken });

          storageService.set('accessToken', data.accessToken);
          storageService.set('refreshToken', data.refreshToken);
        } catch (error) {
          throw new Error('Token expired');
        }
        return;
      }

      retry = false;

      return Promise.reject(err);
    }
  );

  return api;
}
