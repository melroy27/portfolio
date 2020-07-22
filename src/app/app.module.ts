import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Head1Component } from './head1/head1.component';
import { AboutComponent } from './about/about.component';
import { RecentComponent } from './recent/recent.component';
import { CollabComponent } from './collab/collab.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Head1Component,
    AboutComponent,
    RecentComponent,
    CollabComponent,
    ProjectsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
