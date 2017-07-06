import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module'; 
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { PaletteItemComponent } from './palette-item.component';
import { MyRouterOutletDirective } from './my-router-outlet.derctive';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PaletteItemComponent,
        MyRouterOutletDirective
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
