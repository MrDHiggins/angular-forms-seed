import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBasicsComponent } from './components/form-basics/form-basics.component';
import {FormsModule} from '@angular/forms';
import { FormPosterService } from './services/form-poster.service';

@NgModule({
  declarations: [
    AppComponent,
    FormBasicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
