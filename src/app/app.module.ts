import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBasicsComponent } from './components/form-basics/form-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBasicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
