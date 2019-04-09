import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// tslint:disable-next-line: variable-name
  private _footerText: string;

  get footerText(): string {
    return this._footerText;
  }

  set footerText(text: string) {
    this._footerText = text;
  }
}
