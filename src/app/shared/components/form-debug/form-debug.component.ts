
import { Component, OnInit, Input } from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'comp-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls:  ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form;

  constructor(private log: Log) { 
    this.log.info("FormDebugComponent -> constructor: ", this);
  }

  ngOnInit() {
    this.log.info("FormDebugComponent -> ngOnInit: ", this);
  }

  ngOnDestroy(){
    this.log.info("FormDebugComponent -> ngOnDestroy: ", this);
  }

}