import { Injectable } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 11000,
    },
  ];
  get personajeGet(): Personaje[] {
    return [...this.personajes]; //llaves por arreglo, ... porque es el operador spread
    //separa los elementos independientes del arreglo
  }
  constructor() {}

  agregarPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }
}
