import { DateFilterComponent } from 'src/app/main-module/components/date-filter/date-filter.component';
import { DateRange } from './../../interfaces/DateRange';
import { PaymentService } from './../../services/payment.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { WrapperResponse } from '../../interfaces/WrapperResponse';
import { ResponseData } from '../../interfaces/ResponseData';
import { PaymentDTO } from '../../interfaces/PaymentDTO';
import Swal from 'sweetalert2';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.scss']
})
export class TablePaymentsComponent implements OnInit {

  @ViewChild("paginator")
  public paginator?: Paginator;

  @ViewChild(DateFilterComponent)
  public dateFilterComponentChild?: DateFilterComponent;

  @Input()
  public hash: string = "";

  public validData: boolean = true;

  public errorMessage: string = "";

  private page: number = 0;

  public selectedValue: string = "c";

  public payments: PaymentDTO[] = [];

  public totalPayments: number = 0;

  public filterActive: boolean = false;

  constructor(
    private paymentService: PaymentService
  ) {

  }

  public switchConsistent() {
    this.page = 0;
    this.paginator?.changePage(this.page);
    this.getConsistents(this.page);
    this.filterActive = false;
    this.dateFilterComponentChild?.resetAccordionState();
  }

  public switchInconsistent() {
    this.page = 0;
    this.paginator?.changePage(this.page);
    this.getInconsistents(this.page);
    this.filterActive = false;
    this.dateFilterComponentChild?.resetAccordionState();
  }

  ngOnInit(): void {
    this.getConsistents(this.page);
  }

  public getConsistents(page: number) {
    this.paymentService.getConsistentPayments(this.hash, page).subscribe(
      {
        next: data => {
          this.validData = data.ok!;
          this.payments = data.body!.data;
          this.totalPayments = data.body.total;
        },
        error: err => {
          console.log(err);
          this.validData = false;
          this.errorMessage = err.error.message;
        
        },
        complete: () => {

        }
      }
    );
  }

  public getInconsistents(page: number) {
    this.paymentService.getInconsistentPayments(this.hash, page).subscribe(
      {
        next: data => {
          this.validData =  data.ok!;
          this.payments = data.body!.data;
          this.totalPayments = data.body.total;
        },
        error: err => {
          console.log(err);
          this.validData = false;
          this.errorMessage = err.error.message;
        },
        complete: () => {

        }
      }
    );
  }



  public paginatorChange(event: any) {
    switch (this.selectedValue) {
      case "c":
        this.getConsistents(event.page);

      break;
      case "i":
        this.getInconsistents(event.page);

      break;
    }
  }

  public handleDateRange(dateRange: DateRange) {
    this.filterActive = true;
    switch (this.selectedValue) {
      case "c":
        this.paymentService.getConsistentPaymentsByDateRange(this.hash, dateRange).subscribe(
          data => {
            this.payments = data.body;
            this.totalPayments = data.body.length;
          }
        );

      break;
      case "i":
        this.paymentService.getInconsistentPaymentsByDateRange(this.hash, dateRange).subscribe(
          data => {
            this.payments = data.body;
            this.totalPayments = data.body.length;
          }
        );

      break;
    }
  }

  public handleQuitFilter() {
    switch (this.selectedValue) {
      case "c":
        this.getConsistents(this.page);
        this.filterActive = false;
      break;
      case "i":
        this.getInconsistents(this.page);
        this.filterActive = false;
      break;
    }
  }
  
}
