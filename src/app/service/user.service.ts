
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user.model";
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  private readonly API = `${environment.API}/users`;

  constructor(private http: HttpClient) {

  }

  getUsers() {
    return this.http.get<User[]>(this.API);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.API + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.API, user);
  }

  updateUser(user: User) {
    return this.http.put(this.API + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.API + '/' + id);
  }
  
}
