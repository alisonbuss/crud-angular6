
import { 
  Component, 
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

import { Log } from '@app/shared/utilities/log';

@Component({
  selector: 'site-home',
  templateUrl: './site-home.component.html',
  styleUrls:  ['./site-home.component.css']
})
export class SiteHomeComponent implements OnChanges,
                                          OnInit,
                                          DoCheck,
                                          AfterContentInit,
                                          AfterContentChecked,
                                          AfterViewInit,
                                          AfterViewChecked,
                                          OnDestroy {

  @Input()
  titlePage: string = "Hello World!!! O/";

  constructor(private log: Log) { 
    this.log.info("SiteHomeComponent -> constructor: ", this);
  }

  ngOnChanges() {
    this.log.info("SiteHomeComponent -> ngOnChanges: ", this);
  }

  ngOnInit() {
    this.log.info("SiteHomeComponent -> ngOnInit: ", this);
  }

  ngDoCheck() {
    this.log.info("SiteHomeComponent -> ngDoCheck: ", this);
  }

  ngAfterContentInit() {
    this.log.info("SiteHomeComponent -> ngAfterContentInit: ", this);
  }

  ngAfterContentChecked() {
    this.log.info("SiteHomeComponent -> ngAfterContentChecked: ", this);
  }

  ngAfterViewInit() {
    this.log.info("SiteHomeComponent -> ngAfterViewInit: ", this);
  }

  ngAfterViewChecked() {
    this.log.info("SiteHomeComponent -> ngAfterViewChecked: ", this);
  }

  ngOnDestroy(){
    this.log.info("SiteHomeComponent -> ngOnDestroy: ", this);
  }

}
