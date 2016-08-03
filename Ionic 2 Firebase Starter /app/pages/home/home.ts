import {FirebaseService} from '../../lib/firebaseService'
import {
    OnInit,
    OnDestroy
} from 'angular2/core';

import {Component} from '@angular/core';

@Component ({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit, OnDestroy {
    auth: any = {};
    items = [];
    activeUser: String

    constructor(public FBService: FirebaseService) {
        console.log("in constructor");

    }
    
    doLogout() {
        this.FBService.logout()
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    ngOnInit() {
        console.log('ngOnInit');

        this.FBService.login("c@mail.com")
            .subscribe((data: any) => {

                console.log("the data", data.password.email)
                this.activeUser = data.password.email

                this.FBService.getDataObs(data.uid)
                    .subscribe((data: Array<any>) => {
                        console.log(data)
                        this.items = data
                    })
            });
    }
}
