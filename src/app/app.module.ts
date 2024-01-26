import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmodalComponent } from './auth/loginmodal/loginmodal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllPostComponent } from './post/all-post/all-post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { initializeApp } from "firebase/app";
 
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { ToastrModule } from 'ngx-toastr';



import { HttpClientModule } from '@angular/common/http'; // Add this line
import { AngularEditorModule } from '@kolkov/angular-editor'
import { FormsModule } from '@angular/forms'; // Add this line
import { RouterModule } from '@angular/router'; // Add this line
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { ToastrService } from 'ngx-toastr';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { authguardGuard } from './guard/authguard.guard';
import { AuthService } from './services/auth.service';
import { AddinsuranceComponent } from './insurance/addinsurance/addinsurance.component';
import { DisplayinsuranceComponent } from './insurance/displayinsurance/displayinsurance.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ClaimrequestComponent } from './services/claimrequest/claimrequest.component';
import { FreeinsurancerequestComponent } from './services/freeinsurancerequest/freeinsurancerequest.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginmodalComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NotfoundComponent,
    AllPostComponent,
    NewPostComponent,
    CategoriesComponent,
    RegistrationComponent,
    AddinsuranceComponent,
    DisplayinsuranceComponent,
    CommentsComponent,
    UsersComponent,
    SubscribersComponent,
    ClaimrequestComponent,
    FreeinsurancerequestComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,  
    AngularEditorModule,
    BrowserAnimationsModule,
    AngularFireStorageModule, 
    AngularFireFunctionsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot(),


  ],
  providers: [AuthService, authguardGuard,ToastrService],

  bootstrap: [AppComponent]
})
export class AppModule { }
