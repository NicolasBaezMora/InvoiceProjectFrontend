import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext'
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  exports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    DialogModule,
    CardModule,
    PaginatorModule,
    TableModule,
    RadioButtonModule
  ]
})
export class PrimengModule { }
