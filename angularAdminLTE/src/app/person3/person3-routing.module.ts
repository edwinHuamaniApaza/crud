import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent3 } from './index/index.component';
import { CreateComponent3} from './create/create.component';
import { EditComponent3 } from './edit/edit.component';

const routes: Routes = [
 // { path: 'person2', redirectTo: 'person2/index', pathMatch: 'full'},
  { path: 'person3/index',component: IndexComponent3 },
  { path: 'person3/create',component: CreateComponent3 },
  { path: 'person3/edit/:idPerson',component: EditComponent3 }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Person3RoutingModule { }
