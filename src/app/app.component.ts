import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // neden array çünkü birden fazla css dosyamız varsa , koyarak ekleyebiliriz
})
export class AppComponent {
  title = 'northwind';
 
  constructor() { 
   // alert("Welcome to AppComponent");
  }
  GetTitle(): string {
    return this.title;
  }



  
}

//Datayı yönettiğimiz yer
