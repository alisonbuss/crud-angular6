
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebSiteNavTopComponent } from './web-site-nav-top/web-site-nav-top.component';
import { WebSiteContentComponent } from './web-site-content/web-site-content.component';

import { WebSiteComponent } from './web-site.component';

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


  
}
