import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path:'Sign-Up',
    component:SignUp2Component
  },
  {
    path:'Log-in',
    component:LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
