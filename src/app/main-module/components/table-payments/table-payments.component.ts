import { PaymentService } from './../../services/payment.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WrapperResponse } from '../../interfaces/WrapperResponse';
import { ResponseData } from '../../interfaces/ResponseData';
import { PaymentDTO } from '../../interfaces/PaymentDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.scss']
})
export class TablePaymentsComponent implements OnInit {

  @Input()
  public hash: string = "";

  public validData: boolean = true;

  public errorMessage: string = "";

  private page: number = 0;

  public selectedValue: string = "c";

  public payments: PaymentDTO[] = [];

  public totalPayments: number = 0;

  constructor(
    private paymentService: PaymentService
  ) {

  }

  public switchConsistent() {
    this.page = 0;
    this.getConsistents(this.page);
  }

  public switchInconsistent() {
    this.page = 0;
    this.getInconsistents(this.page);
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
    this.paymentService.getInconsistentPayment(this.hash, page).subscribe(
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
  
}
