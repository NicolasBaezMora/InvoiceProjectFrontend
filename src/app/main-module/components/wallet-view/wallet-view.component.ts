import { WrapperResponse } from './../../interfaces/WrapperResponse';
import { WalletDTO } from './../../interfaces/WalletDTO';
import { Component, Input, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss']
})
export class WalletViewComponent implements OnInit {
 
  @Input()
  public email: string = "";

  @Input()
  public hash: string = "";

  public errorMessage: string = "";

  public typeBalance: string = "";

  public nameClient: string = "";

  public balance: number = 0;

  public validData: boolean = true;

  constructor(
    private walletService: WalletService
  ) {
  }
 
  ngOnInit(): void {
    this.walletService.getWallet(this.email, this.hash).subscribe(
      {
        next: data => {
          this.validData = data.ok!;
          this.nameClient = data.body.clientDTO!.name;
          this.balance = data.body.balance;
          if (this.balance >= 0)
            this.typeBalance = "POSITIVO";
          else
            this.typeBalance = "NEGATIVO";
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




}
