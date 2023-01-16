import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { ToastrService } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Person3RoutingModule } from './person3-routing.module';
import { IndexComponent3 } from './index/index.component';
import { CreateComponent3 } from './create/create.component';
import { EditComponent3 } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent3, CreateComponent3, EditComponent3],
  imports: [
    CommonModule,
    Person3RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ]
})
export class Person3Module { }