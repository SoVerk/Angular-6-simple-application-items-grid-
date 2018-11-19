import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ItemComponent} from '../item/item.component';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {
  Data: any;
  Items: any;
  selectedItem: ItemComponent[] = new Array();

  constructor(private myHttp: HttpClient) {
  }

  ngOnInit() {
    this.myHttp.get('https://ssdev.superagent.ru/TestApp/Values/GetWithParent').subscribe((result) => {
      this.Data = result;
      let Items = new Array();
      this.Data.forEach(function (item) {
        let arr = item.skus;
        Items.push(item);
      });
      this.Items = Items;
    });
  }

  onSelect(item: ItemComponent): void {
    let index;
    let arr = this.selectedItem.filter(function (good, i) {
      if (good === item) {
        return index = i;
      }
      return;
    });
    if (!arr.length) {
      this.selectedItem.push(item);
      item.active = true;
    } else {
      this.selectedItem.splice(index, 1);
      item.active = false;
    }
  }

  isSelect(item) {
    return item.active;
  }

  toBucket() {
    this.removeSelected(this.selectedItem, this.Items);
  }

  removeSelected(remColl, commonColl) {
    remColl.forEach(function (item) {
      let remove = item;
      commonColl.forEach(function (item, i) {
        let arr = item.skus;
        arr.forEach(function (item, index) {
          if (item === remove) {
            arr.splice(index, 1);
          }
        });
      });
    });
  }
}
