import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
    defaultCode:String;
    items: String[];


    constructor(
        private logger:LoggerService, 
        private router:Router
    ) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
        this.defaultCode ="color";
        this.items = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    } 

    onChange(name:string, event:any) {
        this.router.navigate(['', { outlets: { [name]: [event.target.value] } }]);
    }
}