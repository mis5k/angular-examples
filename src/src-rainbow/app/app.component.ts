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
    defacultCode:String;

    constructor(
        private logger:LoggerService, 
        private router:Router
    ) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
        this.defacultCode ="color";
    } 

    onChange(name:string, event:any) {
        this.router.navigate(['', { outlets: { [name]: [event.target.value] } }]);
    }
}