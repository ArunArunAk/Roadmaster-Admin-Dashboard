import { Component, OnInit,DoCheck } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck
{
  navbar:boolean=false

  useremail!:any;
  // loggedstatus:any;
  // loggedstatus!:boolean=false
  loggedstatus:boolean=false

  loggedstatus1!:boolean;
 constructor(private authservice:AuthService,private toaster:ToastrService,private router:Router){
 }
  //after setitem in local storage do not need to use service to access to take that
  //using local getitem to give the particular register name to easy take

 ngOnInit(): void {
    
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.navbar = !['/login'].includes(event.url);
    }
  })
   
  const  user= JSON.parse(localStorage.getItem('user')!);
  console.log(JSON.parse(localStorage.getItem('user')!));
  //  this.  loggedstatus$!=this.authservice.loggedIn;
    console.log("statussss ",this.loggedstatus1 );

}

Logout(){
console.log("logoutsss")
  this.authservice.logoutss()
}
ngDoCheck(): void {
  

  if(this.authservice.isloggedinmethod()){
    this.loggedstatus=true
 }
}
}
