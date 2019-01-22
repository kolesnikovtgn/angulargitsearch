import { Component, OnInit } from '@angular/core';
import { Repo } from './repo';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RepositoriesService]
})
export class AppComponent implements OnInit {
  repos: Repo[] = [];
  constructor(private repositoriesService: RepositoriesService) {}
  ngOnInit() {
    this.repositoriesService.getRepo().subscribe(data => { this.repos = data; console.log(this.repos); });
  }
}
