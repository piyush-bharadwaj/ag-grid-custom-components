import { Component, OnInit } from '@angular/core';
import { columnDefinition } from './grid-config';
import { TextAreaComponent } from '../components/text-area/text-area.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { InputNumberComponent } from '../components/input-number/input-number.component';
import { InputTextComponent } from '../components/input-text/input-text.component';
import { PlanDataService } from '../shared/plan-data.service';
import { Plan } from '../shared/plan';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  gridApi: any;
  opPlans:Plan[] = [];
  columnDefs = columnDefinition;

  constructor(private planDataService: PlanDataService) {
  }

  ngOnInit() {
    this.getOpPlans();
  }
  //fetch grid records
  getOpPlans(): void {
    this.planDataService.getOpPlans()
      .subscribe(plans => (this.opPlans = plans)
      );

  }

  gridOptions = {
    frameworkComponents: {
      datePickerComponent: DatePickerComponent,
      textAreaComponent: TextAreaComponent,
      inputTextComponent: InputTextComponent
    }
  };
  onGridReady(params) {
    this.gridApi = params.api;
  }
}