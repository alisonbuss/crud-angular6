
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { environment } from '@app/environments/environment';

import { Log } from '@app/shared/utilities/log';

import { User } from '@app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = `${environment.API}/users`;

  constructor(private http: HttpClient, private log: Log) { 
    this.log.info("UserService -> constructor: ", this);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API).pipe(
      delay(1000),
      tap(console.log)
    );
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.API + '/' + id).pipe(
      delay(900),
      tap(console.log)
    );
  }

  public getUserByEmail(email: string): Observable<User[]> {
    let query = `?email=${email}`;
    return this.http.get<User[]>(this.API + query);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.API + '/' + user.id, user);
  }

  public deleteUser(id: number): Observable<{}> {
    return this.http.delete(this.API + '/' + id);
  }
  
}