import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { FaqsComponent } from './public/faqs/faqs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { ProfileComponent } from './dashboard/views/profile/profile.component';
import { TimelineComponent } from './dashboard/views/timeline/timeline.component';
import { PropertiesComponent } from './dashboard/views/properties/properties.component';
import { HelloComponent } from './dashboard/views/hello/hello.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'hello', component: HelloComponent},
      { path: 'repository', component: TimelineComponent},
      { path: 'properties', component: PropertiesComponent},
      { path: 'profile', component: ProfileComponent}
    ]
  },
  // Core Routes 
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
