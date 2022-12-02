import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InquiriesComponent } from './pages/inquiries/inquiries.component';
import { PaymentRecordComponent } from './pages/payment-record/payment-record.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "payment-record",
    component: PaymentRecordComponent,
  },
  {
    path: "inquiries",
    component: InquiriesComponent,
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
