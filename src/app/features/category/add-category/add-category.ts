import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    CategoryName: new FormControl<string>('',{nonNullable: true}),
    urlHandle: new FormControl<string>('',{nonNullable: true})
  })


  onSubmit(){
    console.log(this.addCategoryFormGroup.getRawValue())
  }



}
