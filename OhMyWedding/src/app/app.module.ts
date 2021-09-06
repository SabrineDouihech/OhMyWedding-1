import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FoodComponent } from './food/food.component';
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';
import { CarsComponent } from './cars/cars.component';
import { MusicalBandComponent } from './musical-band/musical-band.component';
import { DetailsComponent } from './details/details.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDachComponent } from './admin-dach/admin-dach.component';
import { AdminPackageslistComponent } from './admin-packageslist/admin-packageslist.component';
import { AdminMusicalbandlistComponent } from './admin-musicalbandlist/admin-musicalbandlist.component';
import { AdminCarslistComponent } from './admin-carslist/admin-carslist.component';
import { AdminFoodlistComponent } from './admin-foodlist/admin-foodlist.component';
import { AdminInvitaIioncardslistComponent } from './admin-invita-iioncardslist/admin-invita-iioncardslist.component';
import { AdminWeddingclothesComponent } from './admin-weddingclothes/admin-weddingclothes.component';
import { AdminWeddingSettingComponent } from './admin-wedding-setting/admin-wedding-setting.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { HostsComponent } from './hosts/hosts.component';
import { DressingComponent } from './dressing/dressing.component';
import { httpInterceptorProvider } from './auth/auth.interceptor';
import { ReservationsComponent } from './reservations/reservations.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    FavoritesComponent,
    CategoriesListComponent,
    FoodComponent,
    InvitationCardsComponent,
    CarsComponent,
    MusicalBandComponent,
    DetailsComponent,
    PackagesListComponent,
    AdminDachComponent,
    AdminPackageslistComponent,
    AdminMusicalbandlistComponent,
    AdminCarslistComponent,
    AdminFoodlistComponent,
    AdminInvitaIioncardslistComponent,
    AdminWeddingclothesComponent,
    AdminWeddingSettingComponent,
    AdminReservationComponent,
    SignupComponent,
    SigninComponent,
    NavComponent,
    HostsComponent,
    DressingComponent,
    ReservationsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
