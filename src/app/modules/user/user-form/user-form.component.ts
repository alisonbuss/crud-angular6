
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Log } from '@app/shared/utilities/log';

import { User } from '@app/models/user.model';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls:  ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private idUser: number;
  private model: User = new User();
  private isForUpdate: boolean = false;
  private routeRecord: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UserService,
    private log: Log) { 
    
    this.log.info("UserFormComponent -> constructor: ", this);
  }

  public ngOnInit(): void {
    this.log.info("UserFormComponent -> ngOnInit: ", this);
    
    this.routeRecord = this.route.params.subscribe(
      (params: any) => {
        if(Object.keys(params).length !== 0) {
          this.idUser = params['id'];
          this.userService.getUserById(this.idUser).subscribe(
            data => {
              this.model = data;
              this.isForUpdate = true;
            },
            error => {
              this.log.info("UserFormComponent -> ngOnInit: Error: UserFormComponent.ngOnInit()", error);
              this.router.navigate(['/not-found']);
            }
          );
        } 
      }
    );
  }

  public newRegister(form: FormGroup) {
    this.userService.createUser(this.model).subscribe(
      data => {
          this.log.info("UserFormComponent -> newRegister: POST Request is successful ", data);
          alert("Register successfully, redirecting to the Users!");
          this.router.navigate(['/users']);
      },
      error => {
          this.log.info("UserFormComponent -> newRegister: Error", error);
      }
    );     
  }

  public editRegister(form: FormGroup) {
    this.log.info("UserFormComponent -> editRegister: ", form);
    if(form.valid) {
      this.log.info("UserFormComponent -> editRegister: Form Valid!!");
      this.log.info("UserFormComponent -> editRegister: ", this.model);
      this.userService.updateUser(this.model).subscribe(
        data => {
            this.log.info("UserFormComponent -> editRegister: PUT Request is successful ", data);
            alert("Register successfully, redirecting to the Users!");
            this.router.navigate(['/users']);
        },
        error => {
            this.log.info("UserFormComponent -> editRegister: Error", error);
        }
      );     
    } else {
      this.log.info("UserFormComponent -> editRegister: Form Invalid!!");
      this.log.info("UserFormComponent -> editRegister: ", this.model);
    }
  }

  public onSubmitRegister(form: FormGroup) {
    this.log.info("UserFormComponent -> onSubmitRegister: ", form);
    if(form.valid && !this.isForUpdate) {
      this.newRegister(form);
    } 
    else if(form.valid && this.isForUpdate) {
      this.editRegister(form);
    } else {
      this.log.info("UserFormComponent -> onSubmitRegister: Form Invalid!!");
      this.log.info("UserFormComponent -> onSubmitRegister: ", this.model);
    }
  }

  public ngOnDestroy(): void {
    this.log.info("UserFormComponent -> ngOnDestroy: ", this);
    this.routeRecord.unsubscribe();
  }

}