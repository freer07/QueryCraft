import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryRankComponent } from './query-rank.component';

describe('QueryRankComponent', () => {
  let component: QueryRankComponent;
  let fixture: ComponentFixture<QueryRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
