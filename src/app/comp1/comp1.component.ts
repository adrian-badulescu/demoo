//import { BasicExampleDataComponent } from './comp1.component';

import { Component, OnInit } from '@angular/core';
//import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';


@Component({
  selector: 'app-comp1',
  template: `
  <ng2-smart-table [settings]="settings" [source]="data" (editConfirm)="onEditRowSelect($event)"></ng2-smart-table>
     
  `,
  styles: []
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  settings = {
    mode: 'external',
    edit: {
        editButtonContent: 'string_or_html'
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
   
  };
  
  name = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    
    {
      id: 3,
      name: "Cristina",
      username: "Cineva##",
      email: "cineva@ll.ro"
    }
  ];
}




  


