import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //..
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { from } from 'rxjs';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { CartPlusFill,Bookmarks, Search } from 'ng-bootstrap-icons/icons';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

import { ToastrModule } from 'ngx-toastr';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


const icons = {
 
  CartPlusFill,
  Bookmarks,
  Search
};
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //..
    FormsModule,
    BootstrapIconsModule.pick(icons),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      timeOut:5000
    }),


  ],
  providers: [
    //bütün http isteklerimizde 'AuthInterceptor' interceptoru çalışacak diyoruz
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
