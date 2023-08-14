import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  isture=true
  change =()=>{
    this.isture==true ? this.isture=false : this.isture=true
  }
}
