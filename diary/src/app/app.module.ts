import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { InfoComponent } from './info/info.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    InfoComponent,
    DescriptionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
