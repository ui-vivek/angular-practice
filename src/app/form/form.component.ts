import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  datas: any = '';
  displayData(formData: NgForm) {
    this.datas = formData;
    console.log(this.datas)
  }
}
