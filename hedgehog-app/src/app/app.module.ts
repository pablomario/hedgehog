import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { FaqsComponent } from './public/faqs/faqs.component';
import { SidebarComponent } from './dashboard/core/sidebar/sidebar.component';
import { ConfigurationsComponent } from './dashboard/views/configurations/configurations.component';
import { ProfileComponent } from './dashboard/views/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HeroComponent } from './public/components/hero/hero.component';
import { SignupComponent } from './public/components/signup/signup.component';
import { TimelineComponent } from './dashboard/views/timeline/timeline.component';
import { RepositorySelectorComponent } from './dashboard/core/repository-selector/repository-selector.component';
import { PropertiesComponent } from './dashboard/views/properties/properties.component';
import { HelloComponent } from './dashboard/views/hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ConfigurationsComponent,
    ProfileComponent,
    DashboardComponent,
    ErrorPageComponent,
    HomeComponent,
    FaqsComponent,
    FooterComponent,
    HeroComponent,
    SignupComponent,
    TimelineComponent,
    RepositorySelectorComponent,
    PropertiesComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
