import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  dataLoaded = false;
  products: Product[] = [];
  filterText="";

//Ders 19 1:55dk
  
  //newlerken çalışır
  //injection vs yaparken kullanılır
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
  ) {}

  //component çalışınca çalışır
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductsByCategory(params.categoryId);
      }
      else{
        this.getProduct();
      }
    });
 
  }

  getProduct() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }




  //Alış Veriş Sepetine Ekle = > add To Cart
  addToCart(product:Product){
 
    
    this.toastrService.success(product.productName,"Sepete Eklendi");
     this.cartService.addToCart(product);

  }







 









}
