import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {NgForm} from '@angular/forms';
import {FormPosterService} from '../../services/form-poster.service';

@Component({
  selector: 'app-form-basics',
  templateUrl: './form-basics.component.html',
  styleUrls: ['./form-basics.component.css']
})
export class FormBasicsComponent implements OnInit {

  languages = ['Setswana', 'isiXhosa', 'isiZulu', 'Tsonga', 'Venda'];
  model = new Employee('Kabo', 'Rasilo', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPosterService) {
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);

    if (this.hasPrimaryLanguageError) {
      return;
    }

    this.formPoster.postEmployeeForm(form.value)
      .subscribe(data => console.log(`success: `));
  }

  validatePrimaryLanguage(event) {
    if (this.model.primaryLanguage === 'default') {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }

}
