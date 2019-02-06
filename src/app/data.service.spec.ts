import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoriesService } from './repositories.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule( {
    imports: [
      HttpClientTestingModule
    ],
    providers: [DataService, RepositoriesService]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
