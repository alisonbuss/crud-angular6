
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Log } from '../utilities/log';

import { FormDebugComponent } from '@app/shared/components/form-debug/form-debug.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent
  ],
  providers: [
  
  ],
  exports: [
    FormDebugComponent
  ]
})
export class ComponentsModule { 

  constructor(private log: Log) { 
    this.log.info("ComponentsModule -> constructor: ", this);
  }

}
