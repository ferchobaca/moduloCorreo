import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailCompComponent } from './email-comp/email-comp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    EmailCompComponent
  ],
  exports: [
    EmailCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class EmailModModule { }
