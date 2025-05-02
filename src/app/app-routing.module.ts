import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTaskComponent } from '../app/features/new-task/new-task.component';

const routes: Routes = [
  { path: 'new-task', component: NewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
