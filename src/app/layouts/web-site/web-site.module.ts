
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Log } from '@app/shared/utilities/log';

import { WebSiteNavTopComponent } from '@app/layouts/web-site/web-site-nav-top/web-site-nav-top.component';
import { WebSiteContentComponent } from '@app/layouts/web-site/web-site-content/web-site-content.component';

import { WebSiteComponent } from '@app/layouts/web-site/web-site.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    WebSiteNavTopComponent,
    WebSiteContentComponent,
    WebSiteComponent
  ],
  providers: [
    
  ],
  exports: [
    WebSiteComponent
  ]
})
export class LayoutWebSiteModule { 

  constructor(private log: Log) { 
    this.log.info("LayoutWebSiteModule -> constructor: ", this);
  }
  
}
