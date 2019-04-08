import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
      <app-title></app-title>
      <div><button (click)='onToggle()'>Toggle Image</button></div>
      <img [hidden]='isHiddenImage' alt='logo' [style.width.px]='imageWidth' src={{reactImg}} />
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHiddenImage = true;

  reactImg = 'https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png';

  imageWidth = 200;

  onToggle() {
    this.isHiddenImage = !this.isHiddenImage;
  }
}
