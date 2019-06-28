import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '',component :HomeComponent},
  {path: 'SignUp', component : SignUpComponent},
  {path: 'restaurantDashboard', component : RestaurantDashboardComponent},
  {path: 'Login', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
