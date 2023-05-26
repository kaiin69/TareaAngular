import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarea-completa',
  templateUrl: './tarea-completa.component.html',
  styleUrls: ['./tarea-completa.component.scss']
})
export class TareaCompletaComponent {
@Input()colores:any[0];

}
