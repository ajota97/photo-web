import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Guard } from './services/guard';
import { GuardLogin } from './services/guard.login';
import { EventosComponent } from './components/eventos/eventos.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';






const appRoutes: Routes=[
{path:'', canActivate:[GuardLogin],component:LoginComponent},
{path:'login',canActivate:[GuardLogin], component:LoginComponent},
{path:'registro', canActivate:[GuardLogin],component:RegisterComponent},
{path:'home', canActivate:[Guard],component:HomeComponent},
{path:'eventos', canActivate:[Guard],component:EventosComponent},
{path:'eventos/:page', canActivate:[Guard],component:EventosComponent},
{path:'add/image/:id',canActivate:[Guard], component:AddImageComponent},
{path:'subir/image/:id',canActivate:[Guard], component:SubirImagenesComponent},
{path:'**',canActivate:[GuardLogin], component:LoginComponent},
];


//Exportar la configuracion
export const appRoutingProviders: any[]= [];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);