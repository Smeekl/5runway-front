import { AuthService } from '@services/auth.service';
import { SearchService } from '@services/search.service';
import { StorageService } from '@services/storage-services/storage.services';
import { UserService } from '@services/user.service';

export interface IServices {
  storageService: StorageService;
  userService: UserService;
  searchService: SearchService;
  authService: AuthService;
}

export type TTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TFilterOptions = {
  model: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  minMileage: number;
  maxMileage: number;
};
