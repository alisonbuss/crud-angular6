
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { PipesModule } from './shared/pipes/pipes.module';
import { DirectivesModule } from './shared/directives/directives.module';
import { ComponentsModule } from './shared/components/components.module';
import { LayoutWebSiteModule } from './layouts/web-site/web-site.module';
import { SiteModule } from './modules/site/site.module';
import { AppRoutingModule } from './app.routing.module';

import { Log } from './shared/utilities/log';

import { UserService } from './services/user.service';
import { UserModule } from './modules/user/user.module';

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

    constructor() { 
        console.log("AppModule --> constructor");
    }

}
