import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PersonModule } from './person/person.module';

import { Person2Module } from './person2/person2.module';
import { Person3Module } from './person3/person3.module';

import { HeaderComponent } from './shared/header/header.component';
import { SiderbarComponent } from './shared/siderbar/siderbar.component';
import { HomeComponent } from './home/home.component';


//import { Person4Module } from './person4/person4.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderbarComponent,
    HomeComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    Person2Module,
    Person3Module,
    //Person4Module,
    HttpClientModule,
    NgbModule,
    
    //BrowserAnimationsModule,
    //ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
