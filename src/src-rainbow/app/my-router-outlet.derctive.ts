import { Directive, Input, Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { RouterOutlet, RouterOutletMap } from '@angular/router';


@Directive({
  selector: '[my-router-outlet]'
})
export class MyRouterOutletDirective implements OnInit, OnDestroy {


  private outlet: RouterOutlet;
  @Input() private name: string;
  
  constructor(
    private routerOutletMap: RouterOutletMap, 
    private resolver: ComponentFactoryResolver, 
    private vcRef: ViewContainerRef
  ) {}
  
  ngOnInit() {
      this.outlet = new RouterOutlet(this.routerOutletMap, this.vcRef, this.resolver, this.name);
  }
  ngOnDestroy() {
    this.outlet.ngOnDestroy();
  }
}
