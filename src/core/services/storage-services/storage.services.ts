interface IStorageService {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
  clear(): void;
  getAll(): Storage;
}

export class StorageService implements IStorageService {
  dataStorage: Storage;

  constructor(dataStorage: Storage) {
    this.dataStorage = dataStorage;
  }

  get(key: string) {
    return this.dataStorage.getItem(key);
  }

  set(key: string, value: string) {
    this.dataStorage.setItem(key, value);
  }

  remove(key: string) {
    this.dataStorage.removeItem(key);
  }

  clear() {
    this.dataStorage.clear();
  }

  getAll() {
    return this.dataStorage;
  }
}
