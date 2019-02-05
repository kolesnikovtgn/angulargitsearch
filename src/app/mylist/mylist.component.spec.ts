import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MylistComponent } from './mylist.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('MylistComponent', () => {
  let component: MylistComponent;
  let fixture: ComponentFixture<MylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistComponent ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
