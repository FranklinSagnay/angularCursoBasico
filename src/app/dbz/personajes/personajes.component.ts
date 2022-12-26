import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  ngOnInit(): void {
  }

  // @Input() personajes:Personaje[] = [];
  get personajes() {
      return this.dbzService.personajeGet;
  }
  constructor(private dbzService:DbzService){}
}
