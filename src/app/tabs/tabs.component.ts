import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  logChange(index: number | null) {
    console.log(index);
  }

}
