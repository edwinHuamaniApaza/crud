import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent2 } from './index/index.component';
import { CreateComponent2} from './create/create.component';
import { EditComponent2 } from './edit/edit.component';

const routes: Routes = [
 // { path: 'person2', redirectTo: 'person2/index', pathMatch: 'full'},
  { path: 'person2/index',component: IndexComponent2 },
  { path: 'person2/create',component: CreateComponent2 },
  { path: 'person2/edit/:idPerson',component: EditComponent2 }, 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Person2RoutingModule { }
