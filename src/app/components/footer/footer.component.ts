import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(private _dataService: DataService) {}

  title: string;

  ngOnInit() {
    this.title = this._dataService.footerText;
  }

}
