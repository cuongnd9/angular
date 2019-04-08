import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 [class.with-underline]='withUnderline' [ngStyle]='{color: color,fontWeight: fontWeight}'>How Cuongw learn Angular?</h1>
  `,
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  withUnderline = true;
  color = 'tomato';
  fontWeight = 'lighter';
}
