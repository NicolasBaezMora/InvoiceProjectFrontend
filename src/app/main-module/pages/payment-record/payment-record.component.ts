import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-payment-record',
  templateUrl: './payment-record.component.html',
  styleUrls: ['./payment-record.component.scss']
})
export class PaymentRecordComponent {
  vis: boolean = false;
  dialog() {
    this.vis = true;
  }

  public formFile: FormGroup = this.formBuilder.group(
    {
      hash: [
        null,
        [
          Validators.required
        ]
      ],
      file: [
        null,
        [
          Validators.required,
          //this.requiredFileType
        ]
      ]
    }
  );

  private file: File | undefined;

  public progressSpinner: boolean = false;
  public disableButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService
  ) {

  }

  public fieldNotValid(field: string): boolean | null {
    return (this.formFile.controls[field].errors && this.formFile.controls[field].touched);
  }

  public loadData() {
    if (this.formFile.invalid) {
      this.formFile.markAllAsTouched();
      return;
    }

    this.progressSpinner = true;
    this.disableButton = true;

    this.fileService.loadFile(
      this.formFile.get("hash")?.value,
      this.file!
    ).subscribe(
      {
        next: data => {
          Swal.fire({
            title: "Datos procesados",
            text: `Pagos consistentes: ${data.body!.consistent}, Pagos inconsistentes: ${data.body!.inconsistent}`,
            confirmButtonColor: "#2B8B4B"
          });
          this.reset();
          console.log(data);
        },
        error: err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error',
            text: err.error.message,
            confirmButtonColor: "#2B8B4B"
          })
          this.reset();
        },
        complete: () => {
          this.reset();
        }
      }
    );
  }

  private reset() {
    this.progressSpinner = false;
    this.disableButton = false;
    this.formFile.reset();
  }

  public requiredFileType(control: AbstractControl) {
    if (control.value) {
      const nameFile = control.value.split("\\")[control.value.split("\\").length - 1];
      const typeFile = nameFile.split(".")[nameFile.split(".").length - 1];
      if (typeFile != "csv") return { invalidType: true };
    }
    return null;
  }


  public getFile(event: any) {
    this.file = event.target.files[0];

  }
}

