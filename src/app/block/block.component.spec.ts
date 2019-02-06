import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockComponent ],
      imports: [ HttpClientModule ],
      providers: [ DataService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
