import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { LineComponent } from '../line/line.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
