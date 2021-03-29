
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Log } from '@app/shared/utilities/log';

import { SiteHomeComponent } from '@app/modules/site/site-home/site-home.component';
import { SiteNotFoundComponent } from '@app/modules/site/site-not-found/site-not-found.component';

import { LayoutWebSiteModule } from '@app/layouts/web-site/web-site.module';

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

  constructor(private log: Log) { 
    this.log.info("SiteModule -> constructor: ", this);
  }

  
}
