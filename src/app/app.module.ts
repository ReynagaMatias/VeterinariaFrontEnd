import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@Angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { HeaderComponent } from './components/header/header.component';

import {HttpClientModule} from '@angular/common/http';
import { TurnoComponent } from './components/turno/turno.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    HeaderComponent,
    TurnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
