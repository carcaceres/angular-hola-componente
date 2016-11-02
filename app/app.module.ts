
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Componentes
import { AppComponent }  from './app.component';
import {SaludoComponent} from './components/saludo.component';

 
@NgModule({
   declarations: [ AppComponent,SaludoComponent
          

          ],
  imports:      [ BrowserModule,
  				  HttpModule,
  				  FormsModule,
  				 			],
 

   providers:   [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],

  bootstrap:    [ AppComponent ]
  
})
 
export class AppModule { }
