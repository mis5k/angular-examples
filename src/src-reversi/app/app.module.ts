import { BrowserModule } from '@angular/platform-browser';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  */ 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment }   from '../environments/environment';

import { AppComponent } from './app.component';
import { ReversiService }          from './reversi.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  /*  BrowserAnimationsModule, */
    FormsModule,
    HttpModule,
/*    AngularFireModule.initializeApp(environment.firebase), */
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [ ReversiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }





