import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModule } from '../models/loginModule';
import { ResponseModule } from '../models/responseModule';
import { SingleResponseModule } from '../models/singleResponseModule';
import { TokenModule } from '../models/tokenModule';

@Injectable({
  providedIn: 'root'
})

export class AuthService {



  apiUrl: string = ' https://localhost:44322/api/auth/';

  constructor(private httpClient:HttpClient) { }

 
  login(loginModule:LoginModule){
   //Login 'L' harfi apideki gibi büyük olmalı. Eğer küçük olursa apide default methodu gönderir bu da istenmeyen sonuçlar çıkartır. örnek yarım saat neden yanlış method çalışıyo diye baktım  
    return this.httpClient.post<SingleResponseModule<TokenModule>>(this.apiUrl+"login",loginModule);
  
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      
      return true;
    
    }else{

      return false;
    
    }
  }





}
