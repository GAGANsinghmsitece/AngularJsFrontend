import { Component, Inject, inject, Input } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private router: Router) { }
  @Input() message: string = this.data.message;
  @Input() url: string | null | undefined = this.data.url;

  snackBarRef = inject(MatSnackBarRef);

  closeSnackBar() {
    this.snackBarRef.dismissWithAction();
    if (this.url !== null && this.url !== undefined) {
      this.router.navigate([this.url]);
    }
  }
}
