
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Log } from '../utilities/log';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  providers: [
  
  ],
  exports: [

  ]
})
export class DirectivesModule { 

  constructor(private log: Log) { 
    this.log.info("DirectivesModule -> constructor: ", this);
  }
  
}
