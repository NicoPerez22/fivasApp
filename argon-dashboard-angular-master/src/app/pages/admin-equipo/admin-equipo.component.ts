import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-equipo',
  templateUrl: './admin-equipo.component.html',
  styleUrls: ['./admin-equipo.component.scss']
})
export class AdminEquipoComponent implements OnInit {

  public respuestaImagenEnviada;
  public resultadoCarga;

  constructor(private enviandoImagen: UserService, private router:Router) { }

  ngOnInit() {
  }

  public cargandoImagen(files: FileList){

		this.enviandoImagen.postFileImagen(files[0]).subscribe(

			response => {
				this.respuestaImagenEnviada = response; 
				if(this.respuestaImagenEnviada <= 1){
					console.log("Error en el servidor"); 
				}else{

					if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success"){

						this.resultadoCarga = 1;

					}else{
						this.resultadoCarga = 2;
					}

				}
			},
			error => {
				console.log(<any>error);
			}

		);//FIN DE METODO SUBSCRIBE

    }
	currentJustify = 'justified';
	
	reportar() {
		this.router.navigateByUrl('/reportes')
	}

}
