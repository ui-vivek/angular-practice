import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  array=[1,2,3,4,5];
  object={
    fname:'vivek',
    lname:'singh',
    number:111,
    age : 50
  }
}
