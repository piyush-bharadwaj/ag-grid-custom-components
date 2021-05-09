import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-text',
  template:`<input #inputText type="text" pInputText [(ngModel)]="params.value"/>`,
  styles: ['']
})
export class InputTextComponent implements OnInit {

  @ViewChild('inputText') inputText: any;
  params: any;
  private itFocusTimeoutId;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.itFocusTimeoutId =
      setTimeout(() => {
        this.inputText.nativeElement.focus();
      });
  }

  agInit(params: any): void {
    this.params = params;
    this.params.value = this.params.value ? this.params.value : '';
  }
  public ngOnDestroy() {
    clearTimeout(this.itFocusTimeoutId);
  }
  getValue() {
    return this.inputText.nativeElement.value;
  }
}
