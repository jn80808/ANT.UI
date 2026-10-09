import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  imports: [ReactiveFormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {


  // Import ReactiveFormModule 
  // FormGroups -> FormControl

  addCategoryFormGroup = new FormGroup({
    name: new FormControl<string>('',{nonNullable: true})
  })

}
