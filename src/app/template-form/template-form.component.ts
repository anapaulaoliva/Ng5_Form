import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  //object for default data binding with the input value
  user = { 'fname': 'Anne', 'lname': 'Hall' };
  
  ngOnInit() {
  }

  submitHandler(myForm) {
    console.log('Input Values are: ',myForm.value)
    console.log(myForm)
  }
}

