import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModule } from '../models/listResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  apiUrl: string = ' https://localhost:44322/api/categories/getall';

  
  constructor(private httpClient:HttpClient) { } 
  

  //sucriber olunabilen bir ResponseModule dönüceksi
  getCategory():Observable<ListResponseModule<Category>> {
   return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl);
  }

  
} 