import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { InquireView } from 'src/app/main-module/interfaces/InquireView';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  
  public inquires: InquireView[] = [
    {
      imgUrl: "../../../../../assets/admin-invoice.png",
      textCard: "Administrar facturas",
      inquireType: "adminInvoices"
    },
    {
      imgUrl: "../../../../../assets/admin-commission.jpg",
      textCard: "Gestionar comisiones manualmente",
      inquireType: "adminCommissions"
    }
  ];

  constructor(
    private router: Router
  ) {

  }

  public redirect(event: any) {
    switch(event) {
      case "adminInvoices":
        this.router.navigate(["/admin-panel/admin-invoice"]);
        
        break;
        case "adminCommissions":
        this.router.navigate(["/admin-panel/admin-commission"]);

      break;
    }
  }

  public adminOut() {
    window.localStorage.clear();
    this.router.navigate(["/admin"]);
  }

}
