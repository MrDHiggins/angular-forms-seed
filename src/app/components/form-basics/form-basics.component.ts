import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-form-basics',
  templateUrl: './form-basics.component.html',
  styleUrls: ['./form-basics.component.css']
})
export class FormBasicsComponent implements OnInit {

  languages = ['Setswana', 'isiXhosa', 'isiZulu', 'Tsonga', 'Venda'];
  model = new Employee('Kabo', 'Rasilo', true, 'w2', 'isiXhosa');

  constructor() { }

  ngOnInit() {
  }

}
