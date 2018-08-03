import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BallenaComponent } from './ballena/ballena.component';
import { DelfinComponent } from './delfin/delfin.component';
import { PezComponent } from './pez/pez.component';


 
@NgModule({
  declarations: [
    AppComponent,
    BallenaComponent,
    DelfinComponent,
    PezComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
