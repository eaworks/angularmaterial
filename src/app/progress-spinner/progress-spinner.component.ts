import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  show = false;
  getData() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
