import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private Router:Router, private loginService: LoginService, private userService: UserService) {}

  user = new User()

  ngOnInit() {

  }
    onSubmit(form) {
  
      // Calls service to login user to the api rest
      this.loginService.login(form).subscribe(
  
        res => {       
          this.userService.setUserLoggedIn(form);
  
        },
        error => {
          console.error(error);
  
        },
        () => this.navigate()
      );
  
    }
  
    navigate() {    
      this.Router.navigateByUrl('/home');
    }

  CrearCuenta() {
    this.Router.navigateByUrl('/register')
  }

}
