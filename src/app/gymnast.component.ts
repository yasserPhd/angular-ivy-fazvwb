import { Component, OnInit } from '@angular/core';
import { Gymnast } from '../app/gymnast' ;

@Component({
  selector: 'app-Gymnast',
   template: `<h1>Hello {{g.name}} </h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class gymnastComponent implements OnInit {
  g: Gymnast = {
    id: 1,
    name: 'Yasser', tall: 1.76
  };

  constructor() { }

  ngOnInit() {
  }

}