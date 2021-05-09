import { Component, OnInit } from '@angular/core';
import {columnDefinition } from './grid-config';
import {TextAreaComponent} from '../components/text-area/text-area.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { InputNumberComponent } from '../components/input-number/input-number.component';
import { InputTextComponent } from '../components/input-text/input-text.component';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  gridApi: any;

  rowData = [
    {
      comment:"plan started",
      date: "05/05/2021",
      message:"",
      $$Value: 10,
      cmpValue: 5,
      IMPSValue: 8
    },
    {
      comment:"",
      date: "06/05/2021",
      message:"",
      $$Value: 10,
      cmpValue: 5,
      IMPSValue: 5
    },
    {
      comment:"",
      date: "04/05/2021",
      message:"",
      $$Value: 30,
      cmpValue: 15,
      IMPSValue: 1
    }
  ];
  columnDefs = columnDefinition;
  constructor() {}

  ngOnInit() {}

  gridOptions = {
    frameworkComponents: {
      datePickerComponent: DatePickerComponent,
      textAreaComponent:TextAreaComponent,
      inputTextComponent: InputTextComponent
    }
  };
  onGridReady(params) {
    this.gridApi = params.api;
  }
}