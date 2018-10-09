
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteNotFoundComponent } from './site-not-found/site-not-found.component';

import { LayoutWebSiteModule } from '../../layouts/web-site/web-site.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutWebSiteModule
  ],
  declarations: [
    SiteHomeComponent,
    SiteNotFoundComponent
  ],
  providers: [
    
  ],
  exports: [
    SiteHomeComponent,
    SiteNotFoundComponent
  ]
})
export class SiteModule { 


  
}
