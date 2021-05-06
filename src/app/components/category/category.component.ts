import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {


  currentCategory: Category;
  categories: Category[] = [];



  constructor(private categoryService: CategoryService) {}



  ngOnInit(): void {
    this.getCategory();

  }





  // Functions


  getCategory() {
    this.categoryService.getCategory().subscribe((response) => {
      this.categories = response.data;
    });
  }


  
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
 
  }



  getCurrentCategoryStyle(category:Category){
    if(category==this.currentCategory){
      return "    background-color: #3AAAE2;      box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(58 170 226/ 40%); ";
     
    }
    else{
      return "";
    }
  }



  getAllCategoryStyle(){
    if (!this.currentCategory){
      return "    background-color: #3AAAE2;          box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(58 170 226/ 40%);";
      
    }
    else{
      return "";
    }
  }

























}
