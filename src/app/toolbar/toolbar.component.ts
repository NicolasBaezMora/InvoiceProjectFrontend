import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }


  public goHome() {
    this.router.navigate(["home"]);
  }
  


}
