import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaCompletaComponent } from './tarea-completa/tarea-completa.component';

const routes: Routes = [
  {path: 'tarea-completa', component:TareaCompletaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
