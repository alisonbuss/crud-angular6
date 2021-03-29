
import { Component, OnInit } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls:  ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private log: Log) { 
    this.log.info("UserPageComponent -> constructor: ", this);
  }

  ngOnInit() {
    this.log.info("UserPageComponent -> ngOnInit: ", this);
  }

  ngOnDestroy(){
    this.log.info("UserPageComponent -> ngOnDestroy: ", this);
  }

}
