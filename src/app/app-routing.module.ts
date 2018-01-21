import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  {
    path: "seattle",
    component: SeattleComponent
  },
  {
    path: "dallas",
    component: DallasComponent
  },
  {
    path: "dc",
    component: DcComponent
  },
  {
    path: "sanjose",
    component: SanjoseComponent
  },
  {
    path: "burbank",
    component: BurbankComponent
  },
  {
    path: "chicago",
    component: ChicagoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
