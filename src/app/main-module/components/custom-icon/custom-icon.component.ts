import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent implements OnInit {
  
  @Input()
  public key: string = "";

  public iconStyle: string = "";
  

  ngOnInit(): void {
    switch(this.key) {
      case "F": 
        this.iconStyle = "pi pi-ban"
      break;
      case "T":
        this.iconStyle = "pi pi-check-square";
      break;
    }
  }


}
