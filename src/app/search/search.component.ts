import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private dataService: DataService) { }
  langArray: string[] = ['Javascript', 'css', 'html',
    'php', 'ruby', 'c++', 'python', 'c#',
    'java', 'go', 'haskel'];

  ngOnInit() {
  }

  clickSearch() {
    this.dataService.getData();
  }
}
