import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  name: 'Language';
  langArray: string[] = ['Language', 'Javascript', 'css', 'html',
    'php', 'ruby', 'c++', 'python', 'c#',
    'java', 'go', 'haskel'];
  ngOnInit() {
  }
}
