
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app.routing.module';

import { Log } from '@app/shared/utilities/log';

import { PipesModule } from '@app/shared/pipes/pipes.module';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { LayoutWebSiteModule } from '@app/layouts/web-site/web-site.module';

import { SiteModule } from '@app/modules/site/site.module';

import { UserModule } from '@app/modules/user/user.module';
import { UserService } from '@app/services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    DirectivesModule,
    ComponentsModule,
    LayoutWebSiteModule,
    SiteModule,
    UserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Log, UserService, { 
      provide: LOCALE_ID, useValue: 'en-US' //'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private log: Log) { 
    this.log.info("AppModule -> constructor: ", this);
  }

}
