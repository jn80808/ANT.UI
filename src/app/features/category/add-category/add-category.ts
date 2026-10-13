import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {


  // 1. Import ReactiveFormModule 
  // 2. FormGroups -> FormControl

  addCategoryFormGroup = new FormGroup({
    // CategoryName: new FormControl<string>('',{nonNullable: true,validators:Validators.required}),
    name: new FormControl<string>('',{nonNullable: true, validators:[Validators.required, Validators.maxLength(100)]}), //with multiple Validators
    urlHandle: new FormControl<string>('',{nonNullable: true, validators:[Validators.required, Validators.maxLength(200)]})
  })

  get nameFormControl(){
    return this.addCategoryFormGroup.controls.name;
  }

    get urlHandleFormControl(){
    return this.addCategoryFormGroup.controls.urlHandle;
  }


  onSubmit(){
    console.log(this.addCategoryFormGroup.getRawValue())
  }



}



// class Validators {
// static min(min: number): ValidatorFn;
// static max(max: number): ValidatorFn;
// static required(control: AbstractControl<any, any>): ValidationErrors;
// static requiredTrue(control: AbstractControl<any, any>): ValidationErrors;
// static email(control: AbstractControl<any, any>): ValidationErrors;
// static minLength(minLength: number): ValidatorFn;
// static maxLength(maxLength: number): ValidatorFn;
// static pattern(pattern: string | RegExp): ValidatorFn;
// static nullValidator(control: AbstractControl<any, any>): ValidationErrors;
// static compose(validators: null): null;
// static compose(validators: ValidatorFn[]): ValidatorFn;
// static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn;
