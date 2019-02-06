import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../repo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() repositories: Repo[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  toggleMyBlock(rep) {
    this.dataService.toggleRepo(rep);
  }
}
