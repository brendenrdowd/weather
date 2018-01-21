import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { InterlinkService } from './interlink.service'


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    DallasComponent,
    DcComponent,
    SanjoseComponent,
    BurbankComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [InterlinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
