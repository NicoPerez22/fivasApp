import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  user = new User()

  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.postUser(this.user)
    .subscribe(
      res => {
        console.log(this.user)

        this.router.navigate(['dashboard'])
      },
      err => {
        console.log("entre por aca")
/*
        if (err.status === 422) {
          console.log(this.user)
        }
        else
           'Something went wrong.Please contact admin.';  */
      }
  );
  }

}
