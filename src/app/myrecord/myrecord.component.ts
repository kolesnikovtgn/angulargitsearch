import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { LineComponent } from '../line/line.component';
import { filter } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-myrecord',
  templateUrl: './myrecord.component.html',
  styleUrls: ['./myrecord.component.scss']
})
export class MyrecordComponent implements OnInit {
  repos: Repo[] = [];
  condition = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getRepos().subscribe(data => {
      this.repos = data.filter(el => el.myList === true);
      console.log('myList is ', this.repos);
    });
  }
}
