import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './pages/empleado-admin/empleado-admin.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './pages/login/login.component';
import { ClienteAdminComponent } from './pages/cliente-admin/cliente-admin.component';
import { ClienteApiService } from './services/cliente-api.service';
import { EmpleadoApiService } from './services/empleado-api.service';
import { UsuarioApiService } from './services/usuario-api.service';
import { MenuprincipalApiService } from './services/menuprincipal-api.service';
import { RolApiService } from './services/rol-api.service';
import { PersonaApiService } from './services/persona-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    EmpleadoComponent,
    FetchDataComponent,
    LoginComponent,
    ClienteAdminComponent,
    
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cliente-admin', component: ClienteAdminComponent },
      { path: 'empleado-admin', component: EmpleadoComponent },
    ])
  ],
  providers: [FormBuilder, MenuprincipalApiService,PersonaApiService, RolApiService, EmpleadoApiService, ClienteApiService, UsuarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
