import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any;
  loaded: boolean;
  constructor(
    private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loaded = false;
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        });
  }

  resetUsers() {
    this.items = null;
    this.loaded = true;
  }

}
