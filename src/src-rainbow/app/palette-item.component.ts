import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    constructor(private route:ActivatedRoute,
    private router:Router) {}
    color:string;

    ngOnInit() { 
        this.route.params.subscribe(params =>{
            
            console.log("params.key : "+ JSON.stringify(params));
            if(params['p1']) {
                this.color = params['p1'];
            } else if(params['p2']) {
                this.color = params['p2'];
            } else if(params['p3']) {
                this.color = params['p3'];
            } else if(params['p4']) {
                this.color = params['p4'];
            } else if(params['p5']) {
                this.color = params['p5'];
            } else if(params['p6']) {
                this.color = params['p6'];
            } else if(params['p7']) {
                this.color = params['p7'];
            } 
            
        });
    }
}