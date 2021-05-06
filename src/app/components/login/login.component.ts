import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    
    if (this.loginForm.valid) {
      

      let loginModule = Object.assign({},this.loginForm.value);

      this.authService.login(loginModule).subscribe(response=>{
 

        this.toastrService.success(response.message,"BAŞARILI");
        localStorage.setItem("token", response.data.token);
        this.router.navigate(["login"]);
      },responseError=>{
 
            this.toastrService.error(responseError.error, "HATA");
      });

    }else{
      this.toastrService.info("Lütfen Alanları Doldurunuz");
    }
  }

}
