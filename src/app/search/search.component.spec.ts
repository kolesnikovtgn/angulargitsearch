import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Repo } from '../repo';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let mockPaste: Repo[];
  let dataService: DataService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.search'));
    element  = de.nativeElement;
    dataService = fixture.debugElement.injector.get(DataService);

    mockPaste = [
      { id: 1, name: 'jsproject', description: 'myjsproject', language: 'javascript',
        stargazers_count: 123, searchLanguage: ['javascript'],
        myList: false, langSearch: 'javascript', querySearch: 'cms' }];

    spy = spyOn(dataService, 'getData')
      .and.returnValue(Promise.resolve(mockPaste));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should still not show repositories after component initialized', () => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(false, 'getData should be called');
  });

  // it('should show the search after getData promise resolves', async() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     expect(component.clickSearch()).toEqual(jasmine.objectContaining(mockPaste));
  //   });
  // });

  it('form should be valid', async(() => {
    component.query = 'text';
    component.language = 'text';
    component.type = 'text';
    expect(component.query).toEqual('text');
    expect(component.language).toEqual('text');
    expect(component.type ).toEqual('text');
  })
  );

  it('form should be invalid', async(() => {
      component.query = '';
      component.language = '';
      component.type = '';
      expect(component.query).toBeFalsy();
      expect(component.language).toBeFalsy();
      expect(component.type ).toBeFalsy();
    })
  );

});
