import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

//Directives can be attached to the html as property or attribute to the tags 

@Directive({
  selector: '[appFieldValidator]',
  //Adding properties to make the directive work as a validator 
  //multi: true is to allow using multiple classes
  providers: [{ provide: NG_VALIDATORS, useExisting: FieldValidatorDirective }]

})

export class FieldValidatorDirective implements Validators {

  constructor() { }
  //providing shared behaviour that all controls have => running validators, also defines properties
  validate(control: AbstractControl) { 
    //logic to validate a particular control
    const elementValue = control.value;

    //checking value is not null or blank
    if(elementValue === null || elementValue === undefined || elementValue === ''){
      //returning customized error as a JSON obj
      return { 'custom_required' : 'Field is required.' };
    }

    //checking value is not a number or special char with a minimum length of 3
    const reg = new RegExp('^[A-Za-z]{2}$');
    if( !reg.test(elementValue) ){
      //returning customized error as a JSON obj
      return { 'custom_pattern' : 'Names should contain only/at least 2 characters.' };
    }

    //if no errors 
    return null;
  }

}
