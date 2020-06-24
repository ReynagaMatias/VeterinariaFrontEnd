import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';
import { TurnoComponent } from './components/turno/turno.component';

const routes: Routes = [
  {path: 'mascota',component: MascotaComponent},
  {path: 'turno',component: TurnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
