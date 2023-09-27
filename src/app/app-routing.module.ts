import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './user-auth/login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { ForgotPassComponent } from './user-auth/forgot-pass/forgot-pass.component';

const routes: Routes = [
  {path: 'userAuth' , component:UserAuthComponent,
  children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginPageComponent },
    {path:'forgotPass', component:ForgotPassComponent},
    {path:'signUp', component:SignUpComponent}
  ] 
  },
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
