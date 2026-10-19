import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AddCategoryRequest, category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private http= inject(HttpClient)
  private apiBaseUrl= 'https://localhost:7001'; //BE API 

  addCategoryStatus = signal<'idle' | 'loading' | 'error' | 'success'>('idle')  

  // POST
  addCategory(category : AddCategoryRequest){
    this.addCategoryStatus.set('loading')
    this.http.post<void>(`${this.apiBaseUrl}/api/Categories`, category).subscribe({
      next:() => {
        this.addCategoryStatus.set('success')
      },
      error:() => {
        this.addCategoryStatus.set('error')
      },

    })
  }

  //GETALL
    getAllCategories(){
     return  httpResource<category[]>(()=> `${this.apiBaseUrl}/api/Categories`)
    }


}




