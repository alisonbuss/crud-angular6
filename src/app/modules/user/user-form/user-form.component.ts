
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

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
    private userService: UserService) { 
    
  }

  public ngOnInit(): void {
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
              console.log("Error: UserFormComponent.ngOnInit()", error);
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
          console.log("POST Request is successful ", data);
          alert("Register successfully, redirecting to the Users!");
          this.router.navigate(['/users']);
      },
      error => {
          console.log("Error", error);
      }
    );     
  }

  public editRegister(form: FormGroup) {
    console.log(form);
    if(form.valid) {
      console.log("Form Valid!!");
      console.log(this.model);
      this.userService.updateUser(this.model).subscribe(
        data => {
            console.log("PUT Request is successful ", data);
            alert("Register successfully, redirecting to the Users!");
            this.router.navigate(['/users']);
        },
        error => {
            console.log("Error", error);
        }
      );     
    } else {
      console.log("Form Invalid!!");
      console.log(this.model);
    }
  }

  public onSubmitRegister(form: FormGroup) {
    console.log(form);
    if(form.valid && !this.isForUpdate) {
      this.newRegister(form);
    } 
    else if(form.valid && this.isForUpdate) {
      this.editRegister(form);
    } else {
      console.log("Form Invalid!!");
      console.log(this.model);
    }
  }

  public ngOnDestroy(): void {
    this.routeRecord.unsubscribe();
  }

}