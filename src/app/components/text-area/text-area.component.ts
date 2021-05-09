import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `  
   <textarea #textarea  [(ngModel)]="params.value" [rows]="4"  pInputTextarea style="width: 100%" ></textarea>
  `
})
export class TextAreaComponent implements OnInit {
  @ViewChild('textarea') textarea: any;
  params: any;
  private taFocusTimeoutId;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.taFocusTimeoutId =
      setTimeout(() => {
        this.textarea.nativeElement.focus();
      });
  }

  agInit(params: any): void {
    this.params = params;
    this.params.value = this.params.value ? this.params.value : '';
  }
  public ngOnDestroy() {
    clearTimeout(this.taFocusTimeoutId);
  }
  getValue() {
    return this.textarea.nativeElement.value;
  }

}
