import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  exports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule
  ]
})
export class PrimengModule { }
