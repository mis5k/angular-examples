import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/logger.service'
import { Routes, ActivatedRoute, ParamMap } from '@angular/router';


export class Item {
  constructor(public key: string, public color: string) { }
}

@Component({
    selector: 'app-root',
    template: `
    <h2>Palette</h2>
    <ul>
        <li><a [routerLink]="['./']" [queryParams]="rainbow">Rainbow</a></li>
        <li><a [routerLink]="['./']" [queryParams]="grayscale">Gray scale</a></li>
    </ul>
    <div class="palette">
        <input class="palette-item" *ngFor="let item of items" placeholder="color"/>
    </div>
    <div class="palette">
        <div class="palette-item" *ngFor="let item of items" [style.background]="item.color"></div>
    </div>
    `,
    styles: [
    `
        .palette {
            display: flex;
        }
        .palette-item {
            display: inline-block;
        }
        input.palette-item {
            padding: 0;
            border: 1px solid #ccc;
            width: 98px;
        }
        div.palette-item {
            width: 100px;
            height: 100px;
        }
    `
    ]
})
export class AppComponent implements OnInit {
    readonly rainbow = {
        p1: 'red',
        p2: 'orange',
        p3: 'yellow',
        p4: 'green',
        p5: 'blue',
        p6: 'navy',
        p7: 'purple'
    }

    readonly grayscale = {
        p1: '#222',
        p2: '#444',
        p3: '#666',
        p4: '#888',
        p5: '#aaa',
        p6: '#ccc',
        p7: '#eee'
    }

    items:Item[] = [
        new Item('p1', ''),
        new Item('p2', ''),
        new Item('p3', ''),
        new Item('p4', ''),
        new Item('p5', ''),
        new Item('p6', ''),
        new Item('p7', '')
    ];



    constructor(
        private logger:LoggerService, 
        private route:ActivatedRoute
    
    ) {}

    ngOnInit() {
        this.logger.startLoggingRouterEvent();
        this.route.queryParams.subscribe(params =>{
            for(var item of this.items) {
                 item.color = params[item.key];
            }
        });     
    } 
}