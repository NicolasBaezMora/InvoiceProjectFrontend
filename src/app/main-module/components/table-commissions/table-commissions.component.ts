import { Component, Input, OnInit } from '@angular/core';
import { CommissionDTO } from '../../interfaces/CommissionDTO';
import { CommissionService } from '../../services/commission.service';

@Component({
  selector: 'app-table-commissions',
  templateUrl: './table-commissions.component.html',
  styleUrls: ['./table-commissions.component.scss']
})
export class TableCommissionsComponent implements OnInit {

  @Input()
  public hash: string = "";

  public validData: boolean = true;

  public errorMessage: string = "";

  private page: number = 0;

  public commissions: CommissionDTO[] = [];

  public totalCommissions: number = 0;

  constructor(
    private commissionService: CommissionService
  ) {

  }

  ngOnInit(): void {
    this.getCommissions(this.page);
  }

  public getCommissions(page: number) {
    this.commissionService.getCommissions(this.hash, page).subscribe(
      {
        next: data => {
          this.validData = data.ok!;
          this.commissions = data.body!.data;
          this.totalCommissions = data.body.total;
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


  public paginatorChange(event: any) {
    this.getCommissions(event.page);
  }
}
