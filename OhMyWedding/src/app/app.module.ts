import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
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
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
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
    SignUp2Component,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
