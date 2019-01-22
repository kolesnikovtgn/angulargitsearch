import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepo(): Observable<Repo[]> {
    return this.http.get('https://api.github.com/search/repositories?q=cms+language:javascript').pipe(
      map(data => {
        const repoList = data['items'];
        return repoList.map((repo: any) => {
          return { id: repo.id, name: repo.name, description: repo.description,
            language: repo.language, stargazers_count: repo.stargazers_count, searchLanguage: repo.searchLanguage };
        });
      }),
    );
  }
}
