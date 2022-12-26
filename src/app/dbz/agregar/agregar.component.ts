import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {


  ngOnInit(): void {}

  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  constructor(private dbzService:DbzService){

  }
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();  //para emitir cosas
  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    } else {
      this.dbzService.agregarPersonaje(this.nuevo)
      // this.onNuevoPersonaje.emit(this.nuevo);
      this.nuevo = { nombre: '', poder: 0 };
      // debugger;  //para hacer breakpoints
    }
  }
}
