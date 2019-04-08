import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1
      [class.with-underline]="withUnderline"
      [ngStyle]="{ color: color, fontWeight: fontWeight }"
    >
      {{ title }}
    </h1>
    <button
      (click)="onClick()"
      [ngClass]="{
        container: true,
        'btn-light': !isLightTheme,
        'btn-dark': isLightTheme
      }"
    >
      {{ isLightTheme ? 'Dark' : 'Light' }} Theme
    </button>
  `,
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  isLightTheme = true;
  withUnderline = true;
  fontWeight = 'lighter';

  onClick() {
    this.buttonClick.emit();
    this.isLightTheme = !this.isLightTheme;
  }
}
