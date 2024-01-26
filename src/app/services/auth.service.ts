import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  IsLogginGuard:boolean=false;

  constructor(private afauth:AngularFireAuth,private toaster:ToastrService,private route:Router,)  {

   }

Login(email: any, password: any) {
  console.log("not work test")
  this.afauth.signInWithEmailAndPassword(email, password)
    .then(logref => {
      this.loaduser();
      this.toaster.success('Admin Login successful');
      this.loggedIn.next(true);
      // console.log("login IsLogginGuard",this.IsLogginGuard)
      this.IsLogginGuard = true;
      this.route.navigate(['/dashboard']);
    })
    .catch(error => {
      console.error('Login failed:', error.message);


      let errorMessage: string;

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = 'Invalid email or password';
          break;
        default:
          errorMessage = 'An error occurred during login. Please try again later.';
      }

      this.toaster.error(errorMessage);
    });
}
get isLogginGuarded(): boolean {
  return this.loggedIn.value;
}

get isLoggedInded(): Observable<boolean> {
  return this.loggedIn.asObservable();
}

   loaduser(){
    this.afauth.authState.subscribe(user=>{
       console.log(JSON.parse (JSON.stringify(user)));
          localStorage.setItem('user',JSON.stringify(user))//set into localstorage
          localStorage.setItem('username',JSON.stringify(user?.email))//set into localstorage



    })
   }

   isloggedinmethod(){
    return localStorage.getItem('username')!=null;


   }

   logoutss() {
        
    this.afauth.signOut()
      .then(() => {
        this.toaster.success('Logout Successfully.....................');
        this.route.navigate(['/login']);
        localStorage.removeItem('username');
        localStorage.removeItem('user');

        this.loggedIn.next(false);
        this.IsLogginGuard = false;
        console.log("Logout IsLogginGuard", this.IsLogginGuard);
      })
      .catch((error) => {
        console.error('Logout Error:', error);
        // Handle the error here, for example, show an error message to the user
        this.toaster.error('Error during logout. Please try again.',"error");
      });
  }
  
   isLoggedin(){
     return this.loggedIn.asObservable();
   }
   Register(email: any, password: any) {
    this.afauth.createUserWithEmailAndPassword(email, password).then(registerRef => {
      this.toaster.success('User registered successfully');
      console.log('success');
    }).catch(error => {
      this.toaster.error('Registration failed: ' + error.message);
      console.log("error in register")
    });
  }


}

  
