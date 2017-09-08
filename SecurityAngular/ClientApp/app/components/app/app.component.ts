import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    isLoggedIn$: Observable<boolean>; 

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.isLoggedIn$ = this.authenticationService.isLoggedIn;
    }
}
