import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  show = false;
  getData() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
