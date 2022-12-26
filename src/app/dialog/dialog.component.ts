import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { DialogErComponent } from '../dialog-er/dialog-er.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(private dialog: MatDialog) { }
  openDialog() {
    let dialogRef = this.dialog.open(DialogErComponent, { data: { name: 'Ersin Aydin' } });
    dialogRef.afterClosed().subscribe(() => console.log("Ersin Aydin"))
  }
}
