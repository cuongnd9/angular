import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  isLightTheme = true;
  withUnderline = true;
  fontWeight = 'lighter';
  footerText = 'Angular is not awesome!';

// tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.footerText = this.footerText;
  }

  onClick() {
    this.buttonClick.emit();
    this.isLightTheme = !this.isLightTheme;
  }
}
