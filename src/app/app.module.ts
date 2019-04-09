import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { DataService } from './services/data.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
