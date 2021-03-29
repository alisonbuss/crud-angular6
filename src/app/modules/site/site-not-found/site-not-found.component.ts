
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'site-not-found',
  templateUrl: './site-not-found.component.html',
  styleUrls:  ['./site-not-found.component.css']
})
export class SiteNotFoundComponent implements OnInit {

  private routeRecord: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private log: Log) { 
    this.log.info("SiteNotFoundComponent -> constructor: ", this);
  }

  ngOnInit() {
    this.log.info("SiteNotFoundComponent -> ngOnInit: ", this);
    this.routeRecord = this.route.params.subscribe(
      (params: any) => {
        console.log(params);
      }
    );
  }

  ngOnDestroy(){
    this.log.info("SiteNotFoundComponent -> ngOnDestroy: ", this);
    this.routeRecord.unsubscribe();
  }

}