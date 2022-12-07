import { StateDialog } from './../../interfaces/StateDialog';
import { Component } from '@angular/core';
import { InquireView } from '../../interfaces/InquireView';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent {

  public inquires: InquireView[] = [
    {
      imgUrl: "../../../../assets/consulta-pagos.png",
      textCard: "Consulta de pagos procesados",
      inquireType: "payments"
    },
    {
      imgUrl: "../../../../assets/consulta-cartera.jpg",
      textCard: "Consulta de balance de la cartera",
      inquireType: "wallet"
    },
    {
      imgUrl: "../../../../assets/consulta-comisiones.png",
      textCard: "Consulta de comisiones",
      inquireType: "commissions"
    }
  ];

  public display: boolean = false;

  public inquireType: string = "";

  constructor() {

  }

  public openDialogAuth(event: string) {
    this.inquireType = event;
    this.display = true;
  }

  public resetDialogState(event: StateDialog) {
    this.inquireType = event.inquireType;
    this.display = event.display;
  }


}
