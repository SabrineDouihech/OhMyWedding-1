import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';

import { DetailsComponent } from './details/details.component';
import { PackagesListComponent } from './packages-list/packages-list.component'
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FoodComponent } from './food/food.component'
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';
import { CarsComponent } from './cars/cars.component';
import { MusicalBandComponent } from './musical-band/musical-band.component'
import { WeddingClothesComponent } from './wedding-clothes/wedding-clothes.component';
import { WeddingSettingComponent } from './wedding-setting/wedding-setting.component';
import { AdminDachComponent } from './admin-dach/admin-dach.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "packages", component: PackagesComponent },
  { path: 'packageslist', component: PackagesListComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'categorieslist', component: CategoriesListComponent },
  { path: 'food', component: FoodComponent },
  { path: 'invitationcard', component: InvitationCardsComponent },
  { path: 'carslist', component: CarsComponent },
  { path: 'musicalbandlist', component: MusicalBandComponent },
  { path: 'weddingclotheslist', component: WeddingClothesComponent },
  { path: 'weddingsettinglist', component: WeddingSettingComponent },
  { path: "admin", component: AdminDachComponent },
  {
    path: 'Sign-Up',
    component: SignupComponent
  },
  {
    path: 'Log-in',
    component: SigninComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
