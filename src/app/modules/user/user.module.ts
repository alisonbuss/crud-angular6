
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserPageComponent } from './user-page/user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

import { LayoutWebSiteModule } from '../../layouts/web-site/web-site.module';
import { ComponentsModule } from '../../shared/components/components.module';

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


  
}
