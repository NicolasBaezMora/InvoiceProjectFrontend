import Swal from 'sweetalert2';
import { State } from './../../../../interfaces/State';
import { WalletDTO } from './../../../../interfaces/WalletDTO';
import { InvoiceService } from 'src/app/main-module/services/invoice.service';
import { WalletService } from './../../../../services/wallet.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-invoice-card',
  templateUrl: './add-invoice-card.component.html',
  styleUrls: ['./add-invoice-card.component.scss']
})
export class AddInvoiceCardComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    value: [
      "",
      [Validators.required]
    ],
    date: [
      "",
      [Validators.required]
    ],
    id: [
      "",
      [Validators.required]
    ]
  });

  @Output()
  public added: EventEmitter<boolean> = new EventEmitter();

  public wallets: WalletDTO[] = [];

  public states: State[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private walletService: WalletService,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.walletService.getAllWallets().subscribe(
      data => this.wallets = data.body
    );
    this.invoiceService.getStateInvoices().subscribe(
      data => this.states = data.body
    );
  }

  public fieldNotValid(field: string): boolean | null {
    return (this.form.controls[field].errors && this.form.controls[field].touched);
  }

  public fieldNotLessCero() {
    return (this.form.get("value")?.value < 0 && this.form.controls["value"].touched);
  }

  public add() {
    if (this.form.invalid || this.form.get("value")?.value < 0) {
      this.form.markAllAsTouched();
      return;
    }
    const value: number = this.form.get("value")?.value;
    const date: string = this.form.get("date")?.value;
    const walletId: number = this.form.get("id")?.value;
    const stateId: number = 51;
    this.invoiceService.createInvoice(
      value,
      date,
      walletId,
      stateId
    ).subscribe({
      next: data => {
        this.added.emit(true);
        Swal.fire({
          icon: "success",
          title: "Factura generada correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        this.form.reset();
      },
      error: err => {
        this.added.emit(true);
        Swal.fire({
          icon: "error",
          title: "Ocurrio un error",
          text: err.error.message,
          showConfirmButton: false,
          timer: 1500
        });
        this.form.reset();
      }
    });
  }

}
