import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTaskComponent } from '../app/features/new-task/new-task.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: 'new-task', 
    component: NewTaskComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
