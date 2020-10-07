import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  //log(x){ console.log(x) };
  ngOnInit() {
  }

  submitHandler(myForm) {
    console.log('Input Values are: ',myForm.value)
  }
  }


