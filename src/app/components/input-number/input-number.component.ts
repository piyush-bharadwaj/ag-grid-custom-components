import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-number',
  template: '<p-inputNumber #inputNumber inputId="integeronly" [(ngModel)]="params.value">',
  styles: [``],
})
export class InputNumberComponent implements OnInit {

  @ViewChild('inputNumber') inputNumber: any;
  params: any;
  private inFocusTimeoutId;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.inFocusTimeoutId =
      setTimeout(() => {
        this.inputNumber.nativeElement.focus();
      });
  }

  agInit(params: any): void {
    this.params = params;
    this.params.value = this.params.value ? this.params.value : '';
  }
  public ngOnDestroy() {
    clearTimeout(this.inFocusTimeoutId);
  }
  getValue() {
    return this.inputNumber.nativeElement.value;
  }
}
