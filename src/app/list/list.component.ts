import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { LineComponent } from '../line/line.component';
import { RepositoriesService } from '../repositories.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [RepositoriesService]
})
export class ListComponent implements OnInit {
  repos: Repo[] = [];
  condition = true;

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.repositoriesService.getRepo().subscribe(data => { this.repos = data; console.log(this.repos); });
  }
}
