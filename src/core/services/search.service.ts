import { AxiosInstance } from 'axios';
import { AbstractApiClient } from './abstract.services';
import { StorageService } from './storage-services/storage.services';

export class SearchService extends AbstractApiClient {
  dataStorage: StorageService;

  constructor(api: AxiosInstance, dataStorage: StorageService) {
    super(api);
    this.dataStorage = dataStorage;
  }

  searchItem = async (value: string) => {
    this.dataStorage.set(
      'searchedItem',
      JSON.stringify([value, ...this.getSearchedItems()].slice(0, 10))
    );

    try {
      const res = await this.api.get(value);

      return res.data;
    } catch (error) {}
  };

  getSearchedItems = () =>
    JSON.parse(this.dataStorage.get('searchedItem') || '[]');

  clearSearchedItems = () => this.dataStorage.clear();
}
