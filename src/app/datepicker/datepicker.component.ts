import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  minDate = new Date();
  maxDate = new Date("Jan 05, 2023");
  dateFilter = (date: any) => {
    const day = date.getDay();
    return day != 0;
  }

}
