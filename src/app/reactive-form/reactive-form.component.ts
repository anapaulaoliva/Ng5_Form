import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  log(x){ console.log(x) };
  


  //reactiveForm: FormGroup;
  //constructor(private _fb: FormBuilder) { }

  /*ngOnInit() {
    this.reactiveForm = this._fb.group({
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      confirmPassword: [],
      countryLocation: [],
      companyName: [],
      companyWebsite: [],
      innovatorType: [],
      ageCheck: []
    })
  }*/

  //function to call from the submit button
  //submitHandler(){
    //console.log(this.reactiveForm);
    
  }


