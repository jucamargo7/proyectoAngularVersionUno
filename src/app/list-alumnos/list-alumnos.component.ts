import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../Interfaz/estudiantes-lista';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent {
  estudiantes: Estudiante [] = [
    new Estudiante(1, "Juan", "Camargo", "juanpablo9911@hotmailcom", false),
    new Estudiante(1, "Camilo", "Manjarrez", "camilo_m@hotmailcom", true),
    new Estudiante(1, "Daniel", "Alzate", "dani-alzate@hotmailcom", false),
    new Estudiante(1, "Javier", "Cardenas", "javicardenas@hotmailcom", true),
  ];
  displayedColumns = ["id", "nombre", "apellido", "correo", "estado"];

}
