import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() Name: string;
  @Input() Age: number;
  active: boolean;

  constructor() {
  }

  ngOnInit() {
    this.active = false;
  }

  onClick() {
    if (!this.active) {
      this.active = true;

    }
  }
}
