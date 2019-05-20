import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private Router:Router, private loginService: LoginService, private userService: UserService, private Aunten: AuthenticationService) {}

  user = new User()
  
  ngOnInit() {

  }
    onSubmit() {
  
      // Calls service to login user to the api rest
      this.Aunten.login(this.user.username, this.user.password)
      .subscribe(
        res => {       
          this.Router.navigateByUrl('/dashboard')
        },
        error => {
          console.error(error);
  
        },
      );
  
    }
  
    navigate() {    
      this.Router.navigateByUrl('/login');
    }

  CrearCuenta() {
    this.Router.navigateByUrl('/register')
  }

}
