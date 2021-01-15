import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";



import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { Guard } from './services/guard';
import { PhotoStudioService } from './services/photoStudio.service';
import { GuardLogin } from './services/guard.login';
import { EventosComponent } from './components/eventos/eventos.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { EventoDetailComponent } from './components/evento-detail/evento-detail.component';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EventosComponent,
    AddImageComponent,
    EventoDetailComponent,
    SubirImagenesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    AngularFileUploaderModule,
  ],
  providers: [
    appRoutingProviders,
    Guard,
    PhotoStudioService,
    GuardLogin
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
