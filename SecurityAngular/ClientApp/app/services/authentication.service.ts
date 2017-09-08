import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthenticationService {
    public token: string;
    public loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: Http, private storageService: StorageService) {
        var currentUser = JSON.parse(storageService.getItem('currentUser') || '{}');
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('http://localhost:62723/api/account/GenerateToken', { email: username, password: password })
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;

                    this.storageService.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    this.loggedIn.next(true);
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = '';// no se puede nulls
        this.storageService.removeItem('currentUser');
        this.loggedIn.next(false);
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
}