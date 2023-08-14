import { Component } from '@angular/core';

let arr=[1,2,3,4,5]
function fn(){
  return 55;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  fun=fn;
  num= 1 ;
  title = 'Angular';
  name= 'singh'
}
