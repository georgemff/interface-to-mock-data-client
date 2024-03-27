import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./api/api.service";
import {CodeEditorModule} from "@ngstack/code-editor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodeEditorModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
