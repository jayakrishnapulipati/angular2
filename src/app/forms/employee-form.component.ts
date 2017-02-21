import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.html'
})

export class EmployeeFormComponent implements OnInit {
  registerForm: FormGroup;

  inputObj = {
    firstName: 'jayakrishna',
    lastName: 'pulipati',
    street: 'street',
    zip: 500083,
    city: 'Hyderabad'
  };

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: [this.inputObj.firstName, Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  save() {
    console.log(this.registerForm.value);
  }
}
