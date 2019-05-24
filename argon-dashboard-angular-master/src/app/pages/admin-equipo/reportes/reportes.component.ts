import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  selecjugadores = false;

  constructor() { }

  ngOnInit() {
  }


  seleccionarJugador() {
    this.selecjugadores = true;
  }
}
