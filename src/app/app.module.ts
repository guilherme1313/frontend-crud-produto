import { MaterialModule } from './material/material.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directivs/red.directive';
import { ForDirective } from './directivs/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ToastrModule } from 'ngx-toastr';
import { ClientsCreateComponent } from './components/clients/clients-create/clients-create.component';
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { ClientsReadComponent } from './components/clients/clients-read/clients-read.component';
import { ClientsUpdateComponent } from './components/clients/clients-update/clients-update.component';
import { ClientsDeleteComponent } from './components/clients/clients-delete/clients-delete.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { InicioComponent } from './views/inicio/inicio.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import {httpInterceptorProviders} from './http-interceptors';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClientsCrudComponent,
    ClientsCreateComponent,
    ClientsReadComponent,
    ClientsUpdateComponent,
    ClientsDeleteComponent,
    InicioComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    FullCalendarModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
  httpInterceptorProviders
],
  bootstrap: [AppComponent]
})
export class AppModule { }
