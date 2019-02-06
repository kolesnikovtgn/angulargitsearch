import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../repo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor(private  dataService: DataService) { }

  @Input() repositories: Repo;
  ngOnInit() {
  }

  toggleMyLine(rep) {
    this.dataService.toggleRepo(rep);
  }
}
