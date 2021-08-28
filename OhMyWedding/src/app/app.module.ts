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
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms'

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
    WeddingClothesComponent,
    DetailsComponent,
    WeddingSettingComponent,
    PackagesListComponent,
    SignupComponent,
    SigninComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
