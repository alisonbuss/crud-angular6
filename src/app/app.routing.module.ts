
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Log } from '@app/shared/utilities/log';

import { UserListComponent } from '@app/modules/user/user-list/user-list.component';
import { UserFormComponent } from '@app/modules/user/user-form/user-form.component';
import { UserDetailComponent } from '@app/modules/user/user-detail/user-detail.component';

import { SiteHomeComponent } from '@app/modules/site/site-home/site-home.component';
import { SiteNotFoundComponent } from '@app/modules/site/site-not-found/site-not-found.component';

const APP_ROUTES_STATIC: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users/:id/edit', component: UserFormComponent },
  { path: 'not-found', component: SiteNotFoundComponent },
  { path: '', component : SiteHomeComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES_STATIC, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private log: Log) { 
    this.log.info("AppRoutingModule -> constructor: ", this);
  }
    
}