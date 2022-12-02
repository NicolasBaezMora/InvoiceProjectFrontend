import { PrimengModule } from './../primeng/primeng.module';

import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { PaymentRecordComponent } from './pages/payment-record/payment-record.component';
import { InquiriesComponent } from './pages/inquiries/inquiries.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AdminComponent,
    PaymentRecordComponent,
    InquiriesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
