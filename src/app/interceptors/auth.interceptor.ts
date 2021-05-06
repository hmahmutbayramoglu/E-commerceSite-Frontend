import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //localde token varsa token a at 
    let token =localStorage.getItem("token");

    //gönderilen isteklerin hepsi
    let newRequest : HttpRequest<any>;

    //yapılan isteği klonla ve headera tokenı da ekle ve gönder 
    newRequest = request.clone({
      //Bearer den sonra boşluk bırak 
      headers:request.headers.set("Authorization","Bearer " + token)
    })

    return next.handle(newRequest);
  }

}
