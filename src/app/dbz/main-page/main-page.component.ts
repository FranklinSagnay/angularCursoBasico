import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  nuevo:Personaje={nombre:"luis",poder:15}
  // para obtener los datos del serviio (esto es ejemplo)
  // get personajes():Personaje[] {
  //     return this.dbzService.personajes;
  // }
  // agregarNuevoPersonaje(argument:Personaje){
  //   console.log(argument);
  //   // this.personajes.push(argument);
  // }

  // inyeccion de dependencia del servicio
  constructor(private dbzService:DbzService){
  }

}
