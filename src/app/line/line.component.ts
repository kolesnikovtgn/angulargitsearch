import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor() { }

  @Input() repositories: Repo[] = [];
  ngOnInit() {
  }

}
