import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext'
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  exports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    DialogModule
  ]
})
export class PrimengModule { }
