import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, DoCheck {

  @Input() repositories: Repo[] = [];
  constructor() { }

  ngOnInit() {

  }

  ngDoCheck() {

  }

  toggleMyBlock(rep) {
      rep.myList = !rep.myList;
  }
}
