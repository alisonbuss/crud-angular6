
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'ly-web-site',
  templateUrl: './web-site.component.html',
  styleUrls:  ['./web-site.component.css']
})
export class WebSiteComponent implements OnInit, OnDestroy {

  constructor(private log: Log) { 
    this.log.info("WebSiteComponent -> constructor: ", this);
  }

  public ngOnInit(): void {
    this.log.info("WebSiteComponent -> ngOnInit: ", this);
  }

  public ngOnDestroy(): void {
    this.log.info("WebSiteComponent -> ngOnDestroy: ", this);
  }

}
