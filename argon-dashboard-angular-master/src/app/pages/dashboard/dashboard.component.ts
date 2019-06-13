import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { decode } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  user: User;
  users: User[];
  token;
  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
    this.users = new Array<User>();
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(resp => {
          this.token = resp.token
        console.log(this.token)
        const decoded: any = jwt_decode(this.token); 
        console.log(decoded)
        this.users.push(decoded.user);
        this.user = decoded.user

      });
  }

  ngOnInit() {
        this.loadAllUsers();

  }

//   deleteUser(id: number) {
//       this.userService.delete(id).pipe(first()).subscribe(() => {
//           this.loadAllUsers()
//       });
//   }

 loadAllUsers() {
  this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });
}
}
