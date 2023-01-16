import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IndexComponent } from './person/index/index.component';
// import { IndexComponent2 } from './person2/index/index.component';

// import { PersonService } from './person/person.service';
// import { Person2Service } from './person2/person2.service';

const routes: Routes = [

// { path: ' ', redirectTo: '/person/index', pathMatch: 'full'}, //ruta de inicia 
// { path: '/person/index', component: IndexComponent },//localhost..../person/index
// { path: '/person2/index', component: IndexComponent2 },//localhost..../person/index


];


 












@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
