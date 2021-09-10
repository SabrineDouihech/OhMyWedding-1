import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { DetailsComponent } from './details/details.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FoodComponent } from './food/food.component';
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';
import { CarsComponent } from './cars/cars.component';
import { MusicalBandComponent } from './musical-band/musical-band.component';
import { HostsComponent } from './hosts/hosts.component';
import { DressingComponent } from './dressing/dressing.component';
import { AdminDachComponent } from './admin-dach/admin-dach.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserComponent } from './user/user.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'packageslist', component: PackagesListComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'categorieslist', component: CategoriesListComponent },
  { path: 'food', component: FoodComponent },
  { path: 'invitationcard', component: InvitationCardsComponent },
  { path: 'carslist', component: CarsComponent },
  { path: 'musicalbandlist', component: MusicalBandComponent },
  { path: 'hosts', component: HostsComponent },
  { path: 'dressing', component: DressingComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'admin', component: AdminDachComponent },
  { path: 'Sign-Up', component: SignupComponent },
  { path: 'Log-in', component: SigninComponent },
  { path: 'user', component: UserComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: 'info', component: UserinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
