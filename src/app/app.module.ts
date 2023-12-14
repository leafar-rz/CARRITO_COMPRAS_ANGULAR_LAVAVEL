import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { NavmenuComponent } from './componets/navmenu/navmenu.component';
import { PagenotfoundComponent } from './componets/pagenotfound/pagenotfound.component';
import { ForgotPasswordComponent } from './componets/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './componets/profile/profile.component';
import { DepartamentsComponent } from './componets/departaments/departaments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavmenuComponent,
    ForgotPasswordComponent,
    PagenotfoundComponent,
    ProfileComponent,
    DepartamentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
