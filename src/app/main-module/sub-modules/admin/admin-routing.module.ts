import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminCommissionManuallyComponent } from './components/admin-commission-manually/admin-commission-manually.component';
import { AdminInvoiceComponent } from './components/admin-invoice/admin-invoice.component';


const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "panel",
                component: AdminPanelComponent
            },
            {
                path: "admin-commission",
                component: AdminCommissionManuallyComponent
            },
            {
                path: "admin-invoice",
                component: AdminInvoiceComponent
            }
        ]
    }
];



@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
}) export class AdminRoutingModule {}




