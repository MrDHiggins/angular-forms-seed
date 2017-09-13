import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-basics',
  templateUrl: './form-basics.component.html',
  styleUrls: ['./form-basics.component.css']
})
export class FormBasicsComponent implements OnInit {

  languages = ['Setswana', 'isiXhosa', 'isiZulu', 'Tsonga', 'Venda'];

  constructor() { }

  ngOnInit() {
  }

}
