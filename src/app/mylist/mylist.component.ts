import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Repo } from '../repo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  repositories: Repo[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getRepos().subscribe(data => this.repositories = data);
  }

}
