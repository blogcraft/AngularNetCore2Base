import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private storageService: StorageService) { }

    canActivate() {
        if (isPlatformBrowser) {
            if (this.storageService.getItem('currentUser')) {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
