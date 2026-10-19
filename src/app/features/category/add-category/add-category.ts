import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddCategoryRequest } from '../model/category.model';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {

  //add contructor 
  constructor (){
      effect(()=>{
          if (this.categoryService.addCategoryStatus()=== 'success'){
          console.log('Success');    
          //Redirect back to category list page 
          }

          if (this.categoryService.addCategoryStatus()=== 'error'){
          console.error('Add Category Request Failed');    
   
          }


      });
    
    }


  private categoryService = inject (CategoryService)

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
    console.log(this.addCategoryFormGroup.getRawValue()) // outputting in console
    const addCategoryFormValue = this.addCategoryFormGroup.getRawValue() //creating object 


    const addCategoryRquestDto: AddCategoryRequest = { //AddCategoryRequest from model 
      name: addCategoryFormValue.name,
      urlHandle: addCategoryFormValue.urlHandle,

    };
      this.categoryService.addCategory(addCategoryRquestDto) //this is value will post in service UI and from services UI will call BE 

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
