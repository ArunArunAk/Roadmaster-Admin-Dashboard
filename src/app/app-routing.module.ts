import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPostComponent } from './post/all-post/all-post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { authguardGuard } from './guard/authguard.guard';
import { AuthService } from './services/auth.service';
import { AddinsuranceComponent } from './insurance/addinsurance/addinsurance.component';
import { DisplayinsuranceComponent } from './insurance/displayinsurance/displayinsurance.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ClaimrequestComponent } from './services/claimrequest/claimrequest.component';
import { FreeinsurancerequestComponent } from './services/freeinsurancerequest/freeinsurancerequest.component';
// import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent,},

  {path:'categories',component:CategoriesComponent, },
  {path:'posts',component:AllPostComponent},
  {path:'posts/new',component:NewPostComponent,},
  // {path:'posts/new',component:NewPostComponent,canActivate: [authguardGuard]},
  {path:'comments',component:CommentsComponent},
  {path:'subscribers',component:SubscribersComponent},

  {path:'users',component:UsersComponent},
  {path:'claim',component:ClaimrequestComponent},
  {path:'freeinsuranceaccept',component:FreeinsurancerequestComponent},






  {path:'login',component:LoginComponent},
  // {path:'registration',component:RegistrationComponent},
  {path:'insurance/addinsurance',component:AddinsuranceComponent},
  {path:'insurance',component:DisplayinsuranceComponent},
  { path: '**', component: NotfoundComponent }, // Wildcard route for not found






];

@NgModule({
  providers: [AuthService,],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
