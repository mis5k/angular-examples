import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div [style.background-color]="color"></div>
    `,
    styles: [`
        div {
            width: 100%;
            height: 100px;
        }
    `]
})

export class PaletteItemComponent implements OnInit {
    constructor(private route:ActivatedRoute) {}
    color:string;

    ngOnInit() { 
        this.route.params.subscribe(params =>{
            console.log("params.key : "+ JSON.stringify(params));
            this.color = params['color'];
        });
    }
}