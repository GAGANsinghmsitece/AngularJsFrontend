import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-heading',
  templateUrl: './form-heading.component.html',
  styleUrls: ['./form-heading.component.scss']
})
export class FormHeadingComponent {
  @Input() heading: string = "";
}
