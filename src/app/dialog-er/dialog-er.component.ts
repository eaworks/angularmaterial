import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-er',
  templateUrl: './dialog-er.component.html',
  styleUrls: ['./dialog-er.component.scss']
})
export class DialogErComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {

  }
}
