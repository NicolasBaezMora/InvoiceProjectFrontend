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

  public data: WrapperResponse<ResponseData<PaymentDTO[]>> = {
    ok: true,
    body: {
      total: 0,
      data: [],
      totalPages: 0,
      currentPage: 0
    },
    message: undefined
  };

  public errorMessage: string = "";

  private page: number = 0;


  constructor(
    private paymentService: PaymentService
  ) {

  }


  ngOnInit(): void {
    this.getConsistent(this.hash, this.page);
  }

  public getConsistent(hash: string, page: number) {

    this.paymentService.getConsistentPayments(hash, page).subscribe(
      {
        next: data => {
          this.data = data;
        },
        error: err => {
          console.log(err);
          this.data.ok = false;
          this.errorMessage = err.error.message;
        
        },
        complete: () => {

        }
      }
    );
  }


  public paginatorChange(event: any) {
    this.getConsistent(this.hash, event.page);
  }
  
}
