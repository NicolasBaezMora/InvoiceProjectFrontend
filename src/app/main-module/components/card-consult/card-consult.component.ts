import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-consult',
  templateUrl: './card-consult.component.html',
  styleUrls: ['./card-consult.component.scss']
})
export class CardConsultComponent {

  @Input()
  public imgUrl: string = "";

  @Input()
  public textCard: string = "";

  @Input()
  public inquireType: string = '';

  @Output()
  public onIunputInquire: EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  public openInquireDialog() {
    this.onIunputInquire.emit(this.inquireType);
  }

}
