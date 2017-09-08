import { StorageService } from './storage.service';

export class BrowserStorage extends StorageService {
    getItem(key: string): any {
        return localStorage.getItem(key);
    }
    setItem(key: string, val: any): void {
        localStorage.setItem(key, val);
    }
    removeItem(key: string): void {
        localStorage.removeItem('currentUser');
    }
}
