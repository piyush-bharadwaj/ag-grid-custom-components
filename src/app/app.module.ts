import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { PlannerComponent } from './planner/planner.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputTextComponent } from './components/input-text/input-text.component';


@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    DatePickerComponent,
    PlannerComponent,
    InputNumberComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([TextAreaComponent,DatePickerComponent,InputTextComponent]),
    CalendarModule,
    TabViewModule,
    InputTextareaModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
