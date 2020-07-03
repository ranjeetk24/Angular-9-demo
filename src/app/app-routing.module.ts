import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { ChartsComponent } from './layout/charts/charts.component';
import { CovidComponent } from './covid/covid.component';

// Todo need to load the component modules when the link is clicked
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'users', component: UserComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'covid', component: CovidComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
