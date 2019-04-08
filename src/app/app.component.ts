import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title></app-title>
    <img alt='logo' [style.width.px]='imageWidth' src={{angularImg}} />
    <img alt='logo' [style.width.px]='imageWidth' [src]='reactImg' />
    <img alt='logo' [style.width.px]='imageWidth' [src]='vueImg' />
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularImg = 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-svg-vector.svg';
  reactImg = 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png';
  vueImg = 'https://vuejs.org/images/logo.png';

  imageWidth = 200;
}
