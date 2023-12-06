import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: any;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  ingreso(){
    let envio: NavigationExtras = {
      state: {usuario: this.usuario}
      };
    console.log(this.usuario)      
    this.router.navigate(['/home'],envio)
  }

  restablecer(){
    this.router.navigate(['/restablecer'])
  }

}
