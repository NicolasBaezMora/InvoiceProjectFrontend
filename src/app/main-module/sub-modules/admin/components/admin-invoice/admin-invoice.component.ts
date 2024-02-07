import { DateRange } from './../../../../interfaces/DateRange';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { InvoiceDTO } from 'src/app/main-module/interfaces/InvoiceDTO';
import { InvoiceService } from 'src/app/main-module/services/invoice.service';
import { DateFilterComponent } from 'src/app/main-module/components/date-filter/date-filter.component';

@Component({
  selector: 'app-admin-invoice',
  templateUrl: './admin-invoice.component.html',
  styleUrls: ['./admin-invoice.component.scss']
})
export class AdminInvoiceComponent implements OnInit {

  @ViewChild("paginator")
  public paginator?: Paginator;

  @ViewChild(DateFilterComponent)
  public dateFilterComponentChild?: DateFilterComponent;

  public invoices: InvoiceDTO[] = [];

  public selectedValue: string = "pending";

  public totalInvoices: number = 0;

  public page: number = 0;

  public display: boolean = false;

  public filterActive: boolean = false;

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
    this.filterActive = false;
    this.dateFilterComponentChild?.resetAccordionState();
  }

  public switchPaid() {
    this.page = 0;
    this.paginator?.changePage(this.page);
    this.getPaidInvoices(this.page);
    this.filterActive = false;
    this.dateFilterComponentChild?.resetAccordionState();
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
    switch (this.selectedValue) {
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

  public openAddInvoiceDialog() {
    this.display = true;
  }

  public closeDialog(event: boolean) {
    this.display = false;
  }

  public handleDateRange(dateRange: DateRange) {
    this.filterActive = true;
    switch (this.selectedValue) {
      case "pending":
        this.invoiceService.getPendingInvoicesByDateRange(dateRange).subscribe(
          data => {
            this.invoices = data.body;
            this.totalInvoices = this.invoices.length;
          }
        );
        break;
      case "paid":
        this.invoiceService.getPaidInvoicesByDateRange(dateRange).subscribe(
          data => {
            this.invoices = data.body;
            this.totalInvoices = this.invoices.length;
          }
        );
        break;
    }

  }

  public handleQuitFilter() {
    switch (this.selectedValue) {
      case "pending":
        this.getPendingInvoices(this.page);
        this.filterActive = false;
        break;
      case "paid":
        this.getPaidInvoices(this.page);
        this.filterActive = false;
        break;
    }
  }

}
