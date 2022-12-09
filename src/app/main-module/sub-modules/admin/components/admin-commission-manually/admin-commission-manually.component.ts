import { BranchOfficeService } from './../../../../services/branch-office.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'src/app/main-module/services/commission.service';
import { BranchOfficeDTO } from 'src/app/main-module/interfaces/BranchOfficeDTO';

@Component({
  selector: 'app-admin-commission-manually',
  templateUrl: './admin-commission-manually.component.html',
  styleUrls: ['./admin-commission-manually.component.scss']
})
export class AdminCommissionManuallyComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group(
    {
      id: [
        "",
        [Validators.required]
      ],
      dateStart: [
        "",
        [Validators.required]
      ],
      dateEnd: [
        "",
        [Validators.required]
      ]
    }
  );

  public disableButton: boolean = false;

  public branchOffices: BranchOfficeDTO[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private commissionService: CommissionService,
    private branchOfficeService: BranchOfficeService
  ) {

  }

  ngOnInit(): void {
    this.branchOfficeService.getBranchOffices().subscribe(
      data => this.branchOffices = data.body
    );
  }

  
  public adminOut() {
    window.localStorage.clear();
    this.router.navigate(["/admin"]);
  }

  public fieldNotValid(field: string) {
    return (this.form.controls[field].errors && this.form.controls[field].touched);
  }

  public loadData() {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    if (Date.parse(this.form.get("dateStart")?.value) > Date.parse(this.form.get("dateEnd")?.value)) {
      Swal.fire({
        icon: "info",
        text: "Revisa el orden de las fechas",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.disableButton = true;
    this.commissionService.generateCommissionManually(
      this.form.get("id")?.value,
      this.form.get("dateStart")?.value,
      this.form.get("dateEnd")?.value
    ).subscribe(
      {
        next: data => {
          this.disableButton = false;
          this.form.reset();
          Swal.fire({
            title: "Comisión generada correctamente",
            text: "Revisa en el panel de consultas",
            confirmButtonColor: "#2B8B4B"
          });
        },
        error: err => {
          this.disableButton = false;
          this.form.reset();
          Swal.fire({
            icon: "error",
            title: "Ocurrio un error",
            timer: 1200,
            showConfirmButton: false
          });
        },
        complete: () => {

        }
      }
    );
  }

}
