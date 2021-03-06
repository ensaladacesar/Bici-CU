import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { BikeRegisterComponent } from './bikeRegister/bikeRegister.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { EscanearComponent } from './escanear/escanear.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bikeRegister', component: BikeRegisterComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'escanear', component: EscanearComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    BikeRegisterComponent,
    HomeComponent,
    EscanearComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
