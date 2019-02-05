import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RepositoriesService } from './repositories.service';

describe('RepositoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule, HttpClientModule
    ],
    providers: [ RepositoriesService, HttpClient]
  }));

  it('should be created', () => {
    const service: RepositoriesService = TestBed.get(RepositoriesService);
    expect(service).toBeTruthy();
  });
});
