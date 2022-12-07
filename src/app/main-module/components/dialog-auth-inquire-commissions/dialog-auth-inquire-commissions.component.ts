import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateDialog } from '../../interfaces/StateDialog';

@Component({
  selector: 'app-dialog-auth-inquire-commissions',
  templateUrl: './dialog-auth-inquire-commissions.component.html',
  styleUrls: ['./dialog-auth-inquire-commissions.component.scss']
})
export class DialogAuthInquireCommissionsComponent {


  public form: FormGroup = this.formBuilder.group(
    {
      hash: [
        null,
        [
          Validators.required
        ]
      ]
    }
  );

  @Input()
  public display: boolean = false;

  public hash: string = "";

  public progressSpinner: boolean = false;

  public showTable: boolean = false;

  @Output()
  public onDialogState: EventEmitter<StateDialog> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  public hideDialog() {
    this.onDialogState.emit({inquireType: "", display: false});
    this.showTable = false;
  }

  public loadData() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.hash = this.form.get("hash")?.value;
    this.showTable = true;
  }
  
  public fieldNotValid(field: string): boolean | null {
    return (this.form.controls[field].errors && this.form.controls[field].touched);
  }


}
