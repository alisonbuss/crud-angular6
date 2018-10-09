
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls:  ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users$: Observable<User[]>;
  private page: number = 0;
  private routeRecord: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { 
    
  }

  public ngOnInit(): void {
    console.log("UserListComponent --> ngOnInit");

    // this.userService.getUsers().subscribe(users => this.users = users);
    this.users$ = this.userService.getUsers();

    this.routeRecord = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    );
  }

  public onDelete(user: User): void {
    this.userService.deleteUser(user.id).subscribe(data => {
        this.users$ = this.users$.pipe(map(
            users => users.filter((u) => u !== user)
        ));
    });
  }

  public onNextPage(): void {
    this.page++;
    this.router.navigate(['/users'], {queryParams: {
      'page': this.page
    }});
  }

  public ngOnDestroy(): void {
    console.log("UserListComponent --> ngOnDestroy");
    this.routeRecord.unsubscribe();
  }

}
