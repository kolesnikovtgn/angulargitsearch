import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoriesService } from './repositories.service';
import { Repo } from './repo';

const mockData = [
  {id: 1, name: 'jsproject', description: 'my project',
    language: 'javascript', stargazers_count: 123,
    searchLanguage: ['javascript'], myList: false,
    langSearch: 'javascript', querySearch: 'cms'},
  {id: 2, name: 'rubyproject', description: 'my project 1',
    language: 'ruby', stargazers_count: 321,
    searchLanguage: ['ruby'], myList: true,
    langSearch: 'ruby', querySearch: 'cms'},
  {id: 3, name: 'c++project', description: 'my project 2',
    language: 'c++', stargazers_count: 213,
    searchLanguage: ['c++'], myList: false,
    langSearch: 'c++', querySearch: 'cms'},
] as Repo[];

describe('RepositoriesService', () => {
   let service: RepositoriesService;

   beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule, HttpClientModule
    ],
    providers: [ RepositoriesService, HttpClient]
  }));

  beforeEach(inject([RepositoriesService], s => {
    service = s;
  }));

  it('should be created', () => {
    const myService: RepositoriesService = TestBed.get(RepositoriesService);
    expect(myService).toBeTruthy();
  });

  // const apiUrl = 'https://api.github.com/search/repositories?q=cms+language:javascript';

  // describe('getHeroes', () => {
  //
  //   it('should return mock repositories', () => {
  //     service.getRepo().subscribe(
  //       repos => expect(repos.length).toEqual(this.mockHeroes.length),
  //       fail
  //     );
  //     req.flush(this.mockHeroes);
  //   });
  // });

});


