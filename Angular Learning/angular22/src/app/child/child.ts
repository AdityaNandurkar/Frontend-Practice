import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  // @Input() itemValue: string = "";
  // @Output() dataEmitter = new EventEmitter<string>();
  itemValue = input<string>();
  dataEmitter = output<string>();

  sendData(value: string) {
    console.log(value);
    this.dataEmitter.emit(value);
  }
}

