import { Component } from '@angular/core';
// import { register } from '../models/register';
import { AuthService } from '../services/auth.service';
import { register } from 'src/models/register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private authservices:AuthService){}

  onSubmit(Registrationform: any){
  const registerform:register={
    email:Registrationform.value.email,
    password:Registrationform.value.password
  }
  console.log("registerform",registerform)
      this.authservices.Register(registerform.email,registerform.password)
}
}
