import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private authservice:AuthService,private router:Router){

  }

ngOnInit(): void {
    if (this.authservice.isloggedinmethod()) {
      this.router.navigate(['/dashboard']);
    }
   
  }
  onSubmit(loginForm: any) {
     console.log(loginForm.value);
     this.authservice.Login(loginForm.value.email,loginForm.value.password);
   
  }
;

}
