import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RepositoriesService } from './repositories.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  repos: Observable<Repo[]>;

  constructor(private http: HttpClient, private repositoriesService: RepositoriesService) { }

  getData(): void {
    this.repositoriesService.getRepo().subscribe(data => this.repos = data);
  }

  getRepos(): Observable<Repo[]> {
    return this.repos;
  }
}
