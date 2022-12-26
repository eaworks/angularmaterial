import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(private snackbar: MatSnackBar) {

  }

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackbar.open(message, action, { duration: 5000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("Ersin Aydin");
    });
    snackBarRef.onAction().subscribe(() => {
      console.log("Tetiklendi");
    });
  }


}
