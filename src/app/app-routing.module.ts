import { StaticComponent } from './static/static.component';
import { AppComponent } from './app.component';

import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {path: 'static', component:StaticComponent},
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component},
  {path: '**', redirectTo: 'static'},   
              
                 
              

                         
                                 
                 
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent,StaticComponent,Comp1Component,Comp2Component]
