import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuarioRecibido: any;

  constructor(private router:Router, private rutaActiva:ActivatedRoute) {
    this.rutaActiva.paramMap.subscribe(params => {
      if (window.history.state.usuario) {
        this.usuarioRecibido = window.history.state.usuario;
      }
    });
  }

  viaje(){
  }

  volver(){
    this.router.navigate(['/login'])
  }

}
