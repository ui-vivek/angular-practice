import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-temp-style',
  template: `
    <p class="in_temp_style">
      inline-temp-style works!
    </p>
  `,
  styles: [
    `
    .in_temp_style{
      color:gray
    }
    `
  ]
})
export class InlineTempStyleComponent {

}
