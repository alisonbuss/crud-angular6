
import { Component, OnInit } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'lws-content',
  templateUrl: './web-site-content.component.html',
  styleUrls:  ['./web-site-content.component.css']
})
export class WebSiteContentComponent implements OnInit {

  constructor(private log: Log) { 
    this.log.info("WebSiteContentComponent -> constructor: ", this);
  }

  public ngOnInit(): void {
    this.log.info("WebSiteContentComponent -> ngOnInit: ", this);
  }

  public ngOnDestroy(): void {
    this.log.info("WebSiteContentComponent -> ngOnDestroy: ", this);
  }

}
