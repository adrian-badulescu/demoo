import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <p>
      COMP B WORKS!
    </p>
  `,
  styles: []
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
