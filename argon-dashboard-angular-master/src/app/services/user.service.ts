import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  // public usserLogged:User;
  // private isUserLoggedIn;

  constructor(private http: HttpClient) { 
    // this.isUserLoggedIn = false;
    
  }

  // setUserLoggedIn(user:User) {
  //   this.isUserLoggedIn = true;
  //   this.usserLogged = user;
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  
  // }

  // getUserLoggedIn() {
  // 	return JSON.parse(localStorage.getItem('currentUser'));
  // }

  // public url_servidor = "";

	// public postFileImagen(imagenParaSubir: File){

	// 	const formData = new FormData(); 
	// 	formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name); 
	// 	return this.http.post(this.url_servidor, formData);

  // }
  
 getAll() {
    return this.http.get<User[]>(`${environment.apiBaseUrl}secure`);
}

getById(id: number) {
    return this.http.get(`${environment.apiBaseUrl}/users/${id}`);
}

register(user: User) {
    return this.http.post(`${environment.apiBaseUrl}/users/register`, user);
}

update(user: User) {
    return this.http.put(`${environment.apiBaseUrl}/users/${user.id}`, user);
}

delete(id: number) {
    return this.http.delete(`${environment.apiBaseUrl}/users/${id}`);
}
}