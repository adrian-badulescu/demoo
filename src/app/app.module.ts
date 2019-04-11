import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { StaticComponent } from './static/static.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { SmartTableComponent } from "../tables/smart-table/smart-table.component";

//import { URLSearchParams, RequestOptionsArgs } from '@angular/http';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,    
    Comp1Component,
    Comp2Component,
    StaticComponent,
    //LocalDataSource
    //SmartTableComponent,
    //URLSearchParams,
    //RequestOptionsArgs,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    //LocalDataSource
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
