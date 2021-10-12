import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { FaqsComponent } from './public/faqs/faqs.component';
import { SidebarComponent } from './dashboard/core/sidebar/sidebar.component';
import { ProjectsComponent } from './dashboard/views/projects/projects.component';
import { ConfigurationsComponent } from './dashboard/views/configurations/configurations.component';
import { ProfileComponent } from './dashboard/views/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HeroComponent } from './public/components/hero/hero.component';
import { SignupComponent } from './public/components/signup/signup.component';
import { TimelineComponent } from './dashboard/views/timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectsComponent,
    ConfigurationsComponent,
    ProfileComponent,
    DashboardComponent,
    ErrorPageComponent,
    HomeComponent,
    FaqsComponent,
    FooterComponent,
    HeroComponent,
    SignupComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
