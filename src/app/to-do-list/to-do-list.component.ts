import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  list: any[] = [];
  getData(item: any) {
    this.list.push({ id: this.list.length, name: item });
  }
  deleteItem(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}
