
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
	selector: 'app-root',
	template: `
		<router-outlet></router-outlet>
	`,
	styles: [`  `],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private log: Log) { 
    this.log.info("AppComponent -> constructor: ", this);
  }

  ngOnInit() {
    this.log.info("AppComponent -> ngOnInit: ", this);
  }

  ngOnDestroy(){
    this.log.info("AppComponent -> ngOnDestroy: ", this);
  }

}
  