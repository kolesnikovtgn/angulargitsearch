import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form should be valid', async(() => {
    component.query = 'text';
    component.language = 'text';
    component.type = 'text';
    expect(component.query).toBeTruthy();
    expect(component.language).toBeTruthy();
    expect(component.type ).toBeTruthy();
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
