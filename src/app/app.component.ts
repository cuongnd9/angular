import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      [ngClass]="{
        container: true,
        'light-theme': isLightTheme,
        'dark-theme': !isLightTheme
      }"
    >
      <app-title [title]="title" (buttonClick)="onToggleTheme()"></app-title>
      <div><button (click)="onToggleImage()">Toggle Image</button></div>
      <img
        [hidden]="isHiddenImage"
        alt="logo"
        [style.width.px]="imageWidth"
        src="{{ reactImg }}"
      />
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLightTheme = true;
  title = 'How @Cuongw learn Angular?';
  isHiddenImage = true;
  reactImg =
    'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png';
  imageWidth = 200;

  onToggleImage() {
    this.isHiddenImage = !this.isHiddenImage;
  }

  onToggleTheme() {
    this.isLightTheme = !this.isLightTheme;
  }
}
