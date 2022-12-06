import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-auth-inquire-wallet',
  templateUrl: './dialog-auth-inquire-wallet.component.html',
  styleUrls: ['./dialog-auth-inquire-wallet.component.scss']
})
export class DialogAuthInquireWalletComponent {


  
  @Input()
  public display: boolean = false;
}
