import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecordComponent } from './myrecord.component';

describe('MyrecordComponent', () => {
  let component: MyrecordComponent;
  let fixture: ComponentFixture<MyrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
