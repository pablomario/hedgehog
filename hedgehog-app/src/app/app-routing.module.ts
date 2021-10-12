import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { FaqsComponent } from './public/faqs/faqs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Core Routes 
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
