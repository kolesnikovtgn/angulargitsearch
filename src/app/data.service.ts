import { Injectable } from '@angular/core';
import { Repo } from './repo';
import {BehaviorSubject, Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RepositoriesService } from './repositories.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private repos: BehaviorSubject<Repo[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient, private repositoriesService: RepositoriesService) { }

  getData(type, language, query): any {
    this.repositoriesService.getRepo(type, language, query).subscribe((data: Repo[]) => this.repos.next(data));
  }

  getRepos(): Observable<Repo[]> {
    return this.repos.asObservable();
  }

  toggleRepo(repo: Repo): void {
    repo.myList = !repo.myList;
    this.repos.next(this.repos.getValue());
  }
}
