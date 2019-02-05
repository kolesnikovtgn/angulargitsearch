import {Component, OnInit, DoCheck} from '@angular/core';
import { ListComponent } from '../list/list.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements DoCheck {
  type = 'Type';
  language: string;
  query: string;
  errorSearch = false;

  constructor(private dataService: DataService) { }
  langArray: string[] = ['javascript', 'css', 'html',
    'php', 'ruby', 'c++', 'python', 'c#',
    'java', 'go', 'haskel'];

  ngDoCheck() {
    this.checkForError();
  }

  clickSearch() {
    this.dataService.getData(this.type, this.language, this.query);
  }
  checkForError() {
    ( this.dataService.error !== '' ) ? this.errorSearch = true : this.errorSearch = false;
  }
}
