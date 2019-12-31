import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/header/header-component';
import { MainScreenComponent } from 'app/main-screen/main-screen-component';
import { PortfolioComponent } from 'app/portfolio/portfolio-component';
import { ResumeComponent } from 'app/resume/resume-component';
import { FooterComponent } from 'app/footer/footer-component';
import { ContactComponent } from 'app/contact-me/contact-me-component';
import { ProjectComponent } from 'app/project/project-component';
import { PortfolioPipe } from 'app/portfolio/pipes/portfolio-pipe';
import { SkillsComponent } from 'app/skills/skills-component';
import {ScrollToModule} from 'ng2-scroll-to';

const appRoutes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: ':id', component: ProjectComponent },
  { path: 'projects/remotable', redirectTo: '/projects/remotable' },
  { path: 'projects/remotable/**', redirectTo: '/projects/remotable' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    ProjectComponent,
    PortfolioPipe,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


