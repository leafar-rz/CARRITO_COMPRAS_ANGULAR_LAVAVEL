import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { HomeComponent } from './componets/home/home.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './componets/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { DepartamentsComponent } from './componets/departaments/departaments.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'profile', component:ProfileComponent},
  {path:'departaments', component:DepartamentsComponent},
  {path:'**', component:PagenotfoundComponent},//comodin, cuando no se encutra una url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
