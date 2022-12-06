import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-auth-inquire-commissions',
  templateUrl: './dialog-auth-inquire-commissions.component.html',
  styleUrls: ['./dialog-auth-inquire-commissions.component.scss']
})
export class DialogAuthInquireCommissionsComponent {


  @Input()
  public display: boolean = false;

}
