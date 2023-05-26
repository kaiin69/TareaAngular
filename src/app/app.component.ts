import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    colores=[
    {tipo:"frio",nombre:"verde",clasificacion:"primario"},
    {tipo:"frio",nombre:"azul",clasificacion:"primario"},
    {tipo:"calido",nombre:"rojo",clasificacion:"primario"},
    {tipo:"frio",nombre:"cian",clasificacion:"secundario"},
    {tipo:"frio",nombre:"magenta",clasificacion:"secundario"},
    {tipo:"calido",nombre:"amarillo",clasificacion:"secundario"}
  ];
}
