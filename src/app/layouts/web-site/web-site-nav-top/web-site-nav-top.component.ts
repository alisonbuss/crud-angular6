
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lws-nav-top',
  templateUrl: './web-site-nav-top.component.html',
  styleUrls:  ['./web-site-nav-top.component.css']
})
export class WebSiteNavTopComponent implements OnInit {

  private themeNavbar: string = "navbar-dark bg-primary";

  public constructor() { 
    
  }

  public ngOnInit(): void {

  }

  public onChangeTheme(theme: string): boolean {
    this.themeNavbar = theme;
    return false;
  }

}
