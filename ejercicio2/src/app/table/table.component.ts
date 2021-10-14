import { Component, OnInit } from '@angular/core';



export interface Alumno {
  Nombre: string;
  Curso: number;
  Apellidos: string;
  Edad: number;
}

const ELEMENT_DATA: Alumno[] = [
  {Curso: 1, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 2, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 3, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 4, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 5, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 6, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 7, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 8, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 9, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
  {Curso: 10, Nombre: 'Juan Carlos', Apellidos: 'Ardana', Edad: 1},
];

/**
 * @title Basic use of `<table mat-table>`
 */




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellidos','Curso', 'Edad', 'Acciones'];
  dataSource = ELEMENT_DATA;
  displayedColumnBackup: string[] = ['Nombre', 'Apellidos','Curso', 'Edad', 'Acciones'];

  constructor() { }

  ngOnInit(): void {

  }
  columnaInvisible(event: any, columnaInvisible:string){
    if (event.checked == false) {

      let index = this.displayedColumns.indexOf(columnaInvisible);
      if (-1 !== index) {
        this.displayedColumns.splice(index, 1)
      }
      
    }else{
      
      let indexUwU = this.displayedColumnBackup.indexOf(columnaInvisible);

      this.displayedColumns = [...this.displayedColumns.slice(0,indexUwU),this.displayedColumnBackup[indexUwU],...this.displayedColumns.slice(indexUwU)]
    }

  }

}
