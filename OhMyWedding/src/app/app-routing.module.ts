import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { LogInComponent } from './log-in/log-in.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "packages", component: PackagesComponent },
  {
    path: 'Sign-Up',
    component: SignUp2Component
  },
  {
    path: 'Log-in',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
