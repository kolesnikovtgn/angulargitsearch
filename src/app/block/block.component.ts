import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() repositories: Repo[] = [];
  constructor() { }

  ngOnInit() {
  }
}
