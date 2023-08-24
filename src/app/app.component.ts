import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  num = 1;
  title = 'Angular';
  name = 'singh';
  arr = [1, 2, 3, 4, 5];
  fun() {
    return 55;
  }
  data = 50;
  updateData() {
    this.data = Math.floor(Math.random() * (10 - 5) + 5);
  }
}
