import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.css']
})
export class DynamicStyleComponent {
  color='red';
  bgColor='yellow'
  changeC(){
    this.color=='red' ? this.color='green' : this.color='red'
    this.bgColor=='yellow' ? this.bgColor='black' : this.bgColor='yellow'
  }
}
