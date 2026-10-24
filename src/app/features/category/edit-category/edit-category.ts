import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategory {

  editCategoryFormGroup = new FormGroup({
    name: new FormControl(''),
    urlHandle: new FormControl('')
  });

  get nameFormControl(): FormControl {
    return this.editCategoryFormGroup.get('name') as FormControl;
  }

  get urlHandleFormControl(): FormControl {
    return this.editCategoryFormGroup.get('urlHandle') as FormControl;
  }

  onSubmit(): void {
    // Add your update logic here
  }
}