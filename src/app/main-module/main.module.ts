import { PrimengModule } from './../primeng/primeng.module';

import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { PaymentRecordComponent } from './pages/payment-record/payment-record.component';
import { InquiriesComponent } from './pages/inquiries/inquiries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCustomSpinnerComponent } from './components/my-custom-spinner/my-custom-spinner.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HomePageComponent,
    AdminComponent,
    PaymentRecordComponent,
    InquiriesComponent,
    MyCustomSpinnerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MainModule { }
