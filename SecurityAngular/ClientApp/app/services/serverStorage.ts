import { StorageService } from './storage.service';

export class ServerStorage extends StorageService {
    getItem(key: string): any {
        return null;
    }
    setItem(key: string, val: any): void {
    }
    removeItem(key: string): void {
    }
}
