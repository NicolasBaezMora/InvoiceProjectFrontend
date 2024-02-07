import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { DateRange } from '../../interfaces/DateRange';
import { Accordion } from 'primeng/accordion';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent {

  @Output() 
  public onDateRangeSelected: EventEmitter<DateRange> = new EventEmitter();

  @Output()
  public onQuitFilter: EventEmitter<void> = new EventEmitter();

  public showAlertMessage: Boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}


  public form: FormGroup = this.formBuilder.group({
    dateStart: [
      "",
      [Validators.required]
    ],
    dateEnd: [
      "",
      [Validators.required]
    ]
  });


  public onSubmitDateRange() {
    if (this.form.invalid || Date.parse(this.form.get("dateStart")?.value) > Date.parse(this.form.get("dateEnd")?.value)) {
      this.showAlertMessage = true;
      return;
    }
    this.showAlertMessage = false;
    const dateRange: DateRange = {
      dateStart: this.form.get("dateStart")?.value,
      dateEnd: this.form.get("dateEnd")?.value
    }
    return this.onDateRangeSelected.emit(dateRange);
  }


  public resetAccordionState() {
    this.form.reset();
  }

  public quitFilter() {
    this.resetAccordionState();
    this.onQuitFilter.emit();
  }


}
