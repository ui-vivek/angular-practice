import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() item: string = '';
  @Output() data = new EventEmitter<string>();
  addData(value: string) {
    this.data.emit(value);
  }
}
