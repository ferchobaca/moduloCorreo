import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmailModModule} from "./email-mod/email-mod.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
