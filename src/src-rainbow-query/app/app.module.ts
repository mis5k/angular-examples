import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [/* TODO: Providers g here */],
    bootstrap: [AppComponent]
})
export class AppModule { }
