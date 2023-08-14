import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent {
  users=[
    {name:'vivek',age:20,tech:['react','java','node','angular']},
    {name:'singh',age:22,tech:['react.js','javascript','node.js','angular.js']},
    {name:'hola',age:30,tech:['ui/ux','python','aws','sass']},
  ]
}
