
import { Component, OnInit } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'lws-nav-top',
  templateUrl: './web-site-nav-top.component.html',
  styleUrls:  ['./web-site-nav-top.component.css']
})
export class WebSiteNavTopComponent implements OnInit {

  private themeNavbar: string = "navbar-dark bg-primary";

  constructor(private log: Log) { 
    this.log.info("WebSiteNavTopComponent -> constructor: ", this);
  }

  public ngOnInit(): void {
    this.log.info("WebSiteNavTopComponent -> ngOnInit: ", this);
  }

  public ngOnDestroy(): void {
    this.log.info("WebSiteNavTopComponent -> ngOnDestroy: ", this);
  }

  public onChangeTheme(theme: string): boolean {
    this.themeNavbar = theme;
    return false;
  }

}
