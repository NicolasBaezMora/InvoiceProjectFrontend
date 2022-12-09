import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { InvoiceDTO } from 'src/app/main-module/interfaces/InvoiceDTO';
import { InvoiceService } from 'src/app/main-module/services/invoice.service';

@Component({
  selector: 'app-admin-invoice',
  templateUrl: './admin-invoice.component.html',
  styleUrls: ['./admin-invoice.component.scss']
})
export class AdminInvoiceComponent implements OnInit {

  @ViewChild("paginator")
  public paginator?: Paginator;

  public invoices: InvoiceDTO[] = [];

  public selectedValue: string = "pending";

  public totalInvoices: number = 0;

  public page: number = 0;

  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    this.getPendingInvoices(this.page);
  }

  public switchPending() {
    this.page = 0;
    this.paginator?.changePage(this.page);
    this.getPendingInvoices(this.page);
  }

  public switchPaid() {
    this.page = 0;
    this.paginator?.changePage(this.page);
    this.getPaidInvoices(this.page);
  }

  public getPendingInvoices(page: number) {
    this.invoiceService.getPendingInvoices(page).subscribe(
      data => {
        this.invoices = data.body.data;
        this.totalInvoices = data.body.total;
      }
    );
  }

  public getPaidInvoices(page: number) {
    this.invoiceService.getPaidInvoices(page).subscribe(
      data => {
        this.invoices = data.body.data;
        this.totalInvoices = data.body.total;
      }
    );
  }


  public paginatorChange(event: any) {
    switch(this.selectedValue) {
      case "pending": 
        this.getPendingInvoices(event.page);
      break;
      case "paid": 
        this.getPaidInvoices(event.page);
      break;
    }
  }

  public adminOut() {
    window.localStorage.clear();
    this.router.navigate(["/admin"]);
  }

}
