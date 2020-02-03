import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondReactiveFormComponent } from './second-reactive-form/second-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
		FormsModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
