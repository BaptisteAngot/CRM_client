import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-event',
  templateUrl: 'dialog-event.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogEvent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
  }
}
