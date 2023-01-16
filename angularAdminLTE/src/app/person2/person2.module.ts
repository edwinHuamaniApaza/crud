import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { ToastrService } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Person2RoutingModule } from './person2-routing.module';
import { IndexComponent2 } from './index/index.component';
import { CreateComponent2 } from './create/create.component';
import { EditComponent2 } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent2, CreateComponent2, EditComponent2],
  imports: [
    CommonModule,
    Person2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ]
})
export class Person2Module { }