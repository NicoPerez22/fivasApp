import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  selecjugadores = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  
  seleccionarJugador() {
    this.selecjugadores = true;
  }

  reporteConfirmado() {
    this.router.navigateByUrl("/admin-equipo")
  }
}
