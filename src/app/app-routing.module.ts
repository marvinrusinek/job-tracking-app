import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobAddComponent } from './job-add/job-add.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobFetchComponent } from './job-fetch/job-fetch.component';

const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: 'full' },
  { path: 'job/create', component: JobAddComponent },
  { path: 'edit/:id', component: JobEditComponent },
  { path: 'jobs', component: JobFetchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
