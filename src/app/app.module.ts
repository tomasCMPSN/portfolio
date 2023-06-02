import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';
import { matLocationOn } from '@ng-icons/material-icons/baseline'
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ matLocationOn, bootstrapLinkedin, bootstrapGithub })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
