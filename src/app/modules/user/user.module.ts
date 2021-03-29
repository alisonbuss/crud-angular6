
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Log } from '@app/shared/utilities/log';

import { UserPageComponent } from '@app/modules/user/user-page/user-page.component';
import { UserListComponent } from '@app/modules/user/user-list/user-list.component';
import { UserDetailComponent } from '@app/modules/user/user-detail/user-detail.component';
import { UserFormComponent } from '@app/modules/user/user-form/user-form.component';

import { LayoutWebSiteModule } from '@app/layouts/web-site/web-site.module';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    LayoutWebSiteModule
  ],
  declarations: [
    UserPageComponent,
    UserListComponent,
    UserDetailComponent, 
    UserFormComponent
  ],
  providers: [
    
  ],
  exports: [
    UserPageComponent,
    UserListComponent,
    UserDetailComponent, 
    UserFormComponent
  ]
})
export class UserModule { 

  constructor(private log: Log) { 
    this.log.info("UserModule -> constructor: ", this);
  }
  
}
