import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { DataService } from '../data.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {

  repositories: Repo[];

  constructor(private dataService: DataService) { }
  langArray: string[] = ['Javascript', 'css', 'html',
    'php', 'ruby', 'c++', 'python', 'c#',
    'java', 'go', 'haskel'];

  ngOnInit() {
    this.dataService.getData();
  }
}
