import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';
import { matLocationOn, matLink, matEmail } from '@ng-icons/material-icons/baseline'
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons'

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ matLocationOn, bootstrapLinkedin, bootstrapGithub, matLink, matEmail })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
