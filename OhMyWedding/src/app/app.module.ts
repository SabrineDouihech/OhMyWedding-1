import { NgModule } from '@angular/core';
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
import { WeddingClothesComponent } from './wedding-clothes/wedding-clothes.component';
import { DetailsComponent } from './details/details.component';
import { WeddingSettingComponent } from './wedding-setting/wedding-setting.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    // HomeComponent,
    FavoritesComponent,
    CategoriesListComponent,
    FoodComponent,
    InvitationCardsComponent,
    CarsComponent,
    MusicalBandComponent,
    WeddingClothesComponent,
    DetailsComponent,
    WeddingSettingComponent,
    PackagesListComponent,
    AdminDachComponent,
    AdminPackageslistComponent,

    AdminMusicalbandlistComponent,
    AdminCarslistComponent,
    AdminFoodlistComponent,
    AdminInvitaIioncardslistComponent,
    AdminWeddingclothesComponent,
    AdminWeddingSettingComponent,
    AdminReservationComponent

    // SignUp2Component,
    // LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // SignUp2Component,
    // LogInComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
