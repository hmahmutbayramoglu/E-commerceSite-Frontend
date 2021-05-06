import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  
  constructor() { }



  addToCart(product:Product){
    //varsa eşitler yoksa undifined
    let item =CartItems.find(c=>c.product.productId===product.productId);
    
    if (item) {
      item.quantity+=1;
    }else{
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  
    list():CartItem[]{
 
      return CartItems;
    }

    removeFromCart(product:Product){
      
      let item:CartItem =CartItems.find(c=>c.product.productId===product.productId);
      if(item.quantity>1){
        item.quantity -= 1;
      }
      else{
              CartItems.splice(CartItems.indexOf(item),1);
      }

    }
 
}