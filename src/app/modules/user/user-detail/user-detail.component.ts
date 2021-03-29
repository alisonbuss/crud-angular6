
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Log } from '@app/shared/utilities/log';

import { User } from '@app/models/user.model';
import { UserService } from '@app/services/user.service';

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
    private userService: UserService,
    private log: Log) { 
    
    this.log.info("UserDetailComponent -> constructor: ", this);
  }

  public ngOnInit(): void {
    this.log.info("UserDetailComponent -> ngOnInit: ", this);

    this.routeRecord = this.route.params.subscribe(
      (params: any) => {
        this.idUserEdit = params['id'];
        this.userService.getUserById(this.idUserEdit).subscribe(
          data => {
            this.user = data;
          },
          error => {
            this.log.info("UserDetailComponent -> ngOnInit: Error)", error);
            this.router.navigate(['/not-found']);
          }
        );
      }
    );
  }

  public ngOnDestroy(): void {
    this.log.info("UserDetailComponent -> ngOnDestroy: ", this);
    this.routeRecord.unsubscribe();
  }

}
