import {Component} from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template:`<h1>Hola Mundo desde Angular 2 !!</h1>
    <br/>
     <saludo></saludo>`,
       //providers:   [SaludoComponent],

})


 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }
