import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  crearTorneo() {
    this.router.navigateByUrl("crear-torneo")
  }

  verTorneo() {
    this.router.navigateByUrl("ver-torneo")
  }
}
