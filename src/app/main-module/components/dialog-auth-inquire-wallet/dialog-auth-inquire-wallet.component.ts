import { WrapperResponse } from './../../interfaces/WrapperResponse';
import { WalletDTO } from './../../interfaces/WalletDTO';
import { WalletService } from './../../services/wallet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StateDialog } from '../../interfaces/StateDialog';

@Component({
  selector: 'app-dialog-auth-inquire-wallet',
  templateUrl: './dialog-auth-inquire-wallet.component.html',
  styleUrls: ['./dialog-auth-inquire-wallet.component.scss']
})
export class DialogAuthInquireWalletComponent {

  @Input()
  public display: boolean = false;

  public email: string = "";

  public hash: string = "";

  public showWallet: boolean = false;

  @Output()
  public onDialogState: EventEmitter<StateDialog> = new EventEmitter();


  public form: FormGroup = this.formBuilder.group(
    {
      email: [
        null,
        [
          Validators.required
        ]
      ],
      hash: [
        null,
        [
          Validators.required
        ]
      ]
    }
  );

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }


  public hideDialog() {
    this.onDialogState.emit({ inquireType: "", display: false });
    this.showWallet = false;
  }


  public loadData() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.email = this.form.get("email")?.value;
    this.hash = this.form.get("hash")?.value;
    this.showWallet = true;
  }

  public fieldNotValid(field: string): boolean | undefined {
    return (this.form.get(field)?.invalid && this.form.get(field)?.touched);
  }


}
