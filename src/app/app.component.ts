
import { Component, OnInit } from '@angular/core';

import { Log } from './shared/utilities/log';

@Component({
	selector: 'app-root',
	template: `
		<router-outlet></router-outlet>
	`,
	styles: [`  `],
})
export class AppComponent implements OnInit {

  constructor(private log: Log) { 
    this.log.debug("AppComponent -> constructor: ", this);
  }

  ngOnInit() {
    this.log.debug("AppComponent -> ngOnInit: ", this);
  }

  ngOnDestroy(){
    this.log.debug("AppComponent -> ngOnDestroy: ", this);
  }

}
