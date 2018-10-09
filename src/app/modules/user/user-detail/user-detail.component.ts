
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls:  ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private idUserEdit: number;
  private user: User;
  private routeRecord: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { 
    
  }

  public ngOnInit(): void {
    this.routeRecord = this.route.params.subscribe(
      (params: any) => {
        this.idUserEdit = params['id'];
        this.userService.getUserById(this.idUserEdit).subscribe(
          data => {
            this.user = data;
          },
          error => {
            console.log("Error: UserDetailComponent.ngOnInit()", error);
            this.router.navigate(['/not-found']);
          }
        );
      }
    );
  }

  public ngOnDestroy(): void {
    this.routeRecord.unsubscribe();
  }

}
