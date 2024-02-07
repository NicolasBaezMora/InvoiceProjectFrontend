import { SanctionablePipe } from './utils/sanctionable.pipe';
import { AddInvoiceCardComponent } from './sub-modules/admin/components/add-invoice-card/add-invoice-card.component';
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
import { CardConsultComponent } from './components/card-consult/card-consult.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogAuthInquirePaymentsComponent } from './components/dialog-auth-inquire-payments/dialog-auth-inquire-payments.component';
import { DialogAuthInquireWalletComponent } from './components/dialog-auth-inquire-wallet/dialog-auth-inquire-wallet.component';
import { DialogAuthInquireCommissionsComponent } from './components/dialog-auth-inquire-commissions/dialog-auth-inquire-commissions.component';
import { TablePaymentsComponent } from './components/table-payments/table-payments.component';
import { WalletViewComponent } from './components/wallet-view/wallet-view.component';
import { TableCommissionsComponent } from './components/table-commissions/table-commissions.component';
import { AdminPanelComponent } from './sub-modules/admin/components/admin-panel/admin-panel.component';
import { AdminCommissionManuallyComponent } from './sub-modules/admin/components/admin-commission-manually/admin-commission-manually.component';
import { AdminInvoiceComponent } from './sub-modules/admin/components/admin-invoice/admin-invoice.component';
import { CustomIconComponent } from './components/custom-icon/custom-icon.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AdminComponent,
    PaymentRecordComponent,
    InquiriesComponent,
    MyCustomSpinnerComponent,
    CardConsultComponent,
    DialogAuthInquirePaymentsComponent,
    DialogAuthInquireWalletComponent,
    DialogAuthInquireCommissionsComponent,
    TablePaymentsComponent,
    WalletViewComponent,
    TableCommissionsComponent,
    AdminPanelComponent,
    AdminCommissionManuallyComponent,
    AdminInvoiceComponent,
    AddInvoiceCardComponent,
    CustomIconComponent,
    SanctionablePipe,
    DateFilterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class MainModule { }
