import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Repo } from '../repo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, DoCheck {

  @Input() repositories: Repo[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  ngDoCheck() {
  }

  toggleMyBlock(rep) {
      // rep.myList = !rep.myList;
    this.dataService.toggleRepo(rep);
  }
}
