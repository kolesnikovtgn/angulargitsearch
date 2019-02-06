import { Component, OnInit, Input } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { LineComponent } from '../line/line.component';
import { DataService } from '../data.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  repos: Repo[] = [];
  condition = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getRepos().subscribe(data => this.repos = data);
  }
}
