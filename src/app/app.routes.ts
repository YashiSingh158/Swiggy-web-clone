import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'restaurant-details/:id', component: RestaurantInfoComponent } 
];
