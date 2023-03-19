import { CreateApiClient } from './apiClient';
import { StorageService } from './storage-services/storage.services';
import { UserService } from './user.service';
import { SearchService } from './search.service';
import { AuthService } from './auth.service';

export function createServices() {
  const storageService = new StorageService(window.localStorage);
  const api = CreateApiClient(process.env.REACT_APP_BASEURL, storageService);
  const searchService = new SearchService(api, storageService);
  const userService = new UserService(api, storageService);
  const authService = new AuthService(api, storageService);

  return {
    storageService,
    searchService,
    userService,
    authService,
  };
}
