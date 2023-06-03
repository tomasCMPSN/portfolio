import { Component } from '@angular/core';
import proyectosData from './proyectos.json'

interface Proyecto {
  id: Number,
  title: String,
  description: String,
  framework1: String,
  framework2: String,
  demoLink: String,
  codeLink: String,
  img: String
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyecto[] = proyectosData
}
