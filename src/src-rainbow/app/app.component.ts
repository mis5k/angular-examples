import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Router } from '@angular/router';
import { Colour, AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
    colors:Colour[];
    defacultCode:String;
    
    constructor(
        private logger:LoggerService, 
        private router:Router,
        private service:AppService
    ) {}

    getColors(): void {
        this.service.getColors().then(colors => this.colors = colors);
    }

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
        this.getColors();
        this.defacultCode = 'color'; 
    } 
}