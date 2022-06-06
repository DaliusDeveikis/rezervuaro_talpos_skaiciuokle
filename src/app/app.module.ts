import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LietausTalposSkaiciuokleComponent } from './components/lietaus-talpos-skaiciuokle/lietaus-talpos-skaiciuokle.component';

@NgModule({
  declarations: [
    AppComponent,
    LietausTalposSkaiciuokleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
